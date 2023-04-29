## Hãy định nghĩa Reducer là gì ? Dispatch là gì ? Payload là gì ? Action là gì trong Reactjs ?

- 👉 **`Reducer`**: Là một hàm xử lý để cập nhật `state` trong React. Nó nhận vào hai tham số là `state` hiện tại và một `action` mô tả việc thay đổi `state`. `Reducer` sẽ xử lý `action` đó và trả về một `state` mới. `Reducer` luôn trả về một `state` mới, không thay đổi trực tiếp `state` hiện tại.

- 👉 **`Dispatch`**: Là một hàm có nhiệm vụ gửi một `action` đến `reducer` để xử lý và cập nhật `state`. Nó được sử dụng để gửi các `action` thông qua `store` trong `Redux`. Trong React, chúng ta có thể sử dụng hook `useReducer` để tạo ra một `reducer` và `dispatch` tương ứng với nó.

- 👉 **`Payload`**: Là một thuộc tính của `action`, đại diện cho dữ liệu cần gửi đến `reducer` để xử lý. `Payload` thường chứa các thông tin cần thiết để cập nhật `state`.

- 👉 **`Action`**: Là một đối tượng mô tả sự kiện xảy ra trong ứng dụng, ví dụ như thêm một phần tử vào danh sách, xóa một phần tử, cập nhật một phần tử, và nó được gửi đến `reducer` thông qua `dispatch` để xử lý và cập nhật `state`. `Action` thường bao gồm một thuộc tính `type` để định danh loại `action`, cùng với các thuộc tính khác tùy thuộc vào từng trường hợp sử dụng. `type` dùng để xác định loại hành động `(action)` được thực hiện bởi `reducer` để cập nhật lại `state`. Bên cạnh `type`, `payload` là một thuộc tính quan trọng khác của `action`, chứa dữ liệu được sử dụng để thay đổi `state`.

## useReducer là gì ?

- 👉 `useReducer` là một hook dùng để gom logic các `useState` lại với nhau thành một chỗ. `useReducer` có cơ chế hoạt động tương đồng như `Redux`, vậy nên học `useReducer` thì qua `Redux` lại rất dễ.

Đối với `useState` thì muốn cập nhật state ta cần

1. gọi set state function với value mới
2. state đã cập nhật

Đối với `useReducer` thì dài hơn 1 tí

1. Gọi dispatch function với value là action (action có thể là object hoặc string)

2. Reducer tính toán state mới dựa vào action nhận

3. state đã cập nhật

```jsx
const [state, dispatch] = useReducer(reducer, initialArg, init?)
```

- `reducer`: là một function dạng

```jsx
function reducer(state, action) {
  // ...
}
```

- `initialArg` là giá trị state khởi tạo, tương tự bên `useState(initialArg)`. Vì vậy nên behavior tương tượng bên useState, tránh gọi function bên trong này để không bị gọi liên tục mỗi lần re-render: `useReducer(reducer, caculate(initialArg))`

- `init`: Đây là optional, nó là một function, nếu truyền vào thì khi `useReducer` được gọi, giá trị khởi tạo của bạn sẽ là `init(initialArg)`, còn không thì là `initialArg` thôi!

## Cách dùng

```jsx
import { useReducer } from "react";

function reducer(state, action) {
  if (action.type === "incremented_age") {
    return {
      age: state.age + 1,
    };
  }
  throw Error("Unknown action.");
}

export default function Counter() {
  const [state, dispatch] = useReducer(reducer, { age: 42 });

  return (
    <>
      <button
        onClick={() => {
          dispatch({ type: "incremented_age" });
        }}
      >
        Increment age
      </button>
      <p>Hello! You are {state.age}.</p>
    </>
  );
}
```

## Một số lỗi cần tránh khi làm việc với `useReducer`

Thực ra là lỗi chung khi làm việc với react, chứ không riêng reducer, nếu anh em làm với state thì cũng bị lỗi thôi.

### Log `state` rồi nhưng tại sao ra giá trị cũ?

Gọi `dispatch` function nhưng không change state?

```jsx
function handleClick() {
  console.log(state.age); // 42

  dispatch({ type: "incremented_age" }); // Request a re-render with 43
  console.log(state.age); // Still 42!

  setTimeout(() => {
    console.log(state.age); // Also 42!
  }, 5000);
}
```

Một lần nữa, cơ chế nó giống set state thôi, các bạn có thể hiểu như là nó **bất đồng bộ** (nhưng thực ra nó phức tạp hơn thế, nó sử dụng cơ chế closure).

Muốn nhận được giá trị thì có thể thử cách này

```jsx
const action = { type: "incremented_age" };
dispatch(action);

const nextState = reducer(state, action);
console.log(state); // { age: 42 }
console.log(nextState); // { age: 43 }
```

### `Dispatch` rồi nhưng screen không cập nhật

Mutate state trong react thì bị nghiêm cấm!

```jsx
function reducer(state, action) {
  switch (action.type) {
    case "incremented_age": {
      // 🚩 Wrong: mutating existing object
      state.age++;
      return state;
    }
    case "changed_name": {
      // 🚩 Wrong: mutating existing object
      state.name = action.nextName;
      return state;
    }
    // ...
  }
}
```

Hãy trả về một object mới thay vì mutate

```jsx
function reducer(state, action) {
  switch (action.type) {
    case "incremented_age": {
      // ✅ Correct: creating a new object
      return {
        ...state,
        age: state.age + 1,
      };
    }
    case "changed_name": {
      // ✅ Correct: creating a new object
      return {
        ...state,
        name: action.nextName,
      };
    }
    // ...
  }
}
```

# Đây là phần bổ sung thêm:

## `Dispatch` là gì ?

- 👉 Trong ReactJS, `"dispatch"` được dịch sang tiếng Việt là "phát đi" hoặc "gửi đi". Nó là một phương thức được cung cấp bởi hook `useReducer` để gửi một `action` đến `reducer` function, từ đó thay đổi `state` của component. Khi `dispatch` được gọi, nó sẽ gửi một object `action` với thuộc tính type định nghĩa loại hành động và thuộc tính payload chứa dữ liệu liên quan đến hành động đó. `Reducer` function sẽ nhận được `action` này và dựa trên `type của action` để thay đổi `state` và trả về `state` mới.

- 👉 Trong ReactJS, `dispatch` thường được sử dụng với `useReducer` hook để quản lý trạng thái của ứng dụng. `useReducer` cho phép chúng ta sử dụng reducer để cập nhật trạng thái của ứng dụng và trả về một mảng chứa trạng thái mới và phương thức `dispatch`.

```jsx
import React, { useReducer } from "react";

const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      Count: {state.count}
      <button onClick={() => dispatch({ type: "increment" })}>+</button>
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
    </>
  );
}

export default Counter;
```

- 👉 Trong ví dụ này, chúng ta sử dụng `useReducer` để quản lý trạng thái của đối tượng `Counter`. Reducer nhận vào một action và trả về trạng thái mới của ứng dụng, sau đó phương thức `dispatch` được sử dụng để gửi action tới reducer khi người dùng nhấn vào nút "+" hoặc "-" để tăng hoặc giảm giá trị của đối tượng `count`.

## `Action` trong reactjs được gọi là gì ? cho ví dụ và giải thích code chi tiết ?

- 👉 Trong ReactJS, `action` là một đối tượng `JavaScript`, chứa thông tin về sự kiện đã xảy ra và cần được xử lý bởi `reducer`. `Action` có một thuộc tính bắt buộc là `type` để xác định loại sự kiện và các thuộc tính khác để cung cấp thông tin về sự kiện đó. `Action` thường được tạo ra thông qua các hàm gọi là `Action Creators`.

**1. - 👉 Ví dụ về một `action` trong ReactJS:**

```jsx
const addTodo = (text) => ({
  type: "ADD_TODO",
  payload: {
    text,
    completed: false,
  },
});
```

- 👉 Trong ví dụ này, `addTodo` là một `Action Creator`, được sử dụng để tạo ra một `action` có `type` là `'ADD_TODO'` và `payload` chứa thông tin về một công việc mới cần được thêm vào danh sách công việc.

- 👉 Khi `action` này được gửi đến `reducer` thông qua hàm `dispatch`, `reducer` sẽ xác định loại `action` và thực hiện các thay đổi cần thiết trên `state`.

**2. - 👉 Ví dụ về việc sử dụng `action` trong ReactJS:**

- 👉 Định nghĩa lại khái niệm `Action` cho nhớ:

  - 👉 Trong ReactJS, `action` là một đối tượng `JavaScript`, chứa thông tin về sự kiện đã xảy ra và cần được xử lý bởi `reducer`. `Action` có một thuộc tính bắt buộc là `type` để xác định loại sự kiện và các thuộc tính khác để cung cấp thông tin về sự kiện đó. `Action` thường được tạo ra thông qua các hàm gọi là `Action Creators`.

- 👇 Dưới đây là ví dụ về `Action`:

```jsx
const initialState = {
  todos: [],
};

function todosReducer(state, action) {
  switch (action.type) {
    case "ADD_TODO":
      return {
        todos: [...state.todos, action.payload],
      };
    case "TOGGLE_TODO":
      return {
        todos: state.todos.map((todo) => {
          if (todo.id === action.payload) {
            return { ...todo, completed: !todo.completed };
          } else {
            return todo;
          }
        }),
      };
    default:
      return state;
  }
}

function TodoList() {
  const [state, dispatch] = useReducer(todosReducer, initialState);

  function handleAddTodo() {
    const text = prompt("Enter todo text");
    dispatch(addTodo(text));
  }

  return (
    <div>
      <ul>
        {state.todos.map((todo) => (
          <li key={todo.id}>
            {todo.text}
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() =>
                dispatch({ type: "TOGGLE_TODO", payload: todo.id })
              }
            />
          </li>
        ))}
      </ul>
      <button onClick={handleAddTodo}>Add Todo</button>
    </div>
  );
}
```

- 👉 Đoạn code trên định nghĩa một ứng dụng Todo List đơn giản, sử dụng React và Hook `useReducer` để quản lý trạng thái của ứng dụng.

- 👉 Trong initialSt`a`te, ta định nghĩa một mảng todos rỗng để lưu trữ danh sách các Todo.

```jsx
const initialState = {
  todos: [],
};
```

- 👉 `ADD_TODO`: thêm một todo mới vào danh sách bằng cách sử dụng toán tử `spread` để sao chép tất cả các todos hiện tại và thêm todo mới vào cuối mảng.

- 👉 `TOGGLE_TODO`: thay đổi trạng thái của một todo đã có (đã hoàn thành hoặc chưa hoàn thành) bằng cách tìm kiếm todo theo id và trả về một đối tượng mới với trạng thái hoàn thành ngược lại. Nếu không tìm thấy todo với id tương ứng thì trả về todo ban đầu.

```jsx
function todosReducer(state, action) {
  switch (action.type) {
    case "ADD_TODO":
      return {
        todos: [...state.todos, action.payload],
      };
    case "TOGGLE_TODO":
      return {
        todos: state.todos.map((todo) => {
          if (todo.id === action.payload) {
            return { ...todo, completed: !todo.completed };
          } else {
            return todo;
          }
        }),
      };
    default:
      return state;
  }
}
```

- 👉 Trong hàm TodoList, ta sử dụng Hook `useReducer` để khởi tạo một `state` và một `dispatch` để gọi `reducer`. `state` chứa danh sách todos và sẽ được cập nhật mỗi khi `reducer` được gọi. `dispatch` là một hàm được sử dụng để gọi `reducer` và truyền một `action` vào đó.

```jsx
function TodoList() {
  const [state, dispatch] = useReducer(todosReducer, initialState);
```

- 👉 Sau đó, component TodoList định nghĩa một hàm `handleAddTodo` để xử lý việc thêm công việc mới vào danh sách. Hàm này sử dụng hàm `dispatch` để gửi một hành động `"ADD_TODO"` đến `reducer` với đối số là nội dung của công việc mới được nhập vào từ hộp thoại `prompt`.

```jsx
function handleAddTodo() {
  const text = prompt("Enter todo text");
  dispatch({
    type: "ADD_TODO",
    payload: { id: uuidv4(), text, completed: false },
  });
}
```

- 👉 Trong phần `render`, ta hiển thị danh sách các todos bằng cách lặp lại `state.todos` và hiển thị thông tin của mỗi `todo` và một `checkbox` để đánh dấu hoàn thành `todo`. Nếu người dùng đánh dấu `checkbox`, một `dispatch` được gọi để thay đổi trạng thái của `todo`. Ta cũng có một nút "`Add Todo"` để thêm một `todo` mới bằng cách gọi hàm `handleAddTodo`. Trong hàm này, ta sử dụng `dispatch` để gọi reducer với một `action` có loại `ADD_TODO` và truyền vào đó nội dung `todo`.

```jsx
return (
  <div>
    <ul>
      {state.todos.map((todo) => (
        <li key={todo.id}>
          {todo.text}
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => dispatch({ type: "TOGGLE_TODO", payload: todo.id })}
          />
        </li>
      ))}
    </ul>
    <button onClick={handleAddTodo}>Add Todo</button>
  </div>
);
```

**- 👉 Ví dụ về việc sử dụng `payload` trong ReactJS:**

- 👉 Trong ReactJS, `"payload"` là một thuộc tính của một `action object`, đại diện cho dữ liệu cần được truyền từ `action` tới `reducer`.

- 👉 **Ví dụ**: Chúng ta có một ứng dụng đếm số lượng sản phẩm được thêm vào giỏ hàng và tính tổng giá trị của các sản phẩm đó. Ta cần cập nhật giỏ hàng khi một sản phẩm được thêm vào. Trong trường hợp này, `payload` sẽ đại diện cho sản phẩm được thêm vào giỏ hàng.

- 👉 Dưới đây là một ví dụ về việc sử dụng `payload` trong ReactJS:

- 👉 Đoạn code này là một ví dụ về việc sử dụng reducer trong React để quản lý `state` cho một chức năng giỏ hàng đơn giản.

- 👉 Ở đây, `initialState` khởi tạo giá trị ban đầu cho `state` của ứng dụng. State được định nghĩa bao gồm giỏ hàng (`cartItems`) và tổng giá trị của các mặt hàng trong giỏ (`totalPrice`).

```jsx
const initialState = {
  cartItems: [],
  totalPrice: 0,
};
```

- 👉 Reducer là một hàm được sử dụng để cập nhật `state`, nhận vào `state` hiện tại và một `action`. Hàm này thực hiện `switch case` để kiểm tra loại `action`, ở đây là `ADD_TO_CART`. Khi `action` được kích hoạt, `reducer` sẽ sao chép `state` hiện tại và cập nhật các giá trị cần thiết để thêm sản phẩm vào giỏ hàng, bao gồm việc thêm sản phẩm vào `cartItems` và tăng tổng giá trị của giỏ hàng lên theo giá trị sản phẩm được thêm vào.

```jsx
function cartReducer(state, action) {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        cartItems: [...state.cartItems, action.payload],
        totalPrice: state.totalPrice + action.payload.price,
      };
    default:
      return state;
  }
}
```

- 👉 Ở đây, Hàm `addToCart` nhận vào một `item`, sau đó gọi hàm `cartDispatch` để gửi một `action` có type là `"ADD_TO_CART"` và `payload` là sản phẩm được thêm vào giỏ hàng. Khi `action` này được `dispatch`, `reducer` sẽ cập nhật giỏ hàng và tính tổng giá trị. Cụ thể, thuộc tính `cartItems` của `state` sẽ được cập nhật bằng cách thêm sản phẩm mới vào mảng `cartItems`, và `totalPrice` sẽ được tăng thêm giá trị của sản phẩm được thêm vào.

```jsx
function addToCart(item) {
  cartDispatch({ type: "ADD_TO_CART", payload: item });
}
```

## Nêu khái niệm về `useReducer` chi tiết và rõ ràng nhất ?

- 👉 `useReducer` là một `hook` của `React` được sử dụng để quản lý `state` của một component bằng cách sử dụng cơ chế `reducer` của Javascript. `Reducer` là một hàm tiền xử lý dữ liệu, nhận vào hai tham số là `state` hiện tại và `action`, và trả về `state` mới sau khi xử lý `action` đó. Trong `useReducer`, chúng ta cần truyền vào `reducer function` và `initial state` để khởi tạo `state` ban đầu.

- 👉 Sau khi khởi tạo `state`, chúng ta có thể sử dụng hàm `dispatch` để `dispatch` một `action` và cập nhật `state`. Hàm `dispatch` sẽ nhận vào một `object action`, `object` này bao gồm hai thuộc tính bắt buộc là `type` (kiểu của `action`) và `payload` (dữ liệu được sử dụng để cập nhật `state`).

- 👉 Khi một `action` được `dispatch`, `reducer` function sẽ được gọi để xử lý `action` và trả về `state` mới. Sau đó, `state` mới này sẽ được lưu trữ và cập nhật vào `state` hiện tại của component.

**Ví dụ:**

```jsx
import React, { useReducer } from "react";

const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
}

export default function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      Count: {state.count}
      <button onClick={() => dispatch({ type: "increment" })}>+</button>
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
    </>
  );
}
```

- 👉 Trong ví dụ này, chúng ta sử dụng `useReducer` để quản lý `state` của component `Counter`. Hàm `reducer` xử lý hai loại `action` là `increment` và `decrement`, và trả về `state` mới tương ứng với mỗi `action`. Trong component `Counter`, chúng ta sử dụng hàm `dispatch` để `dispatch` các `action` khi người dùng click vào nút `tăng` hoặc `giảm` giá trị. Sau khi `state` được cập nhật, React sẽ tự động `render` lại component để cập nhật giao diện.

## Hãy cho 1 vài ví dụ về `useReducer` và `giải thích` code chi tiết, rõ ràng nhất ?

**1. Ví dụ sử dụng useReducer để quản lý giỏ hàng trong ứng dụng mua sắm:**

```jsx
import React, { useReducer } from "react";

const initialState = {
  cartItems: [],
  totalPrice: 0,
};

function cartReducer(state, action) {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        cartItems: [...state.cartItems, action.payload],
        totalPrice: state.totalPrice + action.payload.price,
      };
    case "REMOVE_FROM_CART":
      const newCartItems = state.cartItems.filter(
        (item) => item.id !== action.payload.id
      );
      const newTotalPrice = state.totalPrice - action.payload.price;
      return {
        ...state,
        cartItems: newCartItems,
        totalPrice: newTotalPrice,
      };
    default:
      return state;
  }
}

function ShoppingCart() {
  const [cartState, cartDispatch] = useReducer(cartReducer, initialState);

  function addToCart(item) {
    cartDispatch({ type: "ADD_TO_CART", payload: item });
  }

  function removeFromCart(item) {
    cartDispatch({ type: "REMOVE_FROM_CART", payload: item });
  }

  return (
    <div>
      <h1>Shopping Cart</h1>
      <ul>
        {cartState.cartItems.map((item) => (
          <li key={item.id}>
            {item.name} - {item.price}
            <button onClick={() => removeFromCart(item)}>Remove</button>
          </li>
        ))}
      </ul>
      <h2>Total Price: {cartState.totalPrice}</h2>
      <button
        onClick={() => addToCart({ id: 1, name: "Product A", price: 10 })}
      >
        Add Product A to Cart
      </button>
      <button
        onClick={() => addToCart({ id: 2, name: "Product B", price: 20 })}
      >
        Add Product B to Cart
      </button>
    </div>
  );
}

export default ShoppingCart;
```

- 👉 Trong ví dụ này, chúng ta sử dụng `useReducer` để quản lý giỏ hàng trong ứng dụng mua sắm. Chúng ta khởi tạo `state` ban đầu của giỏ hàng và `reducer function`. `Reducer` function nhận vào `state` hiện tại và `action` được `dispatch` vào, và trả về `state` mới dựa trên `action` đó.

- 👉 Trong `reducer function`, chúng ta sử dụng câu lệnh `switch case` để xử lý các `action` khác nhau, ví dụ như thêm sản phẩm vào giỏ hàng (`ADD_TO_CART`) hoặc xoá sản phẩm khỏi giỏ hàng (`REMOVE_FROM_CART`). Mỗi `action` sẽ có một `payload` đi kèm để cập nhật `state`.

- 👉 Ở component `ShoppingCart`, chúng ta sử dụng `useReducer` để khởi tạo `state` và `reducer function`. Chúng ta sử dụng hàm `dispatch` để `dispatch` các `action` vào `reducer function`. Các `action` được kích hoạt thông qua các hàm `addToCart` và `removeFromCart`. Khi `state` của giỏ hàng được cập nhật, React sẽ tự động render lại component để cập nhật giao diện người dùng.

**👉Giải thích chi tiết hơn**

- 👉 Đây là một component React đơn giản để hiển thị giỏ hàng và cho phép thêm / xóa các sản phẩm khỏi giỏ hàng. Dưới đây là giải thích chi tiết cho từng dòng code:

```jsx
import React, { useReducer } from "react";
```

- 👉 Đây là lệnh import, cho phép sử dụng React và `useReducer` trong file này.

```jsx
const initialState = {
  cartItems: [],
  totalPrice: 0,
};
```

- 👉 Đây là khởi tạo `initial state` cho giỏ hàng với `một mảng rỗng` và `tổng giá trị là 0`.

```jsx
function cartReducer(state, action) {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        cartItems: [...state.cartItems, action.payload],
        totalPrice: state.totalPrice + action.payload.price,
      };
    case "REMOVE_FROM_CART":
      const newCartItems = state.cartItems.filter(
        (item) => item.id !== action.payload.id
      );
      const newTotalPrice = state.totalPrice - action.payload.price;
      return {
        ...state,
        cartItems: newCartItems,
        totalPrice: newTotalPrice,
      };
    default:
      return state;
  }
}
```

- 👉 Đây là `reducer` để thay đổi `state` của giỏ hàng. Nó nhận vào `state` hiện tại và một `action`, sau đó trả về `state` mới. Trong trường hợp này, nó xử lý hai `action` `ADD_TO_CART` và `REMOVE_FROM_CART`. `ADD_TO_CART` thêm một sản phẩm vào giỏ hàng và tăng tổng giá trị của giỏ hàng bởi giá trị của sản phẩm đó. `REMOVE_FROM_CART` loại bỏ một sản phẩm khỏi giỏ hàng và giảm tổng giá trị của giỏ hàng bởi giá trị của sản phẩm đó.

```jsx
function ShoppingCart() {
  const [cartState, cartDispatch] = useReducer(cartReducer, initialState);

  function addToCart(item) {
    cartDispatch({ type: "ADD_TO_CART", payload: item });
  }

  function removeFromCart(item) {
    cartDispatch({ type: "REMOVE_FROM_CART", payload: item });
  }

  return (
    <div>
      <h1>Shopping Cart</h1>
      <ul>
        {cartState.cartItems.map((item) => (
          <li key={item.id}>
            {item.name} - {item.price}
            <button onClick={() => removeFromCart(item)}>Remove</button>
          </li>
        ))}
      </ul>
      <h2>Total Price: {cartState.totalPrice}</h2>
      <button
        onClick={() => addToCart({ id: 1, name: "Product A", price: 10 })}
      >
        Add Product A to Cart
      </button>
      <button
        onClick={() => addToCart({ id: 2, name: "Product B", price: 20 })}
      >
        Add Product B to Cart
      </button>
    </div>
  );
}
```

- 👉 Đoạn code này là một React functional component dùng để hiển thị giỏ hàng. Nó sử dụng hook `useReducer` để quản lý trạng thái của giỏ hàng.

```jsx
const [cartState, cartDispatch] = useReducer(cartReducer, initialState);
```

- 👉 Trong đó, `cartState` là trạng thái hiện tại của giỏ hàng, bao gồm một mảng các sản phẩm `cartItems` và tổng giá tiền `totalPrice`. `cartDispatch` là hàm dispatch để thực hiện các hành động trên giỏ hàng.

```jsx
function addToCart(item) {
  cartDispatch({ type: "ADD_TO_CART", payload: item });
}

function removeFromCart(item) {
  cartDispatch({ type: "REMOVE_FROM_CART", payload: item });
}
```

- 👉 Hai hàm `addToCart` và `removeFromCart` được sử dụng để thêm và xóa sản phẩm khỏi giỏ hàng. Khi được gọi, chúng sẽ dispatch một hành động tương ứng với type `ADD_TO_CART` hoặc `REMOVE_FROM_CART`, và truyền dữ liệu sản phẩm vào payload.

```jsx
return (
  <div>
    <h1>Shopping Cart</h1>
    <ul>
      {cartState.cartItems.map((item) => (
        <li key={item.id}>
          {item.name} - {item.price}
          <button onClick={() => removeFromCart(item)}>Remove</button>
        </li>
      ))}
    </ul>
    <h2>Total Price: {cartState.totalPrice}</h2>
    <button onClick={() => addToCart({ id: 1, name: "Product A", price: 10 })}>
      Add Product A to Cart
    </button>
    <button onClick={() => addToCart({ id: 2, name: "Product B", price: 20 })}>
      Add Product B to Cart
    </button>
  </div>
);
```

- 👉 Phần render của component này hiển thị danh sách sản phẩm trong giỏ hàng, với mỗi sản phẩm có tên và giá cùng một nút "Remove" để xóa sản phẩm khỏi giỏ hàng. Nó cũng hiển thị tổng giá tiền của giỏ hàng và hai nút "Add Product A to Cart" và "Add Product B to Cart" để thêm sản phẩm vào giỏ hàng. Các nút này sử dụng các hàm `addToCart` và `removeFromCart` được định nghĩa trước đó.

## Giải thích đâu là action, đâu là payload ?

- 👉 Trong hàm `cartReducer`, `action` là một object được truyền vào với thuộc tính `type` để xác định hành động được thực hiện và `payload` để chứa dữ liệu cần thiết cho hành động đó.

- 👉 Ví dụ, khi gọi hàm `cartDispatch({ type: 'ADD_TO_CART', payload: item })`, `type` là `ADD_TO_CART` và `payload` là item. Trong `cartReducer`, `action` sẽ được xử lý bằng cách kiểm tra giá trị của `type` và thực hiện các thay đổi tương ứng với `payload`.

- 👉 Ví dụ, ở case `ADD_TO_CART`, `action`.`payload` chứa thông tin của sản phẩm được thêm vào giỏ hàng. Bằng cách truy cập thuộc tính `action`.`payload`.price, ta có thể lấy giá của sản phẩm đó để tính tổng giá trị của giỏ hàng.

- 👉 Ở case `REMOVE_FROM_CART`, `action`.`payload` chứa thông tin của sản phẩm được xoá khỏi giỏ hàng. Bằng cách lấy thuộc tính `action.payload.id`, ta có thể tìm kiếm sản phẩm đó trong giỏ hàng và loại bỏ nó ra khỏi mảng `cartItems`.

- 👉 Và đây là đoạn code có chứa `action` và `payload`:

```jsx
function addToCart(item) {
  cartDispatch({ type: "ADD_TO_CART", payload: item });
}

function removeFromCart(item) {
  cartDispatch({ type: "REMOVE_FROM_CART", payload: item });
}
```

**2.Ví dụ sử dụng `useReducer` để quản lý trạng thái của form:**

- 👉 Đây là một ví dụ về cách sử dụng `useReducer` để quản lý trạng thái của một form đăng ký với các trường tên, `email` và `mật khẩu`.

- 👉 Trước tiên, chúng ta sẽ khai báo `initial state` cho form:

```jsx
const initialState = {
  name: "",
  email: "",
  password: "",
};
```

- 👉 Sau đó, chúng ta sẽ tạo `reducer function` để xử lý các `action`:

```jsx
function formReducer(state, action) {
  switch (action.type) {
    case "CHANGE":
      return {
        ...state,
        [action.field]: action.value,
      };
    case "RESET":
      return initialState;
    default:
      return state;
  }
}
```

- 👉 `Reducer function` nhận vào `current state` và một `action`, sau đó trả về `new state`.

- 👉 Ở đây, chúng ta có 2 loại `action`: `CHANGE` và `RESET`. Action `CHANGE` sẽ cập nhật giá trị của một trường (field) trong form với giá trị mới (value), và `action` `RESET` sẽ đặt lại form về trạng thái ban đầu.

- 👉 Tiếp theo, chúng ta sẽ sử dụng `useReducer` trong component của chúng ta:

```jsx
function Form() {
  const [state, dispatch] = useReducer(formReducer, initialState);

  function handleChange(event) {
    dispatch({
      type: "CHANGE",
      field: event.target.name,
      value: event.target.value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (!state.name) {
      alert("Please enter your name");
      return;
    }

    // Thực hiện logic submit form khi giá trị của trường 'name' đã được nhập
    console.log(state);
  }

  function handleReset() {
    dispatch({ type: "RESET" });
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={state.name}
          onChange={handleChange}
        />
      </label>
      <label>
        Email:
        <input
          type="email"
          name="email"
          value={state.email}
          onChange={handleChange}
        />
      </label>
      <label>
        Password:
        <input
          type="password"
          name="password"
          value={state.password}
          onChange={handleChange}
        />
      </label>
      <button type="submit">Submit</button>
      <button type="button" onClick={handleReset}>
        Reset
      </button>
    </form>
  );
}
```

- 👉 Ở đây, chúng ta sử dụng `useReducer` để khởi tạo `state` cho form. Sau đó, chúng ta sử dụng `dispatch` để gửi `action` và cập nhật `state`. Trong function `handleChange`, chúng ta gửi `action CHANGE` để cập nhật giá trị của trường tương ứng. Trong function `handleSubmit`, chúng ta sử dụng giá trị của `state` để thực hiện logic submit form. Cuối cùng, trong function `handleReset`, chúng ta gửi `action RESET` để đặt lại form về trạng thái ban đầu.

- 👉 Giải thích thêm chỗ `function handleSubmit`:

  - 👉 Đoạn code trên thực hiện việc kiểm tra xem trường `'name'` trong `state` có giá trị hay không trước khi thực hiện logic `submit` form. Nếu giá trị của trường `'name'` không tồn tại, sẽ hiển thị thông báo yêu cầu nhập tên và kết thúc hàm `handleSubmit` bằng câu lệnh `'return'`. Nếu giá trị của trường `'name'` đã được nhập, chương trình sẽ tiếp tục thực hiện logic `submit` form bằng cách log giá trị của `state` ra console.

  - 👉 Về cách thức hoạt động, khi `submit` form được kích hoạt bằng cách click vào nút "Submit", sự kiện '`submit`' sẽ được trigger và chạy hàm `handleSubmit`. Trong hàm `handleSubmit`, đoạn code event.preventDefault() sẽ ngăn chặn việc refresh lại trang web khi `submit` form được thực hiện. Tiếp theo, chương trình kiểm tra giá trị của trường `'name'` trong `state`. Nếu giá trị này không tồn tại, hàm sẽ hiển thị thông báo yêu cầu nhập tên và kết thúc hàm bằng câu lệnh `'return'`. Ngược lại, nếu giá trị của trường `'name'` đã được nhập, hàm sẽ tiếp tục thực hiện logic `submit` form bằng cách log giá trị của `state` ra console.
