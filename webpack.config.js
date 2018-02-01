const Uglify = require('uglifyjs-webpack-plugin')

module.exports = {
  entry: './sources/scripts/app.js',
  output: {
    path: require('path').resolve(__dirname, 'public/scripts'),
    filename: 'app.js',
  },
  watch: true,
  devtool: 'sourcemap',
  stats: 'errors-only',
  plugins: [
    new Uglify(),
  ],
  module: {
    rules: [
      {
        test: /\.scss$/,
        loaders: ['raw-loader', 'sass-loader'],
      },
    ],
  },
}
