<template>
  <div class="navbar">
    <div class="navbar__burguer-menu">
      <Slide right>
        <a  v-for="(item, i) in items" :key="i" :id="item.src" :href="item.src">
          <span>{{ item.name }}</span>
        </a>
      </Slide>
    </div>
    <nav class="navbar__items navbar__items--left">
      <a :href="item.src" class="navbar__link" v-for="(item, i) in items" :key="i">
        {{ item.name }}
      </a>
    </nav>
  </div>
</template>

<script>
import { Slide } from 'vue-burger-menu';

export default {
  name: 'NavBar',
  components: {
    Slide,
  },
  props: {
    items: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped>
.navbar {
  position: fixed;
  overflow: hidden;
  top: 0;
  display: flex;
  width: 100%;
  padding: 10px;
  font-family: sans-serif;
  color: #000;
  background-color: #fff;
}

@media only screen and (max-width: 768px) {
  .navbar {
    width: 80%;
    position: unset;
  }
}

.navbar__link {
  padding-right: 8px;
  color: #000;
  font-weight: 600;
  text-decoration-line: none;
  padding: 0.5rem;
  z-index: 10;
}

.navbar__items {
  display: flex;
}

.navbar__items--left {
  margin-right: auto;
}

.navbar__burguer-menu {
  display: none;
}

@media only screen and (max-width: 768px) {
  .navbar__items,
  .navbar {
    flex-direction: column;
  }

  .navbar__items {
    display: none;
  }

  .navbar__burguer-menu {
    display: flex;
  }
}
</style>
