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
          <div v-if="ad_special.length" class="elan_wrapper">
            <div class="elan_header">
              <h2 class="">
                {{ $t('used.special') }}
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
              <strong>İnsanlar niyə daha &ccedil;ox Suzuki avtomobillərinə &uuml;st&uuml;nl&uuml;k verirlər?</strong>
            </h1>
            <p>
              <strong>Suzuki</strong> <strong>avtomobilləri </strong>d&uuml;nya miqyasında avtomobil sənayesində
              adından s&ouml;z etdirən marka kimi se&ccedil;ilir. İnsanların Suzuki avtomobillərinə &uuml;st&uuml;nl&uuml;k
              verməsinin bir &ccedil;ox səbəbi var. <strong>Suzuki avtomobilləri</strong> ilk n&ouml;vbədə etibarlılığı
              ilə se&ccedil;ilir. Y&uuml;ksək keyfiyyətli materiallardan hazırlanmış avtomobillər təhl&uuml;kəsizliyi və
              davamlılığı ilə diqqət &ccedil;əkir. Bundan əlavə, <strong>Suzuki</strong> <strong>avtomobilləri </strong>ekoloji
              cəhətdən təmiz x&uuml;susiyyətlərə malikdir. Az emissiyalı m&uuml;hərrikləri və yanacağa qənaət edən
              texnologiyaları sayəsində <strong>Suzuki avtomobilləri</strong> də ətraf m&uuml;hitə diqqətli istehlak&ccedil;ıların
              &uuml;st&uuml;nl&uuml;kləri sırasındadır.
            </p>
            <p>
              <strong>Suzuki avtomobilləri</strong> həm də qənaətcil və praktik nəqliyyat vasitələri kimi tanınır.
              Onların qiymətlərinin digər markaların avtomobillərinə nisbətən daha m&uuml;nasib olması b&uuml;dcəsi
              məhdud olan insanların se&ccedil;iminə xitab edir. Bundan əlavə, <strong>Suzuki avtomobilləri</strong> ki&ccedil;ik
              &ouml;l&ccedil;&uuml;lərə malik olduğundan və manevr etmək asan olduğundan, şəhərin tıxaclı nəqliyyatında
              rahat s&uuml;r&uuml;c&uuml;l&uuml;k təcr&uuml;bəsi təqdim edirlər.
            </p>
            <p>&nbsp;</p>
            <h2><strong>Suzuki ehtiyat hissələri keyfiyyətlidir?</strong></h2>
            <p>
              Suzuki keyfiyyətli avtomobilləri ilə avtomobil sənayesində tanınmış markadır. Ona g&ouml;rə də<strong>
                Suzuki ehtiyat hissələri</strong> də y&uuml;ksək keyfiyyətlə istehsal olunur.
            </p>
            <p>
              <strong>Suzuki ehtiyat hissələri</strong> avtomobil istehsalında istifadə olunan eyni y&uuml;ksək
              keyfiyyətli materiallardan hazırlanır. Bu hissələr <strong>Suzuki orijinal ehtiyat hissələri</strong>
              (OEM) kimi istehsal olunur və avtomobilin performansı, təhl&uuml;kəsizliyi və davamlılığı baxımından
              avtomobilin &ouml;z hissələri ilə eyni x&uuml;susiyyətlərə malikdir.
            </p>
            <p>
              Bundan əlavə, <strong>Suzuki ehtiyat hissələri</strong> keyfiyyətə nəzarət testlərindən ke&ccedil;ir və
              istehsal zamanı ciddi standartlara riayət edilir. Bu, hissələrin keyfiyyətini və etibarlılığını təmin
              edir.
            </p>
            <p>
              <strong>Suzuki ehtiyat hissələri </strong>həm&ccedil;inin sərfəli olması ilə tanınır. Bu, istehlak&ccedil;ılara
              <strong>orijinal Suzuki</strong> <strong>ehtiyat hissələri</strong> sərfəli qiymətə almağa imkan verir.
            </p>
            <h2><strong>Orijinal Suzuki ehtiyat hissəsini necə təyin etmək olar?</strong></h2>
            <p>
              Bazarda saxta və ya keyfiyyətsiz məhsullardan qorunmaq &uuml;&ccedil;&uuml;n <strong>orijinal
                Suzuki</strong> <strong>ehtiyat</strong> <strong>hissələri </strong>alarkən ehtiyat hissənin
              orijinallığını təyin edə bilmək x&uuml;susilə vacibdir. Bunun &uuml;&ccedil;&uuml;n aşağıdakıları bilməkdə
              fayda var:
            </p>
            <p>
              Etibarlı yerdən alın: <strong>Orijinal Suzuki</strong> <strong>ehtiyat hissəsi </strong>almaq
              istəyirsinizsə, avtomobiliniz &uuml;&ccedil;&uuml;n uyğun ehtiyat hissələrini təmin etməyin etibarlı yolu
              <strong>orijinal Suzuki ehtiyat hissələri </strong>etibarlı yerdən almaq olacaq.
            </p>
            <p>
              Hissə n&ouml;mrələrini yoxlayın: <strong>Orijinal Suzuki ehtiyat hissələri</strong> hər birində hissə n&ouml;mrəsi
              ilə istehsal edilir. Bu n&ouml;mrələr ehtiyat hissələrin d&uuml;zg&uuml;nl&uuml;y&uuml;n&uuml; m&uuml;əyyən
              etmək &uuml;&ccedil;&uuml;n istifadə edilə bilər.
            </p>
            <p>
              Onlayn axtarış: <strong>Orijinal Suzuki ehtiyat hissələri</strong> haqqında məlumatı internetdə Suzukinin
              rəsmi saytında və ya Otobazadan tapa bilərsiniz.
            </p>
            <p>
              Yuxarıda g&ouml;stərilən &uuml;sullardan istifadə etməklə siz <strong>avtomobil ehtiyat
                hissələri </strong>alarkən <strong>orijinal</strong> <strong>Suzuki ehtiyat hissələri </strong>se&ccedil;imini
              rahatlıqla edəcəksiniz.
            </p>
            <p>&nbsp;</p>
            <h2><strong>Suzuki ehtiyat hissələri bahalıdırmı?</strong></h2>
            <p>
              <strong>Suzuki ehtiyat hissələri</strong> orijinallığına və keyfiyyətinə g&ouml;rə adətən bir qədər baha
              olur. Bunun səbəbi Suzukinin y&uuml;ksək keyfiyyətli materiallardan istifadə edərək istehsal etməsi və
              hissələrin davamlılığı və işləməsi &uuml;&ccedil;&uuml;n y&uuml;ksək standartlara sahib olmasıdır. Bununla
              belə, <strong>Suzuki ehtiyat hissələri</strong> alarkən orijinal hissələrin avtomobilin &ouml;mr&uuml; və
              performansını qorumaq &uuml;&ccedil;&uuml;n vacib olduğunu unutmaq olmaz.
            </p>
            <p>
              Aşağı keyfiyyətli və ya saxta hissələri istifadə edərək qısa m&uuml;ddətdə pula qənaət edə bilərsiniz,
              lakin, bu, avtomobilin performansına mənfi təsir g&ouml;stərə və avtomobilin daha tez-tez texniki qulluq
              tələb etməsinə səbəb ola bilər.
            </p>
            <p>
              Buna g&ouml;rə də, <strong>Suzuki ehtiyat hissələrinin</strong> qiyməti birbaşa avtomobilinizin təhl&uuml;kəsizliyindən
              və dayanıqlığından asılıdır. Keyfiyyətli və <strong>orijinal</strong> <strong>Suzuki ehtiyat
                hissələri</strong> alarkən sərfəli qiymətə almaq &uuml;&ccedil;&uuml;n Otobazaya m&uuml;raciət edə
              bilərsiniz.
            </p>
            <p>&nbsp;</p>
            <h2><strong>Suzuki avtomobillərinin əsas problemləri nələrdir?</strong></h2>
            <p>
              <strong>Suzuki avtomobilləri</strong> &uuml;mumiyyətlə davamlı və etibarlı avtomobillər kimi tanınır.
              Ancaq bəzi modellərdə &uuml;mumi problemlər var. Məsələn, Suzuki Grand Vitara modellərində m&uuml;hərrik
              problemləri ilə qarşılaşılır. Bu problemlər adətən m&uuml;hərrikin yağ nasosunun və sensorların nasazlığı
              ilə bağlı olur. Həm&ccedil;inin, Suzuki SX4 modellərində &uuml;mumi problem s&uuml;kan sensorlarının
              nasazlığıdır.
            </p>
            <p>&nbsp;</p>
            <p>
              Bu problemlər bəzi <strong>Suzuki avtomobilləri</strong> modellərində g&ouml;r&uuml;lən problemlərin
              yalnız bir ne&ccedil;ə n&uuml;munəsidir. Bununla belə, <strong>Suzuki avtomobilləri</strong> &uuml;mumiyyətlə
              etibarlı və davamlı nəqliyyat vasitələri kimi tanınır.
            </p>
            <p>
              <strong>Suzuki avtomobilləri</strong> ilə bağlı problemlər avtomobilin yaşından, istifadə qaydasından,
              texniki xidmət tarix&ccedil;əsindən və digər amillərdən asılı olaraq dəyişə bilər. Lakin, adətən, bu
              problemlər <strong>orijinal ehtiyat hissələr</strong> və m&uuml;ntəzəm texniki qulluq ilə həll edilə
              bilər.
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
      ad_vip: 'Used/ad_vip',
      ad_special: 'Used/ad_special'
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
      title: 'Suzuki ehtiyat hissələri | Onlayn mağaza | Otobaza',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Orijinal ehtiyat hissələrini Otobaza saytından və ya Suzuki servis mərkəzlərindən əldə edə bilərsiniz.'
        }
      ]
    }
  }
}
</script>
