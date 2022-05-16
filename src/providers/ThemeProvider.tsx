import { createContext, useContext } from 'react'

export const themes = {
  light: {
    background: '#eee',
    textColor: '#222',
  },
  dark: {
    background: '#222',
    textColor: '#eee',
  },
}

export const ThemeContext = createContext(themes.light)

export default function ThemeProvider() {
  const theme = useContext(ThemeContext)

  return (
    <div style={{ background: theme.background, color: theme.textColor }}>
      Theme color
    </div>
  )
}
