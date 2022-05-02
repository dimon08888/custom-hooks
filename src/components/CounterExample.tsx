import React from 'react'
import useCounter from '../hooks/useCounter'
import useRenderCount from '../hooks/useRenderCount'

export default function CounterExample() {
  const [someNumber, setSomeNumber] = React.useState(5)
  const { value, increment, decrement, reset, double, set } = useCounter(someNumber)
  const renderCount = useRenderCount()

  return (
    <div>
      <div>{value}</div>
      <div>Render: {renderCount}</div>
      <button onClick={() => setSomeNumber(10)}>Set someNumber to 10</button>
      <button onClick={() => increment()}>Plus</button>
      <button onClick={() => decrement()}>Minus</button>
      <button onClick={reset}>Reset</button>
      <button onClick={double}>Double</button>
      <button onClick={() => set(20)}>Set to 20</button>
    </div>
  )
}
