import api from '@/lib/api'
import { handleError } from '@/utils/handleError'
import { EuiButton } from '@elastic/eui'
import { useState } from 'react'

export default function Page() {
  const [isLoading, setIsLoading] = useState(false)
  const onButtonClick = async () => {
    setIsLoading(true)
    try {
      api.get('/posts')
    } catch (error) {
      handleError(error)
    } finally {
      setIsLoading(false)
    }
  }
  
  return (
    <>
      <EuiButton isLoading={isLoading} iconSide='right' onClick={onButtonClick}>
        Test API
      </EuiButton>
    </>
  )
}
