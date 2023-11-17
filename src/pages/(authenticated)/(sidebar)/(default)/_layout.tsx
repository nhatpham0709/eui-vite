import { DefaultSidebar } from '@/components/layouts/sidebar/Default'
import SidebarTemplate from '@/components/layouts/sidebar/Template'

export default function Layout() {
  return (
    <>
      <SidebarTemplate sidebar={<DefaultSidebar />} />
    </>
  )
}
