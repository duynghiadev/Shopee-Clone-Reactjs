import { Link, useLocation } from 'react-router-dom'

export default function Dashboard() {
  const location = useLocation()
  // console.log(location)
  return (
    <div>
      <h1 className='mb-6 text-lg'>Dashboard</h1>
      <p className='text-cyan-800'>{location.state}</p>
      <Link to='/?sort=name&order=ascending'>name</Link>
      <Link to='/?sort=age&order=ascending'>age</Link>
      <Link to='/?sort=height&order=ascending'>height</Link>
    </div>
  )
}
