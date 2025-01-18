# Constructor trong class component

Cùng nhìn lại lifecycle trong React

![](./react-lifecycle.png)

**Nếu bạn không khởi tạo state hoặc không `bind` các method thì bạn không cần dùng constructor**

`constructor` là phương thức chạy đầu tiên khi component của chúng ta khởi tạo. Nó sẽ chạy trước khi component của chúng ta được mount.

> Mount ở đây nghĩa là đã render hết UI của React component lên DOM thật.

Để tạo một class component đúng chuẩn React thì chúng ta cần phải `extends React.Component`, vì ES6 class của bạn thôi là chưa đủ, bạn cần kế thừa từ `React.Component` React có thể hiểu được class của bạn là React class component.

Khi tạo constructor cho class component thì bạn phải gọi `super(props)` trước bất cứ câu lệnh nào. Nếu không thì `this.props` sẽ undefined trong contructor và gây nên bug.

Thường thì trong React constructor sẽ làm 2 nhiệm vụ chính

- Khởi tạo local state bằng cách gán object cho `this.state`
- Bind một method event handler với một instance (thường là this)

Bạn không nên gọi `setState()` trong `constructor()` để cập nhật lại UI.

```jsx
constructor(props) {
  super(props);
  // Don't call this.setState() here!
  this.state = { counter: 0 };
  this.handleClick = this.handleClick.bind(this);
}
```

> Lưu ý:
> Tránh việc copy props vào state! Đây là lỗi khá phổ biến

```jsx
constructor(props) {
 super(props);
 // Don't do this!
 this.state = { color: props.color };
}
```

Điều này thực sự không cần thiết, bạn có thể sử dụng trực tiếp `this.props.color` luôn. Chưa hết, nếu làm như trên thì sẽ dẫn đến bug không mong muốn như là props `color` update nhưng state sẽ không update theo được.

Chỉ sử dụng pattern này khi mà bạn muốn bỏ qua việc props update thì color sẽ không update theo. Như vậy thì bạn nên đổi lại tên `color` thành `defaultColor` hoặc `initialColor`. Trong trường hợp muốn ép component reset initial state thì có thể thay đổi key của nó.

> **Những trường hợp mà không cần tạo state thì đừng tạo state làm gì, nó sẽ làm flow component của bạn bị rối**
