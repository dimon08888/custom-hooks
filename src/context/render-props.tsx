import React from 'react'

export default function Example() {
  return (
    <Component>
      {(count: number, increment: () => void) => (
        <div>
          <h2>Count: {count}</h2>
          <button onClick={increment}>Increment</button>
        </div>
      )}
    </Component>
  )
}

function Component(props: any) {
  const [count, setCount] = React.useState(0)
  const increment = () => setCount(prev => prev + 1)
  return props.children(count, increment)
}

// React.createElement(Component, { children: 2 + 2 })

// React.createElement(Component, { children: '2'})

// return <Component children={<p>Text here</p>} />

// const element = React.createElement(
//   Component,
//   {},
//   React.createElement('p', {}, 'Text here')
// )

// const element = React.createElement(
//   Component,
//   { children: React.createElement('p', {}, 'Text here' )}
// )

//  count: 2
