# Keyboard Event

## onkeydown

onkeydown thực thi khi người dùng ấn 1 phím

- Sử dụng trong HTML

```html
<input type="text" onkeydown="myFunction()" />
```

- Sử dụng trong Javascript

```js
object.addEventListener('keydown', (event) => {
  console.log(event.target.value) // sẽ bị chậm 1 nhịp khi log value
})
```

## onkeypress

- onkeypress thực thi khi người dùng ấn 1 phím.
- **Lưu ý:** onkeypress không phải lúc nào cũng thực thi tất cả các phím (ví dụ: Alt, Ctrl, Shift, Esc) trên mọi trình duyệt. Để nhận biết người dùng nhấn bất kì phím nào thì nên dùng onkeydown, bởi vì nó hoạt động tất cả các phím.

- Sử dụng trong HTML

```html
<input type="text" onkeypress="myFunction()" />
```

- Sử dụng trong Javascript

```js
object.addEventListener('keypress', (event) => {
  console.log(event.target.value) // sẽ bị chậm 1 nhịp khi log value
})
```

## onkeyup

- onkeyup thực thi khi người dùng nhả 1 phím sau khi nhấn.
- Sử dụng trong HTML

```html
<input type="text" onkeyup="myFunction()" />
```

- Sử dụng trong Javascript

```js
object.addEventListener('keyup', (event) => {
  console.log(event.target.value) // Không bị chậm 1 nhịp khi log value
})
```

## oninput

- oninput thực thi khi value của input hoặc textarea thay đổi.
- **Mẹo:** Sự kiện này tương tự như onchange. Sự khác nhau là oninput thực thi ngay lập tức sau khi value của element thay đổi, trong khi đó thì onchange thực thi khi element mất focus, sau khi content được thay đổi. Một sự khác nhau khác nữa là onchange cũng hoạt động được trên select element.
- Sử dụng trong HTML

```html
<input type="text" oninput="myFunction()" />
```

- Sử dụng trong Javascript

```js
object.addEventListener('input', (event) => {
  console.log(event.target.value) // Không bị chậm 1 nhịp khi log value
})
```

## onchange

- onchange thực thi khi value của một element được thay đổi.
- Với radiobutton và checkbox, onchange thực thi khi trạng thái thay đổi. Với input, textarea thì thực thi value thay đổi và element mất focus.

```html
<input type="text" onchange="myFunction()" />
```

- Sử dụng trong Javascript

```js
object.addEventListener('change', (event) => {
  console.log(event.target.value)
})
```
