import { forwardRef, useEffect, useImperativeHandle, useRef, useState } from 'react'

const Input = forwardRef<{ type: () => void }>((props, ref) => {
  const [value, setValue] = useState<string>('')
  const inputRef = useRef<HTMLInputElement>(null)
  const type = () => {
    let numberIndex = 0
    const initalString = 'Dư Thanh Được'
    inputRef.current?.focus()

    let interval: any = setInterval(() => {
      setValue(initalString.slice(0, numberIndex))
      if (numberIndex === initalString.length) {
        return clearInterval(interval)
      }
      numberIndex++
    }, 100)
  }
  useImperativeHandle(ref, () => {
    return {
      type
    }
  })

  return <input type='text' placeholder='type something' value={value} onChange={() => {}} ref={inputRef} />
})

export default function AutoInput() {
  const funcInputRef = useRef<{ type: () => void }>({ type: () => {} })
  const handleClick = () => {
    funcInputRef.current.type()
  }
  return (
    <div>
      <div>
        <button onClick={handleClick}>Click to type</button>
      </div>
      <Input ref={funcInputRef} />
    </div>
  )
}
