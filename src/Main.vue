<script>
import { store } from './store';
import Tv from './components/partials/Tv.vue';
import Movie from './components/partials/Movie.vue';
export default {
    components: {
        Tv,
        Movie
    },
    data() {
        return {
            store
        }
    },
    props: {
        movies: Array,
        series: Array
    }
}
</script>
<template>
    <h2>Film</h2>
    <Movie v-for="film in movies" :key="film.id" :film="film"/>
    <h2>Serie TV</h2>
    <Tv v-for="serie in series" :key="serie.id" :serie="serie"/>
</template>
<style lang="scss">
.unknown {
    display: inline-block;
    width: 20px;
    height: 16px;
    background-color: #fff;
    border: 1px solid black;
}
</style>