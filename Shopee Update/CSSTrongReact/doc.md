# Css trong React

## Global CSS trong SPA

Vì là SPA nên cần phải quản lý css chặc chẽ để không bị override lẫn nhau.

React có một khuyết điểm so với các SPA framework khác đó là css không được scoped theo component, hay còn gọi là css trong React là global scoped.

> Scoped CSS nghĩa là CSS cái nào thì chỉ tác động cái đó thôi, không ảnh hưởng đến các component khác.

Vậy nên cần phải dùng các thư viện ngoài để giải quyết vấn đề này

## CSS, SCSS

Vì nó không scoped nên nếu import css, scss thì nên dùng cho reset css hay css global.

## Inline CSS

Dùng trong trường hợp chỉ css nhẹ, css dựa vào điều kiện. Không khuyến khích css tất cả bằng inline css

## Atomic CSS

Trường phái mới, dùng hay nhưng cần phải học thuộc tên class khá nhiều và cần thời gian làm quen.

## Styled Component

Scoped được CSS nhưng lại tạo ra một component mới, viết dài dòng, bù lại có thêm vài tính năng mới như truyền prop vào

## CSS module

Viết đỡ dài dòng mà cũng scoped được css, thân thiện với các bạn mới nhất.
