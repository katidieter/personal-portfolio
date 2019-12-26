<template>
  <div class="experience-card">
    <h3>Latest experiences</h3>
    <div v-for="(experiencie, i) in experiencies" :key="i" class="experience__details">
      <h4>
        {{ experiencie.company }}
      </h4>
      <h5>
        {{ experiencie.role }}
      </h5>
      <span>
        {{ experiencie.period }}
      </span>
      <span>
        {{ experiencie.location }}
      </span>
    </div>
  </div>
</template>
<script>
export default {
  name: 'ExperienceCard',
  props: {
    experiencies: {
      type: Object,
    },
  },
};
</script>
<style scoped>
h3, h4, h5 {
  margin: unset;
}

.experience-card {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  border: 1px solid black;
  margin: 1rem;
  padding: 1rem;
  border-radius: 5px;
  width: 40%;
}
.experience__details {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 0.5rem;
}
span {
  font-size: 14px;
}
</style>
