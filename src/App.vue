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
      store,
    }
  }
}
</script>

<template>
<Header />
<Main />
</template>
<style lang="scss">
@use "./assets/style/generals.scss";
</style>