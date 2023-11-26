# Mouse Event và Event Object

```javascript
document.querySelector('.clear-tasks').addEventListener('click', function (e) {
  console.log('Hello World')
  // Dừng sự kiện mặc định, ví dụ submit form
  e.preventDefault();
})
```

```javascript
document.querySelector('.clear-tasks').addEventListener('click', onClick)

function onClick(e) {
  console.log('Clicked');

  let val

  val = e

  // Lấy element
  val = e.target
  // Lấy id
  val = e.target.id
  // Lấy danh sách class
  val = e.target.className
  // Cũng lấy danh sách class nhưng trả về dạng object
  val = e.target.classList

  // Loại event
  val = e.type

  // Timestamp
  val = e.timeStamp

  // Tạo độ tương đối của event đối với cửa sổ window
  val = e.clientY
  val = e.clientX

  // Tọa độ tương đối của event đối với element
  val = e.offsetY
  val = e.offsetX

  console.log(val)
}
```
