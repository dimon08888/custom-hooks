import { useState, useRef, useCallback } from 'react'

export default function useStateWithHistory<T>(
  initialValue: T | (() => T),
  capacity: number,
) {
  const [value, setValue] = useState(initialValue)

  const historyRef = useRef([value])
  const pointerRef = useRef(0)

  const set = useCallback(
    (newValue: React.SetStateAction<T>) => {
      const resolvedValue = newValue instanceof Function ? newValue(value) : newValue
      historyRef.current.push(resolvedValue)

      while (historyRef.current.length > capacity) {
        historyRef.current.shift()
      }

      pointerRef.current = historyRef.current.length - 1
      setValue(resolvedValue)
    },
    [value, capacity],
  )

  const back = useCallback(() => {
    if (pointerRef.current <= 0) return
    pointerRef.current--
    setValue(historyRef.current[pointerRef.current])
  }, [])

  const forward = useCallback(() => {
    if (pointerRef.current >= historyRef.current.length - 1) return
    pointerRef.current++
    setValue(historyRef.current[pointerRef.current])
  }, [])

  const go = useCallback((index: number) => {
    if (index < 0 || index > historyRef.current.length - 1) return
    pointerRef.current = index
    setValue(historyRef.current[pointerRef.current])
  }, [])

  return [
    value,
    set,
    {
      forward,
      back,
      go,
      history: historyRef.current,
      pointer: pointerRef.current,
    },
  ] as const
}
