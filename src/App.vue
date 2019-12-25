<template>
  <div id="app">
    <div>
      <nav-bar :items="navigationItens"/>
      <router-view></router-view>
      <home/>
    </div>
  </div>
</template>

<script>
import Home from './pages/Home.vue';
import NavBar from './components/NavBar.vue';

export default {
  name: 'app',
  components: {
    Home,
    NavBar,
  },
  data() {
    return {
      navigationItens: [
        { name: 'portfolio', src: '#home' },
        { name: 'about me', src: '#about-me' },
        { name: 'projects', src: '#projects' },
        { name: 'contact', src: '#contacts' },
      ],
    };
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
