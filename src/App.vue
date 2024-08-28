<script>
import { store } from './store';
import { getShows } from './data/api';
import Header from './Header.vue';
import Main from './Main.vue';
export default {
  components: {
    Header,
    Main
  },
  data() {
    return {
      store
    }
  },

  methods: {
    getShows
  }
}
</script>

<template>
  <Header @getMovie="getShows"/>
  <Main :movies="store.movieArray" :series="store.seriesArray"/>
</template>
<style lang="scss">
@use "./assets/style/generals.scss";
</style>