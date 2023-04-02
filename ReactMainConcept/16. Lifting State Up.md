# Lifting State Up - Đưa state lên trên

Thường những component nào mà có sự tương tác lẫn nhau khi thay đổi dữ liệu thì chúng ta nên đưa state lên component cha gần nhất giữa chúng, state lúc này sẽ được chia sẽ với những component con. Kỹ thuật này gọi là "Lifting State Up" hay đưa state lên trên

Cùng phân tích ví dụ dưới đây

![](./react-devtools-state.gif)

Chúng ta có 2 ô input để nhập giá trị độ C và độ F. Khi nhập độ C thì sẽ tự tính toán độ F và ngược lại. Nếu nhiệt độ lớn hơn 100 độ C thì nước sẽ sôi.

## Phân tích

1. Nhìn vào UI chúng ta nhận thấy có 3 component

   - Component nhập độ C: `CTemperatureInput`
   - Component nhập độ F: `FTemperatureInput`
   - Component hiển thị nước sôi hay chưa: `BoilingVerdict`

2. Chúng ta nhận thấy component nhập độ C và F giống nhau nên có thể gộp thành 1 component là `TemperatureInput`, chúng chỉ khác về giá trị `Celsius` và `Fahrenheit` cũng như title => Những cái này chúng ta có thể dùng props để truyền vào

3. Cuối cùng chúng ta còn 2 component: `TemperatureInput` và `BoilingVerdict`

4. Nhận thấy các giá trị có thể tương tác lẫn nhau, giá trị này có thể dựa vào giá trị kia để hiển thị. Vậy nên chúng ta chỉ cần tạo state để lưu giữ giá trị và những giá trị còn lại chúng ta sẽ tính toán dựa vào state này. Chúng ta sẽ lưu state vào component cha gần nhất của 2 component trên.

5. Chúng ta sẽ tạo 2 state là

   - `temperature`: Đại diện cho nhiệt độ C và F (tuỳ vào giá trị state `scale`). Có giá trị là giá trị mà chúng ta nhập vào.
   - `scale`: Đại diện cho đang edit ở độ C hay F. Có giá trị là "c" hoặc "f"

   Khi nhập liệu vào ô input độ C thì chúng ta sẽ setState `scale = 'c'` và `temperature` chính là giá trị chúng ta nhập.

   Tương tự khi nhập liệu vào ô input độ F thì chúng ta sẽ setState `scale = 'f'` và `temperature` chính là giá trị chúng ta nhập ở độ F.

## Bài học học được

Nếu chúng ta có một component A cùng với state đã được thêm vào nó. Sau đó chúng ta lại có một component B khác cũng cần giá trị state này thì chúng ta có thể di dời state của component A lên component cha của A và B.

Việc làm trên sẽ đem lại một flow mượt mà, thay vì mỗi component bạn quản lý một state và cố gắng đồng bộ các state này lại với nhau.

Đưa state lên trên có thể làm bạn viết nhiều code hơn nhưng nó đem lại nhiều lợi ích to lớn, đó là giúp bạn tốn ít thời gian để tìm và phân tích bug.

Nếu một giá trị nào đó có thể dùng prop hoặc state để lưu trữ thì đa số các trường hợp chúng ta nên chọn prop! Ví dụ, thay vì tạo 2 state là `celsiusValue` và `fahrenheitValue` trong component `TemperatureInput`, chúng ta chỉ cần tạo state `temperature` và `scale` trong component cha, các giá trị `celsiusValue` và `fahrenheitValue` có thể được tính toán và truyền xuống dưới dạng prop.
