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
            <h1>
              <strong>İnsanlar niyə daha &ccedil;ox Mazda avtomobillərinə &uuml;st&uuml;nl&uuml;k verirlər?</strong>
            </h1>
            <p>
              <strong>Mazda avtomobilləri</strong> y&uuml;ksək performans, y&uuml;ksək keyfiyyətli materiallar, g&uuml;cl&uuml;
              və &ccedil;evik m&uuml;hərrik, unikal dizayn və texnoloji x&uuml;susiyyətlər kimi bir &ccedil;ox amillərə
              g&ouml;rə avtomobil həvəskarları tərəfindən se&ccedil;ilir. &Ccedil;&uuml;nki <strong>Mazda
                avtomobilləri </strong>y&uuml;ksək məhsuldar m&uuml;hərrikləri, dəbli dizaynı və qabaqcıl texnologiyası
              ilə tanınır. Bundan əlavə, &ldquo;Mazda&rdquo;nın brend imici, m&uuml;kəmməl m&uuml;ştəri xidməti və g&uuml;cl&uuml;
              tarixi də insanlarda BMW avtomobillərinə maraq artırır. Sedanlardan tutmuş yolsuzluq avtomobillərinə qədər
              m&uuml;ştərilərə m&uuml;xtəlif se&ccedil;imlər təqdim etdiyi &uuml;&ccedil;&uuml;n <strong>Mazda</strong>
              <strong>avtomobilləri </strong>avtomobil bazarında &ccedil;oxsaylı se&ccedil;imə sahibdir. Şirkətin
              davamlılıq və ekoloji məsuliyyətə sadiqliyi də <strong>Mazda</strong> <strong>avtomobillərinin </strong>alış
              g&uuml;c&uuml;n&uuml; artırır.
            </p>
            <p>
              &Uuml;mumilikdə, <strong>Mazda avtomobilləri</strong> avtomobil alıcılarını cəlb etməyə və &ldquo;BMW&rdquo;ni
              &uuml;st&uuml;nl&uuml;k verilən brendə &ccedil;evirməyə davam edən l&uuml;ks, performans, &uuml;slub və
              texnologiyanın birləşməsini təklif edir.
            </p>
            <p>&nbsp;</p>
            <h2><strong>Mazda ehtiyat hissələri keyfiyyətlidir?</strong></h2>
            <p>
              <strong>Mazda ehtiyat hissələrinin</strong> keyfiyyətinə və məhsuldarlığına zəmanət vermək &uuml;&ccedil;&uuml;n
              ciddi nəzarət prosesi tətbiq edir. <strong>Mazdanın orijinal ehtiyat hissələri</strong> avtomobillərin
              əvvəlki g&ouml;stəriciləri ilə bərabər və ya daha yaxşı performans g&ouml;stərmək &uuml;&ccedil;&uuml;n
              nəzərdə tutulmuşdur. Bununla belə, <strong>ehtiyat hissələrinin</strong> qiyməti və keyfiyyəti hissənin
              istehsal&ccedil;ısı və modelindən asılı olaraq dəyişə bilər. Ona g&ouml;rə də m&uuml;mk&uuml;n olan ən
              <strong>keyfiyyətli avtomobil ehtiyat hissələrini</strong> se&ccedil;mək t&ouml;vsiyə olunur.
            </p>
            <p>&nbsp;</p>
            <h2><strong>Orijinal Mazda ehtiyat hissəsini necə m&uuml;əyyən etmək olar?</strong></h2>
            <p>
              <strong>Orijinal Mazda ehtiyat hissələri</strong> Toyota tərəfindən istehsal edilmiş və Toyota tərəfindən
              təsdiqlənmişdir. <strong>Orijinal Mazda ehtiyat hissələrini</strong> m&uuml;əyyən etmək &uuml;&ccedil;&uuml;n
              aşağıdakılara nəzər yetirmək olar:
            </p>
            <ul>
              <li>
                <strong>Mazda avtomobillərinin</strong> rəsmi diler və ya xidmət məntəqəsinə gedin. <strong>Orijinal
                  Mazda ehtiyat hissələri</strong> Mazda markasının rəsmi dilerləri və ya xidmət məntəqələri tərəfindən
                satılır.
              </li>
              <li>
                VIN n&ouml;mrəsini təqdim edin. VIN n&ouml;mrəsi və ya BAN kod avtomobiliniz &uuml;&ccedil;&uuml;n
                unikal identifikatordur və Mazda dileri və ya xidmət məntəqəsi avtomobiliniz &uuml;&ccedil;&uuml;n uyğun
                <strong>ehtiyat hissələri</strong> m&uuml;əyyən etmək &uuml;&ccedil;&uuml;n bu n&ouml;mrədən istifadə
                edə bilər.
              </li>
              <li>
                <strong>Avtomobil ehtiyat hissəsi</strong> alarkən qablaşdırmanı yoxlayın. <strong>Orijinal Mazda
                  ehtiyat hissələri</strong> Mazda tərəfindən istehsal olunur və orijinal Toyota qablaşdırmasında satılır.
                Qablaşdırmanı yoxlayın və orijinal Mazda loqosu və işarələrini axtarın.
              </li>
            </ul>
            <p>&nbsp;</p>
            <h2>Mazda ehtiyat hissələri bahadırmı?</h2>
            <p>
              Mazda ehtiyat hissələrinin qiymətləri hissənin n&ouml;v&uuml;ndən, konstruksiyasından və performansından
              asılı olaraq dəyişə bilər. Bəzi ehtiyat hissələri digərlərindən daha bahalı ola bilər, lakin &ccedil;ox
              vaxt orijinal Mazda ehtiyat hissələri daha ucuz alternativ ehtiyat hissələrinə nisbətən daha baha olur.
              Bu, daha y&uuml;ksək keyfiyyətli materiallardan və iş&ccedil;ilikdən istifadə ilə izah edilə bilər.
            </p>
            <p>
              Eyni zamanda, Mazda ehtiyat hissələrinin qiymətləri də onların harada satılmasından və bazar şəraitindən
              asılıdır. Mazda ehtiyat hissələrinin Otobazadan və ya rəsmi Mazda dilerlərindən alınması qiymətlərin
              bahalaşması riskini azalda bilər.
            </p>
            <p>&nbsp;</p>
            <h2>Mazda avtomobillərinin əsas problemləri və ehtiyat hissələri</h2>
            <p>Mazda avtomobillərinin əsas problemlərindən bəziləri bunlar ola bilər:</p>
            <ul>
              <li>
                <strong>Elektrik sistemi problemləri:</strong> Elektrik sistemi problemləri Mazda avtomobillərində
                &uuml;mumi problem ola bilər. X&uuml;susilə sensorlar, başlıqlar və alternatorlar kimi hissələrdə
                problemlər yarana bilər.
              </li>
              <li>
                <strong>Şassi problemləri:</strong> Mazda avtomobillərində şassi problemləri avtomobilin yaşından və
                istifadə şəkilindən asılı olaraq yarana bilər. Şassi deformasiyaları və korroziya kimi problemlər ola
                bilər.
              </li>
              <li>
                <strong>M&uuml;həndislik problemləri:</strong> Mazda avtomobillərində m&uuml;həndislik problemlərinin
                ola biləcəyi d&uuml;ş&uuml;n&uuml;l&uuml;r. X&uuml;susilə m&uuml;hərrik, s&uuml;rətlər qutusu və s&uuml;kan
                sistemi kimi hissələrdə problemlər ola bilər.
              </li>
            </ul>
            <p>
              Ehtiyat hissələrinə gəlincə, Mazda ehtiyat hissələri orijinal olmalıdır. Avtomobilin səmərəliliyini və
              təhl&uuml;kəsizliyini ən y&uuml;ksək səviyyədə saxlamaq &uuml;&ccedil;&uuml;n orijinal Mazda ehtiyat
              hissələri prioritetdir.
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
                  hissələrini buradan əldə edə bilərsiniz</a>&nbsp;&nbsp;</u>
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
      title: 'Mazda ehtiyat hissələri | Onlayn mağaza | Otobaza',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Orijinal ehtiyat hissələrini Otobaza saytından və ya Mazda servis mərkəzlərindən əldə edə bilərsiniz.'
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
