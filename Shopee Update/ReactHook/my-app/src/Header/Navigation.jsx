import useUser from '../useUser'

export default function Navigation() {
  const user = useUser({})

  return <div>Navigation {user?.name}</div>
}
