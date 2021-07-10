<template>
  <div id="app">
    <div>
      <nav-bar
        :items="navigationItens"
        :social-medias="socialMedias"
      />
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import ProfessionalData from './data/professional-data';

import NavBar from './components/NavBar.vue';

export default {
  name: 'app',
  components: {
    NavBar,
  },
  data() {
    return {
      navigationItens: [
        { name: 'hello world!', src: '#home' },
        { name: 'about me', src: '#about-me' },
        { name: 'projects', src: '#projects' },
        { name: 'contact me', src: '#contact-me' },
      ],
    };
  },
  computed: {
    professional() {
      return ProfessionalData;
    },
    socialMedias() {
      return this.professional.socialMedias;
    },
  },
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

</style>
