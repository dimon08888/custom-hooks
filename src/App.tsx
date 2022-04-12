import React from 'react'
import './App.css'
import useToggle from './hooks/useToggle'
import useCounter from './hooks/useCounter'
import useArray from './hooks/useArray'
import { useState } from 'react'

function App() {
  return (
    <div className="App">
      {/* <ToggleExample /> */}
      <ArrayExample />
      {/* <CounterExample /> */}
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
  const { array, addNumber } = useArray([1, 2, 3, 4, 5, 6])

  // function handleAddNumber() {
  // setArray(currentArray => [...currentArray, 7])
  // setArray(currentArray => {
  //   const copyArray = currentArray.slice()
  //   copyArray.push(7)
  //   return copyArray
  // })
  // }

  return (
    <div>
      <div>{'[' + array + ']'}</div>
      <button onClick={() => addNumber(7)}>Add 7</button>
    </div>
  )
}

function CounterExample() {
  const { value, incrementValue, decrementValue, resetValue, doubleValue, set } =
    useCounter(10)
  return (
    <div>
      <div>{value}</div>
      <button onClick={() => incrementValue(value)}>Plus</button>
      <button onClick={() => decrementValue(value)}>Minus</button>
      <button onClick={() => resetValue(value)}>Reset</button>
      <button onClick={() => doubleValue(value)}>Double</button>
      <button onClick={() => set(20)}>Set to 20</button>
    </div>
  )
}

export default App
