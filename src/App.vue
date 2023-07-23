<template>
  <v-app>
    <div id="app" :class="mode">
      <div class="appWrapper">
        <AppHeader :mode="mode" @toggle="toggle" />
        <SearchBar :mode="mode" @searchUsername="handleSearch" />
        <!-- <SkeletonCard v-if="loading" /> -->
        <ErrorCard v-if="error" :mode="mode" />
        <UserCard v-else :user-details="usernameData" :loading="loading" :mode="mode" />
      </div>
    </div>
  </v-app>
</template>

<script>
import axios from 'axios';
import AppHeader from './components/AppHeader.vue';
import SearchBar from './components/SearchBar.vue';
import UserCard from './components/UserCard.vue';
import ErrorCard from './components/ErrorCard.vue';

export default {
  name: 'App',
  components: {
    AppHeader,
    SearchBar,
    UserCard,
    ErrorCard,
  },
  data() {
    return {
      usernameData: {},
      error: false,
      loading: true,
      mode: 'light',
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
      if (this.mode === 'dark') {
        this.mode = 'light';
      } else {
        this.mode = 'dark';
      }
    },
  },
};
</script>

<style lang="scss">
@import './scss/variables.scss';
@import './scss/mixins.scss';
@import './scss/breakpoints.scss';

* {
  margin: 0;
  text-decoration: none;
}

body {
  margin: 0;
  padding: 0;
}

#app {
  font-family: $font;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  box-sizing: border-box;
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: all 0.2s ease;
.appWrapper {
  @include md {
    width: 55vw;
  }
  @include xl {
    width: 35vw;
  }

}
}
.dark {
  background-color: $almostdark;
  color: $almostwhite;
}
.light {
  background-color: $almostwhite;
}
</style>
