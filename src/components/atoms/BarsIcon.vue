<template>
  <div id="bars-icon">
    <div class="bar"/>
    <div class="bar"/>
    <div class="bar"/>
  </div>
</template>
<script>
export default {
  name: 'BarsIcon',
  data() {
    return {
      clicked: true,
    };
  },
};
</script>

<style scoped>
#bars-icon {
  display: inline-block;
  cursor: pointer;
}

.bar {
  width: 35px;
  height: 4px;
  background-color: #fff;
  margin: 4px 0;
  transition: 0.4s;
}

</style>
