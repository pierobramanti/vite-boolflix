<script>
import { store } from './store';
import axios from 'axios';
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
    getShows(showName){
      let urlMovies = `${store.endpoint}${store.searchMovie}${store.keyApi}`
      let urlSeries = `${store.endpoint}${store.searchTv}${store.keyApi}`
      axios.get(`${urlMovies}&query=${showName}`).then((res) => {
       store.movieArray = res.data.results
      })
      axios.get(`${urlSeries}&query=${showName}`).then((res) => {
        store.seriesArray = res.data.results
        console.log(store.seriesArray)
      })
    }
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