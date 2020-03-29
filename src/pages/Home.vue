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
      <h2>About me</h2>
      <div class="about-me__content">
        <div>
          {{ professional.history }}
        </div>
        <div class="about-me__cards">
          <HistoryCard cardName="Latest experiences" :items="professional.experiences"/>
          <HistoryCard cardName="Education" :items="professional.education"/>
        </div>
        <button @click="goToLinkedin()">Click to see my LinkedIn</button>
      </div>
    </section>
    <section id="projects">projects grid</section>
    <section id="contacts">contact me</section>
  </div>
</template>
<script>
import ProfessionalData from '../data/professional-data';
import HelloWorld from '../components/HelloWorld.vue';
import HistoryCard from '../components/HistoryCard.vue';

export default {
  components: {
    HelloWorld,
    HistoryCard,
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
  padding-top 15px

@media only screen and (min-width: 768px)
  height 100vh

#home
  height 100vh
  display flex
  justify-content center
  align-items center

  @media only screen and (min-width: 768px)
    justify-content flex-start
    padding-left 80px

@media only screen and (min-width: 768px)
  section
    height 100vh

.about-me__content
  padding 1rem

.about-me__cards
  display flex
  flex-direction column

@media only screen and (min-width: 768px)
  .about-me__cards
    flex-direction row

</style>
