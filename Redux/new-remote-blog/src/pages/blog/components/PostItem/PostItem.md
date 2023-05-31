## Giải thích code chi tiết:

✅✅ Đoạn code 1 ✅✅

```jsx
import { Post } from 'types/blog.type'

interface PostItemProps {
  post: Post
  startEdit: (id: string) => void
  handleDeletePost: (id: string) => void
}
```

✅✅ Đoạn code 2 ✅✅

```jsx
export default function PostItem(props: PostItemProps) {
  const { post, startEdit, handleDeletePost } = props

  // Render the PostItem component
  return (
    // Component structure...
  )
}
```

✅✅ Đoạn code 3 ✅✅

```jsx
<div className='group relative block h-48 w-full shrink-0 self-start overflow-hidden bg-gray-100 md:h-full md:w-32 lg:w-48'>
  <img
    src={post.featuredImage}
    loading='lazy'
    alt={post.title}
    className='absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110'
  />
</div>
```

✅✅ Đoạn code 4 ✅✅

```jsx
<div className='flex flex-col gap-2 p-4 lg:p-6'>
  <span className='text-sm text-gray-400'>{post.publishDate}</span>
  <h2 className='text-xl font-bold text-gray-800'>{post.title}</h2>
  <p className='text-gray-500'>{post.description}</p>

  {/* Render the buttons */}
  <div>
    <div className='inline-flex rounded-md shadow-sm' role='group'>
      {/* Edit button */}
      <button
        type='button'
        className='rounded-l-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:text-blue-700 focus:ring-2 focus:ring-blue-700'
        onClick={() => startEdit(post.id)}
      >
        Edit
      </button>

      {/* Delete button */}
      <button
        type='button'
        className='rounded-r-lg border-b border-r border-t border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:text-blue-700 focus:ring-2 focus:ring-blue-700'
        onClick={() => handleDeletePost(post.id)}
      >
        Delete
      </button>
    </div>
  </div>
</div>
```
