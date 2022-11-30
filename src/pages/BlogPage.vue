<template>
  <div>
    <head-title>Our blog</head-title>
    <div class="container">
      <card-list v-bind="news" />
    </div>
  </div>
</template>

<script>
import CardList from "@/components/CardList";
import HeadTitle from "@/components/HeadTitle";
export default {
  name: "BlogPage",
  components: {HeadTitle, CardList},
  data() {
    return {
      news: {
        totalItems: Number,
        itemsPerPage: 9,
        card: 'news',
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
          {id: 10, image: 'news-1.jpg', date: '10 May, 2020', name: 'How to save on buying a car? Why is it better to buy from us',},
          {id: 11, image: 'news-2.jpg', date: '10 May, 2020', name: 'How fast can you order a car in Canada?',},
          {id: 12, image: 'news-3.jpg', date: '10 May, 2020', name: 'How to save on buying a car? Why is it better to buy from us',},
          {id: 13, image: 'news-5.jpg', date: '10 May, 2020', name: 'How fast can you order a car in Canada?',},
          {id: 14, image: 'news-7.jpg', date: '10 May, 2020', name: 'How to save on buying a car? Why is it better to buy from us',},
          {id: 15, image: 'news-6.jpg', date: '10 May, 2020', name: 'How to save on buying a car? Why is it better to buy from us',},
          {id: 16, image: 'news-4.jpg', date: '10 May, 2020', name: 'How fast can you order a car in Canada?',},
          {id: 17, image: 'news-8.jpg', date: '10 May, 2020', name: 'How to save on buying a car? Why is it better to buy from us',},
          {id: 18, image: 'news-9.jpg', date: '10 May, 2020', name: 'How fast can you order a car in Canada?',},
          {id: 19, image: 'news-9.jpg', date: '10 May, 2020', name: 'How to save on buying a car? Why is it better to buy from us',},
          {id: 20, image: 'news-5.jpg', date: '10 May, 2020', name: 'How fast can you order a car in Canada?',},
          {id: 21, image: 'news-3.jpg', date: '10 May, 2020', name: 'How to save on buying a car? Why is it better to buy from us',},
          {id: 22, image: 'news-1.jpg', date: '10 May, 2020', name: 'How fast can you order a car in Canada?',},
          {id: 23, image: 'news-2.jpg', date: '10 May, 2020', name: 'How to save on buying a car? Why is it better to buy from us',},
          {id: 24, image: 'news-1.jpg', date: '10 May, 2020', name: 'How to save on buying a car? Why is it better to buy from us',},
          {id: 25, image: 'news-2.jpg', date: '10 May, 2020', name: 'How fast can you order a car in Canada?',},
          {id: 26, image: 'news-3.jpg', date: '10 May, 2020', name: 'How to save on buying a car? Why is it better to buy from us',},
          {id: 27, image: 'news-5.jpg', date: '10 May, 2020', name: 'How fast can you order a car in Canada?',},
          {id: 28, image: 'news-7.jpg', date: '10 May, 2020', name: 'How to save on buying a car? Why is it better to buy from us',},
          {id: 29, image: 'news-6.jpg', date: '10 May, 2020', name: 'How to save on buying a car? Why is it better to buy from us',},
          {id: 30, image: 'news-4.jpg', date: '10 May, 2020', name: 'How fast can you order a car in Canada?',},
        ]
      },
      windowWidth: window.innerWidth,
    }
  },
  beforeMount() {
    this.news.totalItems = this.news.content.length;
    if (this.windowWidth < 1048) {
      this.news.itemsPerPage = 8;
    }
    if (this.windowWidth < 548) {
      this.news.itemsPerPage = 6;
    }
  },
  mounted() {
    window.onresize = () => {
      this.windowWidth = window.innerWidth
    }
  },
  watch: {
    windowWidth() {
      if (this.windowWidth >= 1048) {
        this.news.itemsPerPage = 9;
      }
      if (this.windowWidth < 1048) {
        this.news.itemsPerPage = 8;
      }
      if (this.windowWidth < 548) {
        this.news.itemsPerPage = 6;
      }
    }
  }
}
</script>

<style scoped>

</style>