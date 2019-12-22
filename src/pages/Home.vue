<template>
  <div id="home">
    <section id="initial">
      <div class="home__content">
        <div class="title">Katieli B. Dieter</div>
        <div class="subtitle">Software Developer</div>
      </div>
    </section>
    <section id="about-me">about me</section>
    <section id="projects">projects grid</section>
    <section id="contacts">contact me</section>
  </div>
</template>
<script>
</script>
<style scoped>
section {
  height: 100vh;
  padding-top: 50px;
}
.home__content {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  height: 90%;
  padding: 2rem;
}
.title {
  font-size: 30px;
  font-weight: bold;
}
.subtitle {
  font-size: 50px;
  font-weight: bold;
}
</style>
