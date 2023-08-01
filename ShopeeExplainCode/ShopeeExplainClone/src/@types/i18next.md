# Giải thích file code i18next.d.ts

## i18next là thư viện gì ?

- `i18next` là một thư viện JavaScript hỗ trợ quản lý ngôn ngữ và đa ngôn ngữ trong ứng dụng web. Tên "`i18next`" được viết tắt từ "i18n" (quốc tế hóa) + "next" để chỉ rằng nó là một thư viện tiếp theo trong việc hỗ trợ quản lý ngôn ngữ.

- Thư viện `i18next` giúp bạn dễ dàng thực hiện việc dịch ngôn ngữ và chuyển đổi giữa các bản dịch khác nhau một cách linh hoạt trong ứng dụng của bạn. Nó cung cấp các tính năng mạnh mẽ để làm việc với văn bản có nhiều ngôn ngữ khác nhau, hỗ trợ định dạng, biến động, số học, và nhiều tính năng quan trọng khác.

- Thư viện `i18next` được sử dụng rộng rãi trong các ứng dụng web để hỗ trợ việc quốc tế hóa và đa ngôn ngữ, cho phép nhà phát triển dễ dàng xây dựng các ứng dụng đa ngôn ngữ mà không cần viết mã khá lớn và phức tạp. Nó hỗ trợ nhiều ngôn ngữ và định dạng ngôn ngữ phong phú, cho phép bạn tùy chỉnh cách dịch và cấu hình nguồn dữ liệu ngôn ngữ một cách linh hoạt.

## React-i18next là gì ?

- `React-i18next` là một framework internationalization (quốc tế hóa) mạnh mẽ cho Reactjs/Reactnative dựa trên `i18next`. Các mô-đun cung cấp nhiều thành phần

- Ví dụ: để xác nhận rằng các bản dịch cần thiết được tải hoặc nội dung của bạn được hiển thị khi ngôn ngữ thay đổi. `Reac-i18next` còn phù hợp cho tối ưu serverside rendering. Nó cung cấp thêm nhiều các extension ví dụ như làm việc với `next.js`. Vì `Reac-i18next` phụ thuộc vào `i18next`, bạn cũng có thể sử dụng nó trên bất kỳ các framework UI và máy chủ nào khác (node.js, .net, ...).

## Cài đặt

- Chúng ta sẽ sử dụng `Reac-i18next` để localization(bản địa hóa) ứng dụng, cài đặt `Reac-i18next` vào project của bạn bằng câu lệnh sau:

```bash
npm install --save i18next
npm install --save react-i18next
```

---

```jsx
import 'i18next'
import { defaultNS, resources } from 'src/i18n/i18n'
```

- Đoạn code trên bao gồm hai phần chính: `import module 'i18next'` và import các biến `defaultNS` và `resources` từ module `'src/i18n/i18n'`. Hãy đi qua từng phần một cách cụ thể:

- `import 'i18next'`: Đoạn code này đang `import module 'i18next'`. 'i18next' là một thư viện hỗ trợ quản lý ngôn ngữ và đa ngôn ngữ trong ứng dụng JavaScript. Nó cho phép bạn dễ dàng thực hiện việc dịch ngôn ngữ và chuyển đổi giữa các bản dịch khác nhau.

- `import { defaultNS, resources } from 'src/i18n/i18n'`: Đoạn code này import hai biến `defaultNS` và `resources` từ module `'src/i18n/i18n'`. Các biến này được định nghĩa trong module `'src/i18n/i18n'` và được sử dụng để cấu hình và quản lý các nguồn dữ liệu ngôn ngữ cho thư viện `'i18next'`.

- Trong tóm tắt, đoạn code trên đang import thư viện `'i18next'` để sử dụng trong ứng dụng, cùng với việc import các biến cấu hình `defaultNS` và `resources` từ module `'src/i18n/i18n'` để quản lý nguồn dữ liệu ngôn ngữ trong ứng dụng.

---

```jsx
declare module 'i18next' {
  // Kế thừa (thêm vào type)
  interface CustomTypeOptions {
    defaultNS: typeof defaultNS
    resources: typeof resources['vi']
  }
}
```

- Đoạn code trên là một ví dụ về cách sử dụng TypeScript Declaration Merging để mở rộng kiểu dữ liệu của một module bên thứ ba (`'i18next'` trong trường hợp này). Hãy đi qua từng dòng code để giải thích:

- `declare module 'i18next' { ... }`: Đây là cách chúng ta mở rộng module 'i18next' thông qua TypeScript Declaration Merging. Bạn có thể hiểu đoạn này như việc chúng ta khai báo thêm các kiểu dữ liệu cho module 'i18next' mà không cần chỉnh sửa mã nguồn gốc của module này.

- `interface CustomTypeOptions { ... }`: Chúng ta định nghĩa một interface mới có tên `CustomTypeOptions`. Interface này sẽ chứa hai thuộc tính `defaultNS` và `resources`.

- `defaultNS: typeof defaultNS`: Thuộc tính `defaultNS` là một kiểu dữ liệu `typeof defaultNS`, nghĩa là nó có cùng kiểu dữ liệu với biến `defaultNS` đã được import từ module 'src/i18n/i18n'. Với việc này, chúng ta đang chỉ định rằng thuộc tính `defaultNS` trong interface `CustomTypeOptions` phải có cùng kiểu dữ liệu với biến `defaultNS` được định nghĩa trong module 'src/i18n/i18n'.

- `resources: typeof resources['vi']`: Thuộc tính `resources` là một kiểu dữ liệu `typeof resources['vi']`, nghĩa là nó có cùng kiểu dữ liệu với thuộc tính `'vi'` trong biến `resources` đã được import từ module 'src/i18n/i18n'. Lưu ý rằng `resources` là một đối tượng có nhiều thuộc tính, trong khi chúng ta chỉ quan tâm đến thuộc tính `'vi'` ở đây.

- Tóm lại, đoạn code trên đang mở rộng module 'i18next' bằng cách thêm vào hai thuộc tính `defaultNS` và `resources` có kiểu dữ liệu tương ứng với các biến `defaultNS` và `resources['vi']` trong module 'src/i18n/i18n'. Việc này giúp chúng ta có thể sử dụng các thuộc tính này khi làm việc với i18next mà không cần chỉnh sửa trực tiếp mã nguồn của module này.

---
