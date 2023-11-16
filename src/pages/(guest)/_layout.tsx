import GuestLayout from '@/components/layouts/Guest'
import { Outlet } from 'react-router'

export default function Layout() {
  return (
    <>
      <GuestLayout>
        <Outlet />
      </GuestLayout>
    </>
  )
}
