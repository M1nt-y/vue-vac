<template>
  <div class="search-options" v-if="isSearching">
    <div class="search-option" v-for="item in searchMatched" :key="item" @click="selectOption(item)">
      {{ item }}
    </div>
  </div>
</template>

<script>
export default {
  name: "TheSearch",
  data() {
    return {
      matchedItems: []
    }
  },
  props: {
    items: {
      type: Array,
      required: false
    },
    search: {
      type: String,
      default: ''
    },
    isSearching: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    selectOption(item) {
      if (!this.matchedItems.includes(item)){
        this.matchedItems.push(item);
      }
      this.$emit('selectMake', this.matchedItems)
    },
  },
  computed: {
    searchMatched() {
      let temp = this.items;
      return temp.filter(item => item.toUpperCase().includes(this.search.toUpperCase()))
    }
  }
}
</script>

<style scoped>
.search-options {
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 20px;
  background: #FFFFFF;
  border: 1px solid #D7D7D7;
  border-top: none;
  border-radius: 2px;
  position: relative;
  top: -10px;
  overflow-y: scroll;
  max-height: 155px;
}
.search-option {
  font-weight: 600;
  font-size: 16px;
  line-height: 14px;
  color: #41456B;
  cursor: pointer;
}
</style>