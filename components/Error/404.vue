<template>
  <div class="container">
    <div class="mcontainer mh60vh cover404">
      <div class="content404">
        <img alt="404" src="/css/icons/404.svg" />
        <h1 class="title404">
         {{ $t('not_found') }}
        </h1>
        <div class="titledisc">
          <span v-if="error.message !== '' && error.message !== 'error'">
            {{ error.message }}
          </span>
          <span v-else>
            {{ $t('not_found_info') }}
          </span>
        </div>
        <n-link class="back-home404" :to="localePath('/')">
          {{ $t('back_home') }}
        </n-link>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Page404',
  props: {
    error: {
      type: Object,
      default: () => {}
    }
  }
}
</script>
