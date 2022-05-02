import useCounter from '../hooks/useCounter'
import usePrevious from '../hooks/usePrevious'

export default function PreviousExample() {
  const { value, increment, decrement } = useCounter(5)
  const previous = usePrevious(value)

  return (
    <div>
      <div>
        Current: {value}, Previous: {previous}
      </div>
      <button onClick={() => increment()}>Plus</button>
      <button onClick={() => decrement()}>Minus</button>
    </div>
  )
}
