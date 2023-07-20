<template>
  <div class="searchBarWrapper">
    <font-awesome-icon class="icon" icon="fa-solid fa-magnifying-glass" />
    <v-text-field
      label="Main input"
      :rules="rules"
      hide-details="auto"
    ></v-text-field>
    <v-btn class="searchButton" rounded color="#0079FF" dark> Search </v-btn>
  </div>
</template>
<script>
export default {
  name: 'SearchBar',
  props: {
    type: {
      type: String,
      default: 'text', // Jeśli nie podasz typu, domyślnie będzie to pole tekstowe
    },
    placeholder: {
      type: String,
      default: '', // Domyślnie nie będzie placeholdera
    },
  },
  data: () => ({
      rules: [
        value => !!value || 'Required.',
        value => (value && value.length >= 3) || 'Min 3 characters',
      ],
    }),
};
</script>
<style lang="scss">
@import '../scss/variables.scss';

.searchBarWrapper {
  border-radius: 15px;
  background: $whitestalmostwhite;
  box-shadow: 0px 16px 30px -10px rgba(70, 96, 187, 0.2);
  width: 90vw;
  height: 60px;
  flex-shrink: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 3vw;
  .searchInput {
    width: 54vw;
    font-size: 0.8rem;
    margin-right: auto;
    :active {
      border: none;  
    }
  }
  .icon {
    font-size: 20px;
    margin-right: 1vw;
  }
  .searchButton {
    border-radius: 10px;
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
}
</style>
