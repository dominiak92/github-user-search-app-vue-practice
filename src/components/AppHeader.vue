<template>
  <div class="header">
    <p class="logo">devfinder</p>
    <ToggleButton :mode="mode" @toggle="$emit('toggle')" />
  </div>
</template>
<script>
import ToggleButton from './UI/ToggleButton.vue';

export default {
  name: 'AppHeader',
  components: {
    ToggleButton,
  },
  props: {
    mode: {
      type: String,
      required: true,
    },
  },
};
</script>
<style lang="scss" scoped>
@import '../scss/variables.scss';
@import '../scss/mixins.scss';
@import '../scss/breakpoints.scss';
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 4vw;
  width: 100%;
  @include xl {
    padding: 1vw;
  }
  .logo {
    font-size: 26px;
    font-weight: 700;
    margin: 0;
  }
}
</style>
