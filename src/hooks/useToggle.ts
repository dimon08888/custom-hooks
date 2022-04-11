import { useState } from 'react'

export default function useToggle(
  initialValue: boolean,
): [boolean, (value?: boolean) => void] {
  const [value, setValue] = useState(initialValue)

  function toggleValue(value?: boolean) {
    if (value !== undefined) {
      setValue(value)
    } else {
      setValue(currentValue => !currentValue)
    }
  }

  return [value, toggleValue]
}
