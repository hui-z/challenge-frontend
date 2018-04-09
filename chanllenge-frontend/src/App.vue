<template>
  <div id="app">
    <header-common></header-common>
    <main-part></main-part>
  </div>
</template>

<script>
  import header from './components/header.vue'
  import main from './components/main.vue'
export default {
  name: 'App',
  components: {
    'header-common': header,
    'main-part': main
  }
}
</script>

<style>

</style>
