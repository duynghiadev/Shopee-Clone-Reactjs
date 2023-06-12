## Đây là Docs tự Research: 👇👇👇

## Những điều lưu ý khi học react router v6 ?

✅✅ Khi học React Router v6, sau đây là một số điều lưu ý quan trọng:

- Phiên bản mới: React Router v6 đã thay đổi nhiều so với phiên bản trước đó (v5). Hãy đảm bảo bạn đang học và sử dụng phiên bản đúng để tránh nhầm lẫn.

- Không còn component `<Switch>`: Trong React Router v6, không còn sử dụng `<Switch>` component như trong v5. Thay vào đó, chúng ta sử dụng hook `useRoutes` để xác định các định tuyến và component tương ứng.

- Hook mới: React Router v6 giới thiệu một số hook mới như `useRoutes`, `useLocation`, `useSearchParams`, và `useNavigate`. Hãy tìm hiểu kỹ về cách sử dụng các hook này để thao tác với định tuyến (router) và thông tin vị trí.

- Sử dụng `<Routes>` và `<Route>`: Thay thế `<Switch>`, React Router v6 sử dụng `<Routes>` và `<Route>` để định nghĩa các định tuyến (router) và component tương ứng. Các định tuyến được xác định theo cấu trúc cây, giúp quản lý và tổ chức rõ ràng hơn.

- Định tuyến động: Trong React Router v6, bạn có thể xác định định tuyến (router) động bằng cách sử dụng tham số động (`:paramName`). Ví dụ: `/users/:id`.

- Thay đổi cú pháp JSX: Cú pháp JSX trong React Router v6 đã thay đổi. Chúng ta sử dụng các prop như `path`, `element`, và `index` để định nghĩa các định tuyến (router) và component tương ứng.

- Xử lý chuyển hướng: Để chuyển hướng trong ứng dụng, chúng ta sử dụng hook `useNavigate` để truy cập vào hàm `navigate`. Hàm này cho phép chúng ta thực hiện các chuyển hướng trong ứng dụng.

- Tích hợp với React: React Router v6 tích hợp tốt với React và sử dụng hook để quản lý định tuyến (router). Hãy làm quen với cách sử dụng hook và hiểu cách chúng hoạt động trong môi trường React.

- Tài liệu và tài nguyên: Đảm bảo tìm hiểu và đọc kỹ tài liệu chính thức của React Router v6 để nắm vững cú pháp, API, và các khái niệm quan trọng. Ngoài ra, có thể tham khảo các tài nguyên, bài viết, và ví dụ từ cộng đồng React để hiểu sâu hơn về cách sử dụng React Router v6.

❌❌ Lưu ý rằng React Router v6 có thể còn đang trong quá trình phát triển và có thể có những thay đổi trong tương lai. Vì vậy, hãy kiểm tra tài liệu và thông tin mới nhất từ React Router để đảm bảo bạn áp dụng các phiên bản và phương pháp đúng.

## Hãy nêu các khái niệm về useRoutes ?

- Trong React Router v6, `useRoutes` là một hook được cung cấp để xác định và xử lý các định tuyến trong ứng dụng. Dưới đây là một số khái niệm liên quan đến `useRoutes`:

- `Đối tượng định tuyến (Route object)`: Đây là một đối tượng mô tả một đường dẫn cụ thể và component tương ứng sẽ được hiển thị khi đường dẫn đó khớp. Đối tượng định tuyến bao gồm các thuộc tính sau:

  - `path`: Đường dẫn của định tuyến. Nó có thể là một đường dẫn tĩnh (`'/about'`) hoặc một đường dẫn động với tham số (`'/users/:id'`).
  - `element`: Đây là truyền vào component và nó sẽ được hiển thị khi đường dẫn khớp.
  - Các thuộc tính khác như `children`, `index`, `caseSensitive`, `guard`,... để xử lý các trường hợp đặc biệt.

2. `Hook useRoutes`: Là một hook dùng để xác định các đối tượng định tuyến và trả về component tương ứng với đường dẫn hiện tại. `useRoutes` nhận vào một mảng các đối tượng định tuyến và trả về component đầu tiên có đường dẫn khớp với đường dẫn hiện tại.

3. `Đường dẫn tĩnh (Static path)`:

- Là một đường dẫn cố định không chứa các tham số động.
  - Ví dụ: `'/about'`, `'/dashboard'`.

4. `Đường dẫn động (Dynamic path)`:

- Là một đường dẫn chứa các tham số động được đánh dấu bằng dấu hai chấm `:`.
  - Ví dụ: `'/users/:id'`, `'/products/:category/:id'`. Các giá trị của các tham số này sẽ được trích xuất và truyền cho component tương ứng khi đường dẫn khớp.

5. `Định tuyến mặc định (Default route)`:

- Là một định tuyến được xác định cho trường hợp khi không có đường dẫn nào khớp với các định tuyến trước đó. Định tuyến mặc định thường được đặt ở cuối danh sách các định tuyến.
  - Ví dụ: `'*'`.

6. `Tham số định tuyến (Route parameter)`:

- Đó là các giá trị có ý nghĩa trong đường dẫn động, được trích xuất từ URL và được truyền cho component tương ứng.
  - Ví dụ: trong đường dẫn `'/users/:id'`, tham số `:id` có thể có giá trị như `'1'`, `'2'`,...

7. `Trang không tìm thấy (Not Found page)`:

- Là một component đại diện cho trường hợp khi không có đường dẫn nào khớp với các định tuyến đã xác định. Thông thường, trang này được sử dụng để hiển thị thông báo lỗi hoặc nội dung tương tự.

✅✅ Các khái niệm trên giúp bạn hiểu rõ hơn về việc sử dụng `useRoutes` và làm việc với định tuyến trong React Router v6.

## Ví dụ về sử dụng useRoutes ?

- Dưới đây là một ví dụ về cách sử dụng useRoutes trong React Router:

```jsx
import { useRoutes } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import NotFound from "./components/NotFound";

const App = () => {
  const routeElements = useRoutes([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/about",
      element: <About />,
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ]);

  return <div>{routeElements}</div>;
};

export default App;
```

- Trong ví dụ trên, chúng ta sử dụng `useRoutes` để xác định định tuyến trong ứng dụng. Các đối tượng `route` được khai báo như một mảng đối tượng, mỗi đối tượng đại diện cho một đường dẫn cụ thể và một thành phần tương ứng để render khi đường dẫn được truy cập.

- Đối tượng route đầu tiên có `path` là `'/'` và element là `<Home />`. Điều này có nghĩa là khi đường dẫn truy cập là `'/'`, component `<Home />` sẽ được render.
- Đối tượng route thứ hai có `path` là `'/about'` và element là `<About />`. Điều này có nghĩa là khi đường dẫn truy cập là `'/about'`, component `<About />` sẽ được render.
- Đối tượng route cuối cùng có `path` là `'*'` để xác định các trường hợp không khớp với bất kỳ đường dẫn nào ở trên. element được đặt là `<NotFound />`, vì vậy khi có một đường dẫn không khớp, component `<NotFound />` sẽ được render.

- Cuối cùng, chúng ta render các thành phần định tuyến bằng cách sử dụng biến `routeElements` trong JSX. Nếu đường dẫn truy cập khớp với bất kỳ đối tượng `route` nào, thành phần tương ứng sẽ được render.

## Hãy nêu các khái niệm về useLocation ?

- Trong React Router v6, `useLocation` là một hook được cung cấp bởi thư viện `react-router-dom` để lấy thông tin về vị trí hiện tại của ứng dụng. Dưới đây là các khái niệm liên quan đến `useLocation`:

1. Vị trí (Location):

- Vị trí đại diện cho đường dẫn hiện tại trong ứng dụng. Nó bao gồm các thông tin như địa chỉ URL, các tham số truy vấn, và các thuộc tính khác liên quan đến vị trí.
- Vị trí được sử dụng để xác định định tuyến và hiển thị các component tương ứng với địa chỉ URL.

2. `useLocation`:

- `useLocation` là một hook trong React Router v6, cho phép bạn truy cập thông tin về vị trí hiện tại trong ứng dụng.
- Khi sử dụng `useLocation`, bạn có thể lấy thông tin về địa chỉ URL, các tham số truy vấn, và các thuộc tính khác của vị trí.
- Khi vị trí thay đổi (do người dùng điều hướng hoặc thao tác khác), các component sử dụng `useLocation` sẽ được tự động cập nhật để phản ánh vị trí mới.

3. Cách sử dụng `useLocation`:

- Đầu tiên, bạn cần import `useLocation` từ thư viện `react-router-dom`.
- Sau đó, trong component của bạn, sử dụng `useLocation` như một hook để lấy đối tượng `location` hiện tại.
- Bạn có thể truy cập các thuộc tính của `location` như `pathname` (đường dẫn URL), `search` (tham số truy vấn), `state` (trạng thái liên quan đến vị trí), và nhiều thuộc tính khác.
- Khi vị trí thay đổi, component sử dụng `useLocation` sẽ tự động render lại để phản ánh vị trí mới.

✅✅ Với `useLocation`, bạn có thể dễ dàng truy cập và sử dụng thông tin về vị trí hiện tại trong ứng dụng React của bạn để điều hướng và xử lý logic tương ứng.

## Ví dụ về sử dụng useLocation ?

- Dưới đây là một ví dụ về cách sử dụng `useLocation` trong React Router:

```jsx
import { useLocation } from "react-router-dom";

const MyComponent = () => {
  const location = useLocation();

  return (
    <div>
      <h1>Current Location: {location.pathname}</h1>
      <p>Search Params: {location.search}</p>
      <p>Hash: {location.hash}</p>
    </div>
  );
};
```

- Trong ví dụ trên, chúng ta sử dụng `useLocation` để lấy thông tin vị trí hiện tại trong ứng dụng. Biến `location` sẽ chứa thông tin về vị trí, bao gồm đường dẫn (`pathname`), các tham số tìm kiếm (`search`) và hash (`hash`).

- Trong JSX, chúng ta có thể sử dụng các thuộc tính `pathname`, `search` và `hash` của biến `location` để hiển thị thông tin tương ứng. Trong ví dụ trên, chúng ta hiển thị đường dẫn hiện tại, các tham số tìm kiếm và hash trong các phần tử HTML.

## Hãy nêu các khái niệm về useSearchParams ?

- Trong React Router v6, `useSearchParams` là một hook được cung cấp bởi thư viện `react-router-dom` để truy cập và quản lý thông tin truy vấn (query parameters) trong URL. Dưới đây là các khái niệm liên quan đến `useSearchParams`:

1. Thông tin truy vấn (Query parameters):

- Thông tin truy vấn là các tham số được chèn vào URL sau dấu `"?"` để truyền thông tin hoặc thực hiện các tác vụ tùy chỉnh.
- Ví dụ: Trong URL `"https://example.com/search?q=react&page=1"`, tham số truy vấn là "q=react" và "page=1".

2. `useSearchParams`:

- `useSearchParams` là một hook trong React Router v6, cho phép bạn truy cập và quản lý thông tin truy vấn trong URL.
- Khi sử dụng `useSearchParams`, bạn có thể lấy giá trị của các tham số truy vấn, thay đổi giá trị của chúng và cập nhật URL tương ứng.
- `useSearchParams` trả về một mảng gồm hai phần tử. Phần tử đầu tiên là đối tượng (object) `SearchParams` để truy cập các phương thức và thuộc tính liên quan đến thông tin truy vấn. Phần tử thứ hai là một hàm (function) `updateSearchParams` để cập nhật thông tin truy vấn.

3. Cách sử dụng `useSearchParams`:

- Đầu tiên, bạn cần import `useSearchParams` từ thư viện `react-router-dom`.
- Sau đó, trong component của bạn, sử dụng `useSearchParams` như một hook để lấy đối tượng (object) `SearchParams` và hàm (function) `updateSearchParams`.
- Bạn có thể sử dụng các phương thức của `SearchParams` như `get()`, `getAll()`, `has()`, `set()`, `delete()`, và `toString()` để thao tác với thông tin truy vấn.
- Bằng cách gọi hàm (function) `updateSearchParams` với các tham số tương ứng, bạn có thể cập nhật thông tin truy vấn và cập nhật URL hiện tại.
- Khi thông tin truy vấn thay đổi, component sử dụng `useSearchParams` sẽ tự động render lại để phản ánh thông tin mới.

✅✅ Với `useSearchParams`, bạn có thể dễ dàng truy cập và quản lý thông tin truy vấn trong URL, giúp bạn thực hiện các tác vụ tương
tác và tùy chỉnh trong ứng dụng React của bạn.

## Ví dụ về sử dụng useSearchParams ?

- Dưới đây là một ví dụ về cách sử dụng `useSearchParams` trong React Router:

```jsx
import { useSearchParams } from "react-router-dom";

const MyComponent = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const handleSearch = () => {
    setSearchParams({ query: "example" });
  };

  return (
    <div>
      <button onClick={handleSearch}>Search</button>
      <p>Search Query: {searchParams.get("query")}</p>
    </div>
  );
};
```

- Trong ví dụ trên, chúng ta sử dụng `useSearchParams` để lấy thông tin truy vấn từ URL và cập nhật nó. Biến `searchParams` là một đối tượng (object) có thể thay đổi, chứa các thông tin truy vấn từ URL.

- Chúng ta sử dụng `get()` để truy cập giá trị của trường `query` trong truy vấn. Trong ví dụ trên, khi người dùng nhấp vào nút `"Search"`, chúng ta sử dụng hàm `setSearchParams()` để cập nhật trường `query` thành giá trị `"example"`.

- Trong JSX, chúng ta sử dụng `searchParams.get()` để hiển thị giá trị của trường `query` trong phần tử HTML.

## Hãy nêu các khái niệm về useNavigate ?

- Trong React Router v6, `useNavigate` là một hook được cung cấp bởi thư viện `react-router-dom` để điều hướng (`navigate`) trong ứng dụng. Dưới đây là các khái niệm liên quan đến `useNavigate`:

1. Điều hướng (Navigation):

- Điều hướng là quá trình chuyển hướng từ một trang (page) hoặc thành phần (component) trong ứng dụng web sang một trang (page) hoặc thành phần (component) khác.
- Thông qua việc điều hướng, người dùng có thể chuyển đổi giữa các trang, thực hiện các hành động và tương tác với các phần của ứng dụng.

2. `useNavigate`:

- `useNavigate` là một hook trong React Router v6, cho phép bạn điều hướng trong ứng dụng.
- Khi sử dụng `useNavigate`, bạn có thể gọi hàm `navigate` để thực hiện việc điều hướng đến một địa chỉ URL cụ thể hoặc tới một đối tượng vị trí.
- `useNavigate` cung cấp một hàm `navigate` để thực hiện các tác vụ điều hướng.

3. Cách sử dụng `useNavigate`:

- Đầu tiên, bạn cần import `useNavigate` từ thư viện `react-router-dom`.
- Sau đó, trong component của bạn, sử dụng `useNavigate` như một hook để lấy hàm `navigate`.
- Bằng cách gọi hàm `navigate` với địa chỉ URL hoặc đối tượng vị trí tương ứng, bạn có thể thực hiện việc điều hướng.
  - Ví dụ: `navigate('/about')` sẽ chuyển hướng đến trang `"/about"`, và `navigate({ pathname: '/dashboard', state: { loggedIn: true } })` sẽ chuyển hướng đến trang `"/dashboard"` và truyền trạng thái `"loggedIn"` qua đối tượng vị trí.

✅✅ Với `useNavigate`, bạn có thể thực hiện việc điều hướng trong ứng dụng React của bạn, cho phép người dùng chuyển đổi giữa các trang và tương tác với ứng dụng của bạn một cách linh hoạt.

## Ví dụ về sử dụng useNavigate ?

- Dưới đây là một ví dụ về cách sử dụng `useNavigate` trong React Router:

```jsx
import { useNavigate } from "react-router-dom";

const MyComponent = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/about");
  };

  return (
    <div>
      <button onClick={handleClick}>Go to About</button>
    </div>
  );
};
```

- Trong ví dụ trên, chúng ta sử dụng `useNavigate` để lấy hàm `navigate`, cho phép chúng ta điều hướng đến các địa chỉ khác trong ứng dụng.

- Khi người dùng nhấp vào nút `"Go to About"`, chúng ta gọi `navigate('/about')` để chuyển hướng đến trang `"About"`. Điều này sẽ thay đổi URL và hiển thị nội dung của trang `"About"` trên giao diện người dùng.

- Lưu ý rằng `useNavigate` chỉ có thể được sử dụng trong thành phần nằm trong một `<Router>` (ví dụ như `<BrowserRouter>`, `<HashRouter>`, hoặc `<MemoryRouter>`).

## Dưới đây là Docs của Được Dev: 👇👇👇

# React Router

Video này là 99% kiến thức thực chiến các bạn cần biết về React Router v6 - một phiên bản hoàn toàn mới (vì trước v6 cách code rất khác)

💓Kiến thức các bạn sẽ được học trong video này:

🎉 Sự khác nhau giữa các Router Component trong React Router
🎉 Cách chia route, nested route, dynamic route
🎉 Cách xử lý param, query string trên url
🎉 Cách navigate giữa các route
🎉 Cách giao tiếp bằng state giữa các route

🕰️Nội dung chính

00:00 - Giới thiệu các kiến thức trong video
00:34 - Chia Route cơ bản
08:38 - Các loại Router component
16:34 - Link component
18:04 - NavLink component
25:10 - Dynamic Route với id
30:55 - Not Found 404 Route
32:30 - Nested Route
46:11 - Tách Nested Route vào một component khác
52:45 - Chia route với useRoutes hook
56:10 - Navigate component
57:07 - useNavigate hook
59:13 - Giao tiếp các page với nhau qua state
01:01:24 - 2 cách xử lý query string trên url

## Phân biệt một số loại Router Component

### BrowsersRouter

99% anh em sẽ dùng `<BrowsersRouter>`, được build trên history API của trình duyệt, dùng để lưu trữ URL và chuyển trang.

Ví dụ:

Đối với SPA thì server sẽ cấu hình là khi bạn nhập url nào thì server cũng trả về url nhắm đến file `index.html`, ví dụ `/`.

Khi enter url `https://duthanhduoc.com/about` vào trình duyệt, server nhận được url là `https://duthanhduoc.com/about` và sẽ trả về nội dụng là file `index.html`. Lúc này React Router sẽ đảm nhiệm việc hiển thị component cho đúng tùy vào url.

### HashRouter

HashRouter dùng dấu `#` trong URL ví dụ: `https://duthanhduoc.com/#/about`, `https://duthanhduoc.com/#/blog/hoc-react-nhu-the-nao`.

Lợi ích của việc thêm dấu `#` vào url là để server không nhận biết được chúng ta vào url nào. Khi anh em nhập các url ở ví dụ trên vào trình duyệt và nhấn enter thì trình duyệt chỉ gửi lên server là `https://duthanhduoc.com` và server chỉ nhận được là `https://duthanhduoc.com`.

Điều này khá hữu ích khi server anh em là một share hosting và không toàn quyền điều hành server.

Ví dụ:

Có một server được cấu hình cho nhiều dịch vụ, mỗi dịch vụ là một url khác nhau.

- Landing Page cho user: `https://hospital.com`
- Manager: `https://hospital.com/manager`
- Doctor: `https://hospital.com/doctor`
- Staff: `https://hospital.com/staff`

Mình đảm nhiệm thiết kế một Landing Page cho user là một SPA có nhiều trang trong đó, và chỉ được cấp cho url là `https://hospital.com`.

Bây giờ nếu mình thiết kế thêm url `/manager` là dành cho việc quản lý profile cá nhân của người dùng

- BrowsersRouter: người dùng enter url `https://hospital.com/manager` thì server sẽ trả về trang của manager (người quản lý), điều này không tốt!

- HashRouter: người dùng enter url `https://hospital.com/#/manager` thì server sẽ trả về trang `https://hospital.com`, lúc này React Router sẽ thực hiện hiển thị cho đúng trang `/manager`.

### MemoryRouter

MemoryRouter lưu trữ url vào một array. Không như `<BrowserHistory>` và `<HashRouter>`, nó không bị ràng buộc bởi history stack trong trình duyệt. Điều này rất hữu ích khi viết unit test cho React Router.

### Router

Đây là cấp thấp nhất của tất cả Router component, tức là các Router component như `BrowsersRouter` hay `HashRouter` đều được build nên từ `Router` này.

Bạn không cần dùng Router, thay vì đó dùng các Router cấp cao hơn như `BrowsersRouter`

### StaticRouter

StaticRouter dùng để render React Router trong môi trường nodejs, phục vụ cho việc Server Side Rendering
