import { rest } from 'msw'
import config from 'src/constants/config'
import HttpStatusCode from 'src/constants/httpStatusCode.enum'

const productsRes = {
  message: 'Lấy các sản phẩm thành công',
  data: {
    products: [
      {
        _id: '60ad02422fb52902585972a9',
        images: [
          'https://api-ecom.duthanhduoc.com/images/08b79b1d-169d-4de1-85a2-4e5e8ff535b7.jpg',
          'https://api-ecom.duthanhduoc.com/images/182d6e25-65fa-4abe-b822-70d87550bf4e.jpg',
          'https://api-ecom.duthanhduoc.com/images/827e675d-e553-497e-9b15-d2df5fc7192d.jpg',
          'https://api-ecom.duthanhduoc.com/images/b6425e3f-3cc3-4696-94f7-5053afca2c71.jpg',
          'https://api-ecom.duthanhduoc.com/images/4d80b312-e605-4508-ab80-14dd75f6d23d.jpg',
          'https://api-ecom.duthanhduoc.com/images/9e628716-0b94-44d8-850c-e96adc4b1c8f.jpg',
          'https://api-ecom.duthanhduoc.com/images/20a1a8e5-1b49-4854-a221-0f96130b5fd8.jpg'
        ],
        price: 279000,
        rating: 5,
        price_before_discount: 315000,
        quantity: 1959,
        sold: 36,
        view: 44,
        name: '[Mã FAMALLT5 giảm 15% đơn 150K] Áo thun tay lỡ GENZ phông Unisex nam nữ Cotton oversize form rộng Racing Genz GZT021',
        category: {
          _id: '60aba4e24efcc70f8892e1c6',
          name: 'Áo thun',
          __v: 0
        },
        image: 'https://api-ecom.duthanhduoc.com/images/08b79b1d-169d-4de1-85a2-4e5e8ff535b7.jpg',
        createdAt: '2021-05-25T13:57:22.760Z',
        updatedAt: '2022-11-30T10:19:23.942Z'
      },
      {
        _id: '60ad01102fb52902585972a7',
        images: [
          'https://api-ecom.duthanhduoc.com/images/05f090b8-736e-4100-b4f4-7a09f48e718a.jpg',
          'https://api-ecom.duthanhduoc.com/images/594a2d08-04f4-4902-873f-e9ba865bc497.jpg',
          'https://api-ecom.duthanhduoc.com/images/0f906616-bc7f-4661-9bbe-5570b5d902b7.jpg',
          'https://api-ecom.duthanhduoc.com/images/e129d0b1-8a45-463a-a668-d619461ae984.jpg',
          'https://api-ecom.duthanhduoc.com/images/780a9d1a-74e9-4d8c-bbae-ed3d5eca8b97.jpg',
          'https://api-ecom.duthanhduoc.com/images/986f2f5b-23cc-498f-9adb-9d07e6923eb3.jpg',
          'https://api-ecom.duthanhduoc.com/images/e383805f-e875-4398-800d-ae07f2d2e8ce.jpg',
          'https://api-ecom.duthanhduoc.com/images/c3df0eba-05f8-4ba8-9ef4-f67a28fa4b81.jpg',
          'https://api-ecom.duthanhduoc.com/images/7cefd5f0-6ded-443d-821b-4909592e6490.jpg'
        ],
        price: 53000,
        rating: 5,
        price_before_discount: 106000,
        quantity: 16746,
        sold: 2255,
        view: 97,
        name: 'Áo thun nam nữ tay lỡ YINXX, áo phông nam nữ form rộng A304',
        category: {
          _id: '60aba4e24efcc70f8892e1c6',
          name: 'Áo thun',
          __v: 0
        },
        image: 'https://api-ecom.duthanhduoc.com/images/b1c008a6-bb10-46a6-8caf-2b0e9ca4e175.jpg',
        createdAt: '2021-05-25T13:52:16.271Z',
        updatedAt: '2022-12-14T17:57:13.575Z'
      },
      {
        _id: '60ad004c2fb52902585972a6',
        images: [
          'https://api-ecom.duthanhduoc.com/images/b1c008a6-bb10-46a6-8caf-2b0e9ca4e175.jpg',
          'https://api-ecom.duthanhduoc.com/images/2df345c5-4381-4863-9510-17f44572ad45.jpg',
          'https://api-ecom.duthanhduoc.com/images/00b21c79-e1a0-45f0-9152-6881e644b15b.jpg',
          'https://api-ecom.duthanhduoc.com/images/dc35e2ed-0407-4f27-9b97-bad9bc785deb.jpg',
          'https://api-ecom.duthanhduoc.com/images/f1de05b8-60c5-4940-be9f-b6cc98d34061.jpg',
          'https://api-ecom.duthanhduoc.com/images/4788c7fd-d728-4f47-8000-e858d6466384.jpg',
          'https://api-ecom.duthanhduoc.com/images/b4614934-0164-4845-bf14-d19de6c36835.jpg',
          'https://api-ecom.duthanhduoc.com/images/1ec5e192-c2fc-4411-b170-4aa2b1635ddb.jpg',
          'https://api-ecom.duthanhduoc.com/images/a751a941-7d74-4f2a-a238-c806b055ed11.jpg'
        ],
        price: 49000,
        rating: 5,
        price_before_discount: 70000,
        quantity: 6797,
        sold: 21,
        view: 65,
        name: 'Mẫu Mới Khuyến Mãi Sốc 3 Ngày ⚡ Áo Thun Tay Lỡ In Bướm Dirty Coins Ao Thun Unisex From Rộng -BONSEN STORE',
        category: {
          _id: '60aba4e24efcc70f8892e1c6',
          name: 'Áo thun',
          __v: 0
        },
        image: 'https://api-ecom.duthanhduoc.com/images/b1c008a6-bb10-46a6-8caf-2b0e9ca4e175.jpg',
        createdAt: '2021-05-25T13:49:00.060Z',
        updatedAt: '2022-12-14T12:50:34.370Z'
      },
      {
        _id: '60acfac72fb529025859729f',
        images: [
          'https://api-ecom.duthanhduoc.com/images/ad82b185-5c18-41ca-90ec-1c54c846fd49.jpg',
          'https://api-ecom.duthanhduoc.com/images/04001c71-9d8f-4e68-b9ac-cbb47406f30f.jpg',
          'https://api-ecom.duthanhduoc.com/images/3142a89e-8301-42c3-9621-1c901e4a097b.jpg',
          'https://api-ecom.duthanhduoc.com/images/849be86c-8880-44dd-a037-ffc447d336f3.jpg',
          'https://api-ecom.duthanhduoc.com/images/0856c2f1-fcc7-470d-9e99-d7b9f6f32dcc.jpg'
        ],
        price: 39000,
        rating: 5,
        price_before_discount: 60000,
        quantity: 17453,
        sold: 97,
        view: 107,
        name: '[Có video] Áo phông form rộng tay lỡ unisex - Áo thun orange soda - Sỉ áo thun số lượng lớn',
        category: {
          _id: '60aba4e24efcc70f8892e1c6',
          name: 'Áo thun',
          __v: 0
        },
        image: 'https://api-ecom.duthanhduoc.com/images/ad82b185-5c18-41ca-90ec-1c54c846fd49.jpg',
        createdAt: '2021-05-25T13:25:27.965Z',
        updatedAt: '2022-11-26T12:14:13.481Z'
      },
      {
        _id: '60acf0ec2fb5290258597299',
        images: [
          'https://api-ecom.duthanhduoc.com/images/25c409a5-9e6c-4e2d-a49e-23a8c291f749.jpg',
          'https://api-ecom.duthanhduoc.com/images/85e6928d-9e7f-4ff9-8105-8389448f6a48.jpg',
          'https://api-ecom.duthanhduoc.com/images/1705c99d-e61b-4eb3-a786-7d90e927b242.jpg',
          'https://api-ecom.duthanhduoc.com/images/6f9f953c-6048-419f-87c3-24c24620dfab.jpg',
          'https://api-ecom.duthanhduoc.com/images/49eaf710-c340-43fc-b321-43bf896d7a39.jpg',
          'https://api-ecom.duthanhduoc.com/images/400b5529-01d4-42d7-be63-e179f8c0a4df.jpg',
          'https://api-ecom.duthanhduoc.com/images/f0b9ff49-824f-4a7a-8bce-a4d6599e26a6.jpg',
          'https://api-ecom.duthanhduoc.com/images/03c61a2a-f703-486b-961d-73b38be7240f.jpg',
          'https://api-ecom.duthanhduoc.com/images/59bcd4bd-fd27-416c-b7df-dd831a3da621.jpg'
        ],
        price: 119000,
        rating: 5,
        price_before_discount: 198000,
        quantity: 234,
        sold: 24,
        view: 259,
        name: 'Áo thun nam ngắn tay thể thao chất liệu thun lạnh 4 chiều AT39',
        category: {
          _id: '60aba4e24efcc70f8892e1c6',
          name: 'Áo thun',
          __v: 0
        },
        image: 'https://api-ecom.duthanhduoc.com/images/25c409a5-9e6c-4e2d-a49e-23a8c291f749.jpg',
        createdAt: '2021-05-25T12:43:24.537Z',
        updatedAt: '2022-11-07T20:09:29.996Z'
      },
      {
        _id: '60abaa9adbfa6e153cb9962c',
        images: [
          'https://api-ecom.duthanhduoc.com/images/c9e6cdf9-5d7c-4767-ab19-5d64b133fd3b.jpg',
          'https://api-ecom.duthanhduoc.com/images/d938561d-9ad1-4f61-822a-9d29b3cb663e.jpg',
          'https://api-ecom.duthanhduoc.com/images/7c2e9bd9-0773-4f17-9568-62ab8ce3a689.jpg',
          'https://api-ecom.duthanhduoc.com/images/a70f8655-53c8-4359-96c2-ac733f11279e.jpg',
          'https://api-ecom.duthanhduoc.com/images/dd139f2c-14cf-43f8-ab58-2b4cadcd2140.jpg'
        ],
        price: 69000,
        rating: 5,
        price_before_discount: 80000,
        quantity: 8129,
        sold: 4100,
        view: 107,
        name: '[Mã FAMAYMA2 giảm 10K đơn 50K] Áo thun nam nữ form rộng Yinxx, áo phông tay lỡ ATL43',
        category: {
          _id: '60aba4e24efcc70f8892e1c6',
          name: 'Áo thun',
          __v: 0
        },
        image: 'https://api-ecom.duthanhduoc.com/images/c9e6cdf9-5d7c-4767-ab19-5d64b133fd3b.jpg',
        createdAt: '2021-05-24T13:31:06.769Z',
        updatedAt: '2022-11-27T16:00:39.393Z'
      },
      {
        _id: '60aba9a2dbfa6e153cb9962b',
        images: [
          'https://api-ecom.duthanhduoc.com/images/2b5e1bfa-b202-46b3-b68b-f6c8a19cb1cf.jpg',
          'https://api-ecom.duthanhduoc.com/images/71ff840e-80bd-4d01-b997-f409392c3901.jpg',
          'https://api-ecom.duthanhduoc.com/images/9fb54b27-bb8d-415c-bb41-72a113f33fb5.jpg',
          'https://api-ecom.duthanhduoc.com/images/2741ba1d-844f-4b6d-baa8-8ebe41a4d5af.jpg',
          'https://api-ecom.duthanhduoc.com/images/63a231e8-aa62-4b0a-a7c7-9d327181ae0a.jpg',
          'https://api-ecom.duthanhduoc.com/images/050e6792-e9bb-4093-b198-3864eddffa3f.jpg',
          'https://api-ecom.duthanhduoc.com/images/92a099c0-b9b7-4d37-b234-ee319868bfe4.jpg',
          'https://api-ecom.duthanhduoc.com/images/23d8c0fb-8d30-4438-a973-3908a89db968.jpg',
          'https://api-ecom.duthanhduoc.com/images/4553c8a6-dfb8-4323-97b9-bf17cac384a4.jpg'
        ],
        price: 69000,
        rating: 5,
        price_before_discount: 100000,
        quantity: 23565,
        sold: 3800,
        view: 289,
        name: '[Mã FAMAYMA2 giảm 10K đơn 50K] Áo thun tay lỡ unisex Yinxx, áo phông form rộng ATL187',
        category: {
          _id: '60aba4e24efcc70f8892e1c6',
          name: 'Áo thun',
          __v: 0
        },
        image: 'https://api-ecom.duthanhduoc.com/images/2b5e1bfa-b202-46b3-b68b-f6c8a19cb1cf.jpg',
        createdAt: '2021-05-24T13:26:58.072Z',
        updatedAt: '2022-12-03T22:44:09.909Z'
      }
    ],
    pagination: {
      page: 1,
      limit: 30,
      page_size: 1
    }
  }
}
const productDetailRes = {
  message: 'Lấy sản phẩm thành công',
  data: {
    _id: '60afb2426ef5b902180aacb9',
    images: [
      'https://api-ecom.duthanhduoc.com/images/aa374023-7a5b-46ea-aca3-dad1b29fb015.jpg',
      'https://api-ecom.duthanhduoc.com/images/b997dac2-2674-4e20-b5ee-459566b077e7.jpg',
      'https://api-ecom.duthanhduoc.com/images/ac328d77-6014-4a2d-8626-924ac35876df.jpg',
      'https://api-ecom.duthanhduoc.com/images/5061fefa-bded-4fb0-80e5-3623656a4816.jpg',
      'https://api-ecom.duthanhduoc.com/images/02c08a86-4d9b-437b-ae02-f1d49cf2933b.jpg',
      'https://api-ecom.duthanhduoc.com/images/12c405e3-b24f-46ef-8969-54050e1022e9.jpg',
      'https://api-ecom.duthanhduoc.com/images/d448057c-3d3d-45d2-a9bc-e984bc80555f.jpg'
    ],
    price: 2590000,
    rating: 4.2,
    price_before_discount: 3490000,
    quantity: 73,
    sold: 6800,
    view: 3359,
    name: 'Điện thoại OPPO A12 (3GB/32GB) - Hàng chính hãng',
    description:
      '<p>Thể hiện c&aacute; t&iacute;nh của bạn bằng thiết kế kim cương 3D độc đ&aacute;o của OPPO A12, c&ugrave;ng với m&agrave;n h&igrave;nh lớn &ldquo;giọt nước&rdquo; tuyệt mỹ v&agrave; camera k&eacute;p s&agrave;nh điệu, bạn sẽ lu&ocirc;n vui vẻ năng động suốt cả ng&agrave;y.</p><p>Thiết kế si&ecirc;u mỏng nhẹ, họa tiết kim cương 3D ấn tượng<br />OPPO A12 sở hữu thiết kế kh&ocirc;ng chỉ đẹp ph&aacute; c&aacute;ch m&agrave; c&ograve;n rất dễ d&agrave;ng để sử dụng tr&ecirc;n tay. Trọng lượng cực nhẹ 165gram, độ mỏng chỉ 8,3mm kết hợp với những đường bo cong kh&eacute;o l&eacute;o gi&uacute;p điện thoại v&ocirc; c&ugrave;ng gọn nhẹ, mượt m&agrave; trong l&ograve;ng b&agrave;n tay. Kiểu d&aacute;ng của OPPO A12 đặc biệt ấn tượng nhờ điểm nhấn l&agrave; mặt lưng họa tiết 3D kim cương độc đ&aacute;o. Ở mỗi g&oacute;c nh&igrave;n kh&aacute;c nhau, bạn sẽ thấy một vẻ đẹp kh&aacute;c nhau, gi&uacute;p chiếc điện thoại trở n&ecirc;n thực sự nổi bật.</p><p>M&agrave;n h&igrave;nh lớn 6,22 inch &ldquo;giọt nước&rdquo; bảo vệ mắt<br />Bạn sẽ được tận hưởng những h&igrave;nh ảnh hấp dẫn tr&ecirc;n OPPO A12 nhờ m&agrave;n h&igrave;nh lớn k&iacute;ch thước 6,22 inch, hiệu ứng tr&agrave;n viền dạng &ldquo;giọt nước&rdquo; đẹp mắt, tăng cường trải nghiệm xem phim, chơi game.</p><p>Mở kh&oacute;a theo c&aacute;ch của bạn<br />Kh&ocirc;ng cần phải nhập mật khẩu mỗi lần mở m&aacute;y nữa, OPPO A12 cho ph&eacute;p bạn đăng nhập bằng cảm biến v&acirc;n tay hoặc nhận diện khu&ocirc;n mặt AI rất tiện lợi. Chỉ cần chạm nhẹ v&agrave;o khu vực cảm biến mặt lưng hoặc đơn giản l&agrave; đưa m&aacute;y l&ecirc;n, điện thoại sẽ ngay lập tức nhận ra chủ nh&acirc;n của m&aacute;y v&agrave; mở kh&oacute;a một c&aacute;ch sẵn s&agrave;ng.</p><p>Bộ vi xử l&yacute; 8 nh&acirc;n mạnh mẽ<br />OPPO A12 sở hữu cấu h&igrave;nh đ&aacute;ng nể trong tầm gi&aacute; rẻ nhờ bộ vi xử l&yacute; Helio P35. Con chip mới từ nh&agrave; MediaTek sản xuất tr&ecirc;n tiến tr&igrave;nh 12nm với 8 nh&acirc;n cực mạnh, trong đ&oacute; 4 nh&acirc;n 2,35GHz v&agrave; 4 nh&acirc;n 1,8GHz đi c&ugrave;ng GPU đồ họa PowerVR GE8320.</p><p>Thời lượng pin suốt cả ng&agrave;y<br />Mang tr&ecirc;n m&igrave;nh vi&ecirc;n pin dung lượng cực &ldquo;khủng&rdquo; 4230 mAh, bạn c&oacute; thể thoải m&aacute;i sử dụng trong 2 ng&agrave;y ở nhu cầu sử dụng b&igrave;nh thường.</p><p>&Acirc;m thanh sống động<br />OPPO A12 được trang bị t&iacute;nh năng Dirac, một t&iacute;nh năng cho ph&eacute;p chuyển đổi c&aacute;c chế độ &acirc;m thanh th&ocirc;ng minh để tối ưu h&oacute;a &acirc;m thanh dựa tr&ecirc;n t&aacute;c vụ bạn đang hoạt động.</p><p>Camera k&eacute;p AI, tỏa s&aacute;ng trong từng bức ảnh<br />OPPO A12 sở hữu camera k&eacute;p ở mặt sau, bao gồm camera ch&iacute;nh 13MP v&agrave; camera 2MP hỗ trợ đo độ s&acirc;u trường ảnh. Camera ch&iacute;nh chất lượng mang đến những h&igrave;nh ảnh sắc n&eacute;t, r&otilde; r&agrave;ng v&agrave; độ s&aacute;ng, m&agrave;u sắc trung thực.</p><p>Th&ocirc;ng số kỹ thuật chi tiết<br />M&agrave;n h&igrave;nh<br />C&ocirc;ng nghệ m&agrave;n h&igrave;nh : IPS LCD<br />M&agrave;u m&agrave;n h&igrave;nh : 16 triệu m&agrave;u<br />Chuẩn m&agrave;n h&igrave;nh : HD +<br />Độ ph&acirc;n giải m&agrave;n h&igrave;nh : 720 x 1560 Pixels<br />M&agrave;n h&igrave;nh : 6.22 inches<br />Mặt k&iacute;nh m&agrave;n h&igrave;nh : Corning Gorilla Glass 3<br />Camera Trước<br />Độ ph&acirc;n giải : 5 MP<br />Th&ocirc;ng tin kh&aacute;c : Xo&aacute; ph&ocirc;ng, L&agrave;m đẹp (Selfie A.I Beauty), Nh&atilde;n d&aacute;n (AR Stickers), Flash m&agrave;n h&igrave;nh, To&agrave;n cảnh (Panorama), Quay video HD, Chụp bằng cử chỉ, Nhận diện khu&ocirc;n mặt, L&agrave;m đẹp (Beautify), Quay video Full HD, Tự động lấy n&eacute;t (AF), HDR<br />Camera Sau<br />Độ ph&acirc;n giải : Ch&iacute;nh 13 MP &amp; Phụ 2 MP<br />Quay phim : Quay phim HD 720p@30fps<br />Đ&egrave;n Flash : C&oacute;<br />Chụp ảnh n&acirc;ng cao : Google Lens, G&oacute;c si&ecirc;u rộng (Ultrawide), Nh&atilde;n d&aacute;n (AR Stickers), Chụp bằng cử chỉ, Xo&aacute; ph&ocirc;ng, Quay chậm (Slow Motion), Tr&ocirc;i nhanh thời gian (Time Lapse), A.I Camera, L&agrave;m đẹp, Tự động lấy n&eacute;t (AF)<br />Cấu h&igrave;nh phần cứng<br />Tốc độ CPU : 2.3GHz<br />Số nh&acirc;n : 4 nh&acirc;n 2.35 GHz &amp; 4 nh&acirc;n 1.9 GHz<br />Chipset : MediaTek Helio P35 8 nh&acirc;n<br />RAM : 3 GB<br />Chip đồ họa (GPU) : PowerVR GE8320<br />Cảm biến : Cảm biến tiệm cận, Cảm biến &aacute;nh s&aacute;ng, Cảm biến gia tốc kế<br />Bộ nhớ &amp; Lưu trữ<br />Danh bạ lưu trữ : Kh&ocirc;ng giới hạn<br />ROM : 32 GB<br />Bộ nhớ c&ograve;n lại : Đang cập nhật<br />Thẻ nhớ ngo&agrave;i : MicroSD<br />Hỗ trợ thẻ nhớ tối đa : 256 GB<br />Thiết kế &amp; Trọng lượng<br />Kiểu d&aacute;ng : Nguy&ecirc;n Khối<br />Chất liệu : Khung &amp; Mặt lưng nhựa<br />K&iacute;ch thước : D&agrave;i 155.9 mm - Ngang 75.5 mm - D&agrave;y 8.3 mm<br />Trọng lượng : 165 g<br />Khả năng chống nước : Đang cập nhật<br />Th&ocirc;ng tin pin<br />Loại pin : Pin chuẩn Li-Po<br />Dung lượng pin : 4230 mAh<br />Pin c&oacute; thể th&aacute;o rời : Kh&ocirc;ng<br />Chế độ sạc nhanh : Đang cập nhật<br />Kết nối &amp; Cổng giao tiếp<br />Loại SIM : 2 Nano SIM<br />Khe cắm sim : Dual nano-SIM + 1 khe thẻ nhớ<br />Wifi : Wi-Fi 802.11 a/b/g/n/ac, DLNA, Wi-Fi Direct, Wi-Fi hotspot<br />GPS : BDS, A-GPS, GLONASS<br />Bluetooth : Bluetooth 5.0<br />GPRS/EDGE : C&oacute;<br />NFC : Đang cập nhật<br />Cổng sạc : Micro USB<br />Jack (Input &amp; Output) : 3.5mm<br />Giải tr&iacute; &amp; Ứng dụng<br />Xem phim : C&oacute;<br />Nghe nhạc : C&oacute;<br />Ghi &acirc;m : C&oacute;<br />FM radio : C&oacute;<br />Đ&egrave;n pin : C&oacute;<br />Chức năng kh&aacute;c : Đang cập nhật<br />Bảo h&agrave;nh<br />Thời gian bảo h&agrave;nh : 12 Th&aacute;ng<br />Th&ocirc;ng tin h&agrave;ng h&oacute;a<br />Xuất xứ : Trung Quốc<br />Năm sản xuất : 2020<br />Th&ocirc;ng tin d&ograve;ng sản phẩm<br />Model Series : OPPO A12<br />Hệ điều h&agrave;nh<br />Hệ điều h&agrave;nh : ColorOS 6.1.2, nền tảng Android 9<br />Bộ sản phẩm bao gồm: Hộp, Sạc, S&aacute;ch hướng dẫn, C&aacute;p, C&acirc;y lấy sim, Ốp lưng</p><p>Th&ocirc;ng tin bảo h&agrave;nh: <br />Sản phẩm được bảo h&agrave;nh 12 th&aacute;ng tại c&aacute;c trung t&acirc;m bảo h&agrave;nh OPPO<br />- 1 đổi 1 trong 30 ng&agrave;y đầu sử dụng (Lỗi phần cứng sản xuất)<br />- Giao h&agrave;ng tr&ecirc;n to&agrave;n quốc<br />- Hotline: 1800 577 776 (miễn ph&iacute;).</p><p>#OPPO #OPPOA12</p>',
    category: {
      _id: '60afafe76ef5b902180aacb5',
      name: 'Điện thoại',
      __v: 0
    },
    image: 'https://api-ecom.duthanhduoc.com/images/aa374023-7a5b-46ea-aca3-dad1b29fb015.jpg',
    createdAt: '2021-05-27T14:52:50.392Z',
    updatedAt: '2022-12-19T15:19:53.312Z'
  }
}
const productsRequest = rest.get(`${config.baseUrl}products`, (req, res, ctx) => {
  return res(ctx.status(HttpStatusCode.Ok), ctx.json(productsRes))
})
const productDetailRequest = rest.get(`${config.baseUrl}products/:id`, (req, res, ctx) => {
  return res(ctx.status(HttpStatusCode.Ok), ctx.json(productDetailRes))
})

const productRequests = [productsRequest, productDetailRequest]

export default productRequests
