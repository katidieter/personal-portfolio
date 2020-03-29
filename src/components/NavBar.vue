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
    <nav class="navbar__items navbar__items--right">
      <a
        v-for="(socialMedia, i) in socialMedias" :key="i"
        :href="socialMedia.src"
        class="navbar__link"
        target="_blank"
      >
        <img
          :src="socialMedia.icon"
          :alt="socialMedia.name"
          class="social-media-icon"
        />
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
    socialMedias: {
      type: Array,
      default() { return []; },
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
  background-color: #fff;
}

@media only screen and (max-width: 768px) {
  .navbar {
    width: 80%;
    position: unset;
  }
}

@media only screen and (min-width: 768px) {
  .navbar {
    margin: 30px;
  }
}

.navbar__link {
  padding-right: 8px;
  color: #767A7D;
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

.navbar__items--right {
  margin-right: 100px;
}

.navbar__burguer-menu {
  display: none;
}

.social-media-icon {
  height: 35px;
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
