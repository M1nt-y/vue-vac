<template>
  <div class="head">
    <div class="container">
      <h1 class="title"><slot></slot></h1>
    </div>
  </div>
</template>

<script>
export default {
  name: "HeadTitle"
}
</script>

<style scoped>
.head {
  position: relative;
  background: url("@/assets/images/head-bg.jpg");
  background-size: cover;
}
.head .container {
  padding: 40px 0;
}
.title {
  font-weight: 800;
  font-size: 60px;
  line-height: 65px;
  letter-spacing: 0.02em;
  color: #FFFFFF;
}
@media screen and (max-width: 425px) {
  .head .container {
    padding: 20px 0;
  }
  .title {
    font-size: 35px;
    line-height: 38px;
  }
}
</style>