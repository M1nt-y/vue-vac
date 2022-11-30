<template>
  <div>
    <slot name="data" :paginatedItems="paginatedItems" />
    <div class="pagination" v-if="items.length > itemsPerPage ">
      <div v-for="(page,index) in totalPages" :key="index"
           class="pagination-circle"
           :class="{ 'current-page': currentPage === page }"
           @click="changePage(page)">
      </div>
    </div>
    <div class="empty-card" v-else-if="items.length === 0">
      <img src="@/assets/images/404-icon.png" alt="">
      <div>
        <p class="section-text--bold">Unfortunately there are no matches for your query.</p>
        <p class="section-text">Try using other filter settings or request a car of your choice.</p>
      </div>
      <router-link to=""><p class="card-link">Request a car</p></router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "ThePagination",
  data() {
    return {
      currentPage: 1,
      pagination: {
        type: Boolean,
        default: true,
      },
    }
  },
  props: {
    totalPages: {
      type: Number,
      default: 1,
    },
    totalItems: {
      type: Number,
      default: 1,
    },
    itemsPerPage: Number,
    items: {
      type: Array,
      required: true
    }
  },
  methods: {
    changePage(page) {
      this.currentPage = page;
    }
  },
  computed: {
    paginatedItems() {
      let end = this.itemsPerPage * this.currentPage;
      return this.items.slice(end - this.itemsPerPage, end);
    }
  }
}
</script>

<style scoped>
.pagination {
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-bottom: 40px;
}
.pagination-circle {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #606276;
  opacity: 0.3;
  transition: opacity 0.4s;
  cursor: pointer;
}
.current-page {
  opacity: 1;
}
.empty-card {
  width: 100%;
  padding: 60px;
  background: #FFFFFF;
  box-shadow: 0 20px 25px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
}
.empty-card div {
  margin: 10px 0;
}
.section-text--bold {
  font-weight: 600;
  font-size: 20px;
  line-height: 25px;
  color: #41456B;
}
.card-link {
  font-weight: 700;
  font-size: 16px;
  line-height: 14px;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  color: #7481FF;
}
</style>