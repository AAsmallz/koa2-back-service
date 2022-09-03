import path from 'path';
import { fileURLToPath } from 'url'
import nodeExternals from 'webpack-node-externals';
const __filenameNew = fileURLToPath(import.meta.url)
const __dirnameNew = path.dirname(__filenameNew)

export default {
  mode: 'production',
  entry: './src/app.js',
  externalsPresets: { node: true }, // webpack5使用这个替代 target: 'node' 重要，忽略诸如path、fs等内置模块。
  externals: [nodeExternals()], // 以忽略节点\模块文件夹中的所有模块
  output: {
    path: path.resolve(__dirnameNew, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
    ],
  },
};