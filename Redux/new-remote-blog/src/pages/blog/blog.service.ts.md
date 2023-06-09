## Giải thích code chi tiết:

✅✅ Đoạn code 1 ✅✅

```jsx
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Post } from 'types/blog.type'
import { CustomError } from 'utils/helpers'
```

-

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

✅✅ Đoạn code 3 ✅✅

````jsx
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
    }),

✅✅ Đoạn code 4 ✅✅

 /**
  * Chúng ta dùng mutation đối với các trường hợp POST, PUT, DELETE
  * Post là response trả về và Omit<Post, 'id'> là body gửi lên
  */
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

✅✅ Đoạn code 5 ✅✅

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


✅✅ Đoạn code 6 ✅✅

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

✅✅ Đoạn code 7 ✅✅

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
````

✅✅ Đoạn code 8 ✅✅

```jsx
export const { useGetPostsQuery, useAddPostMutation, useGetPostQuery, useUpdatePostMutation, useDeletePostMutation } =
  blogApi
```
