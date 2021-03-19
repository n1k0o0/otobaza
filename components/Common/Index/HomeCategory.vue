<template lang="pug">
  div
    template(v-if="$fetchState.pending")
      HomeCaregoryPlaceholder
    template(v-else-if="$fetchState.error")
      .container
        .mcontainer.mh60vh
          .response-message
            .mkub.mkubfail
            .rminfo
              h4.rmtt {{ $t('not_found') }}
              p.rmtxt {{ $t('not_found_info') }}
    template(v-else)
      HomeBlogItems
</template>
<script>
import HomeBlogItems from '@/components/HomeBlogItems'
import HomeCaregoryPlaceholder from '@/components/Placeholders/HomeCaregoryPlaceholder'
import { mapActions } from 'vuex'
export default {
  name: 'HomeCategory',
  components: { HomeBlogItems, HomeCaregoryPlaceholder },
  async fetch () {
    await this.GET_BLOG_ITEMS()
  },
  methods: {
    ...mapActions({
      GET_BLOG_ITEMS: 'UI/GET_BLOG_ITEMS'
    })
  }
}
</script>
