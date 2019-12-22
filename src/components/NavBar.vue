<template>
  <div class="navbar">
    <div class="navbar__link navbar__link-toggle" @click="toggleShow">
      <bars-icon />
    </div>
    <nav class="navbar__items navbar__items--left" :class="{ 'navbar__toggleShow': toggle }">
      <a :href="item.src" class="navbar__link" v-for="(item, i) in items" :key="i">
        {{ item.name }}
      </a>
    </nav>
  </div>
</template>

<script>
import BarsIcon from './atoms/BarsIcon.vue';

export default {
  name: 'NavBar',
  components: {
    BarsIcon,
  },
  props: {
    items: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      toggle: false,
    };
  },
  methods: {
    toggleShow() {
      this.toggle = !this.toggle;
    },
  },
};
</script>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  display: flex;
  width: 100%;
  padding: 30px;
  font-family: sans-serif;
  color: white;
}

.navbar__link {
  padding-right: 8px;
  color: #000;
  font-weight: 600;
  text-decoration-line: none;
}

.navbar__items {
  display: flex;
}

.navbar__items--left {
  margin-right: auto;
}

.navbar__link-toggle {
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

  .navbar__items--left {
    margin-left: 0;
    padding-left: 2rem;
  }

  .navbar__toggleShow {
    display: flex;
    align-items: center;
  }

  .navbar__link-toggle {
    align-self: flex-end;
    display: initial;
    position: absolute;
    cursor: pointer;
  }
}
</style>
