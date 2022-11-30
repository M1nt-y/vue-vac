<template>
  <div class="checkbox-wrapper">
    <input
        type="checkbox"
        :id="name"
        :value="name"
        :checked="modelValue.includes(name)"
        @change="$event => onChange($event.target.value)"
        class="checkbox" />
    <label :for="name" class="label" >
      <img v-if="icon !== ''" :src="require(`@/assets/icons/${icon}`)" alt="">
      {{ name }}
    </label>
  </div>
</template>

<script>
export default {
  name: "TheCheckbox",
  props: {
    name: {
      type: String,
      required: true
    },
    icon: {
      type: String,
      default: ''
    },
    modelValue: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    onChange() {
      if (this.modelValue.includes(this.name)) this.$emit('update:modelValue', this.modelValue.filter(cv => cv !== this.name))
      else this.$emit('update:modelValue', this.modelValue.concat(this.name))
    }
  }
}
</script>

<style scoped>
.checkbox-wrapper {
  display: flex;
  gap: 10px;
}
.checkbox {
  display: none;
}
.label {
  cursor: pointer;
  position: relative;
  left: 30px;
  font-weight: 500;
  font-size: 16px;
  line-height: 25px;
  color: #41456B;
}
.label::before {
  content: '';
  position: absolute;
  left: -30px;
  height: 20px;
  width: 20px;
  border: 1px solid #D7D7D7;
  border-radius: 2px;
}
.label::after {
  content: '';
  position: absolute;
  left: -29px;
  background-image: url("@/assets/icons/checked-icon.svg");
  background-repeat: no-repeat;
  background-position: center;
  height: 20px;
  width: 20px;
  opacity: 0;
}
.checkbox:checked + .label::after {
  opacity: 1;
}
</style>