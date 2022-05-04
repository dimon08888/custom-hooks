import { useState } from 'react'

export default function Unmount({ children }: { children: React.ReactElement }) {
  const [isMounted, setIsMounted] = useState(true)
  const unmount = () => setIsMounted(false)
  return (
    <div>
      {isMounted ? children : null}
      <button onClick={unmount}>Unmount</button>
    </div>
  )
}
