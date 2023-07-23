<template>
  <div class="errorCardWrapper" :class="mode">
    <h3 class="errorTitle">Error 404</h3>
    <p class="errorInfo">Sorry, such a user does not exist on GitHub!</p>
    <font-awesome-icon class="icon" icon="fa-solid fa-face-sad-tear" />
  </div>
</template>
<script>
export default {
  name: 'ErrorCard',
  props: {
    mode: {
      type: String,
      required: true,
    },
  },
};
</script>
<style lang="scss" scoped>
.errorCardWrapper {
  border-radius: 15px;
  background-color: #fefefe;
  box-shadow: 0px 16px 30px -10px rgba(70, 96, 187, 0.2);
  width: 90vw;
  margin-top: 5vw;
  padding: 6vw;
  flex-shrink: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  .errorTitle {
    font-size: 6vw;
    margin: 3vw;
  }
  .errorInfo {
    text-align: center;
  }
  .icon {
    font-size: 10vw;
    color: $darkviolet;
    margin: 3vw;
  }
}
.dark {
  background-color: $darkdarkviolet;
  color: #e8e8e8;
}
</style>
