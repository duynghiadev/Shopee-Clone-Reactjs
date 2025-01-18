import { useEffect, useState } from 'react'

interface UserType {
  id: number
  first_name: string
  last_name: string
}

export default function User() {
  const [users, setUsers] = useState<UserType[]>([])

  useEffect(() => {
    let ignore = false
    console.log('useEffect')
    fetch('https://reqres.in/api/users?page=2')
      .then((res) => {
        return new Promise((resolve) => {
          setTimeout(() => {
            resolve(res.json())
          }, 2000)
        })
      })
      .then((res: any) => {
        if (!ignore) {
          console.log(res)
          setUsers(res.data)
        }
      })
    return () => {
      ignore = true
    }
  }, [])

  useEffect(() => {
    function handleScroll(event: Event) {
      console.log(event)
    }
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div>
      <h1>User list</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.first_name + ' ' + user.last_name}</li>
        ))}
      </ul>
    </div>
  )
}
