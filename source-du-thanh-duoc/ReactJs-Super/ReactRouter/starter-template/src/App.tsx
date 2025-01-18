import MainLayout from 'layouts/MainLayout'
import About from 'pages/About'
import Dashboard from 'pages/Dashboard'
import StaffList from 'pages/StaffList'

function App() {
  return (
    <div className='App'>
      <MainLayout>
        <Dashboard />
        <About />
        <StaffList />
      </MainLayout>
    </div>
  )
}

export default App
