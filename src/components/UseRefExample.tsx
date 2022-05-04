import { useState, useRef, useEffect } from 'react'
import useArray from '../hooks/useArray'

export function Chat() {
  const { array: messages, push } = useArray<string>(['Message 0', 'Message 1'])
  const lastElementRef = useRef<HTMLLIElement>(null)

  useEffect(() => {
    let i = 2
    const interval = setInterval(() => {
      push('Message ' + i++)
      scrollLastMessageIntoView()
    }, 1000)
    return () => clearInterval(interval)
  }, [push])

  function scrollLastMessageIntoView() {
    lastElementRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div
      style={{ width: 250, height: 400, border: '2px solid black', overflow: 'scroll' }}
    >
      <ul>
        {messages.map((message, i) => (
          <li key={i}>{message}</li>
        ))}
        <li style={{ listStyle: 'none' }} ref={lastElementRef}></li>
      </ul>
    </div>
  )
}

// TODO: make a custom hook useTimer()
// TODO: make a custom hook useTimeout()
export function StopWatch() {
  const [time, setTime] = useState(0)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  function handleStartTimer() {
    if (intervalRef.current === null) {
      intervalRef.current = setInterval(() => {
        setTime(time => time + 1)
      }, 1000)
    }
  }

  function handleStopTime() {
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
      intervalRef.current = null
    }
  }

  useEffect(() => {
    return handleStopTime
  }, [])

  return (
    <div>
      <div>Timer: {time}s</div>
      <div>
        <button onClick={handleStartTimer}>Start</button>
        <button onClick={handleStopTime}>Stop</button>
      </div>
    </div>
  )
}

export function FocusInputExample() {
  const ref = useRef<HTMLInputElement>(null)

  function handleFocusInput() {
    if (ref.current) {
      ref.current.focus()
    }
  }

  return (
    <div>
      <input ref={ref} type='text' />
      <button onClick={handleFocusInput}>Click!</button>
    </div>
  )
}

export function RefExample() {
  const ref = useRef<HTMLDivElement>(null)
  const [rect, setRect] = useState<DOMRect | null>(null)

  useEffect(() => {
    const listener = () => {
      console.log('RESIZE')
      if (ref.current) {
        setRect(ref.current.getBoundingClientRect())
      }
    }

    window.addEventListener('resize', listener)

    if (ref.current) {
      setRect(ref.current.getBoundingClientRect())
    }

    return () => {
      window.removeEventListener('resize', listener)
    }
  }, [])

  return (
    <div ref={ref} style={{ border: '1px solid black' }}>
      {rect
        ? 'Width: ' + Math.floor(rect.width) + ' Height: ' + Math.floor(rect.height)
        : 'Example here...'}
    </div>
  )
}
