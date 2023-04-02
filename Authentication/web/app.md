## Update Video

> **_Tại phút 13:06_**

### Code đúng là

```js
error.response.config.headers.Authorization = `Bearer ${access_token}
```

### nha mọi người.

- Còn lý do mình viết nhầm nhưng kết quả ra vẫn chính xác là sau khi gọi refresh token xong thì ở `function refreshToken` mình có lưu `access_token` mới vào trong local storage.

- Và nhờ cái interceptor request nó gán lại cái `headers.Authorization` nên không bị lỗi.

- Vậy câu hỏi là chúng ta có cần có đoạn code set lại như trên ở phút `13:06` hay không?

- Không cần thiết phải set lại vì dù gì ở `interceptor` nó cũng tự set rồi, nhưng mà các bạn nên set cho code nó chặt chẽ nha.

### Còn đoạn return về

```js
return this.instance(error.response.config);
```

- Thì không được bỏ nhá. Vẫn giữ để nó tiếp tục request

- Mọi người update lại một xíu chỗ đó giúp mình nha
