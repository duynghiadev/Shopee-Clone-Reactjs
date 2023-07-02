## Đây là phần giải thích code:

👉 Đoạn 1:

```jsx
import { useMatch, useParams } from 'react-router-dom'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { addStudent, getStudent, updateStudent } from 'apis/students.api'
import { Student } from 'types/students.type'
import { useEffect, useMemo, useState } from 'react'
import { isAxiosError } from 'utils/utils'
import { toast } from 'react-toastify'
```

- Trong đoạn code trên, chúng ta import các hook và function từ các module khác để sử dụng trong React component.

- `useMatch` và `useParams` là các hook được cung cấp bởi thư viện `react-router-dom` để truy cập thông tin về URL và các tham số truyền vào trong React Router.
- `useMutation`, `useQuery`, và `useQueryClient` là các hook được cung cấp bởi thư viện `@tanstack/react-query` để quản lý trạng thái của các hoạt động như truy vấn dữ liệu, cập nhật dữ liệu, hoặc xóa dữ liệu.
- `addStudent`, `getStudent`, và `updateStudent` là các function được import từ module `apis/students.api` và được sử dụng để thực hiện các yêu cầu HTTP liên quan đến sinh viên, như lấy dữ liệu sinh viên, thêm sinh viên mới, hoặc cập nhật thông tin sinh viên.
- `Student` là một kiểu dữ liệu được import từ module `types/students.type` và được sử dụng để đại diện cho thông tin về sinh viên.
- `useEffect` là một hook được cung cấp bởi React để thực hiện các side effect sau khi component được render.
- `useMemo` là một hook được sử dụng để tối ưu hóa việc tính toán các giá trị phức tạp và tránh việc tính toán lại trong mỗi lần render.
- `useState` là một hook được sử dụng để quản lý trạng thái (state) của component.
- `isAxiosError` là một function được import từ module `utils/utils` và được sử dụng để kiểm tra xem một lỗi có phải là lỗi từ thư viện Axios hay không.
- `toast` là một function được cung cấp bởi thư viện `react-toastify` để hiển thị thông báo (toast) trên giao diện người dùng.

- ✅ Tóm lại: Trong đoạn code đó, chúng ta sử dụng các hook và function từ các thư viện như `react-router-dom`, `@tanstack/react-query`, `react-toastify` để quản lý trạng thái và thực hiện các hoạt động liên quan đến truy vấn dữ liệu và cập nhật dữ liệu. Chúng ta import các function từ module `apis/students.api` để thực hiện các yêu cầu HTTP liên quan đến sinh viên. Các hook `useParams` và `useMatch` được sử dụng để truy cập thông tin từ URL. Chúng ta cũng sử dụng hook `useEffect`, `useMemo` và `useState` để quản lý trạng thái và thực hiện các side effect trong React component.

---

👉 Đoạn 2:

```jsx
const initialFormState: FormStateType = {
  avatar: '',
  email: '',
  btc_address: '',
  country: '',
  first_name: '',
  gender: 'other',
  last_name: ''
}
```

---

👉 Đoạn 3:

```jsx
type FormStateType = Omit<Student, 'id'> | Student
```

---

👉 Đoạn 4:

```jsx
type FormError =
  | {
      [key in keyof FormStateType]: string
    }
  | null
```

---

👉 Đoạn 5:

```jsx
const gender = {
  male: 'Male',
  female: 'Female',
  other: 'Other'
}
```

---

👉 Đoạn 6:

```jsx
export default function AddStudent() {
  const [formState, setFormState] = useState<FormStateType>(initialFormState);
  const addMatch = useMatch('/students/add');
  const isAddMode = Boolean(addMatch);
  const { id } = useParams();
  const queryClient = useQueryClient();
```

---

👉 Đoạn 7:

```jsx
const addStudentMutation = useMutation((body: FormStateType) => {
  return addStudent(body)
})
```

---

👉 Đoạn 8:

```jsx
  const studentQuery = useQuery({
    queryKey: ['student', id],
    queryFn: () => getStudent(id as string),
    enabled: id !== undefined,
    staleTime: 1000 * 10
  });
```

---

👉 Đoạn 9:

```jsx
useEffect(() => {
  if (studentQuery.data) {
    setFormState(studentQuery.data.data)
  }
}, [studentQuery.data])
```

👉 Đoạn 10:

```jsx
  const updateStudentMutation = useMutation((_) => {
    return updateStudent(id as string, formState as Student);
  }, {
    onSuccess: (data) => {
      queryClient.setQueryData(['student', id], data);
    }
  });
```

---

👉 Đoạn 11:

```jsx
const errorForm: FormError = useMemo(() => {
  const error = isAddMode ? addStudentMutation.error : updateStudentMutation.error
  if (isAxiosError < { error: FormError } > error && error.response?.status === 422) {
    return error.response?.data.error
  }
  return null
}, [addStudentMutation.error, isAddMode, updateStudentMutation.error])
```

---

👉 Đoạn 12:

```jsx
// Dùng currying
  const handleChange = (name: keyof FormStateType) => (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormState((prev) => ({ ...prev, [name]: event.target.value }))
    if (addStudentMutation.data || addStudentMutation.error) {
      addStudentMutation.reset()
    }
  }
```

---

👉 Đoạn 13:

```jsx
const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
  event.preventDefault()
  if (isAddMode) {
    addStudentMutation.mutate(formState, {
      onSuccess: () => {
        setFormState(initialFormState)
        toast.success('Add thành công!')
      }
    })
  } else {
    updateStudentMutation.mutate(undefined, {
      onSuccess: (_) => {
        toast.success('Update thành công!')
      }
    })
  }
}
```

---

👉 Đoạn 14:

```jsx
return (
    <div>
      <h1 className='text-lg'>{isAddMode ? 'Add' : 'Edit'} Student</h1>
      <form className='mt-6' onSubmit={handleSubmit}>
        <div className='group relative z-0 mb-6 w-full'>
          <input
            type='text'
            name='floating_email'
            id='floating_email'
            className='peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-white dark:focus:border-blue-500'
            placeholder=' '
            value={formState.email}
            onChange={handleChange('email')}
            required
          />
          <label
            htmlFor='floating_email'
            className='absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-blue-600 dark:text-gray-400 peer-focus:dark:text-blue-500'
          >
            Email address
          </label>
          {errorForm && (
            <p className='mt-2 text-sm text-red-600'>
              <span className='font-medium'>Lỗi! </span>
              {errorForm.email}
            </p>
          )}
        </div>

        <div className='group relative z-0 mb-6 w-full'>
          <div>
            <div>
              <div className='mb-4 flex items-center'>
                <input
                  id='gender-1'
                  type='radio'
                  name='gender'
                  value={gender.male}
                  checked={formState.gender === gender.male}
                  onChange={handleChange('gender')}
                  className='h-4 w-4 border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600'
                />
                <label htmlFor='gender-1' className='ml-2 text-sm font-medium text-gray-900 dark:text-gray-300'>
                  Male
                </label>
              </div>
              <div className='mb-4 flex items-center'>
                <input
                  id='gender-2'
                  type='radio'
                  name='gender'
                  value={gender.female}
                  checked={formState.gender === gender.female}
                  onChange={handleChange('gender')}
                  className='h-4 w-4 border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600'
                />
                <label htmlFor='gender-2' className='ml-2 text-sm font-medium text-gray-900 dark:text-gray-300'>
                  Female
                </label>
              </div>
              <div className='flex items-center'>
                <input
                  id='gender-3'
                  type='radio'
                  name='gender'
                  value={gender.other}
                  checked={formState.gender === gender.other}
                  onChange={handleChange('gender')}
                  className='h-4 w-4 border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600'
                />
                <label htmlFor='gender-3' className='ml-2 text-sm font-medium text-gray-900 dark:text-gray-300'>
                  Other
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className='group relative z-0 mb-6 w-full'>
          <input
            type='text'
            name='country'
            id='country'
            value={formState.country}
            onChange={handleChange('country')}
            className='peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-white dark:focus:border-blue-500'
            placeholder=' '
            required
          />
          <label
            htmlFor='country'
            className='absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-blue-600 dark:text-gray-400 peer-focus:dark:text-blue-500'
          >
            Country
          </label>
        </div>
        <div className='grid md:grid-cols-2 md:gap-6'>
          <div className='group relative z-0 mb-6 w-full'>
            <input
              type='tel'
              name='first_name'
              id='first_name'
              className='peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-white dark:focus:border-blue-500'
              placeholder=' '
              required
              value={formState.first_name}
              onChange={handleChange('first_name')}
            />
            <label
              htmlFor='first_name'
              className='absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-blue-600 dark:text-gray-400 peer-focus:dark:text-blue-500'
            >
              First Name
            </label>
          </div>
          <div className='group relative z-0 mb-6 w-full'>
            <input
              type='text'
              name='last_name'
              id='last_name'
              className='peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-white dark:focus:border-blue-500'
              placeholder=' '
              required
              value={formState.last_name}
              onChange={handleChange('last_name')}
            />
            <label
              htmlFor='last_name'
              className='absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-blue-600 dark:text-gray-400 peer-focus:dark:text-blue-500'
            >
              Last Name
            </label>
          </div>
        </div>
        <div className='grid md:grid-cols-2 md:gap-6'>
          <div className='group relative z-0 mb-6 w-full'>
            <input
              type='text'
              name='avatar'
              id='avatar'
              className='peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-white dark:focus:border-blue-500'
              placeholder=' '
              required
              value={formState.avatar}
              onChange={handleChange('avatar')}
            />
            <label
              htmlFor='avatar'
              className='absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-blue-600 dark:text-gray-400 peer-focus:dark:text-blue-500'
            >
              Avatar Base64
            </label>
          </div>
          <div className='group relative z-0 mb-6 w-full'>
            <input
              type='text'
              name='btc_address'
              id='btc_address'
              className='peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-white dark:focus:border-blue-500'
              placeholder=' '
              value={formState.btc_address}
              onChange={handleChange('btc_address')}
              required
            />
            <label
              htmlFor='btc_address'
              className='absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-blue-600 dark:text-gray-400 peer-focus:dark:text-blue-500'
            >
              BTC Address
            </label>
          </div>
        </div>

        <button
          type='submit'
          className='w-full rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 sm:w-auto'
        >
          {isAddMode ? 'Add' : 'Update'}
        </button>
      </form>
    </div>
  )
}
```

---
