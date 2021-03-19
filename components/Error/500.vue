<template>
  <div class="container">
    <div class="mcontainer mh60vh">
      <div class="response-message">
        <div class="mkub mkubfail"></div>
        <div class="rminfo">
          <h4 class="rmtt">
            {{ $t('system_error') }}
          </h4>
          <p class="rmtxt">
            <template v-if="error.message">
              {{ error.message }}
            </template>
            <template v-else>
              {{ $t('system_error_info') }}
            </template>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Page500',
  props: {
    error: {
      type: Object,
      default: () => {}
    }
  }
}
</script>
