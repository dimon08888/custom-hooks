import { useState } from 'react'
import useInterval from '../hooks/useInterval'

export default function IntervalExample() {
  const [counter, setCounter] = useState(0)
  // const { value: counter, increment } = useCounter(0)

  // useInterval(increment, 1000)
  useInterval(() => setCounter(counter + 1), 1000)

  return <div>{counter}</div>
}
