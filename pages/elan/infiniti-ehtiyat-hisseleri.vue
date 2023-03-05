6.vue
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
            <h1>İnsanlar niyə Infiniti avtomobillərinə daha &ccedil;ox &uuml;st&uuml;nl&uuml;k verirlər?</h1>
            <p>
              İnfiniti avtomobilləri dəbdəbəli və keyfiyyətli dizaynları, y&uuml;ksək performans və texnoloji x&uuml;susiyyətləri,
              təhl&uuml;kəsiz s&uuml;r&uuml;c&uuml;l&uuml;k təcr&uuml;bəsi təmin edən &ouml;zəllikləri ilə daha &ccedil;ox
              se&ccedil;ilir. Bundan əlavə, brendin m&uuml;ştəri xidməti və xidmət şəbəkəsinin olması da &uuml;st&uuml;nl&uuml;k
              verilmə səbəblərindəndir.
            </p>
            <p>&nbsp;</p>
            <h2>Infiniti ehtiyat hissələri keyfiyyətlidirmi?</h2>
            <p>
              Infiniti keyfiyyətli və etibarlı avtomobil markasıdır və o ehtiyat hissələrinin də eyni keyfiyyət
              standartlarına uyğun olmasını hədəfləyir. Orijinal Infiniti ehtiyat hissələri keyfiyyətli və etibarlıdır,
              &ccedil;&uuml;nki onlar avtomobilin performansını optimallaşdırmaq və təhl&uuml;kəsiz s&uuml;r&uuml;c&uuml;l&uuml;k
              təcr&uuml;bəsini təmin etmək &uuml;&ccedil;&uuml;n nəzərdə tutulub. Bununla belə, ehtiyat hissələrinin
              keyfiyyətinə həmişə marka tərəfindən zəmanət verilmir və alternativ ehtiyat hissələri tapıla bilər, ona g&ouml;rə
              də ehtiyat hissələrinin keyfiyyətini və uyğunluğunu həmişə yoxlamaq vacibdir.
            </p>
            <p>&nbsp;</p>
            <h2>Orijinal Infiniti ehtiyat hissəsini necə m&uuml;əyyən etmək olar?</h2>
            <p>
              Orijinal Infiniti ehtiyat hissələri Infiniti-nin səlahiyyətli təchizat&ccedil;ıları tərəfindən istehsal
              olunur və paylanır. Bunlar avtomobillər &uuml;&ccedil;&uuml;n uyğun və uyumlu ehtiyat hissələrdir və
              orijinal ehtiyat hissələri olduğundan avtomobilin performansına, təhl&uuml;kəsizliyinə və uzun&ouml;m&uuml;rl&uuml;l&uuml;y&uuml;nə
              zəmanət verir. Bundan əlavə, orijinal Infiniti ehtiyat hissələrini m&uuml;əyyən etmək &uuml;&ccedil;&uuml;n
              x&uuml;susi kodlar və n&ouml;mrələr istifadə olunur.
            </p>
            <p>&nbsp;</p>
            <h2>Infiniti ehtiyat hissələri bahadırmı?</h2>
            <p>
              Infiniti ehtiyat hissələrinin qiymətləri avtomobilin modelindən, istehsal tarixindən, ehtiyat hissəsinin
              n&ouml;v&uuml;ndən və m&ouml;vcud bazar şərtlərindən asılı olaraq dəyişə bilər. Bəzi Infiniti ehtiyat
              hissələri digər markalardan daha bahalı ola bilər, lakin bu ehtiyat hissələrinin keyfiyyəti və performansı
              da y&uuml;ksək ola bilər. Orijinal Infiniti ehtiyat hissələrini səlahiyyətli servis mərkəzlərindən və ya
              Infiniti təchizat&ccedil;ılarından əldə etmək m&uuml;mk&uuml;nd&uuml;r.
            </p>
            <p>&nbsp;</p>
            <h2>Infiniti avtomobillərinin əsas problemləri və ehtiyat hissələri?</h2>
            <p>
              Infiniti avtomobilləri ilə bağlı ən &ccedil;ox bildirilən problemlər avtomobilin elektrik sistemi,
              avtomobilin performansı, əyləc sistemi, soyutma sistemi və enerji təchizatı ilə bağlı ola bilər. Orijinal
              Infiniti ehtiyat hissələri avtomobilin performansını və təhl&uuml;kəsizliyini optimallaşdırmaq &uuml;&ccedil;&uuml;n
              dizayn edilmiş və sınaqdan ke&ccedil;irilmişdir. Daha ucuz qiymətə alternativ ehtiyat hissələri də tapmaq
              və əldə etmək m&uuml;mk&uuml;nd&uuml;r, lakin onların &ouml;mr&uuml; orijinal Infiniti ehtiyat hissələri
              qədər uzun olmaya bilər.
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
      title: 'İnfiniti ehtiyat hissələri | Onlayn mağaza | Otobaza',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Orijinal ehtiyat hissələrini Otobaza saytından və ya İnfiniti servis mərkəzlərindən əldə edə bilərsiniz.'
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
