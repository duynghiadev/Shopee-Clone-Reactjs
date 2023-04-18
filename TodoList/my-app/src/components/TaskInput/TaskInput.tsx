import React from 'react'
import styles from './taskInput.module.scss'

export default function TaskInput() {
  return (
    <div className='mb-2'>
      <h1 className={styles.title}>Todo List typescript</h1>
      <form className={styles.form}>
        <input type='text' placeholder='caption goes here' />
        <button type='submit'>➕</button>
      </form>
    </div>
  )
}
