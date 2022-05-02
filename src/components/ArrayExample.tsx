import useArray from '../hooks/useArray'

export default function ArrayExample() {
  const { array, push, remove, update, clear, set, reset, filter } = useArray([
    1, 2, 3, 4, 5, 6,
  ])

  // React.useEffect(() => {
  //   setTimeout(() => {
  //     push(8)
  //   }, 2000)
  // }, [push])

  return (
    <div>
      <div>{'[' + array.join(', ') + ']'}</div>
      <button onClick={() => push(7)}>Add 7</button>
      <button onClick={() => remove(1)}>Remove second element</button>
      <button onClick={() => update(2, 9)}>Change third element to 9</button>
      <button onClick={clear}>Clear</button>
      <button onClick={() => set([1, 2])}>Set to 1, 2</button>
      <button onClick={reset}>Reset</button>
      <button onClick={() => filter(n => n > 3)}>Kepp numbers greater than 3</button>
    </div>
  )
}
