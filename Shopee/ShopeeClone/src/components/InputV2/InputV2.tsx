import { InputHTMLAttributes, useState } from 'react'
import { FieldValues, FieldPath, useController, UseControllerProps } from 'react-hook-form'

export type InputNumberProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
> = {
  classNameInput?: string
  classNameError?: string
} & InputHTMLAttributes<HTMLInputElement> &
  UseControllerProps<TFieldValues, TName>

function InputV2<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
>(props: InputNumberProps<TFieldValues, TName>) {
  const {
    type,
    onChange,
    className,
    classNameInput = 'p-3 w-full outline-none border border-gray-300 focus:border-gray-500 rounded-sm focus:shadow-sm',
    classNameError = 'mt-1 text-red-600 min-h-[1.25rem] text-sm',
    value = '',
    ...rest
  } = props
  const { field, fieldState } = useController(props)
  const [localValue, setLocalValue] = useState<string>(field.value)

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const valueFromInput = event.target.value
    const numberCondition = type === 'number' && (/^\d+$/.test(valueFromInput) || valueFromInput === '')
    if (numberCondition || type !== 'number') {
      // Cập nhật localValue state
      setLocalValue(valueFromInput)
      // Gọi field.onChange để cập nhật vào state React Hook Form
      field.onChange(event)
      // Thực thi onChange callback từ bên ngoài truyền vào props
      onChange && onChange(event)
    }
  }

  return (
    <div className={className}>
      <input className={classNameInput} {...rest} {...field} onChange={handleChange} value={value || localValue} />
      <div className={classNameError}>{fieldState.error?.message}</div>
    </div>
  )
}

export default InputV2

// type Gen<TFunc> = {
//   getName: TFunc
// }

// // eslint-disable-next-line @typescript-eslint/no-unused-vars
// function Hexa<TFunc extends () => string, TLastName extends ReturnType<TFunc>>(props: {
//   person: Gen<TFunc>
//   lastName: TLastName
// }) {
//   return null
// }

// const handleName: () => 'Duoc' = () => 'Duoc'

// function App() {
//   return <Hexa person={{ getName: handleName }} lastName='Duoc' />
// }
