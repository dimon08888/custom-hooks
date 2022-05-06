import useFetch from '../hooks/useFetch'
import useToggle from '../hooks/useToggle'
import Json from '../utils/Json'

export default function UseFetchExample() {
  const [enabled, toggle] = useToggle(false)

  const { data, isLoading, refetch } = useFetch(
    'https://jsonplaceholder.typicode.com/users',
    { enabled }
  )

  // if (isLoading) {
  //   return <div>Spinner...</div>
  // }

  return (
    <>
      <Json>{data}</Json>
      <button onClick={() => toggle()}>{enabled ? 'Disable' : 'Enable'}</button>
      <button onClick={refetch}>Refetch</button>
    </>
  )
}
