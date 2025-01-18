import React, { useState, useEffect } from 'react'
import { flushSync } from 'react-dom'

export default function AutoBatching() {
  const [count, setCount] = useState(1)
  const [flag, setFlag] = useState(false)

  function handleClick() {
    flushSync(() => {
      setCount((c) => c + 1)
    })
    flushSync(() => {
      setFlag((f) => !f)
    })

    // React will only re-render once at the end (that's batching!)
  }

  // useEffect(() => {
  //   setTimeout(() => {
  //     flushSync(() => {
  //       setCount((c) => c + 1)
  //     })
  //     flushSync(() => {
  //       setFlag((f) => !f)
  //     })

  //     // React will only re-render once at the end (that's batching!)
  //   }, 1000)
  // }, [])

  console.log('render')

  return (
    <div>
      <button onClick={handleClick}>Click here</button>
      AutoBatching
    </div>
  )
}
