import React, { useContext, createContext } from 'react'
// type ToastType = 'success' | 'error' | 'info' | 'warning' | 'debug'
// type ToastPosition = 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right'

// export type ToastProps = {
//   type: ToastType
//   message: string
//   position?: ToastPosition
//   duration?: number
// }

// const typeToColor: Record<ToastType, string> = {
//   success: 'green',
//   error: 'red',
//   info: 'blue',
//   warning: 'yellow',
//   debug: 'white',
// }

type ToastType = {
  message: string
  color: string
}

const ToastContext = createContext<((toast: ToastType) => void) | undefined>(undefined)

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [toasts, setToasts] = React.useState<ToastType[]>([])

  const createToast = React.useCallback((toast: ToastType) => {
    setToasts(prevToasts => prevToasts.concat(toast))
  }, [])

  return (
    <ToastContext.Provider value={createToast}>
      {children}
      {toasts.map((toast, i) => (
        <div key={i} style={{ backgroundColor: toast.color }}>
          {toast.message}
        </div>
      ))}
    </ToastContext.Provider>
  )
}

export function useToast() {
  const toast = useContext(ToastContext)

  if (toast === undefined) {
    throw new Error(
      'createToast is undefined. Make sure you wrap your component in ToastProvider.'
    )
  }

  return toast
}
