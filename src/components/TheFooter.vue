<template>
  <footer class="footer">
    <div class="container">
      <router-link to="/">
        <div class="logo">
          <img src="@/assets/logo-white.png" alt="">
          <p>VAC</p>
        </div>
      </router-link>
      <div class="footer__links">
        <router-link to="/terms">Terms</router-link>
        <router-link to="/privacy">Privacy</router-link>
      </div>
      <div class="social-icons">
        <div class="footer__icon">
          <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="30" height="30" rx="2" fill="#FFFFFF"/>
            <path d="M14.8575 10.6956C12.5995 10.6956 10.7285 12.5343 10.7285 14.8246C10.7285 17.1149 12.5672 18.9536 14.8575 18.9536C17.1479 18.9536 18.9866 17.0827 18.9866 14.8246C18.9866 12.5665 17.1156 10.6956 14.8575 10.6956ZM14.8575 17.4697C13.4059 17.4697 12.2124 16.2762 12.2124 14.8246C12.2124 13.373 13.4059 12.1794 14.8575 12.1794C16.3092 12.1794 17.5027 13.373 17.5027 14.8246C17.5027 16.2762 16.3092 17.4697 14.8575 17.4697Z" fill="#7481FF"/>
            <path d="M19.1503 11.5343C19.667 11.5343 20.0858 11.1155 20.0858 10.5988C20.0858 10.0822 19.667 9.66333 19.1503 9.66333C18.6337 9.66333 18.2148 10.0822 18.2148 10.5988C18.2148 11.1155 18.6337 11.5343 19.1503 11.5343Z" fill="#7481FF"/>
            <path d="M21.5671 8.17976C20.7284 7.30879 19.5348 6.85718 18.18 6.85718H11.5348C8.72839 6.85718 6.85742 8.72815 6.85742 11.5346V18.1475C6.85742 19.5346 7.30903 20.7281 8.21226 21.5991C9.08323 22.4378 10.2445 22.8572 11.5671 22.8572H18.1477C19.5348 22.8572 20.6961 22.4056 21.5348 21.5991C22.4058 20.7604 22.8574 19.5669 22.8574 18.1798V11.5346C22.8574 10.1798 22.4058 9.01847 21.5671 8.17976ZM21.4381 18.1798C21.4381 19.1798 21.0832 19.9862 20.5026 20.5346C19.9219 21.083 19.1155 21.3733 18.1477 21.3733H11.5671C10.5994 21.3733 9.79291 21.083 9.21226 20.5346C8.63162 19.954 8.34129 19.1475 8.34129 18.1475V11.5346C8.34129 10.5669 8.63162 9.7604 9.21226 9.17976C9.76065 8.63137 10.5994 8.34105 11.5671 8.34105H18.2123C19.18 8.34105 19.9865 8.63137 20.5671 9.21202C21.1155 9.79266 21.4381 10.5991 21.4381 11.5346V18.1798Z" fill="#7481FF"/>
          </svg>
        </div>
        <div class="footer__icon">
          <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="30" height="30" rx="2" fill="#FFFFFF"/>
            <path d="M17.9555 22.4946V15.6081H20.2855L20.868 12.7387H17.9555V11.5909C17.9555 10.4431 18.5391 9.86927 19.703 9.86927H20.868V6.99988C20.2855 6.99988 19.5632 6.99988 18.538 6.99988C16.3973 6.99988 15.0429 8.65322 15.0429 11.017V12.7387H12.7129V15.6081H15.0429V22.4946H17.9555Z" fill="#7481FF"/>
          </svg>
        </div>
        <div class="footer__icon">
          <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="30" height="30" rx="2" fill="#FFFFFF"/>
            <path d="M23.3847 11.2774C23.1902 10.5544 22.6203 9.98457 21.8974 9.7899C20.5769 9.42859 15.2947 9.42859 15.2947 9.42859C15.2947 9.42859 10.0127 9.42859 8.69221 9.7762C7.98328 9.97066 7.39939 10.5545 7.20493 11.2774C6.85742 12.5978 6.85742 15.3362 6.85742 15.3362C6.85742 15.3362 6.85742 18.0883 7.20493 19.395C7.3996 20.1178 7.96938 20.6877 8.69231 20.8823C10.0266 21.2438 15.2949 21.2438 15.2949 21.2438C15.2949 21.2438 20.5769 21.2438 21.8974 20.8961C22.6204 20.7016 23.1902 20.1317 23.3849 19.4089C23.7323 18.0883 23.7323 15.3501 23.7323 15.3501C23.7323 15.3501 23.7462 12.5978 23.3847 11.2774ZM13.613 17.866V12.8064L18.0054 15.3362L13.613 17.866Z" fill="#7481FF"/>
          </svg>
        </div>
      </div>
      <div class="creator">
        <p>Created by</p>
        <img src="@/assets/icons/creator.png" alt="">
      </div>
      <p class="copyright">©Copyright, 2020. Vehicle Approval</p>
    </div>
  </footer>
</template>

<script>
export default {
  name: "TheFooter"
}
</script>

<style scoped>
.footer {
  width: 100%;
  /*padding: 40px 0 60px;*/
  padding: 40px 0;
  font-weight: 600;
  font-size: 16px;
  line-height: 14px;
  color: #FFFFFF;
  background: #7481FF;
}

/* design version...*/
/*.logo, .footer__links, .social-icons, .creator, .copyright {*/
/*  margin: 20px 0;*/
/*}*/
.footer .container {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 40px;
}
.footer__links {
  /*margin-left: 7.3%;*/
  /*margin-right: 11%;*/
  display: flex;
  gap: 20px;
}
a:any-link {
  color: #FFFFFF;
}
a:-webkit-any-link {
  color: #FFFFFF;
}
.footer__icon {
  cursor: pointer;
}
.creator {
  /*margin-left: 15.9%;*/
  /*margin-right: 6.6%;*/
  display: flex;
  align-items: center;
  gap: 8px;
}
.copyright {
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
}

</style>