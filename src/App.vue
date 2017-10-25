<template>
  <div id="app">
    <HeaderComponent></HeaderComponent>
    <TitleComponent></TitleComponent>
    <FooterComponent></FooterComponent>
    <router-view/>
  </div>
</template>

<script>
import HeaderComponent from './layout/Header.vue'
import FooterComponent from './layout/Footer.vue'
import TitleComponent from './components/title.vue'

export default {
  name: 'app',
  componemts: {
    TitleComponent ,HeaderComponent, FooterComponent
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
