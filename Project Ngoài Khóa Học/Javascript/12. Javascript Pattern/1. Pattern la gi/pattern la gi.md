# Design Pattern là gì

Nói một cách đơn giản design pattern là khuôn mẫu thiết kế có sẵn để giải quyết một vấn đề. Đây là một thứ khá là vĩ mô nhằm giúp code của bạn trông thống nhất và hiệu quả. Bạn không nghe nhầm đâu, vĩ mô cả đấy 😆

Thường thì bạn sẽ không phải tự chế ra các design pattern mà là đã có các tiền bối sáng tạo ra nó, họ cảm thấy nếu viết code như thế sẽ mang lại sự hiệu quả và dễ đọc. Bây giờ chúng ta cứ thế mà phang thôi.

Ví dụ :

Bạn code một app **todo list** đơn giản cỡ 200 dòng code, bạn chỉ cần dùng các function gọi đi gọi lại là đủ rồi. Nhưng khi có 2-3 người vào code chung với bạn, mỗi người mỗi phong cách code dẫn đến mất đi sự nhất quán của code ban đầu. Mặc dầu code chạy được nhưng sau này đọc lại bạn sẽ thấy code rất khó bảo trì. Chưa kể nếu bạn đầu thiết kế code không khoa học thì sẽ rất khó mở rộng hay thêm chức năng. Đó là lý do bạn cần thống nhất design pattern ngay từ đầu.

**Design Pattern** có ở mọi ngôn ngữ và mỗi ngôn ngữ lại có nhiều loại design pattern khác nhau. Với lập trình viên Front-End thì chúng ta hay dùng các Framework như React, Angular, Vue. Bạn có để ý thấy là mỗi framework có mỗi cách code khác nhau không? Đó là do chúng áp dụng nhiều design pattern khác nhau.

Ví du:

Angular sử dụng Depedency Injection, Observer,…
React thì dùng High Order Component, cũng được biết đến như là Decorator Pattern.
Ở trong bài viết này mình sẽ chia sẽ với anh em những design pattern phổ biến trong Javascript (chứ thật ra JS nó có nhiều lắm, chia sẽ không hết luôn 😥 ), cùng đi tìm hiểu design pattern đầu tiên thôi 🙄

Đọc thêm: [[Phần 1] Học nhanh các Javascript Design Pattern](https://xdevclass.com/phan-1-hoc-nhanh-cac-javascript-design-pattern/)
