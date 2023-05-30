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
                v-for="(ad,i) in ad_special"
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
            <h1>İnsanlar niyə Subaru avtomobillərinə daha &ccedil;ox &uuml;st&uuml;nl&uuml;k verirlər?</h1>
            <p>
              Subaru avtomobillərinə daha &ccedil;ox &uuml;st&uuml;nl&uuml;k verilir, &ccedil;&uuml;nki onlar unikal və
              g&uuml;cl&uuml; s&uuml;r&uuml;c&uuml;l&uuml;k təcr&uuml;bəsi, g&uuml;cl&uuml; təhl&uuml;kəsizlik, davamlı
              g&uuml;cl&uuml; performans və g&uuml;cl&uuml; tam &ouml;t&uuml;r&uuml;c&uuml; (AWD) sistemi təklif
              edirlər. Bundan əlavə, Subarunun uzun&ouml;m&uuml;rl&uuml;l&uuml;y&uuml; və etibarlılığı da &uuml;st&uuml;nl&uuml;k
              verən səbəblər sırasındadır. Həm&ccedil;inin, Subaru-nun yolsuzluq (off-road) qabiliyyəti və dağ
              ətəklərində g&uuml;cl&uuml; hərəkət qabiliyyəti onu a&ccedil;ıq hava fəaliyyətinə uyğun avtomobil
              axtaranlar &uuml;&ccedil;&uuml;n &ouml;ndə gələn se&ccedil;im edir.
            </p>
            <p>&nbsp;</p>
            <h2>Subaru ehtiyat hissələri keyfiyyətlidirmi?</h2>
            <p>
              Subaru ehtiyat hissələri &uuml;mumiyyətlə keyfiyyətli və etibarlıdır. Subaru əla performans və
              etibarlılıq təklif edən avtomobillər yaratmağa diqqət yetirir və buna g&ouml;rə də ehtiyat hissələrinin
              eyni dərəcədə y&uuml;ksək keyfiyyətli və etibarlı olması g&ouml;zləniləndir. Ancaq hər zaman orijinal
              Subaru ehtiyat hissələri istifadə etmək, avtomobilin performansını və təhl&uuml;kəsizliyini qorumaq &uuml;&ccedil;&uuml;n
              ən uyğun yol olduğundan, ehtiyat hissələrinin keyfiyyəti və qiyməti, istehsal&ccedil;ıdan istehsal&ccedil;ıya
              dəyişə bilər.
            </p>
            <p>&nbsp;</p>
            <h2>Orijinal Subaru ehtiyat hissəsini necə m&uuml;əyyən etmək olar?</h2>
            <p>
              Orijinal Subaru ehtiyat hissələri Subaru brendinin istehsal etdiyi və markanın rəsmi dilerləri tərəfindən
              satılan hissələrdir. Subaru-nun dizayn və istehsal prosesi ehtiyat hissələrinin uyğun və keyfiyyətli
              olmasını təmin edir. Bundan əlavə, Subaru ehtiyat hissələrinə istehsal prosesində istifadə olunan
              materiallar və keyfiyyətə nəzarət prosedurları ilə zəmanət verilir. Orijinal ehtiyat hissələrini m&uuml;əyyən
              etmək &uuml;&ccedil;&uuml;n siz Subarunun rəsmi loqosu və məhsul n&ouml;mrəsi olan etiketləri
              yoxlamalısınız.
            </p>
            <p>&nbsp;</p>
            <h2>Subaru ehtiyat hissələri bahadırmı?</h2>
            <p>
              Subaru ehtiyat hissələrinin qiyməti modelə və komponentə g&ouml;rə dəyişə bilər. Orijinal Subaru ehtiyat
              hissələri adətən bir qədər baha ola bilər, lakin daha y&uuml;ksək keyfiyyətə və uyğunluğa malik olduğundan&nbsp;
              avtomobilinizin performansını və təhl&uuml;kəsizliyini optimallaşdırmaq &uuml;&ccedil;&uuml;n onlara
              &uuml;st&uuml;nl&uuml;k verməyiniz t&ouml;vsiyyə olunur. Lakin bazar qiymətlərinin dəyişməsi və m&uuml;xtəlif
              tədar&uuml;k&ccedil;&uuml;lər arasında qiymət fərqləri olduğundan Subaru ehtiyat hissələrinin &uuml;mumiyyətlə
              baha olduğunu demək olmaz.
            </p>
            <p>&nbsp;</p>
            <h2>Subaru avtomobillərinin əsas problemləri və ehtiyat hissələri</h2>
            <p>Subaru avtomobillərinin əsas problemlərindən bəziləri bunlar ola bilər:</p>
            <ul>
              <li>
                <strong> Kondisioner Sistemi:</strong> Kondisioner sistemində problemlər, soyuducu fan, kompressor və
                ya digər hissələrdə nasazlıqlar ola bilər.
              </li>
              <li>
                <strong> Elektrik sistemi:</strong> Elektrik sistemində, işıqlandırmada, səs sistemində və ya yanacaq
                sistemində problemlər yarana bilər.
              </li>
              <li>
                <strong> Transmissiya:</strong> Subaru modellərində &ouml;t&uuml;rmə, yerdəyişmə və ya s&uuml;rətlənmə
                problemləri ola bilər.
              </li>
            </ul>
            <p>Bunlarla yanaşı, Subaru avtomobillərində digər &uuml;mumi problemlər də ola bilər.</p>
            <p>
              Subaru ehtiyat hissələrinin keyfiyyəti istehsal&ccedil;ının təqdim etdiyi keyfiyyət standartlarına uyğun
              olaraq dəyişə bilər. Orijinal Subaru ehtiyat hissələri istehsal&ccedil;ı tərəfindən təsdiqlənir və rəsmi
              kanallar vasitəsilə satılır və &uuml;mumiyyətlə daha y&uuml;ksək keyfiyyətə malikdir. Lakin ehtiyat
              hissələrinin qiyməti həm də ehtiyat hissəsinin keyfiyyətindən, orijinal olub-olmamasından asılıdır.
              Ehtiyat hissələrinin qiyməti həmin ehtiyat hissəsinin n&ouml;v&uuml;ndən, &ouml;l&ccedil;&uuml;s&uuml;ndən,
              modelindən və m&ouml;vcud bazar şərtlərindən asılı olaraq dəyişə bilər.
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
      title: 'Subaru ehtiyat hissələri | Onlayn mağaza | Otobaza',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Orijinal ehtiyat hissələrini Otobaza saytından və ya Subaru servis mərkəzlərindən əldə edə bilərsiniz.'
        }
      ]
    }
  }
}
</script>
