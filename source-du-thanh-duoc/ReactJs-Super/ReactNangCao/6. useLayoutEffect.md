# useLayoutEffect

Cách dùng `useLayoutEffect` tương tự như `useEffect`, nhưng callback bên `useLayoutEffect` sẽ chạy sau khi render và trước khi trình duyệt paint

99% trong các trường hợp chúng ta sẽ dùng `useEffect`, vậy chúng ta dùng `useLayoutEffect` khi nào?

Khi browser của chúng ta bị hiện tượng flicker (chớp nháy) do chúng ta thay đổi state quá nhanh.

Không nên dùng `useLayoutEffect` để thực hiện các effect như fetchAPI rồi set lại state, vì dùng `useLayoutEffect` chạy đồng bộ, nó sẽ làm app bị blocking. Hầu hết các effect chúng ta không cần tạm ngưng để chạy, có thể chạy bất đồng bộ, vậy nên dùng `useEffect` thì hợp lý hơn

Tham khảo: [https://daveceddia.com/useeffect-vs-uselayouteffect/](https://daveceddia.com/useeffect-vs-uselayouteffect/)
