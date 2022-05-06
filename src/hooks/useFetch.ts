import { useState, useEffect, useCallback } from 'react'

export default function useFetch(
  url: string,
  { enabled }: { enabled?: boolean } = { enabled: true }
) {
  const [data, setData] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [refresh, setRefresh] = useState(0)

  useEffect(() => {
    if (!enabled) return
    async function fetchData() {
      setIsLoading(true)
      const response = await fetch(url)
      const data = await response.json()
      setData(data)
      setIsLoading(false)
    }
    fetchData()
  }, [url, refresh, enabled])

  const refetch = useCallback(() => {
    setRefresh(prevRefresh => prevRefresh + 1)
  }, [])

  return { data, isLoading, refetch }
}
