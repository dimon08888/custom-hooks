import { useState } from 'react'

export default function useCounter(initialValue: number) {
  // const [initialValueCopy] = React.useReducer(value => value, initialValue)
  // const initialValueCopy = React.useRef(initialValue).current
  // const initialValueCopy = React.useMemo(() => initialValue, [])

  const [initialValueCopy] = useState(initialValue)
  const [value, setValue] = useState(initialValue)

  function increment(value?: number) {
    if (typeof value !== 'undefined') {
      setValue(value)
    } else {
      setValue(value => value + 1)
    }
  }

  function decrement(value?: number) {
    if (typeof value !== 'undefined') {
      setValue(value)
    } else {
      setValue(value => value - 1)
    }
  }

  function reset() {
    setValue(initialValueCopy)
  }

  function double() {
    setValue(value => value * 2)
  }

  function set(value: number) {
    setValue(value)
  }

  return { value, increment, decrement, reset, double, set }
}
