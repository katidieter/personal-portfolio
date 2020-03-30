<template>
  <div id="home-page">
    <section id="home">
      <hello-world
        :avatar-image="professionalImage"
        :title="`Hey! I'm ${professional.name}`"
        :subtitle="professional.role"
      />
    </section>
    <section id="about-me">
      <div>
        <h2>about me</h2>
        <div
          class="about-me__content"
        >
          <div class="who-am-i">
            <p class="intro">
              {{ professional.intro }}
            </p>
            <p>
              {{ professional.history }}
            </p>
            <button
              @click="goToLinkedin"
              class="linkedin-profile-button"
            >
              View my LinkedIn profile
            </button>
          </div>
        </div>
      </div>
      <skills-panel
        :skills="skills"
      />
    </section>
    <section id="projects">projects grid</section>
    <section id="contacts">contact me</section>
  </div>
</template>
<script>
import ProfessionalData from '../data/professional-data';
import HelloWorld from '../components/HelloWorld.vue';
import SkillsPanel from '../components/SkillsPanel.vue';

export default {
  components: {
    HelloWorld,
    SkillsPanel,
  },
  computed: {
    professional() { return ProfessionalData; },
    professionalImage() {
      return {
        src: this.professional.avatar,
        alt: this.professional.name,
      };
    },
    skills() { return this.professional.skills; },
  },
  methods: {
    goToLinkedin() {
      window.open(this.professional.linkedinUrl, '_blank');
    },
  },
};

</script>
<style lang="stylus" scoped>
section
  padding 0px 20px
  @media only screen and (min-width: 768px)
    height 100vh
    padding 70px 100px 0px 100px

#home
  height 100vh
  display flex
  justify-content center
  align-items center

  @media only screen and (min-width: 768px)
    justify-content flex-start

#about-me
  display flex
  flex-direction row
  h2
    font-size 40px
    text-align left
    margin 0px

    @media only screen and (min-width: 768px)
      font-size 65px

  .about-me__content
    display flex
    flex-direction column

  .who-am-i
    @media only screen and (min-width: 768px)
      margin-right 20px
      width 80%
    .intro
      font-size 24px
      color #767A7D
      text-align left
    p
      text-align justify
      font-size 18px
    .linkedin-profile-button
      margin-top 20px
      padding 20px
      background-color #D390B7
      color #fff
      font-weight 600
      font-size 18px
      border-radius 5px
      border none
      cursor pointer
</style>
