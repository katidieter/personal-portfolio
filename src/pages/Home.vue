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
            <p class="section-introduction">
              {{ professional.intro }}
            </p>
            <p class="section-description">
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
    <section id="projects">
      <h2> projects </h2>
      <projects-grid
        :projects="projects"
      />
    </section>
    <section id="contact-me">
      <h2>contact me</h2>
      <div class="contact-me__text">
        <p class="section-introduction">
          I am available for freelance!
        </p>
      </div>
      <div class="contact-me__actions">
        <button
          @click="goToLinkedin"
          class="linkedin-profile-button"
        >
          Send me a message at Linkedin
        </button>
        <div class="contact-me__email">
          <div>
            Or send me an email <span id="email">katielidieter@gmail.com</span>
          </div>
          <img src="../assets/icons/copy.png" @click="copyEmail">
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import ProfessionalData from '../data/professional-data';
import HelloWorld from '../components/HelloWorld.vue';
import ProjectsGrid from '../components/ProjectsGrid.vue';
import SkillsPanel from '../components/SkillsPanel.vue';

export default {
  components: {
    HelloWorld,
    ProjectsGrid,
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
    skills() {
      return this.professional.skills;
    },
    projects() {
      return this.professional.projects;
    },
  },
  methods: {
    goToLinkedin() {
      window.open(this.professional.linkedinUrl, '_blank');
    },
    copyEmail() {
      const email = document.getElementById('email');

      if (document.body.createTextRange) {
        this.copyElementAtInternetExplorer(email);
      } else if (window.getSelection) {
        this.copyElementAtBrowser(email);
      }
    },
    copyElementAtInternetExplorer(element) {
      const range = document.body.createTextRange();
      range.moveToElementText(element);
      range.select();
      document.execCommand('Copy');
    },
    copyElementAtBrowser(element) {
      const selection = window.getSelection();
      const range = document.createRange();
      range.selectNodeContents(element);
      selection.removeAllRanges();
      selection.addRange(range);
      document.execCommand('Copy');
    },
  },
};

</script>
<style lang="stylus" scoped>
section
  padding 0px 20px
  @media only screen and (min-width: 768px)
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
  flex-direction column

  @media only screen and (min-width: 768px)
    flex-direction row

  .about-me__content
    display flex
    flex-direction column

  .who-am-i
    @media only screen and (min-width: 768px)
      margin-right 20px
      width 80%
#contact-me
  height 100vh

  @media only screen and (min-width: 768px)
    .contact-me__text
      width 30%
  .contact-me__actions
    display flex
    flex-direction column
    width 50%

    button
      margin 0px
      width 80%

    p
      font-weight 500
      font-size 14px

    .contact-me__email
      display flex
      flex-direction row
      align-items center
      justify-content flex-start
      margin 10px

      #email
        color #767A7D
      img
        height 20px
        cursor pointer

h2
  font-size 40px
  text-align left
  margin 0px

  @media only screen and (min-width: 768px)
    font-size 65px

.section-introduction
  font-size 24px
  color #767A7D
  text-align left

.section-description
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
