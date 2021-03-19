<template lang="pug">
  .col-12.col-sm-4.col-md-4.col-lg-3
    .cclass_item
      template(v-if="isSearch")
        a(:href="link(model)" @click.prevent="onSelected(model)")
          h5.ccdetails_top
            span {{ model.ModelName }}
          p.ccdetails_bottom
            | {{ $t('year') }}:
            strong {{ year }}
      template(v-else)
        n-link(:to="link(model)")
          h5.ccdetails_top
            span {{ model.ModelName }}
          p.ccdetails_bottom
            | {{ $t('year') }}:
            strong {{ year }}
</template>
<script>
import { Slugify } from '@/filters'
import { setNuxtLink } from '@/utils'
import { mapMutations } from 'vuex'
export default {
  name: 'ModelItem',
  props: {
    isSearch: {
      type: Boolean,
      default: false
    },
    model: {
      type: Object,
      default: () => {}
    }
  },
  computed: {
    year () {
      if (this.model.yearOfConstrFrom && this.model.yearOfConstrTo) {
        return `${this.model.yearOfConstrFrom} - ${this.model.yearOfConstrTo}`
      } else {
        return `${this.model.yearOfConstrFrom} - ∞`
      }
    }
  },
  methods: {
    ...mapMutations({
      ADD_SEARCH_TAB: 'UI/ADD_SEARCH_TAB'
    }),
    link (model) {
      return setNuxtLink(this, 'model', model)
    },
    onSelected (model) {
      this.ADD_SEARCH_TAB({
        type: 'model',
        name: model.ModelName,
        slug: `${model.modId}-${Slugify(model.ModelName)}`
      })
    }
  }
}
</script>
