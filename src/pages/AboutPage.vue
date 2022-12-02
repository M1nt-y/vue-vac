<template>
  <div>
    <head-title>About VAC</head-title>
    <div class="about">
      <div class="about__section">
        <div class="container">
          <div class="about__section-card">
            <h2 class="section-title">Our mission</h2>
            <p class="section-text">Our mission at VAC is to help you find the perfect car at the perfect price and with the perfect auto loan. We make buying a car simple. You can complete the entire process from home—we’ll even deliver the car to you!</p>
            <router-link to="/request/default">
              <base-button v-bind="{ ...isBlue && { solidBlueBtn } }" />
            </router-link>
          </div>
          <img src="@/assets/images/Kia.png" alt="">
        </div>
      </div>
      <div class="about__section about__section--center">
        <div class="container">
          <div class="steps__content">
            <h2 class="section-title">Get your dream car</h2>
            <p class="section-text">We founded VAC because we hated how complicated it was to buy a car. You only have so much free time in your life. You don’t want to waste it going to different car dealerships every weekend for weeks and months trying to track down the right car.</p>
            <p class="section-text">We also hated how choosing a car and figuring out the financing for the vehicle were treated as totally separate processes! Instead of dealing with a salesperson, then being handed off to a closer, and then shuffled over to a finance manager, we wanted to create a way for people to buy a car and only deal with a single person for the entire process.</p>
          </div>
          <step-list :stepList="steps" />
        </div>
      </div>
      <div class="about__section">
        <div class="container">
          <img src="@/assets/images/Nissan.png" alt="">
          <div class="about__section-content">
            <h2 class="section-title">VAC is convenience and transparency</h2>
            <p class="section-text">We want to make simple for you to find the car you want. We also want to make sure you are 100% comfortable with the terms of the conditions of your auto loan.</p>
            <p class="section-text">Buying a car has never been easier. You pick out the car you want on our website. You work with one of our Qualified Agents to secure financing. Then we bring the car to you—all before you sign anything. You test drive the vehicle, and if you like it, you sign the loan documents right there and the car is yours.</p>
          </div>
        </div>
      </div>
      <div class="about__section about__section--center">
        <div class="container">
          <div class="about__section-content">
            <h2 class="section-title">Get a car at the best prices and conditions</h2>
            <p class="section-text">Not only is buying a car with VAC easy, it’s also the best way to save money. We have partnerships with Canada’s largest lenders. That allows us to help you secure loans at the best interest rates available.</p>
            <p class="section-text">Because convenience and transparency are our founding principles, we take the time to answer all of your questions about the vehicle and the auto loan. We will send you pictures and videos of any part of the car you like before you request a test drive.</p>
          </div>
          <div class="about__section-content">
            <h3 class="section-subtitle">We think that VAC is the best way to buy a car in Canada. Try it for yourself and see how much time and money you can save.</h3>
            <p class="section-text">There are never any hidden fees or costs. We never ask you to sign anything until we have explained it clearly and you have had a chance to read it.</p>
            <router-link to="/request/default">
              <base-button v-bind="{ ...isBlue && { solidBlueBtn } }" />
            </router-link>
          </div>
        </div>
      </div>
      <div class="about__section about__section--center">
        <div class="container">
          <div class="about__section-card">
            <h3 class="section-subtitle">Contact us today and speak with one of our qualified agents</h3>
            <base-button v-bind="{ ...isBlue && { solidBlueBtn } }" :btnContent="contactBtn" @click="openContact" @click.stop />
          </div>
          <div class="about__section-content">
            <h2 class="section-title">Our qualified agents</h2>
            <p class="section-text">The true secret to success of VAC isn’t our streamlined purchasing and financing processes. The real reason VAC is the easiest and best way to buy a car in Canada is because of our outstanding Qualified Agents.</p>
            <p class="section-text">Our team provides you with the best customer experience in the automotive industry. You work with a dedicated representative throughout the process. They are able to answer any questions you have about any of our vehicles or the financing. Are you interested in seeing pictures or videos of a car? Your qualified agent will send them to you.</p>
          </div>
        </div>
      </div>
      <div class="reviews">
        <div class="container">
          <h2 class="section-title">What our client say about us!</h2>
          <div class="reviews-swiper">
            <swiper
                :modules="modules"
                :space-between="10"
                :slides-per-view="1"
                navigation
            >
              <swiper-slide>
                <div class="review">
                  <div class="review__img">
                    <img src="@/assets/images/review.jpg" alt="">
                  </div>
                  <div class="review__content">
                    <p class="review__content-name">Laura Chaisson</p>
                    <p class="review__content-comment">In irure et ipsum eiusmod adipisicing id elit cillum proident. Adipisicing ullamco nisi veniam occaecat id excepteur ad non. Sunt occaecat elit ullamco commodo exercitation. Anim mollit irure Lorem proident veniam excepteur non irure Lorem. Lorem esse sint in nisi id esse.</p>
                  </div>
                </div>
              </swiper-slide>
              <swiper-slide>
                <div class="review">
                  <div class="review__img">
                    <img src="@/assets/images/review.jpg" alt="">
                  </div>
                  <div class="review__content">
                    <p class="review__content-name">Laura Chaisson</p>
                    <p class="review__content-comment">In irure et ipsum eiusmod adipisicing id elit cillum proident. Adipisicing ullamco nisi veniam occaecat id excepteur ad non. Sunt occaecat elit ullamco commodo exercitation. Anim mollit irure Lorem proident veniam excepteur non irure Lorem. Lorem esse sint in nisi id esse.</p>
                  </div>
                </div>
              </swiper-slide>
              <swiper-slide>
                <div class="review">
                  <div class="review__img">
                    <img src="@/assets/images/review.jpg" alt="">
                  </div>
                  <div class="review__content">
                    <p class="review__content-name">Laura Chaisson</p>
                    <p class="review__content-comment">In irure et ipsum eiusmod adipisicing id elit cillum proident. Adipisicing ullamco nisi veniam occaecat id excepteur ad non. Sunt occaecat elit ullamco commodo exercitation. Anim mollit irure Lorem proident veniam excepteur non irure Lorem. Lorem esse sint in nisi id esse.</p>
                  </div>
                </div>
              </swiper-slide>
            </swiper>
          </div>
        </div>
      </div>
      <div class="about__section about__section--center">
        <div class="container">
          <div class="about__section-content">
            <h2 class="section-title">We're dynamic team of creative people with innovative mind</h2>
            <p class="section-text">
              <span>Our History<br/></span>
              We founded VAC because we hated how complicated it was to buy a car. You only have so much free time in your life. You don’t want to waste it going to different car dealerships every weekend for weeks and months trying to track down the right car.
            </p>
            <p class="section-text">
              <span>Our Goal<br/></span>
              Buying a car has never been easier. You pick out the car you want on our website. You work with one of our Qualified Agents to secure financing. Then we bring the car to you—all before you sign anything. You test drive the vehicle, and if you like it, you sign the loan documents right there and the car is yours.
            </p>
          </div>
          <img src="@/assets/images/about-1.jpg" alt="">
        </div>
      </div>
      <div class="about__section about__section--center about__section--last">
        <div class="container">
          <img src="@/assets/images/about-2.jpg" alt="">
          <div class="about__section-content">
            <h2 class="section-title">Main features</h2>
            <p class="section-text">We are your one stop shop. We believe that vehicle shopping should be a fun and painless process and with years of experience, we make it just that.</p>
            <div class="about__section-cards">
              <stat-card v-for="stat in stats" :key="stat" v-bind="stat" />
            </div>
          </div>
        </div>
      </div>
      <the-calculator :config="calculator" />
    </div>
  </div>
</template>

<script>
import HeadTitle from "@/components/HeadTitle";
import TheCalculator from "@/components/TheCalculator";
import StepList from "@/components/StepList";

import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/navigation';

export default {
  name: "AboutPage",
  components: {
    HeadTitle,
    TheCalculator,
    StepList,
    Swiper,
    SwiperSlide,},
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
      contactBtn: 'Contact us now',
      calculator: {
        hasDescription: true,
        isFixed: false
      },
      steps: [
        {id: 1, title: 'Quickly', body: 'You do not spend a lot of your time going to car dealerships'},
        {id: 2, title: 'Simply', body: 'You can order your dream car just by talking to our specialist by phone'},
        {id: 3, title: 'Conveniently', body: 'We will deliver the car directly to the doorstep of your home or office'}
      ],
      stats: [
        {title: '7,988+', text: 'Sold Cars'},
        {title: '123', text: 'Working experts'},
        {title: '1560+', text: 'Happy clients'},
      ],
    }
  },
  setup() {
    return {
      modules: [Navigation],
    };
  },
  methods: {
    openContact() {
      this.$emit('request', this.carName);
    }
  }
}
</script>

<style scoped>
.about {
  padding-top: 40px;
  display: flex;
  flex-direction: column;
  gap: 220px;
}

.about__section .container {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  gap: 60px;
}
.about__section--center .container {
  align-items: center;
}
.about__section-content {
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 50%;
}
.about__section-card {
  width: 49%;
  padding: 60px;
  background: #FFFFFF;
  box-shadow: 0 20px 25px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
}
.about__section-card .section-text {
  margin-top: 20px;
}
.about__section-card .button {
  margin-top: 40px;
}
.about__section img{
  width: 47%;
}

.section-text span {
  font-weight: 600;
  font-size: 20px;
  line-height: 25px;
  color: #41456B;
}
.section-subtitle {
  font-weight: 700;
  font-size: 25px;
  line-height: 35px;
  letter-spacing: 0.02em;
  color: #41456B;
}

.about__section-cards {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}

.steps__content {
  width: 49%;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.reviews-swiper {
  margin-top: 60px;
  box-shadow: 0 20px 25px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
}
.review {
  display: flex;
  width: 100%;
}
.review__img {
  display: flex;
  align-items: center;
  justify-content: center;
}
.review__img img {
  width: 100%;
}
.review__content {
  width: 75%;
  display: flex;
  flex-direction: column;
  padding: 60px 40px;
  gap: 10px;
}
.review__content-name {
  font-weight: 400;
  font-size: 16px;
  line-height: 29px;
  letter-spacing: 0.02em;
  color: #606276;
}
.review__content-comment {
  font-weight: 600;
  font-size: 20px;
  line-height: 25px;
  color: #41456B;
}


@media screen and (max-width: 1024px) {
  .about {
    gap: 160px;
  }
  .about__section {
    padding: 0 60px;
  }
  .about__section .container {
    flex-direction: column;
    align-items: center;
    gap: 40px;
  }
  .about__section--last .container {
    flex-direction: column-reverse;
  }
  .about__section-card {
    padding: 40px;
  }
  .about__section img,
  .about__section-content,
  .about__section-card,
  .steps, .steps__content {
    width: 100%;
  }
  .review__content {
    padding: 40px 60px 40px 40px;
  }
}
@media screen and (max-width: 680px) {
  .about {
    gap: 80px;
    padding-top: 30px;
  }
  .about__section {
    padding: 0;
  }
  .review {
    flex-direction: column;
  }
  .review__content {
    width: 100%;
    padding: 20px;
  }
  .review__content-comment {
    font-size: 18px;
    line-height: 25px;
  }
}

</style>

<style>
.steps-wrapper .step {
  max-width: unset;
}
.button {
  max-width: 200px;
}

.swiper-wrapper {
  align-items: center;
}
.swiper-slide img{
  max-width: 600px;
  width: 80%;
}
.swiper-slide-active {
  display: flex;
  justify-content: center;
  align-items: center;
}
.swiper-button-next, .swiper-button-prev {
  margin-top: 0;
  transform: translateY(-50%);
  width: 53px;
  height: 53px;
  border-radius: 50%;
  background: #FFFFFF;
  transition: opacity 0.4s ease-in;
  opacity: 0.8;
}
.swiper-button-next:hover, .swiper-button-prev:hover { opacity: 1; }
.swiper-button-prev { left: 0; }
.swiper-button-next { right: 0; }
.swiper-button-next:after, .swiper-button-prev:after {
  position: absolute;
  font-size: 22px;
}
.swiper-button-next:after {
  left: 55%;
  transform: translateX(-55%);
}
.swiper-button-prev:after {
  left: 45%;
  transform: translateX(-45%);
}
.reviews-swiper .swiper-button-next,
.reviews-swiper .swiper-button-prev {
  background: #7481FF;
  color: #FFFFFF;
}


@media screen and (max-width: 680px) {
  .swiper-button-next, .swiper-button-prev {
    width: 35px;
    height: 35px;
  }
  .swiper-button-next:after, .swiper-button-prev:after {
    position: absolute;
    font-size: 15px;
  }

  .reviews-swiper .swiper-button-next,
  .reviews-swiper .swiper-button-prev {
    top: 30%;
    transform: translateY(-30%);
  }
}

</style>