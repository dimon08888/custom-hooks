import { useRef, useState, useCallback } from 'react'

export default function useCounter(initialValue: number) {
  // const [initialValueCopy] = React.useReducer(value => value, initialValue)
  // const initialValueCopy = React.useRef(initialValue).current
  // const initialValueCopy = React.useMemo(() => initialValue, [])
  // const [initialValueCopy] = useState(initialValue)

  const initialValueRef = useRef(initialValue)
  const [value, setValue] = useState(initialValue)

  const increment = useCallback((value?: number) => {
    if (typeof value !== 'undefined') {
      setValue(value)
    } else {
      setValue(value => value + 1)
    }
  }, [])

  const decrement = useCallback((value?: number) => {
    if (typeof value !== 'undefined') {
      setValue(value)
    } else {
      setValue(value => value - 1)
    }
  }, [])

  const reset = useCallback(() => {
    setValue(initialValueRef.current)
  }, [])

  const double = useCallback(() => {
    setValue(value => value * 2)
  }, [])

  const set = useCallback((value: number) => {
    setValue(value)
  }, [])

  return { value, increment, decrement, reset, double, set }
}
