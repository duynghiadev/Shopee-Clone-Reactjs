import React, { useEffect, useRef, useState } from 'react'

function WatchTimer() {
  const [seconds, setSeconds] = useState<number>(0)
  const intervalRef = useRef<any>(null)

  useEffect(() => {
    console.log('Chạy 1 lần !!')

    intervalRef.current = setInterval(() => {
      setSeconds((prev) => prev + 1)
      console.log('setInterval đang chạy !!')
    }, 1000)

    return () => {
      clearInterval(intervalRef.current)
      console.log('WatchTimer unmount')
    }
  }, [])

  return <div>Watch: {seconds}</div>
}

export default function Watch() {
  const [visible, setVisible] = useState<boolean>(true)

  return (
    <div>
      <button onClick={() => setVisible((prev) => !prev)}>Set Visible Watch Timer</button>
      {visible && <WatchTimer />}
    </div>
  )
}
