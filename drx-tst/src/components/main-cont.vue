<template>
  <div class="page-cont">
    <header-comp></header-comp>
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
import HeaderComp from './shared/_header-comp.vue'

export default {
  name: 'MainCont',
  components: {
    'header-comp': HeaderComp
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
