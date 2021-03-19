<template lang="pug">
  .col-12.col-sm-12.col-md-6
    template(v-if="isSearch")
      a(:href="link(car)" @click.prevent="onSelected(car)")
        .all-car-item
          .all-car-details
            .all-car-name {{ car.carName }}
            span {{ car.motorType }} ({{ car.powerHpFrom }} hp)
    template(v-else)
      n-link(:to="link(car)")
        .all-car-item
          .all-car-details
            .all-car-name {{ car.carName }}
            span {{ car.motorType }} ({{ car.powerHpFrom }} hp)
</template>
<script>
import { Slugify } from '@/filters'
import { setNuxtLink } from '@/utils'
import { mapMutations } from 'vuex'
export default {
  name: 'CarItem',
  props: {
    isSearch: {
      type: Boolean,
      default: false
    },
    car: {
      type: Object,
      default: () => {}
    }
  },
  methods: {
    ...mapMutations({
      ADD_SEARCH_TAB: 'UI/ADD_SEARCH_TAB'
    }),
    link (car) {
      return setNuxtLink(this, 'car', car)
    },
    onSelected (car) {
      this.ADD_SEARCH_TAB({
        type: 'car',
        name: car.carName,
        slug: `${car.carid}-${Slugify(car.carName)}`
      })
    }
  }
}
</script>
