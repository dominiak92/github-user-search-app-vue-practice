<template>
  <div id="app">
    <AppHeader/>
    <SearchBar/>
  </div>
</template>

<script>
import AppHeader from './components/AppHeader.vue';
import SearchBar from './components/SearchBar.vue';

export default {
  name: 'App',
  components: {
    AppHeader,
    SearchBar
  },
};
</script>

<style lang="scss" src="./scss/App.scss"></style>
