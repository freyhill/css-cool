 const { override, fixBabelImports,addLessLoader,addWebpackAlias } = require('customize-cra');
 const path = require("path");
 module.exports = override(
   fixBabelImports('import', {
     libraryName: 'antd',
     libraryDirectory: 'es',
     style: true,
   }),
   addLessLoader({
    lessOptions: {
      javascriptEnabled: true,
      modifyVars: { 
          '@primary-color': '#1890ff',
          '@link-color': '#1890ff'
        },
    }
  }),
  addWebpackAlias({
    ['@']: path.resolve(__dirname, 'src'),
    ['@actions']: path.resolve(__dirname, 'src/store/actions'),
    ['@components']: path.resolve(__dirname, 'src/components'),
    ['@pages']: path.resolve(__dirname, 'src/pages'),
    ['@constant']: path.resolve(__dirname, 'src/constant'),
    ['@utils']: path.resolve(__dirname, 'src/utils'),
  })
 );