/**
 * Đây là code viết bình thường
 */

// import { useEffect, useState } from 'react'
// import styles from './todoList.module.scss'
// import TaskInput from '../TaskInput'
// import TaskList from '../TaskList'
// import { Todo } from '../../@types/todo.type'

// // Solution 1: Declare interface
// // interface HandleNewTodos {
// //   (todos: Todo[]): Todo[]
// // }

// // Solution 2: Declare type
// type HandleNewTodos = (todos: Todo[]) => Todo[]

// const syncReactToLocal = (handleNewTodos: HandleNewTodos) => {
//   const todosString = localStorage.getItem('todos')
//   const todosObj: Todo[] = JSON.parse(todosString || '[]')
//   const newTodosObj = handleNewTodos(todosObj)
//   localStorage.setItem('todos', JSON.stringify(newTodosObj))
// }

// export default function TodoList() {
//   const [todos, setTodos] = useState<Todo[]>([])
//   const [currentTodo, setCurrentTodo] = useState<Todo | null>(null)

//   const doneTodos = todos.filter((todo) => todo.done)
//   const notDoneTodos = todos.filter((todo) => !todo.done)

//   useEffect(() => {
//     const todosString = localStorage.getItem('todos')
//     const todosObj: Todo[] = JSON.parse(todosString || '[]')
//     setTodos(todosObj)
//   }, [])

//   const addTodo = (name: string) => {
//     const todo: Todo = {
//       name,
//       done: false,
//       id: new Date().toISOString()
//     }
//     setTodos((prev) => [...prev, todo])
//     syncReactToLocal((todosObj: Todo[]) => [...todosObj, todo])
//   }

//   const handleDoneTodo = (id: string, done: boolean) => {
//     setTodos((prev) => {
//       return prev.map((todo) => {
//         if (todo.id === id) {
//           return { ...todo, done }
//         }
//         return todo
//       })
//     })
//   }

//   const startEditTodo = (id: string) => {
//     const findedTodo = todos.find((todo) => todo.id === id)
//     if (findedTodo) {
//       setCurrentTodo(findedTodo)
//     }
//   }

//   const editTodo = (name: string) => {
//     setCurrentTodo((prev) => {
//       if (prev) return { ...prev, name }
//       return null
//     })
//   }

//   const finishEditTodo = () => {
//     const handler = (todoObj: Todo[]) => {
//       return todoObj.map((todo) => {
//         if (todo.id === (currentTodo as Todo).id) {
//           return currentTodo as Todo
//         }
//         return todo
//       })
//     }

//     setTodos(handler)
//     setCurrentTodo(null)
//     syncReactToLocal(handler)
//   }

//   const deleteTodo = (id: string) => {
//     if (currentTodo) {
//       setCurrentTodo(null)
//     }

//     const handler = (todoObj: Todo[]) => {
//       const findedIndexTodo = todoObj.findIndex((todo) => todo.id === id)
//       if (findedIndexTodo > -1) {
//         const result = [...todoObj]
//         result.splice(findedIndexTodo, 1)
//         return result
//       }
//       return todoObj
//     }

//     setTodos(handler)
//     syncReactToLocal(handler)
//   }

//   return (
//     <div className={styles.todoList}>
//       <div className={styles.todoListContainer}>
//         <TaskInput addTodo={addTodo} currentTodo={currentTodo} editTodo={editTodo} finishEditTodo={finishEditTodo} />
//         <TaskList
//           todos={notDoneTodos}
//           handleDoneTodo={handleDoneTodo}
//           startEditTodo={startEditTodo}
//           deleteTodo={deleteTodo}
//         />
//         <TaskList
//           doneTaskList
//           todos={doneTodos}
//           handleDoneTodo={handleDoneTodo}
//           startEditTodo={startEditTodo}
//           deleteTodo={deleteTodo}
//         />
//       </div>
//     </div>
//   )
// }

/**
 * Đây là code viết sử dụng hook useReducer
 */
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
