import React from 'react'
import './App.css'
import useToggle from './hooks/useToggle'
import useCounter from './hooks/useCounter'
import useArray from './hooks/useArray'
import useStateWithHistory from './hooks/useStateWithHistory'
import useLocalStorage from './hooks/useLocalStorage'

function App() {
  return (
    <div className="App">
      {/* <ToggleExample /> */}
      {/* <ArrayExample /> */}
      {/* <CounterExample /> */}
      {/* <StateWithHistoryExample /> */}
      <LocalStorageExample />
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

// function StateWithHistoryExample() {
//   const [count, setCount, { forward, back, go, history }] = useStateWithHistory(1, 10)

//   return (
//     <div>
//       <div>{count}</div>
//       <div>{history.join(', ')}</div>

//       <button onClick={() => setCount(currentCount => currentCount * 2)}>Double</button>
//       <button onClick={() => setCount(currentCount => currentCount + 1)}>
//         Increment
//       </button>
//       <button onClick={back}>Back</button>
//       <button onClick={forward}>Forward</button>
//       <button onClick={() => go(2)}>Go to 3</button>
//     </div>
//   )
// }

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

// const Component = React.memo((props: { removeCounter?: () => void }) => {
//   console.log('RENDER')
//   return (
//     <div>
//       Component
//       <button onClick={props.removeCounter}>Remove from local storage</button>
//     </div>
//   )
// })

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
