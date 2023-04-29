import { useReducer } from 'react'
import PropTypes from 'prop-types'
import { Todo } from '../../@types/todo.type'
import styles from './taskInput.module.scss'
import { TodoTypes } from '../../PropTypes/todo.proptype'

interface TaskInputProps {
  addTodo: (name: string) => void
  editTodo: (name: string) => void
  finishEditTodo: () => void
  currentTodo: Todo | null
}

type TaskInputState = {
  name: string
}

type TaskInputAction = { type: 'SET_NAME'; payload: string } | { type: 'RESET_NAME' }

const initialState: TaskInputState = {
  name: ''
}

function taskInputReducer(state: TaskInputState, action: TaskInputAction): TaskInputState {
  switch (action.type) {
    case 'SET_NAME':
      return {
        ...state,
        name: action.payload
      }
    case 'RESET_NAME':
      return initialState
    default:
      return state
  }
}

export default function TaskInput(props: TaskInputProps) {
  const { addTodo, currentTodo, editTodo, finishEditTodo } = props

  const [state, dispatch] = useReducer(taskInputReducer, initialState)

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (currentTodo) {
      finishEditTodo()
      dispatch({ type: 'RESET_NAME' })
    } else {
      addTodo(state.name)
      dispatch({ type: 'RESET_NAME' })
    }
  }

  const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target
    if (currentTodo) {
      editTodo(value)
    } else {
      dispatch({ type: 'SET_NAME', payload: value })
    }
  }

  return (
    <div className='mb-2'>
      <h1 className={styles.title}>To do list typescript</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          type='text'
          placeholder='caption goes here'
          value={currentTodo ? currentTodo.name : state.name}
          onChange={onChangeInput}
        />
        <button type='submit'>{currentTodo ? '✔️' : '➕'}</button>
      </form>
    </div>
  )
}

TaskInput.propTypes = {
  addTodo: PropTypes.func.isRequired,
  editTodo: PropTypes.func.isRequired,
  finishEditTodo: PropTypes.func.isRequired,
  currentTodo: PropTypes.oneOfType([TodoTypes, PropTypes.oneOf([null])])
}
