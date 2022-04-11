import './App.css'
import useToggle from './hooks/useToggle'

function App() {
  return (
    <div className="App">
      <ToggleExample />
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

export default App
