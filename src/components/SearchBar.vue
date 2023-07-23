<template>
  <div class="searchBarWrapper" :class="mode">
    <font-awesome-icon class="icon" icon="fa-solid fa-magnifying-glass" />
    <div>
      <v-text-field
        v-model="inputUsername"
        class="pa-2"
        label="Search GitHub username.."
        :rules="rules"
        :class="mode"
        hide-details="auto"
        @keyup.enter="handleEnterKey"
      ></v-text-field>
    </div>
    <v-btn
      :disabled="inputUsername.length === 0 || inputUsername.length > 39"
      class="searchButton"
      rounded
      color="#0079FF"
      @click="handleSearch"
    >
      Search
    </v-btn>
  </div>
</template>
<script>
export default {
  name: 'SearchBar',
  props: {
    value: {
      type: String,
      default: '',
    },
    mode: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      inputUsername: '',
      rules: [
        (value) => value === '' || !!value || 'Required.',
        (value) => value === '' || value.length <= 39 || 'Max 39 characters',
      ],
    };
  },
  methods: {
    handleSearch() {
      this.$emit('searchUsername', this.inputUsername.trim().toLowerCase());
      this.inputUsername = '';
    },
    handleEnterKey() {
      if (this.inputUsername.length > 0) {
        this.handleSearch();
      }
    },
  },
};
</script>
<style lang="scss" scoped>
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
  .v-text-field ::v-deep label {
    font-size: 0.73em;
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
.dark {
  background-color: $darkdarkviolet;
  color: #e8e8e8;
  .v-text-field ::v-deep label {
    color: #e8e8e8;
  }
  .v-text-field ::v-deep .v-text-field__slot input {
    color: $almostwhite;
  }
}
</style>
