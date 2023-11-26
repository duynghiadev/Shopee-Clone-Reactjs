const path = require('path')
module.exports = (env, agrv) => {
  const isDev = agrv.mode === 'development'
  return {
    entry: './src/index.js',
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /(node_modules|bower_components)/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
              plugins: ['@babel/plugin-transform-runtime']
            }
          }
        },
        {
          test: /\.(s[ac]ss|css)$/,
          use: [
            'style-loader',
            {
              loader: 'css-loader',
              options: { sourceMap: isDev ? true : false }
            },
            {
              loader: 'sass-loader',
              options: { sourceMap: isDev ? true : false }
            }
          ]
        },
        {
          test: /\.(png|svg|jpg|gif)$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: '[path][name].[ext]'
              }
            }
          ]
        }
      ]
    },
    resolve: { extensions: ['.js', '.jsx'] },
    output: {
      path: path.resolve('dist'),
      publicPath: '../dist/',
      filename: 'bundle.js',
      environment: {
        arrowFunction: false,
        bigIntLiteral: false,
        const: false,
        destructuring: false,
        dynamicImport: false,
        forOf: false,
        module: false
      }
    },
    devtool: isDev ? 'source-map' : false,
    devServer: {
      contentBase: 'public',
      port: 3000,
      hot: true,
      publicPath: '/dist/',
      watchContentBase: true
    }
  }
}