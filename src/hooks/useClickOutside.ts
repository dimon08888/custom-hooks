import { useRef, useEffect } from 'react'

export default function useClickOutside(
  elementRef: React.RefObject<HTMLElement>,
  callback: (event: MouseEvent) => void,
  enabled: boolean
) {
  const callbackRef = useRef(callback)
  callbackRef.current = callback

  useEffect(() => {
    if (!enabled) {
      return
    }

    const listener = (e: MouseEvent) => {
      // console.log('CLICKED ON', e.target)
      const element = elementRef.current
      if (element && !element.contains(e.target as HTMLElement)) {
        callbackRef.current(e)
      }
    }

    window.addEventListener('click', listener)

    return () => {
      window.removeEventListener('click', listener)
    }
  }, [enabled, elementRef])
}
