<template>
  <div>
    <div class="not-found">
      <img src="@/assets/images/404-icon.png" alt="">
      <h2 class="section-title">404 page</h2>
      <p class="section-text">Page not found or such pages do not exist.</p>
      <router-link to="/"><base-button v-bind="{ ...isBlue && { solidBlueBtn } }" :btnContent="btnHome" /></router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "NotFound",
  data() {
    return {
      btnHome: 'Go home',
      solidBlueBtn: {
        btnColor: '#FFFFFF',
        btnBackground: '#7481FF',
        btnBorder: 'transparent',
        hoverBorder: 'transparent',
        hoverColor: '#FFFFFF',
        hoverBackground: '#6270FF'
      },
      isBlue: true
    }
  }
}
</script>

<style scoped>
.main {
  margin-top: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.not-found {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  max-width: 60%;
  margin: 0 auto;
  padding-bottom: 60px;
}
.not-found img{
  margin-bottom: 20px;
}
.not-found .section-text {
  margin-bottom: 30px;
}
</style>