import { useState, useEffect, /* useMemo, */ useCallback } from 'react'

export default function useLocalStorage<T>(
  key: string,
  initialValue: T | (() => T),
): [T, (newValue: T | ((currentValue: T) => T)) => void, () => void] {
  const [value, setValue] = useState(initialValue)

  // CORRECT. WORKS WITH SERVER SIDE RENDERING (REACT < 18.0.0)
  useEffect(() => {
    try {
      const value = window.localStorage.getItem(key)
      if (value !== null) {
        setValue(JSON.parse(value))
      }
    } catch {}
  }, [key])

  // WRONG. DOES NOT WORK WITH SERVER SIDE RENDERING
  // const [value, setValue] = useState<T>(() => {
  //   const value = window.localStorage.getItem(key)

  //   if (value !== null) {
  //     try {
  //       return JSON.parse(value)
  //     } catch {
  //       return initialValue
  //     }
  //   }

  //   return initialValue
  // })

  useEffect(() => {
    try {
      window.localStorage.setItem(key, JSON.stringify(value))
    } catch {}
  }, [key, value])

  // const removeCounter = useMemo(() => () => window.localStorage.removeItem(key), [key])
  const removeCounter = useCallback(() => {
    try {
      window.localStorage.removeItem(key)
    } catch {}
  }, [key])

  return [value, setValue, removeCounter]
}
