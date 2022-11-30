<template>
  <div>
    <div class="container">
      <div class="quiz">
        <div class="quiz__car" v-if="id !== 'default'">
          <the-card :content="content[id-1]" :cardType="cardType" />
        </div>
        <div class="quiz__content">
          <div class="quiz__content-progressbar" v-if="step !== 9">
            <div class="quiz__content-progress" />
          </div>
          <div class="quiz__content-head">
            <img class="quiz-img" src="@/assets/images/Success.png" alt="" v-if="step === 9">
            <h2 class="quiz-title">{{ stepContent[step].title }}</h2>
            <p class="quiz-text">{{ stepContent[step].text }}</p>
          </div>
          <div class="quiz__content-main">
            <div class="choices" v-if="step===0">
              <div class="choice" v-for="choice in stepContent[step].choices" :key="choice">
                <input class="choice__radio" type="radio" name="budget" :value="choice" :id="choice.toLowerCase()" v-model="budget" :checked="choice === budget">
                <label class="choice__label" :for="choice.toLowerCase()">{{ choice }}</label>
              </div>
            </div>
            <div class="choices" v-else-if="step===1">
              <div class="choice" v-for="choice in stepContent[step].choices" :key="choice">
                <input class="choice__radio" type="radio" name="employment" :value="choice" :id="choice.toLowerCase()" v-model="employment" :checked="choice === employment">
                <label class="choice__label" :for="choice.toLowerCase()">{{ choice }}</label>
              </div>
            </div>
            <div class="choices" v-else-if="step===2">
              <div class="choice" v-for="choice in stepContent[step].choices" :key="choice">
                <input class="choice__radio" type="checkbox" name="otherIncome" :value="choice" :id="choice.toLowerCase()" v-model="otherIncome" :checked="choice.includes(otherIncome[choice])">
                <label class="choice__label" :for="choice.toLowerCase()">{{ choice }}</label>
              </div>
            </div>
            <div class="choices" v-else-if="step===3">
              <div class="choice" v-for="choice in stepContent[step].choices" :key="choice">
                <input class="choice__radio" type="radio" name="currentlyWorking" :value="choice" :id="choice.toLowerCase()" v-model="currentlyWorking" :checked="choice === currentlyWorking">
                <label class="choice__label" :for="choice.toLowerCase()">{{ choice }}</label>
              </div>
            </div>
            <the-input v-else-if="step===4"
                       :isText="true"
                       :inputValue="receivingTime"
                       :placeholder="placeholders.time"
                       @onTyping="fillTime"
            />
            <div class="inputs" v-else-if="step===5" >
              <the-input
                  :isText="true"
                  :inputValue="receivingYears"
                  :placeholder="placeholders.years"
                  @onTyping="fillYears"
              />
              <the-input
                  :isText="true"
                  :inputValue="receivingMonths"
                  :placeholder="placeholders.months"
                  @onTyping="fillMonths"
              />
            </div>
            <div class="inputs" v-else-if="step===6" >
              <the-input
                  class = "input--full"
                  :isText="true"
                  :inputValue="inputCity"
                  :placeholder="placeholders.city"
                  @onTyping="fillCity"
              />
              <the-input
                  class = "input--full"
                  :isText="true"
                  :inputValue="inputAddress"
                  :placeholder="placeholders.address"
                  @onTyping="fillAddress"
              />
              <the-input
                  :isText="true"
                  :inputValue="inputProvince"
                  :placeholder="placeholders.province"
                  @onTyping="fillProvince"
              />
              <the-input
                  :isText="true"
                  :inputValue="inputCode"
                  :placeholder="placeholders.code"
                  @onTyping="fillCode"
              />
            </div>
            <div class="inputs" v-else-if="step===7" >
              <the-input
                  :isText="true"
                  :inputValue="inputYear"
                  :placeholder="placeholders.year"
                  @onTyping="fillYear"
              />
              <the-input
                  class = "input--month"
                  :isText="true"
                  :inputValue="inputMonth"
                  :placeholder="placeholders.month"
                  @onTyping="fillMonth"
              />
              <the-input
                  class = "input--day"
                  :isText="true"
                  :inputValue="inputDay"
                  :placeholder="placeholders.day"
                  @onTyping="fillDay"
              />
            </div>
            <div class="inputs" v-else-if="step===8" >
              <the-input
                  :isText="true"
                  :inputValue="inputName"
                  :placeholder="placeholders.name"
                  @onTyping="fillName"
              />
              <the-input
                  :isText="true"
                  :inputValue="inputSurname"
                  :placeholder="placeholders.surname"
                  @onTyping="fillSurname"
              />
              <the-input
                  class = "input--full"
                  :isText="true"
                  :inputValue="inputEmail"
                  :placeholder="placeholders.email"
                  @onTyping="fillEmail"
              />
              <the-input
                  class = "input--full"
                  :isText="true"
                  :inputValue="inputPhone"
                  :placeholder="placeholders.phone"
                  @onTyping="fillPhone"
              />
            </div>
            <div v-else>
              <h4 class="quiz-subtitle">Confirmation number:</h4>
              <the-input class="choice" :disabledValue="confirmationNumber" />
            </div>
          </div>
          <div class="quiz__content-buttons">
            <base-button v-bind="{ ...isBlue && { solidBlueBtn } }" :btnContent="btnContinue" @click="checkForm" v-if="step !== 9" />
            <router-link to="/"  v-else>
              <base-button v-bind="{ ...isBlue && { solidBlueBtn } }" :btnContent="btnMain" />
            </router-link>
            <div class="btn-back" @click="clearForm" v-if="step !== 0 && step !== 9">
              <svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 17L1 9L9 1" stroke="#606276" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              <p>Back</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "QuizPage",
  data() {
    return {
      id: '',
      cardType: {
        isCar: true
      },
      content: [
        {
          id: 1, make: 'Porsche', model: 'Panamera II Turbo S E-Hybrid',
          price: 150000, year: 2012,
          bodyType: 'Sedan', transmission: 'Manual', kilometers: 35000,
          images: ['car-1.jpg','car-1-1.jpg','car-1-2.jpg'],
          interior: ['car-1-3.jpg','car-1-4.jpg','car-1-5.jpg'],
        },
        {
          id: 2, make: 'Mitsubishi', model: 'Outlander III Restyling 3',
          price: 45750, year: 2018,
          bodyType: 'SUV', transmission: 'Automatic', kilometers: 42000,
          images: ['car-2.jpg','car-2-1.jpg'],
          interior: ['car-2-2.jpg','car-2-3.jpg'],
        },
        {
          id: 3, make: 'Ford', model: 'F150',
          price: 77240, year: 2021,
          bodyType: 'Truck', transmission: 'Manual', kilometers: 76000,
          images: ['car-3.jpg','car-3-1.jpg',],
          interior: ['car-3-2.jpg','car-3-3.jpg'],
        },
        {
          id: 4, make: 'Porsche', model: 'Panamera II Turbo S E-Hybrid',
          price: 101101, year: 2014,
          bodyType: 'Sedan', transmission: 'Manual', kilometers: 35000,
          images: ['car-1.jpg','car-1-1.jpg','car-1-2.jpg'],
          interior: ['car-1-3.jpg','car-1-4.jpg','car-1-5.jpg'],
        },
        {
          id: 5, make: 'Porsche', model: 'Panamera II Turbo S E-Hybrid',
          price: 99300, year: 2017,
          bodyType: 'Sedan', transmission: 'Manual', kilometers: 29900,
          images: ['car-1.jpg','car-1-1.jpg','car-1-2.jpg'],
          interior: ['car-1-3.jpg','car-1-4.jpg','car-1-5.jpg'],
        },
        {
          id: 6, make: 'Porsche', model: 'Panamera II Turbo S E-Hybrid',
          price: 74900, year: 2008,
          bodyType: 'Sedan', transmission: 'Manual', kilometers: 123456,
          images: ['car-1.jpg','car-1-1.jpg','car-1-2.jpg'],
          interior: ['car-1-3.jpg','car-1-4.jpg','car-1-5.jpg'],
        },
        {
          id: 7, make: 'Porsche', model: 'Panamera II Turbo S E-Hybrid',
          price: 224999, year: 2022,
          bodyType: 'Sedan', transmission: 'Manual', kilometers: 3700,
          images: ['car-1.jpg','car-1-1.jpg','car-1-2.jpg'],
          interior: ['car-1-3.jpg','car-1-4.jpg','car-1-5.jpg'],
        },
      ],
      solidBlueBtn: {
        btnColor: '#FFFFFF',
        btnBackground: '#7481FF',
        btnBorder: 'transparent',
        hoverBorder: 'transparent',
        hoverColor: '#FFFFFF',
        hoverBackground: '#6270FF'
      },
      isBlue: true,
      btnContinue: 'Continue',
      btnMain: 'Go to main page',
      step: 0,
      stepContent: [
        {
          title: 'What\'s your budget?',
          text: 'Find vehicle options that fit your budget.',
          choices: ['Under $250/Month', '$250-374/Month', '$374-500/Month', 'Over $500/Month']
        },
        {
          title: 'What\'s your employment status?',
          text: 'Your employment status will help determine the best vehicle and financing options for you.',
          choices: ['Employed', 'Self-Employed', 'Student', 'Retired / Pension', 'Other']
        },
        {
          title: 'How do you earn income?',
          text: 'Your employment status will help determine the best vehicle and financing options for you.',
          choices: ['Long-term disability', 'Spousal support / Alimony', 'Child support', 'Social assistance / Welfare', 'Maternity leave', 'Baby bonus / Child tax', 'Unemployed / EI', 'Other / Not listed']
        },
        {
          title: 'Are you currently working?',
          text: 'Your employment status will help determine the best vehicle and financing options for you.',
          choices: ['Yes', 'No']
        },
        {
          title: 'How long receiving?',
          text: 'Find vehicle options that fit your budget.'
        },
        {
          title: 'Enter your monthly income',
          text: 'Your income details help us make sure your vehicle payments are easy and affordable. Before taxes and deductions.'
        },
        {
          title: 'Where do you live?',
          text: 'Providing your location helps find the best deals near you.'
        },
        {
          title: 'When were you born?',
          text: ''
        },
        {
          title: 'Congratulations! Last step.',
          text: 'Get access to your vehicle and financing options by creating your account. There is no obligation to continue with financing if you change your mind.'
        },
        {
          title: 'Application successful!',
          text: 'Your response was successfully submitted. Thank you! Our team will reach out to you shortly.'
        },
      ],
      placeholders: {
        time: 'Time',
        years: 'Years',
        months: 'Months',
        address: 'Street address',
        city: 'City',
        province: 'Province',
        code: 'Postal code',
        year: 'Year',
        month: 'Month',
        day: 'Day',
        name: 'First name',
        surname: 'Last name',
        email: 'Email',
        phone: 'Phone number'
      },
      budget: '',
      employment: '',
      otherIncome: [],
      currentlyWorking: '',
      receivingTime: '',
      receivingYears: '',
      receivingMonths: '',
      inputCity: '',
      inputAddress: '',
      inputProvince: '',
      inputCode: '',
      inputYear: '',
      inputMonth: '',
      inputDay: '',
      inputName: '',
      inputSurname: '',
      inputEmail: '',
      inputPhone: '',
      confirmationNumber: ''
    }
  },
  methods: {
    nextStep() {
      if (this.employment !== 'Other') {
        if (this.employment !== 'Retired / Pension') {
          if (this.step === 1) { this.step+=4; }
          else { this.step++; }
        }
        else {
          if (this.currentlyWorking === 'No') { this.step++; }
          else { this.step+=2; }
        }
      }
      else {
        if (this.otherIncome.length) { this.step+=2; }
        else { this.step++; }
      }
    },
    prevStep() {
      if (this.employment !== 'Other') {
        if (this.employment !== 'Retired / Pension') {
          if (this.step === 5) { this.step-=4; }
          else { this.step--; }
        }
        else {
          if (this.currentlyWorking === 'No') { this.step--; }
          else { this.step -= 2; }
        }
      }
      else {
        if (this.otherIncome.length) { this.step-=2; }
        else { this.step--; }
      }
    },
    checkForm() {
      if (this.budget !== '' && this.step === 0) { this.nextStep(); }
      else if (this.employment !== '' && this.step === 1) { this.nextStep(); }
      else if (this.otherIncome.length && this.step === 2) { this.nextStep(); }
      else if (this.currentlyWorking !== '' && this.step === 3) { this.nextStep(); }
      else if (this.receivingTime !== '' && this.step === 4) { this.step+=2; }
      else if (this.receivingYears !== '' && this.receivingMonths !== '' && this.step === 5) { this.step++; }
      else if (this.inputCity !== '' && this.inputAddress !== '' && this.inputProvince !== '' && this.inputCode !== '' && this.step === 6) { this.step++; }
      else if (this.inputYear !== '' && this.inputMonth !== '' && this.inputDay !== '' && this.step === 7) { this.step++; }
      else if (this.inputName !== '' && this.inputSurname !== '' && this.inputEmail !== '' && this.inputPhone !== '' && this.step === 8) {
        this.step++;
        this.confirmationNumber = this.generateConfirmation;
      }
    },
    clearForm() {
      if (this.step === 1) {
        this.employment = '';
        this.prevStep();
      }
      else if (this.step === 2) {
        this.otherIncome = [];
        this.prevStep();
      }
      else if (this.step === 3) {
        this.currentlyWorking = '';
        this.prevStep();
      }
      else if (this.step === 4) {
        this.receivingTime = '';
        this.prevStep();
      }
      else if (this.step === 5) {
        this.receivingYears = this.receivingMonths = '';
        this.prevStep();
      }
      else if (this.step === 6) {
        if (this.receivingTime !== '') { this.step-=2; }
        else { this.step--; }
      }
      else if (this.step === 7) {
        this.inputCity = this.inputAddress = this.inputProvince = this.inputCode = '';
        this.step--;
      }
      else if (this.step === 8) {
        this.inputYear = this.inputMonth = this.inputDay = '';
        this.step--;
      }
      else {
        this.inputName = this.inputSurname = this.inputEmail = this.inputPhone = '';
        this.step--;
      }
    },
    fillTime(input) { this.receivingTime = input; },
    fillYears(input) { this.receivingYears = input; },
    fillMonths(input) { this.receivingMonths = input; },
    fillCity(input) { this.inputCity = input; },
    fillAddress(input) { this.inputAddress = input; },
    fillProvince(input) { this.inputProvince = input; },
    fillCode(input) { this.inputCode = input; },
    fillYear(input) { this.inputYear = input; },
    fillMonth(input) { this.inputMonth = input; },
    fillDay(input) { this.inputDay = input; },
    fillName(input) { this.inputName = input; },
    fillSurname(input) { this.inputSurname = input; },
    fillEmail(input) { this.inputEmail = input; },
    fillPhone(input) { this.inputPhone = input; },
  },
  computed: {
    progress() { return ((this.step+1)*11.1)+'%'; },
    generateConfirmation() {
      let result = '';
      let characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
      let charactersLength = characters.length;
      for (let i = 0; i < 14; i++) {
        if (i === 7) { result += '-'; }
        else { result += characters.charAt(Math.floor(Math.random() * charactersLength)); }
      }
      return result;
    }
  },
  created() {
    this.id = this.$route.params.id;
  }
}
</script>

<style scoped>
.quiz {
  display: flex;
  gap: 60px;
  justify-content: center;
  align-items: flex-start;
  margin: 40px 0;
}
.quiz__car {
  max-width: 420px;
}
.quiz__content {
  max-width: 454px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 40px;
}
.quiz__content-progressbar {
  margin-bottom: 20px;
  width: 100%;
  height: 8px;
  background: #F1F1F1;
  border-radius: 2px;
}
.quiz__content-progress {
  width: v-bind(progress);
  height: 8px;
  background: #7380FF;
  border-radius: 2px;
}
.quiz__content-head {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 5px;
}
.quiz-img {
  margin-bottom: 15px;
}
.quiz-title {
  font-weight: 700;
  font-size: 25px;
  line-height: 35px;
  letter-spacing: 0.02em;
  color: #41456B;
}
.quiz-subtitle {
  font-weight: 600;
  font-size: 20px;
  line-height: 34px;
  color: #41456B;
}
.quiz-text {
  font-weight: 400;
  font-size: 16px;
  line-height: 25px;
  color: #7C7A84;
}

.choices, .inputs {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}
.choice {
  width: calc(50% - 5px);
}
.choice__radio {
  display: none;
}
.choice__label {
  font-weight: 600;
  font-size: 16px;
  line-height: 14px;
  text-align: center;
  color: #7C7A84;
  border: 1px solid #F1F1F1;
  border-radius: 2px;
  padding: 15px 0;
  cursor: pointer;
  width: 100%;
  display: inline-block;
}
.choice__radio:checked + .choice__label, .choice__label:hover {
  border: 1px solid #7481FF;
  color: #7481FF;
}
.quiz__content-main .inputs div {
  width: calc(50% - 5px);
}
.quiz__content-main .inputs .input--full {
  width: 100%;
}
.quiz__content-main .inputs .input--month,
.quiz__content-main .inputs .input--day {
  width: calc(25% - 10px);
}

.quiz__content-buttons {
  display: flex;
  align-items: center;
  gap: 60px;
}
.btn-back {
  font-weight: 700;
  font-size: 16px;
  line-height: 14px;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  color: #606276;
  display: flex;
  align-items: center;
  gap: 15px;
  transition: all 0.4s ease;
  cursor: pointer;
}
.btn-back path {
  transition: stroke 0.4s ease;
}
.btn-back:hover, .btn-back:hover path {
  color: #7481FF;
  stroke: #7481FF;
}

@media screen and (max-width: 960px) {
  .quiz {
    flex-direction: column-reverse;
    align-items: center;
  }
  .quiz__car {
    max-width: 454px;
    width: 100%;
  }
}
@media screen and (max-width: 680px) {
  .quiz {
    margin: 30px 0;
  }
  .choice,
  .quiz__content-main .inputs div,
  .quiz__content-main .inputs .input--month,
  .quiz__content-main .inputs .input--day {
    width: 100%;
  }
}
</style>