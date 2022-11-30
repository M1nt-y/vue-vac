<template>
  <div>
    <div class="card video" v-if="this.cardType.isVideo">
      <div class="video__content" @click="toggleModal">
        <img :src="require(`@/assets/images/${content.image}`)" alt="" />
        <div class="video__content-play">
          <svg width="18" height="21" viewBox="0 0 18 21" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16.4268 8.76803C17.7601 9.53783 17.7601 11.4623 16.4268 12.2321L3.03651 19.963C1.70318 20.7328 0.0365133 19.7705 0.0365134 18.2309L0.0365141 2.76921C0.0365141 1.22961 1.70318 0.267366 3.03651 1.03717L16.4268 8.76803Z" fill="#7481FF"/>
          </svg>
        </div>
        <the-modal v-if="show" :link="content.link" :show="show"/>
      </div>
      <h4 class="card__name">{{ content.name }}</h4>
    </div>

    <router-link :to="`/blog/${content.id}`" v-else-if="this.cardType.isNews" >
      <div class="card news">
        <div class="news__content">
          <img :src="require(`@/assets/images/${content.image}`)" alt="" />
        </div>
        <div class="news__body">
          <p class="news__date">{{ content.date }}</p>
          <h4 class="news__name">{{ content.name }}</h4>
        </div>
      </div>
    </router-link>

    <router-link :to="`/catalog/${content.id}`" v-else-if="this.cardType.isCar">
      <div class="card car">
        <div class="car__content" @click.prevent>
          <swiper
              :modules="modules"
              :grab-cursor="true"
              :scrollbar="{ draggable: true }"
              :slides-per-view="1">
            <swiper-slide v-for="image in this.content.images" :key="image">
              <img :src="require(`@/assets/images/${image}`)" alt="">
            </swiper-slide>
          </swiper>
        </div>
        <div class="car__body">
          <h4 class="car__name">{{ content.make }} {{ content.model }}</h4>
          <p class="car__price">$ {{ content.price }}</p>
          <div class="car__characteristics">
            <p class="section-text">{{ content.year }} year</p>
            <p class="section-text">{{ content.bodyType }}</p>
            <p class="section-text">{{ content.transmission }}</p>
            <p class="section-text km">{{ content.kilometers }} km</p>
          </div>
        </div>
      </div>
    </router-link>

  </div>
</template>

<script>
import { Scrollbar} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/scrollbar';

export default {
  name: "TheCard",
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Scrollbar],
    };
  },
  data() {
    return {
      show: false,
      interior: Array,
      exterior: Array,
    }
  },
  props: {
    cardType: {
      isVideo: false,
      isNews: false,
      isCar: false
    },
    card: {
      type: String,
      default: '',
      required: false
    },
    content: {
      id: {
        type: Number,
        required: false,
      },
      name: {
        type: String,
        required: false,
      },
      make: {
        type: String,
        required: false
      },
      model: {
        type: String,
        required: false
      },
      price: {
        type: Number,
        required: false
      },
      year: {
        type: Number,
        required: false
      },
      date: {
        type: String,
        required: false
      },
      bodyType: {
        type: String,
        required: false
      },
      transmission: {
        type: String,
        required: false
      },
      kilometers: {
        type: Number,
        required: false
      },
      image: {
        type: String,
        required: false
      },
      interior: {
        type: Array,
        required: false
      },
      images: {
        type: Array,
        required: false
      },
      link: {
        type: String,
        required: false
      }
    },
  },
  methods: {
    toggleModal() {
      this.show = !this.show;
      if (this.show) {
        document.documentElement.style.overflow = 'hidden'
      }
      else {
        document.documentElement.style.overflow = 'auto'
      }
    }
  },
  beforeMount() {
    if (this.card === 'video') {
      this.isVideo = true;
    }
    else if (this.card === 'news') {
      this.isNews = true;
    }
    else if (this.card === 'car') {
      this.isCar = true;
    }
  },
}
</script>

<style scoped>
.modal {
  display: block;
}
.video {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
.car__content, .car__content img,
.video__content, .video__content img,
.news__content, .news__content img {
  width: 100%;
  position: relative;
}
.car__content img {
  width: 100%;
  aspect-ratio: 1 / 0.515;
}

.video__content, .video__content img {
  cursor: pointer;
}
.video__content-play {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  height: 53px;
  width: 53px;
  border-radius: 50%;
  background: #FFFFFF;
  opacity: 0.8;
}
.video__content-play svg {
  position: absolute;
  top: 50%;
  left: 55%;
  transform: translateX(-55%) translateY(-50%);
}

.card__name {
  font-size: 25px;
  line-height: 35px;
  letter-spacing: 0.02em;
  color: #41456B;
}

.car, .news {
  display: flex;
  flex-direction: column;
  box-shadow: 0 20px 25px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  overflow: hidden;
}

.car__body {
  padding: 20px;
  cursor: pointer;
}
.news__body {
  padding: 20px 30px;
}
.news__date {
  letter-spacing: 0.02em;
  color: #606276;
}

.news__name, .car__name, .car__price {
  font-weight: 600;
  font-size: 20px;
  line-height: 25px;
  color: #41456B;
  margin-bottom: 10px;
}
.car__price {
  color: #7481FF;
}
.car__characteristics {
  display: flex;
  flex-wrap: wrap;
}
.car__characteristics .section-text {
  position: relative;
  margin-right: 40px;
}
.car__characteristics .section-text::after {
  content: '';
  position: absolute;
  width: 0;
  height: 19px;
  border: 1px solid #D7D7D7;
  top: 50%;
  left: -20px;
  transform: translateY(-50%);
}
.car__characteristics .section-text:nth-child(1)::after,
.car__characteristics .section-text:nth-last-child(1)::after {
  content: unset;
}

.km {
  width: 100%;
}

</style>

<style>
.car .swiper-horizontal>.swiper-scrollbar, .swiper-scrollbar.swiper-scrollbar-horizontal {
  width: 90%;
  left: 50%;
  transform: translateX(-50%);
  bottom: 10px;
}
.car .swiper-scrollbar {
  background: rgba(255, 255, 255, 0.2);
}
.car .swiper-scrollbar-drag{
  background: rgba(255, 255, 255, 0.7);
}
</style>