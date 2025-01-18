# Unit test

## Unit test là gì?

Unit test là test đơn vị (function, component,...) trong ứng dụng.

Nó là loại test level thấp nhất, test những thứ nhỏ trong ứng dụng chúng ta.

## Một số loại test

Chia theo cách làm

- Manual test: Test thủ công, mở app lên thao tác như một user để test
- Automation test: Test tự động bằng phần mềm hoặc code, giả lập các thao tác y hệt user vậy

Chia theo quy mô

1. Unit test
2. Integration test (Test tích hợp các unit test lại với nhau)
3. GUI Test (Test app như một người dùng)

## Khi nào thì viết test

- Truyền thống: Viết Code rồi viết test
- TDD: Viết test trước, viết code sau

Những công ty mình làm nhiều công ty còn không viết test cơ, vì thời gian đâu mà viết test. Code còn không kịp cơ mà.

Còn KMS thì team mình viết code trước, test sau nhé.

Sau khi viết xong unit test, chạy xong rồi thì đưa cho tester test bằng tay hoặc automation test

## Viết Unit test khi nào là đủ

Viết đến khi nào cảm thấy bao quát đủ hết yêu cầu của dự án là được. Không có gì là đủ hết, viết unit test xong thì function bạn vẫn có thể bị những lỗi mà không ai lường trước được.

Nhưng có còn hơn không!

## Unit test ở React

Ngày trước thì người ta sẽ dùng combo Jest + React Testing library để viết unit test. Trong đó Jest là thư viện chuyên để viết Unit test cho Javascript

Xu hướng ngày nay là dùng Vite thay cho webpack. Mà Vite sử dụng ES Module. Nếu dùng với Jest sẽ không ổn, vì Jest hiện tại chỉ mới thử nghiệm trên ES Module thôi.

Giải pháp là dùng Vitest - nằm trong hệ sinh thái của Vite luôn, cấu hình đơn giản, đồng bộ với Vite config.
