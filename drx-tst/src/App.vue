<template>
  <div id="app">      
      <main-cont></main-cont>
  </div>
</template>

<script>
import MainCont from './components/main-cont.vue'

export default {
  name: 'App',
  components: {
    'main-cont': MainCont
  }
}
</script>

<style lang="scss">
@import "./assets/styles/styles.scss";

</style>
