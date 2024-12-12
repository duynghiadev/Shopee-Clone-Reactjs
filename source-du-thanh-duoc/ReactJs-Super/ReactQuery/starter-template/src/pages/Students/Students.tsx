import { Link } from 'react-router-dom'

export default function Students() {
  return (
    <div>
      <h1 className='text-lg'>Students</h1>
      {/* <div role='status' className='mt-6 animate-pulse'>
        <div className='mb-4 h-4  rounded bg-gray-200 dark:bg-gray-700' />
        <div className='mb-2.5 h-10  rounded bg-gray-200 dark:bg-gray-700' />
        <div className='mb-2.5 h-10 rounded bg-gray-200 dark:bg-gray-700' />
        <div className='mb-2.5 h-10  rounded bg-gray-200 dark:bg-gray-700' />
        <div className='mb-2.5 h-10  rounded bg-gray-200 dark:bg-gray-700' />
        <div className='mb-2.5 h-10  rounded bg-gray-200 dark:bg-gray-700' />
        <div className='mb-2.5 h-10  rounded bg-gray-200 dark:bg-gray-700' />
        <div className='mb-2.5 h-10  rounded bg-gray-200 dark:bg-gray-700' />
        <div className='mb-2.5 h-10  rounded bg-gray-200 dark:bg-gray-700' />
        <div className='mb-2.5 h-10  rounded bg-gray-200 dark:bg-gray-700' />
        <div className='mb-2.5 h-10  rounded bg-gray-200 dark:bg-gray-700' />
        <div className='mb-2.5 h-10  rounded bg-gray-200 dark:bg-gray-700' />
        <div className='h-10  rounded bg-gray-200 dark:bg-gray-700' />
        <span className='sr-only'>Loading...</span>
      </div> */}
      <div className='relative mt-6 overflow-x-auto shadow-md sm:rounded-lg'>
        <table className='w-full text-left text-sm text-gray-500 dark:text-gray-400'>
          <thead className='bg-gray-50 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400'>
            <tr>
              <th scope='col' className='py-3 px-6'>
                #
              </th>
              <th scope='col' className='py-3 px-6'>
                Avatar
              </th>
              <th scope='col' className='py-3 px-6'>
                Name
              </th>
              <th scope='col' className='py-3 px-6'>
                Email
              </th>
              <th scope='col' className='py-3 px-6'>
                <span className='sr-only'>Action</span>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className='border-b bg-white hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-600'>
              <td className='py-4 px-6'>1</td>
              <td className='py-4 px-6'>
                <img
                  src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAALzSURBVDjLdZPdT5JhGMaZf4Bbh3ZaBzn/gU46MM1iNrf8WExNVyz1IDUOHCFpfq4PmmZmtTTT8GMJNGAO0hgi8a0oIBAGfoS4N12gmUpmL1fPy9LGpu/27N2zPdfvvu7rfh4WANZRa2pqims2mycMBsME+bjHnUvYOJ3O1JmZmWQiTiLi9dXVVYRCIUil0nWVSpWkVCqTZTJZ6pEAIu4mYtpms1EmkylFr9dTi4uLWFhYABFSCoUihYCo4eFhWiwWdycAHA6HMBAIIBwOw+/3g4i3tVptzOv1wu12Qy6Xx4h4mzgDRVFQq9UQiUTCQwCpWkd6jTEQRjA/Px8HHQCYvcvlAgOwWCwQCAQxHo9Xl9CC0WhsZQ5PT0/DarVifHwcPT096O/vZxyBtAXbx6fwDXLgV7TC8ToLzq60EhYh2kn1FZ1OF/H5fLDb7dBoNGhqajLx+fzM+vr6zPb2dtPMxCNQWj42XaPAz1VsuKTQiy7/ZhExvba2FrfLVCZBYnBwEC0tLZkH7qzS7Kbv7nvYW1GC0omwO/cef5YNxEUZWGTGdDAYjPfI2GQckMTR2dkZB4TUpy9F3Hdj9K4Buwu3ELZV4rOYC9ebMvAqSmkWGYmdWFzp6+uLzM7OxiFMDr29vabJoSu1kTkB6KgZO4FSRINF2PLWwtOVQd/m5n/Ly8uzH4ZIxtRKgsTk5CSYv17+GNQU/5+4BNGvhfjhFmL++UW01XB6E+6BRCKpGxoaink8nrjYMNoB71gN6F09oktc/ApewyZx8oWI7Z/GUFVVFSsvL/8/xoGBASGTPHPz3rbx4FHVwql+gpC1ADtLRQg77sDZcSEmE7+IZ9XQ0IDc3Fxhwj1obGzsrq6upkceZgBby/C9yoe29iSML9n4cO8sLRGcT+dwOFROTg7NZrO7j3xMBJDafDNtf8/8DHvWDlhb0zFScQqV13MjhYWFScXFxckEkHrsa2RWwbkT0fulZ/Y1D9j0u+asjRtXsy3E7rHP+S+qJels2qSd5wAAAABJRU5ErkJggg=='
                  alt='student'
                  className='h-5 w-5'
                />
              </td>
              <th scope='row' className='whitespace-nowrap py-4 px-6 font-medium text-gray-900 dark:text-white'>
                Apple
              </th>
              <td className='py-4 px-6'>apple@gmail.com</td>
              <td className='py-4 px-6 text-right'>
                <Link to='/students/1' className='mr-5 font-medium text-blue-600 hover:underline dark:text-blue-500'>
                  Edit
                </Link>
                <button className='font-medium text-red-600 dark:text-red-500'>Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className='mt-6 flex justify-center'>
        <nav aria-label='Page navigation example'>
          <ul className='inline-flex -space-x-px'>
            <li>
              <span className='cursor-not-allowed rounded-l-lg border border-gray-300 bg-white py-2 px-3 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'>
                Previous
              </span>
            </li>
            <li>
              <a
                className='border border-gray-300 bg-white bg-white py-2 px-3 leading-tight text-gray-500 text-gray-500  hover:bg-gray-100 hover:bg-gray-100 hover:text-gray-700 hover:text-gray-700'
                href='/students?page=8'
              >
                1
              </a>
            </li>
            <li>
              <a
                className='rounded-r-lg border border-gray-300 bg-white py-2 px-3 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'
                href='/students?page=1'
              >
                Next
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  )
}
