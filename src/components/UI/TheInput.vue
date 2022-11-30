<template>
  <div>
    <input class="input" type="text"
           :placeholder="$attrs.placeholder"
           :value="input"
           @input="input = $event.target.value"
           v-if="isText" >
    <input class="input name-input" type="text" placeholder="Your Name"
           :value="input"
           @input="input = $event.target.value"
           v-else-if="isName" >
    <input class="input phone-input" type="text" placeholder="Phone Number"
           :value="input"
           @input="input = $event.target.value"
           v-else-if="isPhone" >
    <input class="input email-input" type="email" placeholder="Email Address"
           :value="input"
           @input="input = $event.target.value"
           v-else-if="isEmail" >
    <input class="input search-input" type="text" placeholder="Find a dream car..."
           :value="input"
           @input="input = $event.target.value"
           v-else-if="isSearch" >
    <input class="input" :value="disabledValue" disabled v-else>
  </div>
</template>

<script>
export default {
  name: "TheInput",
  data() {
    return {
      input: ''
    }
  },
  props: {
    form: {
      name: '',
      phone: '',
      email: '',
    },
    isText: {
      type: Boolean,
      default: false,
      required: false,
    },
    isName: {
      type: Boolean,
      default: false,
      required: false,
    },
    isPhone: {
      type: Boolean,
      default: false,
      required: false,
    },
    isEmail: {
      type: Boolean,
      default: false,
      required: false,
    },
    isSearch: {
      type: Boolean,
      default: false,
      required: false,
    },
    isValid: {
      type: Boolean,
      default: true,
      required: false,
    },
    disabledValue: {
      type: String,
      required: false
    },
    inputValue: {
      type: String,
      required: false
    },
  },
  created() {
    if (this.inputValue !== '') {
      this.input = this.inputValue;
    }
  },
  watch: {
    input() {
      this.$emit('onTyping', this.input);
    }
    // 'this.inputValue'() {
    //   if (this.inputValue !== '') {
    //     this.input = this.inputValue;
    //   }
    // }
  }
}
</script>

<style scoped>

.input {
  background: none;
  outline: none;
  border: 1px solid #D7D7D7;
  border-radius: 2px;
  padding: 10px 20px;
  transition: all 0.4s;
  font-family: 'Gilroy', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 25px;
  color: #606276;
  width: 100%;
}

.name-input, .phone-input, .email-input {
  background-position: 10px 10px;
  background-repeat: no-repeat;
  padding-left: 40px;
}
.name-input { background-image: url('@/assets/icons/Name.svg'); }
.phone-input { background-image: url('@/assets/icons/Phone.svg'); }
.email-input { background-image: url('@/assets/icons/Mail.svg'); }
.search-input {
  background-image: url('@/assets/icons/Search.svg');
  background-position: right 20px center;
  background-repeat: no-repeat;
}

.input:focus { border: 1px solid #606276; }
.input::placeholder { color: #D7D7D7; }
.input:focus::placeholder { color: transparent; }
.input:focus::-webkit-input-placeholder { color:transparent; }
.input:focus:-moz-placeholder { color:transparent; } /* FF 4-18 */
.input:focus::-moz-placeholder { color:transparent; } /* FF 19+ */
.input:focus:-ms-input-placeholder { color:transparent; } /* IE 10+ */

.invalid {
  border: 1px solid #F54E4E;
}
.error-message {
  margin-top: 2px;
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  color: #F54E4E;
}

</style>