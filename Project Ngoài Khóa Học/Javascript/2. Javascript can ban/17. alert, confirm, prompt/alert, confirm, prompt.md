# Popup

Chúng ta có 3 loại popup mà javascript trên trình duyệt cung cấp: **Alert**, **Confirm**, **Prompt**

## Alert

Alert thường được sử dụng để thông báo cho người dùng về một việc gì đó, người dùng phải nhấn “OK” để hoàn thành quá trình

```javascript
alert('I am an alert box!')
```

## Confirm

Confirm thường sử dụng để xác nhận người dùng có chập nhận làm một điều gì đó. `confirm()` sẽ return về giá trị boolean

```javascript
if (confirm('Press a button!')) {
  txt = 'You pressed OK!'
} else {
  txt = 'You pressed Cancel!'
}
```

## Prompt

Prompt thường được dùng nếu bạn muốn người dùng nhập vào một giá trị và bạn sẽ dùng giá trị đó để thực hiện một hành động gì đó.

Nếu người dùng nhấn **OK** sẽ return về giá trị nhập, nếu nhấn **Cancel** sẽ return `null`

```javascript
var person = prompt('Please enter your name', 'Harry Potter')
if (person == null || person == '') {
  txt = 'User cancelled the prompt.'
} else {
  txt = 'Hello ' + person + '! How are you today?'
}
```
