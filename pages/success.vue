<template lang="pug">
  .container
    .mcontainer.mh60vh
      .response-message
        .mkub.mkubsuccess
        .rminfo
          h4.rmtt {{ $t('success_email') }}
          p.rmtxt {{ $t('success_email_desc') }}
</template>
<script>
export default {
  name: 'Success',
  layout: 'pages'
}
</script>
