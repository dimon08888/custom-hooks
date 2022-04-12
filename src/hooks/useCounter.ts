import { useState } from 'react'

export default function useCounter(initialValue: number) {
  const [value, setValue] = useState(initialValue)

  function incrementValue(value: number) {
    setValue(value => value + 1)
  }

  function decrementValue(value: number) {
    setValue(value => value - 1)
  }

  function resetValue(value: number) {
    setValue(0)
  }

  function doubleValue(value: number) {
    setValue(value => value * 2)
  }

  function set(num: number) {
    setValue(num)
  }

  return { value, incrementValue, decrementValue, resetValue, doubleValue, set }
}
