const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
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
    mode: isDevelopment ? 'development' : 'production',
    entry: {
      app: path.resolve('src/index.js')
    },
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: '[name].[contenthash].js',
      clean: true,
      assetModuleFilename: '[file]'
    },
    devtool: isDevelopment ? 'source-map' : false,
    module: {
      rules: [
        {
          test: /\.s[ac]ss|css$/,
          use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
        },
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
                    useBuiltIns: 'entry',
                    corejs: '3.23.4' // nên quy định verson core-js để babel-preset-env nó hoạt động tối ưu
                  }
                ]
              ]
            }
          }
        },
        {
          test: /\.(png|svg|jpg|jpeg|gif|pdf)$/i,
          type: 'asset/resource'
        }
      ]
    },
    plugins,
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
}
