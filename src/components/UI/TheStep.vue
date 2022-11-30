<template>
  <div class="step">
    <div class="step__number">{{id}}</div>
    <div class="step__content">
      <p class="step__content-title">{{title}}</p>
      <p class="step__content-body">{{body}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "TheStep",
  props: {
    id: {
      type: Number,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    body: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
.step {
  display: flex;
  align-items: center;
  gap: 20px;
  max-width: 545px;
}
.step__number {
  max-width: 75px;
  width: 100%;
  height: 67px;
  background: url("@/assets/images/step-bg.svg");
  font-weight: 700;
  font-size: 25px;
  line-height: 35px;
  letter-spacing: 0.02em;
  color: #41456B;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 10px;
}
.step__content {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.step__content-title {
  font-weight: 600;
  font-size: 20px;
  line-height: 25px;
  color: #41456B;
}
.step__content-body {
  font-weight: 400;
  font-size: 16px;
  line-height: 29px;
  letter-spacing: 0.02em;
  color: #606276;
}

@media screen and (max-width: 680px) {
  .step {
    max-width: unset;
    align-items: flex-start;
  }
  .step__number {
    max-width: 53px;
    height: 47px;
    background-size: cover;
    font-size: 20px;
    line-height: 28px;
    padding-top: 5px;
  }
}

</style>