<template lang="pug">
  .PartsItem
    div.Table
      .Badge(:class="part.is_new ? 'new' : 'used'") {{part.product_type}}
      table.car_details_item.fixes_details
        tbody
          tr
            td {{part.description}}
            td
              .car_details_row
                p {{ $t('code') }}
                span {{part.part_number}}
            td
              .car_details_row
                p {{ $t('price') }}
                span {{part.price.price}} {{part.price.currency}}
            td
              .car_details_row
                p {{ $t('address') }}
                span {{part.country}}, {{part.city}}
                span(v-if="hasDistance")
                  |
                  | ({{part.distance}} km)
            td
              button.car-add-sale(@click.prevent="showSellerInfo" :disabled="loadingSellerInfo")
                i(v-if="loadingSellerInfo" :class="loadingSellerInfo ? 'fa fa-spin fa-spinner' : ''")
                span {{loadingSellerInfo ? this.$t('loading') : this.$t('show_seller')}}
            td
              AddToCartButton.car-add-btn(:id="part.id")
    AboutStorePopup(
      :is-show-seller-info="isShowSellerInfo"
      :part-id="part.id"
      @close="isShowSellerInfo = false"
    )
</template>
<script>
import AddToCartButton from '@/components/Catalog/AddToCartButton'
import { useFriendlyError } from '@/utils'
import { mapActions } from 'vuex'
const AboutStorePopup = () => import('@/components/Catalog/AboutStorePopup')
export default {
  name: 'PartsItem',
  components: { AboutStorePopup, AddToCartButton },
  props: {
    part: {
      type: Object,
      default: () => {}
    }
  },
  data () {
    return {
      loadingSellerInfo: false,
      isShowSellerInfo: false
    }
  },
  computed: {
    hasDistance () {
      return (this.$route?.query?.filter === 'nearest')
    }
  },
  methods: {
    ...mapActions({
      GET_PRODUCT: 'Catalog/GET_PRODUCT'
    }),
    async showSellerInfo () {
      this.loadingSellerInfo = true
      const geo = this.$auth.$storage.getUniversal('geo')
      await this.GET_PRODUCT({
        id: this.part.id,
        currency: geo?.currency_name || 'AZN'
      }).then(() => {
        this.isShowSellerInfo = true
      }).catch(error => {
        useFriendlyError(error)
      }).finally(() => {
        this.loadingSellerInfo = false
      })
    }
  }
}
</script>
<style lang="scss" scoped>
  .PartsItem {
    .Table {
      position: relative;
      overflow: hidden;
      margin-top: 20px;
    }
    .Badge{
      position: absolute;
      top:7px;
      left:-20px;
      width: 80px;
      height: 16px;
      color:#fff;
      font-size: 11px;
      line-height: 16px;
      transform: rotate(-45deg);
      text-align: center;
      &.new {
        background: #02b002;
      }
      &.used {
        background: #ff4848;
      }
    }
  }
  .car_details_item {
    margin-top: 0;
  }
  .car-add-sale {
    outline: none !important;
    i {
      font-size: 14px;
      margin-right: 10px;
    }
  }
</style>
