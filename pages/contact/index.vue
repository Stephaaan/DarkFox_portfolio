<template>
  <div class="w-full flex justify-center font-worksans font-thin">
    <div>
      <div class="border border-successGreen text-successGreen rounded text-center my-6" v-if="showSuccessMsg">{{$t('contact.common.success')}}</div>
      <div class="border border-errorRed text-errorRed rounded text-center hidden my-6" v-if="showErrorMsg">{{$t('contact.common.error')}}</div>
      
      <div class="relative my-6">
        <label ref="name_input_ref" for="name_input" class="absolute left-0 focus_target">{{$t('contact.form.name')}}</label>
        <input id="name_input" v-model="form.name" class="bg-paperWhite border-b border-primaryBlack-200 font-thin" @focus="onInputFocus('name_input_ref')" @focusout="onInputFocusOut('name_input_ref', form.name)" />
        <div v-if="formErrors.name.required" class="text-sm text-errorRed">
            {{ $t('contact.errors.name.required')}}
        </div>
      </div>
      <div class="relative my-6">
        <label ref="mail_input_ref" for="mail_input" class="absolute left-0 focus_target">{{$t('contact.form.mail')}}</label>
        <input id="mail_input" v-model="form.email" type="email" class="bg-paperWhite border-b border-primaryBlack-200 font-thin" @focus="onInputFocus('mail_input_ref')" @focusout="onInputFocusOut('mail_input_ref', form.mail)" />
        <div v-if="formErrors.email.required" class="text-sm text-errorRed">
          {{ $t('contact.errors.email.required')}}
        </div>
        <div v-if="formErrors.email.format" class="text-sm text-errorRed">
          {{ $t('contact.errors.email.format')}}
        </div>
      </div>
      <div class="relative my-6">
        <label ref="text_input_ref" for="text_input" class="absolute left-0 focus_target">{{$t('contact.form.text')}}</label>
        <textarea id="text_input" v-model="form.text" class="bg-paperWhite border-b border-primaryBlack-200 font-thin" @focus="onInputFocus('text_input_ref')" @focusout="onInputFocusOut('text_input_ref', form.text)"></textarea>
        <div v-if="formErrors.text.required" class="text-sm text-errorRed">
            {{ $t('contact.errors.text.required')}}
        </div>
      </div>
      <div class="w-full flex justify-center">
        <button v-on:click="onSubmitClick()" class=" border border-primaryBlack-200 px-2 py-1 rounded mx-auto">{{$t('contact.common.send')}}</button>
      </div>

    </div>
  </div>
</template>

<script>
import { TimelineLite } from 'gsap'
export default {
  data() {
    return {
      showSuccessMsg: false,
      showErrorMsg: false,
      form: {
name: '',
        email: '',
        text: '',
      },
      formErrors: {
        name: {
          required: false,
        },
        email: {
          required: false,
          format:false
        },
        text: {
          required: false
        }
      }
    }
  },
  mounted(){
    (function(){
      emailjs.init("user_oQSMIIS3ee8VnJrPdpHHc");
   })();
  },
  methods: {
    onInputFocus (ref) {
       const timeline = new TimelineLite()
       timeline.to(this.$refs[ref], .5, { y: -25 })
    },
    onInputFocusOut (ref, val) {
      if(val === '')
      {
       const timeline = new TimelineLite()
       timeline.to(this.$refs[ref], .5, { y: 0 })
      }
    },
    validateForm() {
      //clear all errors
      this.formErrors.name.required = false;
      this.formErrors.email.required = false;
      this.formErrors.email.format = false;
      this.formErrors.text.required = false;
      //valid
      let valid = true;
      if(this.form.name === ''){
        valid = false;
        this.formErrors.name.required = true;
      }
      if(this.form.email === ''){
        valid = false;
        this.formErrors.email.required = true;
      }else if(!this.validateEmail(this.form.email)){
        this.formErrors.email.format = true;
        valid = false;
      }
      if(this.form.text === ''){
        this.formErrors.text.required = true;
        valid = false;
      }
  
      console.log(this.formErrors)
      return valid;
    },
    validateEmail(email){
      var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(email).toLowerCase());
    },
    onSubmitClick() {
      const valid = this.validateForm();
      if(valid){
        emailjs.send('gmail', 'template_ggYmB9Mh', {name: this.form.name, email: this.form.email, message: this.form.text, date: new Date().toLocaleString()})
          .then((response)  => {
            //clear errors
            this.formErrors.name.required = false;
            this.formErrors.email.required = false;
            this.formErrors.email.format = false;
            this.formErrors.text.required = false;
            //clear values
            this.form.name = '';
            this.form.email = '';
            this.form.text = '';

            //show some message
            this.showSuccessMsg = true;
            setTimeout(() => this.showSuccessMsg = false, 2000)
          
          }, (error) => {
            console.log('FAILED...', error);
            this.showErrorMsg = true;
            setTimeout(() => this.showErrorMsg = false, 2000)
          });
            }
          }
  }
}
</script>
<style scoped>
  .focus_target {
    transition: bottom 1s linear;
  }

</style>
