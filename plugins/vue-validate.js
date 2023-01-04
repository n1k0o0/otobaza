import Vue from 'vue'
import { extend, localize, ValidationObserver, ValidationProvider } from 'vee-validate'
import { confirmed, email, max, min, required } from 'vee-validate/dist/rules'
import az from '@/locales/az'
import en from '@/locales/en'
import ru from '@/locales/ru'

extend('email', email)
extend('required', required)
extend('confirmed', confirmed)
extend('min', min)
extend('max', max)

extend('otp', value => {
  return (value.split('').length === 1) && Number(value)
})

localize({
  az: az.validation,
  en: en.validation,
  ru: ru.validation
})
// Register it globally
Vue.component('ValidationProvider', ValidationProvider)
Vue.component('ValidationObserver', ValidationObserver)
