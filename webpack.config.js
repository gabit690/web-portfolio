const HtmlWebpackPlugin = require('html-webpack-plugin');

// Configuración de html-webpack-plugin.
const htmlPluginConfig = new HtmlWebpackPlugin({
  template: './src/index.html',
  filename: './index.html'
});

const CopyPlugin = require("copy-webpack-plugin");

//Exporto la configuración de Webpack.
module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'fonts/'
            }
          }
        ]
      },
      {
        test: /\.(jpg|png)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'img/',
              publicPath: 'img/'
            }
          }
        ]
      }
    ]
  },
  plugins: [
    htmlPluginConfig,
    new CopyPlugin({
      patterns: [
        {
          from: "src/backend",
          to: "backend"
        },
        {
          from: "src/assets/img/portfolio-icon.ico",
          to: "img"
        }
      ]
    })
  ]
};