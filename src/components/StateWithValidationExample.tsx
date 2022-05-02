import useStateWithValidation from '../hooks/useStateWithValidation'

export default function StateWithValidationExample() {
  const [username, setUsername, isUsernameValid] = useStateWithValidation(
    '',
    username => username.length > 5
  )

  const [age, setAge, isAgeValid] = useStateWithValidation(0, age => 0 < age && age < 200)

  return (
    <div>
      <div>Username valid: {isUsernameValid.toString()}</div>
      <input type='text' value={username} onChange={e => setUsername(e.target.value)} />
      <hr />
      <div>Age valid: {isAgeValid.toString()}</div>
      <input type='number' value={age} onChange={e => setAge(Number(e.target.value))} />
    </div>
  )
}
