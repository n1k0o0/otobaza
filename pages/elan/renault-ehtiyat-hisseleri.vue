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
            <h1>
              <strong>İnsanlar niyə daha &ccedil;ox Renault avtomobillərinə &uuml;st&uuml;nl&uuml;k verirlər?</strong>
            </h1>
            <p>
              <strong>Renault avtomobilləri</strong> illərdir əhəmiyyətli bir yer qazanmış bir markadır və bir &ccedil;ox
              insanın &uuml;st&uuml;nl&uuml;k verdiyi markalardan biridir. <strong>Renault avtomobillərinə</strong>
              &uuml;st&uuml;nl&uuml;k verilməsinin bir ne&ccedil;ə səbəbi var. Belə ki, <strong>Renault
                avtomobilləri</strong> dəbli və m&uuml;asir dizaynları ilə diqqət &ccedil;əkir. İnnovativ dizaynlar
              insanların diqqətini cəlb edir və nəqliyyat vasitələrinin xarici g&ouml;r&uuml;n&uuml;ş&uuml;nə &ouml;nəm
              verənlər tərəfindən se&ccedil;ilir. Digər bir səbəb isə təhl&uuml;kəsizlikdir. <strong>Renault
                avtomobilləri </strong>təhl&uuml;kəsizliyi ilə də digər avtomobil markalarından se&ccedil;ilir. <strong>Renault
                avtomobilləri </strong>y&uuml;ksək performanslı m&uuml;hərriklərlə istehsal edilir ki, bu da &nbsp;avtomobillərin
              performansını maksimuma &ccedil;atdırmaq &uuml;&ccedil;&uuml;n m&uuml;xtəlif texnologiyaların
              istifadəsinin nəticəsidir. Buna g&ouml;rə də s&uuml;r&uuml;c&uuml;l&uuml;k həzzini axtaran s&uuml;r&uuml;c&uuml;lər
              <strong>Renault avtomobillərinə</strong> &uuml;z tuturlar.
            </p>
            <p>&nbsp;</p>
            <h2><strong>Renault ehtiyat hissələri keyfiyyətlidir?</strong></h2>
            <p>
              Renault avtomobil sənayesində keyfiyyətli avtomobillər istehsal etməklə yanaşı keyfiyyətli <strong>avtomobil
                ehtiyat</strong> <strong>hissələri</strong> təklif edir. <strong>Renault ehtiyat hissələri</strong> y&uuml;ksək
              keyfiyyətli materiallardan hazırlanır və orijinal hissələrlə eyni standartlara cavab verir. Buna g&ouml;rə
              də <strong>Renault ehtiyat hissələri</strong> avtomobilinizin performansını və təhl&uuml;kəsizliyini
              artırmaq &uuml;&ccedil;&uuml;n ən uyğun variantlardan biridir. <strong>Orijinal Renault ehtiyat
                hissələri</strong> avtomobilinizin &ouml;mr&uuml;n&uuml; uzatmaq, nasazlıqların qarşısını almaq və
              avtomobilinizin təhl&uuml;kəsizliyini qorumaq &uuml;&ccedil;&uuml;n ən uyğun se&ccedil;imdir. Bundan əlavə
              <strong>orijinal Renault ehtiyat hissələri</strong> avtomobilinizin zəmanət m&uuml;ddəti ərzində istifadə
              edilməli olan hissələr sırasındadır. Buna g&ouml;rə də avtomobilinizin performansını qorumaq &uuml;&ccedil;&uuml;n<strong>
                orijinal Renault ehtiyat hissələrini</strong> se&ccedil;mək vacibdir.
            </p>
            <p>&nbsp;</p>
            <h2><strong>Orijinal Renault ehtiyat hissəsini necə təyin etmək olar?</strong></h2>
            <p>
              <strong>Renault avtomobilləri</strong> orijinal ehtiyat hissələrinin istifadəsi baxımından &ccedil;ox
              vasvası bir markadır. Renault m&uuml;ştərilərini təhl&uuml;kəsiz və y&uuml;ksək keyfiyyətli <strong>avtomobil</strong>
              <strong>ehtiyat</strong> <strong>hissələri</strong> ilə təmin etməyə &ccedil;alışır. <strong>Orijinal
                Renault ehtiyat hissələri</strong> avtomobilinizin optimal performansını və təhl&uuml;kəsizliyini təmin
              etmək &uuml;&ccedil;&uuml;n nəzərdə tutulub.
            </p>
            <p>
              <strong>Orijinal Renault ehtiyat hissələrini</strong> m&uuml;əyyən etmək &uuml;&ccedil;&uuml;n ilk n&ouml;vbədə
              avtomobilinizin modelini və ilini bilməlisiniz. Renault hər bir model &uuml;&ccedil;&uuml;n m&uuml;xtəlif
              <strong>ehtiyat hissələri</strong> təklif edir, ona g&ouml;rə də avtomobilinizin modelinə uyğun ehtiyat
              hissələrini m&uuml;əyyən etmək vacibdir. Bundan əlavə, <strong>Renault avtomobilləri</strong> &uuml;&ccedil;&uuml;n
              x&uuml;susi hazırlanmış <strong>avtomobil ehtiyat</strong> <strong>hissələri</strong> digər markaların
              ehtiyat hissələrindən fərqlənir.
            </p>
            <p>
              <strong>Orijinal Renault ehtiyat hissələrini</strong> m&uuml;əyyən etməyin başqa bir yolu Renault servis
              mərkəzlərinə m&uuml;raciət etməkdir. Bu servis mərkəzləri avtomobiliniz &uuml;&ccedil;&uuml;n uyğun
              ehtiyat hissələrini m&uuml;əyyən etmək və sizə ən uyğun variantları təklif etmək &uuml;zrə
              ixtisaslaşmışdır. Onlar həm&ccedil;inin <strong>orijinal Renault ehtiyat hissələrinin</strong> təhl&uuml;kəsizliyi
              və keyfiyyəti ilə bağlı sizə etibarlı şəkildə k&ouml;mək edə bilərlər.
            </p>
            <h2><strong>Renault ehtiyat hissələri bahalıdırmı?</strong></h2>
            <p>
              <strong>Renault ehtiyat</strong> <strong>hissələri</strong> &uuml;mumiyyətlə keyfiyyətli və y&uuml;ksək
              performanslı hissələr kimi tanınır. Buna g&ouml;rə də <strong>orijinal</strong> <strong>Renault</strong>
              <strong>ehtiyat</strong> <strong>hissələri </strong>bir qədər baha ola bilər. Bununla belə, orijinal
              ehtiyat hissələrinin keyfiyyəti, təhl&uuml;kəsizliyi və davamlılığı avtomobilinizin uzun&ouml;m&uuml;rl&uuml;l&uuml;y&uuml;n&uuml;
              və daha az problemi təmin edir. Həm&ccedil;inin <strong>orijinal Renault ehtiyat hissələrinin</strong>
              qiymətləri hissənin n&ouml;v&uuml;ndən, modelindən və ilindən asılı olaraq dəyişir.
            </p>
            <p>
              Digər tərəfdən, bazarda orijinal olmayan və ya keyfiyyətsiz <strong>avtomobil ehtiyat hissələri</strong>
              də m&ouml;vcuddur. Bu ehtiyat hissələrinin qiymətləri adətən aşağıdır, lakin onların keyfiyyəti də m&uuml;vafiq
              olaraq aşağıdır. Belə <strong>avtomobil ehtiyat</strong> <strong>hissələri</strong> avtomobilinizdə daha
              tez-tez nasazlıqlara və problemlərə səbəb ola bilər və uzun m&uuml;ddətdə daha baha başa gələ bilər.
            </p>
            <p>&nbsp;</p>
            <h2><strong>Renault avtomobillərinin əsas problemləri nələrdir?</strong></h2>
            <p>
              Renault illərdir avtomobil sənayesində keyfiyyətli və davamlı avtomobillər istehsal edən bir markadır.
              Bununla belə, bəzi <strong>Renault</strong> <strong>avtomobilləri</strong> modellərində m&uuml;əyyən
              problemlər yarana bilər. Məsələn, Renault Megane modellərində tez-tez elektron nasazlıqlar, kondisioner
              problemləri və s&uuml;kan qutusunda problemlər olur. Renault Clio modellərində isə s&uuml;rət qutusu
              problemləri və m&uuml;hərrikin &ccedil;ox yanacaq sərf etməsi kimi problemlər ola bilər. Renault Scenic
              modellərində əyləc sistemlərinə rast gəlinir. Bu problemlər zamanla meydana gələ biləcək aşınma səbəbiylə
              meydana gələ bilər. Lakin m&uuml;ntəzəm texniki qulluq və <strong>orijinal</strong>
              <strong>ehtiyat</strong> <strong>hissələr</strong> istifadə etməklə problemin qarşısını almaq m&uuml;mk&uuml;nd&uuml;r.
            </p>
            <p>&nbsp;</p>
            <ol>
              <li>
                <u><a href="https://otobaza.com/elan/mercedes-ehtiyat-hisseleri">Mercedes ehtiyat hissələrini buradan
                  əldə edə bilərsiniz</a></u>
              </li>
              <li><u>KİA ehtiyat hissələrini buradan əldə edə bilərsiniz</u></li>
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
                <u><a href="https://otobaza.com/elan/volkswagen-ehtiyat-hisseleri">Volkswagen ehtiyat hissələrini
                  buradan əldə edə bilərsiniz</a></u>
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
                  hissələrini buradan əldə edə bilərsiniz</a></u>
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
      title: 'Renault ehtiyat hissələri | Onlayn mağaza | Otobaza',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Orijinal ehtiyat hissələrini Otobaza saytından və ya Renault servis mərkəzlərindən əldə edə bilərsiniz'
        }
      ]
    }
  }
}
</script>
