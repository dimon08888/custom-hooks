import React, { useState } from 'react'
import './App.css'
import ThemeProvider from './providers/ThemeProvider'
import { ThemeContext, themes } from './providers/ThemeProvider'
import { ToastProvider, useToast } from './providers/ToastProvider'

function App() {
  const [theme, setTheme] = useState(themes.light)

  function toggleTheme() {
    setTheme(theme => (theme === themes.light ? themes.dark : themes.light))
  }

  return (
    <div className='App'>
      <button onClick={toggleTheme}>Change theme</button>
      <ThemeContext.Provider value={theme}>
        <ThemeProvider />
        {/* <ToastProvider>
          <RegisterForm />
          <Menu />
          <DeletePost />
        </ToastProvider> */}
      </ThemeContext.Provider>
    </div>
  )
}

function RegisterForm() {
  const toast = useToast()

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    toast({ color: 'green', message: 'Successful registration' })
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type='text' placeholder='Enter name' />
      <br />
      <button type='submit'>Register</button>
    </form>
  )
}

function Menu() {
  const toast = useToast()

  function handleLogoutClick() {
    // logout
    toast({ message: 'Logged out', color: 'blue' })
  }

  return (
    <ul>
      <li>Home</li>
      <li>Feed</li>
      <li>Profile</li>
      <li>
        <button onClick={handleLogoutClick}> Logout</button>
      </li>
    </ul>
  )
}

function DeletePost() {
  const toast = useToast()

  function handlePostDelete() {
    // delete
    toast({ message: 'Error: can not delete post', color: 'red' })
  }

  return (
    <div>
      <textarea defaultValue='This is a post text'></textarea>
      <button onClick={handlePostDelete}>Delete post</button>
    </div>
  )
}

// feed -> scroll -> toast()
// login -> web socket -> comes notification -> toast()
// create repository -> fetch() -> toast()
// logout -> click -> toast()
// regiseter -> submit -> toast()

export default App

// const [user, setUser] = useState(null)

// function login() {}

// function logout() {}

// function authenticate() {}

// const [language, setLanguage] = useState('ru')

// function changeLanguage() {}

// const [toasts, setToasts] = useState([])

// function toast() {}

// const [modal, setModal] = useState()

// function openModal() {}

// function closeModal() {}
