<template>
  <div class="hmitems">
    <n-link :to="localePath('/')">
      {{ $t('home') }}
    </n-link>
    <n-link :to="localePath('kataloq-mashin-kataloqu')">
      {{ $t('catalog') }}
    </n-link>
    <n-link
      :to="localePath({
        name: 'dismantles-slug',
        params: {
          slug: 'p-1'
        }
      })"
    >
      {{ $t('dismantles') }}
    </n-link>
    <a href="https://blog.otobaza.com" target="_blank">
      {{ $t('blog') }}
    </a>
    <n-link :to="localePath('contact')">
      {{ $t('contact') }}
    </n-link>
  </div>
</template>
<script>
export default {
  name: 'MenuItems'
}
</script>
