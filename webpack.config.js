const path = require('path');

let esLintFomatter;
if (process.env.NODE_ENV === 'build') {
  esLintFomatter = require('eslint-formatter-vso');
} else {
  esLintFomatter = require('eslint-friendly-formatter');
}

module.exports = {
  entry: './src/index.jsx',
  output: {
    path: path.resolve(__dirname, './public'),
    filename: 'bundle.js',
  },
  resolve: { // These options change how modules are resolved
    modules: [path.resolve(__dirname, 'src', 'app'), 'node_modules'],
  },
  module: {
    rules: [{
      test: /\.js$/, // files ending with .js
      exclude: /node_modules/, // exclude the node_modules directory
      loader: 'babel-loader', // use this (babel-core) loader
    }, {
      test: /\.jsx$/, // files ending with .jsx
      exclude: /node_modules/, // exclude the node_modules directory
      loader: 'babel-loader', // use this (babel-core) loader
    }, {
      enforce: 'pre',
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      loader: 'eslint-loader',
      options: {
        fix: true,
        formatter: esLintFomatter,
      } }, { 
        test: /\.css$/, 
        loader: "style-loader!css-loader" 
      },
      { 
        test: /\.png$/, 
        loader: "url-loader?limit=100000" 
      },
      { 
        test: /\.jpg$/, 
        loader: "file-loader" 
      },
      {
        test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/, 
        loader: 'url-loader?limit=10000&mimetype=application/font-woff'
      },
      {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, 
        loader: 'url-loader?limit=10000&mimetype=application/octet-stream'
      },
      {
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, 
        loader: 'file-loader'
      },
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, 
        loader: 'url-loader?limit=10000&mimetype=image/svg+xml'
}],
  },
  devServer: {
    contentBase: path.resolve(__dirname, './public'), // A directory url to serve html content from
    historyApiFallback: true, // fallback to /index.html for Single Page Applications
    inline: true, // inline mode (set to false to disable including client scripts like live reload)
    open: true, // open default browser while launching
  },
  devtool: 'eval-source-map', // enable dev tool for better debugging experience
};
