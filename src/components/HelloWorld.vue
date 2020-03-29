<template>
  <div id="hello-world">
    <avatar
      :image="avatarImage"
    />
    <div
      class="text"
    >
      <h1 class="title">
        {{ title }}
      </h1>
      <h2 class="subtitle">
        {{ subtitle }}
      </h2>
    </div>
  </div>
</template>

<script>
import Avatar from './Avatar.vue';

export default {
  name: 'HelloWorld',
  components: {
    Avatar,
  },
  props: {
    avatarImage: {
      type: Object,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    subtitle: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="stylus" scoped>
#hello-world
  display flex
  flex-direction column
  align-items center

  @media only screen and (min-width: 768px)
    flex-direction row

  .text
    text-align center
    margin-top 30px

    @media only screen and (min-width: 768px)
      text-align left

    h1, h2
      margin 0
    h1
      font-size 40px
      @media only screen and (min-width: 768px)
        font-size 50px
    h2
      font-size 25px
      color #72C6B3
      @media only screen and (min-width: 768px)
        font-size 30px
</style>
