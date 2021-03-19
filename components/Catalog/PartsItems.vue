<template lang="pug">
  .row.car-details-items(v-if="parts && parts.items")
    .col-12.col-sm-12.details-overflow.mobile_car_details
      PartsItem(v-for='(part,i) in parts.items', :key='part.id + i', :part='part')
    Pagination(:maxVisibleButtons="maxVisibleButtons" :pagination="pagination" :url-type="urlType")
</template>
<script>
import PartsItem from '@/components/Catalog/PartsItem'
import Pagination from '@/components/Catalog/Pagination'
import { mapGetters } from 'vuex'
export default {
  name: 'PartsItems',
  components: { Pagination, PartsItem },
  props: {
    isPart: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    ...mapGetters({
      parts: 'Catalog/parts'
    }),
    urlType () {
      return this.isPart ? 'part' : 'assembly'
    },
    maxVisibleButtons () {
      return this.parts.pagination.total <= 3 ? 2 : 3
    },
    pagination () {
      return this.parts.pagination
    }
  }
}
</script>
