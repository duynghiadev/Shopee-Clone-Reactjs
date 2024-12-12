import AddStaff from 'components/AddStaff'

export default function StaffList() {
  return (
    <div>
      <h1 className='mb-6 text-lg'>Staff List</h1>
      <div className='border-b border-gray-200 text-center text-sm font-medium text-gray-500  '>
        <ul className='-mb-px flex flex-wrap'>
          <li className='mr-2'>
            <a
              href='#'
              className='inline-block rounded-t-lg border-b-2 border-transparent p-4 hover:border-gray-300 hover:text-gray-600 '
            >
              Profile
            </a>
          </li>
          <li className='mr-2'>
            <a
              href='#'
              className='active inline-block rounded-t-lg border-b-2 border-blue-600 p-4 text-blue-600 '
              aria-current='page'
            >
              Dashboard
            </a>
          </li>
        </ul>
      </div>

      <ul>
        <li>
          <a href='#' className='font-medium text-blue-600 hover:underline dark:text-blue-500'>
            Staff 1
          </a>
        </li>
        <li>
          <a href='#' className='font-medium text-blue-600 hover:underline dark:text-blue-500'>
            Staff 2
          </a>
        </li>
        <li>
          <a href='#' className='font-medium text-blue-600 hover:underline dark:text-blue-500'>
            Staff 3
          </a>
        </li>
      </ul>
      <AddStaff />
    </div>
  )
}
