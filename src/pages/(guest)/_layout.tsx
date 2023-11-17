import ThemeSwitcher from '@/components/layouts/header/ThemeSwitcher'
import {
  EuiPageTemplate,
  EuiPageTemplateProps,
  EuiPageHeaderProps,
  EuiHeader,
  EuiHeaderLogo,
  useGeneratedHtmlId,
  EuiIcon,
  EuiText
} from '@elastic/eui'
import { Outlet } from 'react-router'

interface DefaultLayoutProps extends EuiPageTemplateProps {
  pageHeader?: EuiPageHeaderProps
}

export default function GuestLayout(props: DefaultLayoutProps) {
  const { ...rest } = props

  return (
    <div className='min-h-full flex flex-col h-full'>
      <EuiHeader
        theme='dark'
        position='fixed'
        sections={[
          {
            items: [
              <EuiHeaderLogo iconType='logoElastic' href='/'>
                Elastic
              </EuiHeaderLogo>
            ]
          },
          {
            items: [<ThemeSwitcher key={useGeneratedHtmlId()} />]
          }
        ]}
      />
      <div className='flex flex-col flex-grow z-0 relative'>
        <EuiPageTemplate restrictWidth panelled={false} bottomBorder={true} {...rest}>
          <EuiPageTemplate.Section>
            <div className='flex justify-center items-center gap-4 w-full mb-10'>
              <EuiIcon type='logoElastic' size='xxl' />
              <EuiText>
                <h2>Elastic</h2>
              </EuiText>
            </div>
            <Outlet />
          </EuiPageTemplate.Section>
        </EuiPageTemplate>
      </div>
    </div>
  )
}
