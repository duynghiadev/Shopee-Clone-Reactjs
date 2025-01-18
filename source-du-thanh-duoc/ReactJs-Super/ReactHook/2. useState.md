# useState

## useState dùng để khởi tạo state trong functional component

## Hãy set state đúng cách

- Sử dụng set state function của hook để set state, nhớ trả về một object mới
- set state trong hook không có tính năng merge như bên `setState` function của class component

## Khi dùng function để khởi tạo state thì truyền vào callback để tránh call mỗi khi component re-render
