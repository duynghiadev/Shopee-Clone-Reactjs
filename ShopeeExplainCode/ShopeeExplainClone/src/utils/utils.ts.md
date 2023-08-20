# Dưới đây là phần giải thích code chi tiết trong file utils.ts

```jsx
import axios, { AxiosError } from 'axios'
import config from 'src/constants/config'
import HttpStatusCode from 'src/constants/httpStatusCode.enum'
import userImage from 'src/assets/images/user.svg'
import { ErrorResponse } from 'src/types/utils.type'
```

---

```jsx
export function isAxiosError<T>(error: unknown): error is AxiosError<T> {
  // eslint-disable-next-line import/no-named-as-default-member
  return axios.isAxiosError(error)
}
```

---

```jsx
export function isAxiosUnprocessableEntityError<FormError>(error: unknown): error is AxiosError<FormError> {
  return isAxiosError(error) && error.response?.status === HttpStatusCode.UnprocessableEntity
}
```

---

```jsx
export function isAxiosUnauthorizedError<UnauthorizedError>(error: unknown): error is AxiosError<UnauthorizedError> {
  return isAxiosError(error) && error.response?.status === HttpStatusCode.Unauthorized
}
```

---

```jsx
export function isAxiosExpiredTokenError<UnauthorizedError>(error: unknown): error is AxiosError<UnauthorizedError> {
  return (
    isAxiosUnauthorizedError<ErrorResponse<{ name: string; message: string }>>(error) &&
    error.response?.data?.data?.name === 'EXPIRED_TOKEN'
  )
}
```

---

```jsx
export function formatCurrency(currency: number) {
  return new Intl.NumberFormat('de-DE').format(currency)
}
```

---

```jsx
export function formatNumberToSocialStyle(value: number) {
  return new Intl.NumberFormat('en', {
    notation: 'compact',
    maximumFractionDigits: 1
  })
    .format(value)
    .replace('.', ',')
    .toLowerCase()
}
```

---

```jsx
export const rateSale = (original: number, sale: number) => Math.round(((original - sale) / original) * 100) + '%'
```

---

```jsx
const removeSpecialCharacter = (str: string) =>
  // eslint-disable-next-line no-useless-escape
  str.replace(/!|@|%|\^|\*|\(|\)|\+|\=|\<|\>|\?|\/|,|\.|\:|\;|\'|\"|\&|\#|\[|\]|~|\$|_|`|-|{|}|\||\\/g, '')
```

---

```jsx
export const generateNameId = ({ name, id }: { name: string, id: string }) => {
  return removeSpecialCharacter(name).replace(/\s/g, '-') + `-i-${id}`
}
```

---

```jsx
export const getIdFromNameId = (nameId: string) => {
  const arr = nameId.split('-i-')
  return arr[arr.length - 1]
}
```

---

```jsx
export const getAvatarUrl = (avatarName?: string) => (avatarName ? `${config.baseUrl}images/${avatarName}` : userImage)
```

---
