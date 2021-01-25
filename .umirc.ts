import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  title: "coinbene-交易",
  styles: [
    "https://at.alicdn.com/t/font_2314126_hoozrun36bh.css"
  ],
  theme: {
    '@primary-color': '#f5bb05',
    '@layout-header-background': '#12161c'
  },
  dynamicImport: {
    loading: '@/Loading',
  },
});
