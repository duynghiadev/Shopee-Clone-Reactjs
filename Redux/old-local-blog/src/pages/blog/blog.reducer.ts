import { createReducer, createAction, current, PayloadAction, nanoid } from '@reduxjs/toolkit'
import { initialPostList } from 'constants/blog'
import { Post } from 'types/blog.type'

interface BlogState {
  postList: Post[]
  editingPost: Post | null
}

const initialState: BlogState = {
  postList: initialPostList,
  editingPost: null
}

export const addPost = createAction('blog/addPost', function (post: Omit<Post, 'id'>) {
  return {
    payload: {
      ...post,
      id: nanoid()
    }
  }
})
export const deletePost = createAction<string>('blog/deletePost')
export const startEditingPost = createAction<string>('/blog/startEditingPost')
export const cancelEditingPost = createAction('/blog/cancelEditingPost')
export const finishEditingPost = createAction<Post>('/blog/finishEditingPost')

/**
 * Nếu code project bằng TypeScript thì cứ dùng theo kiểu (Builder Callback) này thì sẽ dễ hiểu hơn
 * Mặc dù hơi dài 1 tí. Nhưng mà được cái là nó hỗ trợ đầy đủ kiểu TypeScript cho chúng ta
 */

const blogReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(addPost, (state, action) => {
      // Ở đây chúng ta sử dụng immerjs
      // immerjs giúp chúng ta mutate một state an toàn
      const post = action.payload
      state.postList.push(post)
    })
    .addCase(deletePost, (state, action) => {
      console.log('start', current(state))

      const postId = action.payload
      const foundPostIndex = state.postList.findIndex((post) => post.id === postId)

      if (foundPostIndex !== -1) {
        state.postList.splice(foundPostIndex, 1)
      }

      console.log('finish', current(state))
    })
    .addCase(startEditingPost, (state, action) => {
      const postId = action.payload
      const foundPost = state.postList.find((post) => post.id === postId) || null
      state.editingPost = foundPost
    })
    // Trong case này chúng ta không cần dùng action.
    // Bởi vì chúng ta không lấy cái gì từ payload.
    .addCase(cancelEditingPost, (state) => {
      state.editingPost = null
    })
    .addCase(finishEditingPost, (state, action) => {
      const postId = action.payload.id
      state.postList.some((post, index) => {
        if (post.id === postId) {
          state.postList[index] = action.payload
          return true
        }
        return false
      })
      state.editingPost = null
    })
    .addMatcher(
      (action) => action.type.includes('cancel'),
      (state, action) => {
        console.log(current(state))
      }
    )
})

/**
 * Sử dụng cách này thì dài hơn.
 * Nhưng không khuyến khích sử dụng cách này.
 * Đã sử dụng Redux Toolkit thì hãy dùng cách trên lun cho khoẻ.
 */

// const blogReducer = createReducer(
//   initialState,
//   {
//     [addPost.type]: (state, action: PayloadAction<Post>) => {
//       // immerjs
//       // immerjs giúp chúng ta mutate một state an toàn
//       const post = action.payload
//       state.postList.push(post)
//     },
//     [deletePost.type]: (state, action) => {
//       console.log('start', current(state))
//       const postId = action.payload
//       const foundPostIndex = state.postList.findIndex((post) => post.id === postId)
//       if (foundPostIndex !== -1) {
//         state.postList.splice(foundPostIndex, 1)
//       }
//       console.log('finish', current(state))
//     },
//     [startEditingPost.type]: (state, action) => {
//       const postId = action.payload
//       const foundPost = state.postList.find((post) => post.id === postId) || null
//       state.editingPost = foundPost
//     },
//     [cancelEditingPost.type]: (state) => {
//       state.editingPost = null
//     },
//     [finishEditingPost.type]: (state, action) => {
//       const postId = action.payload.id
//       state.postList.some((post, index) => {
//         if (post.id === postId) {
//           state.postList[index] = action.payload
//           return true
//         }
//         return false
//       })
//       state.editingPost = null
//     }
//   },
//   [
//     {
//       matcher: ((action: any) => action.type.includes('cancel')) as any,
//       reducer(state, action) {
//         console.log(current(state))
//       }
//     }
//   ],
//   (state) => {
//     console.log(state)
//   }
// )

export default blogReducer
