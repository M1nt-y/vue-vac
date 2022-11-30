<template>
  <div>
    <head-title>Loan rates</head-title>
    <div class="loan">
      <div class="loan__section">
        <div class="container">
          <div class="loan__section-card">
            <h2 class="section-title">Our mission</h2>
            <p class="section-text">Our mission at VAC is to help you find the perfect car at the perfect price and with the perfect auto loan. We make buying a car simple. You can complete the entire process from home—we’ll even deliver the car to you!</p>
            <base-button v-bind="{ ...isBlue && { solidBlueBtn } }" />
          </div>
          <img src="@/assets/images/Chevrolet.png" alt="">
        </div>
      </div>
      <div class="loan__interests">
        <div class="container">
          <h2 class="section-title">Interest rates and loan terms</h2>
          <div class="loan__interests-content">
            <div class="loan__section-card">
              <div class="loan__section-title">
                <img src="@/assets/images/Procent.png" alt="">
                <h4>What are my interest rate options?</h4>
              </div>
              <p class="section-text">We work to secure customized auto loans from Canada’s largest lenders. Your interest rate is critical for determining the total cost of your auto financing. Interest rates are based on many factors including the loan amount, your credit score, and your budget. We help you find the lowest interest rates available for your auto loan.</p>
            </div>
            <div class="loan__section-card">
              <div class="loan__section-title">
                <img src="@/assets/images/Clock.png" alt="">
                <h4>How long will my loan term be?</h4>
              </div>
              <p class="section-text">Our goal is to find the right car and the right loan for you. Because we have relationships with so many different lenders, we can help you find the right term length for your budget. The longer the loan is, often the lower the monthly payments will be—but the more expensive the loan will be overall. Most of the loans we secure for our clients are between 36 and 72 months.</p>
            </div>
          </div>
        </div>
      </div>
      <div class="loan__section">
        <div class="container">
          <div class="loan__section-content">
            <h2 class="section-title">Benefits of getting an auto loan with VAC</h2>
            <p class="section-text">For many people getting a reasonable auto loan is the best way for them to get a new car. However, the benefits of getting the right loan go beyond just being able to drive a nice vehicle.</p>
            <h4 class="section-subtitle">When you work with VAC, there are never any hidden costs or fees! We lay out all the terms and conditions so that you know exactly what details of the loan are before you sign anything.</h4>
            <base-button v-bind="{ ...isBlue && { solidBlueBtn } }" />
          </div>
          <img src="@/assets/images/Ford.png" alt="">
        </div>
      </div>
      <the-calculator :config="calculator" />
    </div>
  </div>
</template>

<script>
import HeadTitle from "@/components/HeadTitle";
import TheCalculator from "@/components/TheCalculator";
export default {
  name: "LoanPage",
  components: {TheCalculator, HeadTitle},
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
      isBlue: true,
      calculator: {
        hasDescription: true,
        isFixed: false
      },
    }
  }
}
</script>

<style scoped>
.loan {
  padding-top: 40px;
  display: flex;
  flex-direction: column;
  gap: 220px;
}
.loan__section .container {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  gap: 60px;
}
.loan__section--center .container {
  align-items: center;
}
.loan__section-content {
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 50%;
}
.loan__section-card {
  width: 49%;
  padding: 60px;
  background: #FFFFFF;
  box-shadow: 0 20px 25px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
}
.loan__section-card .section-text {
  margin-top: 20px;
}
.loan__section-card .button {
  margin-top: 40px;
}
.loan__section img{
  width: 47%;
}
.loan__interests-content {
  display: flex;
  justify-content: space-between;
  margin-top: 60px;
  gap: 40px;
}
.loan__section-title {
  display: flex;
  align-items: center;
  gap: 20px;
  font-weight: 700;
  font-size: 25px;
  line-height: 35px;
  letter-spacing: 0.02em;
  color: #41456B;
}
.loan__section-content .button {
  margin-top: 20px;
  max-width: 200px;
}
.section-subtitle {
  font-weight: 600;
  font-size: 20px;
  line-height: 25px;
  color: #41456B;
}

@media screen and (max-width: 1024px) {
  .loan {
    gap: 160px;
  }
  .loan__section, .loan__interests {
    padding: 0 60px;
  }
  .loan__section .container {
    flex-direction: column;
    align-items: center;
    gap: 40px;
  }
  .loan__section-card {
    width: 100%;
    padding: 40px;
  }
  .loan__section img,
  .loan__section-card,
  .loan__section-content {
    width: 100%;
  }
  .loan__section-card {
    padding: 40px;
  }
  .loan__interests-content {
    flex-direction: column;
    gap: 20px;
  }
}

@media screen and (max-width: 680px) {
  .loan {
    gap: 80px;
    padding-top: 30px;
  }
  .loan__section, .loan__interests {
    padding: 0;
  }

  .loan__interests-content {
    margin-top: 30px;
    gap: 20px;
  }
  .loan__section-title {
    gap: 10px;
    font-size: 20px;
    line-height: 28px;
  }
  .loan__section-title img {
    width: 50px;
  }
  .loan__section-content .button {
    max-width: unset;
  }
}

</style>