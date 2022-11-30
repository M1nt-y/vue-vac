<template>
  <div>
    <head-title>Use our free calculator!</head-title>
    <the-calculator :config="calculator"/>
  </div>
</template>

<script>
import TheCalculator from "@/components/TheCalculator";
import HeadTitle from "@/components/HeadTitle";
export default {
  name: "CalculatorPage",
  components: {HeadTitle, TheCalculator},
  data() {
    return {
      calculator: {
        hasDescription: true,
        isFixed: false
      }
    }
  }
}
</script>

<style scoped>


</style>