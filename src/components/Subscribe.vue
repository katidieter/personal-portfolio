<template>
  <div class="subscribe">
    <p v-html="description"/>
    <a :href="button.url" target="_blank">
      {{button.callToAction}}
    </a>
  </div>
</template>

<script>
export default {
  name: 'Subscribe',
  props: {
    description: {
      type: String,
      required: true,
    },
    button: {
      type: Object,
      required: true,
    },
  },
  methods: {
    goToSubscribePage() {
      window.open(this.button.url, '_blank');
    },
  },
};
</script>

<style lang="stylus" scoped>
.subscribe
  margin-top 20px

  p
    display none

  @media only screen and (min-width: 768px)
    p
      display inline
      font-size 20px

  a
    font-size 20px
    color #D390B7
    text-decoration none
    font-weight 800
    text-decoration underline

</style>
