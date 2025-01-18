# useRef và forwardRef

- 👉 Đây là hai khái niệm liên quan đến React và được sử dụng để tương tác với các thành phần trong ứng dụng của bạn.

**1. `useRef`:**

- 👉 `useRef` là một hook của React được sử dụng để lưu trữ một tham chiếu đến một phần tử DOM hoặc giá trị khác.
- 👉 Nó được sử dụng để giữ cho các giá trị không bị mất đi khi component bị render lại.
- 👉 **Ví dụ**, bạn có thể sử dụng `useRef` để giữ giá trị của một input và sử dụng lại giá trị đó mỗi khi input được nhập.

**_🚀Ví dụ sử dụng `useRef`:_**

```jsx
import React, { useRef } from "react";

function MyComponent() {
  const inputRef = useRef(null);

  const handleClick = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <input type="text" ref={inputRef} />
      <button onClick={handleClick}>Focus input</button>
    </div>
  );
}

export default MyComponent;
```

## Giải thích code ví dụ trên sử dụng `useRef()`:

- 👉 Đoạn code trên sử dụng hook `useRef` để tham chiếu đến một phần tử DOM trên giao diện.

```jsx
import React, { useRef } from "react";
```

- 👉 Trong đoạn code trên, chúng ta import hook `useRef` từ thư viện React.

```jsx
function MyComponent() {
  const inputRef = useRef(null);
```

- 👉 Chúng ta khởi tạo một biến `inputRef` bằng cách sử dụng `useRef()` và truyền giá trị ban đầu của nó là `null`.

```jsx
const handleClick = () => {
  inputRef.current.focus();
};
```

- 👉 Chúng ta tạo hàm `handleClick()` để xử lý sự kiện click vào nút `Focus input`. Trong hàm này, chúng ta sử dụng thuộc tính `current` của biến `inputRef` để truy cập phần tử DOM được tham chiếu bởi `ref` và gọi phương thức `focus()` để đưa con trỏ chuột vào ô input.

```jsx
return (
  <div>
    <input type="text" ref={inputRef} />
    <button onClick={handleClick}>Focus input</button>
  </div>
);
```

- 👉 Trong phần trả về của component `MyComponent`, chúng ta tạo một ô input và một nút `Focus input`. Chúng ta truyền biến `inputRef` vào thuộc tính `ref` của ô input để tham chiếu đến phần tử DOM tương ứng. Khi người dùng click vào nút `Focus input`, hàm `handleClick()` được gọi và đưa con trỏ chuột vào ô input sử dụng `inputRef.current.focus()`.

**2. `forwardRef`:**

- 👉 `ref` sẽ không được truyền xuống `component`, vì `ref` không thực sự là một `prop`, nó được xử lý bởi React. Giải pháp cho vấn đề này là chúng ta dùng `React.forwardRef` API

- 👉 `forwardRef` là một hàm cao cấp của React được sử dụng để chuyển tiếp tham chiếu tới phần tử DOM từ một thành phần cha tới một thành phần con.

- 👉 `forwardRef` cho phép bạn truy cập vào phần tử DOM hoặc thành phần con từ thành phần cha của nó.

**_🚀Ví dụ sử dụng `forwardRef`:_**

```jsx
import React, { forwardRef } from "react";

const MyInput = forwardRef((props, ref) => {
  return <input type="text" ref={ref} />;
});

function MyComponent() {
  const inputRef = useRef(null);

  const handleClick = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <MyInput ref={inputRef} />
      <button onClick={handleClick}>Focus input</button>
    </div>
  );
}

export default MyComponent;
```

- 👉 Trong ví dụ này, MyInput là một component con được chuyển tiếp tham chiếu từ MyComponent bằng cách sử dụng `forwardRef`. MyComponent có thể truy cập vào phần tử input bên trong MyInput thông qua tham chiếu được chuyển tiếp.

## Giải thích code ví dụ trên sử dụng `forwardRef()`:

- 👉 Đầu tiên, chúng ta import `forwardRef` từ React để sử dụng:

```jsx
import React, { forwardRef } from "react";
```

- 👉 Tiếp theo, chúng ta định nghĩa một component `MyInput` sử dụng `forwardRef`. `Component này` chỉ đơn giản là một `input type text` và chúng ta cần chuyển `ref` đến element này từ `component cha`.

```jsx
const MyInput = forwardRef((props, ref) => {
  return <input type="text" ref={ref} />;
});
```

- 👉 Ở đây, `forwardRef` là một `higher-order component (HOC)` trong React, nó giúp chuyển `ref` từ component cha đến một component con bên trong mà không cần truyền qua `props`. `forwardRef` nhận vào một hàm render với tham số đầu vào là `props` và `ref`. Với cách định nghĩa của `MyInput`, nó sẽ trả về một `input type text` với `ref` được chuyển vào.

- 👉 Ở component cha, chúng ta sử dụng `MyInput` và truyền `ref` vào nó để sau này có thể sử dụng `ref` để thao tác với `input` đó.

```jsx
function MyComponent() {
  const inputRef = useRef(null);

  const handleClick = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <MyInput ref={inputRef} />
      <button onClick={handleClick}>Focus input</button>
    </div>
  );
}
```

- 👉 Ở đây, chúng ta sử dụng `useRef` để tạo một `ref` và lưu trữ nó trong biến `inputRef`. Sau đó, chúng ta truyền `ref` này vào `MyInput` component thông qua prop `ref`. Khi component `MyInput` được `render`, `ref` sẽ được truyền vào hàm `render` của nó thông qua tham số `ref` của `forwardRef`. Vì vậy, khi chúng ta sử dụng `inputRef` trong `handleClick`, nó sẽ trỏ đến `element input` trong component `MyInput`.

- 👉 Khi chúng ta click vào nút `"Focus input"`, `handleClick` được gọi và nó gọi phương thức `focus` trên `inputRef` hiện tại, từ đó `focus` vào input đó và cho phép người dùng nhập liệu.

- 👉 Hy vọng giải thích này sẽ giúp bạn hiểu rõ hơn về `forwardRef` và cách sử dụng nó trong `React`.

## Đây là ví dụ nâng

## useRef

`useRef` là một hook lưu trữ một biến có thể mutate hoặc cho phép chúng ta truy cập DOM node

### Nhắc lại kiến thức cũ

#### Mutate là gì?

Mutate là chúng ta thay đổi giá trị bên trong object mà không làm thay đổi tham chiếu của nó.

```js
const A = { name: "duoc" };
const B = A;
A.name = "cuong"; // Chúng ta đang mutate A
console.log(A === B); // true vì tham chiếu A và B giống nhau
```

#### Giải thích chi tiết về khái niệm Mutate trong JavaScript:

- 👉 Trong lập trình, "`mutate`" (được gọi là "`đột biến`" trong `tiếng Việt`) là một thuật ngữ để chỉ sự `thay đổi trạng thái` của một `đối tượng` hoặc `biến`. Khi một `đối tượng` hoặc `biến` được "`mutate`", giá trị của nó sẽ thay đổi.

- 👉 Điều này có thể xảy ra bất cứ khi nào một `thuộc tính` hoặc `phần tử` trong `đối tượng` được thay đổi, hoặc khi nó được gán cho một giá trị mới.

- 👉 **Ví dụ**, trong `JavaScript`, một mảng có thể được `mutate` bằng cách thêm hoặc xóa `phần tử` trong mảng:

```jsx
const myArray = [1, 2, 3];
myArray.push(4); // Thêm phần tử mới vào mảng, mutate mảng
console.log(myArray); // [1, 2, 3, 4]

myArray.pop(); // Xóa phần tử cuối cùng khỏi mảng, mutate mảng
console.log(myArray); // [1, 2, 3]
```

**_- 👉 Việc "mutate" một đối tượng hoặc `biến` có thể gây ra những thay đổi không mong muốn trong chương trình, vì vậy cần phải được kiểm soát và quản lý cẩn thận để đảm bảo tính đúng đắn của chương trình._**

#### Giải thích chi tiết về khái niệm Mutate trong ReactJS (Cũng tương tự như JavaScript nhưng hơi khác 1 xíu):

- 👉 Trong ReactJS, `"mutate"` thường được hiểu là `thay đổi trạng thái` của một đối tượng (`object`) hoặc một mảng (`array`) thông qua các `phương thức` như `setState` hoặc các `hàm bên ngoài` (external functions) như `push`, `pop`, `splice`,...

- 👉 Khi `thay đổi trạng thái` của một đối tượng hoặc một `mảng` trong `ReactJS`, ta cần sử dụng các `phương thức` hoặc `hàm bên ngoài` được cung cấp bởi `ReactJS` để đảm bảo rằng các thay đổi được cập nhật đúng cách và gây ra hiệu ứng `render` lại component (re-rendering) khi cần thiết.

- 👉 Tuy nhiên, khi thực hiện `mutate` một đối tượng hoặc một `mảng` trong `ReactJS`, ta cần phải cẩn thận để tránh các tác động phụ không mong muốn đến các component khác trong ứng dụng. Vì vậy, nếu cần `thay đổi trạng thái` của một đối tượng hoặc một `mảng` trong `ReactJS`, ta nên sử dụng các `phương thức` hoặc `hàm bên ngoài` được cung cấp bởi `ReactJS` để đảm bảo rằng các thay đổi được cập nhật đúng cách và không gây ra các tác động phụ không mong muốn.

#### Dưới đây là một ví dụ cơ bản về mutate trong `ReactJS`:

```jsx
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
}

export default Counter;
```

- 👉 Trong đoạn code trên, ta sử dụng hook `useState` để tạo ra một biến đếm (`count`) và một hàm (`setCount`) để thay đổi giá trị của biến đếm này. Khi ta click vào nút "Click me", hàm `handleClick` được gọi và thực hiện `mutate` biến đếm `count` bằng cách gọi hàm `setCount` với giá trị mới là `count + 1`.

- 👉 Khi `mutate` biến đếm `count` bằng cách gọi hàm `setCount`, ReactJS sẽ tự động cập nhật giá trị của biến `count` và gây ra hiệu ứng `render` lại component (re-rendering) để cập nhật lại giao diện của ứng dụng.

- 👉 Việc sử dụng hàm `setCount` thay vì thay đổi giá trị của biến `count` trực tiếp là một ví dụ cơ bản về cách sử dụng `mutate` trong ReactJS. Ta sử dụng hàm `setCount` để đảm bảo rằng các thay đổi được cập nhật đúng cách và gây ra hiệu ứng `render` lại component khi cần thiết.

#### Dưới đây là một ví dụ nâng cao về mutate trong ReactJS:

```jsx
import { useState, useEffect } from "react";

function PostList() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => {
        setPosts(data);
        setLoading(false);
      });
  }, []);

  function handleDeletePost(postId) {
    const updatedPosts = posts.filter((post) => post.id !== postId);
    setPosts(updatedPosts);
  }

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>Post List</h1>
      {posts.map((post) => (
        <div key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
          <button onClick={() => handleDeletePost(post.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default PostList;
```

- 👉 Trong đoạn code trên, ta sử dụng hook `useState` để tạo ra hai biến `posts` và `loading`. Biến `posts` là một `mảng` chứa các đối tượng bài viết, biến `loading` là một `boolean` để hiển thị thông báo đang tải dữ liệu hoặc không. Ta sử dụng hook `useEffect` để gọi API và lấy dữ liệu bài viết từ server. Khi dữ liệu được trả về, ta `mutate` biến `posts` bằng cách gọi hàm `setPosts` với giá trị mới là `mảng` các đối tượng bài viết.

- 👉 Ta cũng tạo ra một hàm `handleDeletePost` để `mutate` biến `posts` bằng cách xóa một bài viết ra khỏi `mảng`. Hàm này được gọi khi click vào nút `"Delete"` của một bài viết.

- 👉 Khi `mutate` biến `posts` bằng cách gọi hàm `setPosts`, `ReactJS` sẽ tự động cập nhật giá trị của biến `posts` và gây ra hiệu ứng `render lại` component (re-rendering) để cập nhật lại giao diện của ứng dụng. Việc `mutate` biến `posts` thông qua hàm `handleDeletePost` đảm bảo rằng việc xóa bài viết ra khỏi danh sách được cập nhật đúng cách và gây ra hiệu ứng `render lại` component khi cần thiết.

- 👉 Ngoài ra, ta cũng sử dụng biến `loading` để hiển thị thông báo đang tải dữ liệu hoặc không. Biến này cũng được `mutate` bằng cách gọi hàm `setLoading` để thay đổi giá trị của nó.

- 👉 Việc sử dụng các hàm `mutate` như `setPosts` và `setLoading` thay vì thay đổi giá trị trực tiếp của biến `posts` hoặc `loading` là một cách để đảm bảo tính ổn định và đúng đắn của ứng dụng. Bằng cách này, ta đảm bảo rằng `ReactJS` sẽ tự động cập nhật giá trị của biến và gây ra hiệu ứng `render lại` component khi cần thiết, giúp tăng hiệu suất và độ tin cậy của ứng dụng.

**_- 👉 Tóm lại, `mutate` là một khái niệm quan trọng trong `ReactJS`, giúp ta thay đổi giá trị của các biến và dẫn đến việc `render lại` component để cập nhật giao diện của ứng dụng. Việc sử dụng các hàm `mutate` như `useState` và `useEffect` là một cách hiệu quả để quản lý `trạng thái` và `tính năng` của ứng dụng._**

#### Hãy giải thích chi tiết, rõ ràng, dễ hiểu về dòng code này:

```jsx
const updatedPosts = posts.filter((post) => post.id !== postId);
```

- 👉 Dòng code này là một ví dụ về việc sử dụng phương thức `filter()` của `JavaScript` để tạo ra một mảng mới từ một mảng có sẵn.

- 👉 Cụ thể, đoạn code này sẽ tạo ra một mảng mới `updatedPosts`, với các phần tử trong mảng này sẽ được lọc từ mảng `posts`. Các phần tử được lọc sẽ được xác định bằng cách so sánh giá trị của thuộc tính `id` của mỗi phần tử trong mảng `posts` với giá trị của biến `postId`. Những phần tử có giá trị của thuộc tính `id` khác với giá trị của biến `postId` sẽ được giữ lại trong mảng `updatedPosts`. Có nghĩa là

**`- 👉 Những phần tử có giá trị của thuộc tính `id`khác với giá trị của biến`postId`sẽ được giữ lại trong mảng`updatedPosts`. Dòng  này có nghĩa là:`**

- 👉 Trong mảng `posts`, mỗi phần tử có một thuộc tính `id` để xác định nó là phần tử nào. Ví dụ, phần tử đầu tiên trong mảng `posts` có giá trị thuộc tính `id` là 1, phần tử thứ hai có giá trị thuộc tính `id` là 2, và phần tử thứ ba có giá trị thuộc tính `id` là 3.

- 👉Khi áp dụng phương thức `filter()`, các phần tử của mảng `posts` sẽ được kiểm tra một cách tuần tự để xem giá trị của thuộc tính `id` của chúng có khác với giá trị của biến `postId` hay không. Những phần tử có giá trị thuộc tính `id` khác với giá trị của biến `postId` sẽ được giữ lại trong mảng mới `updatedPosts`, còn những phần tử có giá trị thuộc tính `id` bằng với giá trị của biến `postId` sẽ không được lưu lại trong mảng mới `updatedPosts`.

- 👉Ví dụ, nếu giá trị của biến `postId` là 2, thì trong mảng `posts`, chỉ có phần tử có giá trị thuộc tính `id` là 2 bị loại bỏ khỏi mảng mới `updatedPosts`, còn những phần tử khác với giá trị thuộc tính `id` khác 2 sẽ được giữ lại trong mảng mới `updatedPosts`. Kết quả là mảng mới `updatedPosts` sẽ chỉ chứa hai phần tử với giá trị thuộc tính `id` lần lượt là 1 và 3.

- 👉 Nói cách khác, dòng code này sẽ xóa phần tử có `id` bằng với giá trị của biến `postId` khỏi mảng `posts` bằng cách tạo ra một mảng mới chứa các phần tử còn lại. Kết quả trả về là một mảng mới có cùng cấu trúc với mảng ban đầu, nhưng đã bỏ đi phần tử có id bằng với giá trị của biến `postId`.

**_- 👉 `Ví dụ`, `giả sử mảng `posts` có cấu trúc như sau:`_**

```jsx
const posts = [
  { id: 1, title: "Post 1", content: "Lorem ipsum dolor sit amet." },
  { id: 2, title: "Post 2", content: "Consectetur adipiscing elit." },
  { id: 3, title: "Post 3", content: "Sed do eiusmod tempor incididunt." },
];
```

- 👉 Nếu giá trị của biến `postId` là 2, dòng code này sẽ tạo ra một mảng mới `updatedPosts` như sau:

```jsx
const updatedPosts = [
  { id: 1, title: "Post 1", content: "Lorem ipsum dolor sit amet." },
  { id: 3, title: "Post 3", content: "Sed do eiusmod tempor incididunt." },
];
```

**_- 👉 `Như vậy`, mảng `updatedPosts` chứa các phần tử có `id` khác với giá trị của biến `postId` và đã loại bỏ phần tử có `id` bằng với giá trị của biến `postId`._**

#### Vì sao `State` hay `Prop` thì không được `Mutate` ? Hãy giải thích chi tiết nhất ?

- 👉 Trong React, state và props là hai khái niệm quan trọng để quản lý và truyền dữ liệu giữa các component. Tuy nhiên, vì state và props đều được xem là "đầu vào" của một component, nên chúng ta không nên thay đổi giá trị của chúng bằng cách mutate (sửa đổi trực tiếp).

- 👉 Một lý do quan trọng là mutate state hoặc props có thể làm cho ứng dụng của bạn trở nên không ổn định. Khi React thấy rằng state hoặc props đã bị mutate, nó sẽ không hiểu rằng giá trị đã thay đổi, và do đó không thể tạo ra những cập nhật UI đúng đắn. Điều này có thể gây ra lỗi, sai sót và khó khăn trong việc tìm và sửa lỗi.

- 👉 Thay vào đó, chúng ta nên tạo ra các bản sao của state hoặc props, sửa đổi các bản sao này và sau đó gán chúng lại cho state hoặc props. Trong React, có hai cách để làm điều này:

**1. Sử dụng hàm `setState()` để thay đổi `state`.**

- 👉 Hàm `setState()` sẽ tạo ra một bản sao của `state` và sửa đổi nó, sau đó gán bản sao mới này cho `state`.

**_Ví dụ:_**

```jsx
this.setState((prevState) => ({ count: prevState.count + 1 }));
```

**2. Sử dụng hàm `useReducer()` để quản lý `state`.**

- 👉 Hàm `useReducer()` sẽ tạo ra một `state` mới dựa trên action được cung cấp, sử dụng một reducer function.

- 👉 Reducer function sẽ trả về một bản sao mới của `state`, và React sẽ tự động gán bản sao này cho `state`.

**_Ví dụ:_**

```jsx
const [state, dispatch] = useReducer(reducer, initialState);
dispatch({ type: "increment" });
```

- 👉 Tương tự như vậy, để tránh mutate props, chúng ta nên đảm bảo rằng các component con không thay đổi giá trị của props bằng cách truyền chúng vào như một đối tượng bất biến (immutable object). Cách tiếp cận phổ biến để đảm bảo tính bất biến cho props là sử dụng các thư viện hỗ trợ như `Immutable.js` hoặc `seamless-immutable`.

#### Ví dụ về Mutate và giải thích chi tiết nhất:

- 👉 Khi nói về việc không nên mutate trực tiếp các prop và state trong React, chúng ta nói về việc giữ cho code của chúng ta `"immutable"`. `Immutable` có nghĩa là không thể thay đổi hoặc biến đổi.

**- 👉 Ví dụ, giả sử chúng ta có một đối tượng user:**

```jsx
const user = {
  name: "John",
  age: 30,
};
```

- 👉 Chúng ta muốn thay đổi tuổi của người dùng, vì vậy chúng ta cập nhật đối tượng như sau:

```jsx
user.age = 31;
```

- 👉 Tuy nhiên, đối tượng user đã bị thay đổi trực tiếp và không còn `immutable` nữa. Nếu đối tượng này được sử dụng bởi một số thành phần khác trong ứng dụng của chúng ta, chúng ta sẽ không thể biết trước được những tác động tiềm năng của việc thay đổi này.

- 👉 Trong `React`, chúng ta thường truyền các `prop` và `state` vào các thành phần con của chúng ta. Nếu chúng ta thay đổi trực tiếp giá trị của `prop` hoặc `state`, chúng ta sẽ cập nhật trực tiếp thành phần cha và các thành phần khác liên quan, gây ra các vấn đề khó xử lý.

**- 👉 Ví dụ, giả sử chúng ta có một thành phần đơn giản như sau:**

```jsx
function Counter({ count }) {
  function handleClick() {
    count += 1;
    console.log(count);
  }

  return <button onClick={handleClick}>Click me!</button>;
}
```

- 👉 Trong đó, chúng ta truyền giá trị của `prop count` vào thành phần và muốn tăng giá trị này lên 1 mỗi khi người dùng bấm vào nút. Tuy nhiên, chúng ta không nên `mutate` trực tiếp giá trị của `prop count`. Thay vào đó, chúng ta có thể sử dụng `state` trong React để lưu trữ giá trị này và cập nhật giá trị của `state` bằng cách sử dụng hàm `setState()`.

```jsx
function Counter({ count }) {
  const [currentCount, setCurrentCount] = useState(count);

  function handleClick() {
    setCurrentCount(currentCount + 1);
    console.log(currentCount);
  }

  return <button onClick={handleClick}>Click me!</button>;
}
```

- 👉 Trong ví dụ trên, chúng ta sử dụng hook `useState()` của React để khởi tạo `state` cho biến `currentCount`. `useState()` trả về một mảng với hai phần tử: giá trị hiện tại của `state` và hàm để cập nhật giá trị của `state` đó. Ban đầu, `currentCount` sẽ có giá trị ban đầu được truyền vào `useState()` (trong ví dụ này là 0).

- 👉 Chúng ta cập nhật giá trị của `currentCount` bằng cách gọi hàm `setCurrentCount()`. Khi hàm này được gọi, React sẽ cập nhật giá trị của `state` và tự động render lại thành phần liên quan đến `state` đó để cập nhật giao diện. Vì vậy, mỗi khi giá trị của `currentCount` thay đổi, thành phần sẽ được render lại và hiển thị giá trị mới của `currentCount`.

**_- 👉 Ví dụ trên cho thấy cách sử dụng `useState()` để quản lý `state` trong React và cách React tự động render lại giao diện khi `state` thay đổi._**

#### `State` hay `Prop` thì không được `Mutate` ?

Đối với React thì chúng ta dùng `state` để lưu trữ những giá trị có thể thay đổi theo thời gian, và chúng ta không `mutate` `state`, chúng ta **thay thế state** bằng một giá trị mới với tham chiếu mới kết hợp dùng set `state` để nói cho React biết

```jsx
const [todo, setTodo] = useState({ name: "Hoc Bai", time: "08:20:PM" });

const handleClick = () => {
  // todo.name = 'Tap Gym' // Chúng ta không mutate như thế này!
  setState((prev) => ({ ...prev, name: "Tap Gym" })); // Chúng ta set state với một giá trị object mới khác tham chiếu object cũ
};
```

Việc cập nhật state sẽ làm component re-render

Tất nhiên là về mặc lý thuyết chúng ta vẫn có thể mutate state trong trường hợp chúng ta không muốn component re-render, nhưng không nên làm vậy, vì chúng ta sẽ không kiểm soát được state, rất dễ sinh bug. Và useState của react không sinh ra để chúng ta làm vậy

Giờ đặt vấn đề ra thì có cách nào để mutate biến mà không làm component render hay không?

#### Tạo biến trong component

```jsx
function Todo() {
  // khi component re-render vì lý do nào đó (state, props,...) thì todo sẽ bị assign lại
  const todo = { name: "Hoc Bai", time: "08:20:PM" };

  const handleClick = () => {
    // mutate như thế này sẽ không làm component re-render
    todo.name = "Tap Gym";
  };
}
```

#### Tạo biến ngoài component

```jsx
// Biến todo có thể bị dùng ở bất kỳ đâu vì nó nằm ngoài function
// Trong khi biến này chỉ sinh ra để phục phụ cho function Todo
const todo = { name: "Hoc Bai", time: "08:20:PM" };
function Todo() {
  const handleClick = () => {
    // mutate như thế này sẽ không làm component re-render
    todo.name = "Tap Gym";
  };
}
```

### useRef giúp tạo biến có thể mutate mà không làm component re-render

useRef return một ref object với thuộc tính current duy nhất được set theo giá trị khởi tạo mà chúng ta cung cấp.

```jsx
import { useRef } from "react";

export default function Counter() {
  let ref = useRef(0);

  function handleClick() {
    ref.current = ref.current + 1;
    alert("You clicked " + ref.current + " times!");
  }

  return <button onClick={handleClick}>Click me!</button>;
}
```

Một số điểm đặc biệt của ref

- Tham chiếu ref sẽ không thay đổi mỗi khi re-render (không như biến thông thường, bị reset mỗi khi re-render)
- Thay đổi nó sẽ không làm re-render (không như state - làm re-render)
- Thông tin được bao gói bên trong component (không như biến bên ngoài, bị chia sẻ nhiều chỗ khác dùng được)

### Cạm bẩy khi dùng useRef

Đừng nên ghi hay đọc `ref.current` suốt quá trình render. Đây là **nguyên tắc React**!

```jsx
function MyComponent() {
  const myRef = useRef(100);

  // 🚩 Không ghi ref suốt quá trình render
  myRef.current = 123;
  // ...
  // 🚩 Không đọc ref suốt quá trình render
  return <h1>{myOtherRef.current}</h1>;
}
```

Bạn có thể đọc và ghi trong event handler hay `useEffect`

```jsx
function MyComponent() {
  // ...
  useEffect(() => {
    // ✅ You can read or write refs in effects
    myRef.current = 123;
  });
  // ...
  function handleClick() {
    // ✅ You can read or write refs in event handlers
    doSomething(myOtherRef.current);
  }
  // ...
}
```

Nếu bạn phải đọc và ghi thứ gì đó suốt quá trình render, sử dụng `useState`

Khi bạn phá vỡ những rule này, component của bạn có thể vẫn hoạt động nhưng dễ gây ra bug. Tất cả tính năng mà React thêm vào đều dựa trên nguyên tắc là `pure component`

## Pure Component trong `ReactJS` được gọi là gì ? Hãy giải thích chi tiết và rõ ràng nhất ?

- 👉 Pure Component trong `ReactJS` là một thành phần (`component`) mà sử dụng cơ chế `shouldComponentUpdate` để kiểm tra xem `props` và `state` có thay đổi hay không trước khi `render` lại giao diện. Nếu các giá trị này không thay đổi, React sẽ không `render` lại `component` đó, do đó giúp cải thiện hiệu suất của ứng dụng.

- 👉 Cách thức hoạt động của Pure Component là React sẽ so sánh giá trị của các `props` và `state` của `component` hiện tại với giá trị trước đó. Nếu các giá trị này không thay đổi, React sẽ không `render` lại `component`. Tuy nhiên, nếu có sự thay đổi về `props` hoặc `state`, React sẽ thực hiện quá trình `render` lại `component` bằng cách gọi lại phương thức `render()`.

- 👉 Pure Component thường được sử dụng khi các `props` hoặc `state` của `component` thay đổi không đáng kể và không ảnh hưởng đến giao diện của `component`. Điều này giúp tăng tốc độ và hiệu suất của ứng dụng, đặc biệt là khi có nhiều `component` trong ứng dụng.

- 👉 Để tạo một Pure Component trong `ReactJS`, chúng ta có thể kế thừa lớp `React.PureComponent` thay vì kế thừa `React.Component`. Ngoài ra, chúng ta cũng có thể sử dụng HOC `(Higher Order Component)` `React.memo()` để tạo ra một `PureComponent`.

**_- 👉 Ví dụ:_**

```jsx
import React from "react";

class MyPureComponent extends React.PureComponent {
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <p>{this.props.description}</p>
      </div>
    );
  }
}

export default React.memo(MyPureComponent);
```

- 👉 Ở **ví dụ** trên, `MyPureComponent` là một `PureComponent`, được kế thừa từ React.`PureComponent`. Ngoài ra, chúng ta cũng sử dụng HOC `React.memo()` để bao bọc `MyPureComponent` để tạo ra một `PureComponent` mới. Khi các `props` của component này không thay đổi, React sẽ không render lại component, giúp tăng tốc độ và hiệu suất của ứng dụng.

### Theo tôi biết thì quy tắc của `Pure Component` là không truy cập biến ngoài `component`. Nếu truy cập biến ngoài `Pure Component` là quy phạm nguyên tắc của `Pure Component`. Hãy giải thích lý do vì sao, giải thích chi tiết nhất ?

- 👉 Đúng vậy, quy tắc chính của `Pure Component` là không được thay đổi các `prop` hoặc `state` được truyền vào bởi bất kỳ thành phần nào bên ngoài. Nguyên nhân chính là bởi vì `Pure Component` hoạt động bằng cách so sánh giá trị của các `prop` và `state` trước và sau khi được cập nhật. Nếu giá trị này không thay đổi, `Pure Component` sẽ không được `render` lại, giúp tăng hiệu suất ứng dụng.

- 👉 Khi bạn truy cập hoặc thay đổi các biến bên ngoài `component`, giá trị của chúng có thể thay đổi mà không thông báo cho `component`. Do đó, nếu bạn thực hiện các thay đổi này trong một `Pure Component`, nó có thể dẫn đến trường hợp `component` không được `render` lại mặc dù giá trị của các `prop` hoặc `state` đã thay đổi. Điều này làm mất đi lợi ích của `Pure Component` và có thể làm `giảm hiệu suất` ứng dụng.

**_- 👉 Vì vậy, để giữ cho `Pure Component` hoạt động đúng cách, nên tránh truy cập hoặc thay đổi các biến bên ngoài `component`. Nếu bạn cần sử dụng các giá trị này, hãy truyền chúng vào component dưới dạng `prop` hoặc `state`, hoặc sử dụng `hook` hoặc `context` để chia sẻ dữ liệu giữa các thành phần._**

## Truy cập DOM nodes hoặc `React` elements

Nếu bạn làm việc với `React` được một khoảng thời gian rồi thì bạn có thể đã từng sử dụng `ref` cho việc này. Dưới đây là ví dụ về việc sử dụng `ref`:

```jsx
import React, { useRef } from "react";
const CustomTextInput = () => {
  const textInput = useRef();
  focusTextInput = () => textInput.current.focus();
  return (
    <>
      <input type="text" ref={textInput} />
      <button onClick={focusTextInput}>Focus the text input</button>
    </>
  );
};
```

**_- 👉 Lưu ý là trong `functional component` thì chúng ta sử dụng `useRef` thay vì sử dụng `createRef`. Nếu chúng ta tạo một `ref` bằng cách sử dụng `createRef` trong một `functional component`, React sẽ tạo mới một instance `ref` mỗi lần re-render thay vì giữ nguyên instance xuyên suốt các quá trình render._**

## forwardReef là gì ?

- `ref` sẽ không được truyền xuống component, vì `ref` không thực sự là một prop, nó được xử lý bởi React. Giải pháp cho vấn đề này là chúng ta dùng `React.forwardRef` API

- Như chúng ta đã tìm hiểu bên trên thì ref giúp chúng ta truy cập đến một element, vậy nó có thể truy cập đến một component React hay không? test thử nhé

```jsx
import React from "react";
const Input = () => <input type="text" style={style} />;
export default Input;
```

```jsx
import React, { useRef, useEffect } from "react";
import Input from "./Input";
function App() {
  const inputRef = useRef(null);
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
    console.log({ inputRef });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div>
      <Input ref={inputRef} />
    </div>
  );
}
export default App;
```

Chúng ta sẽ nhận một thông báo tham chiếu đến **Input Component** là null
Để fix vấn đề này ta dùng `forwardRef` như một HOC cho **Input Component**

```jsx
import React, { forwardRef } from "react";
const Input = (props, ref) => <input ref={ref} type="text" style={style} />;
export default forwardRef(Input);
```
