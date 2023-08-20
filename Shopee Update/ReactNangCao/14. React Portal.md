# React Portal

Chúng ta dùng React Portal để tạo ra những component nằm trong bất kỳ vị trí nào trên page của chúng ta. Rất có ích khi dùng với Modal, Popup

```jsx
ReactDOM.createPortal(child, container)
```

Ví dụ

```jsx
import { createPortal } from 'react-dom'
import styles from './confirm.module.scss'

interface ConfirmProps {
  visible: boolean
  ok: () => void
  cancel: () => void
}

const root = document.getElementById('root') as HTMLElement

export default function Confirm({ visible, ok, cancel }: ConfirmProps) {
  const handleOk = () => {
    ok()
  }

  const handleCancel = () => {
    cancel()
  }

  return createPortal(
    <div className={styles.modalRoot} style={{ visibility: visible ? 'visible' : 'hidden' }}>
      <div className={styles.overlay}></div>
      <div className={styles.container}>
        <div className={styles.confirm}>
          <p className={styles.title}>Are you sure?</p>
          <button onClick={handleOk}>OK</button>
          <button onClick={handleCancel}>Cancel</button>
        </div>
      </div>
    </div>,
    root
  )
}
```
