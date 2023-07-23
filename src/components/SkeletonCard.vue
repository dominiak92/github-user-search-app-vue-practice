<template>
  <div class="skeletonWrapper">
    <v-skeleton-loader
      class="mx-auto"
      min-width="100%"
      type="list-item-avatar, card-heading, list-item-three-line"
    ></v-skeleton-loader>
  </div>
</template>
<script>
export default {
  name: 'SkeletonCard',
};
</script>
<style lang="scss" scoped>
@import '../scss/variables.scss';
@import '../scss/mixins.scss';
@import '../scss/breakpoints.scss';
.skeletonWrapper {
  border-radius: 15px;
  background: #fefefe;
  box-shadow: 0px 16px 30px -10px rgba(70, 96, 187, 0.2);
  width: 90vw;
  margin-top: 10vw;
  padding: 6vw;
  flex-shrink: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  @include md {
    margin-top: 3vw;
    padding: 3vw;
    width: 55vw;
  }
  @include xl {
    margin-top: 1.5vw;
    width: 35vw;
    padding: 2vw;
  }
}
</style>
