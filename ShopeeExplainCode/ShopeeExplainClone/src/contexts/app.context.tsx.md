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

- Dưới đây là một ví dụ nâng cao về cách sử dụng Context API trong React để quản lý trạng thái của một giỏ hàng trong ứng dụng mua sắm đơn giản.

1. Đầu tiên, hãy tạo một Context và một Provider để quản lý trạng thái giỏ hàng:

```jsx
import React, { createContext, useContext, useState } from 'react';

// Định nghĩa kiểu dữ liệu của sản phẩm trong giỏ hàng
interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

// Định nghĩa kiểu dữ liệu của Context
interface CartContextData {
  cartItems: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: number) => void;
  clearCart: () => void;
}

// Tạo Context với kiểu dữ liệu CartContextData
const CartContext = createContext<CartContextData>({} as CartContextData);

// Tạo Provider
const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  // Thêm một sản phẩm vào giỏ hàng
  const addToCart = (item: CartItem) => {
    setCartItems((prevItems) => [...prevItems, item]);
  };

  // Xóa một sản phẩm khỏi giỏ hàng dựa trên ID
  const removeFromCart = (id: number) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  // Xóa toàn bộ giỏ hàng
  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};
```

❌❌ Giải thích đoạn code chi tiết ❌❌

- Trong đoạn mã trên, chúng ta sử dụng React Context API để tạo một Context và một Provider để quản lý trạng thái của giỏ hàng trong ứng dụng mua sắm đơn giản.

- Đầu tiên, chúng ta định nghĩa kiểu dữ liệu cho một sản phẩm trong giỏ hàng (`CartItem`) và cho Context (`CartContextData`):

- Trong đó có 2 đoạn mã đang định nghĩa hai giao diện (interfaces) cho việc quản lý giỏ hàng (cart) trong một ứng dụng.

✅✅ Đoạn 1 ✅✅

- 👉 Thứ nhất là `Interface CartItem`:

```jsx
interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
}
```

- (Giao diện) `Interface CartItem` mô tả các thuộc tính của một mục hàng trong giỏ hàng. Các thuộc tính bao gồm:

  - `id`: Mã số duy nhất định danh cho mục hàng (sử dụng số nguyên).
  - `name`: Tên của mục hàng.
  - `price`: Giá của mục hàng (sử dụng số thực).
  - `quantity`: Số lượng mục hàng trong giỏ hàng (sử dụng số nguyên).

- 👉 Thứ hai là `Interface CartContextData`:

```jsx
interface CartContextData {
  cartItems: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: number) => void;
  clearCart: () => void;
}
```

- (Giao diện) `Interface CartContextData` mô tả dữ liệu và các phương thức cần thiết để quản lý giỏ hàng trong Context. Các thuộc tính và phương thức bao gồm:

  - `cartItems`: Một mảng chứa các mục hàng trong giỏ hàng, mỗi mục hàng sẽ tuân theo (giao diện) `Interface CartItem`.
  - `addToCart`: Một hàm có tham số `item` là một đối tượng mục hàng (kiểu `CartItem`). Hàm này được sử dụng để thêm mục hàng mới vào giỏ hàng.
  - `removeFromCart`: Một hàm có tham số `id` là mã số định danh của mục hàng cần xóa (kiểu số nguyên). Hàm này được sử dụng để xóa mục hàng từ giỏ hàng dựa vào mã số.
  - `clearCart`: Một hàm không có tham số, được sử dụng để xóa toàn bộ nội dung trong giỏ hàng (làm rỗng giỏ hàng).

- Những giao diện (interface) này giúp định nghĩa các kiểu dữ liệu và phương thức cần thiết để làm việc với giỏ hàng trong ứng dụng. Khi đã định nghĩa giao diện, ta có thể sử dụng chúng trong việc tạo Context và cung cấp dữ liệu cho các thành phần con trong ứng dụng.

✅✅ Đoạn 2 ✅✅

```jsx
// Tạo Context với kiểu dữ liệu CartContextData
const CartContext = createContext<CartContextData>({} as CartContextData);
```

- Dòng mã trên là cách tạo một Context trong React và xác định kiểu dữ liệu của Context đó là `CartContextData`.

- `Tạo Context`:

  - Hàm `createContext()` được sử dụng để tạo một Context mới.
  - Trong trường hợp này, chúng ta tạo một Context có tên là `CartContext`.

- `Kiểu dữ liệu của Context`:

  - Để xác định kiểu dữ liệu của Context, chúng ta sử dụng cú pháp `createContext<CartContextData>()`.
  - Trong trường hợp này, `CartContextData` là một giao diện (interface) đã được định nghĩa ở đoạn mã trước đó, mô tả dữ liệu và phương thức quản lý giỏ hàng.

- `Giá trị mặc định (optional)`:

  - Nếu bạn không muốn cung cấp giá trị mặc định ban đầu cho Context, bạn có thể bỏ qua phần ngoặc đơn ở sau hàm `createContext()`.
  - Tuy nhiên, trong đoạn mã trên, chúng ta đã cung cấp giá trị mặc định bằng cách sử dụng `{} as CartContextData`. Điều này chỉ định rằng giá trị mặc định ban đầu cho Context là một đối tượng rỗng có kiểu dữ liệu là `CartContextData`.

- Sau khi tạo Context với kiểu dữ liệu `CartContextData`, bạn có thể sử dụng Context Provider và Context Consumer để cung cấp và truy cập dữ liệu trong `CartContext`. Điều này giúp chia sẻ dữ liệu về giỏ hàng (`cartItems`) và các phương thức quản lý giỏ hàng (`addToCart`, `removeFromCart`, `clearCart`) với các thành phần con trong ứng dụng một cách dễ dàng và hiệu quả.

✅✅ Đoạn 3 ✅✅

```jsx
// Tạo Provider
const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  // Thêm một sản phẩm vào giỏ hàng
  const addToCart = (item: CartItem) => {
    setCartItems((prevItems) => [...prevItems, item]);
  };

  // Xóa một sản phẩm khỏi giỏ hàng dựa trên ID
  const removeFromCart = (id: number) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  // Xóa toàn bộ giỏ hàng
  const clearCart = () => {
    setCartItems([]);
  };
}
```

- Đoạn mã này định nghĩa một Context Provider có tên là `CartProvider` để quản lý giỏ hàng trong ứng dụng. Context Provider này sẽ cung cấp dữ liệu và các phương thức để thêm, xóa và xóa toàn bộ mục hàng trong giỏ hàng. Để sử dụng Context này, bạn cần wrap các thành phần con trong ứng dụng bằng `<CartProvider>` ở cấp cao nhất.

- Hãy giải thích từng phần trong đoạn mã:

- `const [cartItems, setCartItems] = useState<CartItem[]>([]);`:

- Đây là một state trong React dùng để lưu trữ các mục hàng trong giỏ hàng.

  - `cartItems`: Biến state lưu trữ danh sách các mục hàng trong giỏ hàng. Kiểu dữ liệu của `cartItems` là một mảng các đối tượng `CartItem`.
  - `setCartItems`: Hàm để cập nhật giá trị của `cartItems`. Khi gọi hàm `setCartItems`, React sẽ tự động cập nhật lại giao diện với giá trị mới của `cartItems`.

- `const addToCart = (item: CartItem) => { ... }`:

  - Hàm `addToCart` dùng để thêm một mục hàng mới vào giỏ hàng.
  - Khi gọi hàm `addToCart(item)`, nó sẽ thêm `item` vào `cartItems` bằng cách tạo một mảng mới chứa tất cả các mục hàng cũ và thêm mục hàng mới vào cuối mảng.

- `const removeFromCart = (id: number) => { ... }`:

  - Hàm `removeFromCart` dùng để xóa một mục hàng từ giỏ hàng dựa vào `id` của mục hàng.
  - Khi gọi hàm `removeFromCart(id)`, nó sẽ xóa mục hàng có `id` tương ứng ra khỏi `cartItems` bằng cách sử dụng `filter` để loại bỏ mục hàng có `id` cần xóa khỏi mảng.

- `const clearCart = () => { ... }`:

  - Hàm `clearCart` dùng để xóa toàn bộ mục hàng khỏi giỏ hàng.
  - Khi gọi hàm `clearCart()`, nó sẽ đơn giản là cập nhật `cartItems` thành một mảng rỗng để làm rỗng giỏ hàng.

- Tóm lại: Sau khi đã xác định các hàm quản lý giỏ hàng và state `cartItems`, bạn có thể sử dụng Context Provider `CartProvider` để cung cấp dữ liệu và các phương thức này cho các thành phần con trong ứng dụng.

✅✅ Đoạn 4 ✅✅

```jsx
return (
  <CartContext.Provider
    value={{
      cartItems,
      addToCart,
      removeFromCart,
      clearCart
    }}
  >
    {children}
  </CartContext.Provider>
)
```

- Đoạn mã này thực hiện việc tạo một Context Provider bằng cách sử dụng Context `CartContext` đã được định nghĩa trước đó. Nó cung cấp các giá trị và phương thức quản lý giỏ hàng (`cartItems`, `addToCart`, `removeFromCart`, `clearCart`) cho các thành phần con nằm bên trong nó thông qua việc sử dụng `CartContext.Provider`.

- Hãy giải thích từng phần trong đoạn mã:

- `<CartContext.Provider>`:

  - Đây là Context Provider. Nó là nơi bạn cung cấp dữ liệu và các phương thức trong Context để các thành phần con có thể truy cập và sử dụng.
  - Bên trong Context Provider, ta sử dụng thuộc tính `value` để định nghĩa dữ liệu và các phương thức mà ta muốn chia sẻ với các thành phần con.

- `value={{ cartItems, addToCart, removeFromCart, clearCart }}`:

  - Đây là thuộc tính `value` của Context Provider. Nó là nơi bạn cung cấp dữ liệu và các phương thức muốn chia sẻ cho các thành phần con.
  - Trong trường hợp này, chúng ta đang cung cấp các giá trị và phương thức quản lý giỏ hàng đã được định nghĩa trước đó cho các thành phần con.
  - `cartItems`: Giá trị lưu trữ các mục hàng trong giỏ hàng.
  - `addToCart`: Phương thức để thêm một mục hàng vào giỏ hàng.
  - `removeFromCart`: Phương thức để xóa một mục hàng khỏi giỏ hàng dựa vào `id`.
  - `clearCart`: Phương thức để xóa toàn bộ mục hàng khỏi giỏ hàng.

- `{children}`:

  - Đây là các thành phần con bên trong Context Provider. Bạn có thể thay thế `{children}` bằng bất kỳ thành phần (component) con nào mà bạn muốn quản lý dữ liệu giỏ hàng của chúng thông qua Context.

- Như vậy, sau khi wrap một component cha bằng `<CartProvider>`, bất kỳ component con nào bên trong đều có thể sử dụng `useContext(CartContext)` để truy cập dữ liệu giỏ hàng và các phương thức quản lý giỏ hàng đã được cung cấp từ Context Provider.

2. Tiếp theo, hãy tạo các component sử dụng dữ liệu và hành động từ Provider thông qua Context:

```jsx
// Component hiển thị danh sách sản phẩm trong giỏ hàng
const CartItemList = () => {
  const { cartItems, removeFromCart } = useContext(CartContext)

  return (
    <ul>
      {cartItems.map((item) => (
        <li key={item.id}>
          {item.name} - ${item.price} - Quantity: {item.quantity}
          <button onClick={() => removeFromCart(item.id)}>Remove</button>
        </li>
      ))}
    </ul>
  )
}

// Component thêm sản phẩm vào giỏ hàng
const AddToCartButton<{ item: CartItem }> = ({ item }) => {
  const { addToCart } = useContext(CartContext)

  return <button onClick={() => addToCart(item)}>Add to Cart</button>
}
```

❌❌ Đoạn 1 ❌❌

```jsx
// Component hiển thị danh sách sản phẩm trong giỏ hàng
const CartItemList = () => {
  const { cartItems, removeFromCart } = useContext(CartContext)

  return (
    <ul>
      {cartItems.map((item) => (
        <li key={item.id}>
          {item.name} - ${item.price} - Quantity: {item.quantity}
          <button onClick={() => removeFromCart(item.id)}>Remove</button>
        </li>
      ))}
    </ul>
  )
}
```

- Đoạn mã trên định nghĩa một functional component có tên `CartItemList`, có chức năng hiển thị danh sách các mục hàng trong giỏ hàng. Component này sử dụng Context thông qua `useContext(CartContext)` để truy cập dữ liệu giỏ hàng và phương thức `removeFromCart` từ Context Provider.

- Hãy giải thích từng phần trong đoạn mã:

- `const { cartItems, removeFromCart } = useContext(CartContext)`:

  - Dòng này sử dụng hook `useContext` để lấy dữ liệu từ Context Provider. Nó kết hợp với `CartContext` để truy cập dữ liệu giỏ hàng và các phương thức quản lý giỏ hàng.
  - `cartItems`: Biến `cartItems` sẽ lưu trữ các mục hàng trong giỏ hàng (lấy từ `CartContext`).
  - `removeFromCart`: Hàm `removeFromCart` sẽ lưu trữ phương thức xóa một mục hàng khỏi giỏ hàng dựa vào `id` (lấy từ `CartContext`).

- `Hiển thị danh sách mục hàng trong giỏ hàng`:

  - Component này sử dụng hàm `map` để duyệt qua mỗi mục hàng trong `cartItems` và hiển thị thông tin của mỗi mục hàng trong một thẻ `<li>` (list item) của danh sách.
  - Mỗi mục hàng bao gồm thông tin: `item.name` (tên mục hàng), `item.price` (giá mục hàng), và `item.quantity` (số lượng mục hàng).
  - Đối với mỗi mục hàng, ta cũng hiển thị một nút "Remove" để xóa mục hàng khỏi giỏ hàng, sử dụng hàm `removeFromCart(item.id)` khi người dùng nhấn vào nút này.

- `key={item.id}`:

- Trong vòng lặp, ta cần cung cấp prop `key` duy nhất cho mỗi phần tử trong danh sách. Điều này giúp React hiểu định danh của mỗi phần tử và giúp tối ưu hoá quá trình cập nhật các phần tử của danh sách khi có thay đổi.

- Như vậy, khi bạn sử dụng component `CartItemList` trong ứng dụng, nó sẽ hiển thị danh sách các mục hàng trong giỏ hàng, và người dùng có thể xóa mục hàng bằng cách nhấn vào nút "Remove" tương ứng với mỗi mục hàng. Các thay đổi trong giỏ hàng sẽ được cập nhật tự động nhờ việc sử dụng Context để quản lý trạng thái giỏ hàng.

❌❌ Đoạn 2 ❌❌

```jsx
// Component thêm sản phẩm vào giỏ hàng
const AddToCartButton<{ item: CartItem }> = ({ item }) => {
  const { addToCart } = useContext(CartContext)

  return <button onClick={() => addToCart(item)}>Add to Cart</button>
}
```

- Đoạn mã trên định nghĩa một functional component có tên `AddToCartButton`, có chức năng tạo nút "Add to Cart" cho mỗi mục hàng (`CartItem`). Component này sử dụng Context thông qua `useContext(CartContext)` để truy cập phương thức `addToCart` từ Context Provider.

- Hãy giải thích từng phần trong đoạn mã:

- `const AddToCartButton<{ item: CartItem }> = ({ item }) => { ... }`:

  - Đây là cách định nghĩa một functional component và đồng thời định nghĩa các prop mà component này có thể nhận được.
  - `AddToCartButton` là tên của component.
  - `{ item: CartItem }` là cách định nghĩa kiểu dữ liệu của prop `item`. Trong trường hợp này, component `AddToCartButton` có thể nhận một prop có tên là `item` và kiểu dữ liệu là `CartItem`.

- `const { addToCart } = useContext(CartContext)`:

  - Dòng này sử dụng hook `useContext` để lấy dữ liệu từ Context Provider. Nó kết hợp với `CartContext` để truy cập phương thức `addToCart` từ Context Provider.
  - `addToCart`: Biến `addToCart` sẽ lưu trữ phương thức thêm một mục hàng vào giỏ hàng (lấy từ `CartContext`).

- `<button onClick={() => addToCart(item)}>Add to Cart</button>`:

  - Đây là thẻ `button` trong JSX. Khi người dùng nhấn vào nút này, nó sẽ gọi phương thức `addToCart(item)` để thêm mục hàng (`item`) vào giỏ hàng.
  - `onClick={() => addToCart(item)}` là sự kiện click, khi người dùng nhấn vào nút, nó sẽ gọi hàm `addToCart(item)` để thêm `item` vào giỏ hàng.

- Như vậy, khi bạn sử dụng component `AddToCartButton` trong ứng dụng và truyền prop `item` cho nó, nó sẽ hiển thị một nút "Add to Cart". Khi người dùng nhấn vào nút này, mục hàng được truyền qua prop `item` sẽ được thêm vào giỏ hàng thông qua việc sử dụng Context và phương thức `addToCart` từ Context Provider. Điều này giúp quản lý giỏ hàng và cập nhật giỏ hàng một cách dễ dàng và linh hoạt trong ứng dụng.

3. Cuối cùng, sử dụng Provider để bao bọc các component và cung cấp dữ liệu cho chúng:

```jsx
const App = () => {
  return (
    // Sử dụng Provider để cung cấp dữ liệu cho các component con
    <CartProvider>
      <h1>Shopping Cart</h1>
      <CartItemList />

      <h2>Available Products</h2>
      <AddToCartButton item={{ id: 1, name: 'Product 1', price: 10, quantity: 1 }} />
      <AddToCartButton item={{ id: 2, name: 'Product 2', price: 20, quantity: 1 }} />
    </CartProvider>
  )
}
```

- Đoạn mã trên định nghĩa một functional component có tên `App`, là component chính của ứng dụng. Component này sử dụng `CartProvider` để cung cấp dữ liệu giỏ hàng và các phương thức quản lý giỏ hàng cho các thành phần con bên trong nó.

- Hãy giải thích từng phần trong đoạn mã:

- `<CartProvider> ... </CartProvider>`:

  - Đây là Context Provider (`CartProvider`) đã được định nghĩa trước đó để cung cấp dữ liệu giỏ hàng và các phương thức quản lý giỏ hàng cho các thành phần con.
  - Bên trong `CartProvider`, chúng ta đặt tất cả các thành phần con mà chúng ta muốn chia sẻ dữ liệu giỏ hàng với.

- `<h1>Shopping Cart</h1>`:

  - Đây là một thẻ tiêu đề `h1` hiển thị dòng chữ "Shopping Cart" trên trang ứng dụng.

- `<CartItemList />`:

  - Đây là component `CartItemList`, là một component hiển thị danh sách các mục hàng trong giỏ hàng. Component này sử dụng Context thông qua `useContext(CartContext)` để truy cập dữ liệu giỏ hàng và các phương thức `removeFromCart` từ Context Provider.

- `<h2>Available Products</h2>`:

  - Đây là một thẻ tiêu đề `h2` hiển thị dòng chữ "Available Products" trên trang ứng dụng.

- `<AddToCartButton item={{ id: 1, name: 'Product 1', price: 10, quantity: 1 }} />`:

  - Đây là component `AddToCartButton`, là một component hiển thị nút "Add to Cart" cho mục hàng được truyền vào thông qua prop `item`.
  - Trong trường hợp này, chúng ta đang truyền vào prop `item` là một đối tượng mục hàng có các thuộc tính `id`, `name`, `price`, và `quantity`.

- `AddToCartButton item={{ id: 2, name: 'Product 2', price: 20, quantity: 1 }} />`:

  - Tương tự như trên, đây là component `AddToCartButton` khác, là một component hiển thị nút "Add to Cart" cho mục hàng có thông tin khác nhau.

- Như vậy, khi bạn sử dụng component `App` trong ứng dụng, nó sẽ hiển thị các thành phần và thông tin giỏ hàng, và bạn có thể thêm các mục hàng vào giỏ hàng thông qua các nút "Add to Cart". Các phương thức và dữ liệu giỏ hàng được quản lý bởi Context Provider (`CartProvider`) giúp cho việc quản lý giỏ hàng trong ứng dụng trở nên dễ dàng và tiện lợi.

- ✅✅ Tóm lại: Trong ví dụ này, chúng ta tạo một giỏ hàng đơn giản với các sản phẩm và có thể thêm và xóa các sản phẩm khỏi giỏ hàng bằng cách sử dụng Context API để quản lý trạng thái của giỏ hàng. Component `CartItemList` hiển thị danh sách sản phẩm trong giỏ hàng và có nút "Remove" để xóa sản phẩm khỏi giỏ hàng. Component `AddToCartButton` cho phép thêm một sản phẩm vào giỏ hàng khi nhấn nút "Add to Cart".

- ✅✅ Nhờ việc sử dụng Provider và Context, các component con có thể sử dụng dữ liệu và hành động từ Provider một cách dễ dàng và hiệu quả mà không cần phải truyền qua props qua nhiều lớp. Điều này giúp giảm sự phức tạp và tăng tính tái sử dụng của mã trong ứng dụng React.

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
