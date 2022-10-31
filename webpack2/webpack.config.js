const path = require('path')

module.exports = {
  // You need to list out every file you want to bundle in `entry`
  entry: './src/js/index.js',
  output: {
    path: path.resolve(__dirname, './build'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.txt$/i,
        use: 'raw-loader',
      },
    ],
  },
}
