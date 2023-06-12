import MainLayout from 'layouts/MainLayout'
import { Routes, Route, useRoutes } from 'react-router-dom'
import About from 'pages/About'
import Dashboard from 'pages/Dashboard'
import Staff from 'pages/Staff'
import NotFound from 'pages/NotFound'
import StaffItem from 'components/StaffItem'
import AddStaff from 'components/AddStaff'
import StaffList from 'components/StaffList'

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

  return (
    <div className='App'>
      <MainLayout>
        {/* ❌❌ Cách 1: ❌❌*/}
        {elements}

        {/* ❌❌ Cách 2: ❌❌*/}

        {/* <Routes> */}
        {/* <Route path='/' element={<Dashboard />} />
          <Route path='/about' element={<About />} />
          <Route path='/staff/*' element={<Staff />} /> */}

        {/* Cách dưới 👇👇👇 là cách khai báo không lồng nhau (Nested Route)
         * Thông thường khi sử dụng phương pháp Nested thì người ta sẽ dùng cách trên,
         * chứ ít ai dùng cách dưới
         */}

        {/* <Route path='/staff' element={<Staff />} />
          <Route path='/staff/:id' element={<StaffItem />} />
          <Route path='/staff/add' element={<AddStaff />} /> */}

        {/* <Route path='*' element={<NotFound />} /> */}
        {/* </Routes> */}
      </MainLayout>
    </div>
  )
}

export default App
