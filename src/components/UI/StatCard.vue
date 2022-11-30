<template>
  <div class="stat-card">
    <h2 class="section-title">{{ title }}</h2>
    <p class="section-text">{{ text }}</p>
  </div>
</template>

<script>
export default {
  name: "StatCard",
  props: {
    title: {
      type: String,
      required: true
    },
    text: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
.stat-card{
  padding: 25px 35px 20px;
  box-shadow: 0 20px 25px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  max-width: 280px;
  width: 100%;
}
@media screen and (max-width: 762px) {
  .stat-card {
    max-width: 100%;
    padding: 20px 30px;
  }
}
</style>