<template>
  <img
    id="avatar"
    :src="imageSource"
    :alt="image.alt"
  >
</template>

<script>
export default {
  name: 'Avatar',
  props: {
    image: {
      type: Object,
      required: true,
    },
  },
  computed: {
    imageSource() {
      /* eslint-disable-next-line */
      return require(`../assets/${this.image.src}`);
    },
  },
};
</script>

<style lang="stylus" scoped>
#avatar
    border-radius 15%
    object-fit cover
    height 200px
    width 200px
    @media only screen and (min-width: 768px)
      margin-right 30px
      height 350px
      width 350px
</style>
