module.exports = {
  entry: './src/index.js',

  output: {
    path: __dirname + '/public/',
    filename: 'bundle.js',
  },

  devServer: {
    inline: true,
    port: 7777,
    contentBase: __dirname + '/public/',
    historyApiFallback: true
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['babel-loader?' +JSON.stringify({
          cacheDirectory: true,
          presets: ['es2015', 'react']
        })],
        exclude: /node_modules/
      },
        {
          test: /\.css$/,
          loaders: ['style-loader', 'css-loader']
        }
    ]
  }
};
