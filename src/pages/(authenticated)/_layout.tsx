import AuthenticatedLayout from '@/components/layouts/Authenticated'
import { Outlet } from 'react-router'

export default function Layout() {
  return (
    <>
      <AuthenticatedLayout>
        <Outlet />
      </AuthenticatedLayout>
    </>
  )
}
