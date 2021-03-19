<template lang="pug">
  .AboutStorePopup
    transition(name='page-fade')
      #store-modal.modal.fade.show(v-if='isShowSellerInfo', role='dialog', style='display: block')
        .modal-dialog
          .modal-content
            .modal-header
              button.close(data-dismiss='modal', type='button', @click.prevent="$emit('close')")
                span x
            .modal-body
              .about-store-top.store_top_flex
                .response-message.about-title.store_w40
                  .mkub.mkubsuccess.kubflex
                    img(src="/img/storename.svg")
                  .rminfo
                    h2.rmtt {{slr.store_name}}
                    p.rmtxt {{slr.store_about}}
                .about-store-right.store_w60
                  .contact-item
                    img(src="/img/price.svg")
                    .contact-address
                      strong {{ $t('price') }}
                      span {{this.product.price.price}} {{this.product.price.currency}}
                  .contact-item
                    img(src="/img/productcount.svg")
                    .contact-address
                      strong {{ $t('product_type') }}
                      span {{this.product.product_type}}
                  AddToCartButton.add-to-bag(:id='partId' @added="$emit('close')") {{ $t('add_to_cart') }}
              // about store
              .row.about-store-cover
                .container
                  .about-info
                    h3.about-tt {{this.product.part_number}} {{this.product.manufacturer}}
                    .about-txt
                      dl.pro-card__row__col.pro-card__specs
                        dt {{ $t('code') }}
                        dd {{this.product.part_number}}
                        dt {{ $t('manufacturer') }}
                        dd {{this.product.manufacturer}}
                        dt {{ $t('updated_at') }}
                        dd {{this.product.updated_at}}
                        dt {{ $t('validation.names.city') }}
                        dd {{slr.city}}
                .col-12.col-sm-12
                  .success-message
                    i.fa.fa-info-circle
                    small.muted(v-html="$t('store_info_text')")
              .container
                .about-store-bottom
                  .contact-item
                    img(src="/img/storephone.svg")
                    .contact-number
                      a(:href='`tel:${slr.phone}`') {{slr.phone}}
                  .contact-item
                    img(src="/img/storeemail.svg")
                    .contact-mail
                      a(:href='`mailto:${slr.email}`') {{slr.email}}
                  .contact-item
                    img(src="/img/storeaddress.svg")
                    .contact-address
                      span
                        | {{slr.address}}
                        br
                        | {{slr.country.native_name}}
                  .contact-item
                    ul.contact-social
                      li(v-for="(social,i) in slr.contacts" :key="i")
                        a(:href="social.value" target="_blank")
                          i(:class="`fa fa-${social.name}`")
    .modal-backdrop.fade.show(v-if='isShowSellerInfo')
</template>
<script>
import AddToCartButton from '@/components/Catalog/AddToCartButton'
import { mapGetters } from 'vuex'
export default {
  name: 'AboutStorePopup',
  components: { AddToCartButton },
  props: {
    partId: {
      type: Number,
      default: 0
    },
    isShowSellerInfo: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    ...mapGetters({
      product: 'Catalog/product'
    }),
    slr () {
      return this.product.seller
    }
  }
}
</script>
