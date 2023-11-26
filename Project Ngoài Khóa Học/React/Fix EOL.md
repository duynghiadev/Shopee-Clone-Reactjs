# Fix lỗi liên quan end of line (eol)

## Nhận diện lỗi

- Khi commit lên Git sẽ hiển thị "LF will be replaced by CRLF"
- Khi khôi phục code thì eslint sẽ báo lỗi liên quan 'endOfLine'

## Lý do

- Mặc định Windows sẽ dùng eol là CRLF
- Khi chúng ta commit thì CRLF sẽ được git tự động chuyển thành LF
- Khi pull code về hoặc checkout thì LF sẽ tự động chuyển thành CRLF

## Cách khắc phục

### 1. Vào setting gõ 'eol'

Files: eol thành auto (mặc định)
Prettier: End Of Line thành auto

### 2. Vào .prettierrc

"endOfLine": "crlf"

### 3. Mở terminal lên

yarn prettier:fix

### 4. Vào .eslintrc

"endOfLine": "auto"

### 5. Vào .prettierrc

"endOfLine": "auto"

### 6. Nếu có file nào còn dạng LF thì chuyển sang CRLF Editor

## 7. push code lên git
