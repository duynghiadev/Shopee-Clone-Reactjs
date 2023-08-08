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

- Trong đoạn mã này, chúng ta đang sử dụng hook `useNavigate()` từ thư viện `react-router-dom`. Hook này có mục đích là để thực hiện các chuyển hướng (điều hướng) trong ứng dụng React sử dụng React Router.

- Hãy xem chi tiết:

1. `const navigate`: Đây là biến mà chúng ta sử dụng để gọi hàm thực hiện chuyển hướng.

2. `useNavigate()`: Đây là hook mà chúng ta sử dụng để lấy một hàm `navigate` từ React Router. Hàm `navigate` này có khả năng thực hiện các chuyển hướng (điều hướng) trong ứng dụng của bạn.

- Ví dụ sử dụng `navigate`:

```jsx
navigate('/products') // Chuyển hướng đến đường dẫn '/products'
navigate('/contact') // Chuyển hướng đến đường dẫn '/contact'
```

- Như vậy, khi bạn cần thực hiện chuyển hướng trong ứng dụng của mình, bạn có thể sử dụng biến `navigate` để gọi hàm `navigate()` và cung cấp đường dẫn bạn muốn điều hướng đến. Điều này giúp bạn thực hiện chuyển hướng giữa các trang một cách dễ dàng và hiệu quả.

---

## 🚀 Ví dụ sử dụng hook useNavigate()

- Dưới đây là một ví dụ sử dụng hook `useNavigate()` để thực hiện chuyển hướng trong ứng dụng React sử dụng React Router:

- Trước tiên, bạn cần cài đặt `react-router-dom` nếu chưa có:

```bash
npm install react-router-dom
npm install --save-dev @types/react-router-dom
```

- Sau đó, bạn có thể tạo một ví dụ như sau:

```jsx
import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate()

  const handleNavigation = () => {
    // Sử dụng biến navigate để thực hiện chuyển hướng đến "/about" khi nút được bấm
    navigate('/about')
  }

  return (
    <div>
      <h1>Trang chủ</h1>
      <button onClick={handleNavigation}>Đến trang "About"</button>
    </div>
  )
}

export default Home
```

- Trong ví dụ trên:

- Chúng ta sử dụng hook `useNavigate()` để lấy hàm `navigate` từ React Router.
- Hàm `handleNavigation` được gọi khi nút được bấm. Trong hàm này, chúng ta sử dụng biến `navigate` để thực hiện chuyển hướng đến trang "/about".
- JSX sử dụng một nút để kích hoạt hàm `handleNavigation` khi được bấm.

- Khi bạn chạy ứng dụng và bấm nút, bạn sẽ thấy ứng dụng chuyển hướng từ trang chủ đến trang "/about".

## 🚀 Ví dụ sử dụng useNavigate() trong các dự án thực tế có sử dụng TypeScript

- Dưới đây là một ví dụ phức tạp hơn, thể hiện cách sử dụng hook `useNavigate()` trong một dự án React thực tế. Trong ví dụ này, chúng ta sẽ tạo một ứng dụng quản lý danh sách sản phẩm với chức năng thêm và xem chi tiết sản phẩm. Code sẽ sử dụng TypeScript để cải thiện tính đúng đắn và hiệu quả của mã:

- Tạo một thư mục `src` trong dự án của bạn và bên trong tạo các tệp tương ứng:

- `src/App.tsx`: Giao diện chính của ứng dụng.
- `src/components/ProductList.tsx`: Danh sách sản phẩm.
- `src/components/ProductDetail.tsx`: Chi tiết sản phẩm.
- `src/components/Header.tsx`: Thanh đầu trang.

1. `src/App.tsx`:

```jsx
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import ProductList from './components/ProductList'
import ProductDetail from './components/ProductDetail'

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<ProductList />} />
        <Route path='/product/:id' element={<ProductDetail />} />
      </Routes>
    </div>
  )
}

export default App
```

2. `src/components/Header.tsx`:

```jsx
import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to='/'>Danh sách sản phẩm</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
```

3. `src/components/ProductList.tsx`:

```jsx
import React from 'react'
import { useNavigate } from 'react-router-dom'

const ProductList = () => {
  const navigate = useNavigate()

  const handleProductClick = (productId: number) => {
    navigate(`/product/${productId}`)
  }

  return (
    <div>
      <h2>Danh sách sản phẩm</h2>
      <ul>
        <li onClick={() => handleProductClick(1)}>Sản phẩm 1</li>
        <li onClick={() => handleProductClick(2)}>Sản phẩm 2</li>
        {/* Thêm các sản phẩm khác */}
      </ul>
    </div>
  )
}

export default ProductList
```

4. `src/components/ProductDetail.tsx`:

```jsx
import React from 'react';
import { useParams } from 'react-router-dom';

interface ProductDetailParams {
  id: string;
}

const ProductDetail = () => {
  const { id } = useParams<ProductDetailParams>();

  return (
    <div>
      <h2>Chi tiết sản phẩm {id}</h2>
      {/* Hiển thị thông tin chi tiết sản phẩm */}
    </div>
  );
};

export default ProductDetail;
```

- Trong ví dụ này:

- Chúng ta sử dụng React Router để quản lý các tuyến đường và sử dụng hook `useNavigate()` để thực hiện chuyển hướng.
- Trong `ProductList`, khi người dùng bấm vào một sản phẩm, chúng ta sử dụng `navigate()` để chuyển hướng đến trang chi tiết sản phẩm tương ứng.
- Trong `ProductDetail`, chúng ta sử dụng `useParams()` để lấy tham số `id` từ URL để hiển thị thông tin chi tiết của sản phẩm.

- Ví dụ này cho thấy cách sử dụng hook `useNavigate()` trong một ứng dụng thực tế với TypeScript để thực hiện chuyển hướng giữa các trang trong ứng dụng React.

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

- Trong đoạn mã trên, chúng ta đang xử lý sự kiện khi người dùng gửi biểu mẫu tìm kiếm:

1. `const onSubmitSearch = handleSubmit((data) => { ... })`: Đây là việc định nghĩa hàm `onSubmitSearch`, mà sẽ được gọi khi người dùng gửi biểu mẫu tìm kiếm. Hàm này sử dụng `handleSubmit` từ thư viện `react-hook-form`, và tham số `data` chứa các giá trị đã nhập vào biểu mẫu.

2. `const config = queryConfig.order ? ... : ...`: Ở đây, chúng ta đang tạo một đối tượng `config` để xác định các tham số truy vấn cho tìm kiếm. Nếu `queryConfig.order` tồn tại (khác null hoặc undefined), chúng ta sẽ sử dụng hàm `omit` từ thư viện `lodash` để loại bỏ các thuộc tính không cần thiết (`order` và `sort_by`) khỏi `queryConfig`, và đặt giá trị `name` từ `data` (giá trị đã nhập vào trường tìm kiếm). Nếu không, chúng ta đơn giản là sử dụng `queryConfig` hiện tại và đặt giá trị `name` từ `data`.

3. `navigate({ ... })`: Ở đây, chúng ta sử dụng hàm `navigate` để thực hiện chuyển hướng đến trang chủ (`path.home`) với các tham số truy vấn được cập nhật dựa trên `config`. Chúng ta sử dụng hàm `createSearchParams` để tạo chuỗi tham số truy vấn từ `config`, và sau đó chuyển nó thành chuỗi bằng cách sử dụng `.toString()`.

4. `return { onSubmitSearch, register }`: Cuối cùng, chúng ta trả về một đối tượng chứa hai giá trị. `onSubmitSearch` là hàm xử lý sự kiện khi gửi biểu mẫu tìm kiếm, và `register` là một phương thức từ hook `useForm` để liên kết các trường trong biểu mẫu với `react-hook-form`.

- Tóm lại, đoạn mã này thực hiện xử lý tìm kiếm và chuyển hướng dựa trên các tham số truy vấn được tạo ra từ dữ liệu nhập vào trong biểu mẫu tìm kiếm.

---

**Hãy cho ví dụ dùng có chức năng search các sản phẩm. Yêu cầu bạn fetch cho tôi 1 API giả. Sau đó tạo hàm `useSearchProducts` để chứa tất cả các chức năng con, có sử dụng `useNavigate`, `createSearchParams`, `useForm`, `omit`, `yupResolver`**

- Dưới đây là một ví dụ về cách tạo một hàm tùy chỉnh `useSearchProducts` để thực hiện tìm kiếm sản phẩm dựa trên các tham số truy vấn. Ví dụ này sử dụng các khái niệm mà bạn đã đề cập: `useNavigate`, `createSearchParams`, `useForm`, `omit`, và `yupResolver`. Tôi sẽ sử dụng thư viện `axios` để làm giả API.

- Trước tiên, bạn cần cài đặt các thư viện cần thiết:

```bash
npm install axios react-router-dom react-hook-form @hookform/resolvers yup
```

- Sau đó, dưới đây là ví dụ về cách tạo hàm `useSearchProducts`:

```jsx
import React from 'react'
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom'
import { useForm, useFormState } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import axios from 'axios'

// Fake API URL
const API_URL = 'https://fakeapi.com/products'

// Page components
const Home: React.FC = () => {
  const navigate = useNavigate()
  const { register, handleSubmit } = useForm()

  const onSubmit = (data) => {
    const queryParams = createSearchParams(data)
    navigate(`/search?${queryParams.toString()}`)
  }

  return (
    <div>
      <h1>Search Products</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>Search Term:</label>
        <input {...register('searchTerm')} />
        <button type='submit'>Search</button>
      </form>
    </div>
  )
}

const SearchResults: React.FC = () => {
  const navigate = useNavigate()
  const params = new URLSearchParams(window.location.search)
  const searchTerm = params.get('searchTerm') || ''

  const { data, error, loading } = useSearchProducts(searchTerm)

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error: {error.message}</p>

  return (
    <div>
      <h2>Search Results</h2>
      <button onClick={() => navigate('/')}>Go back to search</button>
      <ul>
        {data.map((product) => (
          <li key={product.id}>{product.name}</li>
        ))}
      </ul>
    </div>
  )
}

// Custom hook for searching products
const useSearchProducts = (searchTerm: string) => {
  const { errors } = useFormState()
  const schema = yup.object().shape({
    searchTerm: yup.string().required('Search term is required')
  })

  const { data, error, loading } = useApiFetch(API_URL + `?q=${searchTerm}`)

  const { handleSubmit } = useForm({
    resolver: yupResolver(schema),
    defaultValues: { searchTerm }
  })

  const onSubmit = (data) => {
    const queryParams = createSearchParams(data)
    navigate(`/search?${queryParams.toString()}`)
  }

  return { data, error, loading, handleSubmit }
}

// Custom hook for fetching data from API
const useApiFetch = (url: string) => {
  const [data, setData] = React.useState([])
  const [error, setError] = React.useState(null)
  const [loading, setLoading] = React.useState(true)

  React.useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setData(response.data)
      })
      .catch((error) => {
        setError(error)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [url])

  return { data, error, loading }
}

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/search' element={<SearchResults />} />
      </Routes>
    </Router>
  )
}

export default App
```

- Trong ví dụ này:

1. `useSearchProducts` là một hàm tùy chỉnh để thực hiện tìm kiếm sản phẩm. Hàm này sử dụng `useApiFetch` để gửi yêu cầu tìm kiếm sản phẩm từ API.

2. Trang `Home` có một biểu mẫu để nhập từ khóa tìm kiếm. Khi người dùng nhập từ khóa và nhấn nút "Search", hàm `onSubmit` trong `useSearchProducts` được gọi để thực hiện tìm kiếm và điều hướng đến trang `SearchResults` với tham số truy vấn.

3. Trang `SearchResults` hiển thị kết quả tìm kiếm dựa trên tham số truy vấn `searchTerm`. Dữ liệu được lấy từ API sử dụng hàm `useApiFetch`.

4. Trong `useSearchProducts`, chúng ta sử dụng `useForm` để quản lý biểu mẫu tìm kiếm và xác thực dữ liệu bằng `yupResolver`.

5. `useApiFetch` là một hàm tùy chỉnh để gửi yêu cầu GET đến API và trả về dữ liệu, lỗi và trạng thái tải.

6. Component `App` quản lý routing và cấu hình định tuyến cho trang `Home` và `SearchResults`.

- Tóm lại, ví dụ trên mô phỏng cách sử dụng `useSearchProducts` để thực hiện tìm kiếm sản phẩm với các tính năng bao gồm xác thực dữ liệu, điều hướng, và gửi yêu cầu API.

---

## Sau đây là phần giải thích chi tiết đoạn code

❌❌ Đoạn 1 ❌❌

```jsx
import React from 'react'
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom'
import { useForm, useFormState } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import axios from 'axios'
```

- `import React from 'react';`: Dòng này import thư viện React, cho phép bạn sử dụng các thành phần React như React.FC (Functional Component).

- `import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';`: Dòng này import các thành phần từ thư viện `react-router-dom`. Cụ thể:

  - `Router`: Component chứa các thành phần định tuyến.
  - `Routes`: Component dùng để định nghĩa các đường dẫn và thành phần tương ứng.
  - `Route`: Component định nghĩa một đường dẫn và liên kết nó với một thành phần.
  - `useNavigate`: Hook dùng để thực hiện điều hướng trong ứng dụng.

- `import { useForm, useFormState } from 'react-hook-form';`: Dòng này import các hook từ thư viện `react-hook-form` để quản lý biểu mẫu và trạng thái của biểu mẫu.

- `import { yupResolver } from '@hookform/resolvers/yup';`: Dòng này import resolver `yupResolver` từ thư viện `@hookform/resolvers`. Resolver này được sử dụng để kết hợp xác thực dữ liệu từ thư viện `yup` với `react-hook-form`.

- `import * as yup from 'yup';`: Dòng này import toàn bộ các thành phần từ thư viện `yup`, thư viện sử dụng để định nghĩa schema xác thực dữ liệu.

- `import axios from 'axios';`: Dòng này import thư viện `axios`, một thư viện dùng để thực hiện các yêu cầu HTTP, như gửi yêu cầu GET và POST đến API.

- Tóm lại, đoạn mã này import các thư viện và module cần thiết để xây dựng ứng dụng sử dụng React, React Router, React Hook Form, `yup` để xác thực dữ liệu, và `axios` để gửi yêu cầu HTTP.

---

❌❌ Đoạn 2 ❌❌

```jsx
const Home: React.FC = () => {
  // Sử dụng hook useNavigate() để lấy hàm navigate để điều hướng trang
  const navigate = useNavigate()

  // Sử dụng hook useForm() để quản lý biểu mẫu và dữ liệu nhập
  const { register, handleSubmit } = useForm()

  // Hàm được gọi khi người dùng nhấn nút "Search"
  const onSubmit = (data) => {
    // Tạo tham số truy vấn (query parameter) từ dữ liệu nhập trong biểu mẫu
    const queryParams = createSearchParams(data)

    // Thực hiện điều hướng đến trang tìm kiếm kèm theo tham số truy vấn
    navigate(`/search?${queryParams.toString()}`)
  }

  return (
    <div>
      <h1>Search Products</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>Search Term:</label>
        {/*
          Sử dụng hook register() để kết nối trường input 'searchTerm' với useForm
          để React Hook Form quản lý và theo dõi trạng thái của trường này
        */}
        <input {...register('searchTerm')} />

        {/* Nút "Submit" để người dùng gửi biểu mẫu */}
        <button type='submit'>Search</button>
      </form>
    </div>
  )
}
```

- Giải thích từng phần code:

- `const navigate = useNavigate();`: Đây là việc sử dụng hook `useNavigate()` từ thư viện `react-router-dom`. Nó cho phép bạn lấy hàm `navigate` để thực hiện việc điều hướng trang.

- `const { register, handleSubmit } = useForm();`: Đây là sử dụng hook `useForm()` từ thư viện `react-hook-form`. Bạn lấy các hàm `register` và `handleSubmit` để liên kết các trường `input` và xử lý sự kiện gửi biểu mẫu.

- `const onSubmit = (data) => { ... }`: Đây là hàm được gọi khi người dùng nhấn nút "Search". Trong hàm này, chúng ta tạo các tham số truy vấn từ dữ liệu nhập trong biểu mẫu và sử dụng hàm `navigate` để thực hiện điều hướng đến trang tìm kiếm kèm theo tham số truy vấn.

- `<form onSubmit={handleSubmit(onSubmit)}>...</form>`: Đây là phần khai báo biểu mẫu. Khi người dùng nhấn nút "Submit", sự kiện `onSubmit` sẽ được gọi.

- `<input {...register('searchTerm')} />`: Đây là input để người dùng nhập từ khóa tìm kiếm. Sử dụng `register` để kết nối trường này với React Hook Form, cho phép Hook theo dõi và quản lý trạng thái của trường input này.

- `<button type='submit'>Search</button>`: Đây là nút "Submit" để người dùng gửi biểu mẫu.

- Tóm lại, đoạn mã trên giải thích cách sử dụng các hook và hàm từ các thư viện khác nhau để tạo một trang tìm kiếm sản phẩm đơn giản, sử dụng React Hook Form để quản lý biểu mẫu và xử lý dữ liệu nhập từ người dùng.

---

❌❌ Đoạn 3 ❌❌

```jsx
const SearchResults: React.FC = () => {
  // Sử dụng hook useNavigate() để lấy hàm navigate để thực hiện điều hướng trang
  const navigate = useNavigate()

  // Lấy tham số truy vấn từ URL để biết từ khóa tìm kiếm
  const params = new URLSearchParams(window.location.search)
  const searchTerm = params.get('searchTerm') || '' // Lấy giá trị 'searchTerm' từ URL, nếu không có thì gán giá trị mặc định là chuỗi trống

  // Sử dụng custom hook useSearchProducts để tìm kiếm sản phẩm dựa trên từ khóa tìm kiếm
  const { data, error, loading } = useSearchProducts(searchTerm)

  // Kiểm tra trạng thái tải dữ liệu. Nếu đang tải, hiển thị thông báo "Loading..."
  if (loading) return <p>Loading...</p>

  // Kiểm tra nếu có lỗi, hiển thị thông báo lỗi
  if (error) return <p>Error: {error.message}</p>

  // Nếu không có lỗi và đã tải xong dữ liệu, hiển thị kết quả tìm kiếm
  return (
    <div>
      <h2>Search Results</h2>

      {/*
        Nút "Go back to search" để người dùng quay lại trang tìm kiếm ban đầu
        Sử dụng hàm navigate để thực hiện điều hướng
      */}
      <button onClick={() => navigate('/')}>Go back to search</button>

      <ul>
        {/*
          Lặp qua từng sản phẩm trong dữ liệu và hiển thị tên của từng sản phẩm
          Lấy key của sản phẩm là 'id' để làm khóa duy nhất
        */}
        {data.map((product) => (
          <li key={product.id}>{product.name}</li>
        ))}
      </ul>
    </div>
  )
}
```

- `const navigate = useNavigate();`: Sử dụng hook `useNavigate()` để lấy hàm `navigate` để thực hiện điều hướng trang.

- `const params = new URLSearchParams(window.location.search);`: Tạo một đối tượng `URLSearchParams` để lấy tham số truy vấn từ URL. `window.location.search` chứa chuỗi truy vấn từ URL.

- `const searchTerm = params.get('searchTerm') || '';`: Sử dụng hàm `get` từ đối tượng `URLSearchParams` để lấy giá trị của tham số truy vấn 'searchTerm' từ URL. Nếu không có giá trị, gán giá trị mặc định là chuỗi trống.

- `const { data, error, loading } = useSearchProducts(searchTerm);`: Sử dụng custom hook `useSearchProducts` để tìm kiếm sản phẩm dựa trên từ khóa tìm kiếm. Kết quả trả về bao gồm dữ liệu, lỗi, và trạng thái tải.

- `if (loading) return <p>Loading...</p>;`: Kiểm tra trạng thái tải dữ liệu. Nếu đang tải, hiển thị thông báo "Loading..." để người dùng biết dữ liệu đang được tải.

- `if (error) return <p>Error: {error.message}</p>;`: Kiểm tra nếu có lỗi từ dữ liệu tìm kiếm. Nếu có lỗi, hiển thị thông báo lỗi kèm theo thông điệp lỗi.

- `<button onClick={() => navigate('/')}>Go back to search</button>`: Nút "Go back to search" để người dùng quay lại trang tìm kiếm ban đầu. Sử dụng hàm `navigate` để thực hiện điều hướng.

- `{data.map((product) => (<li key={product.id}>{product.name}</li>))}`: Sử dụng hàm `map` để lặp qua từng sản phẩm trong dữ liệu. Đối với mỗi sản phẩm, hiển thị tên của sản phẩm. `key` được sử dụng để đảm bảo mỗi phần tử trong danh sách có khóa duy nhất.

- Tóm lại, đoạn mã trên giải thích cách sử dụng dữ liệu tìm kiếm và tình huống xử lý tải và lỗi để hiển thị kết quả tìm kiếm sản phẩm.

---

❌❌ Đoạn 4 ❌❌

```jsx
const useSearchProducts = (searchTerm: string) => {
  // Sử dụng hook useFormState() để lấy thông tin trạng thái của biểu mẫu
  const { errors } = useFormState()

  // Định nghĩa schema để xác thực dữ liệu nhập
  const schema = yup.object().shape({
    searchTerm: yup.string().required('Search term is required')
  })

  // Sử dụng custom hook useApiFetch để lấy dữ liệu từ API dựa trên từ khóa tìm kiếm
  const { data, error, loading } = useApiFetch(API_URL + `?q=${searchTerm}`)

  // Sử dụng hook useForm() để quản lý biểu mẫu và xác thực dữ liệu
  const { handleSubmit } = useForm({
    resolver: yupResolver(schema),

    // Đặt giá trị mặc định cho trường 'searchTerm' từ dữ liệu hiện tại
    defaultValues: { searchTerm }
  })

  // Hàm được gọi khi người dùng nhấn nút "Search"
  const onSubmit = (data) => {
    // Tạo tham số truy vấn từ dữ liệu nhập trong biểu mẫu
    const queryParams = createSearchParams(data)

    // Thực hiện điều hướng đến trang tìm kiếm kèm theo tham số truy vấn
    navigate(`/search?${queryParams.toString()}`)
  }

  // Trả về dữ liệu, lỗi, trạng thái tải và hàm handleSubmit để sử dụng trong component
  return { data, error, loading, handleSubmit }
}
```

- `const { errors } = useFormState();`: Sử dụng hook `useFormState()` để lấy thông tin về trạng thái của biểu mẫu, bao gồm cả lỗi.

- `const schema = yup.object().shape({ ... });`: Định nghĩa schema để xác thực dữ liệu nhập trong biểu mẫu. Trong trường này, yêu cầu trường 'searchTerm' phải được điền.

- `const { data, error, loading } = useApiFetch(API_URL + ?q=${searchTerm});`: Sử dụng custom hook `useApiFetch` để lấy dữ liệu từ API dựa trên từ khóa tìm kiếm `searchTerm`.

- `const { handleSubmit } = useForm({ ... });`: Sử dụng hook `useForm()` để quản lý biểu mẫu và xác thực dữ liệu. Đặt giá trị mặc định cho trường 'searchTerm' từ dữ liệu hiện tại.

- `const onSubmit = (data) => { ... }`: Hàm được gọi khi người dùng nhấn nút "Search". Trong hàm này, tạo tham số truy vấn từ dữ liệu nhập trong biểu mẫu và sử dụng hàm `navigate` để thực hiện điều hướng đến trang tìm kiếm kèm theo tham số truy vấn.

- `return { data, error, loading, handleSubmit };`: Trả về một đối tượng chứa dữ liệu, lỗi, trạng thái tải và hàm `handleSubmit` để sử dụng trong component.

- Tóm lại, đoạn mã trên giải thích cách sử dụng các hooks và custom hooks khác nhau để quản lý biểu mẫu, xác thực dữ liệu, tìm kiếm sản phẩm từ API, và thực hiện điều hướng trong ứng dụng.

---

❌❌ Đoạn 5 ❌❌

```jsx
const useApiFetch = (url: string) => {
  // Sử dụng React.useState() để tạo các state
  const [data, setData] = React.useState([]) // State chứa dữ liệu
  const [error, setError] = React.useState(null) // State chứa lỗi
  const [loading, setLoading] = React.useState(true) // State để xác định trạng thái tải

  // Sử dụng React.useEffect() để thực hiện side effect khi url thay đổi
  React.useEffect(() => {
    // Gửi yêu cầu GET đến API bằng thư viện axios
    axios
      .get(url)
      .then((response) => {
        // Nếu thành công, cập nhật state data với dữ liệu trả về từ API
        setData(response.data)
      })
      .catch((error) => {
        // Nếu xảy ra lỗi, cập nhật state error với thông tin lỗi
        setError(error)
      })
      .finally(() => {
        // Dù thành công hay thất bại, cập nhật state loading thành false để đánh dấu kết thúc tải dữ liệu
        setLoading(false)
      })
  }, [url]) // Sử dụng dependency array để chỉ thực hiện side effect khi url thay đổi

  // Trả về đối tượng chứa dữ liệu, lỗi và trạng thái tải
  return { data, error, loading }
}
```

- `const [data, setData] = React.useState([]);`: Sử dụng `React.useState()` để tạo state `data` với giá trị mặc định là một mảng rỗng. State này sẽ chứa dữ liệu trả về từ API.

- `const [error, setError] = React.useState(null);`: Tạo state `error` để lưu thông tin lỗi (nếu có). Ban đầu, giá trị lỗi được đặt là `null`.

- `const [loading, setLoading] = React.useState(true);`: Tạo state `loading` để xác định trạng thái tải. Ban đầu, state này được đặt là `true` để biểu thị rằng dữ liệu đang được tải.

- `React.useEffect(() => { ... }, [url]);`: Sử dụng hook `useEffect()` để thực hiện các tác vụ phụ (side effects) khi `url` thay đổi. Trong trường hợp này, khi `url` thay đổi (điều này xảy ra khi bạn cung cấp một URL khác khi gọi hook), yêu cầu GET sẽ được gửi đến API bằng thư viện axios.

- `.then((response) => { ... })`: Xử lý dữ liệu trả về từ yêu cầu GET thành công. Dữ liệu trong `response.data` được cập nhật vào state `data`.

- `.catch((error) => { ... })`: Xử lý khi xảy ra lỗi trong quá trình gửi yêu cầu. Thông tin lỗi được cập nhật vào state `error`.

- `.finally(() => { ... })`: Luôn được thực hiện sau cả khi yêu cầu thành công hay thất bại, dùng để cập nhật state `loading` thành `false` để kết thúc trạng thái tải.

- `return { data, error, loading };`: Trả về một đối tượng chứa dữ liệu, lỗi và trạng thái tải. Điều này cho phép bạn sử dụng dữ liệu, xử lý lỗi và biết trạng thái tải trong component sử dụng hook này.

- Tóm lại, đoạn mã trên định nghĩa một custom hook có tên `useApiFetch` để thực hiện việc gửi yêu cầu GET đến API, quản lý dữ liệu trả về, xử lý lỗi và theo dõi trạng thái tải của dữ liệu.

---

❌❌ Đoạn 6 ❌❌

```jsx
const App: React.FC = () => {
  return (
    // Sử dụng Router để bọc toàn bộ ứng dụng và quản lý các route
    <Router>
      {/* Sử dụng Routes để khai báo các route */}
      <Routes>
        {/*
          Route cho trang chính ("/"): Khi đường dẫn khớp với "/" (root path), hiển thị component Home
          'element' prop được sử dụng để xác định component sẽ được hiển thị cho route này
        */}
        <Route path='/' element={<Home />} />

        {/*
          Route cho trang kết quả tìm kiếm ("/search"): Khi đường dẫn khớp với "/search", hiển thị component SearchResults
          'element' prop được sử dụng để xác định component sẽ được hiển thị cho route này
        */}
        <Route path='/search' element={<SearchResults />} />
      </Routes>
    </Router>
  )
}
```

- `<Router>`: Sử dụng `Router` để bọc toàn bộ ứng dụng và tạo một vùng quản lý các `route` trong ứng dụng.

- `<Routes>`: Sử dụng `Routes` để khai báo các `route` của ứng dụng. Trong đoạn mã này, chúng ta đang khai báo hai `route`.

- `<Route path='/' element={<Home />} />`: Đây là `route` cho trang chính, được kích hoạt khi đường dẫn khớp với "/" (root path). Prop `path` xác định đường dẫn cần khớp, và prop `element` xác định component sẽ được hiển thị khi `route` này được kích hoạt. Trong trường hợp này, khi trang chính được mở, component `Home` sẽ được hiển thị.

- `<Route path='/search' element={<SearchResults />} />`: Đây là `route` cho trang kết quả tìm kiếm, được kích hoạt khi đường dẫn khớp với "/search". Prop `path` xác định đường dẫn cần khớp, và prop `element` xác định component sẽ được hiển thị khi `route` này được kích hoạt. Trong trường hợp này, khi người dùng truy cập trang kết quả tìm kiếm, component `SearchResults` sẽ được hiển thị.

- Tóm lại, đoạn mã cuối cùng giải thích cách sử dụng `Router` và `Routes` từ thư viện `react-router-dom` để xác định và quản lý các `route` trong ứng dụng.

---
