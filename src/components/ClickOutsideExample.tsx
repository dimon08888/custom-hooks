import React, { useRef, useState } from 'react'
import useClickOutside from '../hooks/useClickOutside'

export default function ClickOutsideExample() {
  const [showModal, setShowModal] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  const [name, setName] = useState('')

  useClickOutside(
    ref,
    () => {
      console.log('NAME is', name)
      // setShowModal(false)
    },
    showModal
  )

  return (
    <div>
      <input type='text' value={name} onChange={e => setName(e.target.value)} />
      <div>
        {showModal ? (
          <div ref={ref} style={{ width: 150, height: 150, border: '2px solid black' }}>
            Modal Window
            <button>Inside modal button</button>
          </div>
        ) : null}
      </div>
      <button onClick={() => setShowModal(!showModal)}> Click me</button>
    </div>
  )
}
