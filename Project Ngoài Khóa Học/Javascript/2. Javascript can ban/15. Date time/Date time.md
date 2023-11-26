# Date time

object Date được dựa trên giá trị thời gian là số mili giây kể từ ngày 1 tháng 1 năm 1970 UTC.
Để tạo một object Date ta có 4 cách

```javascript
var d = new Date()
var d = new Date(milliseconds)
var d = new Date(dateString)
var d = new Date(year, month, day, hours, minutes, seconds, milliseconds)
```

Tham khảo get current mili giây [tại đây](https://currentmillis.com/)

Ví dụ

```javascript
var today = new Date()
// tạo bằng mili giây
var day1 = new Date(1608734177983)
// tạo bằng chuỗi ngày, lưu ý là việc tạo bằng chuỗi ngày rất không chính xác
// do sự khác nhau của các trình duyệt
var birthday = new Date('October 30, 1996 15:27:08')
var birthday = new Date('1996-10-30T15:27:08')
//Tạo bằng các tham số năm tháng ngày
var birthday = new Date(1996, 10, 30, 15, 27, 8)
```

**Một số phương thức hay dùng của object Date**

- `getDate()` Return về 1 ngày trong tháng (1-31)
- `getDay()` Return về 1 ngày trong tuần (0-6)
- `getFullYear()` Return về năm
- `getHours()` Return về giờ (0-23)
- `getMilliseconds()` Return về milli giây (0-999)
- `getMinutes()` Return về phút (0-59)
- `getMonth()` Return về tháng (0-11)
- `getSeconds()` Return về giây (0-59)
- `toISOString()` Return về định dạng thời gian chuẩn ISO
