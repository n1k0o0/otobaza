<template lang="pug">
  .container.profile-grg-cover
    .mcontainer.mh60vh
      GarageHeader
      GarageTabs(:active-tab="3")
      GarageOrders
</template>
<script>
import GarageOrders from '@/components/Catalog/GarageOrders'
import GarageHeader from '@/components/Profile/GarageHeader'
import GarageTabs from '@/components/Profile/GarageTabs'
export default {
  name: 'Orders',
  components: { GarageOrders, GarageTabs, GarageHeader },
  layout: 'pages'
}
</script>
