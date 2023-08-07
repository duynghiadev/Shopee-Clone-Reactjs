## Giải thích code chi tiết file useQueryParams.tsx

- Đoạn mã trên là một module TypeScript/JavaScript sử dụng React hook để lấy các tham số truy vấn (query parameters) từ URL sử dụng thư viện `react-router-dom`. Nó sử dụng hook `useSearchParams` để tạo ra một đối tượng `searchParams` chứa các tham số truy vấn từ URL, sau đó chuyển đổi đối tượng này thành một đối tượng thông thường chứa các cặp key-value bằng cách sử dụng `Object.fromEntries()`.

- Hãy giải thích từng phần của mã:

```jsx
import { useSearchParams } from 'react-router-dom'
```

1. Import thư viện `useSearchParams`:

- Dòng này là một câu lệnh import để sử dụng một hoặc nhiều phần (hàm, biến, kiểu dữ liệu, ...) từ một module nào đó. Trong trường hợp này, bạn đang import hàm `useSearchParams` từ module `'react-router-dom'`.

- `useSearchParams`: Đây là một hook được cung cấp bởi thư viện `react-router-dom`. Hook này được sử dụng để truy cập và quản lý các tham số truy vấn (query parameters) trong URL của ứng dụng React khi sử dụng React Router.

- Ví dụ: Nếu bạn muốn lấy các tham số truy vấn từ URL, bạn có thể sử dụng `useSearchParams` như sau:

```jsx
import { useSearchParams } from 'react-router-dom'

function MyComponent() {
  const [searchParams] = useSearchParams()

  // ... Do something
}
```

- Trong ví dụ trên, `useSearchParams` là một hook, và mỗi lần thành phần `MyComponent` được render, nó sẽ sử dụng hook này để lấy các tham số truy vấn từ URL và gán chúng vào biến `searchParams`.

---

```jsx
export default function useQueryParams() {
  const [searchParams] = useSearchParams()
  return Object.fromEntries([...searchParams])
}
```

- Đoạn code này bạn đang tạo một custom React hook có tên là `useQueryParams`, và nhiệm vụ của nó là lấy các tham số truy vấn (query parameters) từ URL sử dụng hook `useSearchParams` từ thư viện `react-router-dom`, sau đó chuyển đổi chúng thành một đối tượng thông thường bằng cách sử dụng hàm `Object.fromEntries()`.

- Hãy giải thích chi tiết dòng code:

1. `export default function useQueryParams() {`: Dòng này định nghĩa một custom React hook mới có tên là `useQueryParams`. Hooks trong React là các hàm cho phép bạn "kéo ra" state và các hàm React khác từ React, giúp bạn xử lý state và side effects trong hàm component.

2. `const [searchParams] = useSearchParams()`: Trong hook `useQueryParams`, bạn sử dụng hook `useSearchParams()` để lấy tham số truy vấn từ URL và gán kết quả vào biến `searchParams`.

- `useSearchParams()`: Đây là một hook được cung cấp bởi thư viện `react-router-dom`. Nó trả về một mảng có một phần tử duy nhất, đó là đối tượng URLSearchParams chứa thông tin về các tham số truy vấn từ URL.

3. `return Object.fromEntries([...searchParams])`: Dòng này trả về một đối tượng chứa các tham số truy vấn từ URL.

- `Object.fromEntries()`: Đây là một hàm JavaScript được sử dụng để chuyển đổi một mảng gồm các cặp key-value thành một đối tượng. Trong trường hợp này, bạn sử dụng nó để chuyển đổi mảng chứa thông tin tham số truy vấn từ `searchParams` thành một đối tượng.

- Vậy, một cách tổng quan, hook `useQueryParams` này được sử dụng để đơn giản hóa việc lấy và quản lý thông tin tham số truy vấn từ URL trong ứng dụng React của bạn. Khi bạn sử dụng hook này, bạn có thể gọi nó bất cứ khi nào bạn cần truy cập các tham số truy vấn trong các thành phần của mình.

- ✅ Đây là cách giải thích tổng quan chung chung của đoạn code này:

```jsx
export default function useQueryParams() {
  const [searchParams] = useSearchParams()
  return Object.fromEntries([...searchParams])
}
```

- Hàm `useQueryParams` là một custom React hook để lấy các tham số truy vấn từ URL và trả về chúng dưới dạng một đối tượng thông thường.

- Trong hàm này, chúng ta sử dụng hook `useSearchParams()` để lấy các tham số truy vấn từ URL. Kết quả trả về từ hook này là một mảng, nhưng chúng ta chỉ quan tâm đến phần tử đầu tiên (index 0), do đó sử dụng `[searchParams]` để lấy phần tử đó và gán vào biến `searchParams`.

- Tiếp theo, chúng ta sử dụng `Object.fromEntries([...searchParams])` để chuyển đổi đối tượng `searchParams` thành một đối tượng thông thường chứa các cặp key-value của các tham số truy vấn. Hàm `Object.fromEntries()` chuyển đổi một mảng các cặp key-value thành một đối tượng.

- Tóm lại, hàm `useQueryParams` trả về một đối tượng chứa các tham số truy vấn từ URL. Các key trong đối tượng này là tên của các tham số truy vấn và giá trị tương ứng là giá trị của các tham số truy vấn đó từ URL.

---

## Ví dụ có sử dụng `useSearchParams` và `Object.fromEntries` trong dự án React sử dụng TypeScript

- Dưới đây là một ví dụ cụ thể về cách bạn có thể sử dụng `useSearchParams` và `Object.fromEntries` trong một dự án React sử dụng TypeScript để lấy và xử lý các tham số truy vấn từ URL:

```jsx
import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

type QueryParams = {
  page?: string;
  sortBy?: string;
};

const MyComponent = () => {
  const [searchParams] = useSearchParams();
  const queryParams = Object.fromEntries([...searchParams]) as QueryParams;

  const [currentPage, setCurrentPage] = useState<string | undefined>(queryParams.page);
  const [sortBy, setSortBy] = useState<string | undefined>(queryParams.sortBy);

  useEffect(() => {
    // Fetch data from API based on queryParams
    fetchData(currentPage, sortBy);
  }, [currentPage, sortBy]);

  const fetchData = (page: string | undefined, sort: string | undefined) => {
    // Simulate fetching data from an API based on the page and sort parameters
    console.log('Fetching data for page:', page);
    console.log('Sorting by:', sort);
  };

  const handlePageChange = (newPage: string) => {
    setCurrentPage(newPage);
  };

  const handleSortChange = (newSort: string) => {
    setSortBy(newSort);
  };

  return (
    <div>
      <h1>My Component</h1>
      <p>Current Page: {currentPage}</p>
      <p>Sort By: {sortBy}</p>
      <button onClick={() => handlePageChange('2')}>Go to Page 2</button>
      <button onClick={() => handleSortChange('name')}>Sort by Name</button>
      <button onClick={() => handleSortChange('price')}>Sort by Price</button>
    </div>
  );
};

export default MyComponent;
```

- Trong ví dụ này:

1. Chúng ta sử dụng hook `useSearchParams` để lấy tham số truy vấn từ URL và biểu thị chúng dưới dạng một đối tượng `searchParams`.

2. Chúng ta sử dụng `Object.fromEntries([...searchParams])` để chuyển đổi `searchParams` thành một đối tượng thông thường `queryParams`.

3. Chúng ta sử dụng hai trạng thái `currentPage` và `sortBy` để theo dõi trang hiện tại và cách sắp xếp.

4. Khi `currentPage` hoặc `sortBy` thay đổi, chúng ta sẽ gọi hàm `fetchData` để mô phỏng việc gọi API và lấy dữ liệu dựa trên tham số truy vấn.

5. Các nút "Go to Page 2", "Sort by Name", và "Sort by Price" được sử dụng để thay đổi các tham số truy vấn và thay đổi trạng thái `currentPage` và `sortBy`.

- Chú ý rằng trong dự án thực tế, tham số truy vấn thường được sử dụng để tương tác với các thành phần tương tự như phân trang, sắp xếp và bộ lọc trên các trang web hoặc ứng dụng.

## Giải thích chi tiết đoạn code trên

✅✅ Đoạn 1 ✅✅

```jsx
import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'

type QueryParams = {
  page?: string,
  sortBy?: string
}
```

- Đoạn code trên là một ví dụ về cách sử dụng TypeScript cùng với thư viện React và react-router-dom để xử lý query parameters trong URL của ứng dụng web. Hãy giải thích từng phần của đoạn code:

1. `import React, { useEffect, useState } from 'react':` Đây là cách import React cùng với một số hook quan trọng như `useEffect` và `useState`. Những hook này cho phép bạn quản lý trạng thái và hiệu suất trong ứng dụng React.

2. `import { useSearchParams } from 'react-router-dom':` Đoạn này import hook `useSearchParams` từ thư viện react-router-dom. Hook này giúp bạn truy cập và quản lý các query parameters trong URL.

3. `type QueryParams = { page?: string, sortBy?: string }:` Đây là định nghĩa kiểu dữ liệu `QueryParams` bằng TypeScript. Kiểu này mô tả các query parameters mà bạn có thể gặp trong URL. Trong trường hợp này, `page` và `sortBy` là hai query parameters có thể xuất hiện, và cả hai đều có kiểu `string`. Dấu `?` ở đây đại diện cho thuộc tính tùy chọn, nghĩa là chúng có thể xuất hiện hoặc không trong đối tượng `QueryParams`.

4. `useSearchParams():` Đây là một hook từ react-router-dom được sử dụng để lấy ra một đối tượng `SearchParams` liên quan đến các query parameters trong URL hiện tại.

- Tóm lại, đoạn mã này xác định kiểu dữ liệu `QueryParams` để mô tả các query parameters mà bạn có thể xử lý. Điều này giúp bạn sử dụng TypeScript để kiểm tra và đảm bảo rằng bạn đang làm việc với các query parameters đúng kiểu khi làm việc với chúng trong ứng dụng của mình.

---

✅✅ Đoạn 2 ✅✅

```jsx
const MyComponent = () => {}
```

- Đoạn code này liên quan đến việc định nghĩa một functional component trong React bằng cách sử dụng cú pháp của JavaScript ES6. Hãy giải thích từng phần của đoạn mã:

1. `const`: Đây là từ khóa trong JavaScript để khai báo một biến có giá trị không thay đổi (constant).

2. `MyComponent`: Đây là tên của biến (đối tượng) mà bạn đang khai báo. Trong trường hợp này, bạn đang khai báo một biến có tên là `MyComponent`.

3. `=`: Đây là phần gán giá trị cho biến. Trong trường hợp này, bạn đang gán giá trị là một hàm (functional component).

4. `()`: Đây là cú pháp để khai báo một hàm (functional component). Trong trường hợp này, bạn đang khai báo một functional component mà không có tham số đầu vào.

5. `=>`: Đây là cú pháp của JavaScript để định nghĩa một hàm (arrow function).

6. `{}`: Đây là phần thân của hàm (functional component). Trong trường hợp này, thân hàm là một khối mã rỗng.

- Tóm lại, đoạn mã `const MyComponent = () => {}` đang định nghĩa một functional component trong React. Tên của component là `MyComponent`, và nội dung của component hiện tại là một hàm rỗng (không thực hiện bất kỳ hành động gì). Trong thực tế, bạn sẽ thay thế nội dung hàm rỗng này bằng mã JSX để tạo nội dung và giao diện của component.

---

✅✅ Đoạn 3 ✅✅

```jsx
const [searchParams] = useSearchParams();
const queryParams = Object.fromEntries([...searchParams]) as QueryParams;
```

- Đoạn mã này liên quan đến việc sử dụng hook `useSearchParams` từ thư viện react-router-dom để truy cập và xử lý các query parameters từ URL. Hãy giải thích từng phần của đoạn mã:

```jsx
const [searchParams] = useSearchParams()
```

1. `useSearchParams()`: Đây là một hook từ thư viện react-router-dom được sử dụng để lấy ra một đối tượng `SearchParams` liên quan đến các query parameters trong URL hiện tại.

2. `const [searchParams]`: Đoạn này sử dụng destructuring để gán giá trị trả về từ hook `useSearchParams()` vào biến `searchParams`. Đối tượng `searchParams` chứa thông tin về các query parameters trong URL.

- Tiếp theo là đoạn code này:

```jsx
const queryParams = Object.fromEntries([...searchParams]) as QueryParams;
```

1. `Object.fromEntries([...searchParams])`: Đây là một cách để chuyển đổi một mảng các cặp key-value từ đối tượng `SearchParams` thành một đối tượng JavaScript thông thường. `Object.fromEntries()` là một phương thức mới trong JavaScript giúp tạo đối tượng từ mảng cặp key-value. (Nói nôm na là chuyển từ Array sang Object)

2. `as QueryParams`: Đây là một cú pháp TypeScript để ép kiểu một biến sang một kiểu dữ liệu cụ thể. Trong trường hợp này, nó đang ép kiểu biến `queryParams` thành kiểu `QueryParams`, dựa trên định nghĩa kiểu `QueryParams` mà bạn đã cung cấp.

❌❌ Object.fromEntries([...searchParams]) nói nôm na là chuyển từ array sang object hả ? ❌❌

---

✅✅ Đoạn 4 ✅✅

```jsx
const [currentPage, setCurrentPage] = (useState < string) | (undefined > queryParams.page)
const [sortBy, setSortBy] = (useState < string) | (undefined > queryParams.sortBy)

useEffect(() => {
  // Fetch data from API based on queryParams
  fetchData(currentPage, sortBy)
}, [currentPage, sortBy])
```

---

✅✅ Đoạn 5 ✅✅

```jsx
const fetchData = (page: string | undefined, sort: string | undefined) => {
  // Simulate fetching data from an API based on the page and sort parameters
  console.log('Fetching data for page:', page)
  console.log('Sorting by:', sort)
}
```

---

✅✅ Đoạn 7 ✅✅

```jsx
const handlePageChange = (newPage: string) => {
  setCurrentPage(newPage)
}

const handleSortChange = (newSort: string) => {
  setSortBy(newSort)
}
```

---

✅✅ Đoạn 8 ✅✅

```jsx
return (
  <div>
    <h1>My Component</h1>
    <p>Current Page: {currentPage}</p>
    <p>Sort By: {sortBy}</p>
    <button onClick={() => handlePageChange('2')}>Go to Page 2</button>
    <button onClick={() => handleSortChange('name')}>Sort by Name</button>
    <button onClick={() => handleSortChange('price')}>Sort by Price</button>
  </div>
)
```

---
