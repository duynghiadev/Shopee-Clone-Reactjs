import { render } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import App from 'src/App'
import userEvent from '@testing-library/user-event'
import { QueryClient } from '@tanstack/query-core'
import { QueryClientProvider } from '@tanstack/react-query'
import { AppProvider, getInitialAppContext } from 'src/contexts/app.context'

export const delay = (time: number) =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(true)
    }, time)
  })

const createWrapper = () => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false
      },
      mutations: {
        retry: false
      }
    },
    logger: {
      log: console.log,
      warn: console.warn,
      // no more errors on the console
      error: () => null
    }
  })
  const Provider = ({ children }: { children: React.ReactNode }) => (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  )
  return Provider
}

const Provider = createWrapper()

export const renderWithRouter = ({ route = '/' } = {}) => {
  window.history.pushState({}, 'Test page', route)
  const defaultValueAppContext = getInitialAppContext()
  return {
    user: userEvent.setup(),
    ...render(
      <Provider>
        <AppProvider defaultValue={defaultValueAppContext}>
          <App />
        </AppProvider>
      </Provider>,
      { wrapper: BrowserRouter }
    )
  }
}
