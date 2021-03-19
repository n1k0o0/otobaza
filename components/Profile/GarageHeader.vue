<template lang="pug">
  .rm_container
    .response-message.about-title
      .mkub.mkubsuccess.kubflex
        svg(xmlns='http://www.w3.org/2000/svg', width='35.422', height='30.186', viewBox='0 0 35.422 30.186')
          path#Path_158(data-name='Path 158', d='M31.843,41.914l-16.674-8.2a1.037,1.037,0,0,0-.916,0l-16.674,8.2A1.031,1.031,0,0,0-3,42.845V62A1.8,1.8,0,0,0-1.206,63.79H30.629A1.8,1.8,0,0,0,32.422,62V42.845A1.031,1.031,0,0,0,31.843,41.914Zm-7.3,17.443v2.359H4.876V59.357Zm0-4.471v2.4H4.876v-2.4Zm0-4.471v2.4H4.876v-2.4Zm0-4.578v2.5H4.876v-2.5Zm1.037-2.074H3.839A1.038,1.038,0,0,0,2.8,44.8V61.716H-.926V43.49L14.711,35.8,30.348,43.49V61.716H26.62V44.8A1.038,1.038,0,0,0,25.583,43.762Z', transform='translate(3 -33.604)', fill='#fff')
      .rminfo
        h2.rmtt {{ $t('my_garage') }}
    slot
</template>
<script>
export default {
  name: 'GarageHeader'
}
</script>
