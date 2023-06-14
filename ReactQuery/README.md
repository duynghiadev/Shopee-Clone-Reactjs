## Đây là Docs tự Research: 👇👇👇

## React Query là gì?

- React Query là một thư viện quản lý trạng thái và tương tác dữ liệu trong ứng dụng React. Nó cung cấp các công cụ và hooks để dễ dàng gọi API, quản lý cache dữ liệu, và cung cấp truy vấn và mutations linh hoạt.

- React Query được xây dựng với mục tiêu đơn giản hóa việc làm việc với dữ liệu trong ứng dụng React và tối ưu hóa hiệu suất. Nó cung cấp một kiến trúc linh hoạt dựa trên khái niệm "truy vấn" (query), cho phép bạn gọi các truy vấn để lấy dữ liệu từ các nguồn khác nhau như API hoặc bộ nhớ cache, và cập nhật tự động khi dữ liệu thay đổi.

- Một trong những điểm đáng chú ý của React Query là khả năng tự động quản lý cache dữ liệu. Khi một truy vấn được thực hiện, React Query sẽ lưu trữ kết quả vào cache và tự động kiểm tra xem liệu kết quả còn hợp lệ hay không. Nếu truy vấn được gọi lại với cùng các tham số truy vấn trước đó, React Query sẽ trả về kết quả từ cache thay vì gọi lại API.

- React Query cũng hỗ trợ mutations để thực hiện các thay đổi dữ liệu như tạo, cập nhật và xóa. Nó cung cấp các hooks cho phép bạn gọi mutations và tự động cập nhật cache một cách đồng bộ.

- Ngoài ra, React Query còn đi kèm với các tính năng khác như tự động làm mới dữ liệu, xử lý lỗi, prefetching, truy vấn dữ liệu phân trang và hỗ trợ gỡ lỗi thông qua Devtools.

- Với những tính năng mạnh mẽ này, React Query giúp đơn giản hóa việc quản lý trạng thái và tương tác dữ liệu trong ứng dụng React, đồng thời tối ưu hóa hiệu suất và tăng tính linh hoạt của ứng dụng.

## Mutations chỉ có create, update, delete chứ get là không nằm trong mutations đúng không ?

- Đúng, trong "mutations" thường được sử dụng để thực hiện các thao tác tạo mới (create), cập nhật (update) và xóa (delete) dữ liệu. Thông thường, các thao tác lấy dữ liệu (get) sẽ được thực hiện thông qua các truy vấn (queries) chứ không thuộc phạm vi của "mutations".

## Lưu ý trước khi học React Query ?

- Trước khi bắt đầu học React Query, có một số lưu ý quan trọng mà bạn nên biết:

1. `Hiểu cơ bản về React`: React Query là một thư viện phụ thuộc vào React, do đó, nắm vững kiến thức cơ bản về React là rất quan trọng. Đảm bảo bạn đã có kiến thức và kinh nghiệm làm việc với React trước khi tiếp cận React Query.

2. `Kiến thức về RESTful APIs hoặc GraphQL`: React Query được sử dụng để tương tác với APIs, vì vậy hiểu về các khái niệm cơ bản của RESTful APIs hoặc GraphQL sẽ giúp bạn áp dụng React Query hiệu quả trong việc gọi và xử lý dữ liệu từ các nguồn dữ liệu này.

3. `Cài đặt và cấu hình React và npm/yarn`: Để sử dụng React Query, bạn cần có một dự án React đã được thiết lập và cấu hình. Hãy đảm bảo bạn đã cài đặt React và các công cụ quản lý gói như npm hoặc yarn.

4. `Kiến thức về hooks trong React`: React Query sử dụng hooks để tương tác với dữ liệu. Đảm bảo bạn đã hiểu cách sử dụng hooks trong React, bao gồm các hooks cơ bản như `useState` và `useEffect`, để có thể áp dụng các hooks của React Query một cách hiệu quả.

5. `Kiên nhẫn và thực hành`: React Query có một số khái niệm mới và có thể có một quá trình học tương đối dài. Hãy kiên nhẫn và thực hành để làm quen với cú pháp, các khái niệm và tính năng của React Query.

6. `Tài liệu và nguồn học`: Sử dụng tài liệu chính thức của React Query (`@tanstack/react-query`) như hướng dẫn sử dụng, tài liệu API và ví dụ. Ngoài ra, tìm kiếm và tham khảo các nguồn học bổ sung như bài viết, video tutorial hoặc các khóa học trực tuyến để nắm vững React Query.

7. `Cập nhật phiên bản`: React Query là một thư viện đang phát triển nhanh chóng, vì vậy hãy đảm bảo bạn sử dụng phiên bản mới nhất của nó và theo dõi các bản cập nhật và thay đổi trong phiên bản mới.

- Bằng cách lưu ý các điểm trên và có một sự chuẩn bị tốt trước khi học React Query, bạn sẽ có nền tảng vững chắc để tiếp cận và sử dụng thư viện này một cách hiệu quả trong ứng dụng React của mình.

## Ngoài những các lưu ý ở trên thì vẫn còn có những lưu ý khác cũng rất quan trọng trong React Query:

1. `Kiến thức về quản lý trạng thái và caching`: React Query giúp bạn quản lý trạng thái và caching dữ liệu. Hiểu các khái niệm cơ bản về quản lý trạng thái trong ứng dụng React và cách hoạt động của caching sẽ giúp bạn hiểu rõ hơn về cách React Query làm việc và tận dụng các tính năng của nó.

2. `Cấu trúc dự án và phân chia trách nhiệm`: Để áp dụng React Query một cách hiệu quả, tìm hiểu về cấu trúc dự án và phân chia trách nhiệm trong ứng dụng của bạn. Điều này sẽ giúp bạn tổ chức code một cách rõ ràng và áp dụng React Query vào phần cụ thể của ứng dụng một cách hợp lý.

3. `Tìm hiểu các khái niệm liên quan`: React Query liên quan đến nhiều khái niệm quan trọng như cache `invalidation`, `optimistic updates`, `pagination`, và `prefetching`. Hiểu rõ các khái niệm này sẽ giúp bạn sử dụng React Query một cách hiệu quả và tận dụng các tính năng nâng cao của thư viện.

4. `Tương tác với APIs và xử lý dữ liệu:` React Query làm việc chặt chẽ với các yêu cầu và xử lý dữ liệu từ APIs. Đảm bảo bạn đã hiểu các khái niệm cơ bản về gửi yêu cầu, xử lý phản hồi, xử lý lỗi và các kỹ thuật khác liên quan đến tương tác với APIs.

5. `Testing:` Nếu bạn quan tâm đến việc kiểm thử ứng dụng của mình, hãy tìm hiểu cách kiểm thử React Query. React Query cung cấp các công cụ và phương pháp để viết các bài kiểm tra đơn vị và kiểm tra tích hợp cho các truy vấn và mutations.

6. `Cộng đồng và tài nguyên học:` React Query có một cộng đồng rộng lớn, với nhiều nguồn tài liệu, bài viết, video và các dự án mã nguồn mở liên quan. Tận dụng các nguồn tài nguyên này để học tập, tìm kiếm câu trả lời cho các câu hỏi và kết nối với cộng đồng.

- Cuối cùng, hãy nhớ rằng học React Query là một quá trình liên tục và đòi hỏi thực hành. Hãy thực hiện các bài tập, xây dựng các dự án thực tế và tìm cách áp dụng React Query trong các ứng dụng thực tế để trau dồi kỹ năng và hiểu sâu hơn về cách sử dụng thư viện này.

## Một số khái niệm quan trọng React Query:

- Trong React Query, có một số khái niệm quan trọng mà bạn nên hiểu để sử dụng thư viện một cách hiệu quả. Dưới đây là một số khái niệm quan trọng:

1. `Query`: Một query trong React Query đại diện cho một yêu cầu để lấy dữ liệu từ nguồn dữ liệu bên ngoài như API. Query bao gồm thông tin như `query key`, `query function`, và các tùy chọn khác để cấu hình việc lấy dữ liệu.

2. `Mutation`: Một mutation trong React Query đại diện cho một yêu cầu để thay đổi dữ liệu trên nguồn dữ liệu bên ngoài như thêm, sửa, xóa dữ liệu. Mutation bao gồm thông tin như `mutation function` và các tùy chọn khác để cấu hình việc thực hiện mutation.

3. `Query Key`: Query key là một giá trị duy nhất đại diện cho một query. Nó được sử dụng để xác định một query cụ thể trong React Query. Query key thường được định nghĩa bằng một mảng các giá trị, trong đó có thể bao gồm các tham số để tạo ra một key duy nhất cho mỗi query.

4. `Query Function`: Query function là một hàm được gọi khi thực hiện một query. Hàm này thực hiện việc gọi API hoặc tương tác với nguồn dữ liệu bên ngoài để lấy dữ liệu. Query function trả về một Promise chứa dữ liệu được lấy từ nguồn dữ liệu.

5. `Cache`: Cache trong React Query là nơi lưu trữ dữ liệu đã được lấy từ các query trước đó. Khi có một query mới với cùng `query key`, React Query sẽ kiểm tra cache trước khi gọi `query function`. Nếu dữ liệu đã tồn tại trong cache và vẫn còn hợp lệ, React Query sẽ trả về dữ liệu từ cache mà không cần thực hiện `query function`.

6. `Invalidate Cache`: Invalidate cache là việc xóa dữ liệu trong cache của một query cụ thể. Khi dữ liệu trên nguồn dữ liệu bên ngoài thay đổi, việc invalidate cache sẽ đảm bảo rằng dữ liệu mới nhất được lấy trong các lần query tiếp theo.

7. `Prefetching`: Prefetching là việc tải trước dữ liệu từ nguồn dữ liệu bên ngoài trước khi nó được yêu cầu. Điều này giúp cải thiện trải nghiệm người dùng bằng cách đảm bảo rằng dữ liệu đã được tải trước và sẵn sàng khi cần thiết.

8. `Optimistic Updates`: Optimistic updates là kỹ thuật cho phép cập nhật giao diện người dùng ngay lập tức sau khi thực hiện một mutation, trước khi nhận được phản hồi từ nguồn dữ liệu bên ngoài. Điều này tạo ra một trải nghiệm tương tác mượt mà và giúp giảm thời gian chờ đợi cho người dùng.

- Các khái niệm trên là những yếu tố quan trọng trong React Query và hiểu rõ chúng sẽ giúp bạn sử dụng thư viện một cách hiệu quả và tận dụng được các tính năng mạnh mẽ của nó.

### Nếu thấy quá rối vì quá nhiều trạng thái, sự khác nhau giữa `status` và `fetchStatus` trong React Query là như thế nào ?

- Trong React Query, có hai trạng thái quan trọng liên quan đến việc gọi và xử lý dữ liệu: `status` và `fetchStatus`. Dưới đây là giải thích về sự khác nhau giữa hai trạng thái này:

1. `Status:` `status` trong React Query đại diện cho trạng thái tổng quát của một query hoặc mutation. Nó chỉ ra trạng thái hiện tại của query hoặc mutation đó và có thể nhận các giá trị sau:

- `"idle":` Query/mutation chưa được gọi hoặc chưa có trạng thái nào được xác định.
- `"loading":` Query/mutation đang trong quá trình gọi và đợi kết quả trả về.
- `"success":` Query/mutation đã hoàn thành, thành công và có kết quả trả về.
- `"error":` Query/mutation đã gặp lỗi trong quá trình gọi hoặc xử lý.

- `status` thường được sử dụng để điều khiển hiển thị và xử lý trạng thái của query/mutation trong giao diện người dùng.

2. `FetchStatus:` `fetchStatus` là một trạng thái cụ thể liên quan đến quá trình gọi và tải dữ liệu từ nguồn dữ liệu bên ngoài. Nó là một phần của `status` và có thể có các giá trị sau:

- `"idle":` Query/mutation chưa được gọi hoặc chưa có trạng thái nào được xác định.
- `"loading":` Query/mutation đang trong quá trình gọi và đợi kết quả trả về.
- `"data":` Query/mutation đã hoàn thành và có dữ liệu trả về từ nguồn dữ liệu.
- `"error":` Query/mutation đã gặp lỗi trong quá trình gọi hoặc xử lý.

- `fetchStatus` thường được sử dụng để kiểm soát việc hiển thị và xử lý dữ liệu từ nguồn dữ liệu bên ngoài.

- Sự khác nhau chính giữa `status` và `fetchStatus` là `status` là trạng thái tổng quát của query/mutation, trong khi `fetchStatus` là trạng thái cụ thể liên quan đến quá trình gọi và tải dữ liệu từ nguồn dữ liệu bên ngoài.

- Khi làm việc với React Query, bạn có thể sử dụng cả hai trạng thái này để điều khiển và xử lý query/mutation một cách linh hoạt và chính xác trong ứng dụng của bạn.

## Cơ chế caching React Query:

- Cơ chế caching trong React Query là một trong những tính năng quan trọng của thư viện, giúp tối ưu hóa việc lấy dữ liệu từ nguồn dữ liệu bên ngoài và cải thiện hiệu suất ứng dụng. Dưới đây là cơ chế caching cơ bản của React Query:

1. `Cache Store:` React Query sử dụng một cache store để lưu trữ dữ liệu đã được lấy từ các query trước đó. Cache store lưu trữ dữ liệu dưới dạng key-value pairs (pairs có nghĩa là theo cặp => key-value), trong đó key là query key và value là dữ liệu tương ứng.

2. `Cache Expiration:` Mỗi query trong React Query có một thời gian hết hạn (stale time) được định nghĩa. Sau khi thời gian này đã qua, dữ liệu trong cache sẽ được coi là đã lỗi thời và cần được cập nhật lại. Khi có một query mới với cùng query key, React Query sẽ tự động gọi query function để lấy dữ liệu mới từ nguồn dữ liệu bên ngoài.

3. `Cache Invalidation:` Cache invalidation (hết hạn) là quá trình xóa dữ liệu trong cache khi dữ liệu trên nguồn dữ liệu bên ngoài thay đổi. Khi thực hiện một mutation thành công, React Query tự động xóa dữ liệu liên quan từ cache (tức là xoá dữ liệu trong cache cũ) để đảm bảo rằng dữ liệu mới nhất sẽ được lấy trong các lần query tiếp theo.

4. `Manual Cache Updates:` (Cập nhật Cache thủ công) Ngoài việc tự động cập nhật dữ liệu từ nguồn dữ liệu bên ngoài, React Query cũng cho phép bạn cập nhật dữ liệu trong cache một cách thủ công. Bằng cách sử dụng các hàm như `queryClient.setQueryData()` hoặc `queryClient.invalidateQueries()`, bạn có thể thay đổi dữ liệu trong cache và điều khiển cách dữ liệu được sử dụng trong ứng dụng.

5. `Selective Cache Invalidation:` (Vô hiệu hoá Cache có chọn lọc) React Query cung cấp các phương pháp để xác định xem dữ liệu nào cần được xóa trong cache khi có sự thay đổi. Bằng cách sử dụng các tùy chọn như `refetchOnMount` (trong `useQuery`), `refetchOnWindowFocus` (trong `Window Focus Refetching`), hoặc `onSettled` (trong `useMutation`) trong cấu hình của một query, bạn có thể chính xác xác định khi nào dữ liệu cần được cập nhật.

- Cơ chế caching của React Query giúp giảm số lần gọi API và tối ưu hiệu suất ứng dụng bằng cách sử dụng dữ liệu đã được lưu trữ trong cache. Điều này giúp giảm thời gian chờ đợi và tăng tốc độ phản hồi của ứng dụng.

## Vòng đời của Caching:

- Caching là một vòng đời của:

1. `Query Instance có hoặc không cache data`: Mỗi query instance trong React Query có khả năng lưu trữ và sử dụng dữ liệu được cache. Khi một query được gọi và thành công, dữ liệu kết quả sẽ được lưu trữ trong cache và có thể được sử dụng lại trong các lần truy vấn tiếp theo.

2. `Fetch ngầm (background fetching)`: Khi một query đã được cache, React Query sẽ tự động thực hiện một fetch ngầm (background fetching) để kiểm tra xem dữ liệu đã lỗi thời hay chưa. Nếu dữ liệu đã lỗi thời, React Query sẽ gọi lại query function để lấy dữ liệu mới từ nguồn dữ liệu bên ngoài và cập nhật lại cache.

3. `Các inactive query`: Các query mà không được sử dụng trong một khoảng thời gian dài (ví dụ: không được hiển thị trên giao diện) có thể bị xóa khỏi bộ nhớ cache để giải phóng tài nguyên. Điều này giúp giảm bộ nhớ sử dụng và tăng hiệu suất của ứng dụng.

4. `Xóa cache khỏi bộ nhớ (Garbage Collection)`: Khi dữ liệu trong cache trở nên không cần thiết hoặc không được sử dụng nữa, React Query sẽ thực hiện các quá trình xóa cache để giải phóng bộ nhớ. Điều này có thể bao gồm xóa dữ liệu của các query đã hết hạn (`stale`), dữ liệu của các query không còn được sử dụng hoặc dữ liệu của các query đã bị xóa hoặc thay đổi từ nguồn dữ liệu bên ngoài.

- Cơ chế caching trong React Query giúp quản lý và tối ưu việc lấy dữ liệu từ nguồn dữ liệu bên ngoài, đồng thời cung cấp các quyền kiểm soát và tuỳ chỉnh để điều chỉnh việc lưu trữ và sử dụng cache trong ứng dụng của bạn.

## Dưới đây là một ví dụ về cách sử dụng `Query Instance`, `Fetch ngầm`, `Các inactive query` và `Xóa cache khỏi bộ nhớ` trong React Query:

```jsx
import { useQuery, useQueryClient } from "react-query";

// Hook để lấy danh sách bài viết từ API
const fetchPosts = async () => {
  const response = await fetch("api/posts");
  const data = await response.json();
  return data;
};

function PostList() {
  const queryClient = useQueryClient();

  // Sử dụng Query Instance để lấy danh sách bài viết và lưu kết quả vào cache
  const postsQuery = useQuery("posts", fetchPosts, {
    staleTime: 60000, // Thời gian hết hạn cache là 60 giây (1 phút)
    refetchOnMount: false, // Không làm mới dữ liệu khi mount component
    refetchOnWindowFocus: false, // Không làm mới dữ liệu khi focus vào cửa sổ trình duyệt
    refetchOnReconnect: false, // Không làm mới dữ liệu khi reconnect internet

    onSuccess: () => {
      // Lập lịch Fetch ngầm sau mỗi 5 giây
      const interval = setInterval(() => {
        postsQuery.fetchInBackground();
      }, 5000);

      // Lưu interval trong queryClient để có thể xóa khi cần thiết
      queryClient.setQueryData("backgroundFetchInterval", interval);
    },
  });

  // Xóa cache khi component bị unmount
  useEffect(() => {
    return () => {
      // Xóa cache của query 'posts'
      queryClient.removeQueries("posts");

      // Xóa interval của Fetch ngầm
      clearInterval(queryClient.getQueryData("backgroundFetchInterval"));
    };
  }, []);

  if (postsQuery.isLoading) {
    return <div>Loading...</div>;
  }

  if (postsQuery.isError) {
    return <div>Error: {postsQuery.error.message}</div>;
  }

  return (
    <div>
      <h1>Post List</h1>
      <ul>
        {postsQuery.data.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}
```

- Trong ví dụ trên, chúng ta sử dụng Query Instance để lấy danh sách bài viết từ server và lưu kết quả vào cache. Chúng ta cấu hình các tuỳ chọn cho Query Instance như `staleTime` để định thời gian hết hạn của cache, `refetchOnMount`, `refetchOnWindowFocus`, `refetchOnReconnect` để quyết định khi nào cần làm mới dữ liệu.

- Chúng ta cũng sử dụng `onSuccess` để lập lịch Fetch ngầm sau mỗi 5 giây bằng cách gọi `postsQuery.fetchInBackground()`. Kết quả từ Fetch ngầm sẽ không ảnh hưởng đến giao diện người dùng trực tiếp, nhưng nó sẽ cập nhật cache và dữ liệu mới sẽ được sử dụng khi cần thiết.

- Khi component bị unmount, chúng ta sử dụng `useEffect` để xóa cache của query `'posts'` và xóa `interval` của Fetch ngầm để tránh việc tiêu thụ tài nguyên không cần thiết.

## Trong đoạn code đó có "posts" là queryKey, fetchPosts là queryFn hả ?

- Đúng, trong đoạn code trên, `'posts'` được sử dụng làm `queryKey` và `fetchPosts` được sử dụng làm `queryFn`.

  - `queryKey` là một giá trị duy nhất để xác định một query trong React Query. Nó có thể là một chuỗi, một mảng, hoặc một object. Trong ví dụ trên, chúng ta sử dụng `'posts'` làm `queryKey` để định danh cho query lấy danh sách bài viết.

  - `queryFn` là một hàm mà React Query sẽ gọi để thực hiện lấy dữ liệu từ server. Trong ví dụ trên, `fetchPosts` là một hàm không đồng bộ (async function) để gọi API và lấy danh sách bài viết từ server.

- Khi chúng ta sử dụng `useQuery` và cung cấp `queryKey` và `queryFn`, React Query sẽ quản lý việc lưu cache, làm mới dữ liệu, và cung cấp các trạng thái và kết quả tương ứng để sử dụng trong giao diện người dùng.

## Giải thích chi tiết đoạn code trên: 👆👆👆

- Dưới đây là tách nhỏ đoạn code và giải thích từng phần:

1. Import các hàm và hook từ thư viện React Query:

```jsx
import { useQuery, useQueryClient } from "react-query";
```

- `useQuery` là một hook để thực hiện một query và quản lý các trạng thái của nó.
- `useQueryClient` là một hook để truy cập và thao tác với queryClient, một đối tượng quản lý các query và cache.

2. Định nghĩa hàm `fetchPosts` để lấy danh sách bài viết từ API:

```jsx
const fetchPosts = async () => {
  const response = await fetch("api/posts");
  const data = await response.json();
  return data;
};
```

- Hàm `fetchPosts` sử dụng `fetch` để gọi API và trả về một promise chứa dữ liệu bài viết.

3. Định nghĩa component `PostList`:

```jsx
function PostList() {
  const queryClient = useQueryClient();
```

- Sử dụng `useQueryClient` để lấy reference (tham chiếu) đến việc thao tác với `queryClient` và lưu vào biến queryClient.

4. Sử dụng `Query Instance` để lấy danh sách bài viết và lưu kết quả vào cache:

```jsx
const postsQuery = useQuery("posts", fetchPosts, {
  staleTime: 60000,
  refetchOnMount: false,
  refetchOnWindowFocus: false,
  refetchOnReconnect: false,
  onSuccess: () => {
    // ...
  },
});
```

- `useQuery` nhận vào `queryKey`, `queryFn`, và các tuỳ chọn để tạo một `Query Instance`.
- `'posts'` là `queryKey` để định danh cho query lấy danh sách bài viết.
- `fetchPosts` là `queryFn` để gọi hàm lấy dữ liệu từ API.
- Các tuỳ chọn được cấu hình như `staleTime`, `refetchOnMount`, `refetchOnWindowFocus`, và `refetchOnReconnect` để quyết định cách làm mới dữ liệu.

5. Xóa cache khi component bị unmount:

```jsx
useEffect(() => {
  return () => {
    // Xóa cache của query 'posts'
    queryClient.removeQueries("posts");

    // Xóa interval của Fetch ngầm
    clearInterval(queryClient.getQueryData("backgroundFetchInterval"));
  };
}, []);
```

- Sử dụng `useEffect` để xóa cache và clear interval khi component bị unmount.

6. Xử lý các trạng thái và hiển thị danh sách bài viết:

```jsx
if (postsQuery.isLoading) {
  return <div>Loading...</div>;
}

if (postsQuery.isError) {
  return <div>Error: {postsQuery.error.message}</div>;
}

return (
  <div>
    <h1>Post List</h1>
    <ul>
      {postsQuery.data.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  </div>
);
```

- Kiểm tra trạng thái `isLoading` để hiển thị thông báo `"Loading..."` khi query đang trong quá trình `fetching` dữ liệu.
- Kiểm tra trạng thái `isError` để hiển thị thông báo lỗi và message lỗi tương ứng.
- Hiển thị danh sách bài viết từ `postsQuery.data`.

- Đoạn code trên sử dụng React Query để lấy danh sách bài viết từ API, lưu kết quả vào cache, và cung cấp các trạng thái và kết quả tương ứng để hiển thị trong giao diện người dùng. Ngoài ra, nó cũng xử lý việc làm mới dữ liệu tự động với Fetch ngầm và xóa cache khi component bị unmount để tối ưu tài nguyên và tránh việc lấy dữ liệu không cần thiết.

- Hãy lấy ví dụ: Giả sử chúng ta dùng `cacheTime` mặc định là **5 phút** và `staleTime` là `0`.

## Đây là Docs của Được Dev: 👇👇👇

## React Query

## Giới thiệu series React Query

Series này sẽ khoản 10 video, xem hết series này bạn sẽ nắm vững được React Query và có thể tự tin xử lý mọi case thực tế

- Video 1: React query là gì? setup dev tool, gọi query

## React Query là gì?

TanStack Query (tên mới) hay React Query là thư viện giúp quản lý các state bất đồng bộ như data từ api.

Sức mạnh của Tanstack Query

- Quản lý cache data và cập nhật cực kỳ đơn giản với zero config
- Không dùng global state, reducer để quản lý, không học thuật khó hiểu. Quên Redux được rồi đó!
- Có khả năng tương thích và mở rộng với mọi use-case

Từ khi biết đến Tanstack Query, mình đã tiết kiệm được thời gian code và sản phẩm cũng đem lại trải nghiệm người dùng tốt hơn.

Trả lời câu hỏi phổ biến:

Tanstack Query dùng gì để gọi API?

Tanstack Query không đảm nhận việc gọi API, việc gọi API sẽ thực hiện thông qua các thư viện bạn dùng như axios, fetch API. Còn Tanstack Query chỉ đảm nhận việc quản lý data và trigger khi cần thiết.

## Lưu ý trước khi học

React Query có cơ chế caching hơi khác một chút so với RTK Query, nên anh em đừng lấy logic của RTK Query rồi suy ngược lại React Query cũng giống vậy nhé.

> Anh em hãy dành ra 1 phút để quên đi cách caching của RTK Query 😁

## Một số khái niệm quan trọng

- `staleTime` (default `0` ms): Thời gian data được cho là đã cũ. Khi get data xong thì sau một thời gian bạn quy định thì data nó sẽ tự cũ. **Lưu ý cái `stale` trên dev tool nó hiển thị là data của bạn `stale` và `active`**
- `cacheTime` (default `5*60*1000` ms tức 5 phút): Thời gian data sẽ bị xóa ra khỏi bộ nhớ đệm. Có thể data đã "cũ" nhưng nó chưa bị xóa ra khỏi bộ nhớ đệm vì bạn set `staleTime < cacheTime`. Thường thì người ta sẽ set `staleTime < cacheTime`
- `inactive`: là khi data đó không còn component nào subcribe cả

```tsx
const result = useQuery({ queryKey: ["todos"], queryFn: fetchTodoList });
```

`result` là một object chứa một vài state rất quan trọng: `status`, `fetchStatus`,...

Những state về các khoảnh khắc của data

- `isLoading` or `status === 'loading'` - Query chưa có data
- `isError` or `status === 'error'` - Query xảy ra lỗi
- `isSuccess` or `status === 'success'` - Query thành công và data đã có sẵn

Những state về data

- `error` - Nếu `isError === true` thì `error` sẽ xuất hiện ở đây
- `data` - Nếu `isSuccess === true` thì `data` sẽ xuất hiện ở đây

Đặc biệt là `fetchStatus`

- `isFetching` or `fetchStatus === 'fetching'` - Đang fetching API.
- `isPaused` or `fetchStatus === 'paused'` - Query muốn fetch API nhưng bị tạm dừng vì một lý do nào đó.
- `fetchStatus === 'idle'` - Query không làm gì cả

### Nếu thấy quá rối vì quá nhiều trạng thái, sự khác nhau giữa `status` và `fetchStatus` là như thế nào?

Chỉ cần nhớ

- `status` cho thông tin `data` có hay không
- `fetchStatus` cho thông tin về `queryFn` có đang chạy hay không

## Cơ chế caching

Một data mà đã `stale` thì khi gọi lại query của data đó, nó sẽ fetch lại api. Nếu không `stale` thì không fetch lại api (đối với trường hợp `staleTime` giữa các lần giống nhau)

> Còn đối với trường hợp `staleTime` giữa 2 lần khác nhau thì nếu data của lần query thứ 1 xuất hiện lâu hơn thời gian `staleTime` của lần query thứ 2 thì nó sẽ bị gọi lại ở lần thứ 2, dù cho có stale hay chưa.
> Ví dụ: `useQuery({ queryKey: ['todos'], queryFn: fetchTodos, staleTime: 10*1000 })` xuất hiện 5s trước, bây giờ chúng ta gọi lại `useQuery({ queryKey: ['todos'], queryFn: fetchTodos, staleTime: 2*1000 })` thì rõ ràng cái data của lần 1 dù nó chưa được cho là stale nhưng nó xuất hiện 5s trước và lâu hơn thời gian staleTime là 2s nên nó sẽ bị gọi lại ở lần 2.

Một data mà bị xóa khỏi bộ nhớ (tức là quá thời gian `cacheTime`) thì khi gọi lại query của data đó, nó sẽ fetch lại api. Nếu còn chưa bị xóa khỏi bộ nhớ nhưng đã `stale` thì nó sẽ trả về data cached và fetch api ngầm, sau khi fetch xong nó sẽ update lại data cached và trả về data mới cho bạn.

Caching là một vòng đời của:

- Query Instance có hoặc không cache data
- Fetch ngầm (background fetching)
- Các inactive query
- Xóa cache khỏi bộ nhớ (Garbage Collection)

Một ví dụ như thế này cho anh em dễ hiều:

Giả sử chúng ta dùng `cacheTime` mặc định là **5 phút** và `staleTime` là `0`.

```jsx
function A() {
  const result = useQuery({ queryKey: ["todos"], queryFn: fetchTodos });
}
function B() {
  const result = useQuery({ queryKey: ["todos"], queryFn: fetchTodos });
}
function C() {
  const result = useQuery({ queryKey: ["todos"], queryFn: fetchTodos });
}
```

- `A` component được mount
  - Vì không có query nào với `['todos']` trước đó, nó sẽ fetch data
  - Khi fetch xong, data sẽ được cache dưới key là `['todos']`
  - hook đánh dấu data là `stale` (cũ) vì sau `0`s
- Bây giờ thì `B` component được mount ở một nơi nào đó
  - Vì cache data `['todos']` đã có trước đó, data từ cache sẽ trả về ngay lập tức cho component `B`
  - Vì cache data `['todos']` được cho là đã `stale` nên nó sẽ fetch api tại component `B`
    - Không quan trọng function `fetchTodos` ở `A` và `B` có giống nhau hay không, việc fetch api tại `B` sẽ cập nhật tất cả các state query liên quan của `B` và `A` vì 2 component cùng key => cùng subcribe đến một data
  - Khi fetch thành công, cache data `['todos']` sẽ được cập nhật, cả 2 comonent `A` và `B` cũng được cập nhật data mới
- Bây giờ thì `A` và `B` unmount, không còn sử dụng nữa, không còn subcribe đến cache data `['todos']` nữa nên data `['todos']` bị cho là `inactive`
  - Vì `inactive` nên `cacheTime` sẽ bắt đầu đếm ngược 5 phút
- Trước khi `cacheTime` hết thì ông `C` comopnent được mount. cache data `['todos']` được trả về ngay lập tức cho `C` và `fetchTodos` sẽ chạy ngầm. Khi nó hoàn thành thì sẽ cập nhật lại cache với data mới.
- Cuối cùng thì `C` unmount
- Không còn ai subcribe đến cache data `['todos']` trong 5 phút tiếp theo nữa và cache data `['todos']` bị xóa hoàn toàn
