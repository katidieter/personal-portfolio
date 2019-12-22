<template>
  <div id="app">
    <div>
      <nav-bar :items="navigationItens"/>
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
        { name: 'portfolio', src: '#initial' },
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

img {
  width: 100%;
  position: relative;
}

.app__introduce {
  position: absolute;
  color: white;
  background-color: red;

  h1 {
    top: 50%;
  }

  h2 {
    top: 30%;
  }
}
</style>
