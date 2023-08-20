# SEO căn bản

## SEO là gì

SEO là kỹ thuật giúp website được xếp hạng cao trên các search engine

> Nếu 1 website tốt, sản phẩm tốt nhưng không ai biết, không ai click vào thì sản phẩm đó thất bại!

Để website được xếp hạng cao phụ thuộc rất nhiều yếu tố, nhưng quan trọng nhất vẫn là content.

> Content is king!

Ngoài ra còn những yếu tố khác như backlink, cấu trúc website, độ trust,...

Anh em dev chúng ta chỉ can thiệp được yếu tố cấu trúc website thôi.

## Như thế nào là cấu trúc web chuẩn

- Dùng đúng nhiệm vụ các thẻ khai báo HTML như `<head>`, `<body>`, các thẻ heading, thẻ p
- Một trang của 1 web thì chỉ nên có 1 thẻ `<h1>`, các thẻ heading khác thì bao nhiêu cũng được
- Sử dụng các thẻ meta, title cho từng trang
- URL dễ đọc
- Mô tả ảnh với alt
- Responsive trên mobile

- Tìm hiểu thêm Open Graph và shema JSOND để tăng tính thân thiện với search engine

## SSR

Đúng là một số search engine hiện nay có thể render được javascript, ví dụ như google. Nhưng nếu js của website các bạn phức tạp thì thời gian render sẽ lâu và google sẽ bỏ qua => coi như là website bạn không có content.

Vậy nên giải pháp tốt nhất là render sẵn html ở server của bạn.

Nếu dùng ReactJs thì hãy nghĩ đến NextJs hoặc Remix

## Để website xuất hiện trên google

- Khai báo website với google search console
- Tạo sitemap cho website
- Tạo file robots.txt

## Website phải có tốc độ load nhanh

ReactJs đã render ở client rồi, mà còn chậm nữa thì user sẽ thoát ra ngay. Nếu nhiều người dùng thoát ra thì sẽ làm tăng tỉ lệ "thoát trang" => website thứ hạng sẽ bị tụt trầm trọng.

Vậy nên anh em dev cần phải optimize file build bằng code spliting, minified, gzip, xóa những thư viện không cần thiết, tree shaking => Đã được mình nói hết trong chương **Shopee Clone Performance** của khóa học!

Ngoài ra thì cũng nên có server phải tốt, CDN, caching,...

## Giải pháp nào cho việc seo cho reactjs thuần?

Như mình nói ở trên thì chỉ có vấn đề server side rendering ở server là khó nhất.

Nếu đã lỡ sử dụng ReactJs rồi thì cân nhắc giải pháp

Check user agent

- Nếu mà người dùng thì trả về reactjs
- Nếu mà là bot thì trả về cấu trúc thân thiện với search engine
