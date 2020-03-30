<template>
  <div id="skills-panel">
    <div>
      <h3>
        Hard Skills
      </h3>
      <ul>
        <li
          v-for="(skill, s) in hardSkills" :key="s"
        >
          <span> {{ skill.name }} </span>
          <level-bar
            color="#075F93"
            :level="skill.level"
          />
        </li>
      </ul>
    </div>
    <div>
      <h3>
        Soft Skills
      </h3>
      <ul>
        <li
          v-for="(skill, s) in softSkills" :key="s"
        >
          <span> {{ skill.name }} </span>
          <level-bar
            color="#72C6B3"
            :level="skill.level"
          />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import LevelBar from './LevelBar.vue';

export default {
  name: 'SkillsPanel',
  props: {
    skills: {
      type: Array,
      required: true,
    },
  },
  components: {
    LevelBar,
  },
  computed: {
    hardSkills() {
      return this.skills.filter(skill => skill.kind === 'hard');
    },
    softSkills() {
      return this.skills.filter(skill => skill.kind === 'soft');
    },
  },
};
</script>

<style lang="stylus" scoped>
#skills-panel
  display flex
  flex-direction column

  h3
    text-align left

  ul
    padding-inline-start 0px

  li
    display flex
    flex-direction row
    justify-content space-between
    text-align left

    span
      font-weight 500
      margin-right 10px
</style>
