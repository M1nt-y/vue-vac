<template>
  <div class="accordion-wrapper" :class="{'expanded': isExpanded}" >
    <button class="accordion" @click="expandAccordion"><p>{{ title }}</p></button>
    <div class="accordion__content" v-if="$route.name!=='Inventory'">{{ body }}</div>
    <div class="accordion__content" v-else><slot /></div>
    <div class="accordion__tags" v-if="$slots.tags"><slot name="tags"></slot></div>
  </div>
</template>

<script>

export default {
  name: "TheAccordion",
  data() {
    return {
      isExpanded: false,
    }
  },
  props: {
    title: {
      type: String,
      default: ''
    },
    body: {
      type: String,
      default: ''
    },
  },
  methods: {
    expandAccordion() {
      this.isExpanded = !this.isExpanded;
    }
  },
}
</script>

<style scoped>
.accordion-wrapper {
  position: relative;
  padding: 20px 30px;
  border: 1px solid #D7D7D7;
}
.accordion {
  width: 100%;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: left;
  cursor: pointer;
  background: none;
  border: none;
  outline: none;
  transition: 0.4s;
  font-weight: 600;
  font-size: 20px;
  line-height: 25px;
  color: #41456B;
}
.accordion p {
  margin-right: 25px;
}
.accordion::after {
  position: absolute;
  top: 45%;
  right: 0;
  content: '';
  width: 8px;
  height: 8px;
  border-right: 2px solid #41456B;
  border-bottom: 2px solid #41456B;
  transform: rotate(45deg) translateX(-45%);
  transition: .2s ease-in-out;
}
.expanded .accordion {
  margin-bottom: 10px;
}
.expanded .accordion::after {
  transform: rotate(-135deg);
}
.accordion__content {
  width: 92%;
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.2s ease-out;
  font-weight: 400;
  font-size: 16px;
  line-height: 29px;
  letter-spacing: 0.02em;
  color: #606276;
}
.expanded .accordion__content {
  max-height: unset;
}

.accordion__tags {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  font-weight: 700;
  font-size: 16px;
  line-height: 14px;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  color: #41456B;
}
.not-empty .accordion__tags {
  padding: 20px 0 10px;
}
@media screen and (max-width: 425px) {
  .accordion-wrapper {
    padding: 20px;
    border: 1px solid #D7D7D7;
  }
  .accordion {
    font-size: 18px;
    line-height: 25px;
  }
  .accordion p {
    margin-right: 25px;
  }
  .accordion__content {
    width: 100%;
  }
}
</style>