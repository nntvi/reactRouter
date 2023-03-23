import AddStaff from 'components/AddStaff'
import StaffItem from 'components/StaffItem'
import StaffList from 'components/StaffList'
import MainLayout from 'layouts/MainLayout'
import About from 'pages/About'
import Dashboard from 'pages/Dashboard'
import NotFound from 'pages/NotFound'
import Staff from 'pages/Staff'
import { useEffect } from 'react'
import { Route, Routes, useLocation, useRoutes, useSearchParams } from 'react-router-dom'

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
      element: <Staff />
    }
  ])

  const location = useLocation()
  const [searchParams] = useSearchParams()

  useEffect(() => {
    console.log('searchParams', Object.fromEntries(searchParams))
  }, [searchParams])
  return (
    <div className='App'>
      <MainLayout>
        {/* Cach 1:  Routes */}
        <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='/about' element={<About />} />
          <Route path='/staff/*' element={<Staff />} />
          <Route path='*' element={<NotFound />} />
        </Routes>

        {/* Cach 2:  useRoutes */}
        {/* {elements} */}
      </MainLayout>
    </div>
  )
}

export default App
