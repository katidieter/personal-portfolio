<template>
  <div id="home-page">
    <section id="home">
      <div class="home__content">
        <div class="home__left">
          <div class="title">
            {{ professional.name }}
          </div>
          <div class="subtitle">
            {{ professional.role }}
          </div>
          <div class="home__tags">
            <span
              v-for="(skill, s) in skills" :key="s"
              :class="skill.kind === 'soft'? 'soft-border' : 'hard-border'"
            >
            {{ skill.name }}
            </span>
          </div>
        </div>
        <div class="home__right">
          <img src="../assets/kati.png">
        </div>
      </div>
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
import HistoryCard from '../components/HistoryCard.vue';

export default {
  components: {
    HistoryCard,
  },
  computed: {
    professional() { return ProfessionalData; },
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
.home-page {
  margin-top: 40px;
}

@media only screen and (min-width: 768px) {
  margin-top: 0;
  margin: 30px;
}

section {
  padding-top: 15px;
}
.home__content {
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 90%;
  padding: 1rem;
}
.home__left {
  display: flex;
  flex-direction: column;
  text-align: left;
  justify-content: center;
  width: 100%;
  height: 100%;
}
.home__right {
  width: 100%;
  img {
    border-radius: 100%;
    object-fit: cover;
    height: 300px;
    width: 300px;
  }

}
img {
  width: inherit;
  max-height: 90vh;
  object-fit: contain;
  border-radius: 5px;
}
.title,
.subtitle {
  font-weight: bold;
}
.title {
    font-size: 20px;
  }
  .subtitle {
    font-size: 30px;
    margin-bottom: 0.6rem;
  }
.home__tags {
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 0.5rem;
}
.soft-border,
.hard-border {
  border-radius: 5px;
  padding: 0.2rem;
  margin: 0.1rem;
  font-size: 0.8rem;
}
.soft-border {
  border: 1px solid #72C6B3;
}
.hard-border {
  border: 1px solid #FEAB5C;
}

@media only screen and (min-width: 768px) {
  .home__content {
    flex-direction: row;
    justify-content: center;
    padding: 2rem;
  }
  section {
    height: 100vh;
    padding-top: 55px;
  }
  .title {
    font-size: 30px;
  }
  .subtitle {
    font-size: 45px;
  }
}

.about-me__content {
  padding: 1rem;
}
.about-me__cards {
  display: flex;
  flex-direction: column;
}

@media only screen and (min-width: 768px) {
  .about-me__cards {
    flex-direction: row;
  }
}

</style>
