<template>
  <div class="container">
    <div class="mcontainer mh60vh">
      <div class="response-message about-title">
        <div class="mkub mkubsuccess kubflex"></div>
        <div class="rminfo">
          <h1 class="rmtt">
            {{ $t('terms_conditions') }}
          </h1>
        </div>
      </div>

      <div class="terms_txt" v-html="$t('terms_conditions_text')">
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'TermsAndConditions',
  layout: 'pages'
}
</script>
