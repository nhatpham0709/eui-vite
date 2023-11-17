import { Suspense } from 'react'
import { EuiErrorBoundary } from '@elastic/eui'
import '@/icons'
import { Outlet } from 'react-router-dom'
import { ThemeContextProvider } from '../context/ThemeContext'
import PageLoading from '../components/layouts/Loading'
import { EuiColorProvider } from '@/providers/EuiColorProvider'
import Meta from '@/components/Meta'
import { Toaster } from 'react-hot-toast'
import { Provider } from 'react-redux'
import { store } from '@/store'
import CustomNprogress from '@/components/Nprogress'

export default function App() {
  return (
    <Suspense fallback={<PageLoading />}>
      <CustomNprogress />
      <Provider store={store}>
        <ThemeContextProvider>
          <EuiColorProvider>
            <EuiErrorBoundary>
              <Meta />
              <Toaster />
              <Outlet />
            </EuiErrorBoundary>
          </EuiColorProvider>
        </ThemeContextProvider>
      </Provider>
    </Suspense>
  )
}
