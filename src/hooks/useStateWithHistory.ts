// TODO HOMEWORK

import { Type } from 'typescript'
import { useState } from 'react'

export default function useStateWithHistory<Type>(initialValue: Type, capacity: number) {
  const [value, setValue] = useState(initialValue)

  function count() {
    return value
  }

  function setCount() {}

  return [count, setCount, {}]
}
