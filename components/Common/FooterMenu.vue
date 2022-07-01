<template lang="pug">
  ul.fnavitems
    li.fnavitem
      n-link(:to="localePath('/')")
        | {{ $t('home') }}
    li.fnavitem
      n-link(:to="localePath('tariffs')")
        | {{ $t('tariffs') }}
    li.fnavitem
      a(href="https://otobaza.com/privacy.html" target="_blank")
        | {{ $t('privacy') }}
    li.fnavitem
      a(:href="localePath('terms-and-conditions')" target="_blank")
        | {{ $t('terms') }}
    li.fnavitem
      n-link(:to="localePath('about')")
        | {{ $t('about') }}
    li.fnavitem
      n-link(:to="localePath('contact')")
        | {{ $t('contact') }}
    li.fnavitem
      n-link(:to="localePath('faq')")
        | {{ $t('faq') }}
    li.fnavitem
      a(href="https://blog.otobaza.com/" target="_blank")
        | {{ $t('blog') }}
</template>
<script>
export default {
  name: 'FooterMenu'
}
</script>
