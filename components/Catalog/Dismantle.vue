<template lang="pug">
  div
    .Dismantle
      table.car_details_item.tr_mobile_flex
        tbody
          tr
            td {{item.name}}
            td.td_3
              .car_details_row.current_row
                p {{ $t('milage') }}
                span {{item.milage}}
            td.td_3
              .car_details_row.current_row
                p {{ $t('color') }}
                span {{item.color}}
            td.td_3
              .car_details_row.current_row
                p {{ $t('address') }}
                span {{item.city}}
            td
              button.car-add-sale(
                type='button'
                :disabled="loading"
                @click.prevent="showDismantlePopup")
                  i.fa.fa-spinner.fa-spin(v-if="loading")
                  |
                  | {{ $t('more') }}
    DismantlePopup(
      :dismantle="dismantle"
      :is-visible.sync="isVisible"
    )
</template>
<script>
import DismantlePopup from '@/components/Catalog/DismantlePopup'
import { useFriendlyError } from '@/utils'
import { mapActions } from 'vuex'
export default {
  name: 'Dismantle',
  components: { DismantlePopup },
  props: {
    item: {
      type: Object,
      default: () => {}
    }
  },
  data () {
    return {
      loading: false,
      isVisible: false
    }
  },
  computed: {
    dismantle () {
      return this.$store.getters['Catalog/dismantle'] || {}
    }
  },
  methods: {
    ...mapActions({
      GET_DISMANTLE: 'Catalog/GET_DISMANTLE'
    }),
    showDismantlePopup () {
      this.loading = true
      this.GET_DISMANTLE({
        id: this.item.id
      }).then(() => {
        this.isVisible = true
      }).catch(error => {
        useFriendlyError(error)
      }).finally(() => {
        this.loading = false
      })
    }
  }
}
</script>
