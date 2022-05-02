import { Component } from 'react'
import useMergedState from '../hooks/useMergedState'

export default function MergedStateExample() {
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
          type='text'
          name='username'
          value={mergedState.username}
          onChange={onChange}
          // onChange={e => onChange(e, 'username')}
          // onChange={onUsernameChange}
        />{' '}
        <br />
        <input
          type='email'
          name='email'
          value={mergedState.email}
          onChange={onChange}
          // onChange={e => onChange(e, 'email')}
          // onChange={onEmailChange}
        />{' '}
        <br />
        <input
          type='password'
          name='password'
          value={mergedState.password}
          onChange={onChange}
          // onChange={e => onChange(e, 'password')}
          // onChange={onPasswordChange}
        />{' '}
        <br />
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}
