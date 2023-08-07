# Giải thích chi tiết code trong file useQueryConfig.tsx

- Đoạn mã trên là một module TypeScript/JavaScript sử dụng React hook để xử lý các tham số truy vấn (query parameters) từ URL. Nó dựa vào thư viện `lodash` để loại bỏ những tham số truy vấn có giá trị `undefined` và trả về một đối tượng `queryConfig` chứa các tham số truy vấn đã được lọc.

- Hãy giải thích từng phần của mã:

```jsx
import { ProductListConfig } from 'src/types/product.type'
import omitBy from 'lodash/omitBy'
import isUndefined from 'lodash/isUndefined'
import useQueryParams from './useQueryParams'
```

1. Import các thư viện và kiểu dữ liệu cần thiết:

- `ProductListConfig`: là một kiểu dữ liệu TypeScript đại diện cho cấu hình danh sách sản phẩm. Chúng ta không thể nhìn thấy định nghĩa chi tiết của kiểu này trong đoạn mã này, nhưng nó được sử dụng để định nghĩa rõ các thuộc tính truy vấn mà đoạn mã sẽ sử dụng.

- `omitBy`: là một hàm từ thư viện `lodash` giúp loại bỏ các thuộc tính không thỏa mãn một điều kiện nào đó từ một đối tượng. Trong trường hợp này, chúng ta sẽ sử dụng nó để loại bỏ các thuộc tính có giá trị `undefined` từ đối tượng tham số truy vấn.

- `isUndefined`: là một hàm từ thư viện `lodash` kiểm tra xem một giá trị có phải là `undefined` hay không. Hàm này sẽ được sử dụng bởi `omitBy` để kiểm tra xem giá trị của thuộc tính truy vấn có phải là `undefined` hay không.

- `useQueryParams`: là một custom React hook để lấy các tham số truy vấn (query parameters) từ URL. Đoạn mã này không hiển thị chi tiết của hook, nhưng giả sử nó trả về một đối tượng chứa các tham số truy vấn từ URL.

---

## Kiến thức bổ sung thêm vào học

**1. Trong `omitBy` có mấy tham số ?**

- Trong hàm omitBy của thư viện lodash, có hai tham số:

- Đối tượng cần lọc (`object`): Đây là đối tượng chứa các thuộc tính cần lọc. Trong trường hợp của mã, đối tượng này là `queryParams`, chứa các tham số truy vấn từ URL.

- Hàm kiểm tra (`predicate`): Đây là một hàm được sử dụng để kiểm tra các thuộc tính trong đối tượng. Nếu hàm kiểm tra trả về `true` cho một thuộc tính, nó sẽ bị loại bỏ khỏi đối tượng kết quả. Trong trường hợp của mã, hàm kiểm tra là `isUndefined`, được sử dụng để kiểm tra xem giá trị của thuộc tính truy vấn có phải là `undefined` hay không.

- Tóm lại, hàm `omitBy` trong trường hợp này sẽ loại bỏ các thuộc tính có giá trị `undefined` từ đối tượng `queryParams`, giúp lọc bỏ các tham số truy vấn không có giá trị trong URL.

**2. useSearchParams là hook gì ? Hook đó có tác dụng gì và để làm gì trong dự án ?**

- Có thể là có sự nhầm lẫn vì tôi không thể tìm thấy `useSearchParams` trong danh sách các React hooks chính thức. Tuy nhiên, dựa trên tên của hook, có thể đoán được chức năng và mục đích của nó.

- Dựa vào tên `useSearchParams`, có thể giả định rằng đây là một custom React hook được sử dụng để lấy các tham số truy vấn (query parameters) từ URL. Trong nhiều ứng dụng web, thông tin và tham số được truyền thông qua URL trong phần truy vấn (query string). Ví dụ, trong URL `https://example.com/products?category=electronics&sort=price`, các tham số `category` và `sort` là các tham số truy vấn.

- Nếu hook `useSearchParams` tồn tại và thực hiện chức năng như được giả định, nó có thể được sử dụng trong dự án để thực hiện các nhiệm vụ sau:

1. Lấy các tham số truy vấn từ URL: Điều này cho phép ứng dụng trích xuất các tham số truy vấn từ URL để sử dụng trong việc hiển thị nội dung và điều hướng trang.

2. Sử dụng thông tin tham số truy vấn: Các thông tin thu thập được từ URL có thể được sử dụng để điều chỉnh hiển thị dữ liệu, lọc hoặc sắp xếp kết quả, hay thực hiện các tác vụ khác phụ thuộc vào các tham số truy vấn.

3. Theo dõi và xử lý thay đổi truy vấn: Trong trường hợp URL thay đổi (ví dụ: khi người dùng thực hiện tìm kiếm hoặc chuyển trang), hook này có thể giúp theo dõi và cập nhật lại dữ liệu dựa trên các tham số truy vấn mới.

4. Cung cấp giao diện dễ sử dụng cho việc làm việc với tham số truy vấn: Sử dụng hook giúp giảm thiểu lượng mã lặp lại và cung cấp một giao diện dễ sử dụng và dễ tái sử dụng khi làm việc với tham số truy vấn.

- Nếu đoạn mã của bạn sử dụng `useSearchParams` và bạn cần hỗ trợ thêm thông tin về nó, hãy cung cấp thông tin chi tiết hơn hoặc xem lại tên hoặc chức năng của hook đó để có thể cung cấp thông tin chính xác hơn.

---

```jsx
export type QueryConfig = {
  [key in keyof ProductListConfig]: string
}
```

- Đoạn mã trên đang định nghĩa một kiểu dữ liệu TypeScript mới có tên là `QueryConfig`. Hãy xem từng phần để hiểu cụ thể:

- `export type QueryConfig:` Đây là cách để định nghĩa một kiểu dữ liệu TypeScript và xuất nó để có thể được sử dụng ở nơi khác trong ứng dụng.

- `{ [key in keyof ProductListConfig]: string }:` Đây là phần chính của định nghĩa kiểu. Nó đang sử dụng một loại kết hợp của kiểu "Mapped Type" của TypeScript để tạo ra một kiểu mới dựa trên kiểu `ProductListConfig` và biến tất cả các thuộc tính của nó thành kiểu `string`.

- `[key in keyof ProductListConfig]:` Đây là phần của Mapped Type, nó duyệt qua tất cả các thuộc tính trong kiểu `ProductListConfig` (giả sử `ProductListConfig` có các thuộc tính như `page`, `limit`, `sort_by`, v.v.).

- `: string:` Đây là phần định nghĩa kiểu, nó nói rằng giá trị của mỗi thuộc tính trong kiểu `QueryConfig` là một chuỗi (`string`).

- Tóm lại, đoạn mã trên định nghĩa một kiểu dữ liệu `QueryConfig` mà mỗi thuộc tính của nó tương ứng với các thuộc tính trong kiểu `ProductListConfig`, và mỗi giá trị của thuộc tính là một chuỗi (`string`). Kiểu `QueryConfig` được tạo ra để đại diện cho cấu hình các tham số truy vấn trong ứng dụng của bạn.

---

## Hãy định nghĩa cho tôi kiểu dữ liệu này của TypeScript

```jsx
{ [P in K]: T }
```

- Trong TypeScript, `{ [P in K]: T }` là một phần của kiểu dữ liệu được gọi là "Mapped Types" (Các kiểu được ánh xạ). Đây là cú pháp cho phép bạn tạo ra một kiểu dữ liệu mới dựa trên các thuộc tính của một kiểu dữ liệu khác.

- `Mapped types` là một cách để tạo các kiểu dữ liệu mới bằng cách duyệt qua tất cả các thuộc tính của một kiểu dữ liệu hiện có và thay đổi chúng theo cách bạn muốn. Trong TypeScript, chúng ta sử dụng ký hiệu `{ [P in K]: T }` để đại diện cho một mapped type có tên `P` ứng với các thuộc tính của kiểu `K` và kiểu dữ liệu là `T`. Đây là một cú pháp rất mạnh mẽ cho việc biến đổi kiểu dữ liệu một cách tự động.

- Ví dụ về sử dụng mapped types:

```jsx
type ProductListConfig = {
  name: string;
  description: string;
  price: number;
};

type StringifiedProductListConfig = {
  [key in keyof ProductListConfig]: string;
};
```

- Trong ví dụ trên, `StringifiedProductListConfig` là một mapped type mới được tạo ra từ `ProductListConfig`. Các thuộc tính của `ProductListConfig` được duyệt qua và kiểu dữ liệu của chúng được thay đổi thành `string`.

## Cho ví dụ nâng cao về `mapped type` trong các dự án thực tế

**✅✅1. Ví dụ về Mapped Type✅✅**

- Dưới đây là một ví dụ nâng cao về cách sử dụng Mapped Types trong một dự án thực tế, trong trường hợp một ứng dụng web quản lý sản phẩm:

- Giả sử bạn có một ứng dụng quản lý sản phẩm và bạn cần hiển thị danh sách sản phẩm trong một bảng. Tuy nhiên, bạn cần biến đổi dữ liệu sản phẩm thành một định dạng phù hợp để hiển thị trên giao diện người dùng. Ở đây, Mapped Types có thể giúp bạn dễ dàng biến đổi dữ liệu sản phẩm thành định dạng bạn cần để hiển thị.

```jsx
type Product = {
  id: number,
  name: string,
  description: string,
  price: number,
  stock: number
}

type DisplayProduct = {
  id: string,
  productName: string,
  price: string
}

function transformProductForDisplay(product: Product): DisplayProduct {
  const displayProduct: DisplayProduct = {
    id: product.id.toString(),
    productName: product.name,
    price: `$${product.price.toFixed(2)}`
  }
  return displayProduct
}

const product: Product = {
  id: 1,
  name: 'Example Product',
  description: 'This is an example product.',
  price: 19.99,
  stock: 50
}

const displayedProduct: DisplayProduct = transformProductForDisplay(product)

console.log(displayedProduct)
```

- Trong ví dụ này:

- `Product` là kiểu dữ liệu đại diện cho thông tin sản phẩm, bao gồm `id`, `name`, `description`, `price` và `stock`.

- `DisplayProduct` là một kiểu dữ liệu được tạo bởi Mapped Types. Nó chỉ bao gồm `id`, `productName` và `price`.

- Hàm `transformProductForDisplay` nhận một sản phẩm theo kiểu `Product` và biến đổi nó thành kiểu `DisplayProduct` phù hợp cho việc hiển thị trên giao diện người dùng.

- Kết quả khi chạy đoạn mã sẽ là:

```jsx
{
  id: '1',
  productName: 'Example Product',
  price: '$19.99'
}
```

- Ví dụ này cho thấy cách bạn có thể sử dụng Mapped Types để tạo ra các biến thể của kiểu dữ liệu cho các mục đích cụ thể trong dự án thực tế, như hiển thị dữ liệu trên giao diện người dùng.

**✅✅2. Ví dụ về Mapped Type trong TypeScript✅✅**

- Dưới đây là một ví dụ thực tế về cách sử dụng Mapped Types trong một dự án TypeScript để xử lý validation dữ liệu từ người dùng:

- Giả sử bạn đang phát triển một ứng dụng đăng ký người dùng, và bạn muốn thực hiện validation cho các trường thông tin như `tên`, `email` và `tuổi`. Bạn có thể sử dụng `Mapped Types` để tạo một kiểu dữ liệu chứa các hàm validation tương ứng cho mỗi trường:

```jsx
type FieldValidators<T> = {
  [K in keyof T]: (value: T[K]) => string | undefined;
};

interface User {
  name: string;
  email: string;
  age: number;
}

const validators: FieldValidators<User> = {
  name: (value) => {
    if (!value) {
      return "Tên không được để trống";
    }
    return undefined;
  },
  email: (value) => {
    if (!value) {
      return "Email không được để trống";
    }
    if (!value.includes("@")) {
      return "Email không hợp lệ";
    }
    return undefined;
  },
  age: (value) => {
    if (value < 0 || value > 120) {
      return "Tuổi phải nằm trong khoảng từ 0 đến 120";
    }
    return undefined;
  },
};

function validateData<T>(data: T, validators: FieldValidators<T>): string[] {
  const errors: string[] = [];
  for (const key in validators) {
    const validator = validators[key];
    const error = validator(data[key]);
    if (error) {
      errors.push(error);
    }
  }
  return errors;
}

const newUser: User = {
  name: "Alice",
  email: "alice@example.com",
  age: 25,
};

const validationErrors = validateData(newUser, validators);

console.log(validationErrors);
```

- Trong ví dụ này:

- `FieldValidators<T>` là một mapped type, nó chứa các hàm validation cho từng trường dữ liệu trong kiểu `T`.

- Interface `User` đại diện cho thông tin người dùng, bao gồm `tên`, `email` và `tuổi`.

- Biến `validators` chứa các hàm validation tương ứng cho mỗi trường trong `User`.

- Hàm `validateData` nhận một đối tượng dữ liệu và áp dụng các hàm validation để kiểm tra tính hợp lệ.

- Kết quả khi chạy đoạn mã sẽ là:

```jsx
;[]
```

- Trong trường hợp này, vì dữ liệu người dùng (`newUser`) hợp lệ, nên không có lỗi validation nào được trả về.

- 🎁🎁 Bài viết tham khảo: [Mapped Type](https://bitly2s.com/9ekw7r)

---

```jsx
export default function useQueryConfig() {
  const queryParams: QueryConfig = useQueryParams()
  const queryConfig: QueryConfig = omitBy(
    {
      page: queryParams.page || '1',
      limit: queryParams.limit || '20',
      sort_by: queryParams.sort_by,
      exclude: queryParams.exclude,
      name: queryParams.name,
      order: queryParams.order,
      price_max: queryParams.price_max,
      price_min: queryParams.price_min,
      rating_filter: queryParams.rating_filter,
      category: queryParams.category
    },
    isUndefined
  )
  return queryConfig
}
```

- Đoạn mã trên là một custom React hook có tên là `useQueryConfig`. Mục đích của hook này là lấy các tham số truy vấn từ URL, xử lý chúng để đảm bảo rằng các giá trị không hợp lệ hoặc thiếu được điền vào mặc định, sau đó trả về một đối tượng `queryConfig` chứa các tham số truy vấn đã được lọc và tinh chỉnh.

- `queryParams: QueryConfig = useQueryParams();`: Đầu tiên, hook này gọi một hook khác tên là `useQueryParams` để lấy các tham số truy vấn từ URL và gán chúng vào biến `queryParams`. Biến này có kiểu `QueryConfig`, tương ứng với cấu trúc của các tham số truy vấn.

- `const queryConfig: QueryConfig = omitBy(...)`: Tiếp theo, hook sử dụng hàm `omitBy` để loại bỏ các thuộc tính trong `queryParams` có giá trị là `undefined`. Đoạn mã từ `page` đến `category` xác định giá trị cho mỗi thuộc tính của `queryConfig`. Nếu thuộc tính tương ứng không tồn tại trong queryParams, nó sẽ có giá trị mặc định, hoặc nếu giá trị là undefined thì giá trị mặc định cũng được sử dụng. Điều này đảm bảo rằng queryConfig sẽ không chứa các thuộc tính không hợp lệ.

- Hàm `isUndefined` được sử dụng để kiểm tra xem một giá trị có phải là undefined hay không. Nó được truyền vào như một hàm kiểm tra cho hàm omitBy, để xác định xem các thuộc tính nào cần được loại bỏ khỏi đối tượng.

- Cuối cùng, hook trả về đối tượng `queryConfig` đã được xử lý và tinh chỉnh.

---
