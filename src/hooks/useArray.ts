import { useCallback, useState } from 'react'

export default function useArray<Type>(initialValue: Type[]) {
  const [initialValueCopy] = useState(initialValue)
  const [array, setArray] = useState(initialValue)

  const push = useCallback(
    (value: Type) => setArray(currentArray => [...currentArray, value]),
    [],
  )

  function remove(index: number) {
    // setArray(currentArray => {
    //   const copyArray = currentArray.slice()
    //   copyArray.splice(index, 1)
    //   return copyArray
    // })
    setArray(currentArray => [
      ...currentArray.slice(0, index),
      ...currentArray.slice(index + 1),
    ])
  }

  function update(index: number, value: Type) {
    // setArray(currentArray => {
    //   const copyArray = currentArray.slice()
    //   copyArray[index] = value
    //   return copyArray
    // })
    setArray(currentArray => [
      ...currentArray.slice(0, index),
      value,
      ...currentArray.slice(index + 1),
    ])
  }

  function clear() {
    setArray([])
  }

  function set(arr: Type[]) {
    setArray(arr)
  }

  function reset() {
    setArray(initialValueCopy)
  }

  function filter(func: (value: Type) => boolean) {
    setArray(currentArray => currentArray.filter(func))
  }

  return { array, push, remove, update, clear, set, reset, filter }
}
