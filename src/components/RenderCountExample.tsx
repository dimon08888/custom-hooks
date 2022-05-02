import useRenderCount from '../hooks/useRenderCount'
import useToggle from '../hooks/useToggle'

export default function RenderCountExample() {
  const [boolean, toggle] = useToggle(false)
  const renderCount = useRenderCount()

  return (
    <div>
      <div>{boolean.toString()}</div>
      <div>Render: {renderCount}</div>
      <button onClick={() => toggle()}>Toggle</button>
    </div>
  )
}
