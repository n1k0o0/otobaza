<template>
  <div class="header-top">
    <div class="container">
      <div class="htflex">
        <div class="htitems">
          <a href="https://seller.otobaza.com/#/register" target="_blank">{{ $t('create_store') }}</a>
          <n-link to="/faq">
            {{ $t('faq') }}
          </n-link>
        </div>
        <div class="mobile_top_flex">
          <GeoLocation />
          <div class="dropdown langdrop">
            <button
              id="droplang"
              aria-expanded="false"
              aria-haspopup="true"
              class="btn dropdown-toggle"
              data-toggle="dropdown"
              type="button"
            >
              {{ currentLang }}
            </button>
            <div aria-labelledby="dropdownlang" class="dropdown-menu">
              <n-link
                v-for="lang in langs"
                :key="lang"
                class="dropdown-item"
                :class="{'active':currentLang === lang}"
                :to="changeLanguage(lang)"
              >
                {{ lang }}
              </n-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import GeoLocation from '@/components/Common/Header/GeoLocation'
export default {
  name: 'HeaderTop',
  components: { GeoLocation },
  data () {
    return {
      langs: ['AZ', 'RU', 'EN', 'TR']
    }
  },
  computed: {
    currentLang () {
      return this.$i18n.locale.toUpperCase()
    }
  },
  methods: {
    changeLanguage (lang) {
      return this.switchLocalePath(lang.toLowerCase())
    }
  }
}
</script>
