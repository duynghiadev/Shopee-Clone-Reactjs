# Webpack

## Webpack là gì?

- Webpack là một tool chạy trên môi trường NodeJs giúp chúng ta đóng gói các file js, css, sass, jpg...Ngoài ra webpack còn giúp chúng ta tạo một server ảo để thuận tiện cho việc code.

## Cài `webpack` và `webpack-cli`

- Chúng ta cài vào trong devDependencies vì tool này chỉ chạy trong lúc chúng ta dev
- `webpack-cli` có 2 chế độ cài là **global** và **local**. Mình khuyên các bạn cài **local** cho dễ quản lý.
- Chạy câu lệnh `yarn add webpack webpack-cli -D` để cài
- Mở file `package.json` lên để thêm dòng `"build": "webpack"` vào trong `script`
- Mặc định thì `webpack` sẽ sử dụng thư mục `dist` để chứa những file sau khi build và sử dụng `src/index.js` để chứa file **entry** (file đầu vào tổng) của dự án. Muốn custom thư mục khác hoặc cấu hình sâu hơn thì phải tạo file config là `webpack.config.js`.
- Webpack sẽ tự nhận diện file `webpack.config.js` và lấy những config trong đó. Nếu bạn tạo tên file khác `webpack.config.js` thì phải khai báo nó trong đoạn `script` của `package.json` để webpack biết.

**`webpack.config.js`**

```js
const path = require('path')
module.exports = {
  mode: 'development',
  entry: {
    app: path.resolve('src/index.js')
  },
  output: {
    path: path.resolve(__dirname, 'dist')
  }
}
```

## Sử dụng các Loaders và biên dịch SASS

- Nếu muốn dùng css trong webpack thì bạn phải cài `style-loader` và `css-loader`
- Chạy câu lệnh `yarn add style-loader css-loader -D` để cài
- Muốn dùng thêm sass thì phải cài thêm `sass` và `sass-loader`
- Chạy câu lệnh `yarn add sass sass-loader -D` để cài
- Sau khi build và chạy thì chúng ta sẽ thấy thẻ `<style>` được Javascript thao tác DOM vào trong file `index.html`. Nếu các bạn muốn file css nằm riêng biệt thì xem ở bước tiếp theo nhé.

**`webpack.config.js`**

```js
const path = require('path')
module.exports = {
  mode: 'development',
  entry: {
    app: path.resolve('src/index.js')
  },
  output: {
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss|css$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  }
}
```

## Sử dụng HTML Webpack Plugin để tự động tạo ra file HTML

- Bây giờ có 1 vấn đề là chúng ta đang chỉnh sửa các đường dẫn css và js bằng tay trong file `index.html`. Điều này không hay chút nào vì sau này các tên file sẽ là các hash name thì việc cập nhật lại file `index.html` khá mất thời gian.
- `html-webpack-plugin` sẽ giúp chúng ta tự tạo ra 1 file html bằng webpack theo cấu hình của chúng ta.
- Chạy câu lệnh `yarn add html-webpack-plugin -D` để cài

**`webpack.config.js`**

```js
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'production',
  entry: {
    app: path.resolve('src/index.js')
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss|css$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Webpack App',
      filename: 'index.html',
      template: 'src/template.html'
    })
  ]
}
```

## Tách CSS ra những file riêng

### Vấn đề khi chèn `style` bằng JS

- Vấn đề hiện tại là CSS đang được JS DOM vào nên xảy ra tình trạng "chớp trắng" khi mới load trang.
- Tăng size file JS lên rất nhiều

### Cách fix

- Dùng `mini-css-extract-plugin` để tách nó ra thành những file riêng
- Chạy câu lệnh `yarn add mini-css-extract-plugin -D` để cài

### Lưu ý

- Hãy đảm bảo bạn đã cài và đang dùng plugin `html-webpack-plugin`, vì nó cần plugin này để tự động generate ra thẻ `<link>` trong file `index.html`
- Không dùng plugin `style-loader` cùng với `mini-css-extract-plugin`. Nếu đang dùng `style-loader` thì xóa nó đi, 2 thằng này xung đột với nhau

**`webpack.config.js`**

```js
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  mode: 'production',
  entry: {
    app: path.resolve('src/index.js')
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss|css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin(),
    new HtmlWebpackPlugin({
      title: 'Webpack App',
      filename: 'index.html',
      template: 'src/template.html'
    })
  ]
}
```

## Xử lý caching ở trình duyệt bằng hash name file

- Hiện tại những file css hay js sau khi build đều có 1 cái tên cố định, điều này dẫn đến trình duyệt hoặc server sẽ thực hiện caching. Caching là tốt, điều này giúp cho web chúng ta load nhanh hơn nhưng nó không đúng với ngữ cảnh hiện tại. Chúng ta thường build lại webpack khi có một cập nhật mới gì đó trên website và chúng ta muốn người dùng sẽ thấy ngay lập tức bản cập nhật này. Vì thế chúng ta cần phải xử lý caching.
- Cách xử lý dễ nhất là mỗi lần build webpack chúng ta lại tạo ra một tên file mới. Webpack cho phép chúng ta chỉnh sửa điều này trong `output.filename` bằng `[contenthash]`

**`webpack.config.js`**

```js
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  mode: 'production',
  entry: {
    app: path.resolve('src/index.js')
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[contenthash].js'
  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss|css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css'
    }),
    new HtmlWebpackPlugin({
      title: 'Webpack App',
      filename: 'index.html',
      template: 'src/template.html'
    })
  ]
}
```

## Tạo một server bằng webpack để dev

- Hiện tại chúng ta đang dùng Live Server trên VS code để tự động reload lại trang web. Webpack cung cấp sẵn cho chúng ta tính năng tạo một server localhost không cần dùng đến extension VS code.
- Để sử dụng thì chúng ta cài `webpack-dev-server`: `yarn add webpack-dev-server -D`
- Thêm script sau vào `package.json`: `"start": "webpack serve"`

### Lưu ý

- `webpack-dev-server` cần `html-webpack-plugin` để hoạt động được.
- `webpack-dev-server` sẽ lưu các tạm các file của bạn vào RAM, vì thế bạn sẽ không thấy chúng ở trong thư mục build (`dist`). Không tin thì các bạn có thể xóa thử thư mục `dist` thì server vẫn hoạt động bình thường.

**`webpack.config.js`**

```js
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  mode: 'production',
  entry: {
    app: path.resolve('src/index.js')
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[contenthash].js'
  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss|css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css'
    }),
    new HtmlWebpackPlugin({
      title: 'Webpack App',
      filename: 'index.html',
      template: 'src/template.html'
    })
  ],
  devServer: {
    static: {
      directory: 'dist' // Đường dẫn tương đối đến với thư mục chứa index.html
    },
    port: 3000, // Port thay cho port mặc định (8080)
    open: true, // Mở trang webpack khi chạy terminal
    hot: true, // Bật tính năng reload nhanh Hot Module Replacement
    compress: true, // Bật Gzip cho các tài nguyên
    historyApiFallback: true // Set true nếu bạn dùng cho các SPA và sử dụng History API của HTML5
  }
}
```

## Dọn dẹp thư mục build

- Thêm `output.clean = true` để dọn dẹp thư mục `dist` sau mỗi lần build.

## Source map

- Thêm `devtool: 'source-map'` để có `source-map` đầy đủ tiện lợi cho môi trường dev.
- `source-map` sẽ làm chậm tiến trình build và rebuild.
- Ngoài `source-map` ra thì còn có các giá trị khác như `eval`, `eval-cheap-source-map`,...tùy thuộc vào mục đích sử dụng.
- **Khuyên dùng**: Chỉ nên để `source-map` khi dev, khi build ra production thì hãy disable nó đi vì `source-map` sẽ làm lộ mã nguồn gốc cũng như là tăng kích thước các file build.
- Webpack nhận các biến môi trường thông qua `--env` trong câu lệnh script khi chạy webpack. Vì thế bạn hãy thêm `"start": "webpack serve --env development"` trong script của `package.json` để truyền `development = true` vào webpack. `module.exports` ở file `webpack.config.js` ngoài bằng một object thì nó còn có thể là một function với tham số là biến object môi trườn env.
- Bạn cũng có thể truyền biến môi trường vào webpack thông qua `process.env` của NodeJs. Nếu máy windows thì `"start": "SET NODE_ENV=production&webpack serve"`, còn Linux thì `"start": "NODE_ENV=production webpack serve"`. Bên file `webpack.config.js` chỉ cần dùng `process.env.NODE_ENV` để nhận giá trị.

**`webpack.config.js`**

```js
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = (env) => {
  const isDevelopment = Boolean(env.development)
  return {
    mode: isDevelopment ? 'development' : 'production',
    entry: {
      app: path.resolve('src/index.js')
    },
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: '[name].[contenthash].js',
      clean: true
    },
    devtool: isDevelopment ? 'source-map' : false,
    module: {
      rules: [
        {
          test: /\.s[ac]ss|css$/,
          use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
        }
      ]
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: '[name].[contenthash].css'
      }),
      new HtmlWebpackPlugin({
        title: 'Webpack App',
        filename: 'index.html',
        template: 'src/template.html'
      })
    ],
    devServer: {
      static: {
        directory: 'dist' // Đường dẫn tương đối đến với thư mục chứa index.html
      },
      port: 3000, // Port thay cho port mặc định
      open: true, // Mở trang webpack khi chạy terminal
      hot: true, // Bật tính năng reload nhanh Hot Module Replacement
      compress: true, // Bật Gzip cho các tài nguyên
      historyApiFallback: true // Set true nếu bạn dùng cho các SPA và sử dụng History API của HTML5
    }
  }
}
```

## Dùng Babel để dịch code JS thành các phiên bản cũ hơn

- Nếu như chúng ta viết code JS có các cú pháp của phiên bản ES2022 thì những trình duyệt cũ chỉ chạy được ES6 sẽ không thể hiểu được code và dẫn đến lỗi. Vì thế transpile code thành các version cũ hơn là cần thiết. Công cụ transpile phổ biến nhất là **Babel**
- Để sử dụng Babel ở webpack các bạn cần cài `yarn add @babel/core @babel/preset-env babel-loader -D`.

- Để mình giải thích luôn thằng `@babel/core` là lõi của Babel
- `@babel/preset-env` là bộ preset (thiết lập sẵn) cho từng đối tượng môi trường
- `babel-loader` dùng để tích hợp Babel vào webpack.
- Tiếp theo các bạn thêm cái này vào rules là được.

```js
{
  test: /\.js$/,
  exclude: /node_modules/,
  use: {
    loader: 'babel-loader',
    options: {
      presets: ['@babel/preset-env']
    }
  }
}
```

- Chúng ta exclude `node_modules` vì quá trình dịch code là quá trình rất nặng và chậm. Hãy đảm bảo chúng ta cần dịch ít code nhất có thể, vì thế chúng ta không cần dịch code từ các package trong `node_module`, những package này đa số đã được dịch để chạy được ở đa số trình duyệt phổ biến rồi.

- Trừ những trường hợp đặc biệt bạn vẫn phải dịch một số thư viện trong `node_module`. Lúc này có thể kết hợp `test` và `not` như dưới đây.

```js
{
    test: /\.m?js$/,
    exclude: {
      and: [/node_modules/], // Exclude libraries in node_modules ...
      not: [
        // Except for a few of them that needs to be transpiled because they use modern syntax
        /unfetch/,
        /d3-array|d3-scale/,
        /@hapi[\\/]joi-date/,
      ]
    },
    use: {
      loader: 'babel-loader',
      options: {
        presets: [
          ['@babel/preset-env']
        ]
      }
    }
  }
```

- Nếu không đặt `target` cho `@babel/preset-env` thì [Babel sẽ cho rằng bạn đang target đến các trình duyệt cũ nhất có thể, ví dụ `@babel/preset-env` sẽ dịch code ES2015-ES2020 sang ES5](https://babeljs.io/docs/en/options#no-targets). Vậy nên bạn nên đặt `target` để có thể giảm kích thước file build.

- Ở phần [doc `targets` của @babel/preset-env](https://babeljs.io/docs/en/babel-preset-env#targets) thì chúng ta có thể truyền thằng targets vào cái option này kiểu như phía dưới

```js
presets: [['@babel/preset-env', { targets: 'ie 11' }]]
```

- Nhưng theo mình test thì nó không hiệu quả, arrow function vẫn xuất hiển ở file build cho **ie 11**. Có vẻ cái targets option này không hoạt động tốt đối với những trình duyệt cũ. Nhưng nếu chúng ta làm theo [doc nó recommend là tạo file `.browserslistrc`](https://babeljs.io/docs/en/babel-preset-env#browserslist-integration) để setting cho cái targets thì lại hoạt động tốt.

- **Browserslist** là một thư viện giúp chúng ta config target browsers hoặc node.js. Cách viết Browserslist có thể tham khảo tại [doc của nó](https://github.com/browserslist/browserslist)

**`.browserslistrc`**

```bash
ie 11
```

### Lưu ý với @babel/preset-env

- Không phải chỉ cần set targets là tất cả code chạy được trên môi trường mong muốn, đôi lúc bạn phải setting một số thứ.

- Ví dụ sử dụng cú pháp ES6 Spread Operator có thể dịch sang để tương thích với **ie 11** mà không cần setting gì nhiều cho `@babel/preset-env`

**`index.js`**

```js
// ES6 Spread Operator
const person = { name: 'Duoc' }
const personClone = { ...person }
console.log('personClone', personClone)
```

**`webpack.config.js`**

```js
module: {
  rules: [
    {
      test: /\.js$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: [['@babel/preset-env']]
        }
      }
    }
  ]
}
```

- Nhưng nếu bạn dùng cú pháp ES7 `Object.values` thì bạn phải setting một chút nó mới hoạt động.

- Trước tiên bạn cần cài `yarn add core-js -D`. **`core-js`** là một thư viện tiêu chuẩn chứa các tính năng của javascript, nó còn chứa các polyfill (những đoạn code dự phòng cho những tính năng mới mà môi trường hiện tại không hỗ trợ)

**`index.js`**

```js
// ES6 Spread Operator
const person = { name: 'Duoc' }
const personClone = { ...person }
console.log('personClone', personClone)

// ES7 Object.values
console.log('Object.values', Object.values(personClone))
```

**`webpack.config.js`**

```js
module: {
  rules: [
    {
      test: /\.js$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: [
            [
              '@babel/preset-env',
              {
                debug: true, // Hiển thị debug lên terminal để dễ debug
                useBuiltIns: 'usage', // Dùng cái này thì đơn giản nhất, không cần import core-js vào code
                corejs: '3.23.4' // nên quy định verson core-js để babel-preset-env nó hoạt động tối ưu
              }
            ]
          ]
        }
      }
    }
  ]
}
```

Ngoài ra để cho thuận tiện việc tối ưu kích thước file build bạn cũng có thể dùng `useBuiltIns: 'entry'`, lúc này thì bạn phải tự tay import các tính năng cần dùng. Ví dụ

**`index.js`**

```js
import 'core-js/modules/es.object.values'
import 'core-js/modules/es.promise'

import sum from './utils'
import './styles/style.css'
import './styles/style.scss'
console.log(sum(100, 10))
// ES6 Spread Operator
const person = { name: 'Duoc' }
const personClone = { ...person }
console.log('personClone', personClone)

// ES7 Object.values
console.log('Object.values', Object.values(personClone))
```

## [Sử dụng các tài nguyên như ảnh trong webpack](https://webpack.js.org/guides/asset-modules/)

- Webpack 5 cho phép chúng ta sử dụng các file như (ảnh, fonts, pdf...) trong webpack mà không cần cài thêm các loader (trước webpack 5 thì cần cài các loader như [file-loader](https://v4.webpack.js.org/loaders/file-loader/))

**`style.css`**

```css
@font-face {
  font-family: 'Roboto';
  src: url('../fonts/Roboto-Regular.ttf') format('truetype');
  font-weight: 400;
}

body {
  background-color: aqua;
  font-family: 'Roboto', sans-serif;
}
```

**`dom.js`**

```js
import wallpaper from './images/pexels-maxime-francis.jpg'
import bitcoinWhitepaper from './pdfs/bitcoin.pdf'

const domHandler = () => {
  console.log(wallpaper)
  console.log(bitcoinWhitepaper)
  document.body.style.backgroundImage = `url(${wallpaper})`
  const link = document.createElement('a')
  link.href = bitcoinWhitepaper
  link.textContent = 'Bitcoin Whitepaper'
  document.body.appendChild(link)
}

export default domHandler
```

**`webpack.config.js`**

```js
module.exports = {
  //...
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[contenthash].js',
    clean: true,
    assetModuleFilename: '[file]'
  },
  module: {
    rules: [
      {
        test: /\.(png|svg|jpg|jpeg|gif|pdf)$/i,
        type: 'asset/resource'
      }
    ]
  }
}
```

- Mình không bỏ phần mở rộng của file font vào `test` font mình import trong file css và webpack nó tự động load cho mình rồi.

Tham khảo cách viết template string cho [filename](https://webpack.js.org/configuration/output/#template-strings) và [assetModuleFilename](https://webpack.js.org/configuration/output/#outputassetmodulefilename)

> **Tip**
>
> - `[file]`: tên file và đường dẫn, không có query và fragment
> - `[query]`: query bắt đầu với dấu `?`. Ví dụ: abc.com/bitcoin.pdf?id=abcdef, khi người dùng click vào link này sẽ xem được file pdf và server cũng nhận được một request có query string id=abcdef để thực hiện một hành động gì đó.
> - `[fragment]`: fragment bắt đầu với dấu `#`. Ví dụ abc.com/bitcoin.pdf#page=4, khi người dùng click vào link này thì mở file pdf và chuyển ngay đến page 4. Tham khảo thêm về URI fragment [tại đây](https://en.wikipedia.org/wiki/URI_fragment)
> - `[base]`: Chỉ tên file (bao gồm phần mở rộng), không có đường dẫn
> - `[path]`: Chỉ có đường dẫn, không có tên file
> - `[name]`: Chỉ có tên file mà không có phần đuôi mở rộng hay đường dẫn
> - `[ext]`: Phần đuôi mở rộng bắt đầu với dấu `.` (tính năng này không có sẵn cho [output,filename](https://webpack.js.org/configuration/output/#outputfilename))

- `[file]` = `[path][base]`
- `[base]` = `[name][ext]`
- Full path: `[path][name][ext][query][fragment]` = `[path][base][query][fragment]` = `[file][query][fragment]`.
- Thực ra trong đa số trường hợp các bạn chỉ cần dùng `[file]` là đủ rồi. `[query]` và `[fragment]` cực ít dùng, chưa kể nếu chỉ áp dụng fragment khi import file còn làm tên file bị lỗi => 404 not found

## Phân tích file build với Webpack Bundle Analyzer

- Cài `yarn add -D webpack-bundle-analyzer`

**`webpack.config.js`**

```js
const BundleAnalyzerPlugin =
  require('webpack-bundle-analyzer').BundleAnalyzerPlugin

module.exports = (env) => {
  const basePlugins = [
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css'
    }),
    new HtmlWebpackPlugin({
      title: 'Webpack App',
      filename: 'index.html',
      template: 'src/template.html'
    })
  ]

  const isDevelopment = Boolean(env.development)
  const plugins = isDevelopment
    ? basePlugins
    : [...basePlugins, new BundleAnalyzerPlugin()]
  return {
    //...
    plugins
  }
}
```
