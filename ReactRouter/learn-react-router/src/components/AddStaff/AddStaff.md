## Giải thích code chi tiết:

```jsx
export default function AddStaff() {
  return (
    <form>
      {/* Form Input - Email */}
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

      {/* Form Input - Password */}
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

      {/* Submit Button */}
      <button
        type='submit'
        className='w-full rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300  sm:w-auto'
      >
        Add Staff
      </button>
    </form>
  )
}
```

- Giải thích từng phần code:

1. Form:

- `<form>`: Đây là phần tử `<form>` trong HTML, tạo một biểu mẫu để nhập thông tin.

2. Form Input - Email:

- `<div className='mb-6'>`: Đây là một phần tử `<div>` dùng để nhóm các phần tử liên quan lại với nhau.
- `<label htmlFor='email' className='mb-2 block text-sm font-medium text-gray-900 '>`: Đây là một nhãn (label) cho trường nhập liệu email.
- `<input type='email' id='email' className='...' placeholder='name@flowbite.com' required />`: Đây là trường nhập liệu email. Có thuộc tính `type='email'` để kiểm tra định dạng email, `id='email'` để liên kết với nhãn (label) tương ứng, `className` để cung cấp các lớp CSS để tạo giao diện cho trường nhập liệu.

3. Form Input - Password:

- Tương tự như trường Email, phần này tạo một trường nhập liệu password.

4. Submit Button:

- `<button type='submit' className='...'>`: Đây là một nút gửi biểu mẫu (form). Có thuộc tính `type='submit'` để xác định hành động khi nút được nhấn, và `className` để cung cấp các lớp CSS để tạo giao diện cho nút.
- Nội dung của nút là "Add Staff".

✅ Mã trên tạo ra một biểu mẫu gồm hai trường nhập liệu (email và password) và một nút gửi (Add Staff). Mỗi trường nhập liệu được thiết kế với các lớp CSS để tạo giao diện phù hợp.
