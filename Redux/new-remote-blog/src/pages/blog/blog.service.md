## Giải thích code chi tiết:

✅✅ Đoạn code 1 ✅✅

```jsx
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Post } from 'types/blog.type'
import { CustomError } from 'utils/helpers'
```

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

```jsx
endpoints: (build) => ({
  getPosts: build.query<Post[], void>({
    query: () => 'posts',
    providesTags(result) {
      // providesTags configuration...
    }
  }),

  addPost: build.mutation<Post, Omit<Post, 'id'>>({
    query(body) {
      // query configuration...
    },
    invalidatesTags(result, error, body) {
      // invalidatesTags configuration...
    }
  }),

  getPost: build.query<Post, string>({
    query: (id) => ({
      // query configuration...
    })
  }),

  updatePost: build.mutation<Post, { id: string; body: Post }>({
    query(data) {
      // query configuration...
    },
    invalidatesTags(result, error, data) {
      // invalidatesTags configuration...
    }
  }),

  deletePost: build.mutation<{}, string>({
    query(id) {
      // query configuration...
    },
    invalidatesTags(result, error, id) {
      // invalidatesTags configuration...
    }
  })
})
```

✅✅ Đoạn code 4 ✅✅

```jsx
export const { useGetPostsQuery, useAddPostMutation, useGetPostQuery, useUpdatePostMutation, useDeletePostMutation } =
  blogApi
```
