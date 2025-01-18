import { Post } from 'types/blog.type'

interface PostItemProps {
  post: Post
  startEdit: (id: string) => void
  handleDeletePost: (id: string) => void
}

export default function PostItem(props: PostItemProps) {
  const { post, startEdit, handleDeletePost } = props

  return (
    <div className='flex flex-col items-center overflow-hidden rounded-lg border md:flex-row'>
      <div className='group relative block h-48 w-full shrink-0 self-start overflow-hidden bg-gray-100 md:h-full md:w-32 lg:w-48'>
        <img
          src={post.featuredImage}
          loading='lazy'
          alt={post.title}
          className='absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110'
        />
      </div>

      <div className='flex flex-col gap-2 p-4 lg:p-6'>
        <span className='text-sm text-gray-400'>{post.publishDate}</span>
        <h2 className='text-xl font-bold text-gray-800'>{post.title}</h2>

        <p className='text-gray-500'>{post.description}</p>

        <div>
          <div className='inline-flex rounded-md shadow-sm' role='group'>
            <button
              type='button'
              className='rounded-l-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:text-blue-700 focus:ring-2 focus:ring-blue-700'
              /**
               * ❌❌ Lưu ý: ❌❌
               * - Nếu chúng ta truyền kiểu này: onClick ={startEdit()}
               * => Điều này có nghĩa là chúng ta đang thực thi cái function startEdit()
               *
               * - Còn khi chúng ta truyền như thế này: onClick={() => startEdit()}
               * => Điều đó có nghĩa là chúng ta truyền 1 cái function startEdit() vào trong onClick,
               * chứ không phải là truyền giá trị return của function
               *
               * ✅ Cái chúng ta mong muốn là truyền 1 cái function vào trong onClick,
               * ✅ chứ không phải là truyền cái giá trị return cảu function
               */
              onClick={() => startEdit(post.id)}
            >
              Edit
            </button>

            <button
              type='button'
              className='rounded-r-lg border-b border-r border-t border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:text-blue-700 focus:ring-2 focus:ring-blue-700'
              /**
               * ❌❌ Lưu ý: ❌❌
               * - Nếu chúng ta truyền kiểu này: onClick ={handleDeletePost()}
               * => Điều này có nghĩa là chúng ta đang thực thi cái function
               *
               * - Còn khi chúng ta truyền như thế này: onClick={() => handleDeletePost()}
               * => Điều đó có nghĩa là chúng ta truyền 1 cái function vào trong onClick,
               * chứ không phải là truyền giá trị return của function
               *
               * ✅ Cái chúng ta mong muốn là truyền 1 cái function vào trong onClick,
               * ✅ chứ không phải là truyền cái giá trị return cảu function
               */
              onClick={() => handleDeletePost(post.id)}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
