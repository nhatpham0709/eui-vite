import { Helmet } from 'react-helmet'

interface Props {
  title?: string
  description?: string
}

export default function Meta(props: Props) {
  const { title, description = 'EUI Vite Template' } = props

  return (
    <Helmet>
      <title>{title ? `${title} | EUI` : 'EUI Vite Template'}</title>
      <meta name='description' content={description} />
    </Helmet>
  )
}
