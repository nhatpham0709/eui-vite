import { EuiPageTemplate, EuiPageTemplateProps, EuiPageHeaderProps } from '@elastic/eui'
import { Header } from './header/Header'
import { DefaultSidebar } from './sidebar/Default'

interface DefaultLayoutProps extends EuiPageTemplateProps {
  pageHeader?: EuiPageHeaderProps
}

export default function AuthenticatedLayout(props: DefaultLayoutProps) {
  const {
    children,
    pageHeader = {
      pageTitle: 'Welcome'
    },
    ...rest
  } = props

  return (
    <div className='min-h-full flex flex-col h-full'>
      <Header />

      <div className='flex flex-col flex-grow z-0 relative'>
        <EuiPageTemplate restrictWidth panelled={false} bottomBorder={true} {...rest}>
          <EuiPageTemplate.Header {...pageHeader} />
          <EuiPageTemplate.Sidebar paddingSize='none' sticky>
            <DefaultSidebar />
          </EuiPageTemplate.Sidebar>
          <EuiPageTemplate.Section>{children}</EuiPageTemplate.Section>
        </EuiPageTemplate>
      </div>
    </div>
  )
}
