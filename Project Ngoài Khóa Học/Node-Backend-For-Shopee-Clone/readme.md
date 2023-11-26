# Hướng dẫn Run Server và Deploy

- Đây là project Back-end cho dự án Shopee Clone của khóa học ReactJS. Các bạn hãy follow theo và làm theo hướng dẫn.

[Link Tutorial](https://github.com/dtdgroup/Node)

## 1. Run server

### Một số thông tin về server

- Server chạy bằng node.js kết hợp typescript vì thế mọi người cần cài node.js nhé
- Cơ sở dữ liệu là MongoDB
- Để xem thông tin các table cũng như quan hệ các table database thì mở thư mục `database/models`
- Role sẽ có 2 role là `Admin` và `User`. Để tạo được tài khoản `Admin` thì bạn chỉ cần đăng ký tài khoản bình thường. Sau đó vào trong database thêm role `Admin` vào cho nó.

### Khởi tạo và chạy server

#### 1. Tạo database

Ở đây mình khuyên mọ người dùng Cloud MongoDB nhé, vừa free vừa đỡ setup lằng nhằng. Mọi người lên google gõ `Cloud MongoDB atlas` hoặc vào trang này [https://www.mongodb.com/cloud/atlas](https://www.mongodb.com/cloud/atlas) đăng ký 1 tài khoản.

Nếu nó hiển thị cái này thì bạn điền gì tên tổ chức và tên project, điền cái gì cũng được, không quan trọng lắm đâu. Xong rồi nhấn continue nhé

![](./data/setup-account.PNG)

Tiếp theo chọn Create bên phần Basic nhé

![](./data/deploy-a-cloud.PNG)

Tạo một Basic Cluster. Cluster như là một database của bạn vậy, nó sẽ chứa các table trong đó.

1. Chọn Free Basic
2. Chọn nhà cung cấp Cloud, ở đây mình chọn AWS
3. Chọn Vùng đặt server, mình chọn Singapore vì gần Việt Nam thì tốc độ nhanh hơn.
4. Chọn loại Cluster, mình chọn M0 Sandbox vì nó miễn phí
5. Đặt tên cho Cluster (tức là tên database bạn sau này), có bạn có thể để tên mặc định hoặc sửa lại tùy ý.
6. Nhấn Create Cluster

![](./data/create-cluster.PNG)

Sau khi create thì nó sẽ như thế này, mọi người đợi 1 tí nhé. Khoảng 1-3 phú bạn sẽ có cluster.

![](./data/pending-cluster.PNG)

Sau khi hoàn tất sẽ như thế này.

![](./data/success-cluster.PNG)

1. Các bạn nhấn vào Connect.
2. Chọn Alow Access from Anywhere và nhấn Add Ip Address

![](./data/add-ip.PNG)

Tiếp theo Nhập Username và Password cho database và nhấn Create Database User

Sau khi Create thành công sẽ có giao diện như bên dưới. Tiếp theo mọi người nhấn vào Connect your application.

![](./data/success-create-database.PNG)

Ta sẽ có được URL như thế này

![](./data/url-database.PNG)

Các bạn nhớ thay `<password>` thành mật khẩu bạn vừa tạo lúc nãy lúc Create Database User nhé.

```bash
mongodb+srv://admin:<password>@cluster0.sucej.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
```

Mọi ngưới nhớ URL này, vì đây là URL bạn sẽ điền vào trong cấu hình server của chúng ta.

Vậy là chúng ta đã tạo xong database. Bây giờ hãy cấu hình Server nhé.

#### 2. Cấu hình server

Đầu tiên các bạn cần tạo file `.env` trong folder api. Nội dung trong file .env này tương tự trong file `.env`.example nên mọi người có thể tham khảo file này

- HOST: mặc định là `localhost`
- PORT: mặc định là `4000`
- PRODUCTION_HOST: URL khi deploy, phục vụ cho convert link image product trên production khi build
- SECRET_KEY_JWT: Mã bí mật dùng để mã hóa JWT, mọi người có thể nhập tùy ý
- DB_URL: URL dẫn đến database (URL vừa tạo lúc trên)

Dưới đây là mẫu nội dung trong file `.env` của mình

```bash
HOST=localhost
PORT=4000
PRODUCTION_HOST=https://api-ecom.duthanhduoc.com
SECRET_KEY_JWT=dtdgruop
DB_URL=mongodb+srv://admin:admin@cluster0.sucej.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
```

#### 3. Run server

Đầu tiên cần `cd api` để vào thư mục api. Cài hết package bằng `yarn` hoặc `npm i`.

Để run server thì chỉ cần chạy `yarn start`. Ngoài ra còn có các lệnh phía dưới đây.`

- `yarn start`: Chạy server ở chế độ typescript
- `yarn build`: Build server từ ts -> js
- `yarn prod`: Build server từ ts -> js và run ở chế độ production

Server sẽ chạy tại `localhost:4000`

Hiển thị như thế này nghĩa là server đã chạy và kết nối database thành công.

![](./data/run-success.PNG)

#### 4. Tạo account Admin để toàn quyền xử lý

Vì theo logic trong middleware của mình thì chỉ có role `Admin` mới có quyền thêm sản phẩm, tạo category... Vì thế chúng ta cần tạo một tài khoản `Admin` cũng như test thử server có tương tác với database chính xác hay không.

Đầu tiên các bạn mở postman lên đăng ký một tài khoản với url là `localhost:4000/register`. À, về thông tin tất cả URL thì các bạn vào trong folder `api/routes` để khám phá nhé.

Nếu như hiển thị đăng ký thành công là ok, các bạn để ý role hiện tại chỉ là một mảng `['User']`

![](./data/register-user.PNG)

Bây giờ chúng ta vào database xem thử đã có record nào được tạo hay chưa. Mọi người quay trở lại trang cloud mongodb và nhấn Browse Collections

![](./data/check-record.PNG)

Nếu có các collection như dưới thì chúc mừng bạn, bạn đã add dữ liệu thành công. Bây giờ chúng ta chọn collection là `users` và click vào biểu tượng edit document để thêm role `Admin`

![](./data/edit-user.png)

Nhấn update sau khi thêm xong nhé.

![](./data/update-user.png)

Vậy chúng ta đã nâng quyền tài khoản vừa tạo lên Admin, cho phép nó có thể tạo sản phẩm, category, edit, update...

Bây giờ **hãy đẩy tất cả source lên github của mọi người rồi, đừng dùng repo của mình nữa, để thuận tiện cho việc deploy**

#### 5. Lưu ý quan trọng liên quan việc tạo sản phẩm

- Việc tạo sản phẩm phải qua các bước dưới đây:

1. Up ảnh lên server -> server trả về name string của ảnh
2. Bỏ name string vào thuộc tính image trong body để add sản phẩm
3. Server sẽ tự tính và trả về đường link ảnh đầy đủ dựa vào môi trường development hay production

## 2. Deploy server

Các bạn nên thuê một VPS (hoặc EC2 AWS) để deploy nhé. Ở đây mình chọn VPS của AZDigi. Chọn hệ điều hành cho VPS thì chúng ta dùng ubuntu nhé, phiên bản mới cũng được.

Cũng nên mua một domain để test cho biết luôn nha. Mua domain xong rồi thì search google `Cách trỏ domain vào host` ra rất nhiều kết quả, anh em nghiên cứu dần nhé.

Sau khi login vào VPS rồi thì sẽ có giao diện terminal, chúng ta sẽ thực hiện cài đặt thông qua terminal nhé.

Cài nvm để quản lý version node.

```bash
wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.38.0/install.sh | bash
```

Tắt terminal và login lại VPS. Chúng ta sẽ cài node

```bash
nvm install node
```

Cài Git

```bash
sudo apt update
sudo apt install git
```

Lấy SSH key của VPS và add vào github của bạn thông qua câu lệnh

```bash
ssh-keygen
cat ~/.ssh/id_rsa.pub
```

Tiếp theo clone repo chứa source nodejs của bạn

```bash
git clone repoGitCuaban
```

Sau khi clone thành công thì `cd` vào thư mục `api`

Cài đặt `Yarn` và `pm2`. Cho bạn nào chưa biết thì PM2 giúp chúng ta quản lý các tiến trình node trên server

```bash
npm install --global yarn
npm install pm2 -g
```

Tiếp theo cài đặt tất cả các package

```bash
yarn
```

Build source (chuyển từ TS sang JS)

```bash
yarn build
```

Chạy PM2

```bash
pm2 start ecosystem.config.js --env production
pm2 save
pm2 startup
```

Tiếp theo chúng ta cài web server là Apache

```bash
sudo apt install apache2
```

Xóa các cấu hình Apache mặc định

```bash
sudo a2dissite 000-default
```

Enable Apache module

```bash
sudo a2enmod proxy proxy_http rewrite headers expires
```

Reload lại apache

```bash
service apache2 reload
```

Cài đặt `nano` để edit file

```bash
sudo apt-get install nano
```

Tạo một file cấu hình apache cho nodejs

```bash
sudo nano /etc/apache2/sites-available/domain.conf
```

Thêm nội dung phía dưới vào file vừa tạo.

Lưu ý:

- `domain.com` chính là domain anh em đã mua và liên kết với VPS, nếu chưa mua domain hoặc chưa liên kết thì có thể dùng IP của VPS.
- Khi thuê 1 VPS thì anh em sẽ có IP của VPS đó, anh em có thể dùng IP này để truy cập vào VPS cũng đc nếu chưa có domain

```bash
<VirtualHost *:80>
    ServerName domain.com
    ServerAlias www.domain.com

    ProxyRequests Off
    ProxyPreserveHost On
    ProxyVia Full

    <Proxy *>
        Require all granted
    </Proxy>

    ProxyPass / http://localhost:4000/
    ProxyPassReverse / http://localhost:4000/
</VirtualHost>
```

Nhấn `Ctrl + X` và Nhấn `Y` và `Enter` để lưu và đóng file.

Enable file cấu hình vừa tạo

```bash
sudo a2ensite domain.conf
```

Bây giờ chúng ta có thể restart lại Apache

```bash
sudo service apache2 restart
```

Bây giờ anh em có thể test bằng cách dùng postman để thực hiện các request đến server thông qua domain của anh em hoặc IP VPS của anh em.

Bây giờ chúng ta sẽ cài đặt chứng chỉ SSL miễn phí để cho server của chúng ta có `HTTPS`, ban đầu nó chỉ là `HTTP` thôi.

```bash
sudo apt-get install software-properties-common
sudo add-apt-repository ppa:certbot/certbot
sudo apt update
sudo apt install python-certbot-apache
```

Bây giờ chúng ta đã cài Certbot cho Apache. Tiếp theo chúng ta sẽ cài đặt chứng chỉ Let’sEncrypt. Nhớ thay thế email và domain của anh em vào nhé. Mình chưa test việc nếu không có domain và thay thế bằng IP của VPS có được hay không, ae có thể test nhé.

```bash
sudo certbot --apache -m your-email -d domain.com -d www.domain.com
```

## 3. Kiểm tra lỗi config apache

Để kiểm tra file config apache có lỗi hay không anh em có thể kiểm tra qua lệnh dưới đây

```bash
cd /etc/apache2
apache2ctl configtest
```

## 4. Tham khảo

- [Setup Node.js with Apache Proxy on Ubuntu 18.04 for Production](https://www.cloudbooklet.com/setup-node-js-with-apache-proxy-on-ubuntu-18-04-for-production/)

- [How To Secure Apache with Let's Encrypt on Ubuntu 18.04](https://www.digitalocean.com/community/tutorials/how-to-secure-apache-with-let-s-encrypt-on-ubuntu-18-04)
