<template>
  <div>
    <div class="container">
      <div class="inventory">
        <div class="search">
          <div class="search__filter" v-if="windowWidth<=1040" @click="toggleFilter">
            <img src="@/assets/icons/filter-icon.svg" alt="">
            <p v-if="windowWidth>760">Search filter</p>
          </div>
          <div class="search__wrapper">
            <the-input class="search__wrapper-content" :isSearch="true" />
            <img src="@/assets/icons/share-icon.svg" alt="">
          </div>
          <div class="sort">
            <p class="section-text" v-if="windowWidth>1040">Sorted by</p>
            <the-select
                :options="sortOptions"
                @select="selected => selectedSort = selected.value"
            />
          </div>
        </div>
        <div class="filters" :class="{'opened': isOpen}">
          <div class="filters__close" v-if="windowWidth<=1040" @click="toggleFilter">
            <img src="@/assets/icons/Close.svg" alt="">
          </div>
          <div class="filters__container">
            <div class="filters__top">
              <p class="filters__title">Detailed search</p>
              <p class="filters__clear"
                 @click="clearFilters"
                 v-if="haveBody || haveTransmission || haveSearch || !defaultPrice || !defaultYear || !defaultKm"
              >
                Clear filters
              </p>
            </div>
            <div class="filters__wrapper">
              <the-accordion :title="modelFilter" :class="{'not-empty': haveSearch}">
                <p class="filter-option">Make</p>
                <the-input :isSearch="true" @onTyping="getMake" @click="toggleMake" />
                <the-search
                    :items="getMakes"
                    :search="searchMake"
                    :isSearching="searchingMake"
                    @selectMake="selected => { searchMakes = selected; searchingMake = false }"
                />
                <p class="filter-option">Model</p>
                <the-input :isSearch="true" @onTyping="getModel" @click="toggleModel" />
                <the-search
                    :items="getModels"
                    :search="searchModel"
                    :isSearching="searchingModel"
                    @selectMake="selected => { searchModels = selected; searchingModel = false }"
                />
                <template #tags>
                  <div class="tag" v-for="tag in searchMakes" :key="tag" @click="clearMake(tag)">
                    <img src="@/assets/icons/Close.svg" alt="">{{ tag }}
                  </div>
                  <div class="tag" v-for="tag in searchModels" :key="tag" @click="clearModel(tag)">
                    <img src="@/assets/icons/Close.svg" alt="">{{ tag }}
                  </div>
                </template>
              </the-accordion>
              <the-accordion :class="{'not-empty': haveBody}" :title="bodyFilter">
                <the-checkbox
                    v-for="checkbox in bodyOptions"
                    :key="checkbox"
                    v-bind="checkbox"
                    v-model="checkedBody"
                />
                <template #tags>
                  <div class="tag" v-for="tag in checkedBody" :key="tag" @click="clearBody(tag)">
                    <img src="@/assets/icons/Close.svg" alt="">{{ tag }}
                  </div>
                </template>
              </the-accordion>
              <the-accordion :class="{'not-empty': haveTransmission}" :title="transmissionFilter">
                <the-checkbox
                    v-for="checkbox in transmissionOptions"
                    :key="checkbox"
                    v-bind="checkbox"
                    v-model="checkedTransmission"
                />
                <template #tags>
                  <div class="tag" v-for="tag in checkedTransmission" :key="tag" @click="clearTransmission(tag)">
                    <img src="@/assets/icons/Close.svg" alt="">{{ tag }}
                  </div>
                </template>
              </the-accordion>
              <the-accordion :class="{'not-empty': !defaultPrice}" :title="priceFilter">
                <div class="filter-numbers">
                  <p class="filter-number"><span>$ {{ minPrice }}</span></p>
                  <p class="filter-number"><span>$ {{ maxPrice }}</span></p>
                </div>
                <div class="double range-slider">
                  <range-slider id="min-price" :range="priceRange" :isMin="isMin" @change="changeMinPrice" @changeValue="setPriceMin"/>
                  <range-slider id="max-price" :range="priceRange" class="second" @change="changeMaxPrice" @changeValue="setPriceMax"/>
                </div>
                <template #tags v-if="!defaultPrice">
                  <div class="tag" @click="clearPrice">
                    <img src="@/assets/icons/Close.svg" alt="">$ {{ minPrice }} - $ {{ maxPrice }}
                  </div>
                </template>
              </the-accordion>
              <the-accordion :class="{'not-empty': !defaultYear}" :title="yearFilter">
                <div class="filter-numbers">
                  <p class="filter-number"><span>{{ minYear }}</span></p>
                  <p class="filter-number"><span>{{ maxYear }}</span></p>
                </div>
                <div class="double range-slider">
                  <range-slider id="min-year" :range="yearRange" :isMin="isMin" @change="changeMinYear" @changeValue="setYearMin"/>
                  <range-slider id="max-year" :range="yearRange" class="second" @change="changeMaxYear" @changeValue="setYearMax"/>
                </div>
                <template #tags v-if="!defaultYear">
                  <div class="tag" @click="clearYear">
                    <img src="@/assets/icons/Close.svg" alt="">{{ minYear }} - {{ maxYear }}
                  </div>
                </template>
              </the-accordion>
              <the-accordion :class="{'not-empty': !defaultKm}" :title="kilometersFilter">
                <p class="filter-number"><span>{{ currentKm }}</span> or less</p>
                <div class="range-slider">
                  <range-slider id="km-range" :range="kmRange" @changeValue="setKm" />
                </div>
                <template #tags v-if="!defaultKm">
                  <div class="tag" @click="clearKm">
                    <img src="@/assets/icons/Close.svg" alt="">{{ currentKm }} km or less
                  </div>
                </template>
              </the-accordion>
            </div>
          </div>
        </div>
        <div class="catalog">
          <card-list
              v-bind="cars"
              :sort="selectedSort"
              :searchMake="searchMakes"
              :searchModel="searchModels"
              :filterBody="checkedBody"
              :filterTransmission="checkedTransmission"
              :minPrice="minPrice"
              :maxPrice="maxPrice"
              :minYear="minYear"
              :maxYear="maxYear"
              :kmLimit="currentKm"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CardList from "@/components/CardList";

export default {
  name: "CatalogPage",
  components: {CardList},
  data() {
    return {
      cars: {
        totalItems: Number,
        itemsPerPage: 6,
        card: 'car',
        content: [
          {
            id: 1, make: 'Porsche', model: 'Panamera II Turbo S E-Hybrid',
            price: 150000, year: 2012,
            bodyType: 'Sedan', transmission: 'Manual', kilometers: 35000,
            images: ['car-1.jpg','car-1-1.jpg','car-1-2.jpg'],
            interior: ['car-1-3.jpg','car-1-4.jpg','car-1-5.jpg'],
          },
          {
            id: 2, make: 'Mitsubishi', model: 'Outlander III Restyling 3',
            price: 45750, year: 2018,
            bodyType: 'SUV', transmission: 'Automatic', kilometers: 42000,
            images: ['car-2.jpg','car-2-1.jpg'],
            interior: ['car-2-2.jpg','car-2-3.jpg'],
          },
          {
            id: 3, make: 'Ford', model: 'F150',
            price: 77240, year: 2021,
            bodyType: 'Truck', transmission: 'Manual', kilometers: 76000,
            images: ['car-3.jpg','car-3-1.jpg',],
            interior: ['car-3-2.jpg','car-3-3.jpg'],
          },
          {
            id: 4, make: 'Porsche', model: 'Panamera II Turbo S E-Hybrid',
            price: 101101, year: 2014,
            bodyType: 'Sedan', transmission: 'Manual', kilometers: 35000,
            images: ['car-1.jpg','car-1-1.jpg','car-1-2.jpg'],
            interior: ['car-1-3.jpg','car-1-4.jpg','car-1-5.jpg'],
          },
          {
            id: 5, make: 'Porsche', model: 'Panamera II Turbo S E-Hybrid',
            price: 99300, year: 2017,
            bodyType: 'Sedan', transmission: 'Manual', kilometers: 29900,
            images: ['car-1.jpg','car-1-1.jpg','car-1-2.jpg'],
            interior: ['car-1-3.jpg','car-1-4.jpg','car-1-5.jpg'],
          },
          {
            id: 6, make: 'Porsche', model: 'Panamera II Turbo S E-Hybrid',
            price: 74900, year: 2008,
            bodyType: 'Sedan', transmission: 'Manual', kilometers: 123456,
            images: ['car-1.jpg','car-1-1.jpg','car-1-2.jpg'],
            interior: ['car-1-3.jpg','car-1-4.jpg','car-1-5.jpg'],
          },
          {
            id: 7, make: 'Porsche', model: 'Panamera II Turbo S E-Hybrid',
            price: 224999, year: 2022,
            bodyType: 'Sedan', transmission: 'Manual', kilometers: 3700,
            images: ['car-1.jpg','car-1-1.jpg','car-1-2.jpg'],
            interior: ['car-1-3.jpg','car-1-4.jpg','car-1-5.jpg'],
          },
        ]
      },
      sortingChoice: 'Recommendations',
      modelFilter: 'Make, Model',
      bodyFilter: 'Body type',
      transmissionFilter: 'Transmission',
      priceFilter: 'Price',
      yearFilter: 'Year',
      kilometersFilter: 'Kilometers',
      selectedSort: '',
      searchMake: '',
      searchModel: '',
      searchMakes: [],
      searchModels: [],
      checkedBody: [],
      checkedTransmission: [],
      bodyOptions: [
        { name: 'Truck', icon: 'truck-icon.svg' },
        { name: 'SUV', icon: 'suv-icon.svg' },
        { name: 'Sedan', icon: 'sedan-icon.svg' },
        { name: 'Hatchback', icon: 'hatchback-icon.svg' },
        { name: 'Coupe', icon: 'coupe-icon.svg' },
        { name: 'Convertible', icon: 'convertible-icon.svg' },
        { name: 'VAN', icon: 'van-icon.svg' },
      ],
      transmissionOptions: [
        { name: 'Automatic' },
        { name: 'Manual' }
      ],
      sortOptions: [
        { value: 'idAsc', name: 'Recommendations' },
        { value: 'yearDesc', name: 'Newest inventory' },
        { value: 'priceAsc', name: 'Lowest price' },
        { value: 'priceDesc', name: 'Highest price' }
      ],
      isMin: true,
      minPrice: 0,
      maxPrice: 0,
      minGap: 0,
      minYear: 0,
      maxYear: 0,
      priceSteps: 0,
      yearSteps: 0,
      currentKm: 0,
      priceRange: {
        min: 0,
        max: 200000,
        step: 10000,
      },
      priceMinRange: {
        min: 0,
        max: 200000,
        step: 10000,
      },
      priceMaxRange: {
        min: 0,
        max: 200000,
        step: 10000,
      },
      yearRange: {
        min: 2000,
        max: 2022,
        step: 1,
      },
      kmRange: {
        min: 10000,
        max: 200000,
        step: 10000,
      },
      searchingMake: false,
      searchingModel: false,
      haveSearch: false,
      haveBody: false,
      haveTransmission: false,
      defaultPrice: true,
      defaultYear: true,
      defaultKm: true,
      isOpen: false,
      windowWidth: window.innerWidth,
    }
  },
  methods: {
    getMake(input) {
      this.searchMake = input;
    },
    toggleMake() {
      this.searchingMake = true;
      this.searchingModel = false;
    },
    getModel(input) {
      this.searchModel = input;
    },
    toggleModel() {
      this.searchingMake = false;
      this.searchingModel = true;
    },
    setKm(value) {
      this.currentKm = value;
    },
    setPriceMin(value) {
      this.minPrice = value;
    },
    setPriceMax(value) {
      this.maxPrice = value;
    },
    setYearMin(value) {
      this.minYear = value;
    },
    setYearMax(value) {
      this.maxYear = value;
    },
    clearMake(tag) {
      for (let i = 0; i < this.searchMakes.length; i++) {
        if (this.searchMakes[i] === tag) {
          this.searchMakes.pop();
        }
      }
      if (tag === undefined) {
        this.searchMakes = [];
      }
      if (!this.searchMakes.length && !this.searchModels.length) {
        this.haveSearch = false;
      }
    },
    clearModel(tag) {
      for (let i = 0; i < this.searchModels.length; i++) {
        if (this.searchModels[i] === tag) {
          this.searchModels.pop();
        }
      }
      if (tag === undefined) {
        this.searchModels = [];
      }
      if (!this.searchMakes.length && !this.searchModels.length) {
        this.haveSearch = false;
      }
    },
    clearBody(tag) {
      for (let i = 0; i < this.checkedBody.length; i++) {
        if (this.checkedBody[i] === tag) {
          this.checkedBody.pop();
        }
      }
      if (tag === undefined) {
        this.checkedBody = [];
      }
      if (!this.checkedBody.length) {
        this.haveBody = false;
      }
    },
    clearTransmission(tag) {
      for (let i = 0; i < this.checkedTransmission.length; i++) {
        if (this.checkedTransmission[i] === tag) {
          this.checkedTransmission.pop();
        }
      }
      if (tag === undefined) {
        this.checkedTransmission = [];
      }
      if (!this.checkedTransmission.length) {
        this.haveTransmission = false;
      }
    },
    clearPrice() {
      this.minPrice = this.priceRange.min;
      this.maxPrice = this.priceRange.max;
      document.getElementById('min-price').value = this.priceRange.min;
      document.getElementById('max-price').value = this.priceRange.max;
    },
    clearYear() {
      this.minYear = this.yearRange.min;
      this.maxYear = this.yearRange.max;
      document.getElementById('min-year').value = this.yearRange.min;
      document.getElementById('max-year').value = this.yearRange.max;
    },
    clearKm() {
      this.currentKm = this.kmRange.max;
      document.getElementById('km-range').value = this.kmRange.max;
    },
    clearFilters() {
      this.clearMake();
      this.clearModel();
      this.clearBody();
      this.clearTransmission();
      this.clearPrice();
      this.clearYear();
      this.clearKm();
    },
    toggleFilter() {
      this.isOpen = !this.isOpen;
    },
    changeMinPrice() {
      if (this.maxPrice - this.minPrice <= this.priceRange.step) {
        this.minPrice = document.getElementById('min-price').value = this.maxPrice - this.priceRange.step;
      }
    },
    changeMaxPrice() {
      if (this.maxPrice - this.minPrice <= this.priceRange.step) {
        this.maxPrice = document.getElementById('max-price').value = this.minPrice + this.priceRange.step;
      }
    },
    changeMinYear() {
      if (this.maxYear - this.minYear <= this.yearRange.step) {
        this.minYear = document.getElementById('min-year').value = this.maxYear - this.yearRange.step;
      }
    },
    changeMaxYear() {
      if (this.maxYear - this.minYear <= this.yearRange.step) {
        this.maxYear = document.getElementById('max-year').value = this.minYear + this.yearRange.step;
      }
    }
  },
  computed: {
    getMakes() {
      const array = [];
      for (let i = 0; i < this.cars.content.length; i++) {
        if (!array.includes(this.cars.content[i].make)) {
          array.push(this.cars.content[i].make);
        }
      }
      return array;
    },
    getModels() {
      const array = [];
      for (let i = 0; i < this.cars.content.length; i++) {
        if (this.searchMakes.length) {
          for (let j = 0; j < this.searchMakes.length; j++) {
            if (this.cars.content[i].make.includes(this.searchMakes[j])) {
              if (!array.includes(this.cars.content[i].model)) {
                array.push(this.cars.content[i].model)
              }
            }
          }
        }
        else {
          if (!array.includes(this.cars.content[i].model)) {
            array.push(this.cars.content[i].model)
          }
        }
      }
      return array;
    },
  },
  beforeMount() {
    this.cars.totalItems = this.cars.content.length;
    this.priceRange.max = Math.ceil(Math.max(...this.cars.content.map(car => car.price))/10000)*10000;
    this.priceRange.min = Math.floor(Math.min(...this.cars.content.map(car => car.price))/10000)*10000;
    this.priceSteps = (this.priceRange.max - this.priceRange.min) / this.priceRange.step;
    this.yearRange.max = Math.max(...this.cars.content.map(car => car.year));
    this.yearRange.min = Math.min(...this.cars.content.map(car => car.year));
    this.yearSteps = (this.yearRange.max - this.yearRange.min) / this.yearRange.step;
    this.kmRange.max = Math.ceil(Math.max(...this.cars.content.map(car => car.kilometers))/10000)*10000;
  },
  mounted() {
    window.onresize = () => {
      this.windowWidth = window.innerWidth
    }
  },
  watch: {
    searchMakes() {
      this.haveSearch = !!this.searchMakes.length;
    },
    searchModels() {
      this.haveSearch = !!this.searchModels.length;
    },
    checkedBody() {
      this.haveBody = !!this.checkedBody.length;
    },
    checkedTransmission() {
      this.haveTransmission = !!this.checkedTransmission.length;
    },
    minPrice() {
      if (this.minPrice !== this.priceRange.min) {
        this.defaultPrice = false;
      }
      else {
        this.defaultPrice = this.maxPrice === this.priceRange.max;
      }
    },
    maxPrice() {
      if (this.maxPrice !== this.priceRange.max) {
        this.defaultPrice = false;
      }
      else {
        this.defaultPrice = this.minPrice === this.priceRange.min;
      }
    },
    minYear() {
      if (this.minYear !== this.yearRange.min) {
        this.defaultYear = false
      }
      else {
        this.defaultYear = this.maxYear === this.yearRange.max;
      }
    },
    maxYear() {
      if (this.maxYear !== this.yearRange.max) {
        this.defaultYear = false
      }
      else {
        this.defaultYear = this.minYear === this.yearRange.min;
      }
    },
    currentKm() {
      this.defaultKm = this.currentKm === this.kmRange.max;
    }
  }
}
</script>

<style scoped>
.inventory {
  margin-top: 40px;
  display: grid;
  grid-template-columns: 25% calc(75% - 40px);
  grid-template-rows: 45px max-content;
  gap: 20px 40px;
  grid-template-areas:
    "filters search"
    "filters catalog";
}
.search {
  grid-area: search;
  display: flex;
  justify-content: space-between;
}
.filters { grid-area: filters; }
.catalog { grid-area: catalog; }

.search__filter {
  font-weight: 400;
  font-size: 16px;
  line-height: 29px;
  letter-spacing: 0.02em;
  color: #41456B;
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
}
.search__wrapper {
  display: flex;
  align-items: center;
  gap: 20px;
}

.sort {
  display: flex;
  gap: 20px;
  align-items: center;
}
.filters__top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 21px;
}
.filters__title {
  padding: 10px 0;
  font-weight: 600;
  font-size: 20px;
  line-height: 25px;
  color: #41456B;
}
.filters__clear {
  font-weight: 500;
  font-size: 16px;
  line-height: 25px;
  color: #7481FF;
  cursor: pointer;
}
.filters__wrapper {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 40px;
}
.filter-option {
  font-weight: 600;
  font-size: 16px;
  line-height: 14px;
  color: #41456B;
}
.filter-numbers {
  display: flex;
  justify-content: space-between;
}
.filter-number {
  font-weight: 600;
  font-size: 20px;
  line-height: 25px;
  color: #606276;
}
.filter-number span {
  color: #41456B;
}
.range-slider {
  position: relative;
  width: 100%;
  height: 15px;
}

.tag {
  padding: 10px;
  background: rgba(116, 129, 255, 0.2);
  border-radius: 2px;
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
}
.tag img {
  width: 9px;
}

@media screen and (max-width: 1040px) {
  .inventory {
    position: relative;
    grid-template-columns: 100%;
    grid-template-rows: max-content 45px max-content;
    margin-top: 20px;
    gap: 20px 0;
    grid-template-areas:
    "filters"
    "search"
    "catalog";
  }
  .filters {
    position: absolute;
    left: -24px;
    z-index: 10;
    background: #FFFFFF;
    width: calc(100% + 48px);
    max-height: 0;
    transition: max-height 0.3s;
    overflow: hidden;
  }
  .filters__container {
    margin: 10px auto 40px;
    max-width: 420px;
  }
  .filters.opened {
    overflow-y: scroll;
    max-height: unset;
  }
  .filters__close {
    position: absolute;
    left: 24px;
    top: 24px;
    cursor: pointer;
  }
}
@media screen and (max-width: 760px) {
  .search {
    gap: 10px;
    flex-wrap: wrap;
  }
  .search__filter {
    margin-right: 10px;
  }
}
@media screen and (max-width: 680px) {
  .inventory {
    grid-template-rows: 0 100px max-content;
  }
  .sort, .search__wrapper-content {
    width: 100%;
  }
  .search__filter {
    margin: 0;
  }
  .search__wrapper {
    width: 85%;
  }
  .filters__title {
    margin-left: 40px;
  }
  .filters__container {
    margin: 10px 20px 40px;
    max-width: unset;
  }
}
</style>

<style>
.inventory .accordion-wrapper {
  padding: 10px 20px;
}
.inventory .accordion {
  font-weight: 500;
  font-size: 16px;
  line-height: 25px;
  color: #41456B;
}
.inventory .accordion::after {
  top: unset;
  transform: rotate(45deg) translateY(-50%);
}
.inventory .accordion__content {
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
}
.inventory .expanded .accordion__content {
  padding: 10px 0;
}

</style>