import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increase, decrease } from './counter.slice'

export default function Counter() {
  const count = useSelector(state => state.counter.count)
  const dispatch = useDispatch()
  return (
    <div>
      <button onClick={() => dispatch(decrease())}>Giảm</button>
      <div>{count}</div>
      <button onClick={() => dispatch(increase())}>Tăng</button>
    </div>
  )
}
