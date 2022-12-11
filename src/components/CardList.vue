<template>
  <div>
    <the-pagination
        :totalPages="totalPages"
        :totalItems="content.length"
        :itemsPerPage="itemsPerPage"
        :items="searchingAll"
    >
      <template #data="{paginatedItems}">
      <div class="card-list" :class="{ 'card-list--news': cardType.isNews, 'card-list--video': cardType.isVideo, 'card-list--car': cardType.isCar }">
        <div class="card-wrapper" v-for="card in paginatedItems" :key="card.id">
          <the-card :content="card" :cardType="cardType" />
        </div>
      </div>
      </template>
    </the-pagination>
  </div>
</template>

<script>

import TheCard from "@/components/UI/TheCard";
import ThePagination from "@/components/UI/ThePagination";

export default {
  name: "CardList",
  components: {ThePagination, TheCard},
  data() {
    return {
      totalPages: Number,
      cardType: {
        isVideo: false,
        isNews: false,
        isCar: false
      },
    }
  },
  props: {
    totalItems: {
      type: Number,
      default: 1,
      required: false
    },
    itemsPerPage: {
      type: Number,
      default: 1,
      required: false
    },
    card: {
      type: String,
      default: '',
      required: true
    },
    content: {
      type: Array,
      required: true
    },
    pagination: {
      type: Boolean,
      default: true
    },
    sort: {
      type: String,
      required: false
    },
    searchInput: {
      type: String,
      default: '',
    },
    searchMake: {
      type: Array,
      required: false
    },
    searchModel: {
      type: Array,
      required: false
    },
    filterBody: {
      type: Array,
      required: false
    },
    filterTransmission: {
      type: Array,
      required: false
    },
    priceFilter: {
      type: Array,
      required: false
    },
    yearFilter: {
      type: Array,
      required: false
    },
    kmLimit: {
      type: Number,
      required: false
    }
  },
  beforeMount() {
    this.totalPages = Math.ceil(this.totalItems / this.itemsPerPage);
    if (this.card === 'video') {
      this.cardType.isVideo = true;
    }
    else if (this.card === 'news') {
      this.cardType.isNews = true;
    }
    else if (this.card === 'car') {
      this.cardType.isCar = true;
    }
  },
  computed: {
    sortingContent() {
      let temp = this.content;
      if (this.sort === 'idAsc') {
        temp.sort((a,b) => {
          return parseFloat(a.id) - parseFloat(b.id);
        });
      }
      else if (this.sort === 'yearDesc') {
        temp.sort((a,b) => {
          return parseFloat(b.year) - parseFloat(a.year);
        });
      }
      else if (this.sort === 'priceAsc') {
        temp.sort((a,b) => {
          return parseFloat(a.price) - parseFloat(b.price);
        });
      }
      else if (this.sort === 'priceDesc') {
        temp.sort((a,b) => {
          return parseFloat(b.price) - parseFloat(a.price);
        });
      }
      return temp;
    },
    searchingMake() {
      if (!this.cardType.isCar) {
        return this.sortingContent;
      }
      if (!this.searchMake.length) {
        return this.sortingContent;
      }
      return this.sortingContent.filter(item => this.searchMake.includes(item.make));
    },
    searchingModel() {
      if (!this.cardType.isCar) {
        return this.searchingMake;
      }
      if (!this.searchModel.length) {
        return this.searchingMake;
      }
      return this.searchingMake.filter(item => this.searchModel.includes(item.model));
    },
    filteringBody() {
      if (!this.cardType.isCar) {
        return this.searchingModel;
      }
      if (!this.filterBody.length) {
        return this.searchingModel;
      }
      return this.searchingModel.filter(item => this.filterBody.includes(item.bodyType));
    },
    filteringTransmission() {
      if (!this.cardType.isCar) {
        return this.filteringBody;
      }
      if (!this.filterTransmission.length) {
        return this.filteringBody;
      }
      return this.filteringBody.filter(item => this.filterTransmission.includes(item.transmission));
    },
    filteringPrice() {
      if (!this.cardType.isCar) {
        return this.filteringTransmission;
      }
      return this.filteringTransmission.filter(item => (item.price >= this.priceFilter[0] && item.price <= this.priceFilter[1]));
    },
    filteringYear() {
      if (!this.cardType.isCar) {
        return this.filteringPrice;
      }
      return this.filteringPrice.filter(item => (item.year >= this.yearFilter[0] && item.year <= this.yearFilter[1]));
    },
    filteringKm() {
      if (!this.cardType.isCar) {
        return this.filteringYear;
      }
      return this.filteringYear.filter(item => (item.kilometers >= 0 && item.kilometers <= this.kmLimit));
    },
    searchingAll() {

      if (!this.cardType.isCar) {
        return this.filteringKm;
      }
      return this.filteringKm.filter(item => (item.make + ' ' + item.model).toLowerCase().includes(this.searchInput.toLowerCase()));
    }
  },
  watch: {
    itemsPerPage() {
      this.totalPages = Math.ceil(this.totalItems / this.itemsPerPage);
    }
  }
}
</script>

<style scoped>

.card-list {
  display: flex;
  flex-wrap: wrap;
  margin: 40px 0;
  justify-content: flex-start;
}

.card-list--news .card-wrapper {
  width: 32%;
}
.card-list--video .card-wrapper {
  width: 47.5%;
}
.card-list--car .card-wrapper {
  width: calc(50% - 10px);
}

.card-list--video {
  justify-content: space-between;
  gap: 40px;
}
.card-list--news {
  gap: 20px;
}
.card-list--car {
  margin-top: 0;
  margin-bottom: 40px;
  gap: 20px;
}

@media screen and (max-width: 1047px) {
  .card-list {
    justify-content: space-between;
  }
  .card-list--news .card-wrapper {
    width: 48%;
  }
}
@media screen and (max-width: 847px) {
  .card-list--video .card-wrapper {
    width: 100%;
  }
}
@media screen and (max-width: 760px) {
  .card-list--car .card-wrapper {
    width: 100%;
  }
}
@media screen and (max-width: 547px) {
  .card-wrapper, .card-list--news .card-wrapper {
    width: 100%;
  }
}
</style>