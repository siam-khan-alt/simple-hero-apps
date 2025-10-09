
import axios from 'axios'
import { useEffect, useState } from 'react'

const useApps = () => {
  const [apps, setApps] = useState([])
  const [loading, setLoading] = useState(true)
  

  useEffect(() => {
    setLoading(true)
    axios.get('/apps.json')
      .then(data => setApps(data.data))
      .catch(err => console.error("Failed to load apps:", err))
      .finally(() => setLoading(false))
  }, [])

  return { apps, loading }
}

export default useApps