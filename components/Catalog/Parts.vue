<template lang="pug">
div
  .container
    .mcontainer.mh60vh
      .rm_container.rm_container_mobile
        PartsHeader(:is-part="isPart")
        PartsMotor(v-if="!isPart")
      PartsHeaderBack
      template(v-if="parts.items.length")
        PartsFilters
        PartsItems(:is-part="isPart")
        .row.car-details-text
          p Lorem ipsum dolor sit amet, consectetur adipisicing elit. At aut autem, dolor ea enim fuga nobis perferendis similique. Ab ad aliquam amet at distinctio doloribus ea error et, expedita facere illo iste iure maiores nostrum odio, quis repellat repellendus temporibus tenetur velit? Ab, accusamus aperiam, cupiditate distinctio ducimus eligendi esse eveniet expedita id labore minima pariatur porro, possimus quae quas quasi sit suscipit veniam vero voluptatibus. Architecto autem deleniti, dolor doloribus eligendi enim harum hic, labore neque nisi numquam obcaecati placeat quam quisquam voluptatum. Accusantium aliquam corporis eos fugit id laboriosam maxime pariatur, placeat possimus quae quam quisquam rem vero?.
      template(v-else)
        .container-fluid
          .col-12.col-sm-12
            .error-message
              i.fa.fa-info-circle
              span {{ $t('no_parts') }}
                .parts-play-app
                  a(href='https://apps.apple.com/us/app/facebook/id1528493953' target='_blank')
                    img(alt='' src='/css/icons/app_store_badge.svg')
                  a(:href='androidLink' target='_blank')
                    img(alt='' src='/css/icons/google_play_badge.svg')
</template>
<script>
import PartsFilters from '@/components/Catalog/PartsFilters'
import PartsHeader from '@/components/Catalog/PartsHeader'
import PartsHeaderBack from '@/components/Catalog/PartsHeaderBack'
import PartsItems from '@/components/Catalog/PartsItems'
import PartsMotor from '@/components/Catalog/PartsMotor'
import { mapGetters } from 'vuex'
export default {
  name: 'Parts',
  components: { PartsItems, PartsFilters, PartsHeaderBack, PartsMotor, PartsHeader },
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
    androidLink () {
      return `https://play.google.com/store/apps/details?id=com.otobaza.app&hl=${this.$i18n.locale}`
    }
  }
}
</script>
