// Initial welcome page. Delete the following line to remove it.
import indexVue from './index.vue';
new indexVue({
  data: {
    versions: {
      electron: process.versions.electron,
      electronWebpack: require('electron-webpack/package.json').version,
      typescript: require('typescript/package.json').version,
      vue: require('vue/package.json').version,
      vuePropertyDecorator: require('vue-property-decorator/package.json').version,
    },
  },
  el: '#app',
});
