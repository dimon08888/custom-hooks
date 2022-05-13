import React from 'react'

const UserContext = React.createContext<string | null>(null)

export function TitleContextExample() {
  const userName = 'Dimas'
  return (
    <UserContext.Provider value={userName}>
      <FirstLevel />
    </UserContext.Provider>
  )
}

function FirstLevel() {
  return <SecondLevel />
}

function SecondLevel() {
  const userName = React.useContext(UserContext)
  return (
    <div>
      <h1>{userName}</h1>
    </div>
  )
}
