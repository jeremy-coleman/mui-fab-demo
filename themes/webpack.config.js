const isProduction = process.env.NODE_ENV === "production";
const webpack = require("webpack");
const path = require("path");
const nodeExternals = require("webpack-node-externals");
//const FriendlyErrorsWebpackPlugin = require("friendly-errors-webpack-plugin");
const TerserPlugin = require('terser-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');

const TsConfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

const ROOT = path.resolve(__dirname);
const getRoot = path.join.bind(path, ROOT);


const containsFilter = (...values) => filename => values.some(value => filename.indexOf(value) >= 0)
const isNodeModuleFile = containsFilter("node_modules");
const isCogliteModule = containsFilter("@coglite");
const endsWithFilter = (...extensions) => filename => extensions.some(ext => filename.endsWith(ext));



module.exports = {
target: "electron-renderer",
stats: 'minimal',
mode: 'production',
node: {
  __dirname: false,
  __filename: false
  },

externals: [nodeExternals()],

// output: {
//     path: getRoot('lib'),
//     //pathinfo: true,
//     filename: 'index.js',
//     libraryTarget: 'commonjs2'
//   },

entry: {
  'index': "./src/index.ts"
},

output: {
    path: path.join(__dirname, 'lib'),
    //pathinfo: true,
    filename: '[name].js',
    publicPath: ''
},

// entry: "./src/index.ts",

resolve: {
            extensions: [".js", ".jsx", ".tsx", ".ts", ".json"],
            // modules: [getRoot("src")],
            // alias: {"package.json$": getRoot("package.json")},
            // plugins: [
            //   new TsConfigPathsPlugin({configFile: "./tsconfig.json"})
            // ]
},

module: { 
      rules: [
        
      {
          test: /\.[tj]sx?$/, 
          include: path.join(__dirname, 'src'),
          use: [{loader: 'ts-loader' , options: {transpileOnly: true}}],
          exclude: /node_modules/
      },
    ]
},

  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendors",
          chunks: "all"
        },
        styles: {
          name: 'styles',
          test: /\.(css?.+|less?.+)$/,
          chunks: 'all',
          minChunks: 1,
          reuseExistingChunk: true,
          enforce: true,
        },
      }
    },
    // minimizer: [
    //   new UglifyJsPlugin({
    //     cache: true,
    //     parallel: true,
    //     sourceMap: true,
    //     uglifyOptions: {
    //       warnings: false,
    //       screw_ie8: true,
    //       conditionals: true,
    //       unused: true,
    //       comparisons: true,
    //       sequences: true,
    //       dead_code: true,
    //       evaluate: true,
    //       if_return: true,
    //       join_vars: true,
    //       compress: {
    //         drop_console: true,
    //         warnings: false, // Suppress uglification warnings
    //         pure_getters: true
    //       },
    //       output: {
    //         comments: false
    //       }
    //     },
    //     sourceMap: true
    //   })
    // ]
  },
  
plugins: [
  new TerserPlugin(),
  //new CleanWebpackPlugin('dist', {root: getRoot()}),
  new webpack.DefinePlugin({'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)})
]
}

//module.exports = desktopConfig;
