import React from 'react'
import './App.css'
import UseContextExample from './components/useContextExample'
import UseFetchExample from './components/UseFetchExample'
import { Chat, StopWatch, Counter } from './components/UseRefExample'
import { UseEffectExample } from './components/useUseEffectExample'
import { ToastProps } from './toast/Toast'
import Unmount from './utils/Unmount'
import { useState } from 'react'

function ToastExample({ toast }: { toast: (props: ToastProps) => void }) {
  return (
    <div>
      <button
        onClick={() =>
          toast({ type: 'success', message: 'Hello World', position: 'bottom-right' })
        }
      >
        Make me a toast
      </button>
    </div>
  )
}

function SendMessageForm({ sendMessage }: { sendMessage: (message: string) => void }) {
  const inputRef = React.useRef<HTMLInputElement>(null)
  return (
    <div>
      <input type='text' ref={inputRef} />
      <button onClick={() => sendMessage(inputRef.current!.value)}>Send message</button>
    </div>
  )
}

function MessageList({ messages }: { messages: string[] }) {
  return (
    <ul>
      {messages.map(str => (
        <li>{str}</li>
      ))}
    </ul>
  )
}

function App() {
  const [messages, setMessages] = useState<string[]>([])

  function sendMessage(str: string) {
    setMessages(prevMessages => {
      const newMessages = prevMessages.slice()
      newMessages.push(str)
      return newMessages
    })
  }

  return (
    <div className='App'>
      {/* <ToggleExample /> */}
      {/* <ArrayExample /> */}
      {/* <CounterExample /> */}
      {/* <StateWithValidationExample /> */}
      {/* <Unmount>
        <StopWatch />
      </Unmount> */}
      {/* <Chat /> */}
      {/* <Counter /> */}
      {/* <UseEffectExample /> */}
      {/* <UseFetchExample /> */}
      {/* <ClickOutsideExample /> */}
      {/* <ClassComponent /> */}
      {/* <ToastContext.Provider value={toast }> */}

      <SendMessageForm sendMessage={sendMessage} />
      <MessageList messages={messages} />

      {/* <MessageExample sendMessage={undefined as any} />
      {<div></div> } */}
      {/* <ToastExample toast={undefined as any} /> */}
      {/* </ToastContext.Provider> */}
      {/* <UseContextExample /> */}
      {/* {isMounted && <RefExample />}
      <button onClick={() => setIsMounted(false)}>Unmount</button> */}
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

// class ClassComponent extends React.Component {
//   element: HTMLDivElement | null = null

//   componentDidMount() {
//     console.log(this.element)
//   }

//   componentDidUpdate() {
//     this.element = new HTMLDivElement()
//   }

//   render() {
//     return <div ref={element => (this.element = element)}>Hello</div>
//   }
// }

// function Counter() {
//   const [obj, setObj] = useState({ current: 0 })
//   const { increment } = useCounter(0)

//   return (
//     <div>
//       <div>Counter: {obj.current}</div>
//       <button onClick={() => increment()}></button>
//     </div>
//   )
// }

// function InputExample() {
//   // const ref = useRef<HTMLInputElement>(null)
//   const ref = useRef<HTMLSelectElement>(null)

//   function handleInputColor() {
//     if (ref.current) {
//     }
//   }
//   return (
//     <div>
//       <select ref={ref}>
//         <option>hop</option>
//         <option>hep</option>
//         <option>hap</option>
//         <option>hyp</option>
//       </select>
//       <button onClick={handleInputColor}>Click me!</button>
//     </div>
//   )
// }

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
