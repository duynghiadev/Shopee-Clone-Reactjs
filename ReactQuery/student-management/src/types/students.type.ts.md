## Đây là phần giải thích code:

👉 Đoạn 1:

```jsx
export interface Student {
  id: number
  first_name: string
  last_name: string
  email: string
  gender: string
  country: string
  avatar: string
  btc_address: string
}
```

---

👉 Đoạn 2:

```jsx
export type Students = Pick<Student, 'id' | 'email' | 'avatar' | 'last_name'>[]
```

---
