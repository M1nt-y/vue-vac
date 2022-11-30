<template>
  <div class="select-wrapper">
    <div class="select" :class="{'expanded': isExpanded}">
      <div class="selected" @click="expandSelect">{{ selected }}</div>
      <div class="options-wrapper">
        <div
            class="option"
            v-for="option in options"
            :key="option.value"
            @click="selectOption(option)"
        >
          {{ option.name }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TheSelect",
  data() {
    return {
      isExpanded: false,
      selected: 'Recommendations',
    }
  },
  props: {
    optionValue: {
      type: String
    },
    options: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    expandSelect() {
      this.isExpanded = !this.isExpanded;
    },
    selectOption(option) {
      this.selected = option.name;
      this.isExpanded = !this.isExpanded;
      this.$emit('select', option)
    },
  }
}
</script>

<style scoped>
.select-wrapper {
  z-index: 10;
  position: relative;
  height: 45px;
  width: 240px;
}
.select {
  cursor: pointer;
  width: 100%;
  padding: 9px 20px;
  border: 1px solid #D7D7D7;
  position: absolute;
  font-weight: 500;
  font-size: 16px;
  line-height: 25px;
  color: #41456B;
  background: #FFFFFF;
}
.selected {
  position: relative;
}
.selected::after {
  position: absolute;
  top: 4px;
  right: 2px;
  content: '';
  width: 8px;
  height: 8px;
  border-right: 2px solid #41456B;
  border-bottom: 2px solid #41456B;
  transform: rotate(45deg) ;
  transition: .2s ease-in-out;
}
.options-wrapper {
  display: flex;
  flex-direction: column;
  gap: 5px;
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.4s ease-out;
}

.expanded .selected {
  margin-bottom: 10px;
}
.expanded .selected::after {
  transform: rotate(-135deg);
}
.expanded .options-wrapper {
  max-height: unset;
  transition: max-height 0.4s ease-out;
}
@media screen and (max-width: 680px) {
  .select-wrapper {
    width: 100%;
  }
}
</style>