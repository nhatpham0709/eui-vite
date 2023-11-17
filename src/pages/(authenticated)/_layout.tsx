import { Header } from '@/components/layouts/header/Header'
import { Outlet } from 'react-router'

export default function AuthenticatedLayout() {
  return (
    <div className='min-h-full flex flex-col h-full'>
      <Header />
      <div className='flex flex-col flex-grow z-0 relative'>
        <Outlet />
      </div>
    </div>
  )
}
