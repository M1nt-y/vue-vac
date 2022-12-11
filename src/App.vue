<template>
  <div class="wrapper" :class="{'active': isActive, 'has-scroll': hasScroll}" @click="isActive=false">
    <the-preloader :loaded="isLoaded" />
    <the-header
        :isContact="isContact"
        :isSuccess="isSuccess"
        :quizId="carId"
        :carName="carName"
        @toggleContact="toggleContact"
        @onSuccess="toggleSuccess"
        v-if="$route.name!=='Not Found'"
    >
      <div class="burger" @click.stop="isActive = !isActive">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </the-header>
    <router-view class="main"
                 @getId="id => carId = id"
                 @request="openContact"
    />
    <the-footer v-if="$route.name!=='Not Found' && $route.name!=='Quiz'" />
  </div>
</template>

<script>

import TheHeader from "@/components/TheHeader";
import TheFooter from "@/components/TheFooter";
import ThePreloader from "@/components/ThePreloader";

export default {
  name: 'App',
  components: {ThePreloader, TheHeader, TheFooter},
  data() {
    return {
      isLoaded: false,
      isActive: false,
      isContact: false,
      isSuccess: false,
      hasScroll: false,
      carId: 'default',
      carName: 'Name of selected vehicle'
    }
  },
  methods: {
    toggleContact(toggle) {
      this.isContact = toggle;
    },
    toggleSuccess(success) {
      this.isSuccess = success;
    },
    openContact(car) {
      this.isActive = true;
      this.isContact = true;
      this.carName = car;
    }
  },
  mounted() {
    document.onreadystatechange = () => {
      if (document.readyState === "complete") {
        this.isLoaded = true;
      }
    }
    window.onresize = () => {
      this.windowWidth = window.innerWidth
    }
  },
  watch: {
    $route() {
      this.isActive = false;
      if (this.$route.name !== 'Car' && this.$route.name !== 'Quiz') {
        this.carId = 'default';
      }
    },
    isActive() {
      if (!this.isActive) {
        this.isContact = false;
        this.isSuccess = false;
        document.documentElement.style.overflowY = 'auto'
      }
      else {
        document.documentElement.style.overflowY = 'hidden'
      }
    },
  }
}
</script>

<style>
@import url(@/assets/fonts/fonts.css);
html {
  overflow-x: hidden;
  margin-right: calc(-1 * (100vw - 100%));
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  text-decoration: none;
}
.container {
  max-width: 1200px;
  margin: 0 auto;
}

.section-title {
  font-weight: 700;
  font-size: 45px;
  line-height: 63px;
  color: #41456B;
}
.section-text {
  font-weight: 400;
  font-size: 16px;
  line-height: 29px;
  letter-spacing: 0.02em;
  color: #606276;
}

.logo {
  display: flex;
  gap: 5px;
  font-weight: 700;
  font-size: 28px;
  line-height: 30px;
  letter-spacing: 0.02em;
  color: #FFFFFF;
}

.burger {
  display: flex;
  align-items: flex-end;
  flex-direction: column;
  gap: 9px;
  width: 37px;
}
.active .burger span:nth-of-type(1) {
  transform-origin:bottom;
  transform:rotatez(45deg) translateX(8px) translateY(10px);
}
.active .burger span:nth-of-type(2) {
  width: 0;
}
.active .burger span:nth-of-type(3) {
  transform-origin:top;
  transform: rotatez(135deg) translateX(-8px) translateY(5px);
}
.burger span {
  transition: 0.4s ease;
  background: #41456B;
  border-radius: 7px;
  width: 100%;
  height: 4px;
}

.social-icons {
  display: flex;
  gap: 10px;
}

#app {
  height: 100vh;
  font-family: Gilroy, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.wrapper {
  min-height: 100%;
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
  margin-right: calc(-1 * (100vw - 100%));
}
.main {
  position: relative;
  overflow-x: hidden;
  margin-top: 80px;
  flex: 1 1 auto;
}
@media screen and (max-width: 1248px) {
  .container {
    margin: 0 24px;
  }
}

@media screen and (max-width: 680px) {
  .section-title {
    font-size: 30px;
    line-height: 42px;
  }
}
@media screen and (max-width: 564px) {
  .main {
    margin-top: 70px;
  }
}
@media screen and (max-width: 425px) {
  .container {
    margin: 0 20px;
  }
  .logo {
    gap: 4px;
    font-size: 20px;
    line-height: 22px;
  }
  .logo img {
    height: 22px;
  }
  .burger {
    gap: 8px;
    width: 30px;
  }
  .burger span {
    height: 3px;
  }
  .active .burger span:nth-of-type(1) {
    transform:rotatez(45deg) translateX(7px) translateY(7px);
  }
}

</style>
