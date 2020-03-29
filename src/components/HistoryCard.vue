<template>
  <div class="history-card">
    <h3>{{ cardName }}</h3>
    <div v-for="(item, i) in items" :key="i" class="history__details">
      <h4>
        {{ item.title }}
      </h4>
      <h5>
        {{ item.subtitle }}
      </h5>
      <span>
        {{ item.period }}
      </span>
      <span>
        {{ item.location }}
      </span>
    </div>
  </div>
</template>
<script>
export default {
  name: 'HistoryCard',
  props: {
    cardName: {
      type: String,
    },
    items: {
      type: Object,
    },
  },
};
</script>
<style scoped>
h3, h4, h5 {
  margin: unset;
}

.history-card {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  border: 1px solid black;
  margin: 1rem;
  padding: 1rem;
  border-radius: 5px;
}
.history__details {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 0.5rem;
}
span {
  font-size: 14px;
}

@media only screen and (min-width: 768px) {
  .history-card {
    width: 50%;
  }
}
</style>
