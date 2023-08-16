
// module.exports = {
//   presets: [
//     '@vue/app'
//   ]
// }

module.exports = {
  presets: ['@vue/app', ['@babel/preset-env', { modules: false }]],
  plugins: [
    [
      'component',
      {
        libraryName: 'element-ui',
        // 指定组件的样式库，这里使用了theme-chalk样式库来渲染Element UI组件
        styleLibraryName: 'theme-chalk',
      },
    ],
  ],
};

