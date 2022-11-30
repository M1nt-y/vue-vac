<template>
  <div class="steps">
    <the-step v-for="step in stepList" :key="step.id" v-bind="step" />
  </div>
</template>

<script>
export default {
  name: "StepList",
  props: {
    stepList: {
      type: Array,
      required: true,
    }
  },
}
</script>

<style scoped>
.steps {
  display: flex;
  flex-direction: column;
  gap: 40px;
}
@media screen and (max-width: 680px) {
  .steps {
    gap: 20px;
  }
}
</style>