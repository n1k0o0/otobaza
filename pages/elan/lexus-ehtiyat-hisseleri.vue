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
            <h1>İnsanlar niyə Lexus avtomobillərinə daha &ccedil;ox &uuml;st&uuml;nl&uuml;k verirlər?</h1>
            <p>
              Lexus avtomobilləri unikal dizayn, keyfiyyətli materiallar, yaxşı performans və z&ouml;vql&uuml; s&uuml;r&uuml;c&uuml;l&uuml;k
              təcr&uuml;bəsi kimi amillərə g&ouml;rə bir &ccedil;ox insan tərəfindən se&ccedil;ilir. Bundan əlavə, Lexus
              avtomobilləri ilk n&ouml;vbədə sport və dinamik s&uuml;r&uuml;c&uuml;l&uuml;k təcr&uuml;bəsi axtaran s&uuml;r&uuml;c&uuml;lər
              &uuml;&ccedil;&uuml;n nəzərdə tutulmuşdur və bu s&uuml;r&uuml;c&uuml;lərin ehtiyaclarına cavab verən bir
              &ccedil;ox x&uuml;susiyyətlərə sahibdir.
            </p>
            <p>
              Lexus avtomobilləri digər premium brendlərdən fərqli &uuml;slub və xarakterə malikdir və bu, s&uuml;r&uuml;c&uuml;lərin
              avtomobil se&ccedil;ərkən se&ccedil;diyi əsas amillərdən biridir. Bundan əlavə Lexus, avtomobil
              texnologiyasındakı ən son yeniliklərdən istifadə edərək avtomobillərini dizayn etməyə davam edir və s&uuml;r&uuml;c&uuml;lərinə
              ən yaxşı s&uuml;r&uuml;c&uuml;l&uuml;k təcr&uuml;bəsi təqdim etməyi hədəfləyir.
            </p>
            <h2><strong>&nbsp;</strong></h2>
            <h2>Lexus ehtiyat hissələri keyfiyyətlidir?</h2>
            <p>
              Lexus ehtiyat hissələrinin keyfiyyəti brendin istehsal standartlarından və keyfiyyətə nəzarət
              proseslərindən asılıdır. Bununla belə, ehtiyat hissələrinin keyfiyyəti istehsal xərcləri, tədar&uuml;k
              zənciri və bazar şərtləri kimi digər amillərdən də asılıdır. Bundan əlavə, Lexus ehtiyat hissələrinin
              keyfiyyəti də orijinal və ya &uuml;&ccedil;&uuml;nc&uuml; tərəf ehtiyat hissələri kimi təsvir edilə bilən
              alternativ variantlarla m&uuml;qayisədə fərqli ola bilər. Lexus avtomobiliniz &uuml;&ccedil;&uuml;n x&uuml;susi
              ehtiyat hissələrinə ehtiyacınız varsa, markanın səlahiyyətli dilerləri və ya servis mərkəzləri ilə əlaqə
              saxlaya bilərsiniz.
            </p>
            <p>&nbsp;</p>
            <h2>Orijinal Lexus ehtiyat hissəsini necə m&uuml;əyyən etmək olar?</h2>
            <p>
              Orijinal Lexus ehtiyat hissələri avtomobilin istehsal&ccedil;ısı tərəfindən istehsal olunur və Lexus
              loqosu və ya markası ilə qeyd olunur. Həmin bu Lexus ehtiyat hissələri avtomobilin performansını və təhl&uuml;kəsizliyini
              qorumaq &uuml;&ccedil;&uuml;n nəzərdə tutulub və orijinal spesifikasiyalara uyğun istehsal olunub.
              Orijinal Lexus ehtiyat hissələrinin avtomobilin orijinal avadanlığı ilə eyni keyfiyyətdə və uyğunluğuna
              zəmanət verilir. Orijinal Lexus ehtiyat hissələri səlahiyyətli Lexus dilerləri, servis mərkəzləri və ya
              onlayn dilerlər tərəfindən satıla bilər.
            </p>
            <p>&nbsp;</p>
            <h2><strong>Lexus ehtiyat hissələri bahalıdırmı?</strong></h2>
            <p><strong>&nbsp;</strong></p>
            <p>
              <strong>Orijinal Lexus ehtiyat hissələri</strong> &uuml;mumiyyətlə digər <strong>avtomobil ehtiyat
                hissələri</strong> ilə m&uuml;qayisədə daha bahalıdır. Bununla belə, bu əlavə xərc y&uuml;ksək keyfiyyəti,
              uzun&ouml;m&uuml;rl&uuml;l&uuml;y&uuml; və avtomobilin performansını qoruduğu &uuml;&ccedil;&uuml;n
              avtomobil həvəskarlarına g&ouml;rə y&uuml;ksək məbləğ ciddi narahatlıq yaratmır. Orijinal olmayan <strong>ehtiyat
                hissələri</strong> <strong>orijinal</strong> <strong>Lexus ehtiyat hissələri </strong>ilə m&uuml;qayisədə
              daha ucuz ola bilər, lakin keyfiyyət və uzun&ouml;m&uuml;rl&uuml;l&uuml;klə bağlı qeyri-m&uuml;əyyənliyə
              səbəb ola bilər. Qiyməti <strong>orijinal olmayan avtomobil ehtiyat hissələr </strong>ilə m&uuml;qayisədə
              baha olsa da, <strong>orijinal Lexus ehtiyat hissələrinə</strong> &uuml;st&uuml;nl&uuml;k verilməlidir,
              &ccedil;&uuml;nki onlar avtomobilin performansı və zəmanət şərtlərinə uyğun işləyəcək.
            </p>
            <p>&nbsp;</p>
            <h2>Lexus avtomobillərinin əsas problemləri və ehtiyat hissələri</h2>
            <p>
              Lexus avtomobillərinin bəzi &uuml;mumi problemləri elektrik sistemi, s&uuml;kan sistemi, kondisioner və
              soyutma sistemi, əyləc mexanizmi və təkər təzyiqinə nəzarət sistemi kimi avtomobil sistemlərindən asılı
              olaraq dəyişə bilər.
            </p>
            <p>
              Bu problemləri həll etmək &uuml;&ccedil;&uuml;n orijinal Lexus ehtiyat hissələrinin istifadəsi avtomobil
              sistemlərinin d&uuml;zg&uuml;n işləməsini və avtomobilin səmərəliliyini təmin edə bilər. Bundan əlavə, bu
              ehtiyat hissələrinin keyfiyyəti və performansı avtomobilin uzun m&uuml;ddət rahat işləməsini təmin
              edir.
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
      title: 'Lexus ehtiyat hissələri | Onlayn mağaza | Otobaza',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Orijinal ehtiyat hissələrini Otobaza saytından və Lexus servis mərkəzlərindən əldə edə bilərsiniz.'
        }
      ]
    }
  }
}
</script>
