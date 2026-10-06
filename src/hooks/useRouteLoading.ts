import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

export function useRouteLoading(ms = 320) {
  const location = useLocation()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    const timer = window.setTimeout(() => setLoading(false), ms)
    return () => window.clearTimeout(timer)
  }, [location.pathname, ms])

  return loading
}
