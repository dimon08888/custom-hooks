import React from 'react'
import './App.css'
import { ToastProvider, useToast } from './toast/Toast'

function App() {
  return (
    <div className='App'>
      <ToastProvider>
        <RegisterForm />
        <Menu />
        <DeletePost />
      </ToastProvider>
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
