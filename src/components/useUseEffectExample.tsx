import { useState, useEffect, useCallback } from 'react'
import useToggle from '../hooks/useToggle'
import Json from '../utils/Json'

export function UseEffectExample() {
  // const [enabled, toggle] = useToggle(false)
  // const [id, setId] = useState(2)
  return null
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
