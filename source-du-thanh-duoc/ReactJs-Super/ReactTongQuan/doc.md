# Tổng quan về React

## 1. React là gì? Tại sao lại chọn React?

ReactJs là một framework Javascript dùng để xây dựng các Single Page Application (SPA)

SPA là những trang web mà không bị reload khi chúng ta chuyển trang. Ví dụ: Facebook, Twitter, Instagram, Youtube, Gmail,...

Ngoài React thì còn có rất nhiều JS Framework có thể tạo được SPA như Angular, Vue, Svetle,...

### Tại sao lại chọn React?

Chúng ta sẽ so sánh React với 2 framework lớn hiện tại là Angular và Vue

#### Độ khó

- React và Vue theo mình sẽ dễ tiếp cận hơn cho những bạn mới bắt đầu học về các framework SPA
- Angular là framework khá khó nếu mới bắt đầu vì bạn phải học Typescript cùng những concept khá phức tạp như RXJS, Depedency Injection,...

#### Sự phổ biến

- React là framework SPA phổ biến nhất hiện nay, số lượt tải hàng tháng gấp 3 lần Vue và Angular cộng lại.
- Hệ sinh thái xung quanh React cũng rất lớn, được rất nhiều các công ty trên thế giới tin dùng.
- Nhu cầu việc làm của React cũng lớn hơn rất nhiều so với Vue và Angular

#### Tốc độ

Về tốc độ của React, Angular, Vue nhìn chung thì cũng tương đương nhau, chúng ta không cần quá quan tâm về điều này.

Kích thước file Build của React, Angular, Vue cũng phụ thuộc khá nhiều vào những thứ chúng ta implement vào như thư viện sử dụng nên cũng khó mà đánh giá.

#### Hệ sinh thái

- Như mình đã nói thì HST React rất vượt trội, nếu bạn học React bạn cũng có thể viết được mobile với React native hay desktop app với Election

- Next.js là một framework react hỗ trợ server side rendering mạnh nhất hiện nay.

## 2. So sách SPA vs MPA

MPA là Multiple Page Application, tức là những website truyền thống chuyển trang thì sẽ load lại toàn bộ trang web.

### Độ khó học

- SPA khó hơn so với MPA khi bạn phải học thêm một đống thứ xung quanh js framework

### SEO

- MPA SEO tốt hơn so với SPA vì trả về source html ngay khi load trang web, còn SPA thì phải mất thời gian mới render ra html.
- Những bot crawler hiện nay không đọc tốt những trang web mà SPA

=> Nhưng vẫn có cách cải thiện điểm yếu này là render html ngay tại server luôn rồi trả về tương tự MPA. Chúng ta có thể dùng Next.js thay vì React thuần.

### UX

- SPA tăng trải nghiệm người dùng vì không phải tải lại toàn bộ trang web
- MPA tải lại cả trang web mỗi khi chuyển trang đem lai trải nghiệm không thân thiện

### Thân thiện dev

- SPA giúp phân chia rõ ràng code giữa frontend và backend => phát triển dễ dàng
- SPA có thể tải sử dụng các component dễ dàng
- MPA thì không có sự phân chia rõ ràng giữa frontend và backend, backend đôi khi cũng phải xử lý những công việc của frontend

### Tốc độ tải trang

- Load lần đầu: MPA nhanh hơn so với SPA
- Những lần chuyển trang tiếp theo: SPA nhanh hơn MPA
- Server bên SPA sẽ được giảm tải hơn khi so với MPA
- Server thiết kế cho SPA cũng có thể dùng được cho mobile => tiết kiệm thời gian

## 3. Những cách setup một dự án React

1. Chèn file javascript tương tự như cách chúng ta dùng jquery. Cách này dùng khi chúng ta đã có một website từ trước và muốn implement react vào 1 phần nhỏ trong website, cách này sẽ có nhiều hạn chế

2. Dùng Create React App. Đây là tool tạo nhanh một project React do Facebook phát triển => Cách này đáp ứng được hầu hết nhu cầu của chúng ta khi phát triển dự án

3. Tự build project React dựa trên Webpack hoặc Vite => Cách này giúp chúng ta tùy biến sâu nhất cho phù hợp dự án nhưng đòi hỏi cần có kiến thức về các build tool.

Khóa học này mình sẽ hướng dẫn các bạn dùng CRA và Webpack để build React luôn.
