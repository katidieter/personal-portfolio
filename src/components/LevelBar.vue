<template>
  <div id="#level-bar">
    <div class="secundary-bar">
      <div
        class="main-bar"
        :style="`background-color: ${color}; width: ${levelWidth}`"
      />
    </div>
    <p
      :style="`width: ${levelWidth};`"
    >
      {{ level }}
    </p>
  </div>
</template>

<script>
const LEVELS = {
  junior: '33%',
  intermediate: '66%',
  advanced: '100%',
};

export default {
  name: 'LevalBar',
  props: {
    color: {
      type: String,
      required: true,
    },
    level: {
      type: String,
      validator: value => Object.keys(LEVELS).includes(value),
    },
  },
  computed: {
    levelWidth() {
      return LEVELS[this.level];
    },
  },
};
</script>

<style lang="stylus" scoped>
.main-bar
  height 10px

.secundary-bar
  width 150px
  height 10px
  background-color #cacaca

  @media only screen and (min-width: 768px)
    width 300px

p
  text-align right
  font-size 12px
  margin 0px
</style>
