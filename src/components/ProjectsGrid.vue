<template>
  <div id="projects-grid">
    <div
      v-for="(project, p) in projects" :key="p"
      class="project"
    >
      <img
        :src="project.image"
        class="project-image"
      >
      <div class="project-info">
        <h3>
          {{ project.title }}
        </h3>
        <div class="project-tags">
          <span
            v-for="(tag, t) in project.tags" :key="t"
            :style="`border: solid 1px ${tag.color}`"
          >
            {{ tag.name }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const BORDER_COLORS = ['#D390B7', '#075F93', '#72C6B3', '#FEAB5C', '#9EC3BA', '#553037', '#C19758'];

export default {
  name: 'ProjectsGrid',
  props: {
    projects: {
      type: Array,
      required: true,
    },
  },
  created() {
    this.setDynamicColor();
  },
  methods: {
    setDynamicColor() {
      this.projects.forEach((project) => {
        project.tags.forEach((tag, i) => {
          /* eslint-disable-next-line */
          tag.color = BORDER_COLORS
            .slice(i, i + 1)
            .concat(BORDER_COLORS.slice(0, Math.max(i + 1 - BORDER_COLORS.length, 0)));
        });
      });
    },
  },
};
</script>

<style lang="stylus" scoped>
#projects-grid
  display flex
  flex-direction row
  flex-wrap wrap
  width 100%
  justify-content space-between

.project
  max-width 30%
  border-radius 5px
  box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.13);
  margin-top 20px

  .project-image
    max-height 200px
    border-radius 5px 5px 0px 0px
    width 100%

  .project-info
    padding 10px

    .project-tags
      display flex
      justify-content flex-start

    h3
      font-size 24px
      text-align left
      margin 0px

    span
      padding 2px
      border-radius 5px
      margin 5px
</style>
