<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-3">
          <img id="imagemate" :src="img" />
      </div>
          <p>{{slogan}}</p>
      <div v-html="subSlogan" class="subSlogan col-sm-9"></div>
    </div>

  </div>
</template>
<script>
export default {
  name: 'title',
  data () {
    return {
      slogan: '“Well, how\'re we feeling today? Had a hard day, feeling a bit tired and worn out?”',
      subSlogan: 'Say it loud and clear: "Club-Mate, please" - that will help! <br />\
      Because Club-Mate refreshes and stimulates, without making you all fidgety. Club-Mate is made from maté - an old South American jungle plant. \
      With its naturally occurring unique combination of stimulants, mate is still working miracles, even in this day and age.<br />\
      It is an exclusive beverage, on maté. Club-Mate is standing right in front of you, and you taste it. It tastes really great, somehow different, refreshing. \
      It tastes like a soft drink, but not as sweet. It features a unique combination of caffeine and tannins, it\'s stimulating but doesn\'t make you fidgety. \
      It\'s delicious and refreshing.',
      img: "/static/club_mate_flaschen.png"
    }
  }
}
</script>
<style>

.mycustomjumborton {
  padding-top: 70px;

  background-color: #fff6ce;

}

#imagemate
{
  height: 300px;
  max-height: 3000px;
}

</style>
