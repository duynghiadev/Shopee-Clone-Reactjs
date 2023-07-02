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
type FormStateType = Omit<Student, 'id'> | Student
```

- `FormStateType` là một kiểu dữ liệu mới được định nghĩa.

- Kiểu dữ liệu này có thể đại diện cho hai kiểu khác nhau:` Omit<Student, 'id'>` và `Student`.

- `Omit<Student, 'id'>` là một kiểu dữ liệu mới được tạo ra từ kiểu `Student` bằng cách loại bỏ thuộc tính `'id'` khỏi nó. Điều này đại diện cho thông tin của một sinh viên mới (không có `'id'`).

- `Student` là kiểu dữ liệu chứa thông tin của một sinh viên đã tồn tại (bao gồm cả `'id'` và các thuộc tính khác).

- ✅ Với việc sử dụng `|` (union) có thể chứa thông tin của hai trường hợp trên, ta tạo ra một kiểu hợp nhất cho `FormStateType`. Điều này cho phép `FormStateType` có thể chứa cả thông tin của một sinh viên mới (không có `'id'`) và thông tin của một sinh viên đã tồn tại, tùy thuộc vào ngữ cảnh sử dụng trong mã nguồn.

---

👉 Đoạn 3:

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

- Đoạn code trên khai báo một biến có tên `initialFormState`, được gán một giá trị khởi tạo là một đối tượng thuộc kiểu `FormStateType`.

- `initialFormState` đại diện cho trạng thái ban đầu của biểu mẫu (form). Đối tượng này chứa các thuộc tính tương ứng với các trường dữ liệu trong biểu mẫu, bao gồm `avatar`, `email`, `btc_address`, `country`, `first_name`, `gender`, và `last_name`.

- ✅ Các thuộc tính trong `initialFormState` được khởi tạo với các giá trị rỗng hoặc giá trị mặc định tương ứng, để đảm bảo rằng khi biểu mẫu được hiển thị lần đầu, các trường dữ liệu sẽ không có giá trị định trước.

---

👉 Đoạn 4:

```jsx
type FormError =
  | {
      [key in keyof FormStateType]: string
    }
  | null
```

- Đoạn code trên định nghĩa kiểu `FormError`, một union type gồm hai phần tử:

- Đầu tiên là một object có các thuộc tính tương ứng với các thuộc tính của `FormStateType`. Mỗi thuộc tính trong `FormError` đại diện cho một trường thông tin của form và có giá trị là một chuỗi (`string`) đại diện cho lỗi của trường đó. Điều này cho phép chúng ta lưu trữ thông tin lỗi tương ứng với từng trường trong form.

- Thứ hai là giá trị `null`. Đây là trường hợp không có lỗi xảy ra trong form.

- ✅ Dùng union type `|` cho phép `FormError` có thể là một `object` chứa thông tin lỗi hoặc có giá trị `null`, tùy thuộc vào ngữ cảnh sử dụng.

## Trong trường hợp này, tại sao không sử dụng `interface` mà phải sử dụng `type` ?

- Trong TypeScript, cả `interface` và `type` đều có thể được sử dụng để định nghĩa kiểu dữ liệu tùy chỉnh. Tuy nhiên, có một số khác biệt giữa hai loại này:

1. `Interface`: Interface cho phép khai báo một cấu trúc dữ liệu và kiểu dữ liệu cho đối tượng. Nó thường được sử dụng để định nghĩa các hợp đồng (contracts) và cung cấp sự hỗ trợ cho tính kế thừa và mở rộng.

2. `Type`: Type cho phép định nghĩa một kiểu dữ liệu tùy chỉnh, bao gồm các kiểu hợp nhau (union type), kiểu giao nhau (intersection type), và các kiểu khác như kiểu tuple, kiểu function, kiểu literal, v.v. `Type` thường được sử dụng để tạo ra các kiểu dữ liệu phức tạp hơn và thực hiện các phép toán trên các kiểu.

- ✅ Trong trường hợp của đoạn code trên, sử dụng `type` thay vì `interface` cho kiểu `FormError` không có sự khác biệt quan trọng. Cả hai đều có thể được sử dụng để định nghĩa kiểu dữ liệu tương tự. Lựa chọn giữa `interface` và `type` thường là một vấn đề cá nhân hoặc tuỳ thuộc vào quy ước của dự án.

## Sự khác biệt giữa việc sử dụng `interface` và `type` là gì ?

- Sự khác biệt chính giữa việc sử dụng `interface` và `type` trong TypeScript như sau:

1. `Interface`:

- `Interface` trong TypeScript được sử dụng để định nghĩa cấu trúc dữ liệu, nó có thể chứa các phương thức, thuộc tính, kế thừa từ các interface khác, và có thể được triển khai (implement) bởi các đối tượng.
- `Interface` thường được sử dụng trong việc mô hình hóa cấu trúc dữ liệu và định nghĩa hợp đồng (contract) giữa các thành phần trong code.

2. `Type`:

- `Type` trong TypeScript cũng được sử dụng để định nghĩa cấu trúc dữ liệu, nhưng nó linh hoạt hơn `Interface` và có thể định nghĩa các kiểu dữ liệu tùy chỉnh (custom types) bằng cách kết hợp các kiểu hiện có.
- `Type` thường được sử dụng trong việc định nghĩa kiểu dữ liệu phức tạp, `unions`, `intersections`, và các trường hợp khác mà `Interface` không thể thực hiện được.

- ✅ Tuy nhiên, sự khác biệt giữa `interface` và `type` không lớn và thường được sử dụng tùy theo sở thích và yêu cầu của từng dự án. Trên thực tế, `interface` và `type` có thể được sử dụng chung và có thể thay thế lẫn nhau trong nhiều tình huống.

## Đoạn code đó đang sử dụng `type`. Hãy sử dụng `interface` để viết lại đoạn code đó ?

- Dưới đây là cách sử dụng `interface` để viết lại đoạn code:

```jsx
interface FormError {
  [key in keyof FormStateType]: string;
}

type FormErrorOrNull = FormError | null;
```

- ✅ Ở đây, chúng ta đã sử dụng interface `FormError` để định nghĩa kiểu dữ liệu cho các thuộc tính của `FormStateType` với giá trị là kiểu `string`. Tiếp theo, chúng ta đã sử dụng `FormErrorOrNull` là một kiểu kết hợp (union type) giữa `FormError` và `null` để chỉ định rằng giá trị có thể là một đối tượng `FormError` hoặc `null`.

## Giữa 2 đoạn code đó, có sự khác nhau là gì ?

- Giữa hai đoạn mã đó, sự khác nhau chính là cách định nghĩa kiểu dữ liệu.

- Trong đoạn mã sử dụng `type`, chúng ta sử dụng `type alias` để định nghĩa kiểu dữ liệu `FormError`. Điều này cho phép chúng ta tạo ra một union type bằng cách kết hợp các thuộc tính của `FormStateType` với kiểu `string`.

- Trong đoạn mã sử dụng `interface`, chúng ta sử dụng `interface` để định nghĩa kiểu dữ liệu `FormError`. Chúng ta sử dụng `interface` vì nó thích hợp cho việc mô tả cấu trúc của đối tượng và các thuộc tính của nó.

- ✅ Cả hai đoạn mã đều có cùng mục đích là định nghĩa kiểu dữ liệu cho `FormError`. Sự lựa chọn giữa sử dụng `type alias` hoặc `interface` phụ thuộc vào ngữ cảnh và sở thích của bạn.

## Hãy giải thích rõ hơn về các ý trong đoạn trước ?

- ❓ Câu này được trích trong đoạn trên 👆: `...việc mô tả cấu trúc của đối tượng và các thuộc tính của nó...` ?

- ❓ Câu hỏi đặt ra là: Dòng này có nghĩa là việc khai báo kiểu dữ liệu trong TypeScript tương đương với việc mô tả cấu trúc của đối tượng và các thuộc tính của nó, trong đó sử dụng cú pháp `key: value` phải không ?

- Đúng, dòng đó có nghĩa là bạn đang khai báo kiểu cho một đối tượng (object) với các thuộc tính (properties) được xác định bởi `key` và có kiểu dữ liệu là `value`. Điều này giúp bạn mô tả cấu trúc của đối tượng và định nghĩa các thuộc tính của nó cùng với kiểu dữ liệu tương ứng.

- Ví dụ, trong đoạn mã `FormError`, chúng ta khai báo một đối tượng với các thuộc tính là các `key` của `FormStateType` và kiểu dữ liệu là `string`. Điều này cho phép chúng ta gán các giá trị kiểu `string` cho các thuộc tính tương ứng trong đối tượng `FormError`.

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
