import useLocalStorage from '../hooks/useLocalStorage'

export default function LocalStorageExample() {
  const [counter, setCounter, removeCounter] = useLocalStorage('counter', 0)

  return (
    <div>
      <div>{counter}</div>
      <button onClick={() => setCounter(counter => counter + 1)}>+</button>
      <button onClick={() => setCounter(counter => counter - 1)}>-</button>
      <button onClick={removeCounter}>Remove</button>
    </div>
  )
}
