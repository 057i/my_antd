
export default {
  treeShaking: true,
  plugins: [
    ['umi-plugin-react', {
      antd: true,
      dva: true,
      dynamicImport: false,
      title: 'antd-learn1',
      dll: false,

      routes: {
        exclude: [
          /models\//,
          /services\//,
          /model\.(t|j)sx?$/,
          /service\.(t|j)sx?$/,
          /components\//,
        ],
      },
    }],
  ],
  proxy: {
    "/api": {
      target: "http://open.duyiedu.com",
      changeOrigin: true
    },
    "/api/upload": {
      target: "http://101.132.72.36:5100",
      changeOrigin: true
    }

  },
  "theme": {
    "primary-color": "#008c8c"
  }
}
