# Giải thích chi tiết code trong file app.context.tsx

- Đoạn code trên là một phần của việc tạo và quản lý React `Context` trong ứng dụng. React `Context` là một công cụ cho phép bạn chia sẻ dữ liệu giữa các component trong cây component mà không cần truyền dữ liệu qua các props. `Context` thường được sử dụng để chia sẻ dữ liệu có tính toàn cục (global), chẳng hạn như trạng thái ứng dụng hoặc dữ liệu liên quan đến người dùng đã đăng nhập.

- Đoạn mã này sử dụng trong môi trường của React, nó tạo một React `Context` để lưu trữ và chia sẻ dữ liệu giữa các thành phần con trong ứng dụng.

- Giải thích từng phần chi tiết:

```jsx
import { createContext, useState } from 'react'
import { ExtendedPurchase } from 'src/types/purchase.type'
import { User } from 'src/types/user.type'
import { getAccessTokenFromLS, getProfileFromLS } from 'src/utils/auth'
```

- Đầu tiên, các module và hàm (function) cần thiết được import:

- `createContext`: Hàm này giúp tạo một React Context mới. `createContext` là một hàm được sử dụng để tạo một context. Context là một cách để chia sẻ dữ liệu và trạng thái giữa các component của React.
- `useState`: Hook của React dùng để tạo state và cập nhật state của functional component. `useState` là một hook được sử dụng để quản lý trạng thái trong React. Hook là một cách để thêm chức năng vào component của React mà không cần viết class.
- `ExtendedPurchase`: Kiểu dữ liệu (type) được import từ đường dẫn 'src/types/purchase.type'. Đây có thể là một kiểu dữ liệu được định nghĩa cho đối tượng mua hàng mở rộng (chứa nhiều thông tin hơn so với đối tượng mua hàng cơ bản).
- `User`: Kiểu dữ liệu được import từ đường dẫn 'src/types/user.type'. Đây có thể là một kiểu dữ liệu được định nghĩa cho đối tượng người dùng.

---

```jsx
interface AppContextInterface {
  isAuthenticated: boolean
  setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>
  profile: User | null
  setProfile: React.Dispatch<React.SetStateAction<User | null>>
  extendedPurchases: ExtendedPurchase[]
  setExtendedPurchases: React.Dispatch<React.SetStateAction<ExtendedPurchase[]>>
  reset: () => void
}
```

- Trong đoạn code trên, định nghĩa một interface TypeScript có tên là `AppContextInterface`. Interface này định nghĩa các kiểu dữ liệu và phương thức cần thiết cho việc quản lý trạng thái ứng dụng thông qua React Context.

- Giải thích từng phần chi tiết của `AppContextInterface`:

1. `isAuthenticated: boolean`:

- Đây là một thuộc tính có kiểu dữ liệu là `boolean`.

- Thuộc tính này đại diện cho trạng thái xác định người dùng đã đăng nhập hay chưa.

- Giá trị của `isAuthenticated` sẽ là `true` nếu người dùng đã đăng nhập và `false` nếu người dùng chưa đăng nhập.

2. `setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>`:

- Đây là một thuộc tính có kiểu dữ liệu là `React.Dispatch<React.SetStateAction<boolean>>`.

- Thuộc tính này đại diện cho phương thức để cập nhật giá trị của `isAuthenticated`.

- `React.Dispatch` là một kiểu dữ liệu được cung cấp bởi thư viện React, dùng để thay đổi giá trị của biến trạng thái (`useState`) trong Functional Component.

- `React.SetStateAction<boolean>` là kiểu dữ liệu đại diện cho hành động thay đổi giá trị của `isAuthenticated`, có kiểu là `boolean`.

3. `profile: User | null`:

- Đây là một thuộc tính có kiểu dữ liệu là `User | null`.

- `User` là một kiểu dữ liệu đã được định nghĩa trong ứng dụng.

- Thuộc tính này đại diện cho đối tượng người dùng chứa thông tin hồ sơ người dùng, hoặc có giá trị `null` nếu người dùng chưa đăng nhập.

4. `setProfile: React.Dispatch<React.SetStateAction<User | null>>`:

- Đây là một thuộc tính có kiểu dữ liệu là `React.Dispatch<React.SetStateAction<User | null>>`.

- Thuộc tính này đại diện cho phương thức để cập nhật giá trị của `profile`.

- `React.SetStateAction<User | null>` là kiểu dữ liệu đại diện cho hành động thay đổi giá trị của `profile`, có kiểu là `User | null`.

5. `extendedPurchases: ExtendedPurchase[]`:

- Đây là một thuộc tính có kiểu dữ liệu là một mảng các đối tượng `ExtendedPurchase`.

- `ExtendedPurchase` là một kiểu dữ liệu đã được định nghĩa trong ứng dụng.

- Thuộc tính này đại diện cho mảng chứa thông tin về các giao dịch mở rộng.

6. `setExtendedPurchases: React.Dispatch<React.SetStateAction<ExtendedPurchase[]>>`:

- Đây là một thuộc tính có kiểu dữ liệu là `React.Dispatch<React.SetStateAction<ExtendedPurchase[]>>`.

- Thuộc tính này đại diện cho phương thức để cập nhật giá trị của `extendedPurchases`.

- `React.SetStateAction<ExtendedPurchase[]>` là kiểu dữ liệu đại diện cho hành động thay đổi giá trị của `extendedPurchases`, có kiểu là một mảng các đối tượng `ExtendedPurchase`.

7. `reset: () => void`:

- Đây là một phương thức không có tham số và không có giá trị trả về (`void`).

- Phương thức này đại diện cho hành động reset (thiết lập lại) các giá trị trong Context về giá trị ban đầu.

---

```jsx
export const getInitialAppContext: () => AppContextInterface = () => ({
  isAuthenticated: Boolean(getAccessTokenFromLS()),
  setIsAuthenticated: () => null,
  profile: getProfileFromLS(),
  setProfile: () => null,
  extendedPurchases: [],
  setExtendedPurchases: () => null,
  reset: () => null
})
```

- Đoạn code trên định nghĩa hàm `getInitialAppContext`, có mục đích tạo và trả về giá trị ban đầu cho Context (`AppContextInterface`). Hàm này được gọi khi cần cung cấp giá trị mặc định cho Context khi chưa có giá trị cụ thể được cung cấp bởi Provider.

- Giải thích từng phần của `getInitialAppContext`:

1. `isAuthenticated: Boolean(getAccessTokenFromLS())`:

- Kiểm tra xem người dùng đã đăng nhập hay chưa bằng cách gọi hàm `getAccessTokenFromLS()`.

- Hàm `getAccessTokenFromLS()` được sử dụng để lấy token truy cập của người dùng từ Local Storage.

- Hàm `Boolean()` được sử dụng để chuyển đổi giá trị lấy từ `getAccessTokenFromLS()` thành kiểu boolean (true/false).

- `isAuthenticated` sẽ có giá trị là `true` nếu người dùng đã đăng nhập và `false` nếu chưa đăng nhập.

2. `setIsAuthenticated: () => null`:

- `setIsAuthenticated` là một hàm để cập nhật giá trị của `isAuthenticated`, nhưng trong đoạn code này, nó được định nghĩa là một hàm không làm gì cả (trả về `null`).

- Điều này có nghĩa là hàm `setIsAuthenticated` sẽ được ghi đè trong Provider khi được sử dụng.

3. `profile: getProfileFromLS()`:

- Lấy thông tin hồ sơ người dùng từ Local Storage bằng cách gọi hàm `getProfileFromLS()`.

- Nếu người dùng đã đăng nhập và có thông tin hồ sơ, `profile` sẽ chứa thông tin này.

- Nếu người dùng chưa đăng nhập hoặc không có thông tin hồ sơ, `profile` sẽ có giá trị `null`.

4. `setProfile: () => null`:

- `setProfile` là một hàm để cập nhật giá trị của `profile`, nhưng trong đoạn code này, nó được định nghĩa là một hàm không làm gì cả (trả về `null`).

- Điều này có nghĩa là hàm `setProfile` sẽ được ghi đè trong Provider khi được sử dụng.

5. `extendedPurchases: []`:

- `extendedPurchases` là một mảng chứa thông tin về các giao dịch mở rộng (`ExtendedPurchase`).

- Trong trường hợp này, mảng được thiết lập là một mảng rỗng, tức là không có giao dịch mở rộng nào ban đầu.

6. `setExtendedPurchases: () => null`:

- `setExtendedPurchases` là một hàm để cập nhật giá trị của `extendedPurchases`, nhưng trong đoạn code này, nó được định nghĩa là một hàm không làm gì cả (trả về `null`).

- Điều này có nghĩa là hàm `setExtendedPurchases` sẽ được ghi đè trong Provider khi được sử dụng.

7. `reset: () => null`:

- `reset` là một hàm không có tham số và không có giá trị trả về (`void`).

- Hàm này được sử dụng để reset (thiết lập lại) các giá trị trong Context về giá trị ban đầu.

- Trong đoạn code này, hàm `reset` được định nghĩa là một hàm không làm gì cả (trả về `null`), tức là không có hành động reset nào được thực hiện ban đầu.

---

```jsx
const initialAppContext = getInitialAppContext()
```

- Dòng code trên gọi hàm `getInitialAppContext()` để lấy giá trị ban đầu cho Context (`AppContextInterface`) và gán nó vào biến `initialAppContext`.

- Hàm `getInitialAppContext()` được gọi để tạo và trả về giá trị ban đầu cho Context.

- Kết quả trả về từ hàm `getInitialAppContext()` sẽ là một đối tượng có kiểu dữ liệu là `AppContextInterface`.

- Giá trị này chứa thông tin về trạng thái ban đầu của ứng dụng, bao gồm trạng thái đăng nhập (`isAuthenticated`), thông tin hồ sơ người dùng (`profile`), mảng giao dịch mở rộng (`extendedPurchases`), và phương thức reset (`reset`) được cung cấp qua Context.

- Sau khi hàm `getInitialAppContext()` được gọi và trả về giá trị, biến `initialAppContext` sẽ chứa các giá trị trạng thái ban đầu và sẽ được sử dụng khi tạo Provider trong Context.

---

```jsx
export const AppContext = createContext < AppContextInterface > initialAppContext
```

- Đoạn code trên định nghĩa một React Context có tên là `AppContext` sử dụng hàm `createContext`. Context này được sử dụng để chia sẻ và cung cấp các giá trị trạng thái và phương thức từ Provider xuống các component con trong cây DOM của ứng dụng.

- Giải thích từng phần chi tiết của đoạn code:

1. `createContext<AppContextInterface>(initialAppContext)`:

- Hàm `createContext` được sử dụng để tạo một Context mới.

- Trong trường hợp này, chúng ta tạo một Context có tên là `AppContext`.

- Dấu ngoặc `<...>` sau `createContext` chứa kiểu dữ liệu của Context, ở đây là `AppContextInterface`.

- `initialAppContext` là giá trị mặc định của Context. Nếu không có Provider cung cấp giá trị cụ thể cho Context, giá trị mặc định này sẽ được sử dụng.

2. `export const AppContext = ...`:

- Đoạn code trên xuất ra Context `AppContext` để có thể sử dụng ở bất kỳ đâu trong ứng dụng.

- Bằng cách xuất Context này ra, các component con có thể sử dụng Hook `useContext` để truy cập và sử dụng giá trị trạng thái và phương thức từ Context.

- Như vậy, thông qua Context `AppContext`, các component con trong cây DOM có thể truy cập và sử dụng các giá trị trạng thái và phương thức được định nghĩa trong `AppContextInterface` mà không cần truyền dữ liệu qua props. Điều này giúp giảm bớt sự phức tạp của việc quản lý dữ liệu và tiết kiệm thời gian và công sức trong việc truyền dữ liệu giữa các component.

---

```jsx
export const AppProvider = ({
  children,
  defaultValue = initialAppContext
}: {
  children: React.ReactNode
  defaultValue?: AppContextInterface
}) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(defaultValue.isAuthenticated)
  const [extendedPurchases, setExtendedPurchases] = useState<ExtendedPurchase[]>(defaultValue.extendedPurchases)
  const [profile, setProfile] = useState<User | null>(defaultValue.profile)

  const reset = () => {
    setIsAuthenticated(false)
    setExtendedPurchases([])
    setProfile(null)
  }
}
```

1. `export const AppProvider = (...) => { ... }`:

- Đoạn code trên định nghĩa một Functional Component có tên `AppProvider`.

- `AppProvider` là một Provider React dùng để cung cấp và quản lý trạng thái và phương thức thông qua Context (`AppContext`) xuống cho các component con trong cây DOM.

2. `{ children, defaultValue = initialAppContext }: { ... }`:

- Đoạn code này định nghĩa tham số của `AppProvider`.

- `children`: Tham số này chứa các component con được bao bọc bên trong `AppProvider`. Các component con này sẽ có thể truy cập vào dữ liệu và phương thức từ Context.

- `defaultValue`: Tham số này chứa giá trị mặc định của Context. Nếu không có Provider cung cấp giá trị cụ thể cho Context, giá trị mặc định này sẽ được sử dụng.

---

❌❌Phân tích đoạn code đó ra cho dễ hiểu❌❌

```bash
({
  children,
  defaultValue = initialAppContext
}: {
  children: React.ReactNode
  defaultValue?: AppContextInterface
})
```

- Đoạn code trên định nghĩa một tham số cho Functional Component `AppProvider`. Tham số này được gọi là object destructuring (cấu trúc đối tượng), cho phép ta truy cập các thuộc tính của object được truyền vào.

- Giải thích từng phần chi tiết của đoạn code:

1. `({ children, defaultValue = initialAppContext }: { ... })`:

- Đây là một tham số của Functional Component `AppProvider` được định nghĩa dưới dạng object destructuring.

- Tham số này là một object có hai thuộc tính:

  - `children`: Đại diện cho các component con được bao bọc bên trong `AppProvider`. Đây là một thuộc tính bắt buộc (required) và phải được cung cấp khi sử dụng `AppProvider`.

  - `defaultValue`: Đại diện cho giá trị mặc định của Context (`AppContext`). Đây là một thuộc tính tùy chọn (optional), và nếu không được cung cấp, giá trị mặc định của Context sẽ là `initialAppContext`.

2. `{ ... }`:

- Dấu ngoặc nhọn `{ ... }` trong tham số `({ ... })` cho phép truy cập các thuộc tính của object được truyền vào và gán chúng vào các biến ứng với tên thuộc tính tương ứng.

- Trong đoạn code trên, `children` và `defaultValue` là các biến được gán giá trị từ thuộc tính tương ứng của object được truyền vào khi sử dụng `AppProvider`.

3. `children: React.ReactNode`:

- `children` là biến đại diện cho các component con được bao bọc bên trong `AppProvider`.

- `React.ReactNode` là kiểu dữ liệu cho các children của Functional Component trong React. Nó đại diện cho bất kỳ loại nội dung nào có thể xuất hiện trong React, bao gồm các component, văn bản, các phần tử HTML, ...

- Vì `children` là một thuộc tính bắt buộc, nó phải có kiểu dữ liệu `React.ReactNode`.

4. `defaultValue?: AppContextInterface`:

- `defaultValue` là biến đại diện cho giá trị mặc định của Context (`AppContext`).

- `AppContextInterface` là kiểu dữ liệu của Context (`AppContext`) đã được định nghĩa bởi interface `AppContextInterface`.

- `defaultValue` là một thuộc tính tùy chọn, vì có dấu hỏi `?` sau tên thuộc tính, cho phép không cần cung cấp giá trị mặc định khi sử dụng `AppProvider`.

- Nếu không có giá trị cụ thể được cung cấp khi sử dụng `AppProvider`, giá trị mặc định sẽ là `initialAppContext`.

❌❌Xong phần giải thích❌❌

---

3. `const [isAuthenticated, setIsAuthenticated] = useState<boolean>(defaultValue.isAuthenticated)`:

- Dùng `useState` để tạo một biến trạng thái `isAuthenticated` và một hàm `setIsAuthenticated` để cập nhật giá trị của biến trạng thái này.

- Giá trị ban đầu của `isAuthenticated` sẽ được lấy từ `defaultValue.isAuthenticated`, tức là giá trị `isAuthenticated` trong `initialAppContext`.

4. `const [extendedPurchases, setExtendedPurchases] = useState<ExtendedPurchase[]>(defaultValue.extendedPurchases)`:

- Dùng `useState` để tạo một biến trạng thái `extendedPurchases` và một hàm `setExtendedPurchases` để cập nhật giá trị của biến trạng thái này.

- Giá trị ban đầu của `extendedPurchases` sẽ được lấy từ `defaultValue.extendedPurchases`, tức là giá trị `extendedPurchases` trong `initialAppContext`.

5. `const [profile, setProfile] = useState<User | null>(defaultValue.profile)`:

- Dùng `useState` để tạo một biến trạng thái `profile` và một hàm `setProfile` để cập nhật giá trị của biến trạng thái này.

- Giá trị ban đầu của `profile` sẽ được lấy từ `defaultValue.profile`, tức là giá trị `profile` trong `initialAppContext`.

6. `const reset = () => { ... }`:

- Định nghĩa hàm `reset` để thiết lập lại các giá trị trạng thái của Provider về giá trị ban đầu.

- Trong hàm `reset`, giá trị của `isAuthenticated` sẽ được đặt về `false`, `extendedPurchases` sẽ là một mảng rỗng `[]`, và `profile` sẽ được đặt về `null`.

- Khi hàm `reset` được gọi, các giá trị trạng thái của Provider sẽ được reset về giá trị ban đầu của `defaultValue` trong `initialAppContext`.

- Sau khi tạo các biến trạng thái và hàm `reset`, `AppProvider` sẽ cung cấp các giá trị và hàm này xuống cho các component con thông qua Context (`AppContext.Provider`). Các component con có thể sử dụng Hook `useContext` để truy cập và sử dụng các giá trị và hàm này trong ứng dụng.

---

```jsx
return (
  <AppContext.Provider
    value={{
      isAuthenticated,
      setIsAuthenticated,
      profile,
      setProfile,
      extendedPurchases,
      setExtendedPurchases,
      reset
    }}
  >
    {children}
  </AppContext.Provider>
)
```

- Đoạn code trên là phần trả về của `AppProvider`, nơi mà giá trị và hàm trạng thái được cung cấp thông qua Context (`AppContext`) xuống cho các component con.

- Giải thích từng phần chi tiết của đoạn code:

1. `<AppContext.Provider ...>`:

- Đoạn code trên sử dụng Context Provider (`AppContext.Provider`) để cung cấp các giá trị trạng thái và phương thức cho các component con trong cây DOM.

- Giá trị và hàm trạng thái được cung cấp thông qua thuộc tính `value` của Provider.

2. `value={{ ... }}`:

- Đoạn code này định nghĩa đối tượng (object) chứa các giá trị trạng thái (state) và phương thức (method) được cung cấp xuống cho các component con thông qua Context.

- Các thuộc tính của đối tượng tương ứng với tên của giá trị và hàm trạng thái đã được định nghĩa trước đó trong `AppProvider`.

3. `isAuthenticated, setIsAuthenticated, profile, setProfile, extendedPurchases, setExtendedPurchases, reset`:

- Các biến và hàm trạng thái đã được tạo trong `AppProvider` được cung cấp thông qua đối tượng `value`.

- Như vậy, các component con sẽ có thể truy cập và sử dụng giá trị của `isAuthenticated`, `profile`, `extendedPurchases` và các hàm `setIsAuthenticated`, `setProfile`, `setExtendedPurchases`, `reset` thông qua Context.

4. `{children}`:

- Giữa các thẻ `AppContext.Provider`, chúng ta có `{children}`. Điều này cho phép các component con được bao bọc bên trong Provider.

- Các component con bên trong `AppProvider` sẽ có thể truy cập vào các giá trị và hàm trạng thái từ Context thông qua Hook `useContext`.

- Tóm lại, đoạn code trên cung cấp các giá trị và hàm trạng thái từ `AppProvider` xuống cho các component con thông qua Context (`AppContext`). Điều này cho phép các component con trong cây DOM có thể truy cập và sử dụng các giá trị và hàm trạng thái này mà không cần truyền dữ liệu qua props. Việc sử dụng Context giúp giảm bớt sự phức tạp của việc quản lý dữ liệu và tiết kiệm thời gian và công sức trong việc truyền dữ liệu giữa các component.

---

❌❌Ôn lại khái niệm Context, trong Context gồm có những gì❌❌

## Hãy nêu khái niệm React Context API ?

- React Context API là một tính năng của React, giúp quản lý và chia sẻ dữ liệu trong cây component một cách hiệu quả và tiện lợi. Nó giúp giải quyết vấn đề truyền dữ liệu giữa các component con cấp thấp và cấp cao khi không muốn truyền dữ liệu qua props nhiều lớp.

- Khái niệm React Context API bao gồm các yếu tố chính sau:

1. `Provider`: Là thành phần cung cấp dữ liệu (state) và hàm cập nhật dữ liệu xuống các component con trong cây component. Provider đóng vai trò là nguồn dữ liệu chung và đảm bảo rằng các component con có thể truy cập và sử dụng dữ liệu này mà không cần truyền qua props.

2. `Consumer`: Là thành phần con trong cây component, sử dụng dữ liệu (state) từ Provider. Consumer sẽ đăng ký để lắng nghe và nhận thông tin từ Provider. Khi dữ liệu trong Provider thay đổi, các Consumer sẽ tự động cập nhật và hiển thị lại dữ liệu mới.

3. `Context`: Là đối tượng chứa dữ liệu được cung cấp bởi Provider và nhận được bởi Consumer. Context cung cấp một cách để truyền dữ liệu từ Provider đến Consumer mà không cần truyền qua props qua nhiều lớp trung gian.

- Cách sử dụng React Context API:

1. `Định nghĩa Context`: Tạo một Context bằng hàm `createContext` và định nghĩa các giá trị mặc định ban đầu cho nó.

2. `Tạo Provider`: Sử dụng Provider để cung cấp dữ liệu cho cây component. Đặt các giá trị trạng thái và hàm cập nhật dữ liệu vào thuộc tính `value` của Provider.

3. `Tạo Consumer`: Sử dụng Consumer để nhận và sử dụng dữ liệu từ Provider. Consumer sẽ tự động cập nhật khi dữ liệu trong Provider thay đổi.

4. `Truyền dữ liệu`: Dữ liệu từ Provider sẽ được truyền xuống các Consumer thông qua Context, cho phép các component con có thể truy cập và sử dụng dữ liệu này mà không cần truyền qua props nhiều lớp.

---

## Trong Context gồm có những gì ?

- Trong Context, có những phần chính sau:

1. `Provider`: Provider là thành phần cung cấp dữ liệu và hàm cập nhật dữ liệu cho cây component. Nó được sử dụng để định nghĩa các giá trị trạng thái và các hàm cập nhật dữ liệu. Provider chịu trách nhiệm cung cấp dữ liệu cho các component con bên trong cây component.

2. `Consumer`: Consumer là thành phần con trong cây component, sử dụng dữ liệu từ Provider. Nó sẽ đăng ký để lắng nghe và nhận thông tin từ Provider. Khi dữ liệu trong Provider thay đổi, các Consumer sẽ tự động cập nhật và hiển thị lại dữ liệu mới.

3. `Context Object`: Context là đối tượng chứa dữ liệu được cung cấp bởi Provider và nhận được bởi Consumer. Context cung cấp một cách để truyền dữ liệu từ Provider đến Consumer mà không cần truyền qua props qua nhiều lớp trung gian. Context được tạo bằng hàm `createContext` trong React.

4. `Giá trị trạng thái và hàm cập nhật`: Là các giá trị trạng thái và hàm cập nhật dữ liệu được định nghĩa trong Provider. Những giá trị này là dữ liệu mà Provider cung cấp cho Consumer để sử dụng. Khi giá trị trạng thái thay đổi trong Provider, các Consumer sẽ được thông báo và cập nhật lại dữ liệu mới.

- Tóm lại, trong Context, có Provider để cung cấp dữ liệu, Consumer để sử dụng dữ liệu và Context Object để truyền dữ liệu giữa Provider và Consumer. Việc sử dụng Context giúp giảm bớt sự phức tạp của việc quản lý dữ liệu và tiết kiệm thời gian và công sức trong việc truyền dữ liệu giữa các component trong ứng dụng React.

---

## Cho ví dụ cơ bản về Context API trong React ?

- Dưới đây là một ví dụ cơ bản về cách sử dụng Context API trong React để chia sẻ và sử dụng dữ liệu giữa các component:

1. Đầu tiên, tạo một Context và một Provider:

```jsx
import React, { createContext, useState } from 'react'

// Tạo Context
const MyContext = createContext()

// Tạo Provider
const MyProvider = ({ children }) => {
  const [count, setCount] = useState(0)

  return <MyContext.Provider value={{ count, setCount }}>{children}</MyContext.Provider>
}
```

2. Tiếp theo, tạo các component sử dụng dữ liệu từ Provider thông qua Consumer:

```jsx
// Component con sử dụng dữ liệu từ Context
const CounterDisplay = () => {
  const { count } = useContext(MyContext)

  return <div>Count: {count}</div>
}

// Component con sử dụng dữ liệu và hàm cập nhật từ Context
const CounterButton = () => {
  const { count, setCount } = useContext(MyContext)

  const handleIncrement = () => {
    setCount((prevCount) => prevCount + 1)
  }

  return <button onClick={handleIncrement}>Increment</button>
}
```

3. Cuối cùng, sử dụng Provider để bao bọc các component và cung cấp dữ liệu cho chúng:

```jsx
const App = () => {
  return (
    // Sử dụng Provider để cung cấp dữ liệu cho các component con
    <MyProvider>
      <CounterDisplay />
      <CounterButton />
    </MyProvider>
  )
}
```

- Trong ví dụ này, `MyContext` là một Context, `MyProvider` là một Provider cung cấp dữ liệu cho các component con và chia sẻ `count` và `setCount` là giá trị trạng thái và hàm cập nhật của `count`. Các component con `CounterDisplay` và `CounterButton` sử dụng dữ liệu từ Provider thông qua `useContext` để hiển thị giá trị `count` và thực hiện hành động tăng giá trị `count` khi nhấn vào nút "Increment".

<br/>

<b>✅✅ Sau đây là giải thích những đoạn code ở trên ✅✅</b>

<samp>❌❌ Đoạn 1 ❌❌</samp>

```jsx
import React, { createContext, useState } from 'react'

// Tạo Context
const MyContext = createContext()

// Tạo Provider
const MyProvider = ({ children }) => {
  const [count, setCount] = useState(0)

  return <MyContext.Provider value={{ count, setCount }}>{children}</MyContext.Provider>
}
```

- Trong đoạn mã trên, chúng ta đang tạo một Context và một Provider sử dụng Context API của React.

1. `import React, { createContext, useState } from 'react'`: Import các module cần thiết từ React, bao gồm `createContext` và `useState`.

2. Tạo Context:

- `const MyContext = createContext()`: Đoạn mã trên tạo một Context mới với tên là `MyContext` bằng cách sử dụng hàm `createContext()`. Khi không truyền giá trị nào vào hàm `createContext()`, Context sẽ có giá trị mặc định là `undefined`.

3. Tạo Provider:

- `const MyProvider = ({ children }) => { ... }`: Đoạn mã trên tạo một Provider với tên là `MyProvider`, nhận vào một prop là `children`.

- Trong React, `children` là một prop đặc biệt chứa các component con của component cha được bao bọc bởi Provider.

- `const [count, setCount] = useState(0)`: Trong Provider, chúng ta sử dụng `useState` để tạo một biến trạng thái `count` và một hàm `setCount` để cập nhật giá trị của `count`. Giá trị ban đầu của `count` là 0.

- `<MyContext.Provider value={{ count, setCount }}> ... </MyContext.Provider>`: Trong Provider, chúng ta sử dụng `MyContext.Provider` để cung cấp dữ liệu cho các component con bên trong cây component.

  - Thuộc tính `value` của Provider chứa đối tượng và chứa các giá trị trạng thái và hàm cập nhật mà các component con có thể truy cập thông qua Context.

  - Trong trường hợp này, chúng ta đang cung cấp giá trị `count` và hàm `setCount` cho các component con thông qua Context.

4. `{children}`: Đoạn mã `children` bên trong Provider cho phép các component con được bao bọc bởi Provider. Như vậy, các component con trong cây component sẽ có thể truy cập vào các giá trị `count` và `setCount` từ Context.

- Tóm lại, đoạn mã trên tạo một Context có tên là `MyContext` và một Provider có tên là `MyProvider`, cung cấp giá trị trạng thái `count` và hàm cập nhật `setCount` cho các component con trong cây component thông qua Context.

<samp>❌❌ Đoạn 2 ❌❌</samp>

```jsx
const CounterDisplay = () => {
  const { count } = useContext(MyContext)

  return <div>Count: {count}</div>
}

// Component con sử dụng dữ liệu và hàm cập nhật từ Context
const CounterButton = () => {
  const { count, setCount } = useContext(MyContext)

  const handleIncrement = () => {
    setCount((prevCount) => prevCount + 1)
  }

  return <button onClick={handleIncrement}>Increment</button>
}
```

- Đoạn mã trên là hai component con trong React sử dụng dữ liệu từ Context (`MyContext`) thông qua Hook `useContext`.

1. `const { count } = useContext(MyContext)`: Trong component `CounterDisplay`, chúng ta sử dụng `useContext` để lấy dữ liệu từ Context (`MyContext`). Biến `count` sẽ lấy giá trị trạng thái `count` từ Context và được sử dụng để hiển thị số lượng hiện tại.

2. `return <div>Count: {count}</div>`: Component `CounterDisplay` trả về một đoạn mã JSX là một div hiển thị số lượng hiện tại từ dữ liệu lấy từ Context.

3. `const { count, setCount } = useContext(MyContext)`: Trong component `CounterButton`, chúng ta cũng sử dụng `useContext` để lấy dữ liệu từ Context (`MyContext`). Biến `count` lấy giá trị trạng thái `count` từ Context và biến `setCount` lấy hàm cập nhật `setCount` từ Context. Biến `setCount` được sử dụng để tăng giá trị `count` khi nút "Increment" được nhấn.

4. `const handleIncrement = () => { setCount((prevCount) => prevCount + 1) }`: Hàm `handleIncrement` sử dụng hàm cập nhật `setCount` để cập nhật giá trị `count`. Bằng cách sử dụng hàm cập nhật dạng hàm (`(prevCount) => prevCount + 1`), chúng ta đảm bảo rằng giá trị mới được tính toán dựa trên giá trị trước đó của `count`.

5. `return <button onClick={handleIncrement}>Increment</button>`: Component `CounterButton` trả về một đoạn mã JSX là một nút "Increment". Khi nút này được nhấn, hàm `handleIncrement` sẽ được gọi và giá trị `count` sẽ được tăng lên 1.

- Tóm lại, đoạn mã trên cho thấy cách hai component con `CounterDisplay` và `CounterButton` sử dụng dữ liệu từ Context (`MyContext`) thông qua Hook `useContext` để hiển thị và cập nhật giá trị `count`. Nhờ đó, dữ liệu trong Provider được chia sẻ và sử dụng giữa các component con mà không cần truyền qua props nhiều lớp.

<samp>❌❌ Đoạn 3 ❌❌</samp>

```jsx
const App = () => {
  return (
    // Sử dụng Provider để cung cấp dữ liệu cho các component con
    <MyProvider>
      <CounterDisplay />
      <CounterButton />
    </MyProvider>
  )
}
```

1. Đoạn mã trên là một component tên là `App`, là component chính của ứng dụng.

2. `MyProvider` là một Provider, như đã định nghĩa trước đó, nó chứa dữ liệu và hàm cập nhật dữ liệu để chia sẻ cho các component con trong cây component.

3. `<MyProvider>`: Chúng ta bao bọc hai component con `CounterDisplay` và `CounterButton` bên trong `<MyProvider>`. Nhờ vậy, hai component con này đều có thể sử dụng dữ liệu từ Provider.

4. `CounterDisplay` và `CounterButton` là hai component con sử dụng dữ liệu từ Provider thông qua Context API, như đã giải thích ở trước đó.

5. Từ đoạn mã trên, ta có thể hiểu rằng `App` đang sử dụng `MyProvider` để cung cấp dữ liệu cho các component con bên trong nó. Cụ thể là `CounterDisplay` và `CounterButton` có thể sử dụng và chia sẻ dữ liệu từ Provider, và việc truyền dữ liệu qua các cấp component không cần thiết.

- Với cách này, dữ liệu trong Provider sẽ được chia sẻ và sử dụng bởi các component con một cách hiệu quả, giúp giảm bớt sự phức tạp của việc quản lý dữ liệu và tiết kiệm thời gian và công sức trong việc truyền dữ liệu giữa các component trong ứng dụng React.

---

## Cho ví dụ cơ bản về Context API trong React trong typescript?

- Dưới đây là một ví dụ cơ bản về cách sử dụng Context API trong React với TypeScript để chia sẻ và sử dụng dữ liệu giữa các component:

1. Đầu tiên, tạo một Context và một Provider với TypeScript:

```jsx
import React, { createContext, useContext, useState } from 'react';

// Định nghĩa kiểu dữ liệu của Context
interface AppContextData {
  count: number;
  increment: () => void;
}

// Tạo Context với kiểu dữ liệu AppContextData
const AppContext = createContext<AppContextData>({} as AppContextData);

// Tạo Provider
const AppProvider = ({ children }) => {
  const [count, setCount] = useState<number>(0);

  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  };

  return (
    <AppContext.Provider value={{ count, increment }}>
      {children}
    </AppContext.Provider>
  );
};
```

1. Đoạn mã trên bao gồm ba phần chính:

- Định nghĩa kiểu dữ liệu của Context:

```jsx
interface AppContextData {
  count: number;
  increment: () => void;
}
```

- Đây là một interface TypeScript để xác định kiểu dữ liệu của Context. Trong trường hợp này, Context có hai trường dữ liệu: `count` là một số nguyên (number) và `increment` là một hàm không có tham số và không có giá trị trả về.

- Tạo Context:

```jsx
const AppContext = createContext<AppContextData>({} as AppContextData);
```

- Đoạn mã trên tạo một Context mới có tên là `AppContext`. Chúng ta sử dụng hàm `createContext` từ React và chỉ định kiểu dữ liệu của Context là `AppContextData`.

- Tạo Provider:

```jsx
const AppProvider = ({ children }) => {
  const [count, setCount] = useState < number > 0

  const increment = () => {
    setCount((prevCount) => prevCount + 1)
  }

  return <AppContext.Provider value={{ count, increment }}>{children}</AppContext.Provider>
}
```

- Trong đoạn mã trên, chúng ta tạo một Provider (người cung cấp dữ liệu) có tên là `AppProvider`. Provider này sử dụng React Hook `useState` để tạo một trạng thái (state) có tên là `count` với giá trị ban đầu là 0. Ngoài ra, chúng ta tạo một hàm có tên là `increment` để tăng giá trị của `count` lên một đơn vị mỗi khi được gọi.

- Sau đó, Provider truyền dữ liệu và hàm `increment` này vào trong Context thông qua thuộc tính `value` của Provider (`<AppContext.Provider value={{ count, increment }}>`) để các component con có thể sử dụng.

- Provider bao bọc một số component con (được truyền qua prop children) để cung cấp dữ liệu cho chúng.

2. Tiếp theo, tạo các component sử dụng dữ liệu từ Provider thông qua Consumer với TypeScript:

```jsx
// Component sử dụng dữ liệu từ Context
const CounterDisplay = () => {
  const { count } = useContext(AppContext)

  return <div>Count: {count}</div>
}

// Component sử dụng dữ liệu và hàm cập nhật từ Context
const CounterButton = () => {
  const { increment } = useContext(AppContext)

  return <button onClick={increment}>Increment</button>
}
```

1. Đoạn mã trên định nghĩa hai component con: `CounterDisplay` và `CounterButton`.

2. Component `CounterDisplay` sử dụng dữ liệu từ Context (`AppContext`) để hiển thị số lượng hiện tại (`count`).

3. Component `CounterButton` sử dụng dữ liệu và hàm cập nhật từ Context để thực hiện hành động tăng số lượng (`increment`) khi nhấn nút "Increment".

4. Cách hoạt động của hai component con:

- Component `CounterDisplay`:

  - Sử dụng `useContext(AppContext)` để lấy dữ liệu từ Context. Trong trường hợp này, chúng ta chỉ quan tâm đến dữ liệu `count`, vì vậy chúng ta sử dụng cú pháp `{ count } = useContext(AppContext)` để lấy giá trị `count` từ Context.

  - Sau đó, component trả về một div hiển thị số lượng hiện tại (`count`) được lấy từ Context.

- Component `CounterButton`:

  - Cũng sử dụng `useContext(AppContext)` để lấy dữ liệu và hàm cập nhật từ Context. Chúng ta chỉ quan tâm đến hàm `increment` trong Context, nên chúng ta sử dụng cú pháp `{ increment } = useContext(AppContext)` để lấy hàm `increment`.

  - Sau đó, component trả về một nút "Increment" (`<button onClick={increment}>Increment</button>`) và định nghĩa hành động khi nút này được nhấn: khi nhấn nút, hàm `increment` sẽ được gọi để tăng giá trị `count` trong Context lên một đơn vị.

- Để hiểu rõ hơn, ta cần bao bọc các component con này bên trong Provider (`AppProvider`) để cung cấp dữ liệu từ Context cho chúng. Bằng cách này, các component con có thể sử dụng và chia sẻ dữ liệu từ Provider một cách dễ dàng và hiệu quả.

3. Cuối cùng, sử dụng Provider để bao bọc các component và cung cấp dữ liệu cho chúng:

```jsx
const App = () => {
  return (
    // Sử dụng Provider để cung cấp dữ liệu cho các component con
    <AppProvider>
      <CounterDisplay />
      <CounterButton />
    </AppProvider>
  )
}
```

- Đoạn mã trên là một component chính có tên là `App`. Component `App` được sử dụng để hiển thị các component con `CounterDisplay` và `CounterButton`.

1. `<AppProvider>`: Đây là một Provider (`AppProvider`) mà chúng ta đã định nghĩa trước đó. Provider này chứa dữ liệu và hàm cập nhật dữ liệu (`count` và `increment`) và được sử dụng để chia sẻ dữ liệu giữa các component con bên trong nó.

2. Bên trong `<AppProvider>`, chúng ta có hai component con:

- `CounterDisplay`: Đây là component sử dụng dữ liệu từ Context để hiển thị số lượng hiện tại (`count`). Nó không thay đổi dữ liệu mà chỉ sử dụng dữ liệu từ Provider để hiển thị thông tin.

- `CounterButton`: Đây là component sử dụng dữ liệu và hàm cập nhật từ Context để thực hiện hành động tăng số lượng (`increment`) khi nhấn nút "Increment".

- Nhưng để Context API hoạt động, chúng ta cần có một Provider (`AppProvider`) bọc các component con. Trong trường hợp này, chúng ta bao bọc `CounterDisplay` và `CounterButton` bên trong `<AppProvider>`. Nhờ Provider này, dữ liệu `count` và hàm `increment` từ Provider sẽ được cung cấp cho cả `CounterDisplay` và `CounterButton` một cách dễ dàng và hiệu quả.

- Điều này cho phép các component con chia sẻ và sử dụng dữ liệu chung từ Provider mà không cần phải truyền qua props qua nhiều lớp. Nó giúp giảm sự phức tạp và tăng tính tái sử dụng của mã trong ứng dụng React.

- ✅✅ Tóm lại: Trong ví dụ này, `AppContextData` là kiểu dữ liệu của Context và Provider. `AppContext` là Context được tạo bằng hàm `createContext` với kiểu dữ liệu `AppContextData`. `AppProvider` là Provider chứa dữ liệu và hàm cập nhật dữ liệu, và cung cấp chúng cho các component con thông qua Context. Các component con `CounterDisplay` và `CounterButton` sử dụng dữ liệu từ Context thông qua Hook `useContext` và hiển thị số lượng hiện tại và thực hiện hành động tăng giá trị `count` khi nhấn vào nút "Increment".

---

## Cho ví dụ nâng cao về Context API trong React ?

---

## Cho ví dụ nâng cao về Context API trong React với TypeScript ?

---

## Tạo Context trong react ?

---

## Cách update data trong Context ?

---

## So sánh Redux và Context ?

---

👇👇👇 Dưới đây là hình ảnh sơ lược về Redux và Context 👇👇👇

![Redux and Context](Redux-Context.png)
