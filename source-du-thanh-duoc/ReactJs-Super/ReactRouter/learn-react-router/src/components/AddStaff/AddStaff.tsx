export default function AddStaff() {
  return (
    <form>
      <div className='mb-6'>
        <label htmlFor='email' className='mb-2 block text-sm font-medium text-gray-900 '>
          email
        </label>
        <input
          type='email'
          id='email'
          className='block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 '
          placeholder='name@flowbite.com'
          required
        />
      </div>
      <div className='mb-6'>
        <label htmlFor='password' className='mb-2 block text-sm font-medium text-gray-900 '>
          password
        </label>
        <input
          type='password'
          id='password'
          className='block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 '
          required
        />
      </div>

      <button
        type='submit'
        className='w-full rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300  sm:w-auto'
      >
        Add Staff
      </button>
    </form>
  )
}
