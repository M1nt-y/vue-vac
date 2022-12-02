<template>
  <div>
    <div class="car">
      <div class="container">
        <h2 class="section-title">{{ content[id-1].make }} {{ content[id-1].model }}</h2>
        <p class="car-text">Watching now ... people</p>
        <div class="car-content">
          <div class="car-content__swiper">
            <swiper
                :allow-touch-move="false"
                :loop="true"
                :navigation="swiperOptions.navigation"
                v-if="swiperImages==='Exterior'"
            >
              <swiper-slide v-for="(image, index) in content[id-1].images" :key="index">
                <img :src="require(`@/assets/images/${image}`)" alt="">
              </swiper-slide>
              <div class="car-content__swiper-switch">
                <input
                    class="swiper-radio"
                    type="radio"
                    name="swiperRadio"
                    value="Exterior"
                    id="exterior"
                    v-model="swiperImages"
                />
                <label class="swiper-label" for="exterior">Exterior</label>
                <input
                    class="swiper-radio"
                    type="radio"
                    name="swiperRadio"
                    value="Interior"
                    id="interior"
                    v-model="swiperImages"
                />
                <label class="swiper-label" for="interior">Interior</label>
              </div>
              <div class="car-content__swiper-mini">
                <swiper
                    :slides-per-view="3.6"
                    :centered-slides="true"
                    :allow-touch-move="false"
                    :space-between="10"
                    :loop="true"
                    :navigation="swiperOptions.navigation"
                >
                  <swiper-slide v-for="(image, index) in content[id-1].images" :key="index">
                    <img :src="require(`@/assets/images/${image}`)" alt="">
                  </swiper-slide>
                  <div class="navigation-button next-button swiper-button-next" />
                  <div class="navigation-button prev-button swiper-button-prev" />
                </swiper>
              </div>
            </swiper>
            <swiper
                :allow-touch-move="false"
                :navigation="swiperOptions.navigation"
                :loop="true"
                v-else
            >
              <swiper-slide v-for="(image, index) in content[id-1].interior" :key="index">
                <img :src="require(`@/assets/images/${image}`)" alt="">
              </swiper-slide>
              <div class="car-content__swiper-switch">
                <input
                    class="swiper-radio"
                    type="radio"
                    name="swiperRadio"
                    value="Exterior"
                    id="exterior"
                    v-model="swiperImages"
                />
                <label class="swiper-label" for="exterior">Exterior</label>
                <input
                    class="swiper-radio"
                    type="radio"
                    name="swiperRadio"
                    value="Interior"
                    id="interior"
                    v-model="swiperImages"
                />
                <label class="swiper-label" for="interior">Interior</label>
              </div>
              <div class="car-content__swiper-mini">
                <swiper
                    :slides-per-view="3.6"
                    :centered-slides="true"
                    :allow-touch-move="false"
                    :space-between="10"
                    :loop="true"
                    :navigation="swiperOptions.navigation"
                >
                  <swiper-slide v-for="(image, index) in content[id-1].interior" :key="index">
                    <img :src="require(`@/assets/images/${image}`)" alt="">
                  </swiper-slide>
                  <div class="navigation-button next-button swiper-button-next" />
                  <div class="navigation-button prev-button swiper-button-prev" />
                </swiper>
              </div>
            </swiper>
          </div>
          <div class="car-content__description">
            <div class="car-content__description-main">
              <div class="main-detail price">
                <p class="car-text">Price</p>
                <h2 class="car-price">{{ content[id-1].price }} $</h2>
              </div>
              <div class="main-detail">
                <p class="car-text">Body</p>
                <h2 class="">{{ content[id-1].bodyType }}</h2>
              </div>
              <div class="main-detail">
                <p class="car-text">Year</p>
                <h2 class="">{{ content[id-1].year }}</h2>
              </div>
              <div class="main-detail">
                <p class="car-text">Transmission</p>
                <h2 class="">{{ content[id-1].transmission }}</h2>
              </div>
              <div class="main-detail">
                <p class="car-text">Kilometers</p>
                <h2 class="">{{ content[id-1].kilometers }}</h2>
              </div>
            </div>
            <hr class="line" />
            <div class="car-content__description-details">
              <p class="car-text">Detail</p>
              <p class="detail" v-for="detail in content[id-1].details" :key="detail">{{ detail }}</p>
            </div>
            <hr class="line" />
            <div class="car-content__description-info">
              <p class="car-text">Description</p>
              <p class="section-text" v-html="content[id - 1].description" />
              <base-button v-bind="{ ...isBlue && { solidBlueBtn } }" :btnContent="btnRequest" @click="openContact" @click.stop />
            </div>
          </div>
        </div>
      </div>
    </div>
    <the-calculator :config="calculator" :name="title" :price="loanAmount" :quizId="id" />
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import SwiperCore, { Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import TheCalculator from "@/components/TheCalculator";

SwiperCore.use([Navigation]);

export default {
  name: "CarPage",
  components: {
    TheCalculator,
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      id: '',
      content: [
        {
          id: 1, make: 'Porsche', model: 'Panamera II Turbo S E-Hybrid',
          price: 150000, year: 2012,
          bodyType: 'Sedan', transmission: 'Manual', kilometers: 35000,
          images: ['car-1.jpg','car-1-1.jpg','car-1-2.jpg'],
          interior: ['car-1-3.jpg','car-1-4.jpg','car-1-5.jpg'],
          details: ['Rear wheel drive','2500-4000 rpm','6 cylinders','0-100 in 2.7 s.','11 l. per 100 km.','Power steering','Rear wheel drive','2500-4000 rpm'],
          description: 'Porsche 911 - a sports car manufactured by the German company Porsche AG in the back of a two-door coupe or a convertible based on it, produced in different generations from 1964 to the present day. <br/> The 911 index was not originally planned for the timeless designation of different generations of the same car, and was no more than one of many similar in the through three-digit internal factory numbering of all Porsche models assigned to a very specific 1964 model.'
        },
        {
          id: 2, make: 'Mitsubishi', model: 'Outlander III Restyling 3',
          price: 45750, year: 2018,
          bodyType: 'SUV', transmission: 'Automatic', kilometers: 42000,
          images: ['car-2.jpg','car-2-1.jpg'],
          interior: ['car-2-2.jpg','car-2-3.jpg'],
          details: ['Rear wheel drive','2500-4000 rpm','6 cylinders','0-100 in 2.7 s.','11 l. per 100 km.','Power steering','Rear wheel drive','2500-4000 rpm'],
          description: 'Porsche 911 - a sports car manufactured by the German company Porsche AG in the back of a two-door coupe or a convertible based on it, produced in different generations from 1964 to the present day. <br/> The 911 index was not originally planned for the timeless designation of different generations of the same car, and was no more than one of many similar in the through three-digit internal factory numbering of all Porsche models assigned to a very specific 1964 model.'

        },
        {
          id: 3, make: 'Ford', model: 'F150',
          price: 77240, year: 2021,
          bodyType: 'Truck', transmission: 'Manual', kilometers: 76000,
          images: ['car-3.jpg','car-3-1.jpg',],
          interior: ['car-3-2.jpg','car-3-3.jpg'],
          details: ['Rear wheel drive','2500-4000 rpm','6 cylinders','0-100 in 2.7 s.','11 l. per 100 km.','Power steering','Rear wheel drive','2500-4000 rpm'],
          description: 'Porsche 911 - a sports car manufactured by the German company Porsche AG in the back of a two-door coupe or a convertible based on it, produced in different generations from 1964 to the present day. <br/> The 911 index was not originally planned for the timeless designation of different generations of the same car, and was no more than one of many similar in the through three-digit internal factory numbering of all Porsche models assigned to a very specific 1964 model.'

        },
        {
          id: 4, make: 'Porsche', model: 'Panamera II Turbo S E-Hybrid',
          price: 101101, year: 2014,
          bodyType: 'Sedan', transmission: 'Manual', kilometers: 35000,
          images: ['car-1.jpg','car-1-1.jpg','car-1-2.jpg'],
          interior: ['car-1-3.jpg','car-1-4.jpg','car-1-5.jpg'],
          details: ['Rear wheel drive','2500-4000 rpm','6 cylinders','0-100 in 2.7 s.','11 l. per 100 km.','Power steering','Rear wheel drive','2500-4000 rpm'],
          description: 'Porsche 911 - a sports car manufactured by the German company Porsche AG in the back of a two-door coupe or a convertible based on it, produced in different generations from 1964 to the present day. <br/> The 911 index was not originally planned for the timeless designation of different generations of the same car, and was no more than one of many similar in the through three-digit internal factory numbering of all Porsche models assigned to a very specific 1964 model.'

        },
        {
          id: 5, make: 'Porsche', model: 'Panamera II Turbo S E-Hybrid',
          price: 99300, year: 2017,
          bodyType: 'Sedan', transmission: 'Manual', kilometers: 29900,
          images: ['car-1.jpg','car-1-1.jpg','car-1-2.jpg'],
          interior: ['car-1-3.jpg','car-1-4.jpg','car-1-5.jpg'],
          details: ['Rear wheel drive','2500-4000 rpm','6 cylinders','0-100 in 2.7 s.','11 l. per 100 km.','Power steering','Rear wheel drive','2500-4000 rpm'],
          description: 'Porsche 911 - a sports car manufactured by the German company Porsche AG in the back of a two-door coupe or a convertible based on it, produced in different generations from 1964 to the present day. <br/> The 911 index was not originally planned for the timeless designation of different generations of the same car, and was no more than one of many similar in the through three-digit internal factory numbering of all Porsche models assigned to a very specific 1964 model.'

        },
        {
          id: 6, make: 'Porsche', model: 'Panamera II Turbo S E-Hybrid',
          price: 74900, year: 2008,
          bodyType: 'Sedan', transmission: 'Manual', kilometers: 123456,
          images: ['car-1.jpg','car-1-1.jpg','car-1-2.jpg'],
          interior: ['car-1-3.jpg','car-1-4.jpg','car-1-5.jpg'],
          details: ['Rear wheel drive','2500-4000 rpm','6 cylinders','0-100 in 2.7 s.','11 l. per 100 km.','Power steering','Rear wheel drive','2500-4000 rpm'],
          description: 'Porsche 911 - a sports car manufactured by the German company Porsche AG in the back of a two-door coupe or a convertible based on it, produced in different generations from 1964 to the present day. <br/> The 911 index was not originally planned for the timeless designation of different generations of the same car, and was no more than one of many similar in the through three-digit internal factory numbering of all Porsche models assigned to a very specific 1964 model.'

        },
        {
          id: 7, make: 'Porsche', model: 'Panamera II Turbo S E-Hybrid',
          price: 224999, year: 2022,
          bodyType: 'Sedan', transmission: 'Manual', kilometers: 3700,
          images: ['car-1.jpg','car-1-1.jpg','car-1-2.jpg'],
          interior: ['car-1-3.jpg','car-1-4.jpg','car-1-5.jpg'],
          details: ['Rear wheel drive','2500-4000 rpm','6 cylinders','0-100 in 2.7 s.','11 l. per 100 km.','Power steering','Rear wheel drive','2500-4000 rpm'],
          description: 'Porsche 911 - a sports car manufactured by the German company Porsche AG in the back of a two-door coupe or a convertible based on it, produced in different generations from 1964 to the present day. <br/> The 911 index was not originally planned for the timeless designation of different generations of the same car, and was no more than one of many similar in the through three-digit internal factory numbering of all Porsche models assigned to a very specific 1964 model.'

        },
      ],
      swiperOptions: {
        navigation: {
          nextEl: '.next-button',
          prevEl: '.prev-button'
        }
      },
      carName: '',
      swiperImages: 'Exterior',
      calculator: {
        hasDescription: false,
        isFixed: true,
      },
      title: 'Calculate the installment plan for this car.',
      loanAmount: Number,
      solidBlueBtn: {
        btnColor: '#FFFFFF',
        btnBackground: '#7481FF',
        btnBorder: 'transparent',
        hoverBorder: 'transparent',
        hoverColor: '#FFFFFF',
        hoverBackground: '#6270FF'
      },
      isBlue: true,
      btnRequest: 'Request more information'
    }
  },
  methods: {
    openContact() {
      this.$emit('request', this.carName);
    }
  },
  created() {
    this.id = this.$route.params.id;
    this.$emit('getId', this.id);
    this.loanAmount = this.content[this.id-1].price;
    this.carName = this.content[this.id-1].make + ' ' + this.content[this.id-1].model;
  }
}
</script>

<style scoped>
.car-text {
  font-weight: 500;
  font-size: 16px;
  line-height: 25px;
  color: #606276;
}

.car-content {
  display: flex;
  justify-content: space-between;
  gap: 50px;
}
.car-content__swiper {
  max-width: 50%;
}

.car-content__description {
  display: flex;
  flex-direction: column;
  gap: 60px;
}

.car-content__description-main,
.car-content__description-details {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 20px;
}
.main-detail, .detail {
  width: calc(50% - 10px);
}
.price {
  width: 100%;
}
.car-price {
  color: #7481FF;
}
.line {
  border: 1px solid #D7D7D7;
  width: 100%;
}
.car-content__description-details .car-text {
  width: 100%;
}
.detail {
  font-weight: 600;
  font-size: 20px;
  line-height: 25px;
  color: #41456B;
}

.car-content__description-info {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.section-text {
  max-width: 500px;
}

.swiper-slide img{
  width: 100%;
  aspect-ratio: 1 / 0.56;
}

.car-content__swiper-switch {
  position: relative;
  top: -55px;
  left: 20px;
  display: flex;
  gap: 7px;
  font-weight: 700;
  font-size: 16px;
  line-height: 14px;
  text-align: center;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  color: #41456B;
  z-index: 2;
}
.swiper-label {
  padding: 10px 20px;
  background: rgba(215, 215, 215, 0.2);
  color: #FFFFFF;
  border-radius: 2px;
  transition: all 0.3s ease-in;
  cursor: pointer;
}
.swiper-radio {
  display: none;
}
.swiper-radio:checked + .swiper-label {
  background: #FFFFFF;
  color: #41456B;
}
.car-content__swiper-mini {
  position: relative;
  top: -20px;
}

@media screen and (max-width: 1024px) {
  .car {
    padding: 0 60px;
  }
  .car-content {
    flex-direction: column;
    gap: 150px;
  }
  .car-content__swiper {
    max-width: 100%;
  }
}
@media screen and (max-width: 680px) {
  .car {
    padding: 0;
  }
  .car-content {
    gap: 80px;
  }
  .detail {
    width: 100%;
  }
  .car-content__swiper-switch {
    position: relative;
    top: -45px;
    left: 10px;
  }
}
</style>

<style>
.navigation-button {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 2;
  width: 53px;
  height: 53px;
  background: #7481FF;
  opacity: 0.8;
  border-radius: 50%;
  margin: 0;
  color: #FFFFFF;
}
.navigation-button::after {
  font-size: 22px;
}
.prev-button {
  left: 0;
}
.next-button {
  right: 0;
}
.car-content__swiper .swiper-wrapper {
  margin-bottom: 0;
}
.car-content__swiper-mini,
.car-content__swiper-mini .swiper,
.car-content__swiper-mini .swiper-wrapper,
.car-content__swiper-mini .swiper-slide,
.car-content__swiper-mini img {
  max-height: 111px;
}
.car-content__swiper-mini img {
  object-fit: fill;
}
@media screen and (max-width: 680px) {
  .navigation-button {
    width: 35px;
    height: 35px;
  }
  .navigation-button::after {
    font-size: 14px;
  }
}
</style>