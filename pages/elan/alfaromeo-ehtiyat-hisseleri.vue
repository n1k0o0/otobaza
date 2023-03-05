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
          <UsedParts :loading="loadingResults" :search="search" />
          <div class="seo_content mt-5">
            <h1>İnsanlar niyə Alfa Romeo avtomobillərinə daha &ccedil;ox &uuml;st&uuml;nl&uuml;k verirlər?</h1>
            <p>
              Alfa Romeo avtomobilləri unikal dizayn, keyfiyyətli materiallar, yaxşı performans və z&ouml;vql&uuml; s&uuml;r&uuml;c&uuml;l&uuml;k
              təcr&uuml;bəsi kimi amillərə g&ouml;rə bir &ccedil;ox insan tərəfindən se&ccedil;ilir. Bundan əlavə, Alfa
              Romeo avtomobilləri ilk n&ouml;vbədə sport və dinamik s&uuml;r&uuml;c&uuml;l&uuml;k təcr&uuml;bəsi axtaran
              s&uuml;r&uuml;c&uuml;lər &uuml;&ccedil;&uuml;n nəzərdə tutulmuşdur və bu s&uuml;r&uuml;c&uuml;lərin
              ehtiyaclarına cavab verən bir &ccedil;ox x&uuml;susiyyətlərə sahibdir.
            </p>
            <p>
              Alfa Romeo avtomobilləri digər premium brendlərdən fərqli &uuml;slub və xarakterə malikdir və bu, s&uuml;r&uuml;c&uuml;lərin
              avtomobil se&ccedil;ərkən se&ccedil;diyi əsas amillərdən biridir. Bundan əlavə Alfa Romeo, avtomobil
              texnologiyasındakı ən son yeniliklərdən istifadə edərək avtomobillərini dizayn etməyə davam edir və s&uuml;r&uuml;c&uuml;lərinə
              ən yaxşı s&uuml;r&uuml;c&uuml;l&uuml;k təcr&uuml;bəsi təqdim etməyi hədəfləyir.
            </p>
            <p>&nbsp;</p>
            <h2>Alfa Romeo ehtiyat hissələri keyfiyyətlidirmi?</h2>
            <p>
              Alfa Romeo, avtomobil istehsal&ccedil;ıları arasında keyfiyyətli ehtiyat hissələri istehsalında uzun
              tarixə malikdir. Orijinal Alfa Romeo ehtiyat hissələri &uuml;mumiyyətlə keyfiyyətli hesab olunur, &ccedil;&uuml;nki
              onlar avtomobilin performansını və səmərəliliyini qorumaq &uuml;&ccedil;&uuml;n nəzərdə tutulmuş və
              istehsal edilmişdir.
            </p>
            <p>
              Bundan əlavə, Alfa Romeo səlahiyyətli servisləri tərəfindən edilən d&uuml;zg&uuml;n təmir və orijinal
              ehtiyat hissələrinin istifadəsi avtomobilin təhl&uuml;kəsizliyini və uzunm&uuml;ddətli performansını
              qorumağa k&ouml;mək edəcəkdir. Bununla belə, bazarda m&uuml;xtəlif keyfiyyətli ehtiyat hissələri tapıla
              bilər, ona g&ouml;rə də ən yaxşı nəticələrə zəmanət vermək &uuml;&ccedil;&uuml;n orijinal Alfa Romeo
              ehtiyat hissələrini se&ccedil;mək vacibdir.
            </p>
            <p>&nbsp;</p>
            <h2>Orijinal Alfa Romeo ehtiyat hissəsini necə m&uuml;əyyən etmək olar?</h2>
            <p>
              Orijinal Alfa Romeo ehtiyat hissələri, Alfa Romeo tərəfindən hazırlanmış və avtomobiliniz &uuml;&ccedil;&uuml;n
              uyğun olan hissələri m&uuml;əyyən etmək &uuml;&ccedil;&uuml;n bir &ccedil;ox amillərdən istifadə olunur.
              Bu amillərə avtomobilinizin modeli, istehsal ili, m&uuml;hərrik n&ouml;v&uuml; və s. daxildir.
            </p>
            <p>
              Orijinal Alfa Romeo ehtiyat hissələri Alfa Romeo səlahiyyətli servisləri və ya səlahiyyətli Alfa Romeo
              dilerləri tərəfindən təklif olunur və bu ehtiyat hissələri avtomobilin performansını eyni zamanda
              səmərəliliyini ən yaxşı şəkildə qorumaq &uuml;&ccedil;&uuml;n dizayn edilib istehsal olunduğu &uuml;&ccedil;&uuml;n
              təhl&uuml;kəsiz və y&uuml;ksək keyfiyyətli hesab olunur.
            </p>
            <p>
              Avtomobiliniz &uuml;&ccedil;&uuml;n tələb olunan ehtiyat hissələrini m&uuml;əyyən etmək &uuml;&ccedil;&uuml;n
              siz Alfa Romeo səlahiyyətli servislərinə və ya dilerlərinə m&uuml;raciət edə bilərsiniz. Bu servislər və
              dilerlər avtomobilinizin modeli və istehsal ili kimi faktorlara əsaslanaraq sizi d&uuml;zg&uuml;n ehtiyat
              hissələri ilə təmin edəcəklər.
            </p>
            <p>&nbsp;</p>
            <h2>Alfa Romeo ehtiyat hissələri bahadırmı?</h2>
            <p>
              Alfa Romeo ehtiyat hissələrinin qiyməti bir &ccedil;ox amillərin təsiri altında dəyişə bilər. Bu amillərə
              ehtiyat hissəsinin xarakteri, &ouml;l&ccedil;&uuml;s&uuml;, yeni olması və &uuml;mumi tələb və təklifin
              vəziyyəti daxildir.
            </p>
            <p>
              Orijinal Alfa Romeo ehtiyat hissələri &ccedil;ox vaxt daha baha ola bilər, lakin bu, ehtiyat hissənin
              keyfiyyətinə və performansına g&ouml;rə onlara &uuml;st&uuml;nl&uuml;k verə bilər. Bundan əlavə, bu
              hissələrin Alfa Romeo səlahiyyətli servislərində və ya səlahiyyətli Alfa Romeo dilerlərində m&ouml;vcud
              olması qiymətlərin daha y&uuml;ksək olmasına səbəb ola bilər.
            </p>
            <p>
              Buna g&ouml;rə də Alfa Romeo ehtiyat hissələrinin bahalı olub-olmaması bir &ccedil;ox amillərdən asılıdır
              və avtomobillər &uuml;&ccedil;&uuml;n tələb olunan ehtiyat hissələrin x&uuml;susiyyətlərinə g&ouml;rə
              dəyişə bilər. Avtomobiliniz &uuml;&ccedil;&uuml;n tələb olunan ehtiyat hissələrini m&uuml;əyyən etmək və
              bu hissələrin qiymətləri haqqında ətraflı &ouml;yrənmək &uuml;&ccedil;&uuml;n siz Alfa Romeo səlahiyyətli
              servislərinə və ya dilerlərinə m&uuml;raciət edə bilərsiniz.
            </p>
            <p>&nbsp;</p>
            <h2>Alfa Romeo avtomobillərinin əsas problemləri və ehtiyat hissələri</h2>
            <p>
              Alfa Romeo avtomobillərinin bəzi &uuml;mumi problemləri elektrik sistemi, s&uuml;kan sistemi, kondisioner
              və soyutma sistemi, əyləc mexanizmi və təkər təzyiqinə nəzarət sistemi kimi avtomobil sistemlərindən asılı
              olaraq dəyişə bilər.
            </p>
            <p>
              Bu problemləri həll etmək &uuml;&ccedil;&uuml;n orijinal Alfa Romeo ehtiyat hissələrinin istifadəsi
              avtomobil sistemlərinin d&uuml;zg&uuml;n işləməsini və avtomobilin səmərəliliyini təmin edə bilər. Bundan
              əlavə, bu ehtiyat hissələrinin keyfiyyəti və performansı avtomobilin uzun m&uuml;ddət rahat işləməsini
              təmin edir.
            </p>
            <p>
              Bununla belə, hər bir avtomobil və hər bir nəqliyyat vasitəsi fərqli problem strukturuna malik ola bilər.
              Buna g&ouml;rə də Alfa Romeo avtomobilləri &uuml;&ccedil;&uuml;n tələb olunan ehtiyat hissələrini m&uuml;əyyən
              etmək və bu hissələrin qiymətləri haqqında ətraflı &ouml;yrənmək &uuml;&ccedil;&uuml;n Alfa Romeo
              səlahiyyətli servislərinə və ya dilerlərinə m&uuml;raciət edə bilərsiniz.
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
import SearchPlaceholder from '@/components/Search/SearchPlaceholder'
import UsedParts from '~/components/Used/UsedParts.vue'
import UsedFilter from '~/components/Used/UsedFilter.vue'

import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'Search',
  watchQuery: true,
  components: {
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
      brand_key: 'Used/brand_key'
    })
  },
  methods: {
    ...mapActions({
      FILTER_PARTS: 'Used/FILTER_PARTS',
      GET_PARTS: 'Used/GET_PARTS',
      GET_CATALOG_MANUFACTURERS: 'Used/GET_BRANDS',
      GET_MANUFACTURER_MODELS: 'Used/GET_MODELS'
    }),
    scrollTop () {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  },
  head () {
    return {
      title: 'Alfa Romeo ehtiyat hissələri | Onlayn mağaza | Otobaza',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Orijinal ehtiyat hissələrini Otobaza saytından və ya Alfa Romeo servis mərkəzlərindən əldə edə bilərsiniz.'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.search_wrap {
  gap: 24px;
  //margin: 20px auto;
  padding: 0 0 40px 0;
  //min-height: calc(100vh - 20px - 62px - 95px - 241px);
  min-height: calc(100vh - 123px - 41px - 36px - 360px);
  border-radius: 16px;

  .fa-search {
    position: absolute;
    top: 10px;
    right: 5px;
    color: #bababa;
    cursor: pointer;
  }

}

//
//@media screen and (min-width: 768px) {
//  .search_wrap {
//    padding: 50px 20px;
//  }
//}
//
//@media screen and (min-width: 992px) {
//  .search_wrap {
//    padding: 50px 30px;
//  }
//}
</style>
