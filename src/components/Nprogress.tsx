import NProgress from '@/lib/nprogress'
import { useEffect } from 'react'
import { useLocation } from 'react-router'

const CustomNprogress = () => {
  const location = useLocation()

  useEffect(() => {
    NProgress.start()
    NProgress.done()
  }, [location])

  return null
}

export default CustomNprogress
