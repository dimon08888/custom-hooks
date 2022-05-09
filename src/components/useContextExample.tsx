import React, { createContext, useContext, useState } from 'react'

export default function UseContextExample() {
  return <Root />
}

const Context = createContext<(() => void) | undefined>(undefined)

function Root() {
  const [state, setState] = useState(0)
  const updateState = React.useCallback(() => setState(prev => prev + 1), [])
  console.log('RERENDER ROOT')

  return (
    <div>
      <p>Root component: {state}</p>

      <Context.Provider value={updateState}>
        <A /* onClick={updateState} */ />
      </Context.Provider>
    </div>
  )
}

const A = React.memo(function A(/* { onClick }: { onClick: () => void } */) {
  console.log('RERENDER A')
  return (
    <>
      <p>A component</p>
      <B /* onClick={onClick} */ />
    </>
  )
})

function B(/* { onClick }: { onClick: () => void } */) {
  console.log('RERENDER B')
  return (
    <>
      <p>B component</p>
      <C /* onClick={onClick} */ />
    </>
  )
}

function C(/* { onClick }: { onClick: () => void } */) {
  console.log('RERENDER C')
  return (
    <>
      <p>C component</p>
      <D /* onClick={onClick} */ />
    </>
  )
}

function D(/* { onClick }: { onClick: () => void } */) {
  const updateState = useContext(Context)
  console.log('RERENDER D')
  return (
    <>
      <p>D component</p>
      <button onClick={updateState}>Update state</button>
    </>
  )
}
