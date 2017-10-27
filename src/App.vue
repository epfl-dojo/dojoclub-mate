<template>
  <div id="app">
    <Header-Component></Header-Component>
    <Title-Component></Title-Component>
    <MateComponent></MateComponent>
    <Footer-Component></Footer-Component>
  </div>
</template>

<script>
import HeaderComponent from './layouts/Header.vue'
import FooterComponent from './layouts/Footer.vue'
import TitleComponent from './components/Title.vue'
import MateComponent from './components/mate.vue'

export default {
  name: 'app',
  components: {
    TitleComponent,
    MateComponent,
    HeaderComponent,
    FooterComponent
  }
}
</script>
<style>



footer {
  background-color: #fff6ce;
  bottom: 0;
  width: 100%;
  right: 0;
  left: 0;
  height: 40px;
  margin-top: 40px;
  margin-bottom: 0;
  padding-top: 8px;
  text-align: center;
}
</style>
