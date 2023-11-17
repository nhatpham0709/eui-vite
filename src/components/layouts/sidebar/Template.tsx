import { EuiPageTemplate } from '@elastic/eui'
import { ReactNode } from 'react'
import { Outlet } from 'react-router'

interface Props {
  sidebar: ReactNode
}

export default function SidebarTemplate(props: Props) {
  const { sidebar } = props

  return (
    <EuiPageTemplate restrictWidth panelled={false} bottomBorder={true}>
      <EuiPageTemplate.Sidebar paddingSize='none' sticky>
        {sidebar}
      </EuiPageTemplate.Sidebar>
      <EuiPageTemplate.Section>
        <Outlet />
      </EuiPageTemplate.Section>
    </EuiPageTemplate>
  )
}
