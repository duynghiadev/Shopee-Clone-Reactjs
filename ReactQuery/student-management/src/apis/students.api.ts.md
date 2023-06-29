## Đây là phần giải thích code:

👉 Đoạn 1:

```jsx
import { Students, Student } from 'types/students.type'
import http from 'utils/http'
```

---

👉 Đoạn 2:

```jsx
export const getStudents = (page: number | string, limit: number | string, signal?: AbortSignal) =>
  http.get <
  Students >
  ('students',
  {
    params: {
      _page: page,
      _limit: limit
    },
    signal
  })
```

---

👉 Đoạn 3:

```jsx
export const getStudent = (id: number | string) => http.get < Student > `students/${id}`
```

---

👉 Đoạn 4:

```jsx
export const addStudent = (student: Omit<Student, 'id'>) => http.post < Student > ('/students', student)
```

👉 Đoạn 5:

```jsx
export const updateStudent = (id: number | string, student: Student) => http.put < Student > (`students/${id}`, student)
```

---

👉 Đoạn 6:

```jsx
export const deleteStudent = (id: number | string) => http.delete < {} > `students/${id}`
```

---
