const HtmlWebpackPlugin = require('html-webpack-plugin');

// Configuración de html-webpack-plugin.
const htmlPluginConfig = new HtmlWebpackPlugin({
  template: './src/index.html',
  filename: './index.html'
});

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
      }
    ]
  },
  plugins: [htmlPluginConfig]
};