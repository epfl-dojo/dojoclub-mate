<template>
  <div id="app">
    <Header></Header>
    <Title></Title>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from './layouts/Header.vue'
import Footer from './layouts/Footer.vue'
import Title from './components/Title.vue'

export default {
  name: 'app',
  components: {
    Title,
    Header,
    Footer
  }
}
</script>

<style>

img {
  max-height: 120px;
}


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
