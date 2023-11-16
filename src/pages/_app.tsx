import { Suspense } from 'react'
import { EuiErrorBoundary } from '@elastic/eui'
import '@/icons'
import { Outlet } from 'react-router-dom'
import { ThemeContextProvider } from '../context/ThemeContext'
import PageLoading from '../components/layouts/Loading'
import { EuiColorProvider } from '@/providers/EuiColorProvider'
import Meta from '@/components/Meta'
import { Toaster } from 'react-hot-toast'

export default function App() {
  return (
    <Suspense fallback={<PageLoading />}>
      <ThemeContextProvider>
        <EuiColorProvider>
          <EuiErrorBoundary>
            <Meta />
            <Toaster />

            <Outlet />
          </EuiErrorBoundary>
        </EuiColorProvider>
      </ThemeContextProvider>
    </Suspense>
  )
}
