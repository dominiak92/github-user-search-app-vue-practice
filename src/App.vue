<template>
  <v-app>
    <div id="app" :class="mode">
      <AppHeader :mode="mode" @toggle="toggle"/>
      <SearchBar :mode="mode" @searchUsername="handleSearch" />
      <SkeletonCard v-if="loading"/>
      <ErrorCard v-if="error" :mode="mode"/>
      <UserCard v-else-if="!loading" :user-details="usernameData" :mode="mode" />
    </div>
  </v-app>
</template>

<script>
import axios from 'axios';
import AppHeader from './components/AppHeader.vue';
import SearchBar from './components/SearchBar.vue';
import UserCard from './components/UserCard.vue';
import ErrorCard from './components/ErrorCard.vue';
import SkeletonCard from './components/SkeletonCard.vue'

export default {
  name: 'App',
  components: {
    AppHeader,
    SearchBar,
    UserCard,
    ErrorCard,
    SkeletonCard
  },
  data() {
    return {
      usernameData: {},
      error: false,
      loading: true,
      mode: 'light'
    };
  },
  created() {
    this.handleSearch('dominiak92');
  },
  methods: {
    handleSearch(username = 'dominiak92') {
      axios
        .get(`https://api.github.com/users/${username}`)
        .then((response) => {
          this.error = false;
          this.loading = false;
          this.usernameData = response.data;
        })
        .catch((error) => {
          // Obsługa błędów
          this.error = true;
          console.error('Wystąpił błąd podczas pobierania danych:', error);
        });
    },
    toggle() {
      if (this.mode === "dark") {
        this.mode = "light";
      } else {
        this.mode = "dark";
      }
    },
  },
};
</script>

<style lang="scss" src="./scss/App.scss"></style>
