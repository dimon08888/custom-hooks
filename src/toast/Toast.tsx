import { createContext } from 'react'
type ToastType = 'success' | 'error' | 'info' | 'warning' | 'debug'
type ToastPosition = 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right'

export type ToastProps = {
  type: ToastType
  message: string
  position?: ToastPosition
  duration?: number
}

const typeToColor: Record<ToastType, string> = {
  success: 'green',
  error: 'red',
  info: 'blue',
  warning: 'yellow',
  debug: 'white',
}

// export const ToastContext = createContext<((props: ToastProps) => void) | undefined>(
//   undefined
// )

function Toast(props: ToastProps) {
  return (
    <div>
      <div style={{ backgroundColor: typeToColor[props.type] }}>{props.message}</div>
    </div>
  )
}

// toast({ type: 'success', message: 'You have logged in' })
// const toast = useContext(ToastContext)
// const toast = useToast()
