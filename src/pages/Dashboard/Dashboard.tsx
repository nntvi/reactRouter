import { Link, useLocation } from 'react-router-dom'

export default function Dashboard() {
  // const location = useLocation()
  return (
    <div>
      <h1 className='mb-6 text-lg'>Dashboard</h1>
      {/* <div className='p text-cyan-800'>{location.state}</div> */}
      <Link to={'/?search=vi&age=24'}>Click to see param</Link>
    </div>
  )
}
