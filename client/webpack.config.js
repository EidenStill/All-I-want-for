const path = require('path');

module.exports = {
  entry: './src/App.js', // Specify the entry file of your application
  output: {
    filename: 'bundle.js', // Specify the output file
    path: path.resolve(__dirname, 'dist') // Specify the output directory
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  }
};
