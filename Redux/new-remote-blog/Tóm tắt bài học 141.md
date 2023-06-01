❌❌❌❌ Bổ sung thêm khái niệm cho Docs ❌❌❌❌

## Xử lý lỗi trong RTK Query ?

-

## Sẽ có 2 kiểu lỗi FetchBaseQueryError và SerializedError:

- Cách xử lý 2 lỗi đó như thế nào ?

-

## Quy ước lỗi trả về từ Server và RTK Query ?

-

## Cách hiển thị lỗi message bằng Middleware ?

-

## Type predicate trong redux được gọi là gì ?

- Trong Redux, các hàm kiểm tra kiểu được sử dụng để thu hẹp kiểu của một biến được gọi là "`type predicate`". `Type predicate` cho phép chúng ta xác định kiểu cụ thể của một biến dựa trên các điều kiện logic.

- `Type predicate` thường được sử dụng trong Redux để kiểm tra kiểu của các action hoặc lỗi (error) trong reducers hoặc các hàm xử lý liên quan. Điều này giúp chúng ta xác định rõ ràng các kiểu dữ liệu mà reducers có thể xử lý và thực hiện các hành động tương ứng.

- Ví dụ, trong Redux Toolkit, chúng ta có thể sử dụng `type predicate` để kiểm tra kiểu của một action như sau:

```jsx
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface User {
  id: string;
  name: string;
}

interface UserState {
  currentUser: User | null;
}

const initialState: UserState = {
  currentUser: null
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setCurrentUser: (state, action: PayloadAction<User>) => {
      state.currentUser = action.payload
    }
  }
})

export const { setCurrentUser } = userSlice.actions

export default userSlice.reducer

// Sử dụng type predicate để kiểm tra kiểu của action
function userReducer(state: UserState, action: any) {
  if (setCurrentUser.match(action)) {
    // Thực hiện xử lý khi action có kiểu là setCurrentUser
    return {
      ...state,
      currentUser: action.payload
    }
  }
  // Xử lý các action khác
  return state
}
```

=> Trong ví dụ trên, `setCurrentUser.match(action)` được sử dụng để kiểm tra nếu action có kiểu là `setCurrentUser`. Nếu điều kiện đúng, chúng ta có thể thực hiện xử lý tương ứng.

❌❌❌❌ Đây là Docs của Được Dev ❌❌❌❌

## Sau khi học xong bài học `140. Xử lý lỗi trong RTK Query` ta tóm tắt lại bài học như sau:

- Xử lý lỗi là một phần rất quan trọng trong việc phát triển phần mềm, video này chúng ta sẽ thực hiện việc handle error liên quan đến add post và update post nhé

- Trong video này các bạn sẽ học được:

  - Mô hình phân chia và xử lý lỗi trong React như thế nào
  - Học được cách sử dụng type predicate
  - Xử lý lỗi trong RTK Query theo từng case: Từ server, từ lỗi code
  - Fix vấn đề bị gọi lại API khi submit error
