## Giải thích code chi tiết:

✅✅ Đoạn code 1 ✅✅

```jsx
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Post } from 'types/blog.type'
import { CustomError } from 'utils/helpers'
```

- Đoạn mã trên có mục đích tạo ra một API client sử dụng Redux Toolkit Query để giao tiếp với backend và thực hiện các yêu cầu mạng (network requests).

- `createApi`: Đây là một hàm được cung cấp bởi Redux Toolkit Query để tạo ra một API client. Nó nhận vào một đối tượng (object) cấu hình để định nghĩa các endpoint và các yêu cầu mạng.

- `fetchBaseQuery`: Đây là một hàm cung cấp bởi Redux Toolkit Query, được sử dụng để thực hiện các yêu cầu mạng bằng cách sử dụng `Fetch API`. Nó là một cách tiện lợi và mạnh mẽ để thực hiện các yêu cầu `GET`, `POST`, `PUT`, `DELETE`, vv.

- `@reduxjs/toolkit/query/react`: Đây là một module cung cấp các công cụ liên quan đến Redux Toolkit Query cho ứng dụng React. Nó cung cấp các hook (như `useQuery`, `useMutation`, `useQuerySubscription`) để tương tác với API client và quản lý trạng thái của các yêu cầu mạng.

- `Post`: Đây là một kiểu dữ liệu (type) được import từ module `types/blog.type`. Nó đại diện cho cấu trúc dữ liệu của một bài đăng (post) trong blog.

- `CustomError`: Đây là một lớp (class) hoặc kiểu dữ liệu được import từ module `utils/helpers`. Nó có thể đại diện cho một lỗi tùy chỉnh được sử dụng trong ứng dụng, có thể chứa các thông tin bổ sung về lỗi hoặc được định nghĩa để xử lý lỗi theo cách riêng.

✅✅ Đoạn code 2 ✅✅

```jsx
export const blogApi = createApi({
  reducerPath: 'blogApi',
  tagTypes: ['Posts'],
  keepUnusedDataFor: 10,
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:4000/',
    prepareHeaders(headers) {
      headers.set('authorization', 'Bearer ABCXYZ')
      return headers
    }
  }),

  endpoints: (build) => ({
    // Endpoint configurations...
  })
})
```

- Trong đoạn mã trên, chúng ta tạo một đối tượng `blogApi` bằng cách sử dụng hàm `createApi` từ Redux Toolkit Query để cấu hình API client cho ứng dụng.

- `reducerPath`: Đây là tên của reducer được tạo ra bởi API client, nơi lưu trữ trạng thái (state) và các hàm reducer liên quan đến các yêu cầu mạng. Trong trường hợp này, reducer sẽ có tên là `'blogApi'`.

- `tagTypes`: Đây là một mảng chứa các loại (types) cho các tag (thẻ) được sử dụng để phân loại các yêu cầu mạng. Trong trường hợp này, chỉ có một loại là `'Posts'`.

- `keepUnusedDataFor`: Đây là một cấu hình tùy chọn để quyết định bao lâu dữ liệu không được sử dụng sẽ được giữ lại trong bộ nhớ cache. Trong trường hợp này, dữ liệu sẽ được giữ lại trong 10 giây.

- `baseQuery`: Đây là một đối tượng (object) cấu hình cho cách thực hiện các yêu cầu mạng. Trong trường hợp này, chúng ta sử dụng `fetchBaseQuery` và cung cấp các cài đặt như `baseUrl` để xác định URL cơ sở của API và `prepareHeaders` để thêm `header` có tên là 'authorization' và giá trị là 'Bearer ABCXYZ' vào mỗi yêu cầu mạng.

- `endpoints`: Đây là một hàm mà chúng ta cung cấp để định nghĩa các endpoint (điểm cuối) và cấu hình cho mỗi endpoint. Trong trường hợp này, chúng ta có thể định nghĩa các endpoint và các hàm reducer liên quan đến chúng bằng cách sử dụng đối tượng `build`.

- Sau khi tạo `blogApi`, chúng ta có thể sử dụng nó để tạo các hook (như `useQuery`, `useMutation`, vv.) để gọi các yêu cầu mạng liên quan đến blog trong ứng dụng.

## ❌❌ baseQuery là 1 hàm chứ ? Hay là đối tượng ? ❌❌

- Trong Redux Toolkit Query, `baseQuery` là một thuộc tính của đối tượng cấu hình `api` và không phải là một hàm.

- Trong đoạn mã bạn đã cung cấp, `baseQuery` được truyền vào `createApi` như một thuộc tính cấu hình. Nó không phải là một hàm, mà là một đối tượng cấu hình mà bạn cung cấp cho Redux Toolkit Query.

- Trong cấu hình `baseQuery`, bạn có thể cung cấp các thuộc tính như `baseUrl` và `prepareHeaders` để cấu hình cách thức gửi yêu cầu mạng và xử lý các `headers` trong mỗi yêu cầu.

- Vì `baseQuery` không phải là một hàm, nó không thể được sử dụng trực tiếp để thực hiện yêu cầu mạng. Thay vào đó, nó được sử dụng như một phần của cấu hình `api` và làm nền tảng cho việc gửi các yêu cầu thông qua các endpoint đã được định nghĩa trong `endpoints`.

## ❌❌ fetchBaseQuery là 1 hàm hả ? ❌❌

- Đúng, `fetchBaseQuery` là một hàm được cung cấp bởi Redux Toolkit Query.

- `fetchBaseQuery` là một hàm factory (hàm tạo) có nhiệm vụ trả về một adapter (bộ điều khiển) cho việc thực hiện các yêu cầu mạng. Nó được sử dụng để cấu hình cách thức gửi yêu cầu mạng, xử lý phản hồi và xử lý lỗi. Khi chúng ta truyền cấu hình cho `fetchBaseQuery`, nó sẽ trả về một adapter đã được cấu hình cho cấu hình đó.

- Adapter trả về bởi `fetchBaseQuery` là một đối tượng chứa các phương thức để gửi yêu cầu HTTP như GET, POST, PUT, DELETE. Bạn có thể sử dụng các phương thức này để gửi các yêu cầu mạng đến API của bạn.

- Trong ví dụ trước, chúng ta đã sử dụng `fetchBaseQuery` để tạo một adapter được cấu hình với `baseUrl` là `'http://localhost:4000/'` và `prepareHeaders` để thêm header `'authorization'` với giá trị `'Bearer ABCXYZ'` vào mỗi yêu cầu mạng.

✅✅ Đoạn code 3 ✅✅

````jsx
export const blogApi = createApi({
endpoints: (build) => ({
 getPosts: build.query<Post[], void>({
      query: () => 'posts', // method không có argument
      /**
       * providesTags có thể là array hoặc callback return array
       * Nếu có bất kỳ một invalidatesTag nào match với providesTags này
       * thì sẽ làm cho getPosts nethod chạy lại
       * và cập nhật lại danh sách các bài post cũng như các tags phía dưới
       */

      providesTags(result) {
        /**
         * Cái callback này sẽ chạy mỗi khi getPosts chạy
         * Mong muốn là sẽ return về 1 mảng kiểu
         *
         * ```jsx
         * interface Tags: {
         *  type: 'Posts',
         *  id: string
         * }[]
         * ```
         *
         * ❌❌ vì thế phải thêm as const vào để báo hiệu type là Read only, không thể mutate ❌❌
         */
        if (result) {
          const final = [
            ...result.map(({ id }) => ({
              type: 'Posts' as const,
              id
            })),
            {
              type: 'Posts' as const,
              id: 'LIST'
            }
          ]
          return final
        }
        /**
         * Chỗ này có 2 cách sử dùng:
         */
        // Cách thứ 1: Có vẻ hơi khó hiểu 👇
        // const final = [{type: 'Posts' as const, id: 'LIST'}]
        // return final

        /**
         * Cách thứ 2: Khi chúng ta dùng cách return này thì nó sẽ return thẳng lun.
         * Và nó sẽ thành Read Only, không thể sửa được nữa 👇
         */
        return [
          {
            type: 'Posts' as const,
            id: 'LIST'
          }
        ]
      }
    })
}),
````

- Đoạn code trên định nghĩa một endpoint có tên là `getPosts` trong API của `blogApi`. Endpoint này là một query endpoint (`build.query`) để lấy danh sách các bài viết (`Post[]`).

- Trong ví dụ này, một endpoint được định nghĩa là `getPosts`. Endpoint này được tạo bằng cách sử dụng `build.query()` và nhận vào hai đối số: `query` và `providesTags`.

- `query` là một hàm không có đối số và trả về một chuỗi. Trong ví dụ này, chuỗi `'posts'` được trả về, đại diện cho đường dẫn của API endpoint để lấy danh sách các bài viết.

- `providesTags` là một callback được sử dụng để xác định các tags mà endpoint `getPosts` cung cấp. Callback này sẽ được gọi mỗi khi `getPosts` chạy.

- Trong phần code này, callback `providesTags` kiểm tra nếu `result` khác null, tức là có kết quả từ endpoint `getPosts`, nó sẽ tạo và trả về một mảng tags. Mảng này được tạo bằng cách sử dụng phương thức `map` trên kết quả và trả về một mảng các đối tượng tags. Mỗi đối tượng tag bao gồm hai thuộc tính: `type` với giá trị `'Posts'` và `id` với giá trị là id của bài viết. Mảng tags này sẽ được sử dụng để cập nhật và xử lý cache trong Redux Toolkit Query.

```jsx
 if (result) {
const final = [
  ...result.map(({ id }) => ({
    type: 'Posts' as const,
    id
  })),
  {
    type: 'Posts' as const,
    id: 'LIST'
  }
]
  return final
}
```

- Trong đoạn mã này, nếu `result` khác null, tức là có kết quả từ endpoint `getPosts`, chúng ta sẽ thực hiện một số xử lý để tạo mảng tags.

- Trước tiên, chúng ta sử dụng phương thức `map` trên kết quả để tạo một mảng mới. Mỗi phần tử trong mảng kết quả sẽ được biến đổi thành một đối tượng tag mới. Đối tượng tag này bao gồm hai thuộc tính: `type` với giá trị `'Posts'` và `id` với giá trị là id của bài viết từ phần tử tương ứng trong kết quả. Chúng ta sử dụng cú pháp `as const` để chỉ định rằng type của thuộc tính `type` là read-only (không thể thay đổi sau khi được gán).

- Sau đó, chúng ta thêm một đối tượng tag khác vào cuối mảng với `type` là `'Posts'` và `id` là `'LIST'`. Điều này đại diện cho tag chung cho danh sách bài viết.

- Cuối cùng, chúng ta gom tất cả các đối tượng tag vào một mảng cuối cùng gọi là `final` bằng cách sử dụng toán tử spread (`...`) và trả về mảng này. Mảng `final` này sẽ chứa tất cả các tags cần thiết để cập nhật và xử lý cache trong Redux Toolkit Query.

```jsx
return [
  {
    type: 'Posts' as const,
    id: 'LIST'
  }
]
```

- Trong đoạn mã này, chúng ta trả về một mảng chứa một đối tượng tag duy nhất. Đối tượng tag này có thuộc tính `type` với giá trị là `'Posts'` và thuộc tính `id` với giá trị là `'LIST'`. Điều này đại diện cho tag chung cho danh sách bài viết.

- Lưu ý rằng trong trường hợp này, chúng ta không sử dụng toán tử spread (`...`) như trong trường hợp trước. Thay vào đó, chúng ta trả về một mảng chứa đối tượng tag duy nhất đóng gói trong cặp dấu ngoặc vuông `[]`. Mảng này sẽ được sử dụng để cập nhật và xử lý cache trong Redux Toolkit Query.

## Vậy tóm lại đoạn code trên nói về cái gì ? Đây là cách viết tổng quát

- Đoạn code trên định nghĩa một endpoint có tên là `getPosts` trong API của `blogApi`. Endpoint này là một query endpoint (`build.query`) để lấy danh sách các bài viết (`Post[]`).

- Trong phần cấu hình của endpoint, chúng ta sử dụng một callback `providesTags` để xác định các tags liên quan đến endpoint này. Callback `providesTags` sẽ được gọi mỗi khi `getPosts` chạy và nhận kết quả trả về từ server (`result`). Mục đích của callback này là trả về một mảng các tags mà endpoint này cung cấp.

- Trong trường hợp `result` tồn tại (khác `null` hoặc `undefined`), chúng ta sử dụng phương thức `map` để chuyển đổi mỗi bài viết trong danh sách thành một đối tượng tag. Mỗi đối tượng tag có hai thuộc tính là `type` với giá trị `'Posts'` và `id` với giá trị là `id` của bài viết tương ứng. Kết quả sau khi ánh xạ `map` được kết hợp với một đối tượng tag khác có id là `'LIST'`, đại diện cho danh sách chung của bài viết. Cuối cùng, mảng kết quả này được trả về.

- Trong trường hợp `result` không tồn tại, chúng ta trực tiếp trả về một mảng gồm một đối tượng tag duy nhất với type là `'Posts'` và `id` là `'LIST'`.

- Việc xác định các tags thông qua `providesTags` giúp Redux Toolkit Query quản lý cache và tự động cập nhật lại dữ liệu khi các tags tương ứng bị thay đổi hoặc hết hạn.

✅✅ Đoạn code 4 ✅✅

```jsx
 /**
  * Chúng ta dùng mutation đối với các trường hợp POST, PUT, DELETE
  * Post là response trả về và Omit<Post, 'id'> là body gửi lên
  */
 export const blogApi = createApi({
    addPost: build.mutation<Post, Omit<Post, 'id'>>({
      query(body) {
        try {
          return {
            url: 'posts',
            method: 'POST',
            body
          }
        } catch (error: any) {
          throw new CustomError(error.message)
        }
      },

      /**
       * invalidatesTags cung cấp các tag để báo hiệu cho những method nào có providesTags
       * match với nó sẽ bị gọi lại
       * Trong trường hợp này getPosts sẽ chạy lại
       */
      invalidatesTags: (result, error, body) =>
        error
          ? []
          : [
              {
                type: 'Posts',
                id: 'LIST'
              }
            ]
    }),
 })
```

- Đoạn code trên định nghĩa một mutation endpoint có tên là `addPost` trong API của `blogApi`. Endpoint này được sử dụng để tạo mới một bài viết (`Post`) trên server.

- Trong phần cấu hình của endpoint, chúng ta sử dụng một hàm `query` để định nghĩa phương thức gửi request tới server khi thực hiện mutation. Phương thức này là `POST` đến đường dẫn `'posts'`, và dữ liệu gửi đi là body của bài viết (được loại bỏ trường `id` bằng `Omit<Post, 'id'>`). Trong trường hợp có lỗi xảy ra, chúng ta ném một `CustomError` với thông báo lỗi tương ứng.

- Thuộc tính `invalidatesTags` được sử dụng để xác định các tags liên quan đến endpoint này, nhằm báo hiệu cho các method khác có `providesTags` tương ứng để biết rằng khi mutation được thực hiện, các tags này sẽ bị thay đổi và cần được cập nhật lại. Trong trường hợp này, nếu mutation thành công (`error` là `null` hoặc `undefined`), chúng ta trả về một mảng gồm một đối tượng tag duy nhất với `type` là `'Posts'` và `id` là `'LIST'`. Điều này đồng nghĩa với việc khi thực hiện mutation thành công, endpoint `getPosts` sẽ chạy lại để cập nhật danh sách bài viết. Trong trường hợp có lỗi xảy ra, chúng ta trả về một mảng rỗng, không có tags nào bị ảnh hưởng.

✅✅ Đoạn code 5 ✅✅

```jsx
export const blogApi = createApi({
  getPost: build.query<Post, string>({
      query: (id) => ({
        url: `posts/${id}`,
        headers: {
          hello: 'Im duoc'
        },
        params: {
          first_name: 'du',
          'last-name': 'duoc'
        }
      })
    }),
})
```

- Đoạn code trên định nghĩa một query endpoint có tên là `getPost` trong API của `blogApi`. Endpoint này được sử dụng để lấy thông tin của một bài viết (`Post`) từ server dựa trên `id` của bài viết đó.

- Trong phần cấu hình của endpoint, chúng ta sử dụng một hàm `query` để định nghĩa phương thức gửi request tới server khi thực hiện query. Phương thức này là `GET` đến đường dẫn `'posts/${id}'`, trong đó `id` được truyền vào như một tham số của hàm `query`. Chúng ta cũng có thể thấy sử dụng các headers custom bằng cách định nghĩa một đối tượng headers với thuộc tính `hello` có giá trị là `'Im duoc'`. Ngoài ra, chúng ta có thể thấy sử dụng tham số truy vấn (query params) bằng cách định nghĩa một đối tượng `params`, trong đó chúng ta có thể thấy có hai tham số truy vấn là `first_name` và `'last-name'`.

- Điều này đồng nghĩa với việc khi thực hiện query `getPost` và truyền vào một `id` cụ thể, endpoint sẽ gửi một request GET đến đường dẫn `'posts/${id}'` với các headers và tham số truy vấn tương ứng.

✅✅ Đoạn code 6 ✅✅

```jsx
export const blogApi = createApi({
    updatePost: build.mutation<Post, { id: string; body: Post }>({
      query(data) {
        return {
          url: `posts/${data.id}`,
          method: 'PUT',
          body: data.body
        }
      },
      /**
       * Trong trường hợp này thì getPosts (getPostList) sẽ chạy lại
       */
      invalidatesTags: (result, error, data) =>
        error
          ? []
          : [
              {
                type: 'Posts',
                id: data.id
              }
            ]
    }),
})
```

- Đoạn code trên định nghĩa một mutation endpoint có tên là `updatePost` trong `blogApi`. Mutation này được sử dụng để cập nhật thông tin của một bài viết.

  - `updatePost` là tên của mutation endpoint.
  - `build.mutation` là phương thức để tạo ra một mutation endpoint trong Redux Toolkit Query.
  - `Post` là kiểu dữ liệu của dữ liệu trả về từ endpoint sau khi cập nhật thành công.
  - `{ id: string; body: Post }` là kiểu dữ liệu của tham số `data` được truyền vào mutation khi gọi `updatePost`. `id` là id của bài viết cần cập nhật và `body` là thông tin cập nhật cho bài viết đó.
  - Trong phần `query`, chúng ta định nghĩa request gửi đến server. Endpoint này sử dụng phương thức `PUT` để cập nhật bài viết, và URL endpoint được tạo dựa trên `id` của bài viết.
  - Thuộc tính `invalidatesTags` được sử dụng để xác định các tags liên quan đến endpoint này, nhằm báo hiệu cho các method khác có `providesTags` tương ứng để biết rằng khi mutation được thực hiện, các tags này sẽ bị thay đổi và cần được cập nhật lại. Trong trường hợp này, khi mutation `updatePost` được gọi thành công, nó sẽ làm cho endpoint `getPosts` hoặc `getPostList` chạy lại. Điều này đảm bảo rằng sau khi cập nhật bài viết, danh sách bài viết sẽ được cập nhật lại để hiển thị thông tin mới nhất. Trong trường hợp có lỗi xảy ra, chúng ta trả về một mảng rỗng, không có tags nào bị ảnh hưởng.

- Tóm lại, đoạn code này định nghĩa một mutation endpoint để cập nhật thông tin của một bài viết trong hệ thống blog, và sau khi cập nhật thành công, danh sách bài viết sẽ được cập nhật lại.

## Tóm lại ngắn gọn, nếu không hiểu thì đọc lại giải thích ở trên 👆:

- Đoạn code trên định nghĩa một mutation endpoint trong `blogApi` có tên là `updatePost`. Endpoint này được sử dụng để cập nhật thông tin của một bài viết trong hệ thống blog. Khi gọi mutation `updatePost`, nó sẽ gửi một request HTTP `PUT` tới URL `posts/{id}` (trong đó `id` là id của bài viết cần cập nhật) với `body` chứa thông tin cập nhật mới cho bài viết.

- Nếu mutation thành công, nó sẽ trả về dữ liệu của bài viết đã được cập nhật. Sau khi cập nhật thành công, danh sách bài viết sẽ được cập nhật lại thông qua endpoint `getPosts` hoặc `getPostList`.

- Nếu có lỗi xảy ra trong quá trình cập nhật, mutation sẽ không làm thay đổi bất kỳ tag nào liên quan đến danh sách bài viết.

- Tóm lại, đoạn code này cung cấp một mutation endpoint để cập nhật thông tin của một bài viết trong hệ thống blog và đồng thời cập nhật lại danh sách bài viết sau khi cập nhật thành công.

✅✅ Đoạn code 7 ✅✅

```jsx
export const blogApi = createApi({
    deletePost: build.mutation<{}, string>({
      query(id) {
        return {
          url: `posts/${id}`,
          method: 'DELETE'
        }
      },

      /**
       * Trong trường hợp này thì getPosts (getPostList) sẽ chạy lại
       */
      invalidatesTags: (result, error, id) => [
        {
          type: 'Posts',
          id
        }
      ]
    })
})
})
```

- Đoạn code trên định nghĩa một mutation endpoint trong `blogApi` có tên là `deletePost`. Endpoint này được sử dụng để xóa một bài viết trong hệ thống blog. Khi gọi mutation `deletePost`, nó sẽ gửi một request HTTP `DELETE` tới URL `posts/{id}` (trong đó `id` là id của bài viết cần xóa).

- Thuộc tính `invalidatesTags` được sử dụng để xác định các tags liên quan đến endpoint này, nhằm báo hiệu cho các method khác có `providesTags` tương ứng để biết rằng khi mutation được thực hiện, các tags này sẽ bị thay đổi và cần được cập nhật lại. Trong trường hợp này, khi mutation `deletePost` không trả về dữ liệu sau khi xóa thành công, chỉ trả về một object rỗng (`{}`). Sau khi xóa thành công, danh sách bài viết sẽ được cập nhật lại thông qua endpoint `getPosts` hoặc `getPostList` chạy lại. Điều này đảm bảo rằng sau khi cập nhật bài viết, danh sách bài viết sẽ được cập nhật lại để hiển thị thông tin mới nhất.

- Nếu có lỗi xảy ra trong quá trình xóa, mutation sẽ không làm thay đổi bất kỳ tag nào liên quan đến danh sách bài viết.

- Đồng thời, thông qua hàm `invalidatesTags`, nếu xóa thành công, mutation sẽ invalidate (đánh dấu là không còn hợp lệ) tag của bài viết đã bị xóa. Điều này dẫn đến việc danh sách bài viết sẽ được cập nhật lại khi gọi endpoint `getPosts` hoặc `getPostList`.

- Tóm lại, đoạn code này cung cấp một mutation endpoint để xóa một bài viết trong hệ thống blog và đồng thời cập nhật lại danh sách bài viết sau khi xóa thành công.

## Tóm lại ngắn gọn, nếu không hiểu thì đọc lại giải thích ở trên 👆:

- Đoạn code đó định nghĩa một mutation endpoint trong `blogApi` có tên là `deletePost`. Endpoint này được sử dụng để xóa một bài viết trong hệ thống blog. Sau khi xóa thành công, danh sách bài viết sẽ được cập nhật lại thông qua endpoint `getPosts` hoặc `getPostList`. Đoạn code cũng xác định cách làm mới danh sách bài viết bằng cách `invalidate` (đánh dấu là không còn hợp lệ) tag của bài viết đã bị xóa. Tóm lại, đoạn code này liên quan đến xóa bài viết và cập nhật danh sách bài viết trong hệ thống blog.

✅✅ Đoạn code 8 ✅✅

```jsx
export const { useGetPostsQuery, useAddPostMutation, useGetPostQuery, useUpdatePostMutation, useDeletePostMutation } =
  blogApi
```

- Đoạn code trên sử dụng destructuring assignment để lấy các hooks từ blogApi và gán chúng vào các biến tương ứng.

  - `useGetPostsQuery`: Hook này được sử dụng để thực hiện một truy vấn (query) để lấy danh sách các bài viết từ API.
  - `useAddPostMutation`: Hook này được sử dụng để thực hiện một mutation để thêm mới một bài viết vào API.
  - `useGetPostQuery`: Hook này được sử dụng để thực hiện một truy vấn (query) để lấy thông tin của một bài viết cụ thể từ API dựa trên `id`.
  - `useUpdatePostMutation`: Hook này được sử dụng để thực hiện một mutation để cập nhật thông tin của một bài viết trong API.
  - `useDeletePostMutation`: Hook này được sử dụng để thực hiện một mutation để xóa một bài viết từ API dựa trên `id`.

- Bằng cách sử dụng destructuring assignment, chúng ta có thể truy cập vào các hooks này và sử dụng chúng trong các component của ứng dụng.
