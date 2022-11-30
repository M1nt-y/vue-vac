<template>
  <button class="button">{{ btnContent }}</button>
</template>

<script>
export default {
  name: "BaseButton",
  data() {
    return {
      color: {
        type: String,
        default: '#7481FF',
      },
      hoverColor: {
        type: String,
        default: '#6270FF',
      },
      background: {
        type: String,
        default: '#FFFFFF',
      },
      hoverBackground: {
        type: String,
        default: '#FFFFFF',
      },
      border: {
        type: String,
        default: '#7481FF',
      },
      hoverBorder: {
        type: String,
        default: '#6270FF',
      }
    }
  },
  props: {
    btnContent: {
      type: String,
      default: 'Request a car',
    }
  },
  methods: {
    changeBtn() {
      if (this.$attrs.solidBlueBtn !== undefined) {
        this.color = this.$attrs.solidBlueBtn.btnColor;
        this.hoverColor = this.$attrs.solidBlueBtn.hoverColor;
        this.background = this.$attrs.solidBlueBtn.btnBackground;
        this.hoverBackground = this.$attrs.solidBlueBtn.hoverBackground;
        this.border = this.$attrs.solidBlueBtn.btnBorder;
        this.hoverBorder = this.$attrs.solidBlueBtn.hoverBorder;
      }
      else {
        this.color = '#7481FF';
        this.hoverColor = '#6270FF';
        this.background = '#FFFFFF';
        this.hoverBackground = '#FFFFFF';
        this.border = '#7481FF';
        this.hoverBorder = '#6270FF';
      }
    }
  },
  created() {
    this.changeBtn();
  },
  watch: {
    '$attrs.solidBlueBtn': function() {
      this.changeBtn();
    }
  }
}
</script>

<style scoped>
.button {
  cursor: pointer;
  outline: none;
  font-family: 'Gilroy', sans-serif;
  font-weight: 700;
  font-size: 16px;
  line-height: 14px;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  text-align: center;
  padding: 15px 17px;
  transition: all 0.3s ease-in;
  border-radius: 2px;
  border: 1px solid v-bind(border);
  background: v-bind(background);
  color: v-bind(color);
}
.button:hover {
  color: v-bind(hoverColor);
  background: v-bind(hoverBackground);
  border: 1px solid v-bind(hoverBorder);
}

.button:disabled,
.button[disabled] {
  opacity: 0.5;
}
@media screen and (max-width: 564px){
  .button {
    font-weight: 700;
    font-size: 14px;
    padding: 10px;
  }
}
</style>