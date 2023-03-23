import AddStaff from 'components/AddStaff'
import StaffItem from 'components/StaffItem'
import StaffList from 'components/StaffList'
import { Link, NavLink, Outlet, Route, Routes } from 'react-router-dom'

export default function Staff() {
  return (
    <div>
      <h1 className='mb-6 text-lg'>Staff List</h1>
      <div className='border-b border-gray-200 text-center text-sm font-medium text-gray-500  '>
        <ul className='-mb-px flex flex-wrap'>
          <li className='mr-2'>
            <NavLink
              to='/staff'
              end
              className={({ isActive }) =>
                `active inline-block rounded-t-lg border-b-2 p-4 ${
                  isActive ? 'border-blue-600  text-blue-600' : 'hover:border-gray-300 hover:text-gray-600'
                } `
              }
            >
              List
            </NavLink>
          </li>
          <li className='mr-2'>
            <NavLink
              to='/staff/add'
              className={({ isActive }) =>
                `active inline-block rounded-t-lg border-b-2 p-4 ${
                  isActive ? 'border-blue-600  text-blue-600' : 'hover:border-gray-300 hover:text-gray-600'
                } `
              }
              aria-current='page'
            >
              Add
            </NavLink>
          </li>
        </ul>
      </div>
      <Routes>
        <Route index element={<StaffList />} />
        <Route path=':id' element={<StaffItem />} />
        <Route path='add' element={<AddStaff />} />
      </Routes>
      {/* <Outlet context={{ profile: 'Vi Aibi' }} /> */}
    </div>
  )
}
