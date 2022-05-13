import React from 'react'

const ClassUserContext = React.createContext<
  { count: number; increment: () => void } | undefined
>(undefined)

function Component1() {
  return <Component2 />
}

function Component2() {
  return (
    <div>
      <ClassUserContext.Consumer>
        {value => <h2>Count: {value?.count}</h2>}
      </ClassUserContext.Consumer>
      <Component3 />
    </div>
  )
}

function Component3() {
  return (
    <div>
      <ClassUserContext.Consumer>
        {value => <button onClick={value?.increment}>INCREMENT</button>}
      </ClassUserContext.Consumer>
    </div>
  )
}

export class User extends React.Component<{}, { count: number }> {
  state = {
    count: 0,
  }

  render() {
    return (
      <ClassUserContext.Provider
        value={{
          count: this.state.count,
          increment: () => this.setState(state => ({ count: state.count + 1 })),
        }}
      >
        <Component1 />
      </ClassUserContext.Provider>
    )
  }
}
