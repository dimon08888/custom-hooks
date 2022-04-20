import { useRef } from 'react'

export default function useRenderCount(): number {
  const countRef = useRef(0)
  countRef.current++
  return countRef.current
}
