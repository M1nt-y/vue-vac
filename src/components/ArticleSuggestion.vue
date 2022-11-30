<template>
  <div class="container">
    <div class="suggestions">
      <h2 class="section-title" v-if="$route.name === 'Home'">Interesting to read</h2>
      <h2 class="section-title" v-else>You might like it</h2>
      <router-link to="/blog" v-if="windowWidth>=425">
        <base-button :btnContent="articlesBtn" />
      </router-link>
    </div>
    <swiper
        :slides-per-view="1"
        :slides-per-group="1"
        :space-between="20"
        :modules="modules"
        navigation
        :breakpoints="swiperOptions.breakpoints"
    >
      <swiper-slide v-for="item in news.content" :key="item.id">
        <the-card :content="item" :cardType="news.cardType" />
      </swiper-slide>
    </swiper>
    <router-link to="/blog" v-if="windowWidth<425">
      <base-button class="mobile" :btnContent="articlesBtn" />
    </router-link>
  </div>
</template>

<script>
import { Navigation, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/navigation';
export default {
  name: "ArticleSuggestion",
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Navigation, A11y],
    };
  },
  data() {
    return {
      articlesBtn: 'All articles',
      windowWidth: window.innerWidth,
      news: {
        totalItems: Number,
        cardType: {
          isVideo: false,
          isNews: true,
          isCar: false
        },
        content: [
          {id: 1, image: 'news-1.jpg', date: '10 May, 2020', name: 'How to save on buying a car? Why is it better to buy from us',},
          {id: 2, image: 'news-2.jpg', date: '10 May, 2020', name: 'How fast can you order a car in Canada?',},
          {id: 3, image: 'news-3.jpg', date: '10 May, 2020', name: 'How to save on buying a car? Why is it better to buy from us',},
          {id: 4, image: 'news-4.jpg', date: '10 May, 2020', name: 'How fast can you order a car in Canada?',},
          {id: 5, image: 'news-5.jpg', date: '10 May, 2020', name: 'How to save on buying a car? Why is it better to buy from us',},
          {id: 6, image: 'news-6.jpg', date: '10 May, 2020', name: 'How to save on buying a car? Why is it better to buy from us',},
          {id: 7, image: 'news-7.jpg', date: '10 May, 2020', name: 'How fast can you order a car in Canada?',},
          {id: 8, image: 'news-8.jpg', date: '10 May, 2020', name: 'How to save on buying a car? Why is it better to buy from us',},
          {id: 9, image: 'news-9.jpg', date: '10 May, 2020', name: 'How fast can you order a car in Canada?',},
        ]
      },
      swiperOptions: {
        breakpoints: {
          768: {
            slidesPerView: 2,
            slidesPerGroup: 2,
          },
          1100: {
            slidesPerView: 3,
            slidesPerGroup: 3,
          }
        }
      }
    }
  },
  mounted() {
    window.onresize = () => {
      this.windowWidth = window.innerWidth
    }
  },
}
</script>

<style scoped>
.suggestions {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 60px;
  gap: 30px;
}
.mobile {
  width: 100%;
  margin-bottom: 30px;
}

@media screen and (max-width: 680px) {
  .suggestions {
    margin-bottom: 30px;
  }
}
</style>

<style>
.swiper-wrapper {
  margin-bottom: 40px;
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

.suggestions .swiper-button-next,
.suggestions .swiper-button-prev {
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
}
</style>