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
            <a href="/static">Home</a>
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
            <h1>İnsanlar niyə daha &ccedil;ox Audi avtomobillərinə &uuml;st&uuml;nl&uuml;k verirlər?</h1>
            <p>
              Audi avtomobillərinə keyfiyyətli dizaynı, yaxşı idarəetmə performansı, təhl&uuml;kəsiz texnologiyaları,
              daxili və xarici işıqlandırma x&uuml;susiyyətləri, rahat salon və y&uuml;ksək səviyyəli texnoloji
              avadanlıqlarına g&ouml;rə &uuml;st&uuml;nl&uuml;k verilir.
            </p>
            <p>
              Bundan əlavə, Audi avtomobilləri d&uuml;nya miqyasında prestijli brend kimi tanınır və s&uuml;r&uuml;c&uuml;l&uuml;k
              həzzi yaşadan performansa malikdir. Audi avtomobillərinin g&uuml;cl&uuml; m&uuml;hərrik se&ccedil;imləri,
              s&uuml;r&uuml;c&uuml; y&ouml;n&uuml;ml&uuml; texnologiyaları və keyfiyyətli materialları sayəsində
              avtomobilin səmərəliliyini və təhl&uuml;kəsizliyini qoruyan y&uuml;ksək standartlara uyğun istehsal olunan
              ehtiyat hissələri m&ouml;vcuddur.
            </p>
            <p>
              Odur ki, Audi avtomobillərinin keyfiyyətli və təhl&uuml;kəsiz s&uuml;r&uuml;c&uuml;l&uuml;k performansı
              insanların onlara &uuml;st&uuml;nl&uuml;k verməsinə səbəb ola bilir.
            </p>
            <p>&nbsp;</p>
            <h2>Audi ehtiyat hissələri keyfiyyətlidirmi?</h2>
            <p>
              Audi keyfiyyətli və səmərəli ehtiyat hissələri təklif etməyi hədəfləyən bir markadır. Audi avtomobilləri
              standart və performans meyarlarına uyğun istehsal olunur və ehtiyat hissələri də bu meyarlara uyğun dizayn
              edilir.
            </p>
            <p>
              Bu onu g&ouml;stərir ki, Audi ehtiyat hissələri avtomobilin orijinal performansını saxlayan və onun
              səmərəli işləməsini təmin edən keyfiyyətli məhsullardır. Bununla belə, Audi ehtiyat hissələrinin
              qiymətləri m&uuml;xtəlif hissələr və modellər arasında dəyişə bilər. Audi ehtiyat hissələri haqqında daha
              ətraflı məlumatı Audi səlahiyyətli servis mərkəzlərindən və ya Audi ehtiyat hissələri dilerlərindən əldə
              etmək olar.
            </p>
            <p>&nbsp;</p>
            <h2>Orijinal Audi ehtiyat hissəsini necə m&uuml;əyyən etmək olar?</h2>
            <p>
              Orijinal Audi ehtiyat hissələri avtomobilin seriya n&ouml;mrəsi, model n&ouml;mrəsi və hissə n&ouml;mrəsi
              kimi x&uuml;susiyyətlərlə m&uuml;əyyən edilir. Bu məlumatı Audi səlahiyyətli servislərində və ya Audi
              ehtiyat hissələri dilerlərində m&ouml;vcud olan verilənlər bazasından əldə etmək olar.
            </p>
            <p>
              Bundan əlavə, Audi ehtiyat hissələri Audi loqosu və "Original Teile" ifadəsi ilə m&uuml;əyyən edilə
              bilər. Bu identifikatorlar orijinal Audi ehtiyat hissələrini m&uuml;əyyən etmək və orijinal ehtiyat
              hissələrin keyfiyyətini və səmərəliliyini təmin etmək &uuml;&ccedil;&uuml;n istifadə edilə bilər.
            </p>
            <p><strong>&nbsp;</strong></p>
            <h2>Audi ehtiyat hissələri bahadırmı?</h2>
            <p>
              Audi ehtiyat hissələri, digər premium markaların ehtiyat hissələri kimi bahalı ola bilər. Bununla belə,
              Audi ehtiyat hissələrinin keyfiyyətini və səmərəliliyini nəzərə alsaq, onların avtomobilin uzun m&uuml;ddətdə
              daha səmərəli və d&uuml;zg&uuml;n işləməsinə k&ouml;mək edə biləcəyini d&uuml;ş&uuml;nmək olar.
            </p>
            <p>
              Bundan əlavə, Audi səlahiyyətli servislərində və ya Audi ehtiyat hissələri dilerlərində m&uuml;xtəlif
              kampaniyalar və endirimlər təklif oluna bilər ki, bu da ehtiyat hissələrinin qiymətini daha m&uuml;nasib
              edə bilər. Audi Ehtiyat hissələrinin qiymətləri avtomobilin modelindən, hissənin n&ouml;v&uuml;ndən və m&ouml;vcud
              bazar şərtlərindən asılı olaraq dəyişə bilər.
            </p>
            <h2>Audi avtomobillərinin əsas problemləri və ehtiyat hissələri</h2>
            <p>Audi avtomobillərinin əsas problemlərindən bəziləri bunlar ola bilər:</p>
            <ul>
              <li>
                <strong>Elektrik sistemi problemləri:</strong> Elektrik sistemi problemləri Audi avtomobillərində
                &uuml;mumi problem ola bilər. X&uuml;susilə sensorlar, başlıqlar və alternatorlar kimi hissələrdə
                problemlər yarana bilər.
              </li>
              <li>
                <strong>Şassi problemləri:</strong> Audi avtomobillərində şassi problemləri avtomobilin yaşından və
                istifadə şəkilindən asılı olaraq yarana bilər. Şassi deformasiyaları və korroziya kimi problemlər ola
                bilər.
              </li>
              <li>
                <strong>M&uuml;həndislik problemləri:</strong> Audi avtomobillərində m&uuml;həndislik problemlərinin
                ola biləcəyi d&uuml;ş&uuml;n&uuml;l&uuml;r. X&uuml;susilə m&uuml;hərrik, s&uuml;rətlər qutusu və s&uuml;kan
                sistemi kimi hissələrdə problemlər ola bilər.
              </li>
            </ul>
            <p>
              Ehtiyat hissələrinə gəlincə, Audi ehtiyat hissələri orijinal olmalıdır. Avtomobilin səmərəliliyini və
              təhl&uuml;kəsizliyini ən y&uuml;ksək səviyyədə saxlamaq &uuml;&ccedil;&uuml;n orijinal Audi ehtiyat
              hissələri prioritetdir. Bundan əlavə, Audi səlahiyyətli servislərində və ya Audi ehtiyat hissələri
              dilerlərində satılan ehtiyat hissələri avtomobil zəmanəti &ccedil;ər&ccedil;ivəsində istifadə edilə
              bilər.
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
      title: 'Audi ehtiyat hissələri | Onlayn mağaza | Otobaza',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Orijinal ehtiyat hissələrini Otobaza saytından və Audi servis mərkəzlərindən əldə edə bilərsiniz.'
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
