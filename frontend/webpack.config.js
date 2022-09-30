const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const port = process.env.PORT || 3000;

module.exports = {
  entry: './src/index.js', // Dẫn tới file index.js ta đã tạo
  output: {
    path: path.join(__dirname, '/build'), // Thư mục chứa file được build ra
    filename: 'bundle.js', // Tên file được build ra
  },
  module: {
    rules: [
      {
        test: /\.js$/, // Sẽ sử dụng babel-loader cho những file .js
        exclude: /node_modules/, // Loại trừ thư mục node_modules
        use: ['babel-loader'],
      },
      {
        test: /\.(png|jpg|gif)$/i,
        type: 'asset/inline',
      },
      {
        test: /\.css$/, // Sử dụng style-loader, css-loader cho file .css
        use: ['style-loader', 'css-loader'],
      },
      // {
      //   test: /\.(scss)$/,
      //   use: [
      //     {
      //       // inject CSS to page
      //       loader: 'style-loader',
      //     },
      //     {
      //       // translates CSS into CommonJS modules
      //       loader: 'css-loader',
      //     },
      //     {
      //       // Run postcss actions
      //       loader: 'postcss-loader',
      //       options: {
      //         // `postcssOptions` is needed for postcss 8.x;
      //         // if you use postcss 7.x skip the key
      //         postcssOptions: {
      //           // postcss plugins, can be exported to postcss.config.js
      //           plugins: function() {
      //             return [require('autoprefixer')];
      //           },
      //         },
      //       },
      //     },
      //     {
      //       // compiles Sass to CSS
      //       loader: 'sass-loader',
      //     },
      //   ],
      // },
    ],
  },
  // optimization: {
  //   splitChunks: {
  //     cacheGroups: {
  //       styles: {
  //         name: 'styles',
  //         test: /\.css$/,
  //         chunks: 'all',
  //         enforce: true,
  //       },
  //       vendor: {
  //         chunks: 'initial',
  //         test: 'vendor',
  //         name: 'vendor',
  //         enforce: true,
  //       },
  //     },
  //   },
  // },
  // Chứa các plugins sẽ cài đặt trong tương lai
  plugins: [new HtmlWebpackPlugin({ template: './public/index.html' })],
  devServer: {
    host: 'localhost',
    port: port,
    historyApiFallback: true,
    open: true,
    hot: true,
  },
};
