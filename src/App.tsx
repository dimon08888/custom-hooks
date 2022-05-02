import React, { useEffect, useRef, useState } from 'react'
import './App.css'

function App() {
  const [isMounted, setIsMounted] = React.useState(true)

  return (
    <div className='App'>
      {/* <ToggleExample /> */}
      {/* <ArrayExample /> */}
      {/* <CounterExample /> */}
      {/* <StateWithValidationExample /> */}

      {isMounted && <RefExample />}
      <button onClick={() => setIsMounted(false)}>Unmount</button>

      {/* {isMounted && <IntervalExample />}
      <button onClick={() => setIsMounted(false)}>Unmount</button>

      {/* <StateWithHistoryExample /> */}
      {/* <RenderCountExample /> */}
      {/* <MergedStateExample /> */}
      {/* <PreviousExample /> */}
      {/* <UpdateEffectExample /> */}
      {/* <LocalStorageExample /> */}
    </div>
  )
}

function RefExample() {
  const ref = useRef<HTMLDivElement>(null)
  const [rect, setRect] = useState<DOMRect | null>(null)

  useEffect(() => {
    const listener = () => {
      console.log('RESIZE')
      if (ref.current) {
        setRect(ref.current.getBoundingClientRect())
      }
    }

    window.addEventListener('resize', listener)

    if (ref.current) {
      setRect(ref.current.getBoundingClientRect())
    }

    return () => {
      window.removeEventListener('resize', listener)
    }
  }, [])

  return (
    <div ref={ref} style={{ border: '1px solid black' }}>
      {rect
        ? 'Width: ' + Math.floor(rect.width) + ' Height: ' + Math.floor(rect.height)
        : 'Example here...'}
    </div>
  )
}

const Component = React.memo((props: any) => {
  console.log('RENDER')
  return (
    <div>
      Component
      <button onClick={props.setMergedState}>Set Merged State</button>
    </div>
  )
})

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
