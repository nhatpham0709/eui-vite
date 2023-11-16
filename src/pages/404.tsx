import { EuiButton, EuiEmptyPrompt, EuiImage } from '@elastic/eui'
import { useTheme } from '../hooks/useTheme'
import { useNavigate } from 'react-router'

const NotFoundPage = () => {
  const { colorMode } = useTheme()

  const navigate = useNavigate()
  const isDarkTheme = colorMode === 'dark'

  const illustration = isDarkTheme ? '/images/404_rainy_cloud_dark.png' : '/images/404_rainy_cloud_light.png'

  const handleClick = (e: any) => {
    navigate(-1)
    e.preventDefault()
  }

  return (
    <EuiEmptyPrompt
      actions={[
        <EuiButton color='primary' fill onClick={handleClick} key='404-go-back'>
          Go back
        </EuiButton>
      ]}
      body={
        <p>
          Sorry, we can&apos;t find the page you&apos;re looking for. It might have been removed or renamed, or maybe it
          never existed.
        </p>
      }
      icon={<EuiImage alt='' size='fullWidth' src={illustration} />}
      layout='vertical'
      title={<h2>Page not found</h2>}
      titleSize='m'
    />
  )
}

export default NotFoundPage
