# Đây là file giải thích chi tiết đoạn code trong file useSearchProducts.tsx

```jsx
import { yupResolver } from '@hookform/resolvers/yup'
import omit from 'lodash/omit'
import { useForm } from 'react-hook-form'
import useQueryConfig from './useQueryConfig'
import { schema, Schema } from 'src/utils/rules'
import { createSearchParams, useNavigate } from 'react-router-dom'
import path from 'src/constants/path'

type FormData = Pick<Schema, 'name'>
```

- `yupResolver`: là một resolver được sử dụng cùng với `react-hook-form` để kiểm tra và xác nhận dữ liệu đầu vào dựa trên schema được định nghĩa bằng thư viện `yup`.
- `omit`: là một hàm từ thư viện `lodash` giúp loại bỏ các thuộc tính không mong muốn từ một đối tượng.
- `useForm`: là một hook từ thư viện `react-hook-form` để quản lý các biểu mẫu và dữ liệu liên quan.
- `useQueryConfig`: là một custom hook đã được định nghĩa trước đó để lấy các tham số truy vấn từ URL.
- `schema`: là một schema được định nghĩa để kiểm tra dữ liệu đầu vào, sử dụng thư viện `yup`.
- `createSearchParams` và `useNavigate`: là các hàm từ thư viện `react-router-dom` để tạo chuỗi tham số truy vấn mới và thực hiện điều hướng trong ứng dụng.
- `path`: là một module chứa các đường dẫn cố định được định nghĩa trước.

- Dòng này:

```jsx
type FormData = Pick<Schema, 'name'>
```

- Định nghĩa kiểu dữ liệu `FormData` là một kiểu con của kiểu dữ liệu `Schema` (được định nghĩa trong file `src/utils/rules`) chỉ bao gồm thuộc tính `name`.

- Tóm lại: Đoạn code ở trên thực hiện việc import các thư viện và kiểu dữ liệu cần thiết, định nghĩa kiểu dữ liệu `FormData`, và sẵn sàng sử dụng các phần tử từ các thư viện để thực hiện chức năng tìm kiếm sản phẩm.

---

```jsx
const nameSchema = schema.pick(['name'])
```

- Đoạn mã này liên quan đến việc sử dụng schema (quy tắc kiểm tra dữ liệu) từ thư viện `yup` để định nghĩa cách kiểm tra dữ liệu của trường "name". Hãy giải thích mã này:

- `schema`: Đây là một đối tượng chứa các phương thức để định nghĩa các quy tắc kiểm tra dữ liệu trong thư viện `yup`. Mã này sẽ sử dụng schema để tạo một quy tắc kiểm tra cho trường "name".

- `.pick(['name'])`: Phương thức `pick` của schema `yup` cho phép bạn chọn các trường (các thuộc tính) cụ thể từ đối tượng. Trong trường hợp này, `'name'` là tên trường mà bạn muốn áp dụng quy tắc kiểm tra. Điều này đảm bảo rằng schema `nameSchema` chỉ chứa quy tắc kiểm tra cho trường "name".

- Về cơ bản, sau dòng mã trên, `nameSchema` là một đối tượng schema của thư viện `yup` chứa quy tắc kiểm tra dành riêng cho trường "name". Cách này giúp bạn dễ dàng xác thực dữ liệu nhập vào trong biểu mẫu hoặc các tình huống khác.

---

## Ví dụ về Schema sử dụng thư viện `Yup`

**1. Dưới đây là một ví dụ về cách tạo một `schema` sử dụng thư viện `yup` để xác thực dữ liệu và hiển thị thông báo lỗi tương ứng:**

```jsx
import * as yup from 'yup'

const validationSchema = yup.object().shape({
  name: yup.string().required('Vui lòng nhập tên sản phẩm'),
  price: yup.number().required('Vui lòng nhập giá sản phẩm').min(0, 'Giá sản phẩm không hợp lệ'),
  category: yup.string().required('Vui lòng chọn danh mục sản phẩm')
  // Thêm các trường khác cần xác thực ở đây
})

export default validationSchema
```

- Trong ví dụ trên, chúng ta định nghĩa một schema `validationSchema` sử dụng `yup`. Mỗi trường của biểu mẫu có một quy tắc kiểm tra được định nghĩa trong schema. Ví dụ, cho trường `name`, chúng ta sử dụng `.required('Vui lòng nhập tên sản phẩm')` để xác định rằng trường này là bắt buộc và thông báo lỗi 'Vui lòng nhập tên sản phẩm' sẽ được hiển thị nếu người dùng không nhập.

- Tương tự, chúng ta xác thực trường `price` để đảm bảo giá trị nhập vào là một số và không âm. Chúng ta cũng thực hiện xác thực cho trường `category` để đảm bảo người dùng chọn một danh mục.

- Bạn có thể thêm các trường khác và các quy tắc xác thực tương ứng tùy theo yêu cầu của biểu mẫu của bạn. Khi bạn sử dụng schema này với `yupResolver` trong `react-hook-form`, thông báo lỗi tương ứng sẽ được hiển thị nếu dữ liệu nhập vào không thỏa mãn các quy tắc kiểm tra.

**Sau đây là phần giải thích chi tiết đoạn code**

- Đây là đoạn code của ví dụ phía trên:

```jsx
import * as yup from 'yup'

const validationSchema = yup.object().shape({
  name: yup.string().required('Vui lòng nhập tên sản phẩm'),
  price: yup.number().required('Vui lòng nhập giá sản phẩm').min(0, 'Giá sản phẩm không hợp lệ'),
  category: yup.string().required('Vui lòng chọn danh mục sản phẩm')
  // Thêm các trường khác cần xác thực ở đây
})

export default validationSchema
```

- Dưới đây là giải thích chi tiết cho đoạn mã tạo schema xác thực sử dụng thư viện `yup`:

1. Import thư viện `yup` và tạo schema:

```jsx
import * as yup from 'yup'

const validationSchema = yup.object().shape({
  // ...
})
```

- `import * as yup from 'yup';`: Đây là cách import toàn bộ thư viện `yup` và gán nó vào biến `yup`.

- `validationSchema`: Đây là biến chứa schema xác thực. Chúng ta sẽ định nghĩa quy tắc kiểm tra cho từng trường của biểu mẫu trong schema này.

2. Xác thực cho trường `name`:

```jsx
name: yup.string().required('Vui lòng nhập tên sản phẩm'),
```

- `name`: Đây là tên của trường trong biểu mẫu mà chúng ta đang xác thực.
- `yup.string()`: Đây là phương thức để xác định rằng trường đó phải là kiểu chuỗi.
- `.required('Vui lòng nhập tên sản phẩm')`: Đây là phương thức xác định rằng trường `name` là bắt buộc. Nếu người dùng không nhập dữ liệu, thông báo lỗi 'Vui lòng nhập tên sản phẩm' sẽ được hiển thị.

3. Xác thực cho trường `price`:

```jsx
price: yup
  .number()
  .required('Vui lòng nhập giá sản phẩm')
  .min(0, 'Giá sản phẩm không hợp lệ'),
```

- Tương tự như trường `name`, chúng ta đang xác thực trường `price`.
- `yup.number()`: Đây là phương thức để xác định rằng trường đó phải là kiểu số.
- `.required('Vui lòng nhập giá sản phẩm')`: Trường `price` là bắt buộc. Nếu người dùng không nhập dữ liệu, thông báo lỗi 'Vui lòng nhập giá sản phẩm' sẽ được hiển thị.
- `.min(0, 'Giá sản phẩm không hợp lệ')`: Chúng ta sử dụng `.min()` để xác định giá trị tối thiểu cho trường `price`. Trong trường hợp này, giá trị tối thiểu là 0. Nếu người dùng nhập một giá trị nhỏ hơn 0, thông báo lỗi 'Giá sản phẩm không hợp lệ' sẽ được hiển thị.

4. Xác thực cho trường `category`:

```jsx
category: yup.string().required('Vui lòng chọn danh mục sản phẩm'),
```

- Tương tự như trường `name` và `price`, chúng ta đang xác thực trường `category`.
- `yup.string()`: Đây là phương thức để xác định rằng trường đó phải là kiểu chuỗi.
- `.required('Vui lòng chọn danh mục sản phẩm')`: Trường `category` là bắt buộc. Nếu người dùng không chọn dữ liệu, thông báo lỗi 'Vui lòng chọn danh mục sản phẩm' sẽ được hiển thị.

- Cuối cùng, bạn có thể thêm các trường khác và quy tắc xác thực tương ứng vào schema tương tự như trên.

- Tóm lại, đoạn mã trên sử dụng thư viện `yup` để định nghĩa các quy tắc kiểm tra cho các trường của biểu mẫu. Khi bạn sử dụng schema này cùng với `yupResolver` trong `react-hook-form`, thông báo lỗi tương ứng sẽ được hiển thị khi dữ liệu nhập vào không thỏa mãn các quy tắc.

---

```jsx
export default function useSearchProducts() {
  const queryConfig = useQueryConfig()
}
```

- Dưới đây là giải thích chi tiết cho đoạn mã này:

- `export default function useSearchProducts() {`: Đây là việc định nghĩa một custom hook (hàm tùy chỉnh) có tên là `useSearchProducts`.

- `const queryConfig = useQueryConfig()`: Trong phần thân của custom hook, chúng ta sử dụng hook `useQueryConfig()` (đã được định nghĩa trước đó) để lấy thông tin về các tham số truy vấn từ URL và gán vào biến `queryConfig`.

- Về mặt chức năng, custom hook `useSearchProducts` có nhiệm vụ là lấy thông tin về các tham số truy vấn từ URL (sử dụng `useQueryConfig`) để sử dụng trong việc tìm kiếm sản phẩm. Từ đó, các thông tin này có thể được sử dụng để thực hiện các tác vụ liên quan đến tìm kiếm, sắp xếp, lọc sản phẩm trong ứng dụng của bạn. Đoạn mã trên chỉ mô tả phần cơ bản của custom hook, có thể tiếp tục bổ sung các phần xử lý khác liên quan đến việc tìm kiếm sản phẩm.

---

```jsx
const { register, handleSubmit } =
  useForm <
  FormData >
  {
    defaultValues: {
      name: ''
    },
    resolver: yupResolver(nameSchema)
  }
```

- Trong đoạn mã trên, chúng ta sử dụng hook `useForm` từ thư viện `react-hook-form` để quản lý biểu mẫu và dữ liệu liên quan. Đoạn mã này đang thực hiện một số cấu hình cho biểu mẫu. Dưới đây là giải thích từng phần:

1. `const { register, handleSubmit }`: Dùng để giới thiệu tạo ra hai biến `register` và `handleSubmit` từ hook `useForm`.

2. `useForm<FormData>({ ... })`: Gọi hook `useForm` và cấu hình nó sử dụng một kiểu dữ liệu `FormData` được chỉ định (đã được định nghĩa trước đó).

3. `defaultValues: { name: '' }`: Thông qua `defaultValues`, chúng ta đang thiết lập giá trị mặc định cho trường `name` trong biểu mẫu. Nếu giá trị này không được thay đổi bởi người dùng, giá trị mặc định sẽ là một chuỗi rỗng.

4. `resolver: yupResolver(nameSchema)`: Đây là phần quan trọng nhất. Chúng ta đang sử dụng resolver `yupResolver` từ thư viện `@hookform/resolvers/yup` để xác thực dữ liệu trong biểu mẫu. `nameSchema` đã được định nghĩa trước đó để áp dụng các quy tắc xác thực cho trường `name`.

---

**Dưới đây là ví dụ có sử dụng `yupResolver` trong `react-hook-form`**

- Dưới đây là một ví dụ về cách sử dụng thư viện React Hook Form cùng với `yupResolver` để xác thực dữ liệu trong một biểu mẫu:

1. Đầu tiên, bạn cần cài đặt các thư viện cần thiết:

```bash
npm install react-hook-form yup @hookform/resolvers
```

2. Sau đó, bạn có thể tạo một component React sử dụng React Hook Form và `yupResolver` để xác thực dữ liệu:

```jsx
import React from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

const schema = yup.object().shape({
  name: yup.string().required('Name is required'),
  email: yup.string().email('Invalid email').required('Email is required'),
  age: yup.number().typeError('Age must be a number').required('Age is required').positive('Age must be positive')
})

function App() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema)
  })

  const onSubmit = (data) => {
    console.log(data)
  }

  return (
    <div>
      <h1>React Hook Form with yupResolver</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>Name</label>
          <input {...register('name')} />
          {errors.name && <p>{errors.name.message}</p>}
        </div>
        <div>
          <label>Email</label>
          <input {...register('email')} />
          {errors.email && <p>{errors.email.message}</p>}
        </div>
        <div>
          <label>Age</label>
          <input {...register('age')} />
          {errors.age && <p>{errors.age.message}</p>}
        </div>
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default App
```

- Trong ví dụ này:

- Chúng ta đã định nghĩa một schema `yup` để xác thực dữ liệu của biểu mẫu. Mỗi trường trong biểu mẫu có một quy tắc xác thực tương ứng.
- Chúng ta sử dụng hook `useForm` từ React Hook Form để quản lý biểu mẫu.
- Chúng ta truyền `yupResolver(schema)` như một option vào `useForm` để sử dụng xác thực dữ liệu dựa trên schema đã định nghĩa.
- Trong JSX, chúng ta sử dụng `register` để liên kết các trường input với React Hook Form.
- `errors` object được cung cấp bởi React Hook Form để hiển thị thông báo lỗi tương ứng với từng trường.
- Khi người dùng nhấn nút "Submit", hàm `onSubmit` sẽ được gọi, và dữ liệu sẽ được truyền vào.

- Với ví dụ này, bạn có thể thấy cách sử dụng `yupResolver` để xác thực dữ liệu trong biểu mẫu sử dụng React Hook Form.

**Dưới đây là phần giải thích chi tiết đoạn code**

- Đoạn mã này là một ví dụ cụ thể về cách sử dụng React Hook Form cùng với `yupResolver` để tạo và xác thực biểu mẫu. Hãy giải thích từng phần của đoạn mã:

1. Import các thư viện và module cần thiết:

```jsx
import React from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
```

- `react`: Thư viện React để tạo giao diện người dùng.
- `useForm`: Hook từ React Hook Form để quản lý biểu mẫu.
- `yupResolver`: Resolver từ `@hookform/resolvers/yup` để sử dụng xác thực dữ liệu dựa trên schema `yup`.
- `yup`: Thư viện `yup` dùng để định nghĩa schema xác thực dữ liệu.

2. Định nghĩa schema `yup` cho biểu mẫu:

```jsx
const schema = yup.object().shape({
  name: yup.string().required('Name is required'),
  email: yup.string().email('Invalid email').required('Email is required'),
  age: yup.number().typeError('Age must be a number').required('Age is required').positive('Age must be positive')
})
```

- Đây là một schema `yup` gồm ba trường: `name`, `email`, và `age`.
- Mỗi trường có các quy tắc xác thực tương ứng.

3. Định nghĩa component `App`:

```jsx
function App() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema)
  })

  const onSubmit = (data) => {
    console.log(data)
  }
}
```

- Sử dụng hook `useForm` để khởi tạo biểu mẫu và quản lý nó.
- resolver trong `useForm` được thiết lập là `yupResolver(schema)` để sử dụng schema `yup` đã định nghĩa.

- `onSubmit` được gọi khi người dùng nhấn nút "Submit":
- Khi người dùng nhấn nút "Submit", `data` chứa thông tin của biểu mẫu sẽ được in ra trong console.

4. JSX để hiển thị giao diện biểu mẫu và thông báo lỗi:

```jsx
return (
  <div>
    <h1>React Hook Form with yupResolver</h1>
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>Name</label>
        <input {...register('name')} />
        {errors.name && <p>{errors.name.message}</p>}
      </div>
      <div>
        <label>Email</label>
        <input {...register('email')} />
        {errors.email && <p>{errors.email.message}</p>}
      </div>
      <div>
        <label>Age</label>
        <input {...register('age')} />
        {errors.age && <p>{errors.age.message}</p>}
      </div>
      <button type='submit'>Submit</button>
    </form>
  </div>
)
```

- Hiển thị giao diện cho component `App` bao gồm tiêu đề, biểu mẫu và nút "Submit".
- Mỗi trường trong biểu mẫu được liên kết với React Hook Form bằng cách sử dụng `{...register('fieldName')}`.
- `errors` object được sử dụng để hiển thị thông báo lỗi tương ứng với từng trường.

---

```jsx
const navigate = useNavigate()
```

---

```jsx
const onSubmitSearch = handleSubmit((data) => {
  const config = queryConfig.order
    ? omit(
        {
          ...queryConfig,
          name: data.name
        },
        ['order', 'sort_by']
      )
    : {
        ...queryConfig,
        name: data.name
      }
  navigate({
    pathname: path.home,
    search: createSearchParams(config).toString()
  })
})

return { onSubmitSearch, register }
```

---
