import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import styles from './todoList.module.scss'
import TaskInput from '../TaskInput'
import TaskList from '../TaskList'
import { Todo } from '../../@types/todo.type'

export default function TodoList() {
  const [todos, setTodos] = useState<Todo[]>([])

  const addTodo = (name: string) => {
    const newTodo: Todo = {
      id: uuidv4(),
      name,
      done: false
    }
    setTodos([...todos, newTodo])
  }

  const editTodo = (id: string, newName: string) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, name: newName }
      }
      return todo
    })
    setTodos(newTodos)
  }

  const handleDoneTodo = (id: string, done: boolean) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, done }
      }
      return todo
    })
    setTodos(newTodos)
  }

  const startEditTodo = (id: string) => {
    const editingTodo = todos.find((todo) => todo.id === id)
    if (editingTodo) {
      setCurrentTodoInEditing(editingTodo)
    }
  }

  const deleteTodo = (id: string) => {
    const newTodos = todos.filter((todo) => todo.id !== id)
    setTodos(newTodos)
  }

  const finishEditTodo = () => {
    if (currentTodoInEditing) {
      editTodo(currentTodoInEditing.id, currentTodoInEditing.name)
      setCurrentTodoInEditing(null)
    }
  }

  const [currentTodoInEditing, setCurrentTodoInEditing] = useState<Todo | null>(null)

  return (
    <div className={styles.container}>
      <TaskInput
        addTodo={addTodo}
        editTodo={(newName: string) => {
          if (currentTodoInEditing) {
            setCurrentTodoInEditing({ ...currentTodoInEditing, name: newName })
          }
        }}
        finishEditTodo={finishEditTodo}
        currentTodo={currentTodoInEditing}
      />
      <TaskList
        doneTaskList={false}
        todos={todos.filter((todo) => !todo.done)}
        handleDoneTodo={handleDoneTodo}
        startEditTodo={startEditTodo}
        deleteTodo={deleteTodo}
      />
      <TaskList
        doneTaskList={true}
        todos={todos.filter((todo) => todo.done)}
        handleDoneTodo={handleDoneTodo}
        startEditTodo={startEditTodo}
        deleteTodo={deleteTodo}
      />
    </div>
  )
}
