import { useParams, useOutletContext } from 'react-router-dom'
export default function StaffItem() {
  const { id } = useParams()
  // const context = useOutletContext()
  // console.log(context)
  return <div>StaffItem {id}</div>
}
