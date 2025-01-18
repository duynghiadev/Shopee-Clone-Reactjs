# Cài đặt môi trường code React

## 1. Môi trường hoàn hảo để code

1. Nodejs để run server react dưới local
2. VS code để code
   - Cài thêm extention Icon Theme cho VS code (mình dùng Material Icon Theme)
   - Prettier để format code
   - ES Lint để quản lý tiêu chuẩn code
3. Trình duyệt Chrome với extension là React Developer Tool và Redux Dev Tool extension
4. Git: Tạo repo trên github để quản lý source code

## 2. Khởi tạo Project với CRA

## 3. Giới thiệu về cầu trúc folder Project React.Js do CRA tạo

## 4. Sử dụng prettier và Eslint trong React.js (Tạo bằng Create React App)

### 4.1. Setting prettier on User

- Editor: Default Formatter => Chọn Prettier
- Editor: Format On Save => true
- Files: Eol => auto

Nếu như các bạn muốn setting mỗi workspace hiện tại thôi (nghĩa là cái folder hiện tại) thì các bạn setting bên workspace

### 4.2. Tạo file `.editorconfig` để chia sẻ một số setting giữa các editor với nhau

```bash
[*]
indent_style = space
indent_size = 2
```

### 4.3. Tạo file `.prettierrc` để chia sẻ setting prettier giữa các editor

```json
{
  "arrowParens": "always",
  "semi": false,
  "trailingComma": "none",
  "tabWidth": 2,
  "endOfLine": "auto",
  "useTabs": false,
  "singleQuote": true,
  "printWidth": 120,
  "jsxSingleQuote": true
}
```

### 4.4. Cài các devDependencies hỗ trợ prettier và eslint trên terminal

Ở trên thì chúng ta mới chỉ setting prettier cho editor (tức là UI), bây giờ là cho terminal. Editor thì có thể mỗi máy sẽ kiểm tra khác nhau nhưng trên terminal thì không, setting trên terminal sẽ giúp code thống nhất.

```bash
npm i prettier eslint-plugin-prettier eslint-config-prettier -D
```

Trên là những plugin cần thiết để setting Pretter và Eslint cho CRA. Các bạn nếu dùng yarn thì chạy `yarn add` nhé.

### 4.5. Tạo file `.eslintrc` để setting eslint

```json
{
  "extends": ["react-app", "prettier"],
  "plugins": ["react", "prettier"],
  "rules": {
    "prettier/prettier": [
      "warn",
      {
        "arrowParens": "always",
        "semi": false,
        "trailingComma": "none",
        "tabWidth": 2,
        "endOfLine": "auto",
        "useTabs": false,
        "singleQuote": true,
        "printWidth": 120,
        "jsxSingleQuote": true
      }
    ]
  }
}
```

### 4.6. Thêm scripts vào package.json

```json
{
  "lint": "eslint --ext js,jsx,ts,tsx src/",
  "lint:fix": "eslint --fix --ext js,jsx,ts,tsx src/",
  "prettier": "prettier --check \"src/**/(*.jsx|*.js|*.tsx|*ts|*.css|*.scss)\"",
  "prettier:fix": "prettier --write \"src/**/(*.jsx|*.js|*.tsx|*ts|*.css|*.scss)\""
}
```

Lúc này bạn chỉ cần chạy

- `npm run lint`: Kiểm tra lỗi eslint
- `npm run lint:fix`: Fix lỗi liên quan eslint (đôi lúc có những lỗi bạn phải tự fix bằng tay)
- `npm run prettier`: Kiểm tra lỗi prettier format
- `npm run prettier:fix`: Tự fix lỗi prettier format

### 4.7. Thêm file `.prettierrignore` và `.eslintignore` để ignore những file bạn không muốn prettier và eslint format

Cú pháp viết trong những file này tương tự như trong file `.gitignore`, các bạn có thể tìm lại trong file `GitCanban.md` trong thư mục `GitCanBanDenNangCao` nhé.

## 5. CICD và deploy với Vercel
