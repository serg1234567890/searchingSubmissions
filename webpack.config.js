const webpack = require('webpack');
module.exports = {
    entry: './src/index.js',
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: ['babel-loader']
        },
        { 
          test: /\.css$/, 
          loader: "style-loader!css-loader" 
        }
      ]
    },
    resolve: {
      extensions: ['*', '.js', '.jsx', '.css']
    },
    output: {
      path: __dirname + '/dist',
      publicPath: '/',
      filename: 'bundle.js'
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin()
    ],
    devServer: {
      contentBase: './dist',
      hot: true,
      port: 9200
    }
  };
