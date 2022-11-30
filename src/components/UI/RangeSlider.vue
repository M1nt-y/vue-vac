<template>
  <input
      class="slider"
      type="range"
      :min="this.range.min"
      :max="this.range.max"
      :step="this.range.step"
      v-model.number="rangeValue"
  >
</template>

<script>
export default {
  name: "RangeSlider",
  props: {
    isMin: {
      type: Boolean,
      default: false
    },
    range: {
      min: Number,
      max: Number,
      step: Number,
      required: true
    },
  },
  data() {
    return {
      rangeValue: 0,
    }
  },
  beforeMount() {
    if (this.isMin === true) {
      this.rangeValue = this.range.min;
    }
    else {
      this.rangeValue = this.range.max;
    }
  },
  watch: {
    'range.max'() {
      if (this.rangeValue > this.range.max) {
        this.rangeValue = this.range.max;
      }
    },
    rangeValue() {
      this.$emit('changeValue', this.rangeValue);
    }
  }
}
</script>

<style scoped>
.slider {
  position: absolute;
  /*top: 50%;*/
  /*transform: translateY(-50%);*/
  -webkit-appearance: none;
  width: 100%;
  background: #D7D7D7;
  border-radius: 2px;
  height: 8px;
}
.slider::-webkit-slider-thumb {
  position: relative;
  -webkit-appearance: none;
  border: 1px solid #FFFFFF;
  height: 18px;
  width: 18px;
  border-radius: 2px;
  background: #7481FF;
  cursor: pointer;
  z-index: 2;
}
.slider::-moz-range-thumb {
  position: relative;
  border: 1px solid #FFFFFF;
  height: 18px;
  width: 18px;
  border-radius: 2px;
  background: #7481FF;
  cursor: pointer;
  z-index: 2;
}
.slider::-ms-thumb {
  position: relative;
  border: 1px solid #FFFFFF;
  height: 18px;
  width: 18px;
  border-radius: 2px;
  background: #7481FF;
  cursor: pointer;
  z-index: 2;
}

</style>