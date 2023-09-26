# Giới thiệu và Cài đặt Git

## 1. Git là gì?

Git là verson control, là một hệ thống ghi lại những thay đổi trên dự án của chúng ta.

Ví dụ: Thời sinh viên chưa biết Git mỗi khi code bài tập nhóm mà mỗi người phát triển một tính năng, sau khi mình code xong thì sẽ nén folder lại rồi gửi qua Google Drive cho người khác tải về rồi đồng bộ. Lúc đồng bộ xong thì đôi lúc dự án lớn quá nên biết ai là người code cái function này, tại sao lúc đó lại code đoạn code như thế... Nói chung là rất mất thời gian. Nếu lúc đó biết Git là mọi chuyện sẽ đơn giản hơn nhiều.

## 2. Github là gì?

Github là một dịch vụ trên mạng giúp chúng ta lưu trữ code và làm việc chung với nhau. Tính năng lưu trữ code Github dựa trên Git. Tất nhiên là ngoài tính năng chính là lưu trữ và quản lý code thì Github còn có những tính năng khác như Github page hay Github action nhưng bây giờ chỉ cần quan tâm tính năng chính thôi.

## 3. Cài Git trên máy tính

- Vào trang [https://git-scm.com/downloads](https://git-scm.com/downloads) để tải và cài đặt Git dựa trên từng hệ điều hành. Mình dùng Windows thì sẽ tải về và install.

- Sau khi cài đặt xong mở một terminal bất kỳ và gõ `git --version`, nếu nó in ra phiên bản Git hiện tại thì đã cài thành công.

> Khi cài trên windows thì các bạn sẽ có thêm một terminal nữa đó là Git Bash

## 4. Cài đặt Windows terminal cho môi trường Windows (HĐH khác thì bỏ qua)

1. Các bạn dùng win 10 hoặc 11 thì search `Terminal` trên ô search của windows và mở nó lên. Nếu chưa có thì vào Microsoft Store tìm và cài `Windows Terminal`
2. Sau khi mở Windows Terminal lên thì bấm vào mũi tên dropdown chọn Settings
3. Tại tab Settings thì chọn "Add a new profile" -> "New empty profile"
4. Click vào Profile vừa được add, Chỉnh sửa Name lại thành Git bash
5. Tại dòng "Command line" chúng ta chọn file .exe của Git bash. Nếu tại đây các bạn chọn `C:\ProgramData\Microsoft\Windows\Start Menu\Programs\Git\Git Bash` thì khi mở tab Git bash nó sẽ mở thêm 1 cửa sổ git bash terminal. Vì thế đường dẫn đúng phải là **`C:\Program Files\Git\bin\bash.exe`**
6. Tiếp theo chúng ta chọn đường dẫn khi mở Git bash lên tại Starting directory
7. Chọn icon cho Git bash, các bạn điền `C:\Program Files\Git\mingw64\share\git\git-for-windows.ico`
8. Cài đặt UI cho Git bash thì các bạn có thể tự tinh chỉnh cho phù hợp, mình thì dùng One Half Dark cho Color Scheme, Font face là Cascadia Code
9. Nhớ nhấn **Save** sau khi đã setting xong.
10. Tiếp theo ta cần set Git bash là Default Profile. Chọn mục "Startup" bên tay trái, Tại phần Default Profile thì chọn Git bash và tại phần "When Terminal starts" thì chọn "Open a tab with the default profile". Cuối cùng nhấn "Save"
