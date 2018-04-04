<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import electron from 'electron';
Vue.config.devtools = false;
Vue.config.productionTip = false;
@Component
export default class extends Vue {
  open(url: string) {
    electron.shell.openExternal(url);
  }
}
</script>

<style>
@import url(https://unpkg.com/spectre.css/dist/spectre.min.css);
</style>

<style scoped>
.empty {
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
  position: relative;
}
.footer {
  bottom: 0;
  font-size: 13px;
  left: 50%;
  opacity: .9;
  position: absolute;
  transform: translateX(-50%);
  width: 100%;
}
</style>

<template>
  <div class="empty">
    <p class="empty-title h5">Welcome to your new project!</p>
    <p class="empty-subtitle">Get started now and take advantage of the great documentation at hand.</p>
    <div class="empty-action">
      <button @click="open('https://webpack.electron.build')" class="btn btn-primary">Documentation</button>
      <button @click="open('https://electron.atom.io/docs/')" class="btn btn-primary">Electron</button>
      <button @click="open('https://www.typescriptlang.org')" class="btn btn-primary">Typescirpt</button>
      <button @click="open('https://vuejs.org')" class="btn btn-primary">Vue.js</button>
      <button @click="open('https://github.com/kaorun343/vue-property-decorator')" class="btn btn-primary">Vue-property-decorator</button>
    </div>
    <ul class="breadcrumb">
      <li class="breadcrumb-item">electron-webpack v{{ versions.electronWebpack }}</li>
      <li class="breadcrumb-item">electron v{{ versions.electron }}</li>
      <li class="breadcrumb-item">typescript v{{ versions.typescript }}</li>
      <li class="breadcrumb-item">vue v{{ versions.vue }}</li>
      <li class="breadcrumb-item">vue-property-decorator v{{ versions.vuePropertyDecorator }}</li>
    </ul>
    <p class="footer">This intitial landing page can be easily removed from <code>src/renderer/*</code>.</p>
  </div>
</template>
