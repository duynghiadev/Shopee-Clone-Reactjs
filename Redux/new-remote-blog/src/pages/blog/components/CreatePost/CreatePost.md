## Giải thích code chi tiết:

✅✅ Đoạn code 1 ✅✅

```jsx
import classNames from 'classnames'
import { useAddPostMutation, useGetPostQuery, useUpdatePostMutation } from 'pages/blog/blog.service'
import React, { Fragment, useEffect, useMemo, useState } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from 'store'
import { Post } from 'types/blog.type'
import { isEntityError, isFetchBaseQueryError } from 'utils/helpers'
```

✅✅ Đoạn code 2 ✅✅

```jsx
const initialState: Omit<Post, 'id'> = {
  description: '',
  featuredImage: '',
  publishDate: '',
  published: false,
  title: ''
}
```

✅✅ Đoạn code 3 ✅✅

```jsx
type FormError =
  | {
      [key in keyof typeof initialState]: string
    }
  | null
```

✅✅ Đoạn code 4 ✅✅

```jsx
export default function CreatePost() {
  // Component state
  const [formData, setFormData] = useState<Omit<Post, 'id'> | Post>(initialState)
  const [addPost, addPostResult] = useAddPostMutation()

  // Redux state
  const postId = useSelector((state: RootState) => state.blog.postId)

  // Query data
  const { data, refetch } = useGetPostQuery(postId, {
    skip: !postId,
    refetchOnMountOrArgChange: 5,
    pollingInterval: 1000
  })

  const [updatePost, updatePostResult] = useUpdatePostMutation()

  // Error handling
  const errorForm: FormError = useMemo(() => {
    // Error handling logic
  }, [postId, updatePostResult, addPostResult])

  // useEffect and event handlers
  // ...

  // JSX markup
  // ...

  return (
    // Form markup
    // ...
  )
}
```
