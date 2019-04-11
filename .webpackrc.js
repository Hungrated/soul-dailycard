const path = require('path');

module.exports = {
  extraBabelPlugins: [
    ['import', {'libraryName': 'antd-mobile', 'style': true}]
  ],
  alias: {
    '@': path.resolve('./src'),
    assets: path.resolve('./public/assets/')
  },
  // module: {
  //   rules: [
  //     {
  //       test: /\.css$/,
  //       use: [
  //         'style-loader',
  //         'css-loader'
  //       ]
  //     },
  //     {
  //       test: /\.less$/,
  //       use: [
  //         'style-loader',
  //         'css-loader',
  //         {
  //           loader: 'less-loader',
  //           options: {modifyVars: require('./src/styles/global/theme.js')}
  //         }
  //       ],
  //       include: /node_modules/
  //     }
  //   ]
  // }
};
