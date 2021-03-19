<template>
  <div class="container">
    <div class="mcontainer mh60vh">
      <div class="response-message about-title">
        <div class="mkub mkubsuccess kubflex">
          <svg
            height="35.824"
            viewBox="0 0 35.824 35.824"
            width="35.824"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              id="Path_166"
              d="M22.11,3.149a5.221,5.221,0,0,0-3.241,1.125A5.255,5.255,0,0,0,13.714,0H4.2V3.149H0V35.824H35.824V3.149Zm0,2.1H33.725V25.328H22.11a5.222,5.222,0,0,0-3.149,1.052V8.4A3.152,3.152,0,0,1,22.11,5.248ZM18.961,30.576a3.152,3.152,0,0,1,3.149-3.149H33.725v2.1H22.11A5.234,5.234,0,0,0,18.961,30.576ZM6.3,2.1h7.417a3.152,3.152,0,0,1,3.149,3.149V26.38a5.222,5.222,0,0,0-3.149-1.052H6.3ZM4.2,5.248v22.18h9.516a3.152,3.152,0,0,1,3.149,3.149,5.234,5.234,0,0,0-3.149-1.05H2.1V5.248ZM2.1,31.626H13.714a3.154,3.154,0,0,1,2.968,2.1H2.1Zm17.043,2.1a3.154,3.154,0,0,1,2.968-2.1H33.725v2.1Zm0,0"
              data-name="Path 166"
              fill="#fff"
            />
          </svg>
        </div>
        <div class="rminfo">
          <h2 class="rmtt">
            {{ $t('autocatalog') }}
          </h2>
        </div>
      </div>

      <!-- catalog list title -->
      <div class="catalog-section">
        <div class="catalog-cover">
          <div class="container">
            <ul class="catalog-type">
              <li>
                <n-link :to="localePath('kataloq-mashin-kataloqu')">
                  {{ $t('by_alphabet') }}
                </n-link>
              </li>
              <li>
                <n-link :to="localePath('kataloq-mashin-kataloqu-brend')">
                  {{ $t('by_logo') }}
                </n-link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <!-- according to alphabetical list -->
      <div class="container">
        <nuxt-child />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'CatalogAlphabet',
  layout: 'pages',
  middleware: ['redirectToAlphabet'],
  nuxtI18n: {
    paths: {
      az: '/kataloq',
      en: '/catalog',
      ru: '/katalog'
    }
  }
}
</script>
