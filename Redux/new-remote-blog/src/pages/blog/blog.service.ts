import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Post } from 'types/blog.type'
import { CustomError } from 'utils/helpers'

// Nếu bên slice chúng ta dùng createSlice để tạo slice thì bên RTK query dùng createApi
// Với createApi chúng ta gọi là slice api
// Chúng ta sẽ khai báo baseUrl và các endpoints

// baseQuery được dùng cho mỗi endpoint để fetch api

// fetchBaseQuery là một function nhỏ được xây dựng trên fetch API
// Nó không thay thế hoàn toàn được Axios nhưng sẽ giải quyết được hầu hết các vấn đề của bạn
// Chúng ta có thể dùng axios thay thế cũng được, nhưng để sau nhé

// endPoints là tập hợp những method giúp get, post, put, delete... tương tác với server
// Khi khai báo endPoints nó sẽ sinh ra cho chúng ta các hook tương ứng để dùng trong component
// endpoints có 2 kiểu là query và mutation.
// Query: Thường dùng cho GET
// Mutation: Thường dùng cho các trường hợp thay đổi dữ liệu trên server như POST, PUT, DELETE

// Có thể ban đầu mọi người thấy nó phức tạp và khó hiểu
// Không sao, mình cũng thế, các bạn chỉ cần hiểu là đây là cách setup mà RTK query yêu cầu
// Chúng ta chỉ cần làm theo hướng dẫn là được

/**
 * Mô hình sync dữ liệu danh sách bài post dưới local sau khi thêm 1 bài post
 * Thường thì sẽ có 2 cách tiếp cận: 🚀
 *
 * ✅ Cách 1: Đây là cách những video trước đây mình dùng ✅
 * 1. Sau khi thêm 1 bài post thì server sẽ trả về data của bài post đó
 * 2. Chúng ta sẽ tiến hành lấy data đó thêm vào state redux
 * 3. Lúc này UI của chúng ta sẽ được sync
 *
 * ====> Rủi ro cách này là nếu khi gọi bài viết add post mà server trả về data không đủ các field để
 * chúng ta hiển thị thì sẽ gặp lỗi. Nếu có nhiều người cùng add post thì data sẽ sync thiếu.
 * Chưa kể chúng ta phải quản lý việc cập nhật state nữa, hơi mệt !!!
 *
 *
 * ✅ Cách 2: Đây là cách mình thường dùng với RTK Query ✅
 * 1. Sau khi thêm 1 bài post thì server sẽ trả về data của bài post đó
 * 2. Chúng ta sẽ tiến hành fetch lại API get posts để cập nhật lại state redux
 * 3. Lúc này UI của chúng ta sẽ được sync
 *
 * ====> Cách này giúp data dưới local sẽ luôn mới nhất, luôn đồng bộ với server
 * ====> Khuyết điểm là chúng ta sẽ tốn thêm một lần gọi API. Thực ra thì điểu này có thể chấp nhận được
 */

export const blogApi = createApi({
  reducerPath: 'blogApi', // Tên field trong Redux state
  tagTypes: ['Posts'], // Những kiểu tag cho phép dùng trong blogApi
  keepUnusedDataFor: 10, // Giữ data trong 10s sẽ xóa (mặc định 60s)

  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:4000/',
    prepareHeaders(headers) {
      headers.set('authorization', 'Bearer ABCXYZ')
      return headers
    }
  }),

  endpoints: (build) => ({
    // Generic type theo thứ tự là kiểu response trả về và argument
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

export const { useGetPostsQuery, useAddPostMutation, useGetPostQuery, useUpdatePostMutation, useDeletePostMutation } =
  blogApi
