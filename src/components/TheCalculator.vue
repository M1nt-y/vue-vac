<template>
  <div class="container">
    <div class="calculator-head">
      <h2 class="title">
        {{title}}
      </h2>
      <p class="description" v-if="config.hasDescription">
        {{description}}
      </p>
    </div>
    <div class="calculator-body">
      <div class="calculator calculator-settings">
        <div class="calculator__buttons">
          <base-button :btnContent="btnPoor" v-bind="{ ...isPoor && { solidBlueBtn } }" @click="setPoor">Poor</base-button>
          <base-button :btnContent="btnAverage" v-bind="{ ...isAverage && { solidBlueBtn } }" @click="setAverage">Average</base-button>
          <base-button :btnContent="btnGood" v-bind="{ ...isGood && { solidBlueBtn } }" @click="setGood">Rich</base-button>
        </div>
        <div class="calculator__content">
          <div class="calculator__data">
            <p class="calculator__data-text">Loan Amount</p>
            <h4 class="calculator__data-number">$ {{loanAmount}}</h4>
          </div>
          <div class="range-slider" v-if="!config.isFixed">
            <range-slider :range="amount" @changeValue="setAmount"/>
          </div>
        </div>
        <div class="calculator__content">
          <div class="calculator__data">
            <p class="calculator__data-text">Loan Amount</p>
            <h4 class="calculator__data-number">{{loanDuration}}<span> Month</span></h4>
          </div>
          <div class="range-slider">
            <range-slider :range="duration" @changeValue="setDuration"/>
          </div>
        </div>
        <div class="calculator__amount" v-if="windowWidth<840">
          <div class="calculator__amount-prices">
            <div class="calculator__amount-price--blue">
              <p class="calculator-amount__name">Bi-Weekly Payment</p>
              <h2>$ {{biWeeklyPayment}}</h2>
            </div>
            <div class="calculator__amount-price">
              <div>
                <p class="calculator-amount__name">Monthly Payment</p>
                <h4>$ {{monthlyPayment}}</h4>
              </div>
              <div>
                <p class="calculator-amount__name">Weekly Payment</p>
                <h4>$ {{weeklyPayment}}</h4>
              </div>
            </div>
          </div>
          <router-link :to="`/request/${quizId}`" v-if="$route.name !== 'Quiz'" >
            <base-button v-bind="{ ...isBlue && { solidBlueBtn } }" v-if="$route.name !== 'Car'" />
            <base-button v-bind="{ ...isBlue && { solidBlueBtn } }" v-else :btnContent="btnApply" />
          </router-link>
        </div>
      </div>
      <div class="calculator calculator-amount" v-if="windowWidth>=840">
        <div>
          <p class="calculator-amount__name">Bi-Weekly Payment</p>
          <h2>$ {{biWeeklyPayment}}</h2>
        </div>
        <div>
          <p class="calculator-amount__name">Monthly Payment</p>
          <h4>$ {{monthlyPayment}}</h4>
        </div>
        <div>
          <p class="calculator-amount__name">Weekly Payment</p>
          <h4>$ {{weeklyPayment}}</h4>
        </div>
        <router-link :to="`/request/${quizId}`" v-if="$route.name !== 'Quiz'" >
          <base-button v-bind="{ ...isBlue && { solidBlueBtn } }" v-if="$route.name !== 'Car'" />
          <base-button v-bind="{ ...isBlue && { solidBlueBtn } }" v-else :btnContent="btnApply" />
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TheCalculator",
  data() {
    return {
      solidBlueBtn: {
        btnColor: '#FFFFFF',
        btnBackground: '#7481FF',
        btnBorder: 'transparent',
        hoverBorder: 'transparent',
        hoverColor: '#FFFFFF',
        hoverBackground: '#6270FF'
      },
      btnPoor: 'Poor',
      btnAverage: 'Average',
      btnGood: 'Good',
      btnApply: 'Apply for this vehicle',
      isDefault: true,
      amount: {
        min: 10000,
        max: 0,
        step: 1000,
      },
      duration: {
        min: 12,
        max: 120,
        step: 2,
      },
      biWeeklyPayment: 0,
      monthlyPayment: 0,
      weeklyPayment: 0,
      loanAmount: 10000,
      loanDuration: 12,
      isPoor: false,
      isAverage: false,
      isGood: false,
      isBlue: true,
      title: 'Let’s figure out how much you can afford',
      description: 'Before you start shopping, let’s figure out how much you can afford. Move the sliders to see how the loan duration and the total loan amount affect your monthly payments.',
      windowWidth: window.innerWidth,
    }
  },
  props: {
    config: {
      hasDescription: true,
      isFixed: false,
    },
    name: {
      type: String,
      default: ''
    },
    price: {
      type: Number,
      default: 0
    },
    quizId: {
      type: String || Number,
      default: 'default'
    },
  },
  methods: {
    setLimit() {
      if(this.isPoor) {
        this.amount.max = this.duration.max * 1300;
      }
      else if (this.isAverage) {
        this.amount.max = this.duration.max * 1700;
      }
      else {
        this.amount.max = this.duration.max * 2300;
      }
    },
    setPoor() {
      this.isAverage = false;
      this.isGood = false;
      if (!this.isPoor) {
        this.isPoor = true;
        this.setLimit();
      }
    },
    setAverage() {
      this.isPoor = false;
      this.isGood = false;
      if (!this.isAverage) {
        this.isAverage = true;
        this.setLimit();
      }
    },
    setGood() {
      this.isPoor = false;
      this.isAverage = false;
      if (!this.isGood) {
        this.isGood = true;
        this.setLimit();
      }
    },
    setAmount(value) {
      this.loanAmount = value;
      this.calculatePayment();
    },
    setDuration(value) {
      this.loanDuration = value;
      this.calculatePayment();
    },
    calculatePayment() {
      this.monthlyPayment = Math.round(this.loanAmount / this.loanDuration);
      this.weeklyPayment = Math.round(this.monthlyPayment / 4);
      this.biWeeklyPayment = Math.round(this.weeklyPayment * 2) + 1;
    }
  },
  beforeMount() {
    this.setPoor();
    if (this.name !== '') {
      this.title = this.name;
    }
    if (this.price !== 0) {
      this.loanAmount = this.price;
    }
  },
  mounted() {
    window.onresize = () => {
      this.windowWidth = window.innerWidth
    }
  },
}
</script>

<style scoped>
.container {
  padding: 40px 0;
  display: flex;
  flex-direction: column;
  gap: 60px;
}
.calculator-head {
  display: flex;
  justify-content: space-between;
  gap: 100px;
}
.title {
  font-size: 45px;
  line-height: 63px;
  color: #41456B;
  width: 45%;
}
.description {
  margin-top: 10px;
  font-weight: 400;
  font-size: 16px;
  line-height: 29px;
  letter-spacing: 0.02em;
  color: #606276;
  width: 50%;
}
.calculator-body {
  display: flex;
  justify-content: space-between;
  gap: 30px;
}
.calculator {
  padding: 60px;
  display: flex;
  flex-direction: column;
  box-shadow: 0 20px 25px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
}
.calculator-settings {
  max-width: 800px;
  width: 100%;
  gap: 60px;
}
.calculator-amount {
  max-width: 370px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
}
.calculator__data {
  display: flex;
  justify-content: space-between;
  color: #41456B;
}
.calculator__data-text {
  font-weight: 600;
  font-size: 20px;
  line-height: 25px;
  color: #41456B;
}
.calculator__data-number {
  font-size: 25px;
  line-height: 35px;
  letter-spacing: 0.02em;
}
.calculator__data-number span {
  /*font-weight: 700;*/
  font-size: 16px;
  line-height: 14px;
  text-transform: uppercase;
  color: #606276;
}
.calculator__content {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
.calculator-amount div {
  margin-bottom: 10px;
}
.calculator-amount .button {
  margin-top: 10px;
}
.calculator-amount h2 {
  font-size: 45px;
  line-height: 63px;
  color: #7481FF;
}
.calculator-amount h4 {
  font-size: 25px;
  line-height: 35px;
  letter-spacing: 0.02em;
  color: #41456B;
}
.calculator-amount__name {
  font-weight: 400;
  font-size: 16px;
  line-height: 29px;
  letter-spacing: 0.02em;
  color: #606276;
}

.calculator__amount {
  display: flex;
  flex-direction: column;
}
.calculator__amount-prices {
  display: flex;
  justify-content: space-between;
}
.calculator__amount-price {
  display: flex;
  gap: 40px;
}
.calculator__amount-price h4 {
  font-size: 25px;
  line-height: 35px;
  letter-spacing: 0.02em;
  color: #41456B;
}

.calculator__amount-price--blue h2 {
  font-size: 45px;
  line-height: 63px;
  color: #7481FF;
}

.range-slider {
  position: relative;
  width: 100%;
  height: 29px;
}

@media screen and (max-width: 840px) {
  .description {
    width: 42%;
  }
  .calculator {
    padding: 40px;
  }
  .calculator-settings, .calculator__amount {
    gap: 40px;
  }
}
@media screen and (max-width: 600px) {
  .calculator-head, .calculator__amount-prices {
    flex-direction: column;
    gap: 10px;
  }
  .title, .description {
    width: 100%;
  }
}
@media screen and (max-width: 425px) {
  .container {
    padding: 30px 0;
    gap: 30px;
  }
  .title {
    font-size: 30px;
    line-height: 42px;
  }
  .calculator {
    padding: 20px;
  }
  .calculator__data-text {
    font-size: 18px;
    line-height: 25px;
  }
  .calculator__data-number {
    font-size: 20px;
    line-height: 28px;
  }
  .calculator__amount-price--blue h2 {
    font-size: 35px;
    line-height: 49px;
  }
  .calculator__amount-price {
    gap: 15px;
  }
  .calculator__amount-price h4 {
    font-size: 20px;
    line-height: 28px;
  }
}

</style>