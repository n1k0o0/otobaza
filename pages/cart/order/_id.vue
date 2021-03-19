<template lang="pug">
  .container
    .mcontainer.mh60vh
      OrderHeader
      ClientOnly
        ValidationObserver(v-slot="{ handleSubmit }" slim tag="div")
          form(@submit.prevent="handleSubmit(onSubmit)")
            .row.reg_border
              // error message
              .col-12.col-sm-12
                .reg-error
                  i.fa.fa-info-circle
                  |  {{ $t('required_field') }}
              .col-12.col-sm-12.col-md-8.contact-lr.buy_now_cover
                .container.contact-form.registration-form
                  .row
                    .col-12.col-sm-12
                      .custom-control.custom-checkbox.terms_conditions.buy_now_check.max315
                        input#buy-now.custom-control-input(type='checkbox', name='buy-now' v-model="useLoggedInData")
                        label.custom-control-label(for='buy-now')
                          small {{ $t('use_registered_info') }}.
                    .col-12.col-sm-12
                      .max315
                        FormInputElement(
                          v-model="form.contact_name"
                          name="first_name_last_name"
                          rules="required"
                          required
                          :label="$t('firstname_lastname')"
                        )
                    .col-12.col-sm-12
                      .max315
                        FormSelectElement(
                          v-model="form.delivery_id"
                          name="delivery"
                          rules="required"
                          required
                          :options="delivery_methods"
                          :label="$t('delivery_method')"
                          :placeholder="$t('select_delivery_method')"
                        )
                    .col-12.col-sm-12(v-if="form.delivery_id !== 3")
                      .max315
                        FormInputElement(
                          v-model="form.delivery_address"
                          name="address"
                          rules="required"
                          required
                          :label="$t('delivery_method')"
                        )
                    .col-12.col-sm-12
                      .max315
                        FormPhoneNumber(
                          v-model="form.contact_phone"
                          :label="$t('phone_number')"
                          :prefix.sync="prefix"
                          :prefixes="['+994']"
                        )
              OrderDetail(:order="order" :loading="loading")
</template>
<script>
import OrderDetail from '@/components/Catalog/OrderDetail'
import OrderHeader from '@/components/Catalog/OrderHeader'
import FormInputElement from '@/components/Common/FormInputElement'
import FormPhoneNumber from '@/components/Common/FormPhoneNumber'
import FormSelectElement from '@/components/Common/FormSelectElement'
import { useFriendlyError } from '@/utils'
import { localize } from 'vee-validate'
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'Order',
  components: { FormSelectElement, FormPhoneNumber, FormInputElement, OrderHeader, OrderDetail },
  layout: 'pages',
  async asyncData ({ app, redirect }) {
    const order = app.$auth.$storage.getState('order')
    if (!order) {
      redirect(app.localePath('/cart'))
    }
    return {
      order
    }
  },
  data () {
    return {
      loading: false,
      useLoggedInData: false,
      prefix: '+994',
      form: {
        id: '',
        quantity: '',
        currency: '',
        contact_name: '',
        delivery_address: '',
        delivery_id: '',
        delivery_location: 0,
        contact_phone: ''
      }
    }
  },
  computed: {
    ...mapGetters({
      delivery_methods: 'Catalog/delivery_methods'
    }),
    totalSum () {
      return (this.order.quantity * this.order.price.price).toFixed(2)
    }
  },
  watch: {
    useLoggedInData (val) {
      if (val) {
        const { first_name, last_name, address, phone, phone_verified } = this.$auth.user
        this.form.contact_name = `${first_name} ${last_name}`
        this.form.delivery_address = address
        if (phone_verified) this.form.contact_phone = phone
      } else {
        this.form.contact_name = ''
        this.form.delivery_address = ''
        this.form.contact_phone = ''
      }
    }
  },
  async beforeMount () {
    await this.GET_DELIVERY_METHODS().catch(error => {
      useFriendlyError(error)
    })
    localize(this.$i18n.locale)
    this.form.id = this.order.cart_id
    this.form.quantity = this.order.quantity
    this.form.currency = this.order.price.currency
  },
  beforeDestroy () {
    this.$auth.$storage.removeUniversal('order')
  },
  methods: {
    ...mapActions({
      ORDER_PRODUCT: 'Catalog/ORDER_PRODUCT',
      GET_DELIVERY_METHODS: 'Catalog/GET_DELIVERY_METHODS'
    }),
    async onSubmit () {
      this.loading = true
      const form = { ...this.form }
      if (this.form.delivery_id === 3) {
        delete form.delivery_address
      }
      await this.ORDER_PRODUCT(form).then((response) => {
        this.$swal.fire({
          position: 'center',
          icon: 'success',
          timer: 5000,
          timerProgressBar: true,
          text: response.message,
          onClose: () => {
            this.$router.push({
              path: this.localePath('cart'),
              query: {
                reload: true
              }
            })
          }
        })
      }).catch(error => {
        useFriendlyError(error)
      }).finally(() => {
        this.loading = false
      })
    }
  }
}
</script>
