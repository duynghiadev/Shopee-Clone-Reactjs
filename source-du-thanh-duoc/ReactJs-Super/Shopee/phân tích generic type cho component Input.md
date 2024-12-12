# Phân tích generic type cho component Input

## Các bước phân tích

1. Nếu để `name` mặc định thì nó sẽ lấy `name` của `InputHTMLAttributes<HTMLInputElement>`, cái `name` này là `string`. Vẫn chưa đủ chi tiết cho lắm. Vậy muốn chi tiết hơn thì chúng ta phải tự khai báo `name`

2. `register` truyền từ ngoài và `name` có data từ `register` sinh ra => `name` phụ thuộc vào `register` => để có tính phụ thuộc giữa 2 thuộc tính trong `interface` hay `type` thì chỉ có dùng generic type thôi.

3. Giờ mà đi tự suy nghĩ thì khá là lâu, cách nhanh nhất là "copy", tức là học theo cách khai báo của react hook form. Chúng ta nhận ra rằng khi dùng `<Controller>` component thì `name` tự sinh ra dựa vào `control` truyền vào, tương đồng với trường hợp chúng ta. Vậy chúng ta sẽ đi phân tích cái `Controller` component này làm như thế nào để áp dụng cho `Input` component

4. Lần mò vào `Controller` => `ControllerProps` => `UseControllerProps`

5. Nhận thấy `control?: Control<TFieldValues>;` và `name: TName;`, chúng ta có thể copy cách khai báo của thư viện

## Chúng ta sẽ thắc mắc rằng Generic Type cho Functional Component thì cái generic type đó được truyền như thế nào?

Với những interface yêu cầu generic type thì chúng ta mới cần truyền thôi.

Còn đối với generic type function thì chúng ta không cần truyền cũng được

Ví dụ

```ts
function identity<Type>(value: Type): Type {
  return value
}

// Với trường hợp truyền type thì chúng ta sẽ có sự chặt chẽ
const a = identity<string>("I'm a string") // "a" sẽ là kiểu "string"

// Không cần truyền type vẫn được, Cái generic type vẫn đóng
// vai trò như là một cầu nối giữa các kiểu dữ liệu trong function
// Chỉ là nó sẽ không như kỳ vọng khi chúng ta khai báo function thôi
const val = 'Được'
const b = identity(val) // "b" sẽ là kiểu "Được"
```
