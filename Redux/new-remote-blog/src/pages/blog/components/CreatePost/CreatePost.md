## Giải thích code chi tiết:

✅✅ Đoạn code 1 ✅✅

```jsx
import classNames from 'classnames'
import { useAddPostMutation, useGetPostQuery, useUpdatePostMutation } from 'pages/blog/blog.service'
import React, { Fragment, useEffect, useMemo, useState } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from 'store'
import { Post } from 'types/blog.type'
import { isEntityError, isFetchBaseQueryError } from 'utils/helpers'
```

- Đoạn mã trên định nghĩa một component React được sử dụng trong trang blog. Hãy đi qua từng phần của mã để hiểu cách nó hoạt động:

1. Import các module và hàm cần thiết:

- `classNames` từ classnames: Được sử dụng để tạo các class name dựa trên các điều kiện.
- `useAddPostMutation`, `useGetPostQuery`, `useUpdatePostMutation` từ 'pages/blog/blog.service': Các hooks được xuất từ API slice để thực hiện các tác vụ thêm, lấy và cập nhật bài viết.
- `React`, `{ Fragment, useEffect, useMemo, useState }` từ 'react': Các module và hooks của React.
- `useSelector` từ 'react-redux': Hook để truy cập vào Redux store và lấy dữ liệu từ state.
- `RootState` từ 'store': Kiểu dữ liệu của root state của Redux store.
- `Post` từ 'types/blog.type': Kiểu dữ liệu của bài viết.
- `isEntityError`, `isFetchBaseQueryError` từ 'utils/helpers': Các hàm trợ giúp để kiểm tra lỗi từ API response.

## ❌❌ Chú ý: Bổ sung thêm !!❌❌

## `import { useAddPostMutation, useGetPostQuery, useUpdatePostMutation } from 'pages/blog/blog.service'` các hook này được xuất ra từ slice api là đúng hay là sai ?

- Có thể nói là đúng. Tuy nhiên, không có đủ thông tin trong đoạn code bạn cung cấp để xác định chính xác nguồn gốc của các hook `useAddPostMutation`, `useGetPostQuery`, và `useUpdatePostMutation`.

- Các hook như `useAddPostMutation`, `useGetPostQuery`, và `useUpdatePostMutation` thường được tạo ra từ các slice API của Redux Toolkit. Những slice API này là một phần của RTK Query, một thư viện của Redux Toolkit được sử dụng để quản lý các yêu cầu mạng, cache dữ liệu và tự động tạo ra các reducers và actions liên quan đến việc gọi API.

- Điều quan trọng là các hook này phải được tạo từ các slice API chứa các mô hình dữ liệu và logic liên quan đến blog, ví dụ như `pages/blog/blog.service`. Các slice API này định nghĩa các endpoints, actions, reducers và các hooks liên quan để tương tác với API và cập nhật state của ứng dụng. Vì vậy, nếu các hook này được xuất ra từ một slice API như vậy, thì có thể nói là chúng được xuất ra từ API slice.

## Nhưng chúng được tạo từ createApi ? createApi là api slice đó hả ?

- Đúng, `createApi` là một hàm được cung cấp bởi RTK Query để tạo ra một instance của API slice. Nó là một phần quan trọng trong quá trình xây dựng API slice và khởi tạo các endpoint, actions và reducers liên quan.

- Khi sử dụng `createApi`, bạn cần cung cấp một object chứa các endpoint definitions, bao gồm các phương thức HTTP (như GET, POST, PUT, DELETE), các URL và các tùy chọn khác liên quan đến việc gọi API. `createApi` sẽ sử dụng thông tin này để tự động tạo ra các actions, reducers và hooks tương ứng.

- Sau khi gọi `createApi`, bạn sẽ nhận được một đối tượng API slice, chứa các thông tin và các hooks đã được tạo ra từ endpoint definitions. Bạn có thể sử dụng các hooks như `useAddPostMutation`, `useGetPostQuery`, `useUpdatePostMutation` từ API slice này để tương tác với API và cập nhật state của ứng dụng.

- Vì vậy, trong trường hợp của bạn, có thể nói là các hooks `useAddPostMutation`, `useGetPostQuery`, `useUpdatePostMutation` được tạo ra từ một instance của API slice được tạo bằng `createApi`.

2. Định nghĩa component chính:

- Sử dụng hàm `useState` để khởi tạo state của component.
- Sử dụng `useSelector` để lấy dữ liệu từ Redux store (lấy dữ liệu state) thông qua selector state có kiểu dữ liệu là RootState.
- Sử dụng các hooks như `useAddPostMutation`, `useGetPostQuery`, `useUpdatePostMutation` để gọi các endpoint API và lấy dữ liệu bài viết.
- Sử dụng các hooks như `useEffect` để thực hiện các tác vụ khi component được render hoặc dữ liệu thay đổi.
- Sử dụng các hàm như `classNames` để tạo class name dựa trên điều kiện.
- Trả về JSX để hiển thị nội dung của component.

- Tổng quan, đoạn mã trên là một component React trong trang blog. Nó sử dụng hooks để gọi API và lấy dữ liệu bài viết, cùng với các hàm trợ giúp để xử lý lỗi và tạo class name.

✅✅ Đoạn code 2 ✅✅

```jsx
const initialState: Omit<Post, 'id'> = {
  description: '',
  featuredImage: '',
  publishDate: '',
  published: false,
  title: ''
}
```

- Dòng code trên định nghĩa biến `initialState` với kiểu dữ liệu `Omit<Post, 'id'>`. Đây là một khởi tạo ban đầu cho một đối tượng có thuộc tính tương tự như đối tượng `Post`, nhưng không bao gồm (loại bỏ) thuộc tính `'id'`.

- Giải thích từng phần của đoạn code:

  - `const initialState`: Đây là tên biến cho khởi tạo ban đầu.
  - `Omit<Post, 'id'>`: Đây là kiểu dữ liệu cho biến `initialState`. `Omit` là một loại kiểu dữ liệu trong TypeScript cho phép ta tạo ra một phiên bản mới của một kiểu dữ liệu đã cho bằng cách loại bỏ một hoặc nhiều thuộc tính khỏi kiểu dữ liệu đó. Trong trường hợp này, ta sử dụng `Omit<Post, 'id'>` để loại bỏ thuộc tính `'id'` khỏi kiểu dữ liệu `Post`.
  - `{ description: '', featuredImage: '', publishDate: '', published: false, title: '' }`: Đây là giá trị khởi tạo ban đầu cho biến `initialState`. Đối tượng này có các thuộc tính tương ứng với kiểu dữ liệu `Post` sau khi loại bỏ thuộc tính `'id'`. Các thuộc tính này được gán giá trị ban đầu là một chuỗi rỗng (`''`) cho các thuộc tính `description`, `featuredImage`, `publishDate`, `title`, và `false` cho thuộc tính `published`.

- Tóm lại, dòng code trên khởi tạo một đối tượng `initialState` với các thuộc tính tương ứng với kiểu dữ liệu `Post`, nhưng không bao gồm thuộc tính `'id'`. Các thuộc tính này được gán giá trị ban đầu là chuỗi rỗng và `false`.

✅✅ Đoạn code 3 ✅✅

```jsx
type FormError =
  | {
      [key in keyof typeof initialState]: string
    }
  | null
```

- Đoạn code trên định nghĩa một kiểu dữ liệu `union`, `FormError` đại diện các lỗi trong form. Kiểu dữ liệu này có hai lựa chọn:

- Dòng code `{ [key in keyof typeof initialState]: string }` sử dụng một TypeScript feature gọi là mapped types để tạo ra một đối tượng có cấu trúc tương tự với `initialState`, nhưng với kiểu dữ liệu của mỗi thuộc tính được thay thế bằng kiểu `string`.

  - `keyof typeof initialState`: Là một union type chứa tên của các thuộc tính trong `initialState`. `keyof` được sử dụng để trích xuất tập hợp tên thuộc tính từ một kiểu dữ liệu.
  - `key in keyof typeof initialState`: Đây là phần mapped type, mỗi `key` trong union type `keyof typeof initialState` sẽ được lặp qua.
  - `[key in keyof typeof initialState]: string`: Đây là kiểu dữ liệu của thuộc tính trong đối tượng kết quả, trong trường hợp này, mỗi thuộc tính sẽ có kiểu là `string`.

- Kết hợp lại, `{ [key in keyof typeof initialState]: string }` tạo ra một đối tượng với các thuộc tính tương tự `initialState`, nhưng kiểu dữ liệu của mỗi thuộc tính là `string`. Điều này cho phép biểu diễn các thông báo lỗi cụ thể cho từng trường trong form.

- `null`: Đây là trường hợp form không gặp lỗi, không có thông báo lỗi nào.

- Tóm lại, kiểu dữ liệu `FormError` cho phép biểu diễn một trạng thái lỗi của form dựa trên các thông báo lỗi cụ thể cho từng trường, hoặc trạng thái không có lỗi.

## ❌❌ Chú ý: Giải thích kiểu dữ liệu union là gì ? ❌❌

- Trong TypeScript, kiểu dữ liệu union cho phép kết hợp nhiều kiểu dữ liệu lại với nhau. Một union type được định nghĩa bằng cách sử dụng ký tự đường chéo dọc (`|`) giữa các kiểu dữ liệu.

- Với union type, một biến có thể chứa giá trị của bất kỳ kiểu dữ liệu nào trong union đó. Khi thực hiện các thao tác hay kiểm tra kiểu, TypeScript sẽ áp dụng các quy tắc liên quan đến từng kiểu trong union để đảm bảo tính đúng đắn và an toàn.

- Ví dụ:

```jsx
let myVar: string | number

myVar = 'Hello' // Đúng vì kiểu dữ liệu string nằm trong union
myVar = 10 // Đúng vì kiểu dữ liệu number nằm trong union
myVar = true // Sai vì kiểu dữ liệu boolean không nằm trong union

function printValue(value: string | number) {
  console.log(value)
}

printValue('Hello') // Đúng vì kiểu dữ liệu string nằm trong union
printValue(10) // Đúng vì kiểu dữ liệu number nằm trong union
printValue(true) // Sai vì kiểu dữ liệu boolean không nằm trong union
```

- Union type rất hữu ích khi làm việc với các giá trị có thể có nhiều kiểu dữ liệu khác nhau. Nó giúp kiểm soát và đảm bảo tính chính xác của kiểu dữ liệu trong quá trình phát triển ứng dụng TypeScript.

## ❌❌ Nói chung là kiểu dữ liệu union là kiểu 'hoặc' đúng không ? ❌❌

- Đúng, kiểu dữ liệu union trong TypeScript cho phép định nghĩa một biến có thể chứa giá trị thuộc một trong các kiểu dữ liệu được khai báo trong union. Bạn có thể hiểu đơn giản rằng kiểu dữ liệu union đại diện cho `"hoặc"` giữa các kiểu dữ liệu.

- Ví dụ: `string | number` đại diện cho kiểu dữ liệu có thể là một chuỗi hoặc một số. Biến có kiểu dữ liệu union này có thể chứa một giá trị là chuỗi hoặc số.

- Khi sử dụng kiểu dữ liệu union, bạn có thể thực hiện các kiểm tra kiểu (`typeof`, `instanceof`) hoặc sử dụng các phép toán và phương thức phù hợp với từng kiểu dữ liệu trong union.

- Ví dụ:

```jsx
let myVar: string | number

myVar = 'Hello' // Đúng, myVar có kiểu dữ liệu là chuỗi
myVar = 10 // Đúng, myVar có kiểu dữ liệu là số
myVar = true // Sai, myVar không có kiểu dữ liệu là boolean

if (typeof myVar === 'string') {
  // Kiểm tra kiểu dữ liệu là chuỗi
  console.log(myVar.length) // Sử dụng phương thức của chuỗi
} else if (typeof myVar === 'number') {
  // Kiểm tra kiểu dữ liệu là số
  console.log(myVar.toFixed(2)) // Sử dụng phương thức của số
}
```

- Kiểu dữ liệu union cho phép bạn linh hoạt xử lý các giá trị có thể thuộc nhiều kiểu dữ liệu khác nhau mà không cần ép kiểu hoặc tạo các kiểu dữ liệu phức tạp khác.

- Trong TypeScript, kiểm tra kiểu union sẽ diễn ra theo trình tự từ trái sang phải trong union. Khi một kiểu trong union thoả mãn, TypeScript sẽ hiểu rằng biến có kiểu union thuộc vào kiểu đó.

- Vì vậy, nếu bạn muốn kiểm tra qua tất cả các kiểu trong union, bạn có thể sử dụng `else if` cho mỗi kiểu hoặc sử dụng các phép toán kiểm tra kiểu khác nhau, như `instanceof`, `Array.isArray`, hoặc sử dụng một hàm kiểm tra tùy chỉnh.

## ❌❌ Chú ý: Giải thích kiểu dữ liệu keyof typeof là gì ? ❌❌

- Trong TypeScript, `keyof typeof` được sử dụng để lấy tập hợp tên thuộc tính của một đối tượng hoặc một kiểu đối tượng.

- Giả sử chúng ta có một đối tượng `obj` với các thuộc tính như sau:

```jsx
const obj = {
  name: 'John',
  age: 25,
  city: 'New York'
}
```

- Chúng ta có thể sử dụng `keyof typeof` để lấy tập hợp các tên thuộc tính của `obj` như sau:

```jsx
type ObjKeys = keyof typeof obj;
```

- Kết quả sẽ là một union type chứa các tên thuộc tính của `obj`: `'name' | 'age' | 'city'`.

- Điều này có lợi ích khi bạn muốn áp dụng kiểm tra kiểu hoặc thực hiện các thao tác trên các thuộc tính của một đối tượng mà không cần liệt kê tên thuộc tính một cách rõ ràng.

## 👉👉👉 Đây là cách giải thích dễ hiểu hơn: 👈👈👈

- Rõ ràng hơn, `keyof typeof` được sử dụng để truy xuất tập hợp tên thuộc tính của một đối tượng hoặc một kiểu đối tượng trong TypeScript.

- Giả sử chúng ta có một đối tượng như sau:

```jsx
const obj = {
  name: 'John',
  age: 25,
  city: 'New York'
}
```

- Khi sử dụng `typeof obj`, chúng ta sẽ có kiểu đối tượng của `obj`, tức là `{ name: string, age: number, city: string }`.

- Khi sử dụng `keyof` trên `typeof obj`, chúng ta có thể truy xuất tập hợp các tên thuộc tính của `obj`, tức là `'name' | 'age' | 'city'`. Đây là một union type chứa các tên thuộc tính của đối tượng.

- Ví dụ khác, giả sử chúng ta có một kiểu đối tượng như sau:

```jsx
type Person = {
  name: string,
  age: number,
  city: string
}
```

- Khi sử dụng keyof typeof Person, chúng ta cũng sẽ có tập hợp các tên thuộc tính của `Person`, tức là `'name' | 'age' | 'city'`.

- Tổng quát, `keyof typeof` giúp chúng ta truy xuất tập hợp các tên thuộc tính của một đối tượng hoặc một kiểu đối tượng trong TypeScript một cách tự động, mà không cần phải liệt kê tên thuộc tính một cách rõ ràng.

## ❌❌ Vậy là khi sử dụng cách đó thì chúng ta chỉ lấy tên của thuộc tính thôi chứ không lấy kiểu dữ liệu của từng tên hả ? ❌❌

- Đúng, khi sử dụng `keyof typeof`, chúng ta chỉ lấy được tập hợp các tên thuộc tính của đối tượng hoặc kiểu đối tượng, không phải kiểu dữ liệu (data type) của từng thuộc tính.

- Ví dụ, nếu chúng ta có một kiểu đối tượng như sau:

```jsx
type Person = {
  name: string,
  age: number,
  city: string
}
```

- Khi sử dụng `keyof typeof Person`, kết quả trả về sẽ là `'name' | 'age' | 'city'`, đại diện cho tập hợp các tên thuộc tính của `Person`. Tuy nhiên, không có thông tin về kiểu dữ liệu của từng thuộc tính được trả về bởi `keyof typeof`.

- Để lấy kiểu dữ liệu (data type) của từng thuộc tính, chúng ta có thể sử dụng `typeof` và `keyof` cùng nhau như sau:

```jsx
type Person = {
  name: string;
  age: number;
  city: string;
};

type PersonPropertyTypes = {
  [K in keyof Person]: typeof Person[K];
};
```

- Trong ví dụ trên, `PersonPropertyTypes` sẽ là một kiểu đối tượng mới có các thuộc tính giống với `Person`, nhưng với kiểu dữ liệu của từng thuộc tính được giữ nguyên.

## 🎁🎁 `[key in keyof typeof initialState]: string`, vậy khi sử dụng dòng này thì mình lấy tên của thuộc tính initialState, còn kiểu dữ liệu trong initialState mình có lấy không ? hay là mình chỉ lấy tên thôi ?

- Khi sử dụng `[key in keyof typeof initialState]: string`, bạn đang xây dựng một kiểu đối tượng mới có các thuộc tính giống với `initialState`, nhưng kiểu dữ liệu của từng thuộc tính được định nghĩa là `string`.

- Ví dụ, nếu `initialState` có định nghĩa như sau:

```jsx
const initialState = {
  name: 'John',
  age: 25,
  city: 'New York'
}
```

- Sử dụng `[key in keyof typeof initialState]: string` sẽ cho kết quả tương đương với:

```jsx
type FormError = {
  name: string,
  age: string,
  city: string
}
```

- Trong trường hợp này, bạn không chỉ lấy được tên thuộc tính từ `initialState`, mà còn định nghĩa kiểu dữ liệu của từng thuộc tính là `string` trong `FormError`.

## Có nghĩa là khi mình sử dụng dòng code đó thì mình lấy tất cả tên trong initialState và mình gán kiểu dữ liệu cho nó là string ?

- Đúng, khi bạn sử dụng dòng code `[key in keyof typeof initialState]: string`, là bạn đang tạo ra một kiểu đối tượng mới có các thuộc tính giống với `initialState`, và đặt kiểu dữ liệu của từng thuộc tính là `string`.

- Cụ thể, `[key in keyof typeof initialState]` được sử dụng để lặp qua tất cả các tên thuộc tính trong `initialState`. Điều này đảm bảo rằng các thuộc tính trong `FormError` sẽ tương ứng với tất cả các thuộc tính có trong `initialState`.

- Sau đó, bằng cách gán `: string`, bạn định nghĩa kiểu dữ liệu của từng thuộc tính trong `FormError` là `string`. Điều này đảm bảo rằng khi bạn sử dụng `FormError`, bạn sẽ chỉ có thể gán giá trị kiểu `string` cho các thuộc tính đó.

- Ví dụ, nếu `initialState` có định nghĩa như sau:

```jsx
const initialState = {
  name: 'John',
  age: 25,
  city: 'New York'
}
```

- Sử dụng `[key in keyof typeof initialState]: string` sẽ cho kết quả tương đương với:

```jsx
type FormError = {
  name: string,
  age: string,
  city: string
}
```

- Trong trường hợp này, `FormError` sẽ có các thuộc tính `name`, `age`, `city`, và kiểu dữ liệu của các thuộc tính này sẽ là `string`.

✅✅ Đoạn code 4 ✅✅

```jsx
export default function CreatePost() {
  // Component state
  const [formData, setFormData] = useState<Omit<Post, 'id'> | Post>(initialState)
  const [addPost, addPostResult] = useAddPostMutation()
```

- Trong đoạn code trên, có một component React được định nghĩa là `CreatePost`. Đây là một component chịu trách nhiệm hiển thị giao diện và xử lý logic để tạo bài viết mới.

- `useState<Omit<Post, 'id'> | Post>(initialState)`: Đây là một hook state của React, được sử dụng để quản lý trạng thái của component. Trạng thái ban đầu của component được khởi tạo bằng `initialState`, nhưng thuộc tính `id` của `Post` được loại bỏ `(Omit<Post, 'id'>)` để tránh xung đột khi tạo bài viết mới. `formData` là biến state và `setFormData` là hàm để cập nhật giá trị của formData.

- `useAddPostMutation()` là một custom hook được tạo ra từ RTK Query. Nó được sử dụng để thực hiện yêu cầu tạo bài viết mới lên server và quản lý trạng thái của yêu cầu.

- `useAddPostMutation()` trả về một mảng gồm hai phần tử: `addPost` và `addPostResult`.

- `addPost` là một hàm có chức năng gửi yêu cầu tạo bài viết mới lên server. Khi gọi hàm `addPost`, nó sẽ thực hiện yêu cầu và gửi dữ liệu bài viết được lưu trong `formData` tới server.

- `addPostResult` là một đối tượng chứa thông tin về kết quả của yêu cầu tạo bài viết. Nó bao gồm các thuộc tính như `data`, `isLoading`, `isError`, `error`, và `isSuccess`. Thông qua `addPostResult`, bạn có thể kiểm tra trạng thái của yêu cầu (đang tải, có lỗi hay thành công) và lấy dữ liệu trả về từ server nếu có.

- Với dòng code `const [addPost, addPostResult] = useAddPostMutation()`, ta đang gán giá trị trả về của `useAddPostMutation()` cho hai biến `addPost` và `addPostResult`. Điều này cho phép ta sử dụng các hàm và trạng thái liên quan đến yêu cầu tạo bài viết mới trong component `CreatePost`.

✅✅ Đoạn code 5 ✅✅

```jsx
// Redux state
const postId = useSelector((state: RootState) => state.blog.postId)
```

- Dòng code trên sử dụng `useSelector` hook từ thư viện `react-redux` để lấy giá trị của postId từ Redux store.

- `useSelector` nhận vào một hàm callback, được gọi là selector function, và trả về giá trị hiện tại của `postId` trong Redux store. Selector function này nhận vào một tham số là `state` là root state của Redux store, và từ đó, ta có thể truy cập các trạng thái con trong store.

- Trong trường hợp này, selector function được định nghĩa như sau:

```jsx
;(state: RootState) => state.blog.postId
```

- Nó truy cập vào trạng thái `postId` trong slice `blog` của root state `RootState`. Điều này giả định rằng bạn đã cấu hình slice `blog` trong Redux store và có trạng thái (state) `postId` được lưu trữ trong đó.

- Kết quả của dòng code này là giá trị hiện tại của `postId` từ Redux store, và nó được gán vào biến `postId` để sử dụng trong component.

✅✅ Đoạn code 6 ✅✅

```jsx
// Query data
const { data, refetch } = useGetPostQuery(postId, {
  skip: !postId,
  refetchOnMountOrArgChange: 5,
  pollingInterval: 1000
})
```

- Đoạn code trên sử dụng `useGetPostQuery` từ RTK Query để lấy dữ liệu bài viết từ API. Nó nhận vào hai tham số: `postId` và một object cấu hình.

  - `postId`: Giá trị `postId` được truyền vào từ Redux store để xác định bài viết cần lấy dữ liệu.
  - `skip: !postId`: Nếu giá trị `postId` là falsy (trống, null, undefined, 0, false), thì việc gọi query sẽ bị bỏ qua (skip). Điều này đảm bảo rằng query chỉ được gọi khi `postId` có giá trị.
  - `refetchOnMountOrArgChange: 5`: Cấu hình để query được gọi lại (refetch) khi component được mount hoặc giá trị của `postId` thay đổi. Tham số 5 chỉ ra rằng query sẽ được gọi lại sau 5 giây khi có sự thay đổi.
  - `pollingInterval: 1000`: Thiết lập khoảng thời gian giữa các lần gọi lại query theo chu kỳ (polling interval). Trong trường hợp này, query sẽ được gọi lại sau mỗi 1000ms (1 giây).

- Kết quả trả về từ `useGetPostQuery` được gán vào biến `data` và `refetch`.

  - `data`: Chứa dữ liệu trả về từ query sau khi thành công.
  - `refetch`: Là một hàm để gọi lại query khi cần thiết. Bằng cách gọi hàm này, query sẽ được gửi lại và dữ liệu mới nhất sẽ được nhận.

✅✅ Đoạn code 7 ✅✅

```jsx
const [updatePost, updatePostResult] = useUpdatePostMutation()
```

-

✅✅ Đoạn code 8 ✅✅

```jsx
  // Error handling
  const errorForm: FormError = useMemo(() => {
    // Error handling logic
  }, [postId, updatePostResult, addPostResult])

  // useEffect and event handlers
  // ...

  // JSX markup
  // ...

  return (
    // Form markup
    // ...
  )
}
```
