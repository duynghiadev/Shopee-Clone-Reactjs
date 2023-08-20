import React from 'react'
import './productList.css'
import styles from './productList.module.scss'

export default function ProductList() {
  return (
    <div className='container'>
      ProductList
      <div className={styles.productList}>
        <div className={styles.productItem}>Item</div>
        <div className={styles.productItem}>Item</div>
        <div className={styles.productItem}>Item</div>
        <div className={styles.productItem}>Item</div>
      </div>
    </div>
  )
}
