export default {
  umd: {
    file: 'index',
    name: 'index',
    globals: {
      react: 'React',
    },
  },
  cjs: { type: 'babel', lazy: true },
  esm: {
    type: 'babel',
    importLibToEs: true,
  },
  extraBabelPlugins: [
    [
      'babel-plugin-import',
      {
        libraryName: 'antd',
        style: true,
      },
      'antd',
    ],
  ],
  lessInBabelMode: true,
  // autoprefixer: {
  //   browsers: ['ie>9', 'Safari >= 6'],
  // },
  // pkgs: []
};
