import MainLayout from 'layouts/MainLayout'
import About from 'pages/About'
import Dashboard from 'pages/Dashboard'
import NotFound from 'pages/NotFound'
import Staff from 'pages/Staff'
import { useEffect } from 'react'
import { Routes, Route, useRoutes, useLocation, useSearchParams } from 'react-router-dom'

function App() {
  const elements = useRoutes([
    {
      path: '/',
      element: <Dashboard />
    },
    {
      path: '/about',
      element: <About />
    },
    {
      path: '/staff/*',
      element: <Staff />
    },
    {
      path: '*',
      element: <NotFound />
    }
  ])
  const location = useLocation()
  const [searchParams] = useSearchParams()

  useEffect(() => {
    console.log('searchParams', Object.fromEntries([...searchParams]))
  }, [searchParams])

  useEffect(() => {
    console.log('location', location)
  }, [location])
  return (
    <div className='App'>
      <MainLayout>
        {/* Cach 1 */}
        {elements}

        {/* Cach 2 */}
        {/* <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='/about' element={<About />} />
          <Route path='/staff/*' element={<Staff />} />
          <Route path='*' element={<NotFound />} />
        </Routes> */}
      </MainLayout>
    </div>
  )
}

export default App
