import useStateWithHistory from '../hooks/useStateWithHistory'

export default function StateWithHistoryExample() {
  const [count, setCount, { forward, back, go, history, pointer }] = useStateWithHistory(
    1,
    10
  )

  return (
    <div>
      <div>Value: {count}</div>
      <div>Pointer: {pointer}</div>
      <div>{'[' + history.join(', ') + ']'}</div>

      <button onClick={() => setCount(currentCount => currentCount * 2)}>Double</button>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={back}>Back</button>
      <button onClick={forward}>Forward</button>
      <button onClick={() => go(2)}>Go to 3</button>
    </div>
  )
}
