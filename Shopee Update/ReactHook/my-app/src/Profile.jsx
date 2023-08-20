import { useContext } from 'react'
import { UserContext } from './User'

export default function Profile() {
  const value = useContext(UserContext)
  console.log(value)

  return (
    <ul>
      <li>First Name: {value.firstName}</li>
      <li>Age: {value.age}</li>
      <li>Nation: {value.address.nation}</li>
      <li>Street: {value.address.city.street}</li>
      <li>House: {value.address.city.house}</li>
    </ul>
  )
}
