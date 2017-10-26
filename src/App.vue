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
  componemts: {
    Title,
    Header,
    Footer
  }
}
</script>

<style>
#app {

}
</style>
