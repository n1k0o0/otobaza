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
      template(v-else)
        .container-fluid
          .col-12.col-sm-12
            .error-message
              i.fa.fa-info-circle
              span {{ $t('no_parts') }}
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
    })
  }
}
</script>
