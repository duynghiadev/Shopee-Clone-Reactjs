# Tham trị và tham chiếu

JS về bản chất thì có 2 kiểu dữ liệu chính là tham trị và tham chiếu

## Kiểu tham trị (primitive types)

Có những kiểu dưới đây:

1. number
2. string
3. boolean
4. null
5. undefined
6. BigInt
7. Symbol

### Việc copy biến với tham trị

```js
let message = "Hello!";
let phrase = message;
```

Chúng ta có 2 biến độc lập, **mỗi biến đều chứa giá trị là `"Hello"`**

![](./variable-copy-value.svg)

Quá dễ hiểu!

## Kiểu tham chiếu (reference types)

1. object
2. array
3. function

Thực ra array & function về bản chất vẫn là object cả thôi.

### Việc copy biến với tham chiếu

Object thì không giống như các kiểu dữ liệu của tham trị.

**Một biến object không lưu trữ giá trị, nó lưu trữ "địa chỉ bộ nhớ" - hay còn gọi là nó tham chiếu đến ô nhớ**

`user` là biến object

```js
let user = {
  name: "John",
};
```

![](./variable-contains-reference.svg)

Object thì được lưu trữ đâu đó trong bộ nhớ (bên phải hình), còn biến `user` thì tham chiếu đến nó.

**Khi chúng ta copy một biến object, tham chiếu của nó sẽ bị copy, object không bị nhân đôi lên**

```js
let user = { name: "John" };

let admin = user; // copy the reference
```

Bây giờ chúng ta có 2 biến đều tham chiếu đến cùng một object

![](./variable-copy-reference.svg)

Chúng ta có thể sử dụng biến để truy cập đến object và chỉnh sửa chúng

```js
let user = { name: "John" };

let admin = user;

admin.name = "Pete"; // changed by the "admin" reference

console.log(user.name); // 'Pete', changes are seen from the "user" reference
```

### So sánh với tham chiếu

2 object chỉ bằng nhau khi nó cùng một object

Ví dụ `a` và `b` cùng tham chiếu đến một object nên nó bằng nhau

```js
let a = {};
let b = a; // copy the reference

console.log(a == b); // true, both variables reference the same object
console.log(a === b); // true
```

Và dưới đây là 2 object độc lập, dù cho chúng nhìn có vẻ giống nhau thì chúng cũng không bằng nhau

```js
let a = {};
let b = {};

console.log(a == b); // false
console.log(a === b); // false
```

### Clone và merge

Copy một biến object sẽ tạo thêm 1 biến khác tham chiếu đến cùng object đó

Nhưng trong nhiều trường hợp chúng ta cần nhân đôi một object để khi chỉnh sửa biến này thì không ảnh hưởng đến biến kia. Chúng ta gọi cái này là **clone**

Clone thường có 2 loại là

- clone thường (cũng có thể gọi là shallow copy)
- deep clone (cũng có thể gọi là deep copy)

Với clone thường thì người ta thường dùng **spread syntax** để clone `clone = {...user}`

```js
let user = {
  name: "John",
  age: 30,
};

// Bây giờ clone là một object độc lập với cùng nội dung với user
let clone = { ...user };
clone.name = "Peter";
console.log(user.name); // Vẫn là John trong object gốc
```

Hoặc sài vòng lặp

```js
let user = {
  name: "John",
  age: 30,
};

let clone = {}; // một object rỗng

// Cùng copy các thuộc tính nào
for (let key in user) {
  clone[key] = user[key];
}
clone.name = "Pete";
console.log(user.name); // Vẫn là John trong object gốc
```

Clone thường chỉ hiệu quả với những object 1 cấp, những object nested nhiều cấp thì phải deep clone

### Deep clone

Những ví dụ với biến object `user` trên thì các thuộc tính bên trong đều là tham trị. Nhưng các thuộc tính cũng có thể tham chiếu đến một object khác.

Như thế này:

```js
let user = {
  name: "John",
  sizes: {
    height: 182,
    width: 50,
  },
};

console.log(user.sizes.height); // 182
```

Bây giờ clone với cách thông thường không thể copy nổi `user.sizes` bởi vì nó là một object, nếu copy thì nó sẽ bị tham chiếu và `clone.sizes` và `user.sizes` sẽ cùng tham chiếu đến một địa chỉ ô nhớ (một object)

```js
let user = {
  name: "John",
  sizes: {
    height: 182,
    width: 50,
  },
};

let clone = { ...user };

console.log(user.sizes === clone.sizes); // true, Vì cùng object

// user và clone chia sẻ sizes
user.sizes.width++; // Thay đổi thuộc tính từ một nơi
console.log(clone.sizes.width); // 51, Tại nơi khác kết quả cũng bị thay đổi theo
```

Để fix vấn đề này thì chúng ta có thể dùng một số phương pháp dưới đây

- `JSON.parse(JSON.stringify())`

  - Câu lệnh này có thể được sử dụng để tạo một bản sao sâu (deep copy) của một đối tượng JavaScript. Bản sao sâu là một đối tượng hoàn toàn mới và độc lập với đối tượng gốc ban đầu, vì vậy nếu bạn thay đổi bản sao, thì đối tượng gốc sẽ không bị ảnh hưởng.

  - Để thực hiện điều này, trước tiên chúng ta cần chuyển đối tượng JavaScript thành string (chuỗi) `JSON` bằng phương thức `JSON.stringify()`. Sau đó, chúng ta sẽ chuyển đổi chuỗi `JSON` thành một object(đối tượng) JavaScript mới bằng phương thức `JSON.parse()`. Việc này sẽ tạo ra một bản sao độc lập với đối tượng gốc ban đầu.

Ví dụ, giả sử chúng ta có một đối tượng `JavaScript` như sau:

```js
const originalObj = {
  name: "John",
  age: 30,
  hobbies: ["reading", "cooking"],
  address: {
    street: "123 Main St",
    city: "New York",
    state: "NY",
  },
};
```

- Chúng ta có thể tạo một bản sao sâu của đối tượng này bằng cách sử dụng câu lệnh sau:

```js
const clonedObj = JSON.parse(JSON.stringify(originalObj));
```

- Sau khi thực hiện, `clonedObj` sẽ là một bản sao độc lập của `originalObj`. Bất kỳ thay đổi nào được thực hiện trên `clonedObj` sẽ không ảnh hưởng đến `originalObj`, và ngược lại.

* Dùng method [\_.cloneDeep(obj)](https://lodash.com/docs#cloneDeep) của thư viện Lodash (sâu bên trong nó dùng đệ quy để lặp các thuộc tính bên trong object)
* Dùng các thư viện như [immer](https://immerjs.github.io/immer/). Thư viện này khá hiệu quả vì đôi lúc chúng ta cũng không cần thiết clone hết cả một object lớn để chỉnh sửa 1 vài thuộc tính, cơ chế của cái này là chỉnh sửa thuộc tính nào thì nó sẽ tự tính và clone cho đúng thôi. Vậy nên giúp cải thiện về mặt performance trong một số trường hợp.

#### Lưu ý: Const object cũng có thể chỉnh sửa

Giá trị của user là không thay đổi, nhưng object bên trong nó thì tự do, muốn làm gì cũng đc.

```js
const user = {
  name: "John",
};

user.name = "Pete"; // (*)

console.log(user.name); // Pete
```

Nó chỉ lỗi khi chúng ta set `user=...` thôi.

### ✅✅ Bổ sung thêm ✅✅

1. `JSON.parse(JSON.stringify())` Hãy giải thích câu lệnh trên ?

- `JSON.parse(JSON.stringify())` là một cách phổ biến để tạo một bản sao sâu (deep clone) của một đối tượng JavaScript hoặc một cấu trúc dữ liệu phức tạp bằng cách sử dụng JSON (JavaScript Object Notation).

- Giải thích từng phần:

- `JSON.stringify()`: Phần này chuyển đổi một đối tượng JavaScript thành một chuỗi JSON. Chuỗi JSON là một chuỗi văn bản chứa dữ liệu có định dạng JSON. Điều này là cần thiết để sao chép cấu trúc dữ liệu của đối tượng hoặc mảng thành một chuỗi dữ liệu JSON.

- `JSON.parse()`: Phần này chuyển đổi một chuỗi JSON thành một đối tượng JavaScript. Nói cách khác, nó phân tích chuỗi JSON và tạo ra một đối tượng hoặc mảng JavaScript từ dữ liệu trong chuỗi JSON.

- Khi bạn kết hợp cả hai phần lại với nhau (`JSON.parse(JSON.stringify(obj))`), bạn đang thực hiện hai bước sau:

  - Đầu tiên, bạn chuyển đối tượng `obj` thành một chuỗi JSON bằng `JSON.stringify(obj)`. Điều này tạo ra một bản sao của cấu trúc dữ liệu `obj`.

  - Sau đó, bạn chuyển đổi chuỗi JSON này trở lại thành một đối tượng JavaScript hoặc mảng bằng `JSON.parse()`. Bước này tạo ra một bản sao sâu của đối tượng gốc `obj`, bao gồm cả các đối tượng lồng nhau bên trong nếu có.

- Mục đích chính của việc này là tạo một bản sao độc lập của đối tượng gốc mà không ảnh hưởng đến đối tượng gốc khi bạn thay đổi đối tượng sao chép. Điều này rất hữu ích khi bạn làm việc với dữ liệu và muốn giữ nguyên dữ liệu gốc trong khi thay đổi dữ liệu sao chép.

### ✅✅ Hãy giải thích ✅✅

## Tạo đối tượng và tham chiếu trong JavaScript

- cho em hỏi tóm lược như sau đã chính xác chưa ạ? : - Khi bạn định nghĩa `const user = {name: "tuấn", age: 26}`, hai vùng nhớ mới được tạo ra: 1. Vùng nhớ lưu trữ đối tượng: Một vùng nhớ mới được cấp phát để lưu trữ đối tượng `{name: "tuấn", age: 26}`. Đối tượng này được lưu trữ trong vùng nhớ này với các thuộc tính `name` và `age`. 2. Vùng nhớ lưu trữ tham chiếu: Một vùng nhớ khác chứa địa chỉ (tham chiếu) của vùng nhớ chứa đối tượng. Tham chiếu này được đặt tên là `user`.

- Trả lời:

- **Mô tả cách hoạt động của đối tượng và tham chiếu**

- Khi bạn định nghĩa `const user = {name: "tuấn", age: 26}`, hai vùng nhớ mới được tạo ra:

1. **Vùng nhớ lưu trữ đối tượng:** Một vùng nhớ mới được cấp phát để lưu trữ đối tượng `{name: "tuấn", age: 26}`. Đối tượng này chứa các thuộc tính `name` và `age` và được lưu trữ trong vùng nhớ này.

2. **Vùng nhớ lưu trữ tham chiếu:** Một vùng nhớ khác (mà bạn gọi là "vùng nhớ lưu trữ tham chiếu") chứa địa chỉ của vùng nhớ chứa đối tượng. Tham chiếu này, trong trường hợp này, là biến `user`. Tham chiếu này không lưu trữ trực tiếp đối tượng, mà chỉ chứa địa chỉ của nơi đối tượng được lưu trữ.

- Khi bạn sử dụng biến `user`, nó sẽ trỏ đến địa chỉ của vùng nhớ lưu trữ đối tượng, cho phép bạn truy cập và thay đổi thuộc tính của đối tượng thông qua biến `user`.
