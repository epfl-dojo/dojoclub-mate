<template>
  <div class="container">
    <!-- Main component for a primary marketing message or call to action -->
    <div class="jumbotron mycustomjumborton">
        <img src="../assets/logoclub-mate.png" alt="logo"></img>
      <p>{{ description }}</p>
    </div>
  </div>
</template>
<script>
export default {
  name: 'title',
  data () {
    return {
      description: 'In this site you will find documentation about Club-Mate.'
    }
  }
}
</script>
<style>

.mycustomjumborton {
  padding-top: 70px;

  background-color: #fff6ce;
}

</style>
