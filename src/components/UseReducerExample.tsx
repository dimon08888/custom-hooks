import React, { useReducer } from 'react'

type State = {
  count: number
}

type Action = { type: 'increment' } | { type: 'decrement' } | { type: 'reset' }

function counterReducer(state: State, action: Action): State {
  switch (action.type) {
    case 'increment': {
      return { count: state.count + 1 }
    }
    case 'decrement': {
      return { count: state.count - 1 }
    }
    case 'reset': {
      return init()
    }
    default:
      return state
  }
}

function init() {
  return { count: 5 }
}

export default function UseReducerExample() {
  // const numbers = [1, 2, 3]
  // const sum = numbers.reduce((total, number) => total + number, 0)
  const [state, dispatch] = React.useReducer(counterReducer, undefined, init)

  return (
    <div>
      {state.count}
      <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
      <button onClick={() => dispatch({ type: 'increment' })}>+</button>
    </div>
  )
}

type ShoppingListState = string[]

type ShoppingListAction =
  | { type: 'add'; payload: string }
  | { type: 'remove'; payload: number }

function shopplingListReducer(
  state: ShoppingListState,
  action: ShoppingListAction
): ShoppingListState {
  // const obj = {id: action.payload.id, name: action.payload.name}
  switch (action.type) {
    case 'add': {
      const name = action.payload
      return state.concat(name)
    }
    case 'remove': {
      const index = action.payload
      // return [...state.slice(0, index), ...state.slice(index + 1)]
      return state.filter((_, i) => i !== index)
    }
    default:
      return state
  }
}

export function ShoppingList() {
  const [input, setInput] = React.useState('')
  const [state, dispatch] = React.useReducer(shopplingListReducer, [])

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    dispatch({ type: 'add', payload: input })
    setInput('')
  }

  function onDelete(index: number) {
    dispatch({ type: 'remove', payload: index })
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type='text' onChange={e => setInput(e.target.value)} value={input} />
        <button type='submit'>Add</button>
        <button type='submit'>Remove</button>
      </form>
      <ul>
        {state.map((item, i) => (
          <li key={i}>
            {item}
            <button onClick={() => onDelete(i)}>Delete</button>
          </li>
        ))}
      </ul>
    </>
  )
}

// const LightState = {
//   OFF: 'off',
//   LOW: 'low',
//   MEDIUM: 'medium',
//   HIGH: 'high',
// }

enum LightState {
  OFF = 'off',
  LOW = 'low',
  MEDIUM = 'medium',
  HIGH = 'high',
}

type LightAction = { type: 'toggle' }

const states = [LightState.OFF, LightState.LOW, LightState.MEDIUM, LightState.HIGH]

function lightReducer(state: LightState, action: LightAction) {
  switch (action.type) {
    case 'toggle': {
      const index = states.indexOf(state)
      const nextIndex = (index + 1) % state.length
      return states[nextIndex]
    }
    default:
      return state
  }
}

const colors = {
  [LightState.OFF]: '#000',
  [LightState.LOW]: '#DECA57',
  [LightState.MEDIUM]: '#FFE338',
  [LightState.HIGH]: '#FFFF00',
}

export function Light() {
  const [state, dispatch] = React.useReducer(lightReducer, LightState.OFF)
  return (
    <div>
      <div>Light - {state}</div>
      <div style={{ backgroundColor: colors[state], width: 100, height: 100 }}></div>
      <button onClick={() => dispatch({ type: 'toggle' })}>Click me</button>
    </div>
  )
}

const keys = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
]

type KeypadState = number[]
type KeypadAction = { type: 'enter'; payload: { key: number; passcode: string } }

function keypadReducer(state: KeypadState, action: KeypadAction): KeypadState {
  switch (action.type) {
    case 'enter': {
      const { key, passcode } = action.payload
      const index = state.length // [3]

      if (index === passcode.length) {
        return state
      }

      if (key === Number(passcode[index])) {
        return [...state, key]
      }

      return []
    }
  }
}

export function Keypad() {
  const passcode = '324881'
  const [state, dispatch] = useReducer(keypadReducer, [])

  React.useEffect(() => {
    const listener = (e: KeyboardEvent) => {
      if (e.key.match(/\d+/)) {
        dispatch({ type: 'enter', payload: { key: Number(e.key), passcode } })
      }
    }
    window.addEventListener('keydown', listener)
    return () => window.removeEventListener('keydown', listener)
  }, [])

  return (
    <div>
      {keys.map((row, i) => (
        <div key={i}>
          {row.map(n => (
            <button
              key={n}
              onClick={() => dispatch({ type: 'enter', payload: { key: n, passcode } })}
            >
              {n}
            </button>
          ))}
        </div>
      ))}

      <div>Status: {'[ ' + state.map(() => '✓') + ' ]'}</div>
      {state.join('') === passcode ? <div>Unlocked</div> : <div>Locked</div>}
    </div>
  )
}
