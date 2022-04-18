import React, { useState, useCallback } from 'react'

export default function useMergedState<T extends Record<string, unknown>>(
  initialValue: T | (() => T),
): [T, (newState: React.SetStateAction<Partial<T>>) => void] {
  const [state, setState] = useState(initialValue)

  function setMergedState(newState: React.SetStateAction<Partial<T>>) {
    setState(prevState => {
      if (typeof newState === 'function') {
        newState = newState(prevState)
      }
      return { ...prevState, ...newState }
    })
  }

  return [state, useCallback(setMergedState, [])]
}
