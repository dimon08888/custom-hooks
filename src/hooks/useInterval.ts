import { useEffect, useRef } from 'react'

export default function useInterval(callback: () => void, ms: number) {
  const callbackRef = useRef(callback)
  callbackRef.current = callback

  useEffect(() => {
    const interval = setInterval(() => callbackRef.current(), ms)
    return () => {
      clearInterval(interval)
    }
  }, [ms])
}
