import React, { useEffect, useRef } from 'react'

export default function useUpdateEffect(
  effect: React.EffectCallback,
  deps?: React.DependencyList,
) {
  const isMountedRef = useRef(false)

  useEffect(() => {
    if (isMountedRef.current) {
      return effect()
    } else {
      isMountedRef.current = true
    }
  }, deps) // eslint-disable-line react-hooks/exhaustive-deps
}
