import useUser from '../useUser'

export default function Cart() {
  // const [user, setUser] = useState({})

  // useEffect(() => {
  //   getUser().then((res) => {
  //     setUser(res.data)
  //   })
  // }, [])

  const user = useUser({})

  return <div>Cart {user?.name}</div>
}
