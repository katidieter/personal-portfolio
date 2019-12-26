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
          <img src="../assets/kati.jpg">
        </div>
      </div>
    </section>
    <section id="about-me">
      <!-- <div>
        jobs timeline
      </div>
      <div>
        academic life
      </div>
      <div>
        courses
      </div>
      <div>
        volunteer projects
      </div> -->
    </section>
    <section id="projects">projects grid</section>
    <section id="contacts">contact me</section>
  </div>
</template>
<script>
import ProfessionalData from '../data/professional-data';

export default {
  computed: {
    professional() { return ProfessionalData; },
    skills() { return this.professional.skills; },
  },
};

</script>
<style scoped>
section {
  height: 100vh;
  padding-top: 15px;
}

.home__content {
  display: flex;
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
}
img {
  width: inherit;
  max-height: 90vh;
  object-fit: contain;
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
  border: 1px solid rgb(96, 142, 228);
}

.hard-border {
  border: 1px solid green;
}

@media only screen and (min-width: 768px) {
  .home__content {
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
    padding: 2rem;
  }
  section {
    padding-top: 55px;
  }
  .title {
    font-size: 30px;
  }
  .subtitle {
    font-size: 45px;
  }
}

#about-me {
  /* background-color: rgb(14, 0, 0); */
}

</style>
