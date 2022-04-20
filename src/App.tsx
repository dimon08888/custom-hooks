// HOMEWORK

// 1. write useSessionStorage without peeking at useLocalStorage source code
// 2. try useStateWithHistory
// 3. useMergedState

import React, { useState } from 'react'
import './App.css'
import useToggle from './hooks/useToggle'
import useCounter from './hooks/useCounter'
import useArray from './hooks/useArray'
import useStateWithHistory from './hooks/useStateWithHistory'
import useLocalStorage from './hooks/useLocalStorage'
import useMergedState from './hooks/useMergedState'
import usePrevious from './hooks/usePrevious'
import useMounted from './hooks/useMounted'
import useUpdateEffect from './hooks/useUpdateEffect'
import { count } from 'console'

function App() {
  return (
    <div className="App">
      {/* <ToggleExample /> */}
      {/* <ArrayExample /> */}
      {/* <CounterExample /> */}
      <StateWithHistoryExample />
      {/* <MergedStateExample /> */}
      {/* <PreviousExample /> */}
      {/* <UpdateEffectExample /> */}
      {/* <LocalStorageExample /> */}
    </div>
  )
}

function ToggleExample() {
  const [isDarkMode, toggleTheme] = useToggle(false)
  const [isMenuLeft, toggleMenu] = useToggle(true)

  return (
    <div>
      <div>{isDarkMode.toString()}</div>
      <button onClick={() => toggleTheme()}>Toggle</button>
      <button onClick={() => toggleTheme(true)}>Make True</button>
      <button onClick={() => toggleTheme(false)}>Make False</button>

      <div>{isMenuLeft.toString()}</div>
      <button onClick={() => toggleMenu()}>Toggle</button>
      <button onClick={() => toggleMenu(true)}>Make True</button>
      <button onClick={() => toggleMenu(false)}>Make False</button>
    </div>
  )
}

function ArrayExample() {
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

function CounterExample() {
  const [someNumber, setSomeNumber] = React.useState(5)
  const { value, increment, decrement, reset, double, set } = useCounter(someNumber)

  return (
    <div>
      <div>{value}</div>
      <button onClick={() => setSomeNumber(10)}>Set someNumber to 10</button>
      <button onClick={() => increment()}>Plus</button>
      <button onClick={() => decrement()}>Minus</button>
      <button onClick={reset}>Reset</button>
      <button onClick={double}>Double</button>
      <button onClick={() => set(20)}>Set to 20</button>
    </div>
  )
}

function StateWithHistoryExample() {
  const [count, setCount, { forward, back, go, history, pointer }] = useStateWithHistory(
    1,
    10,
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

function LocalStorageExample() {
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

function MergedStateExample() {
  // const [state, setState] = useState({
  //   username: '',
  //   email: '',
  //   password: '',
  // })

  const [mergedState, setMergedState] = useMergedState({
    username: '',
    email: '',
    password: '',
  })

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    console.log(mergedState)
  }

  // const onUsernameChange: React.ChangeEventHandler<HTMLInputElement> = e => {
  //   setState(state => ({ ...state, username: e.target.value }))
  // }

  // const onEmailChange: React.ChangeEventHandler<HTMLInputElement> = e => {
  //   setState(state => ({ ...state, email: e.target.value }))
  // }

  // const onPasswordChange: React.ChangeEventHandler<HTMLInputElement> = e => {
  //   setState(state => ({ ...state, password: e.target.value }))
  // }

  // const onChange = (e: React.ChangeEvent<HTMLInputElement>, name: keyof typeof state) => {
  //   setState(state => ({ ...state, [name]: e.target.value }))
  // }

  const onChange: React.ChangeEventHandler<HTMLInputElement> = e => {
    setMergedState({ [e.target.name]: e.target.value })
    // setState(state => ({ ...state, [e.target.name]: e.target.value }))
  }

  return (
    <div>
      <Component setMergedState={setMergedState} />
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          value={mergedState.username}
          onChange={onChange}
          // onChange={e => onChange(e, 'username')}
          // onChange={onUsernameChange}
        />{' '}
        <br />
        <input
          type="email"
          name="email"
          value={mergedState.email}
          onChange={onChange}
          // onChange={e => onChange(e, 'email')}
          // onChange={onEmailChange}
        />{' '}
        <br />
        <input
          type="password"
          name="password"
          value={mergedState.password}
          onChange={onChange}
          // onChange={e => onChange(e, 'password')}
          // onChange={onPasswordChange}
        />{' '}
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

function PreviousExample() {
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

function UpdateEffectExample() {
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

const Component = React.memo((props: any) => {
  console.log('RENDER')
  return (
    <div>
      Component
      <button onClick={props.setMergedState}>Set Merged State</button>
    </div>
  )
})

// function Component(props: { removeCounter?: () => void }) {
//   console.log('RENDER')
//   return (
//     <div>
//       Component
//       <button onClick={props.removeCounter}>Remove from local storage</button>
//     </div>
//   )
// }

// const MemoedComponent = React.memo(Component)

// class Component extends React.PureComponent<{
//   removeCounter?: () => void
//   prop?: number
// }> {
// shouldComponentUpdate(nextProps: { removeCounter?: () => void; prop?: number }) {
//   if (this.props.prop !== nextProps.prop) {
//     return true
//   }

//   if (this.props.removeCounter !== nextProps.removeCounter) {
//     return true
//   }

//   return false
// }

//   render() {
//     console.log('RENDER')
//     return (
//       <div>
//         Component
//         <button onClick={this.props.removeCounter}>Remove from local storage</button>
//       </div>
//     )
//   }
// }

export default App
