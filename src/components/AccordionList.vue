<template>
  <div class="accordions">
    <div v-for="accordion in accordions" :key="accordion.id">
      <the-accordion v-bind="accordion" />
    </div>
  </div>
</template>

<script>
export default {
  name: "AccordionList",
  props: {
    accordions: {
      type: Array,
      required: true
    }
  },
}
</script>

<style scoped>
.accordions {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: 40px 0;
}
</style>