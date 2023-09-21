/**
 * XLMHttpRequest: thằng này thì chúng ta dùng cái function như thế này 👇 để lắng nghe một cái sự kiện hoặc là
 * những cái thay đổi của request.
 */
const xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function () {
  if (this.readyState === 4 && this.status === 200) {
    const res = JSON.parse(this.responseText);
    let html = "";
    res.data.forEach((item) => {
      html += `<div>${item.first_name} ${item.last_name}</div>`;
    });
    document.getElementById("result").innerHTML = html;
    console.log(res);
  }
};
xhttp.open("GET", "https://reqres.in/api/users?page=2", true);
xhttp.send();

/**
 * Fetch: Khi sử dụng fetch thì nó đơn giản hơn XMLHttpRequest. Thay vào đó thằng fetch nó sử dụng promise để xử
 * lý bất đồng bộ. Nó ngắn gọn và nhanh hơn cái thằng XMLHttpRequest rất là nhiều.
 */
fetch("https://reqres.in/api/users?page=2")
  .then((res) => {
    console.log(res);
    if (res.ok) {
      return res.json();
    } else {
      console.log("Loi cmnr");
    }
    res.json();
  })
  .then((res) => {
    let html_1 = "";
    res.data.forEach((item) => {
      html_1 += `<div>${item.first_name} ${item.last_name}</div>`;
    });
    document.getElementById("result").innerHTML = html_1;
    console.log("chinh thuc: ", res);
  })
  .carch((error) => {
    console.log(error);
  });

/**
 * Axios:
 * - Đối với thằng fetch thì server nó trả về kiểu JSON rồi sau đó chúng ta parse dữ liệu đó về kiểu object
 * (đối tượng). Thì khi chúng ta làm như vậy thì nó tốn công thêm 1 dòng code nữa.
 * - Thay vào đó chúng ta sử dụng axios thì không cần parse nó về kiểu object nữa, mà nó tự chuyển về kiểu
 * object cho chúng ta lun.
 * - Nhưng mà nếu có lỗi thì nó sẽ nhảy vào thằng catch ngày lập tức, chứ không phải như thằng fetch khi gặp lỗi
 * thì chúng ta lại làm thêm 1 bước nữa là bắt if else.
 *
 * - Tóm lại thì thằng rất dễ dùng và rất sướng. Nó là thư viện hầu như là tải nhiều nhất rồi ✅
 */
const value_1 = axios
  .get("https://reqres.in/api/users/2")
  .then((res) => {
    console.log(res);
  })
  .catch((error) => {
    console.log(error);
  });

const value_2 = axios
  .post("https://reqres.in/api/users", {
    name: "Duy Nghia Dev",
    job: "IT",
  })
  .then((res) => {
    console.log(res);
  })
  .catch((error) => {
    console.log(error);
  });

const value_3 = axios
  .delete("https://reqres.in/api/users/2")
  .then((res) => {
    console.log(res);
  })
  .catch((error) => {
    console.log(error);
  });

/**
 * Axios Instance
 */

const value_4 = axios({
  method: "get",
  baseURL: "https://reqres.in/api",
  url: "/users",
})
  .then((res) => {
    console.log(res);
  })
  .catch((error) => {
    console.log(error);
  });

const value_5 = axios({
  method: "get",
  baseURL: "https://reqres.in/api",
  url: "/users/2",
})
  .then((res) => {
    console.log(res);
  })
  .catch((error) => {
    console.log(error);
  });

/**
 * - http nó đóng vai trò giống như axios vậy đó, nhưng mà mình có baseURL sẵn rồi nên mỗi lần mình gọi
 * phương thức API thì chỉ cần .get() .post(),... và thêm vào đường dẫn cần truyền tới (vd: .get(/users/2))
 */

const http = axios.create({
  baseURL: "https://reqres.in/api",
});

http
  .get("/users/2")
  .then((res) => {
    console.log(res);
  })
  .catch((error) => {
    console.log(error);
  });

/**
 * - Interceptors trong Axios: thằng này thì nó như thằng trung gian khi client gửi data lên server vậy đó
 * - Ví dụ như trước khi mình gửi lên server thì cái dữ liệu nó sẽ đi qua thằng interceptors này. Cũng như là
 * server gửi ngược lại client.
 *
 * - Rồi bây giờ mình sẽ custom lại và tạo 1 cái interceptors
 */

// Đây là đoạn code interceptor cho thằng request 🍴
http.interceptors.request.use(
  (config) => {
    console.log(config);
    config.headers.Timeout = 100;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

http
  .get("/users/2")
  .then((res) => {
    console.log(res);
  })
  .catch((error) => {
    console.log(error);
  });

// Đây là đoạn code interceptor cho thằng response 🚽
http.interceptor.response.use(
  (config) => {
    console.log(response);
    return config.data.data; // khi nó trả về thì nó trả nhiều thứ lắm như là header, request,...nhưng mà mình chỉ cần thằng data này để hiển thị dữ liệu lên màn hình thôi, nên là mình chỉ lấy mỗi data thôi
  },
  (error) => {
    return Promise.reject(error);
  }
);

http
  .get("/users/2")
  .then((res) => {
    console.log(res);
  })
  .catch((error) => {
    console.log(error);
  });
