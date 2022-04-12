import { useState } from 'react'

export default function useArray(arr: number[]) {
  const [array, setArray] = useState(arr)

  function addNumber(num: number) {
    setArray(currentArray => [...currentArray, num])
  }

  return { array, addNumber }
}
