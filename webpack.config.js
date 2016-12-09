module.exports = {
  entry: './client.js',
  output: {
    filename: 'application.js',
    path: 'public'
  },
  module: {
    loaders: [
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['react']
        }
      }
    ]

  }
};
