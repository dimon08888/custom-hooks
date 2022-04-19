import { useState, useEffect, useCallback } from 'react'

export default function useSessionStorage<T>(key: string, initialValue: T | (() => T)) {
  const [value, setValue] = useState(initialValue)

  useEffect(() => {
    try {
      const value = window.sessionStorage.getItem(key)
      if (value !== null) {
        setValue(JSON.parse(value))
      }
    } catch {}
  }, [key])

  useEffect(() => {
    try {
      window.sessionStorage.setItem(key, JSON.stringify(value))
    } catch {}
  }, [key, value])

  const removeCounter = useCallback(() => {
    try {
      window.sessionStorage.removeItem(key)
    } catch {}
  }, [key])

  return [value, setValue, removeCounter]
}
