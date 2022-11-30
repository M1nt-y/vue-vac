<template>
  <header class="header" :class="{glass: scrollPosition > 15}">
    <div class="container">
      <div class="header__logo">
        <router-link to="/">
          <div class="logo">
            <img src="@/assets/logo-blue.png" alt="">
            <p>VAC</p>
          </div>
        </router-link>
        <h2 class="inventory-title" v-if="$route.name === 'Inventory'">Inventory</h2>
      </div>
      <div class="header__content">
        <router-link to="/catalog" v-if="$route.name !== 'Inventory'" >
          <base-button :btnContent="btnInventory" class="display" />
        </router-link>
        <router-link :to="`/request/${quizId}`" v-if="$route.name !== 'Quiz'" >
          <base-button v-bind="{ ...isBlue && { solidBlueBtn } }" v-if="$route.name !== 'Car'" />
          <base-button v-bind="{ ...isBlue && { solidBlueBtn } }" v-else :btnContent="btnApply" />
        </router-link>
      </div>
      <div class="burger-wrapper" v-if="!isContact">
        <slot></slot>
      </div>
    </div>
    <nav class="navbar" @click.stop>
      <div class="navbar__links" v-if="!isContact">
        <router-link to="/catalog" class="display">Inventory</router-link>
        <p class="contact" @click="toggleContact">Contact us</p>
        <router-link to="/about">About VAC</router-link>
        <router-link to="/loan">Loan rates</router-link>
        <router-link to="/video">Video</router-link>
        <router-link to="/blog">Blog</router-link>
        <router-link to="/calculate">Calculate</router-link>
      </div>
      <div class="navbar__contact" v-if="isContact">
        <div class="contact-close" @click="toggleContact"><img src="@/assets/icons/Close.svg" alt=""></div>
        <div class="contact-success" v-if="isValid">
          <img src="@/assets/images/Success.png" alt="">
          <h3 class="contact-title" v-if="isValid">Application Successful!</h3>
          <p class="contact-text" v-if="isValid">Our manager will contact you in the nearest time.</p>
        </div>
        <h3 class="contact-title" v-if="!isValid">We can't wait to hear from you!</h3>
        <div class="contact-inputs" v-if="!isValid">
          <the-input v-if="this.$route.name === 'Car'"
                     :disabledValue="carName"
          />
          <the-input :form="form"
                     :isName="isName"
                     @onTyping="fillName"
                     :class="{'error':isError.nameError}"
          />
          <p class="error-text" v-if="isError.nameError">Error</p>
          <the-input :form="form"
                     :isPhone="isPhone"
                     @onTyping="fillPhone"
                     :class="{'error':isError.phoneError}"
          />
          <p class="error-text" v-if="isError.phoneError">Error</p>
          <the-input :form="form"
                     :isEmail="isEmail"
                     @onTyping="fillEmail"
                     :class="{'error':isError.emailError}"
          />
          <p class="error-text" v-if="isError.emailError">Error</p>
        </div>
        <base-button v-bind="{ ...isBlue && { solidBlueBtn } }" @click="submitData" v-if="!isValid" />
      </div>
      <div class="navbar__content-bot" v-if="!isValid">
        <p class="contact-text" v-if="isContact">You can contact us yourself</p>
        <div class="social-icons">
          <div class="navbar__icon">
            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="30" height="30" rx="2" fill="#7481FF"/>
              <path d="M14.8575 10.6956C12.5995 10.6956 10.7285 12.5343 10.7285 14.8246C10.7285 17.1149 12.5672 18.9536 14.8575 18.9536C17.1479 18.9536 18.9866 17.0827 18.9866 14.8246C18.9866 12.5665 17.1156 10.6956 14.8575 10.6956ZM14.8575 17.4697C13.4059 17.4697 12.2124 16.2762 12.2124 14.8246C12.2124 13.373 13.4059 12.1794 14.8575 12.1794C16.3092 12.1794 17.5027 13.373 17.5027 14.8246C17.5027 16.2762 16.3092 17.4697 14.8575 17.4697Z" fill="white"/>
              <path d="M19.1503 11.5343C19.667 11.5343 20.0858 11.1155 20.0858 10.5988C20.0858 10.0822 19.667 9.66333 19.1503 9.66333C18.6337 9.66333 18.2148 10.0822 18.2148 10.5988C18.2148 11.1155 18.6337 11.5343 19.1503 11.5343Z" fill="white"/>
              <path d="M21.5671 8.17976C20.7284 7.30879 19.5348 6.85718 18.18 6.85718H11.5348C8.72839 6.85718 6.85742 8.72815 6.85742 11.5346V18.1475C6.85742 19.5346 7.30903 20.7281 8.21226 21.5991C9.08323 22.4378 10.2445 22.8572 11.5671 22.8572H18.1477C19.5348 22.8572 20.6961 22.4056 21.5348 21.5991C22.4058 20.7604 22.8574 19.5669 22.8574 18.1798V11.5346C22.8574 10.1798 22.4058 9.01847 21.5671 8.17976ZM21.4381 18.1798C21.4381 19.1798 21.0832 19.9862 20.5026 20.5346C19.9219 21.083 19.1155 21.3733 18.1477 21.3733H11.5671C10.5994 21.3733 9.79291 21.083 9.21226 20.5346C8.63162 19.954 8.34129 19.1475 8.34129 18.1475V11.5346C8.34129 10.5669 8.63162 9.7604 9.21226 9.17976C9.76065 8.63137 10.5994 8.34105 11.5671 8.34105H18.2123C19.18 8.34105 19.9865 8.63137 20.5671 9.21202C21.1155 9.79266 21.4381 10.5991 21.4381 11.5346V18.1798Z" fill="white"/>
            </svg>
          </div>
          <div class="navbar__icon">
            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="30" height="30" rx="2" fill="#7481FF"/>
              <path d="M17.9555 22.4946V15.6081H20.2855L20.868 12.7387H17.9555V11.5909C17.9555 10.4431 18.5391 9.86927 19.703 9.86927H20.868V6.99988C20.2855 6.99988 19.5632 6.99988 18.538 6.99988C16.3973 6.99988 15.0429 8.65322 15.0429 11.017V12.7387H12.7129V15.6081H15.0429V22.4946H17.9555Z" fill="white"/>
            </svg>
          </div>
          <div class="navbar__icon">
            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="30" height="30" rx="2" fill="#7481FF"/>
              <path d="M23.3847 11.2774C23.1902 10.5544 22.6203 9.98457 21.8974 9.7899C20.5769 9.42859 15.2947 9.42859 15.2947 9.42859C15.2947 9.42859 10.0127 9.42859 8.69221 9.7762C7.98328 9.97066 7.39939 10.5545 7.20493 11.2774C6.85742 12.5978 6.85742 15.3362 6.85742 15.3362C6.85742 15.3362 6.85742 18.0883 7.20493 19.395C7.3996 20.1178 7.96938 20.6877 8.69231 20.8823C10.0266 21.2438 15.2949 21.2438 15.2949 21.2438C15.2949 21.2438 20.5769 21.2438 21.8974 20.8961C22.6204 20.7016 23.1902 20.1317 23.3849 19.4089C23.7323 18.0883 23.7323 15.3501 23.7323 15.3501C23.7323 15.3501 23.7462 12.5978 23.3847 11.2774ZM13.613 17.866V12.8064L18.0054 15.3362L13.613 17.866Z" fill="white"/>
            </svg>
          </div>
          <div class="navbar__icon" v-if="isContact">
            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="30" height="30" rx="2" fill="#7481FF"/>
              <path d="M8 12.7143L14.4778 16.6803C14.7983 16.8765 15.2017 16.8765 15.5222 16.6803L22 12.7143M8 12.7143V21C8 21.5523 8.44772 22 9 22H21C21.5523 22 22 21.5523 22 21V12.7143M8 12.7143L14.4414 8.3762C14.7791 8.14878 15.2209 8.14878 15.5586 8.3762L22 12.7143" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: "TheHeader",
  data() {
    return {
      solidBlueBtn: {
        btnColor: '#FFFFFF',
        btnBackground: '#7481FF',
        btnBorder: 'transparent',
        hoverBorder: 'transparent',
        hoverColor: '#FFFFFF',
        hoverBackground: '#6270FF'
      },
      isBlue: true,
      isCar: false,
      btnInventory: 'Inventory',
      btnApply: 'Apply for this vehicle',
      btnContact: 'Contact me',
      scrollPosition: null,
      isName: true,
      isPhone: true,
      isEmail: true,
      isSearch: true,
      toggle: false,
      form: {
        name: '',
        phone: '',
        email: '',
      },
      emailRegExp : /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+.([a-zA-Z]+)*$/,
      lettersRegExp: /^[A-Za-z]+$/,
      isValid: false,
      isError: {
        nameError: false,
        phoneError: false,
        emailError: false
      },
      error: [],
      hideBtn: false
    }
  },
  props: {
    isContact: Boolean,
    isSuccess: Boolean,
    quizId: {
      type: String || Number,
      default: 'default'
    },
    carName: String,
  },
  methods: {
    updateScroll() {
      this.scrollPosition = window.scrollY
    },
    toggleContact() {
      this.isValid = false;
      this.toggle = !this.toggle
      this.$emit('toggleContact', this.toggle);
    },
    fillName(input) {
      this.form.name = input;
    },
    fillPhone(input) {
      this.form.phone = input;
    },
    fillEmail(input) {
      this.form.email = input;
    },
    submitData() {
      this.error = [];
      for (const item in this.form) {
        if (item === 'name') {
          if (this.form[item].length < 1 || !this.lettersRegExp.test(this.form[item])) {
            this.error.push(item);
            this.isValid = false;
            this.isError.nameError = true;
          }
          else {
            this.isError.nameError = false;
          }
        }
        else if (item === 'phone') {
          if (this.form[item].length < 7 || this.form[item].length > 15 || this.lettersRegExp.test(this.form[item])) {
            this.error.push(item);
            this.isValid = false;
            this.isError.phoneError = true;
          }
          else {
            this.isError.phoneError = false;
          }
        }
        else if (item === 'email') {
          if (this.form[item].length < 10 || !this.emailRegExp.test(this.form[item])) {
            this.error.push(item);
            this.isValid = false;
            this.isError.emailError = true;
          }
          else {
            this.isError.emailError = false;
          }
        }
      }
      if (this.error.length===0) {
        this.form.name = '';
        this.form.phone = '';
        this.form.email = '';
        this.isValid = true;
        this.$emit('onSuccess', this.isValid);
      }
    }
  },
  mounted() {
    window.addEventListener('scroll', this.updateScroll);
  },
  watch: {
    isContact() {
      this.toggle = this.isContact;
    },
    isSuccess() {
      this.isValid = this.isSuccess;
    },
  }
}
</script>

<style scoped>
.header {
  z-index: 11;
  width: 100%;
  position: fixed;
  top: 0;
}
.header .container {
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 17px 0;
}
.header__logo {
  display: flex;
  align-items: center;
  gap: 40px;
}
.logo {
  color: #7380FF;
}
.inventory-title {
  font-weight: 700;
  font-size: 25px;
  line-height: 35px;
  letter-spacing: 0.02em;
  color: #41456B;
}
.header__content {
  display: flex;
  align-items: center;
  gap: 20px;
  margin-right: 80px;
}
.burger-wrapper {
  z-index: 2;
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
}
.navbar {
  position: fixed;
  top: 0;
  right: -180px;
  height: 100vh;
  background: #FFFFFF;
  width: 0;
  overflow: hidden;
  transition: width 0.4s;
  padding: 80px 120px 80px 60px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 20px;
}
.navbar__links {
  display: flex;
  flex-direction: column;
  gap: 20px;
  font-weight: 700;
  font-size: 25px;
  line-height: 140%;
  letter-spacing: 0.02em;
  color: #41456B;
  margin-top: 55px;
}
.contact {
  cursor: pointer;
}
.navbar__contact {
  position: relative;
}
.contact-close {
  cursor: pointer;
  position: absolute;
  top: -54px;
  left: 0;
}
.navbar__contact .button {
  width: 100%;
}
.contact-title {
  font-weight: 700;
  font-size: 30px;
  line-height: 42px;
  color: #41456B;
  margin-bottom: 60px;
}
.contact-inputs {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 40px;
}
.contact-text {
  font-weight: 600;
  font-size: 20px;
  line-height: 25px;
  color: #41456B;
  margin-bottom: 20px;
}

.error {
  border: 1px solid #F54E4E;
}
.error-text {
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  color: #F54E4E;
}

.contact-success {
  margin-top: 60px;
}
.contact-success .contact-title {
  margin-bottom: 5px;
}
.contact-success .contact-text {
  font-weight: 400;
  font-size: 16px;
  line-height: 29px;
  letter-spacing: 0.02em;
  color: #606276;
  max-width: 229px;
}
.social-icons {
  margin-bottom: 25px;
}
.navbar__icon {
  cursor: pointer;
}
.navbar__icon:hover rect{
  fill: #6270FF;
  transition: all 0.3s ease-in;
}
a:any-link {
  color: #41456B;
}
a:-webkit-any-link {
  color: #41456B;
}
.active .navbar {
  box-shadow: 0 0 25px rgba(0, 0, 0, 0.12);
  overflow-y: scroll;
  right: 0;
  width: 40%;
}
.glass {
  background: rgba(255, 255, 255, 0.8);
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
}
.header__content .display {
  display: block;
}
.navbar .display {
  display: none;
}
@media screen and (max-width: 1200px) {
  .active .navbar {
    width: 65%;
  }
}
@media screen and (max-width: 768px) {
  .active .navbar {
    padding-right: 60px;
  }
}
@media screen and (max-width: 680px) {
  .active .navbar {
    padding-right: 20px;
    padding-left: 20px;
    width: 100%;
  }
  .header__content .display {
    display: none;
  }
  .navbar .display {
    display: block;
  }
  .inventory-title {
    display: none;
  }
}
@media screen and (max-width: 425px) {
  .header__content {
    margin-right: 50px;
  }
}
</style>