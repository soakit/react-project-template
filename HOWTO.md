## 搭建过程

1. 使用 create-react-app 搭建项目

   ```shell
   npx create-react-app react-project-template
   cd react-project-template
   ```

2. eject 项目

   ```shell
   npm run eject
   ```

3. 安装依赖

   ```shell
   yarn add antd-mobile axios react-redux @babel/plugin-transform-react-jsx @babel/plugin-transform-react-jsx-self react-router-dom redux redux-thunk rc-form
   ```

   ```shell
   yarn add eslint-config-airbnb eslint-config-prettier eslint-plugin-compat react-hot-loader babel-plugin-import redux-devtools-extension redux-logger less less-loader --dev
   ```

4. 移除 package.json 中的 babel 属性转移到.babelrc 文件中

5. 增加 less 的支持

6. 增加包分析

   ```shell
   npm run build --report
   ```

7. 打包忽略开发环境的包

   webpack.config.js

   ```javascript
   new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/, /redux-logger$/, /redux-devtools-extension$/),
   ```

8. lodash 的优化

   - babel-plugin-lodash
   - lodash-webpack-plugin

9. 给 src 目录加个@的别名方便开发

10. react 热更新(react-hot-loader)

    webpack.config.js

    ```javascript
    {
      test: /\.(js|jsx)$/,
      include: paths.appSrc,
      loader: require.resolve('babel-loader'),
      options: {
        // This is a feature of `babel-loader` for webpack (not Babel itself).
        // It enables caching results in ./node_modules/.cache/babel-loader/
        // directory for faster rebuilds.
        cacheDirectory: true,
        plugins: ['react-hot-loader/babel'],
      },
    }
    ```

    ```shell
    yarn add react-dom@npm:@hot-loader/react-dom
    ```
