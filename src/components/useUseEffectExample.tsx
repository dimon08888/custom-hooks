import { useState, useEffect, useCallback, useRef } from 'react'
import useToggle from '../hooks/useToggle'
import Json from '../utils/Json'
import Unmount from '../utils/Unmount'

export function UseEffectExample() {
  const [id, setId] = useState<number>(100)

  function changeId() {
    setId(id => (id === null ? 1 : id + 1))
  }
  // const [enabled, toggle] = useToggle(false)
  // const [id, setId] = useState(2)
  return (
    <div>
      <Unmount>
        <LifeCycle prop={id} />
      </Unmount>
      <button onClick={() => setId(id => id + 1)}>Update Prop</button>
      {/* <UserID id={id} changeId={changeId} /> */}
      {/* <RandomNum /> */}
    </div>
  )
  // <div>
  //   <FetchUser userId={id} />
  //   <button onClick={() => setId(id => id + 1)}>Change userId</button>
  // </div>
  // return <FetchExample />
  // <DependentFetch />
  // <>
  //   <FetchUsers enabled={enabled} />
  //   <button onClick={() => toggle()}>Toggle</button>
  // </>
}

function FetchExample() {
  const [data, setData] = useState<{ username: string }[]>([])

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('https://jsonplaceholder.typicode.com/users')
      const data = await response.json()
      setData(data)
    }
    fetchData()
  }, [])

  return (
    <div>
      {data.map(user => (
        <p>{user.username}</p>
      ))}
    </div>
  )
}

function FetchUser({ userId }: { userId: number }) {
  const [data, setData] = useState(null)

  const fetchUserById = useCallback(
    async function fetchUserById() {
      await new Promise(resolve => setTimeout(resolve, 1000))
      const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
      const data = await response.json()
      setData(data)
    },
    [userId]
  )

  useEffect(() => {
    fetchUserById()
  }, [fetchUserById])

  return (
    <div>
      <Json>{data}</Json>
      <button onClick={fetchUserById}>Refresh</button>
    </div>
  )
}

function DependentFetch() {
  const [user, setUser] = useState(null)

  useEffect(() => {
    async function fetchFirstUser() {
      const response = await fetch('https://jsonplaceholder.typicode.com/users')
      const users = await response.json()
      const id = users[0].id
      const response2 = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      const user = await response2.json()
      setUser(user)
    }
    fetchFirstUser()
  }, [])

  return <Json>{user}</Json>
}

function FetchUsers({ enabled }: { enabled: boolean }) {
  const [data, setData] = useState(null)

  useEffect(() => {
    if (enabled) {
      return
    }
    async function fetchData() {
      const response = await fetch('https://jsonplaceholder.typicode.com/users')
      const data = await response.json()
      setData(data)
    }
    fetchData()
  }, [enabled])

  return <Json>{data}</Json>
}

function RandomNum() {
  const [randomNum, setRandomNum] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setRandomNum(Math.random())
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div>
      <p>{randomNum}</p>
    </div>
  )
}

// "Mounted"
// "Updated"
// "Unmounted"
function LifeCycle({ prop }: { prop: any }) {
  const [state, setState] = useState(0)
  const mountedRef = useRef([false, false])

  useEffect(() => {
    if (mountedRef.current[0]) {
      console.log(`State updated to ${state}`)
    } else {
      mountedRef.current[0] = true
    }
  }, [state])

  useEffect(() => {
    if (mountedRef.current[1]) {
      console.log(`Prop updated to ${prop}`)
    } else {
      mountedRef.current[1] = true
    }
  }, [prop])

  useEffect(() => {
    console.log('Mounted')
    return () => console.log('Unmounted')
  }, [])

  return (
    <div>
      <button onClick={() => setState(prev => prev + 1)}>Update State</button>
    </div>
  )
}

function UserID({ id, changeId }: { id: number | null; changeId: () => void }) {
  const [user, setUser] = useState(null)

  useEffect(() => {
    if (id === null) {
      return
    }
    async function fetchUser() {
      const response = await fetch(`https://swapi.dev/api/people/${id}`)
      const user = await response.json()
      setUser(user)
    }
    fetchUser()
  }, [id])

  return (
    <div>
      <Json indent>{user}</Json>
      <button onClick={changeId}>ChangeID</button>
    </div>
  )
}
