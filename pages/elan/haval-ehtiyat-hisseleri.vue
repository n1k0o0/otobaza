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
            <h1>İnsanlar niyə Haval avtomobillərinə daha &ccedil;ox &uuml;st&uuml;nl&uuml;k verirlər?</h1>
            <p>
              Haval avtomobillərini se&ccedil;mək &uuml;&ccedil;&uuml;n bir &ccedil;ox amillər var. Onların
              arasında:
            </p>
            <ul>
              <li>
                <strong>Qiymət:</strong> Haval avtomobilləri digər markaların avtomobilləri ilə m&uuml;qayisədə daha
                sərfəli ola bilər.
              </li>
              <li>
                <strong>Performans:</strong> Haval avtomobilləri y&uuml;ksək performans və funksional x&uuml;susiyyətlərə
                malik ola bilər.
              </li>
              <li>
                <strong>Etibarlılıq:</strong> Etibarlılığı və uzun&ouml;m&uuml;rl&uuml; olması səbəbi ilə Haval
                avtomobillərinə &uuml;st&uuml;nl&uuml;k verilə bilər.
              </li>
              <li><strong>Dizayn:</strong> Haval avtomobilləri m&uuml;asir və dəbli dizayna malik ola bilər.</li>
              <li><strong>İnteryer:</strong> Haval avtomobilləri rahat və komfortlu salon təklif edə bilər.</li>
            </ul>
            <p>
              Bu amillərlə yanaşı, m&uuml;ştərilərin fərdi se&ccedil;imləri, ehtiyacları və g&ouml;zləntiləri də
              onların Haval avtomobillərinə &uuml;st&uuml;nl&uuml;k vermələrinə səbəb ola bilər. Bu səbəblər arasında
              yalnız bir ne&ccedil;əsi qeyd edilmişdir və digər amillərə də rast gəlmək m&uuml;mk&uuml;nd&uuml;r.
            </p>
            <p>&nbsp;</p>
            <h2>Haval ehtiyat hissələri keyfiyyətlidir?</h2>
            <p>
              Haval ehtiyat hissələrinin keyfiyyəti istehsal&ccedil;ıya, təchizat&ccedil;ıya həm&ccedil;inin ehtiyat
              hissəsinin təyinatına və digər amillərə g&ouml;rə dəyişə bilər. &Uuml;mumiyyətlə, orijinal Haval ehtiyat
              hissələri y&uuml;ksək keyfiyyətlidir və avtomobilin orijinal performansını saxlayır. Haval ehtiyat
              hissələrini daha ətraflı dəyərləndirmək &uuml;&ccedil;&uuml;n Haval səlahiyyətli servis mərkəzləri və ya
              səlahiyyətli təchizat&ccedil;ılarla əlaqə saxlaya bilərsiniz.
            </p>
            <p>&nbsp;</p>
            <h2>Orijinal Haval ehtiyat hissəsini necə m&uuml;əyyən etmək olar?</h2>
            <p>
              Orijinal Haval ehtiyat hissələri istehsal&ccedil;ı tərəfindən təsdiqlənmiş və markalı hissələrdir. Bunlar
              avtomobilin orijinal performansını qoruyan və d&uuml;zg&uuml;n işləməsini təmin edən ehtiyat
              hissələrdir.
            </p>
            <p>
              Orijinal Haval ehtiyat hissələrini m&uuml;əyyən etmək &uuml;&ccedil;&uuml;n aşağıdakı addımları yerinə
              yetirmək olar:
            </p>
            <ul>
              <li>Avtomobilinizin modelini və seriya n&ouml;mrəsini m&uuml;əyyənləşdirin.</li>
              <li>Haval səlahiyyətli servis mərkəzləri və ya səlahiyyətli təchizat&ccedil;ılarla əlaqə saxlayın.</li>
              <li>Lazım olan ehtiyat hissəsinin markasını və model n&ouml;mrəsini m&uuml;əyyən edib g&ouml;stərin.</li>
              <li>
                Səlahiyyətli servis mərkəzi və ya təchizat&ccedil;ı sizin &uuml;&ccedil;&uuml;n avtomobilinizə lazım
                olan orijinal Haval ehtiyat hissələrini &ccedil;atdıracaq və avtomobiliniz &uuml;&ccedil;&uuml;n ən
                uyğun ehtiyat hissələrini m&uuml;əyyən edəcəkdir.
              </li>
            </ul>
            <p>
              Bu hissələrin d&uuml;zg&uuml;n quraşdırılması və istismarı &uuml;&ccedil;&uuml;n lazımi dəstək də verilə
              bilər. Orijinal Haval ehtiyat hissələrindən istifadə etməklə siz avtomobilinizin performansını və təhl&uuml;kəsizliyini
              qoruya bilərsiniz.
            </p>
            <p>&nbsp;</p>
            <h2>Haval ehtiyat hissələri bahadırmı?</h2>
            <p>
              Haval ehtiyat hissələrinin qiymətləri hissənin n&ouml;v&uuml;ndən, keyfiyyətindən və tədar&uuml;k&ccedil;&uuml;s&uuml;ndən
              asılı olaraq dəyişə bilər. Orijinal Haval ehtiyat hissələri &uuml;mumiyyətlə daha bahalı ola bilər, lakin
              onlar daha y&uuml;ksək keyfiyyət və d&uuml;zg&uuml;n işləmək zəmanəti vəd edirlər. Siz həm&ccedil;inin
              orijinal ehtiyat hissələrindən istifadə etməklə avtomobilinizin performansını və təhl&uuml;kəsizliyini
              qoruya bilərsiniz. Bununla belə, digər ucuz alternativ ehtiyat hissələri də tapmaq m&uuml;mk&uuml;n ola
              bilər. Bunları m&uuml;qayisə edib dəyərləndirmək &uuml;&ccedil;&uuml;n Haval səlahiyyətli servis
              mərkəzləri və ya səlahiyyətli təchizat&ccedil;ılarla əlaqə saxlaya bilərsiniz.
            </p>
            <p>&nbsp;</p>
            <h2>Haval avtomobillərinin əsas problemləri və ehtiyat hissələri?</h2>
            <p>
              Haval avtomobillərində yaşana biləcək problemlər, hər bir avtomobildə olduğu kimi, avtomobilin yaşı,
              istifadə &uuml;sulu, texniki xidmət və təmir tarix&ccedil;əsi kimi amillərdən asılıdır.
            </p>
            <p>Bununla belə, Haval avtomobilləri ilə bağlı tez-tez bildirilən bəzi problemlər bunlar ola bilər:</p>
            <ul>
              <li>Elektrik sistemində problemlər</li>
              <li>Yanacaq sistemində problemlər</li>
              <li>Soyutma sistemində problemlər</li>
              <li>Avtomatik &ouml;t&uuml;rmə problemləri</li>
              <li>Balans problemləri</li>
            </ul>
            <p>
              Bu problemləri həll etmək &uuml;&ccedil;&uuml;n orijinal Haval ehtiyat hissələri&nbsp; istifadə edilə
              bilər və ya səlahiyyətli servis mərkəzində avtomobil təmir edilə bilər. Bu, avtomobilin performansını və
              təhl&uuml;kəsizliyini qoruyacaq və uzunm&uuml;ddətli istismar xərclərini minimuma endirəcək.
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
      title: 'Haval ehtiyat hissələri | Onlayn mağaza | Otobaza',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Orijinal ehtiyat hissələrini Otobaza saytından və ya Haval servis mərkəzlərindən əldə edə bilərsiniz.'
        }
      ]
    }
  }
}
</script>
