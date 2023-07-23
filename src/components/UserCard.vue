<template>
  <section class="userCardWrapper" :class="mode">
    <div class="userTopInfo">
      <img class="avatarImg" :src="userDetails.avatar_url" alt="user avatar" />
      <div class="nameLoginCreated">
        <div class="nameLogin">
          <div>
            <p class="name">{{ userDetails.name }}</p>
          </div>
          <div>
            <a :href="userDetails.html_url"
              ><p class="login">@{{ userDetails.login }}</p></a
            >
          </div>
        </div>
        <div>
          <p class="created">{{ getJoinDate() }}</p>
        </div>
      </div>
    </div>
    <section class="bioInfo">
      <p class="bio">{{ userDetails.bio }}</p>
      <div class="repoFollowers">
        <div class="repoInfo">
          <p class="repoDescription">Repos</p>
          <p class="repoData">{{ userDetails.public_repos }}</p>
        </div>
        <div class="repoInfo">
          <p class="repoDescription">Followers</p>
          <p class="repoData">{{ userDetails.followers }}</p>
        </div>
        <div class="repoInfo">
          <p class="repoDescription">Following</p>
          <p class="repoData">{{ userDetails.following }}</p>
        </div>
      </div>
    </section>
    <section class="informationsWrapper">
      <div v-if="userDetails.location" class="information">
        <div class="iconWrapper">
          <font-awesome-icon class="icon" icon="fa-solid fa-location-dot" />
        </div>
        <p>{{ userDetails.location }}</p>
      </div>
      <div v-if="userDetails.blog" class="information">
        <div class="iconWrapper">
          <font-awesome-icon class="icon" icon="fa-solid fa-link" />
        </div>
        <a :href="userDetails.blog"
          ><p>{{ userDetails.blog }}</p></a
        >
      </div>
      <div v-if="userDetails.twitter_username" class="information">
        <div class="iconWrapper">
          <font-awesome-icon class="icon" icon="fa-brands fa-twitter" />
        </div>
        <p>{{ userDetails.twitter_username }}</p>
      </div>
      <div v-if="userDetails.company" class="information">
        <div class="iconWrapper">
          <font-awesome-icon class="icon" icon="fa-solid fa-building" />
        </div>
        <p>{{ userDetails.company }}</p>
      </div>
    </section>
  </section>
</template>
<script>
export default {
  name: 'UserCard',
  props: {
    userDetails: {
      type: Object,
      required: true,
    },
    mode: {
      type: String,
      required: true,
    },
  },
  methods: {
    getJoinDate() {
      const date = new Date(this.userDetails.created_at).toDateString();
      const fullDate = date.split(' ');
      fullDate.splice(0, 1);
      return `Joined ${fullDate.join(' ')}`;
    },
  },
};
</script>
<style lang="scss" scoped>
@import '../scss/variables.scss';
@import '../scss/mixins.scss';
@import '../scss/breakpoints.scss';
.userCardWrapper {
  border-radius: 15px;
  background-color: $whitestalmostwhite;
  box-shadow: 0px 16px 30px -10px rgba(70, 96, 187, 0.2);
  width: 90vw;
  margin-top: 10vw;
  padding: 6vw;
  flex-shrink: 0;
  transition: all 0.2s ease;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @include md {
    margin-top: 3vw;
    padding: 3vw;
    width: 55vw;
  }
  .userTopInfo {
    display: flex;
    margin-top: 1.5vw;
    @include md {
      margin-top: 0;
      align-self: flex-start;
    }
    .avatarImg {
      width: 16.5vw;
      height: 16.5vw;
      border-radius: 16.5vw;
      @include md {
        width: 10vw;
        height: 10vw;
      }
    }
    .nameLoginCreated {
      display: flex;
      flex-direction: column;
      margin-left: 4vw;
      .nameLogin {
        .name {
          color: $verydarkviolet;
          font-size: 4.2vw;
          font-weight: 700;
          line-height: normal;
          margin: 0;
          @include md {
            font-size: 2.4vw;
          }
        }
        .login {
          color: $violetblue;
          font-size: 3.4vw;
          margin: 0;
          @include md {
            font-size: 2vw;
          }
        }
      }
      .created {
        color: $violetgray;
        margin-top: 6px;
        font-size: 3.4vw;
        @include md {
            font-size: 2vw;
          }
      }
    }
  }
  .bio {
    margin-top: 4vw;
    margin-bottom: 3vw;
    color: $violetgray;
    @include md {
      margin-top: 2vw;
    }
  }
  .repoFollowers {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 80vw;
    height: 25vw;
    border-radius: 2vw;
    background-color: $almostwhite;
    padding: 2vw;
    transition: all 0.2s ease;
    @include md {
      width: 49vw;
      height: 10vw;
    }
    .repoInfo {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      .repoDescription {
        font-size: 3vw;
        color: $darkviolet;
        margin: 0;
        @include md {
          font-size: 1.5vw;
        }
      }
      .repoData {
        margin: 0;
        margin-top: 2.5vw;
        font-size: 5vw;
        font-weight: 700;
        @include md{
          margin-top: 1vw;
          font-size: 2.5vw;
        }
      }
    }
  }
  .informationsWrapper {
    margin-top: 5vw;
    @include md{
      margin-top: 2vw;
      align-self: flex-start;
    }
    .information {
      display: flex;
      align-items: center;
      margin-bottom: 2vw;
      @include md {
        margin-bottom: 1vw;
      }

      .iconWrapper {
        width: 7vw;
        height: 7vw;
        display: flex;
        justify-content: center;
        align-items: center;
        @include md{
          width: 3.3vw;
          height: 3.3vw;
        }
        .icon {
          color: $darkviolet;
          font-size: 5vw;
          margin-right: 2vw;
          @include md {
            font-size: 2vw;
            margin-right: 0;
          }
        }
      }

      p {
        margin: 0;
        color: $darkviolet;
        font-size: 4vw;
        @include md {
          font-size: 1.5vw;
        }
      }
    }
  }
}
.dark {
  background-color: $darkdarkviolet;
  color: #e8e8e8;
  .bio {
    color: $almostwhite;
  }
  .userTopInfo {
    .nameLoginCreated {
      .created {
        color: $almostwhite;
      }
      .nameLogin {
        .name {
          color: $almostwhite;
        }
      }
    }
  }
  .bioInfo {
    .repoFollowers {
      background-color: #141d2f;
      .repoInfo {
        .repoDescription {
          color: $almostwhite;
        }
      }
    }
  }
  .informationsWrapper {
    .information {
      .iconWrapper {
        .icon {
          color: $almostwhite;
        }
      }
      p {
        color: $almostwhite;
      }
    }
  }
}
</style>
