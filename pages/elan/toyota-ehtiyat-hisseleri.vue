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
            <h1>
              <strong>Niyə insanlar daha &ccedil;ox Toyota avtomobillərinə &uuml;st&uuml;nl&uuml;k verirlər?</strong>
            </h1>
            <p>
              Avtomobil alarkən insanların se&ccedil;imlərini <strong>Toyota avtomobilləri</strong> &uuml;zərindən
              etmələrinin bir ne&ccedil;ə səbəbi var:
            </p>
            <p>
              <strong><em>Keyfiyyət</em></strong><strong>.</strong> <strong>Toyota</strong>
              <strong>avtomobilləri</strong> d&uuml;nya &uuml;zrə tanınmış keyfiyyət və etibarlılıq standartına
              malikdir. <strong>Toyota</strong> <strong>avtomobillərinin</strong> davamlı olaraq y&uuml;ksək keyfiyyət
              standartlarına uyğun istehsal edilməsi insanların <strong>Toyota avtomobillərinə</strong> etibar etməsinə
              səbəb ola bilər.
            </p>
            <p>
              <strong><em>Performans</em></strong><strong>.</strong> <strong>Toyota avtomobilləri</strong> yaxşı
              performans və səmərəlilik təklif edən benzin və dizel m&uuml;hərrikləri se&ccedil;imi ilə m&ouml;vcuddur.
              Şirkət həm&ccedil;inin ekoloji cəhətdən təmiz və enerjiyə qənaət edən hibrid və elektrik avtomobil
              variantları təklif edir.
            </p>
            <p>
              <strong><em>Qiymət-performans balansı</em></strong><strong>.</strong> <strong>Toyota
                avtomobilləri</strong> bir &ccedil;ox rəqib brendlərlə m&uuml;qayisədə m&uuml;nasib qiymətə malikdir və
              həm&ccedil;inin yaxşı performans və keyfiyyət təklif edir. Bu, insanlar &uuml;&ccedil;&uuml;n cəlbedici
              qiymət-performans nisbəti təklif edə bilər.
            </p>
            <p>
              <strong><em>Xidmət və dəstək</em></strong><strong>. </strong>Toyota d&uuml;nya &uuml;zrə xidmət
              şəbəkəsinə malikdir və m&uuml;ştərilərinə keyfiyyətli xidmət və dəstək təqdim edir. Bu, insanlara <strong>Toyota
                avtomobillərini</strong> se&ccedil;məkdə k&ouml;mək edə bilər.
            </p>
            <p>
              Bu səbəblərdən <strong>Toyota avtomobillərinə</strong> &ccedil;ox adam &uuml;st&uuml;nl&uuml;k verir.
              Ancaq hər kəsin se&ccedil;imi fərqli ola bilər və həm&ccedil;inin digər markalar da keyfiyyətli və
              etibarlı avtomobillər də təklif edə bilər.
            </p>
            <p>&nbsp;</p>
            <h2><strong>Toyota ehtiyat hissələri keyfiyyətlidir?</strong></h2>
            <p>
              Ara-sıra <strong>Toyota ehtiyat hissələri</strong> keyfiyyətlidirmi sualı ilə qarşılaşırıq. <strong>Toyota
                avtomobilləri </strong>ehtiyat hissələrinin keyfiyyətinə &ccedil;ox ciddi yanaşır və m&uuml;ştərilərini ən
              <strong>keyfiyyətli ehtiyat hissələri</strong> ilə təmin etməyi hədəfləyir. <strong>Toyota
                ehtiyat</strong> <strong>hissələri </strong>&nbsp;istehsalında keyfiyyətə nəzarət prosesləri ciddi
              şəkildə həyata ke&ccedil;irilir və m&uuml;ştərilərə ən yaxşı məhsulu təqdim etmək &uuml;&ccedil;&uuml;n
              avtomobilin orijinal dizaynına uyğun olaraq istehsal olunur.
            </p>
            <p>
              Bundan əlavə, <strong>Toyota ehtiyat hissələri</strong> zəmanətlə satılır və servis dəstəyi ilə m&uuml;ştərilərdə
              <strong>avtomobil</strong> <strong>ehtiyat hissələri</strong> alarkən keyfiyyətə əminlik hissi yaradır.
            </p>
            <p>
              Bununla belə, hər markanın ehtiyat hissələrinin keyfiyyəti fərqli ola bilər və ən yaxşısı həmişə <strong>orijinal</strong>
              <strong>Toyota ehtiyat hissələrini</strong> se&ccedil;məkdir. Həm&ccedil;inin <strong>Toyota ehtiyat
                hissələri </strong>alarkən rəsmi dilerdən və ya xidmət məntəqəsindən almaq yaxşı nəticələrə zəmanət
              verir.
            </p>
            <p>&nbsp;</p>
            <h2><strong>Orijinal Toyota ehtiyat hissəsini necə m&uuml;əyyən etmək olar?</strong></h2>
            <p>
              <strong>Orijinal Toyota ehtiyat hissələri</strong> Toyota tərəfindən istehsal edilmiş və Toyota
              tərəfindən təsdiqlənmişdir. <strong>Orijinal Toyota ehtiyat hissələrini</strong> m&uuml;əyyən etmək &uuml;&ccedil;&uuml;n
              aşağıdakılara nəzər yetirmək olar:
            </p>
            <ul>
              <li>
                <strong>Toyota avtomobillərinin</strong> rəsmi diler və ya xidmət məntəqəsinə gedin. <strong>Orijinal
                  Toyota ehtiyat hissələri</strong> Toyota markasının rəsmi dilerləri və ya xidmət məntəqələri tərəfindən
                satılır.
              </li>
              <li>
                VIN n&ouml;mrəsini təqdim edin. VIN n&ouml;mrəsi və ya BAN kod avtomobiliniz &uuml;&ccedil;&uuml;n
                unikal identifikatordur və Toyota dileri və ya xidmət məntəqəsi avtomobiliniz &uuml;&ccedil;&uuml;n
                uyğun <strong>ehtiyat hissələri</strong> m&uuml;əyyən etmək &uuml;&ccedil;&uuml;n bu n&ouml;mrədən
                istifadə edə bilər.
              </li>
              <li>
                <strong>Avtomobil ehtiyat hissəsi</strong> alarkən qablaşdırmanı yoxlayın. <strong>Orijinal Toyota
                  ehtiyat hissələri</strong> Toyota tərəfindən istehsal olunur və orijinal Toyota qablaşdırmasında
                satılır. Qablaşdırmanı yoxlayın və orijinal Toyota loqosu və işarələrini axtarın.
              </li>
            </ul>
            <p>
              <strong>Orijinal Toyota ehtiyat hissələrinin</strong> m&uuml;əyyən edilməsi avtomobilinizin performansını
              və təhl&uuml;kəsizliyini təmin edən ən yaxşı əvəzedici hissələrdən istifadə etməyə k&ouml;mək edə bilər.
              Bundan əlavə, <strong>orijinal</strong> <strong>Toyota ehtiyat hissələrinin</strong> zəmanəti
              avtomobilinizin uzunm&uuml;ddətli təhl&uuml;kəsiz və səmərəli işləməsini təmin edir.
            </p>
            <p>&nbsp;</p>
            <h2><strong>Toyota ehtiyat hissələri bahadır?</strong></h2>
            <p>
              <strong>Toyota ehtiyat hissələri</strong> qiymət baxımından digər <strong>avtomobil</strong> <strong>ehtiyat
                hissələri</strong> ilə m&uuml;qayisədə fərqli ola bilər. Yəni <strong>orijinal Toyota hissələri</strong>
              &ccedil;ox vaxt digər markaların <strong>ehtiyat</strong> <strong>hissələri</strong> ilə m&uuml;qayisədə
              daha bahalı ola bilər. Həm&ccedil;inin orijinal <strong>Toyota ehtiyat hissələrinin</strong> keyfiyyəti və
              performansı daha y&uuml;ksək olduğundan, uzunm&uuml;ddətli perspektivdə daha qənaətcil ola bilər.
            </p>
            <p>
              <strong>Toyota avtomobilləri</strong> &uuml;&ccedil;&uuml;n istehsal olunan <strong>ehtiyat
                hissələrin</strong> baha olmasının digər səbəbi isə <strong>Toyota</strong> <strong>ehtiyat</strong>
              <strong>hissələrinin</strong> zəmanətidir. Belə ki, bu zəmanət digər <strong>avtomobil</strong> <strong>ehtiyat</strong>
              <strong>hissələri</strong> ilə m&uuml;qayisədə daha uzun m&uuml;ddət davam edə bilər və avtomobilinizin
              uzunm&uuml;ddətli performansını və təhl&uuml;kəsizliyini təmin edən ən yaxşı <strong>ehtiyat
                hissələrindən</strong> istifadə etməyə k&ouml;mək edə bilər.
            </p>
            <p>
              <strong>Avtomobil ehtiyat hissələri</strong> almadan əvvəl həmişə qiymətləri m&uuml;qayisə etmək və
              orijinal <strong>Toyota ehtiyat</strong> <strong>hissələrinin </strong>&uuml;st&uuml;nl&uuml;klərini
              dəyərləndirmək t&ouml;vsiyə olunur.
            </p>
            <p>&nbsp;</p>
            <h2><strong>Toyota avtomobillərinin əsas problemləri və ehtiyat hissələri</strong></h2>
            <p>
              Hər bir avtomobil modeli və markası &uuml;&ccedil;&uuml;n fərqli problemlər tapıla bilər. Bununla belə,
              &uuml;mumi olaraq <strong>Toyota avtomobillərində</strong> bəzi &uuml;mumi problemlər ola bilər:
            </p>
            <ul>
              <li>
                Hava axını sensoru nasazlıqları: <strong>Toyota avtomobillərinin</strong> hava axını sensoru tez-tez
                sıradan &ccedil;ıxa bilər ki, bu da m&uuml;hərrikin işinə və səmərəliliyinə mənfi təsir g&ouml;stərə
                bilər.
              </li>
              <li>
                Batareya sistemində problemlər: <strong>Toyota avtomobillərinin</strong> batareya doldurma sistemi
                tez-tez sıradan &ccedil;ıxa bilər və bu, avtomobilin başlamamasına və ya d&uuml;zg&uuml;n işləməməsinə
                səbəb ola bilər.
              </li>
              <li>
                Tork tənzimləyici klapan problemləri: <strong>Toyota avtomobillərinin</strong> fırlanma anı
                tənzimləyici klapan tez-tez sıradan &ccedil;ıxa bilər ki, bunun nəticəsində qeyri-sabit m&uuml;hərrik
                performansı yaranır.
              </li>
              <li>
                G&uuml;zg&uuml; və ş&uuml;şə sistem problemləri: <strong>Toyota avtomobillərinin</strong> g&uuml;zg&uuml;
                və ş&uuml;şə sistemi tez-tez sıradan &ccedil;ıxa bilər ki, bu da təhl&uuml;kəsiz idarəetməni azalda
                bilər.
              </li>
            </ul>
            <p>&nbsp;</p>
            <p>
              <strong>Toyota ehtiyat hissələri</strong> bu və buna bənzər problemləri həll etməyə k&ouml;mək edə bilər.
              Bununla belə biz həmişə avtomobilinizi rəsmi Toyota dilerində texniki baxışdan ke&ccedil;irməyi və
              problemlərin səbəbini m&uuml;əyyən etmək &uuml;&ccedil;&uuml;n onu peşəkar texniki baxışdan ke&ccedil;irməyi
              t&ouml;vsiyə edirik. Həm&ccedil;inin, <strong>orijinal</strong> <strong>Toyota</strong>
              <strong>ehtiyat</strong> <strong>hissələrindən</strong> istifadə etməklə siz avtomobilinizin uzunm&uuml;ddətli
              performansını və təhl&uuml;kəsizliyini təmin edən yaxşı ehtiyat hissələrindən istifadə etməyə k&ouml;mək
              edə bilərsiniz.
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
      title: 'Toyota ehtiyat hissələri | Onlayn mağaza | Otobaza',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Orijinal ehtiyat hissələrini Otobaza saytından və Toyota servis mərkəzlərindən əldə edə bilərsiniz.'
        }
      ]
    }
  }
}
</script>
