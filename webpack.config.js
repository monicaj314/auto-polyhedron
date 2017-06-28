const path = require('path');

const DIST_DIR = path.resolve(__dirname, 'public');
const APP_DIR = path.resolve(__dirname, 'app');

const config = {
    entry:{
        filename: './app/App.js'
    } ,
    output: {
        path: DIST_DIR,
        filename: 'bundle.js'
    },
    module: {
    loaders: [
      {
        test: /\.jsx?$/,
        include: /app/,
        loader: "babel-loader",
        query: {
          // These are the specific transformations we'll be using.
          presets: ["react", "es2015"]
        }
      }
    ]
  },
    devServer: {
        inline: false,
    },
    devtool: "eval-source-map"
};

module.exports = config;