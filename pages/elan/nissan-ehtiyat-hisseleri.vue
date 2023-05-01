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
              <strong>İnsanlar niyə Nissan avtomobillərinə daha &ccedil;ox &uuml;st&uuml;nl&uuml;k verirlər?</strong>
            </h1>
            <p>
              <strong>Nissan avtomobilləri</strong> keyfiyyətli və etibarlı performansı, yaxşı qiymət-performans
              nisbəti, geniş model &ccedil;eşidi və texnoloji cəhətdən inkişaf etmiş x&uuml;susiyyətlərinə g&ouml;rə
              insanların <strong>Nissan</strong> <strong>avtomobillərinə</strong> &uuml;st&uuml;nl&uuml;k verirlər.
              Bundan əlavə, <strong>Nissan</strong> <strong>avtomobilləri </strong>dizaynı, etibarlılığı və ucuzluğu ilə
              tanınır. <strong>Nissan</strong> <strong>avtomobillərinə</strong> &uuml;st&uuml;nl&uuml;k verilməsinin
              əsas səbəbləri qeyd etdiyimiz n&uuml;anslardır.
            </p>
            <p><strong>&nbsp;</strong></p>
            <h2><strong>Nissan ehtiyat hissələri keyfiyyətlidir?</strong></h2>
            <p>
              <strong>Nissan ehtiyat hissələrinin</strong> keyfiyyətinə və məhsuldarlığına zəmanət vermək &uuml;&ccedil;&uuml;n
              ciddi nəzarət prosesi tətbiq edir. <strong>Nissanın orijinal ehtiyat hissələri</strong> avtomobillərin
              əvvəlki g&ouml;stəriciləri ilə bərabər və ya daha yaxşı performans g&ouml;stərmək &uuml;&ccedil;&uuml;n
              nəzərdə tutulmuşdur. Bununla belə, <strong>ehtiyat hissələrinin</strong> qiyməti və keyfiyyəti hissənin
              istehsal&ccedil;ısı və modelindən asılı olaraq dəyişə bilər. Ona g&ouml;rə də m&uuml;mk&uuml;n olan ən
              <strong>keyfiyyətli avtomobil ehtiyat hissələrini</strong> se&ccedil;mək t&ouml;vsiyə olunur.
            </p>
            <p>&nbsp;</p>
            <h2><strong>Orijinal Nissan ehtiyat hissəsini necə m&uuml;əyyən etmək olar?</strong></h2>
            <p>
              <strong>Nissan orijinal ehtiyat hissələri </strong>istehsal&ccedil;ının standartlarına və keyfiyyətə
              nəzarət prosedurlarına uyğun olmalıdır. <strong>Orijinal ehtiyat hissələri</strong> avtomobil istehsal&ccedil;ısı
              tərəfindən m&uuml;əyyən edilmiş keyfiyyət və performans meyarlarına uyğun istehsal olunur. Onlar
              avtomobillərin orijinal avadanlığı ilə eyni materiallardan və istehsal texnikalarından istifadə etməklə
              istehsal olunur və nəqliyyat vasitələrinin əvvəlki performanslarına bərabər və ya daha yaxşı işləməsini
              təmin etmək &uuml;&ccedil;&uuml;n nəzərdə tutulub. <strong>Orijinal Nissan ehtiyat hissələrini</strong>
              necə m&uuml;əyyən etmək , <strong>orijinal Nissan ehtiyat hissələri </strong>loqolu, rəsmi zəmanətli
              şəkildə satışa &ccedil;ıxarılır. Daha ətraflı məlumat &uuml;&ccedil;&uuml;n <strong>Nissan
                avtomobillərinin</strong> rəsmi xidmət mərkəzi ilə əlaqə saxlaya bilərsiniz.
            </p>
            <p>&nbsp;</p>
            <h2><strong>Nissan ehtiyat hissələri bahadır?</strong></h2>
            <p>
              <strong>Nissan ehtiyat hissələrinin</strong> qiymətləri avtomobilin modelindən, ehtiyat hissəsinin n&ouml;v&uuml;ndən
              və harada olmasından asılı olaraq dəyişə bilər. &Uuml;mumiyyətlə, <strong>orijinal ehtiyat
                hissələri</strong> daha bahalı ola bilər, lakin onlar daha y&uuml;ksək keyfiyyət və uyğunluq təklif
              edirlər. Original olmayan digər<strong> ehtiyat hissələri </strong>daha sərfəli ola bilər, lakin unutmayın
              ki, bu <strong>avtomobil ehtiyat hissələri</strong> keyfiyyət və uyğunluqla bağlı problemlər yarada bilər.
              Nəqliyyat vasitəsi sahibi &ouml;z istəyinə və ehtiyacına uyğun olaraq orijinal olmayan və ya <strong>orijinal
                Nissan ehtiyat hissələrindən</strong> birini se&ccedil;ə bilər.
            </p>
            <p>&nbsp;</p>
            <h2><strong>Nissan avtomobillərinin əsas problemləri və ehtiyat hissələri</strong></h2>
            <p>
              <strong>Nissan avtomobillərinin </strong>problemləri bir &ccedil;ox amillərdən dolayı m&uuml;xtəlif ola
              bilər. Məsələn, avtomobilin yaşı, nəqtliyyat vasitəsinin idarə edilmə tərzi, texniki xidmət səviyyəsi və
              bir &ccedil;ox başqa amilləri qeyd etmək olar. Eyni zamanda, m&uuml;xtəlif <strong>Nissan
                avtomobillərində</strong> də fərqli problemlər ola bilər. &Uuml;mumiyyətlə, <strong>Nissan
                avtomobilləri</strong> ilə bağlı tez-tez bildirilən məsələlərə elektron problemlər, yerdəyişmə
              problemləri, suspenziya problemləri, &ouml;t&uuml;rmə məsələləri və texniki baxış hesabatı ilə bağlı
              məsələlər daxil ola bilər.
            </p>
            <p>
              <strong>Orijinal Nissan ehtiyat hissələri</strong> Nissanın rəsmi satış və servis şəbəkəsi tərəfindən
              satılır və avtomobillərin orijinal keyfiyyətini qorumaq &uuml;&ccedil;&uuml;n istehsal olunur. <strong>Nissan
                ehtiyat hissələri</strong> digər alternativ <strong>ehtiyat hissələri</strong> ilə m&uuml;qayisədə daha
              bahalı ola bilər, lakin onlar avtomobilin performansını və təhl&uuml;kəsizliyini qoruyan orijinal
              keyfiyyət təklif edir. <strong>Nissan avtomobilinin ehtiyat hissələrinə</strong> ehtiyacı varsa, <strong>orijinal
                Nissan ehtiyat hissələrinin</strong> istifadəsi avtomobilin performansını və təhl&uuml;kəsizliyini
              qoruyaraq uzunm&uuml;ddətli perspektivdə daha qənaətcil se&ccedil;im ola bilər.
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
      title: 'Nissan ehtiyat hissələri | Onlayn mağaza | Otobaza',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Orijinal ehtiyat hissələrini Otobaza saytından və Nissan servis mərkəzlərindən əldə edə bilərsiniz.'
        }
      ]
    }
  }
}
</script>
