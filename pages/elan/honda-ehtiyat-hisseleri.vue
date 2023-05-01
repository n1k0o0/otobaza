<template>
  <div>
    <template v-if="$fetchState.pending">
      <SearchPlaceholder />
    </template>
    <template v-else-if="$fetchState.error">
      <div class="container">
        <div class="mcontainer mh60vh">
          <div class="response-message">
            <div class="mkub mkubfail"></div>
            <div class="rminfo">
              <h4 class="rmtt">
                {{ $t('not_found') }}`
              </h4>
              <p class="rmtxt">
                {{ $fetchState.error }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </template>
    <template v-else>
      <div class="container position-relative">
        <ol class="breadcrumb-custom">
          <li class="breadcrumb-item">
            <a href="/">Home</a>
          </li>
          <li aria-current="page" class="breadcrumb-item active">
            <a>{{ $t('home_search.used') }}</a>
          </li>
        </ol>
        <div class="search_wrap d-flex flex-column">
          <div class="hr-wrap">
            <h1 class="title hr-text">
              {{ $t('search') }}
            </h1>
          </div>
          <UsedFilter :search="search" />
          <div v-if="ad_vip.length" class="elan_wrapper">
            <div class="elan_header">
              <h2 class="">
                {{ $t('used.vip') }}
              </h2>
              <!--     all-vip-->
            </div>
            <div class="search_results_items">
              <UsedPart
                v-for="(ad,i) in ad_vip"
                :key="i"
                :card="ad"
              />
            </div>
          </div>
          <div class="elan_header mb-0">
            <h2>{{ $t('used.last') }}</h2>
          </div>
          <UsedParts :loading="loadingResults" :search="search" />
          <div class="seo_content mt-5">
            <h1>İnsanlar niyə daha &ccedil;ox Honda avtomobillərinə &uuml;st&uuml;nl&uuml;k verirlər?</h1>
            <p>
              Honda avtomobilləri b&uuml;t&uuml;n d&uuml;nyada etibarlı, davamlı və y&uuml;ksək performanslı olması ilə
              tanınır. Bundan əlavə Honda, avtomobilin təhl&uuml;kəsizliyini, texnoloji x&uuml;susiyyətlərini və əla s&uuml;r&uuml;c&uuml;l&uuml;k
              təcr&uuml;bəsini təmin etmək &uuml;&ccedil;&uuml;n b&ouml;y&uuml;k diqqət g&ouml;stərir. İnsanların Honda
              avtomobillərinə &uuml;st&uuml;nl&uuml;k vermələrinə səbəb olan m&uuml;h&uuml;m amillər bunlardır. Həm&ccedil;inin
              Honda avtomobilləri, uzunm&uuml;ddətli dəyərini saxlayaraq, rəqiblərinə nisbətən daha az servis və texniki
              xidmət xərclərinə malikdirlər.
            </p>
            <p>&nbsp;</p>
            <h2>Honda ehtiyat hissələri keyfiyyətlidirmi?</h2>
            <p>
              Bəli, Honda orijinal ehtiyat hissələrinin keyfiyyətinə b&ouml;y&uuml;k diqqət yetirir. Honda, avtomobilin
              təhl&uuml;kəsizliyini, performansını və səmərəliliyini qoruyacaq və uzunm&uuml;ddətli istismar xərclərini
              minimuma endirəcək ehtiyat hissələri təklif edir. Bu, avtomobilin performansını və təhl&uuml;kəsizliyini
              optimallaşdırmağa və onu uzun m&uuml;ddət təhl&uuml;kəsiz istifadə etməyə imkan verir. Bununla belə,
              orijinal Honda ehtiyat hissələri standart ehtiyat hissələrinə nisbətən daha bahalı ola bilər, lakin uzunm&uuml;ddətli
              perspektivdə daha sərfəli se&ccedil;im ola bilər.
            </p>
            <p>&nbsp;</p>
            <h2>Orijinal Honda ehtiyat hissəsini necə m&uuml;əyyən etmək olar?</h2>
            <p>
              Orijinal Honda ehtiyat hissələri Honda tərəfindən istehsal olunur və ya təsdiqlənir və yalnız
              səlahiyyətli Honda xidmət mərkəzləri tərəfindən satılır. Orijinal Honda ehtiyat hissələri avtomobilin
              seriya n&ouml;mrəsi və ya model n&ouml;mrəsi kimi x&uuml;susiyyətlərlə m&uuml;əyyən edilir və avtomobilin
              fərdi ehtiyaclarına uyğunlaşdırılır. Orijinal Honda ehtiyat hissələri avtomobilin performansını və təhl&uuml;kəsizliyini
              optimallaşdırmaq, həm&ccedil;inin səmərəliliyini qorumaq &uuml;&ccedil;&uuml;n nəzərdə tutulmuşdur.
              Bunları m&uuml;əyyən etmək &uuml;&ccedil;&uuml;n avtomobilin seriya n&ouml;mrəsi və ya model n&ouml;mrəsi
              kimi məlumatlar tələb olunur və bu məlumatlara uyğun olaraq Honda-nın m&uuml;vafiq orijinal ehtiyat
              hissəsi m&uuml;əyyən edilir.
            </p>
            <p>&nbsp;</p>
            <h2>Honda ehtiyat hissələri bahadırmı?</h2>
            <p>
              Orijinal Honda hissələri standart ehtiyat hissələrindən daha bahalı ola bilər, lakin onlar adətən daha y&uuml;ksək
              keyfiyyət və uzun&ouml;m&uuml;rl&uuml; olurlar. Avtomobilin performansını və təhl&uuml;kəsizliyini
              optimallaşdırmaq &uuml;&ccedil;&uuml;n nəzərdə tutulmuş orijinal Honda ehtiyat hissələri avtomobilin daha
              uzun m&uuml;ddət səmərəli və təhl&uuml;kəsiz işləməsini təmin edir. Bu, uzunm&uuml;ddətli perspektivdə
              daha sərfəli variant olsada, lakin qısa m&uuml;ddətdə daha bahalı ola bilər. Standart ehtiyat hissələri
              isə daha ucuz ola bilər, lakin onların &ouml;mr&uuml; original Honda ehtiyat hissələri ilə m&uuml;qayisədə
              az ola bilir. Həm&ccedil;inin Honda ehtiyat hissələri avtomobilin performansını və təhl&uuml;kəsizliyini
              optimallaşdırmaq &uuml;&ccedil;&uuml;n nəzərdə tutulduğundan, standart ehtiyat hissələri orijinal Honda
              ehtiyat hissələri qədər təhl&uuml;kəsiz olmaya bilər.
            </p>
            <p>&nbsp;</p>
            <h2>Honda avtomobillərinin əsas problemləri və ehtiyat hissələri?</h2>
            <p>
              Problemlər hər bir avtomobil modeli &uuml;&ccedil;&uuml;n fərqli ola bilər. Honda avtomobilləri &uuml;&ccedil;&uuml;n
              bildirilən bəzi &uuml;mumi problemlər bunlardır; Zəif yanacaq sərfiyyatı, s&uuml;rətlər qutusu
              problemləri, elektrik sistemindəki problemlər, kondisioner problemləri, g&uuml;c itkisi və ya avtomobilin
              titrəməsi kimi problemlər ola bilər.
            </p>
            <p>
              Orijinal Honda ehtiyat hissələri bu problemləri həll etmək &uuml;&ccedil;&uuml;n istifadə edilə bilər və
              onlar avtomobilin performansını və təhl&uuml;kəsizliyini optimallaşdırmaq &uuml;&ccedil;&uuml;n nəzərdə
              tutulduğundan, daha y&uuml;ksək keyfiyyət və uzun&ouml;m&uuml;rl&uuml;l&uuml;y&uuml; təmin edir.
              Avtomobilin problemlərini tam başa d&uuml;şmək və ən uyğun ehtiyat hissəsini se&ccedil;mək &uuml;&ccedil;&uuml;n
              avtomobili səlahiyyətli servis mərkəzinə aparmaq t&ouml;vsiyə olunur. Servis mərkəzi avtomobilin
              vəziyyətini yoxlaya və d&uuml;zg&uuml;n ehtiyat hissələrini m&uuml;əyyən edə bilər.&nbsp; Alternativ
              ehtiyat hissələri se&ccedil;mək istəyənlər təchizat&ccedil;ının etibarlılığını və keyfiyyətini araşdırmalı
              və potensial riskləri nəzərə almalıdırlar.
            </p>
            <p>&nbsp;</p>
            <ol>
              <li>
                <u><a href="https://otobaza.com/elan/mercedes-ehtiyat-hisseleri">Mercedes ehtiyat hissələrini buradan
                  əldə edə bilərsiniz</a></u>
              </li>
              <li>
                <u><a href="https://otobaza.com/elan/kia-ehtiyat-hisseleri">KİA ehtiyat hissələrini buradan əldə edə
                  bilərsiniz</a></u>
              </li>
              <li>
                <u><a href="https://otobaza.com/elan/porsche-ehtiyat-hisseleri">Porsche ehtiyat hissələrini buradan
                  əldə edə bilərsiniz</a></u>
              </li>
              <li>
                <u><a href="https://otobaza.com/elan/mazda-ehtiyat-hisseleri">Mazda ehtiyat hissələrini buradan əldə
                  edə bilərsiniz</a></u>
              </li>
              <li>
                <u><a href="https://otobaza.com/elan/hyundai-ehtiyat-hisseleri">Hyundai ehtiyat hissələrini buradan
                  əldə edə bilərsiniz</a></u>
              </li>
              <li>
                <u><a href="https://otobaza.com/elan/vaz-ehtiyat-hisseleri">VAZ ehtiyat hissələrini buradan əldə edə
                  bilərsiniz</a></u>
              </li>
              <li>
                <u><a href="https://otobaza.com/elan/renault-ehtiyat-hisseleri">Renault ehtiyat hissələrini buradan
                  əldə edə bilərsiniz</a></u>
              </li>
              <li>
                <u><a href="https://otobaza.com/elan/passat-ehtiyat-hisseleri">Passat ehtiyat hissələrini buradan əldə
                  edə bilərsiniz</a></u>
              </li>
              <li>
                <u><a href="https://otobaza.com/elan/opel-ehtiyat-hisseleri">Opel ehtiyat hissələrini buradan əldə edə
                  bilərsiniz</a></u>
              </li>
              <li>
                <u><a href="https://otobaza.com/elan/lexus-ehtiyat-hisseleri">Lexus ehtiyat hissələrini buradan əldə
                  edə bilərsiniz</a></u>
              </li>
              <li>
                <u><a href="https://otobaza.com/elan/nissan-ehtiyat-hisseleri">Nissan ehtiyat hissələrini buradan əldə
                  edə bilərsiniz</a></u>
              </li>
              <li>
                <u><a href="https://otobaza.com/elan/fiat-ehtiyat-hisseleri">Fiat ehtiyat hissələrini buradan əldə edə
                  bilərsiniz</a></u>
              </li>
              <li>
                <u><a href="https://otobaza.com/elan/honda-ehtiyat-hisseleri">Honda ehtiyat hissələrini buradan əldə
                  edə bilərsiniz</a></u>
              </li>
              <li>
                <u><a href="https://otobaza.com/elan/geely-ehtiyat-hisseleri">Geely ehtiyat hissələrini buradan əldə
                  edə bilərsiniz</a></u>
              </li>
              <li>
                <u><a href="https://otobaza.com/citroen/opel-ehtiyat-hisseleri">Citroen ehtiyat hissələrini buradan
                  əldə edə bilərsiniz</a></u>
              </li>
              <li>
                <u><a href="https://otobaza.com/elan/alfaromeo-ehtiyat-hisseleri">Alfa Romeo ehtiyat hissələrini
                  buradan əldə edə bilərsiniz</a></u>
              </li>
              <li>
                <u><a href="https://otobaza.com/elan/chery-ehtiyat-hisseleri">Chery ehtiyat hissələrini buradan əldə
                  edə bilərsiniz</a></u>
              </li>
              <li>
                <u><a href="https://otobaza.com/elan/faw-ehtiyat-hisseleri">FAW ehtiyat hissələrini buradan əldə edə
                  bilərsiniz</a></u>
              </li>
              <li>
                <a href="https://otobaza.com/elan/dacia-ehtiyat-hisseleri">Dacia ehtiyat hissələrini buradan əldə edə
                  bilərsiniz</a>
              </li>
              <li>
                <u><a href="https://otobaza.com/elan/chevrolet-ehtiyat-hisseleri">Chevrolet ehtiyat hissələri ehtiyat
                  hissələrini buradan əldə edə bilərsiniz</a></u>
              </li>
              <li>
                <u><a href="https://otobaza.com/elan/ford-ehtiyat-hisseleri">Ford ehtiyat hissələri ehtiyat
                  hissələrini buradan əldə edə bilərsiniz</a></u>
              </li>
              <li>
                <u><a href="https://otobaza.com/elan/audi-ehtiyat-hisseleri">Audi &uuml;&ccedil;&uuml;n ehtiyat
                  hissələrini buradan əldə edə bilərsiniz</a></u>
              </li>
              <li>
                <u><a href="https://otobaza.com/elan/bmw-ehtiyat-hisseleri">BMW &uuml;&ccedil;&uuml;n ehtiyat
                  hissələrini buradan əldə edə bilərsiniz</a>&nbsp;</u>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
import SearchPlaceholder from '~/components/Search/SearchPlaceholder.vue'
import UsedParts from '~/components/Used/UsedParts.vue'
import UsedFilter from '~/components/Used/UsedFilter.vue'

import { mapActions, mapGetters } from 'vuex'
import UsedPart from '~/components/Used/UsedPart.vue'

export default {
  name: 'Search',
  watchQuery: true,
  components: {
    UsedPart,
    SearchPlaceholder,
    UsedParts,
    UsedFilter
  },
  layout: 'pages',
  scrollToTop: true,
  async fetch () {
    const isNotCurrentLang = this.$i18n.locale !== this.search_lang
    if (!this.manufacturers.length || isNotCurrentLang) {
      await this.GET_CATALOG_MANUFACTURERS({ type: 'default' })
    }
    const name = this.$router.currentRoute.path.split('/').slice(-1).pop().split('-')[0]

    if (!this.manufacturer_models.length || isNotCurrentLang) {
      await this.GET_MANUFACTURER_MODELS({ manufacturer: this.brand_key(name) })
    }

    this.search.brand = this.brand_key(name)

    if (this.$route.query.model) {
      const model = this.manufacturer_models.find(manu => manu.modelId === +this.$route.query.model)
      if (model) {
        this.search.model = +model.modelId
      }
    }

    if (this.$route.query.keyword) {
      this.search.keyword = this.$route.query.keyword
    }

    this.loadingResults = true
    await this.GET_PARTS(this.search)
    await this.GET_HOME_ADS({})
    this.loadingResults = false
  },
  data () {
    return {
      loadingResults: false,
      search: {
        keyword: '',
        model: '',
        brand: ''
      }
    }
  },
  computed: {
    ...mapGetters({
      loading: 'Used/loading',
      search_lang: 'Used/search_lang',
      parts: 'Used/parts',
      search_sort_by: 'Used/sort_by',
      manufacturers: 'Used/brands',
      manufacturer_models: 'Used/models',
      brand_key: 'Used/brand_key',
      ad_vip: 'Used/ad_vip'
    })
  },
  methods: {
    ...mapActions({
      FILTER_PARTS: 'Used/FILTER_PARTS',
      GET_PARTS: 'Used/GET_PARTS',
      GET_CATALOG_MANUFACTURERS: 'Used/GET_BRANDS',
      GET_MANUFACTURER_MODELS: 'Used/GET_MODELS',
      GET_HOME_ADS: 'Used/GET_HOME_ADS'
    }),
    scrollTop () {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  },
  head () {
    return {
      title: 'Honda ehtiyat hissələri | Onlayn mağaza | Otobaza',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Orijinal ehtiyat hissələrini Otobaza saytından və ya Honda servis mərkəzlərindən əldə edə bilərsiniz.'
        }
      ]
    }
  }
}
</script>
