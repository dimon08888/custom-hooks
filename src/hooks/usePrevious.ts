import { useEffect, useRef } from 'react'

export default function usePrevious<T>(value: T): T | null {
  const currentRef = useRef<T | null>(value)
  const previousRef = useRef<T | null>(null)

  if (currentRef.current !== value) {
    previousRef.current = currentRef.current
    currentRef.current = value
  }

  return previousRef.current

  // const valueRef = useRef<T | null>(null)

  // useEffect(() => {
  //   valueRef.current = value
  // }, [value])

  // return valueRef.current
}
