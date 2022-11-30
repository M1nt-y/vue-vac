<template>
  <div>
    <div class="home">
      <div class="home__head">
        <div class="home__head-top">
          <div class="container">
            <div class="head">
              <h1 class="head__title">The easiest way to buy a car in Canada</h1>
            </div>
            <div class="home__head-swiper">
              <swiper
                  :modules="modules"
                  :slides-per-view="1"
                  navigation
                  @slideNextTransitionStart="nextBtn"
                  @slidePrevTransitionStart="prevBtn"
              >
                <swiper-slide><img src="@/assets/images/SUV.png" alt=""></swiper-slide>
                <swiper-slide><img src="@/assets/images/CAR.png" alt=""></swiper-slide>
                <swiper-slide><img src="@/assets/images/TRUCK.png" alt=""></swiper-slide>
                <swiper-slide><img src="@/assets/images/VAN.png" alt=""></swiper-slide>
              </swiper>
            </div>
            <base-button :btnContent="swiperBtn[currentBtn].content" />
          </div>
        </div>
        <div class="home__section">
          <div class="home__section-car home__section-car--right">
            <img src="@/assets/images/Lexus.png" alt="">
          </div>
          <div class="container">
            <div class="home__section-card">
              <h2 class="section-title">How does it work?</h2>
              <h3 class="section-subtitle">From your Phone to your Home</h3>
              <p class="section-text">
                We make it easy for you to buy your dream car from your phone without ever having to step into a dealership! We deliver your vehicle to your home for you to test drive before you sign anything.
              </p>
            </div>
          </div>
          <div class="home__section-car home__section-car--left">
            <img src="@/assets/images/Honda.png" alt="">
          </div>
        </div>
      </div>
      <div class="home__steps">
        <div class="container">
          <h2 class="section-title">Your perfect car in 5 easy steps</h2>
          <div class="home__steps-content">
            <step-list :stepList="steps" />
            <div class="phones">
              <img class="phone" src="@/assets/images/phone-1.png" alt="">
              <img class="phone phone--transformed" src="@/assets/images/phone-2.png" alt="">
            </div>
          </div>

        </div>
      </div>
      <div class="home__advantages">
        <div class="container">
          <h2 class="section-title">Advantages of working with us</h2>
          <div class="advantages">
            <div class="advantage">
              <img class="advantage__icon" src="@/assets/images/advantage-1.png" alt="">
              <p class="advantage__title">Vehicle Delivery</p>
              <p class="advantage__description">We deliver your vehicle directly to your door. You don’t sign anything until you test drive the vehicle. There is never any obligation to buy beforehand.</p>
            </div>

            <div class="advantage advantage--reverse">
              <img class="advantage__icon" src="@/assets/images/advantage-2.png" alt="">
              <p class="advantage__title">Auto Financing</p>
              <p class="advantage__description">We partner with the largest lenders in Canada to offer the strongest financing options in the industry—including rates as low as 4%</p>
            </div>

            <div class="advantage">
              <img class="advantage__icon" src="@/assets/images/advantage-3.png" alt="">
              <p class="advantage__title">Huge Inventory</p>
              <p class="advantage__description">We have access to thousands of high-quality vehicles and offer them to you at wholesale prices. Your dream car is waiting for you</p>

            </div>
          </div>
        </div>
      </div>
      <div class="home__dream">
        <div class="container">
          <div class="home__dream-cars">
            <img src="@/assets/images/Toyota.png" alt="">
            <img class="car--absolute" src="@/assets/images/Honda-1.png" alt="">
          </div>
          <div class="home__dream-content">
            <h2 class="section-title">Choose your dream vehicle in our catalog</h2>
            <div>
              <p class="section-text">In our catalogue there are many models of vehicles. Choose your car to your liking.</p>
              <base-button />
            </div>
          </div>
        </div>
      </div>
      <div class="home__stats">
        <div class="container">
          <div class="home__stats-wrapper">
            <div class="home__stats-content">
              <h2 class="section-title">Happy customers</h2>
              <p class="section-text">Since 2017, we have helped thousands of Canadians get their dream vehicles from the comfort of their homes.</p>
            </div>
            <div class="home__stats-cards">
              <stat-card v-for="stat in stats" :key="stat" v-bind="stat" />
            </div>
            <div class="home__stats-content">
              <h4 class="section-heading">What are you waiting? Get started right now!</h4>
              <base-button />
            </div>
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
      <the-calculator :config="calculator" />
      <div class="home__articles">
        <article-suggestion />
      </div>
    </div>
  </div>
</template>

<script>

import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import StepList from "@/components/StepList";
import TheCalculator from "@/components/TheCalculator";
import ArticleSuggestion from "@/components/ArticleSuggestion";

export default {
  name: "HomePage",
  components: {
    ArticleSuggestion,
    StepList,
    TheCalculator,
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      swiperBtn: [
        {id: 1, content: 'Request a suv'},
        {id: 2, content: 'Request a car'},
        {id: 3, content: 'Request a truck'},
        {id: 4, content: 'Request a van'},
      ],
      currentBtn: 0,
      steps: [
        {id: 1, title: 'First Contact', body: 'Tell us what your dream vehicle is.'},
        {id: 2, title: 'Vehicle Selection', body: 'One of our Qualified Agents sends you custom pictures and videos of the car you are interested in.'},
        {id: 3, title: 'Secure Financing', body: 'You work with a dedicated Qualified Agent to secure financing on your terms.'},
        {id: 4, title: 'Vehicle Delivery', body: 'We deliver your car to your home or office for you to test drive.'},
        {id: 5, title: 'Getting Vehicle', body: 'If you love the vehicle, you sign the paperwork and keep the car.'},
      ],
      stats: [
        {title: '7,988+', text: 'Sold Cars'},
        {title: '16,974+', text: 'Vehicles To Choose From'},
        {title: '123', text: 'Experts Across Canada'},
      ],
      calculator: {
        hasDescription: true,
        isFixed: false
      },
      articles: {
        card: 'news',
        content: [
          {id: 1, image:'news-1', date: '10 May, 2020', name: 'How to save on buying a car? Why is it better to buy from us'},
          {id: 2, image:'news-2', date: '10 May, 2020', name: 'How fast can you order a car in Canada?'},
          {id: 3, image:'news-3', date: '10 May, 2020', name: 'How to save on buying a car? Why is it better to buy from us'},
        ]
      },
    }
  },
  methods: {
    nextBtn() { this.currentBtn++; },
    prevBtn() { this.currentBtn--; },
  },
  setup() {
    return {
      modules: [Navigation],
    };
  },
}
</script>

<style scoped>
.home {
  display: flex;
  flex-direction: column;
  gap: 220px;
}
.home__head-top {
  width: 100%;
  background: url("@/assets/images/home-bg.jpg") center center;
  background-size: cover;
  padding: 120px 0 180px;
  z-index: 0;
}
.home__head-top .container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  gap: 60px;
}
.head {
  max-width: 40%;
}
.home__head-swiper {
  max-width: 50%;
  margin-top: 80px;
}
.home__head-top .button {
  margin-top: -80px;
}
.head__title {
  font-weight: 800;
  font-size: 60px;
  line-height: 65px;
  letter-spacing: 0.02em;
  color: #FFFFFF;
}
.home__section {
  position: relative;
}
.home__section-car {
  min-width: 259px;
  max-width: 600px;
  position: absolute;
  z-index: 0;
}
.home__section-car img {
  width: 83%;
}
.home__section-car--right {
  right: -40px;
  top: 50%;
  transform: translateY(-50%);
  text-align: right;
}
.home__section-car--left {
  left: -90px;
  bottom: 0;
}
.home__section .container {
  padding-bottom: 80px;
}
.home__section-card {
  position: relative;
  max-width: 605px;
  padding: 60px;
  margin: -40px auto 0;
  text-align: center;
  box-shadow: 0 20px 25px rgba(0, 0, 0, 0.1);
  background: #FFFFFF;
  border-radius: 5px;
  z-index: 1;
}
.section-subtitle {
  font-weight: 700;
  font-size: 30px;
  line-height: 42px;
  color: #7481FF;
  margin-bottom: 20px;
}


.home__steps .container,
.home__advantages .container {
  display: flex;
  flex-direction: column;
  gap: 60px;
}
.home__steps .container .section-title {
  max-width: 400px;
}
.home__steps-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 50px;
}
.phones {
  display: flex;
  margin-right: 50px;
}
.phone {
  width: 50%;
  filter: drop-shadow(0px 20px 25px rgba(0, 0, 0, 0.1));
}
.phone--transformed {
  rotate: -15deg;
}
.advantages {
  display: flex;
  justify-content: center;
}
.advantage {
  display: flex;
  gap: 5px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  background: url("@/assets/images/advantage.svg");
  filter: drop-shadow(0 20px 25px rgba(0, 0, 0, 0.1));
  max-width: 480px;
  width: 100%;
  height: 430px;
  padding-top: 40px;
}
.advantage__title {
  font-weight: 600;
  font-size: 20px;
  line-height: 25px;
  color: #41456B;
}
.advantage__description {
  font-weight: 400;
  font-size: 16px;
  line-height: 29px;
  letter-spacing: 0.02em;
  color: #606276;
  max-width: 320px;
}
.advantage--reverse {
  background: url("@/assets/images/advantage-reverse.svg");
  padding-top: 0;
  padding-bottom: 50px;
  margin: 0 -120px;
}
.advantage--reverse .advantage__description {
  max-width: 205px;
}
.home__dream .container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 60px;
}
.home__dream-cars {
  position: relative;
  max-width: 600px;
  width: 100%;
  display: flex;
  justify-content: flex-end;
}
.home__dream-cars img {
  width: 75%;
}
.car--absolute {
  position: absolute;
  left: 0;
  top: 35px;
}
.home__dream-content {
  width: 42%;
  display: flex;
  flex-direction: column;
  gap: 20px;
}
.home__dream-content .section-text {
  margin-bottom: 40px;
}
.home__stats-wrapper {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
.home__stats-content {
  max-width: 46%;
}
.home__stats-content:nth-last-child(1) {
  margin-top: -160px;
}
.section-heading {
  font-weight: 700;
  font-size: 25px;
  line-height: 35px;
  letter-spacing: 0.02em;
  color: #41456B;
  margin-bottom: 40px;
  max-width: 320px;
}
.home__stats-cards {
  max-width: 600px;
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
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

@media screen and (max-width: 1247px) {
  .home {
    gap: 160px;
  }
  .home__section .container {
    padding-bottom: 210px;
  }
  .home__section-card {
    max-width: 565px;
    padding: 40px;
  }
  .home__section-car--right {
    top: 75%;
    right: -150px;
    transform: translateY(-75%);
  }
  .home__section-car--left {
    left: -110px;
  }
  .home__advantages .container .section-title {
    text-align: center;
  }
  .advantages {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40px;
  }
  .advantage--reverse {
    background: url("@/assets/images/advantage.svg");
    padding-top: 40px;
    padding-bottom: 0;
    margin: 0;
  }
  .home__dream .container {
    flex-direction: column-reverse;
  }
  .home__dream-content {
    width: 85%;
    flex-direction: row;
    justify-content: space-between;
    gap: 60px;
  }
  .home__stats-wrapper {
    flex-direction: column;
    gap: 40px;
    align-items: center;
    margin: 0 auto;
  }
  .home__stats-content, .home__stats-cards {
    max-width: 84%;
    width: 100%;
  }
  .home__stats-cards {
    justify-content: flex-start;
  }
  .home__stats-content:nth-last-child(1) {
    margin-top: 0;
  }
  .section-heading {
    max-width: unset;
  }
  .review__content {
    padding: 40px 60px 40px 40px;
  }
}

@media screen and (max-width: 1024px) {
  .home__head-top {
    padding: 60px 60px 130px;
  }
  .home__head-top .container {
    flex-direction: column;
  }
  .head {
    max-width: 100%;
  }
  .head__title {
    text-align: center;
  }
  .home__head-swiper {
    max-width: 100%;
    margin-top: 0;
  }
  .home__head-top .button {
    margin-top: 0;
  }



  .home__steps .container .section-title {
    max-width: unset;
  }
  .phones {
    flex-direction: column;
    margin-right: 0;
    margin-left: 40px;
  }
  .phone {
    width: 80%;
    rotate: 15deg;
  }
  .phone--transformed {
    rotate: 15deg;
    margin-top: -80px;
  }

}
@media screen and (max-width: 680px) {
  .home {
    gap: 80px;
  }
  .home__head-top {
    padding: 50px 0 90px;
  }
  .home__head-top .container {
    gap: 40px;
  }
  .head__title {
    font-size: 35px;
    line-height: 38px;
  }
  .home__section .container {
    padding-bottom: 185px;
  }
  .home__section-card {
    max-width: 320px;
    padding: 20px;
  }
  .home__section-car--right {
    top: 85%;
    transform: translateY(-85%);
  }
  .home__section-car {
    max-width: 380px;
  }

  .home__steps .container,
  .home__advantages .container {
    gap: 30px;
  }
  .home__steps-content {
    display: flex;
    flex-direction: column;
    gap: 50px;
  }
  .phones {
    flex-direction: row;
    margin-right: 25px;
    margin-left: 0;
  }
  .phone {
    width: 50%;
    rotate: 0deg;
  }
  .phone--transformed {
    rotate: -15deg;
    margin-top: 0;
  }
  .advantages {
    gap: 20px;
  }
  .advantage {
    background: none;
    filter: unset;
    height: unset;
    padding-top: 0;
  }
  .advantage--reverse {
    background: none;
    padding-top: 0;
  }
  .advantage--reverse .advantage__description {
    max-width: 320px;
  }
  .home-content__dream .container {
    gap: 30px;
  }
  .home__dream-content {
    width: 100%;
    flex-direction: column;
    gap: 10px;
  }
  .home__dream-content div {
    display: flex;
    flex-direction: column;
  }
  .home__dream-content .section-text {
    margin-bottom: 30px;
  }
  .home__stats-wrapper {
    gap: 20px;
  }
  .home__stats-content, .home__stats-cards {
    max-width: 100%;
  }
  .home__stats-cards {
    gap: 10px;
  }
  .section-heading {
    font-size: 20px;
    line-height: 28px;
    margin-bottom: 30px;
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
.reviews-swiper .swiper-button-prev,
.home__articles .swiper-button-next,
.home__articles .swiper-button-prev {
  background: #7481FF;
  color: #FFFFFF;
}

.home__articles .swiper-wrapper {
  align-items: flex-start;
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