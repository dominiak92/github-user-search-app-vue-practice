<template>
  <div class="skeletonWrapper">
    <v-skeleton-loader
      class="mx-auto"
      min-width="80vw"
      type="list-item-avatar, divider, list-item-three-line, card-heading"
    ></v-skeleton-loader>
  </div>
</template>
<script>
export default {
  name: 'SkeletonCard',
};
</script>
<style lang="scss">
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
}
</style>
