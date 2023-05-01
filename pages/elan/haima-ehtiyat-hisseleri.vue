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
            <h1>İnsanlar niyə daha &ccedil;ox Haima avtomobillərinə &uuml;st&uuml;nl&uuml;k verirlər?</h1>
            <p>
              M&uuml;əyyən bir səbəbə g&ouml;rə, he&ccedil; də b&uuml;t&uuml;n insanlar Haima avtomobillərinə &uuml;st&uuml;nl&uuml;k
              verməyə bilər. İnsanların &ldquo;Haima&rdquo; avtomobilinə &uuml;st&uuml;nl&uuml;k verməsi onun şəxsi
              &uuml;st&uuml;nl&uuml;kləri, ehtiyacları, b&uuml;dcəsi və digər amillərdən asılı olaraq dəyişə bilər.
              Məsələn, kimsə sərfəli və keyfiyyətli avtomobil axtarırsa, Haima onlar &uuml;&ccedil;&uuml;n uyğun se&ccedil;im
              ola bilər.
            </p>
            <p>&nbsp;</p>
            <h2>Haima ehtiyat hissələri keyfiyyətlidirmi?</h2>
            <p>
              Haima ehtiyat hissələrinin keyfiyyəti istehsal&ccedil;ı, təchizat&ccedil;ı və ehtiyat hissənin təyinatına
              həm&ccedil;inin digər amillərə qədər dəyişə bilər. &Uuml;mumiyyətlə, Haima ehtiyat hissələrinin
              keyfiyyətini &uuml;mumi qiymətləndirmək &ccedil;ətindir, lakin m&uuml;ştərilərin fərdi təcr&uuml;bələri
              ehtiyat hissələrinin performansı və uzunm&uuml;ddətli istifadəsi haqqında sizdə fikir formalaşdıra
              bilər.
            </p>
            <p>&nbsp;</p>
            <h2>Orijinal Haima ehtiyat hissəsini necə m&uuml;əyyən etmək olar?</h2>
            <p>
              Orijinal Haima ehtiyat hissələri avtomobil istehsal&ccedil;ısı tərəfindən istehsal olunur və avtomobilin
              markasına uyğun dizayn edilir. Bu hissələr avtomobilin orijinal performansını qoruyan və avtomobilin&nbsp;
              &ouml;mr&uuml;n&uuml; uzadan ehtiyat hissələridir. Orijinal Haima ehtiyat hissələrini Haima səlahiyyətli
              xidmət mərkəzlərindən və ya Haima səlahiyyətli təchizat&ccedil;ılarından əldə etmək olar. Avtomobilin
              modelini, ilini və digər məlumatları g&ouml;stərməklə orijinal ehtiyat hissələrini m&uuml;əyyən etmək
              &uuml;&ccedil;&uuml;n faktura və ya zəmanət sənədlərindən istifadə etmək olar.
            </p>
            <p>&nbsp;</p>
            <h2>Haima ehtiyat hissələri bahadırmı?</h2>
            <p>
              Haima ehtiyat hissələrinin qiyməti ehtiyat hissəsinin n&ouml;v&uuml;ndən, keyfiyyətindən və digər
              amillərdən asılı olaraq dəyişə bilər. Bəzi Haima ehtiyat hissələrinin qiyməti digər markaların ehtiyat
              hissələri ilə eyni bəzən isə daha baha ola bilər. Həm&ccedil;inin, qiymət m&ouml;vcudluq, kommersiya
              qiymət siyasətləri və digər amillərə g&ouml;rə dəyişə bilər. Ehtiyat hissələrinin qiymətini daha ətraflı
              &ouml;yrənmək &uuml;&ccedil;&uuml;n Haima səlahiyyətli servis mərkəzləri və ya səlahiyyətli təchizat&ccedil;ılarla
              əlaqə saxlaya bilərsiniz.
            </p>
            <p>&nbsp;</p>
            <h2>Haima avtomobillərinin əsas problemləri və ehtiyat hissələri?</h2>
            <p>
              Hər bir marka və model &uuml;&ccedil;&uuml;n fərdi olaraq dəyişə bilən problemlər ola bilər. Amma &uuml;mumilikdə,
              Haima avtomobilləri ilə bağlı bildirilən bəzi məsələlərə elektrik sistemi, avtomobilin təhl&uuml;kəsizliyi,
              g&uuml;c və performans kimi məsələlər daxil ola bilər. Lakin bu məsələlər hər Haima avtomobilinə aid
              edilmir və Haima avtomobilinin bu problemləri n&uuml;mayiş etdirməməsi m&uuml;mk&uuml;nd&uuml;r.
            </p>
            <p>
              Haima ehtiyat hissələrinin keyfiyyəti istehsal&ccedil;ıdan, təchizat&ccedil;ıdan hissənin təyinatından və
              digər amillərdən asılı olaraq dəyişə bilər. Bununla belə, orijinal Haima ehtiyat hissələri &uuml;mumiyyətlə
              y&uuml;ksək keyfiyyətlidir və avtomobilin orijinal performansını y&uuml;ksək saxlayır. Haima ehtiyat
              hissələrinin daha ətraflı qiymətləndirilməsi &uuml;&ccedil;&uuml;n Haima səlahiyyətli servis mərkəzləri və
              ya səlahiyyətli təchizat&ccedil;ılarla əlaqə saxlaya bilərsiniz.
            </p>
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
      title: 'Haima ehtiyat hissələri | Onlayn mağaza | Otobaza',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Orijinal ehtiyat hissələrini Otobaza saytından və ya Haima servis mərkəzlərindən əldə edə bilərsiniz.'
        }
      ]
    }
  }
}
</script>
