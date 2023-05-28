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
              <strong>İnsanlar niyə daha &ccedil;ox Changan avtomobillərinə &uuml;st&uuml;nl&uuml;k verirlər?</strong>
            </h1>
            <p>
              <strong>Changan avtomobilləri</strong> bir əsrdən artıqdır ki, avtomobil istehsal edən &Ccedil;inli
              avtomobil şirkəti tərəfindən istehsal olunur. <strong>Changan</strong> <strong>avtomobilləri</strong>
              istehlak&ccedil;ıların ehtiyacları nəzərə alınmaqla bazara yaxşı uyğun gələn x&uuml;susiyyətlər və
              spesifikasiyalar təklif etməklə hazırlanmışdır.M&uuml;əyyən bir markanın se&ccedil;ilməsinin səbəbləri hər
              insan &uuml;&ccedil;&uuml;n fərqli ola bilər. Lakin &uuml;mumilikdə insanlar avtomobil alarkən se&ccedil;imi
              <strong>Changan avtomobilləri</strong> &uuml;zərindən etməklərinə səbəb brendin qiymət/performans nisbəti,
              etibarlı dizayn, yaxşı m&uuml;ştəri xidməti və geniş &ccedil;eşidli modellərə g&ouml;rə bəyənir və &uuml;st&uuml;n
              tuturlar. <strong>Changan avtomobilləri</strong> həm də yanacaq səmərəliliyi nəzərə alınmaqla dizayn
              edilmişdir, əla yanacaq qənaəti və aşağı emissiya təklif edir. Təhl&uuml;kəsiz, səmərəli və ya sadəcə
              olaraq ən son texnologiya ilə dolu avtomobil axtarırsınızsa, <strong>Changan avtomobili</strong> hər kəs
              &uuml;&ccedil;&uuml;n nəsə təklif edən əla se&ccedil;imdir.
            </p>
            <p>&nbsp;</p>
            <h2><strong>Changan ehtiyat hissələri keyfiyyətlidir?</strong></h2>
            <p>
              <strong>Changan ehtiyat hissələri</strong> &uuml;mumiyyətlə y&uuml;ksək keyfiyyət və etibarlılığı ilə
              tanınır. Şirkət m&uuml;ştərilərin g&ouml;zləntilərini qarşılamaq &uuml;&ccedil;&uuml;n istehsal olunan
              <strong>avtomobil ehtiyat</strong> <strong>hissələrinin</strong> daim təkmilləşdirilməsinə və inkişafına
              &uuml;st&uuml;nl&uuml;k verir. <strong>&ldquo;Changan&rdquo;ın ehtiyat hissələrinin </strong>keyfiyyəti
              brendin istehsal standartlarından və keyfiyyətə nəzarət proseslərindən asılıdır. &Uuml;mumiyyətlə,
              <strong>avtomobil</strong> <strong>ehtiyat hissələri</strong> keyfiyyətinə g&ouml;rə brendlər arasında
              oxşar, bir markanın ehtiyat hissələrinin keyfiyyəti isə digər markalarınkından fərqli ola bilər. Buna g&ouml;rə
              də, <strong>Changan ehtiyat hissələri</strong> ilə bağlı keyfiyyət haqqında dəqiq bir nəticə &ccedil;ıxarmaq
              &uuml;&ccedil;&uuml;n bu hissələrin istifadəsi və performansı haqqında daha &ccedil;ox məlumat lazımdır.
            </p>
            <p>&nbsp;</p>
            <h2><strong>Orijinal Changan ehtiyat hissəsini necə m&uuml;əyyən etmək olar?</strong></h2>
            <p>
              <strong>Orijinal Changan ehtiyat hissələri</strong> brendin rəsmi dilerləri və ya servis mərkəzləri
              tərəfindən satılır və paylanır. <strong>Orijinal ehtiyat hissələri</strong> adətən istehsal&ccedil;ının
              markası ilə etiketlənir. <strong>Changan ehtiyat hissələri</strong> Changan loqosu və ya adı ilə
              etiketlənməlidir. <strong>Orijinal ehtiyat</strong> <strong>hissələri</strong> d&uuml;zg&uuml;n və təhl&uuml;kəsiz
              qablaşdırmada təqdim edilməlidir. Əgər qablaşdırma zədələnibsə və ya səhvdirsə, həmin ehtiyat hissə
              orijinal olmaya bilər. <strong>Orijinal ehtiyat hissələri</strong> adətən bazardakı digər <strong>ehtiyat
                hissələri</strong> ilə m&uuml;qayisədə daha bahadır. <strong>Avtomobil</strong> <strong>ehtiyat</strong>
              <strong>hissəsi</strong> &ccedil;ox ucuz g&ouml;r&uuml;n&uuml;rsə, o <strong>avtomobil ehtiyat
                hissəsi</strong> orijinal olmaya bilər. Siz <strong>Changan ehtiyat hissələrini</strong> yalnız rəsmi
              dilerdən almalısınız. Rəsmi diler <strong>orijinal ehtiyat</strong> <strong>hissələrinə</strong> zəmanət
              verir və sizə ən yaxşı keyfiyyət təklif edir. Bundan savayı <strong>orijinal ehtiyat hissələri</strong>
              adətən məhsul kodları ilə m&uuml;əyyən edilir. Məhsul kodları ehtiyat hissəsinin hansı Changan modelinə
              uyğun olduğunu və hansı x&uuml;susiyyətlərə malik olduğunu g&ouml;stərir. <strong>Orijinal ehtiyat
                hissələri</strong> avtomobilin performansını və təhl&uuml;kəsizliyini qoruyan y&uuml;ksək keyfiyyət və
              etibarlılıqla istehsal olunur. <strong>Ehtiyat hissə</strong> performans və ya təhl&uuml;kəsizlik
              baxımından q&uuml;surlu g&ouml;r&uuml;n&uuml;rsə, həmin <strong>avtomobil</strong>
              <strong>ehtiyat</strong> <strong>hissəsi</strong> orijinal olmaya bilər.
            </p>
            <h2><strong>Changan ehtiyat hissələri bahadır?</strong></h2>
            <p>
              <strong>Changan ehtiyat hissələrinin</strong> qiyməti digər markalı <strong>ehtiyat hissələri</strong>
              ilə m&uuml;qayisədə fərqlidir. Ehtiyat hissələrinin qiyməti istehsal xərclərindən, tədar&uuml;k
              prosesindən, bazar şərtlərindən və digər amillərdən asılıdır. Bununla belə, <strong>Changan ehtiyat
                hissələrinin</strong> digər <strong>avtomobil ehtiyat hissələri</strong> ilə m&uuml;qayisədə baha və ya
              ucuz olması barədə &uuml;mumi nəticə &ccedil;ıxarmaq &uuml;&ccedil;&uuml;n m&uuml;əyyən hissə və ya model
              haqqında məlumat lazımdır. Bundan əlavə, ehtiyat hissələrinin qiyməti də orijinal və ya aşağı keyfiyyətli
              ehtiyat hissələri kimi təsvir edilə bilən alternativ variantlarla m&uuml;qayisədə dəyişə bilər.
            </p>
            <p>&nbsp;</p>
            <h2><strong>Changan avtomobillərinin əsas problemləri və ehtiyat hissələri?</strong></h2>
            <p>
              <strong>Changan avtomobillərinin</strong> m&uuml;əyyən modeli haqqında &uuml;mumi problem və ya <strong>Changan
                ehtiyat</strong> <strong>hissələri</strong> haqqında konkret nəticə vermək &uuml;&ccedil;&uuml;n sizə daha
              &ccedil;ox məlumat lazımdır. Hər bir avtomobil modelində fərqli problemlər və fərqli <strong>ehtiyat
                hissələri</strong> tələbləri ola bilər. Bununla belə, &uuml;mumiyyətlə, avtomobillərdə ən &ccedil;ox
              rast gəlinən problemlər m&uuml;hərrik performansı, suspenziya, transmissiya və əyləc sistemləri kimi
              mexaniki problemlər ola bilər. <strong>Changan ehtiyat hissələrinin</strong> keyfiyyəti və qiyməti də
              brendin istehsal standartlarından və bazar şəraitindən asılıdır. <strong>Changan</strong> <strong>avtomobili</strong>
              ilə bağlı konkret probleminiz varsa və ya ehtiyat hissələrinə ehtiyacınız varsa, markanın rəsmi dilerləri
              və ya servis mərkəzləri ilə əlaqə saxlaya bilərsiniz.
            </p>
            <p>&nbsp;</p>
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
      title: 'Changan ehtiyat hissələri | Onlayn mağaza | Otobaza',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Orijinal ehtiyat hissələrini Otobaza saytından və ya Changan servis mərkəzlərindən əldə edə bilərsiniz.'
        }
      ]
    }
  }
}
</script>
