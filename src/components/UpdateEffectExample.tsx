import useCounter from '../hooks/useCounter'
import useUpdateEffect from '../hooks/useUpdateEffect'

export default function UpdateEffectExample() {
  const { value, increment, decrement } = useCounter(5)
  // const isMounted = useMounted()

  // React.useEffect(() => {
  //   console.log('Counter changed to ' + value)
  // }, [value])

  useUpdateEffect(() => {
    console.log('Counter changed to ' + value)
  }, [value])

  // console.log({ isMounted })

  return (
    <div>
      <div>{value}</div>
      <button onClick={() => increment()}>Plus</button>
      <button onClick={() => decrement()}>Minus</button>
    </div>
  )
}
