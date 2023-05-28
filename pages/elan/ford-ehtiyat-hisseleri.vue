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
              <strong>İnsanlar niyə Ford avtomobillərinə daha &ccedil;ox &uuml;st&uuml;nl&uuml;k verirlər?</strong>
            </h1>
            <p>
              <strong>Ford avtomobilləri</strong> m&uuml;xtəlif seqmentə xitab edir. Bu səbəbdən də avtomobil alarkən
              se&ccedil;imlərini <strong>Ford</strong> <strong>avtomobilləri</strong> &uuml;zərində edənlərin sayı
              &ccedil;oxluq təşkil edir. Bəs insanların bu markaya maraqlı olmalarının digər səbəbləri nədir?
            </p>
            <p>
              <strong><em>Qiymət-performans nisbəti.</em></strong> <strong>Ford avtomobilləri</strong> digər
              markalardan daha sərfəli olması ilə yanaşı həm də yaxşı performans sərgiləyir.
            </p>
            <p>
              <strong><em>Dizayn.</em></strong> <strong>Ford avtomobillərinin</strong> dizaynı digər markalara nisbətən
              daha m&uuml;asir və idman &uuml;slubundadır.
            </p>
            <p>
              <strong><em>Rahatlıq.</em></strong> <strong>Ford avtomobilləri</strong> daxili rahatlıq, s&uuml;rmə
              rahatlığı baxımından &ouml;z seqmentində olan digər avtomobillərlə m&uuml;qayisədə y&uuml;ksək performans
              təklif edir.
            </p>
            <p>
              <strong><em>Etibarlılıq:</em></strong> <strong>Ford avtomobilləri</strong> &uuml;mumiyyətlə etibarlı və
              uzun&ouml;m&uuml;rl&uuml;d&uuml;r.
            </p>
            <p>
              <strong><em>Texniki x&uuml;susiyyətlər:</em></strong> <strong>Ford</strong>
              <strong>avtomobilləri</strong> digər markalara nisbətən daha təkmilləşdirilmiş texniki x&uuml;susiyyətlərə
              malikdir. Məsələn, daha yaxşı təhl&uuml;kəsizlik x&uuml;susiyyətləri, daha s&uuml;r&uuml;c&uuml;l&uuml;k
              sistemləri və daha yaxşı məlumat-əyləncə sistemi.
            </p>
            <p>&nbsp;</p>
            <h2><strong>Ford ehtiyat hissələri keyfiyyətlidirmi?</strong></h2>
            <p>
              Ford daim &ouml;z <strong>ehtiyat hissələrinin</strong> keyfiyyətini qorumaq &uuml;&ccedil;&uuml;n və
              <strong>orijinal ehtiyat hissələrinin</strong> keyfiyyətini və uyğunluğunu təmin etməyə &ccedil;alışır.
              Bununla belə, <strong>ehtiyat hissələrin</strong> keyfiyyəti və qiyməti arasındakı tarazlıq modeldən
              modelə, b&ouml;lgədən b&ouml;lgəyə və satıcıdan satıcıya dəyişə bilər. İlk n&ouml;vbədə, <strong>orijinal
                Ford</strong> <strong>ehtiyat hissələri</strong> istifadə zamanı avtomobilin performansı və təhl&uuml;kəsizliyini
              qoruyacaq. Bununla belə, daha sərfəli alternativ <strong>ehtiyat hissələri</strong> də ola bilər.
              Avtomobil sahibləri tərəfindən onların keyfiyyəti və uyğunluğu haqqında rəyləri araşdırmaq faydalı ola
              bilər.
            </p>
            <p>&nbsp;</p>
            <h2><strong>Orijinal Ford ehtiyat hissəsini necə m&uuml;əyyən etmək olar?</strong></h2>
            <p>
              <strong>Orijinal Ford ehtiyat hissələri</strong> Ford tərəfindən istehsal edilmiş və Ford tərəfindən
              təsdiqlənmiş ehtiyat hissələridir. <strong>Ford markasının orijinal ehtiyat hissələri </strong>avtomobilləriniz
              &uuml;&ccedil;&uuml;n ən yaxşı performansı və təhl&uuml;kəsizliyi təmin etmək &uuml;&ccedil;&uuml;n dizayn
              edilmiş və sınaqdan ke&ccedil;irilmişdir. Bu <strong>avtomobil ehtiyat hissələri</strong>
              avtomobillərinizin standartlarına uyğun istehsal olunur və Ford tərəfindən təsdiq edilir.
              <strong>Orijinal</strong> <strong>Ford</strong> <strong>ehtiyat</strong> <strong>hissələrinin</strong>
              markası, məsələn, Ford loqosu, model n&ouml;mrəsi və ya partiya n&ouml;mrəsi ola bilər.
              <strong>Ford</strong> <strong>ehtiyat</strong> <strong>hissələrini</strong> tapmaq &uuml;&ccedil;&uuml;n
              ən yaxşı yer sizə ən yaxın Ford dileridir. Rəsmi Ford dileri və servislərindən aldığınız <strong>ehtiyat
                hissələr</strong> <strong>orijinal Ford ehtiyat hissələri</strong> olacaqdır.
            </p>
            <p>&nbsp;</p>
            <h2><strong>Ford ehtiyat hissələri bahadır?</strong></h2>
            <p>
              <strong>Ford ehtiyat hissələrinin</strong> qiymətləri modeldən, <strong>avtomobil</strong> <strong>ehtiyat</strong>
              <strong>hissələrinin</strong> x&uuml;susiyyətindən və bazardakı rəqabətdən asılı olaraq dəyişə bilər. Bəzi
              <strong>Ford ehtiyat hissələri</strong> m&uuml;nasib qiymətə, digərləri isə daha bahalı ola bilər. Həm&ccedil;inin<strong>,
                orijinal Ford ehtiyat hissələri</strong> &ccedil;ox vaxt daha bahalı ola bilər, lakin bu <strong>avtomobil
                ehtiyat hissələri </strong>daha y&uuml;ksək keyfiyyət və uyğunluq təklif edir. <strong>Orijinal Ford
                ehtiyat hissəsini</strong> m&uuml;əyyən etmək &uuml;&ccedil;&uuml;n <strong>orijinal Ford
                hissələrinin</strong> Ford tərəfindən istehsal edildiyi və təsdiqləndiyinə dair sənədləri yoxlamaq t&ouml;vsiyə
              olunur.
            </p>
            <p>&nbsp;</p>
            <h2><strong>Ford avtomobillərinin əsas problemləri və ehtiyat hissələri?</strong></h2>
            <p>
              <strong>Ford avtomobilləri</strong> &uuml;mumiyyətlə keyfiyyətli və etibarlı avtomobillər hesab olunur.
              Bununla belə, bu, hər avtomobil modelinə və istehsal ilinə aid olmaya bilər və m&uuml;əyyən bir modellə
              bağlı problemlər yarana bilər. Məsələn, bəzi Ford modellərində elektrik sistemi, m&uuml;hərrik və
              transmissiya kimi sistemlərlə bağlı problemlər qeydə alınmışdır.
            </p>
            <p>
              <strong>Ford ehtiyat hissələri</strong> &uuml;mumiyyətlə orijinal avadanlıq keyfiyyətində və adekvat
              material keyfiyyətində istehsal olunur. Bununla belə, bazardakı digər alternativ <strong>ehtiyat
                hissələri</strong> ilə m&uuml;qayisədə daha bahalı ola bilər. <strong>Orijinal Ford</strong> <strong>ehtiyat
                hissələrini</strong> rəsmi Ford dilerlərindən və ya xidmətlərindən və ya orijinal hissə n&ouml;mrəsi ilə
              m&uuml;əyyən etmək olar.
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
      title: 'Ford ehtiyat hissələri | Onlayn mağaza | Otobaza',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Orijinal ehtiyat hissələrini Otobaza saytından və ya Ford servis mərkəzlərindən əldə edə bilərsiniz.'
        }
      ]
    }
  }
}
</script>
