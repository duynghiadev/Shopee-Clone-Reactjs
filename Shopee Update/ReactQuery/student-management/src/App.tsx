import Spinner from 'components/Spinner'
import MainLayout from 'layouts/MainLayout'
import About from 'pages/About'
import AddStudent from 'pages/AddStudent'
import Dashboard from 'pages/Dashboard'
import NotFound from 'pages/NotFound'
import Students from 'pages/Students'
import { useRoutes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useIsFetching, useIsMutating } from '@tanstack/react-query'

function App() {
  const elements = useRoutes([
    {
      path: '/',
      element: <Dashboard />
    },
    {
      path: '/students',
      element: <Students />
    },
    {
      path: '/students/:id',
      element: <AddStudent />
    },
    {
      path: '/students/add',
      element: <AddStudent />
    },
    {
      path: '/about',
      element: <About />
    },
    {
      path: '*',
      element: <NotFound />
    }
  ])
  const isFetching = useIsFetching()
  const isMutating = useIsMutating()

  return (
    <div className='App'>
      {isFetching + isMutating !== 0 && <Spinner />}
      <ToastContainer />
      <MainLayout>{elements}</MainLayout>
    </div>
  )
}

export default App
