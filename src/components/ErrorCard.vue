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
@import '../scss/variables.scss';
@import '../scss/mixins.scss';
@import '../scss/breakpoints.scss';

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
  .errorTitle {
    font-size: 6vw;
    margin: 3vw;
    @include md {
      font-size: 3vw;
    }
    @include xl {
      font-size: 2vw;
      margin: 2vw;
    }
  }
  .errorInfo {
    text-align: center;
    @include md {
      font-size: 1.5vw;
    }
    @include xl {
      font-size: 1vw;
    }
  }
  .icon {
    font-size: 10vw;
    color: $darkviolet;
    margin: 3vw;
    @include md {
      font-size: 5vw;
      margin: 2vw;
    }
  }
}
.dark {
  background-color: $darkdarkviolet;
  color: #e8e8e8;
}
</style>
