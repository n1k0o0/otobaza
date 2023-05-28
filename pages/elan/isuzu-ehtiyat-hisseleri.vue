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
            <h1>İnsanlar niyə daha &ccedil;ox Isuzu avtomobillərinə &uuml;st&uuml;nl&uuml;k verirlər?</h1>
            <p>
              İnsanların Isuzu avtomobillərini se&ccedil;mələrinin bir &ccedil;ox səbəbi var, lakin ən &uuml;mumi
              olanlar bunlardır:
            </p>
            <ul>
              <li>
                <strong> Etibarlılıq:</strong> Isuzu avtomobilləri &uuml;mumiyyətlə etibarlı və davamlı hesab olunur.
              </li>
              <li>
                <strong> Performans:</strong> Isuzu avtomobilləri g&uuml;cl&uuml; və səmərəli m&uuml;hərrikləri ilə
                tanınır.
              </li>
              <li>
                <strong> Qiymət/performans balansı:</strong> Isuzu avtomobilləri digər markalarla m&uuml;qayisədə m&uuml;nasib
                qiymətə və yaxşı performans təklif edə bilir.
              </li>
              <li>
                <strong> Xidmət və dəstək:</strong> Isuzu m&uuml;ştərilərinə keyfiyyətli xidmət və dəstək təklif edən
                brenddir.
              </li>
              <li>
                <strong> Brend imici:</strong> Isuzu kommersiya və logistika fəaliyyətləri &uuml;&ccedil;&uuml;n
                etibarlı brend kimi tanınır və se&ccedil;ilir.
              </li>
            </ul>
            <p>
              Yuxarıda qeyd edilən bir ne&ccedil;ə səbəb n&uuml;munədir və hər bir şəxsin dəyərləndirmə və se&ccedil;im
              etmə səbəbləri fərqli ola bilər.
            </p>
            <p>&nbsp;</p>
            <h2>Isuzu ehtiyat hissələri keyfiyyətlidirmi?</h2>
            <p>
              Isuzu ehtiyat hissələrinin keyfiyyəti bir &ccedil;ox amillərlə əlaqələndirilir və &uuml;mumiyyətlə y&uuml;ksək
              keyfiyyətli olduğu deyilir. Bununla belə, hər bir ehtiyat hissəsi &uuml;&ccedil;&uuml;n keyfiyyət
              səviyyəsi dəyişə bilər və bir &ccedil;ox amillərdən, məsələn, istehsal prosesi, materialın keyfiyyəti və
              təchizat&ccedil;ı se&ccedil;imi ilə təsirlənə bilər.
            </p>
            <p>
              Isuzu ehtiyat hissələrinin keyfiyyəti haqqında daha ətraflı məlumat &uuml;&ccedil;&uuml;n istehsal&ccedil;ının
              saytındakı məlumatlara və ya səlahiyyətli dilerə m&uuml;raciət edə bilərsiniz. Siz həm&ccedil;inin ehtiyat
              hissələri haqqındakı detallı incələmə və məlumatları həm&ccedil;inin m&uuml;ştəri rəylərini nəzərdən ke&ccedil;irə
              bilərsiniz.
            </p>
            <p>&nbsp;</p>
            <h2>Orijinal Isuzu ehtiyat hissəsini necə m&uuml;əyyən etmək olar?</h2>
            <p>
              Orijinal Isuzu ehtiyat hissələrini m&uuml;əyyən etmək &uuml;&ccedil;&uuml;n aşağıdakı addımlara əməl
              edilməlidir:
            </p>
            <ul>
              <li>
                <strong>Avtomobilin modeli və seriya n&ouml;mrəsi:</strong> Əvvəlcə avtomobilin modelini və seriya n&ouml;mrəsini
                m&uuml;əyyən etmək lazımdır. Bu məlumatı nəqliyyat vasitəsinin qeydiyyat sənədində, d&ouml;vlət n&ouml;mrə
                nişanında və ya avtomobilin salonundakı stikerlərdən əldə edə bilərsiniz.
              </li>
              <li>
                <strong> Səlahiyyətli dilerlər:</strong> Orijinal Isuzu ehtiyat hissələrini m&uuml;əyyən etmək &uuml;&ccedil;&uuml;n
                səlahiyyətli Isuzu dilerinə m&uuml;raciət etmək daha yaxşıdır. Bu dilerlər avtomobiliniz &uuml;&ccedil;&uuml;n
                d&uuml;zg&uuml;n ehtiyat hissəsini m&uuml;əyyən və təmin edə bilər.
              </li>
              <li>
                <strong> Məhsul kodları:</strong> Orijinal Isuzu ehtiyat hissələri məhsul kodları ilə m&uuml;əyyən
                edilir. Bu məhsul kodları səlahiyyətli Isuzu dileri tərəfindən təmin edilə bilər və ya istehsal&ccedil;ının
                veb saytından əldə edilə bilər.
              </li>
              <li>
                <strong> Keyfiyyət sertifikatları:</strong> Orijinal Isuzu ehtiyat hissələri istehsal&ccedil;ı
                tərəfindən verilmiş keyfiyyət sertifikatlarına malik olmalıdır. Bu sertifikatlar ehtiyat hissəsinin
                orijinal olmasına və Isuzu tərəfindən təsdiqləndiyinə zəmanət verməlidir.
              </li>
            </ul>
            <p>&nbsp;</p>
            <h2>Isuzu ehtiyat hissələri bahadırmı?</h2>
            <p>
              <strong>Isuzu ehtiyyat hissələrinin qiymətləri</strong> digər avtomobil ehtiyat hissələri ilə eynidir.
              Lakin ehtiyat hissəsinin modeli, n&ouml;v&uuml;, keyfiyyəti və m&ouml;vcudluğu qiymətə təsir edə bilər.
              Həm&ccedil;inin ehtiyat hissəsinin orijinal olub-olmaması qiymətə təsir edə bilər. Orijinal Isuzu ehtiyat
              hissələri adətən daha bahalı ola bilər, lakin daha uzun m&uuml;ddət istifadə edilir və avtomobilin
              performansını optimallaşdırmaq &uuml;&ccedil;&uuml;n y&uuml;ksək potensiala malikdir. Alternativ olaraq,
              daha ucuz qiymətə istehsal&ccedil;ılar tərəfindən hazırlanmış ehtiyat hissələri də tapmaq olar, lakin bu
              hissələrin keyfiyyəti və uyğunluğu orijinal Isuzu hissələri ilə m&uuml;qayisədə aşağı ola bilər.
            </p>
            <p>&nbsp;</p>
            <h2>Isuzu avtomobillərinin əsas problemləri və ehtiyat hissələri?</h2>
            <p>Isuzu avtomobilləri ilə bağlı bəzi &uuml;mumi problemlər bunlar ola bilər:</p>
            <ul>
              <li>
                <strong> S&uuml;rətlər qutusu problemləri:</strong> Bəzi Isuzu modellərində ke&ccedil;id mexanizmində
                nasazlıqlar və ya problemlər olduğu bildirilir.
              </li>
              <li>
                <strong> Elektrik problemləri:</strong> Elektrik sistemindəki nasazlıqlar avtomobilin i&ccedil;ərisində
                işıqlandırma, kondisioner və digər elektron avadanlıqların d&uuml;zg&uuml;n işləməməsinə səbəb ola
                bilər.
              </li>
              <li>
                <strong> Soyutma sistemi problemləri:</strong> M&uuml;hərrikin soyutma mayesinin yetərincə olmaması və
                ya termostat problemlərindən dolayı soyutma sistemindəki nasazlıqlar ortaya &ccedil;ıxa bilər.
              </li>
            </ul>
            <p>&nbsp;</p>
            <h2>Ehtiyat hissələri ilə bağlı aşağıdakı problemlər ola bilər:</h2>
            <ul>
              <li>
                <strong> Uyğunluq problemləri:</strong> Ehtiyat hissələri avtomobilin modeli və seriya n&ouml;mrəsinə
                uyğun olmalıdır. Yanlış ehtiyat hissələri avtomobilin performansına və təhl&uuml;kəsizliyinə mənfi təsir
                g&ouml;stərə bilər.
              </li>
              <li>
                <strong> Keyfiyyət məsələləri:</strong> Keyfiyyətsiz ehtiyat hissələri zəif performans, s&uuml;rətli
                xarab olma və ya avtomobilin digər hissələrinin zədələnməsi kimi problemlərə səbəb ola bilər.
              </li>
              <li>
                <strong> Qiymətlə bağlı problemlər:</strong> Aşağı qiymətli, keyfiyyətsiz ehtiyat hissələri orijinal
                Isuzu ehtiyat hissələrindən daha ucuz olsa da həmin ehtiyat hissələri istifadə baxımından qısa m&uuml;ddətli
                və daha az etibarlı ola bilirlər.
              </li>
            </ul>
            <p>
              Orijinal Isuzu ehtiyat hissələri uyğunluq, avtomobilin performansını və təhl&uuml;kəsizliyini
              optimallaşdırmaq həm&ccedil;inin keyfiyyət və qiymət problemlərindən qa&ccedil;maq potensialına
              malikdir.
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
      title: 'Isuzu ehtiyat hissələri | Onlayn mağaza | Otobaza',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Orijinal ehtiyat hissələrini Otobaza saytından və ya Isuzu servis mərkəzlərindən əldə edə bilərsiniz.'
        }
      ]
    }
  }
}
</script>
