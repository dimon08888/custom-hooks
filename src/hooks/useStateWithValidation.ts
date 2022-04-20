import React, { useCallback, useState } from 'react'

export default function useStateWithValidation<T>(
  initialValue: T,
  validate: (value: T) => boolean,
): [T, (newValue: React.SetStateAction<T>) => void, boolean] {
  const [value, setValue] = useState(initialValue)
  const [isValid, setIsValid] = useState(() => validate(initialValue))

  const setValidatedState = useCallback(
    (newValue: React.SetStateAction<T>) => {
      const resolvedValue = newValue instanceof Function ? newValue(value) : newValue
      setValue(resolvedValue)
      setIsValid(validate(resolvedValue))
    },
    [value, validate],
  )

  return [value, setValidatedState, isValid]
}

// useState
// useRef
// useCallback
// useEffect
// useMemo
