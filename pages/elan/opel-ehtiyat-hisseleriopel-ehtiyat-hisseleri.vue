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
            <h1>İnsanlar niyə daha &ccedil;ox Opel avtomobillərinə &uuml;st&uuml;nl&uuml;k verirlər?</h1>
            <p>İnsanların Opel avtomobillərinə &uuml;st&uuml;nl&uuml;k verməsinin bir ne&ccedil;ə səbəbi var:</p>
            <ul>
              <li>
                <strong> Qiymət:</strong> Opel avtomobilləri digər markalardan daha m&uuml;nasibdir və bu, insanlar
                &uuml;&ccedil;&uuml;n cəlbedici se&ccedil;im ola bilər.
              </li>
              <li>
                <strong> Performans:</strong> Opel avtomobilləri g&uuml;cl&uuml; və davamlı m&uuml;hərrikləri və yaxşı
                s&uuml;r&uuml;c&uuml;l&uuml;k təcr&uuml;bəsi təklif edən dizaynları sayəsində performans y&ouml;n&uuml;ml&uuml;
                markadır.
              </li>
              <li>
                <strong> Keyfiyyət:</strong> Opel avtomobilləri etibarlı və davamlı dizayna malik olduğundan insanlar
                &uuml;&ccedil;&uuml;n keyfiyyətli se&ccedil;im ola bilər.
              </li>
              <li>
                <strong> Servis və texniki xidmət:</strong> Opel avtomobilləri geniş servis şəbəkəsinə malikdir və
                texniki xidmət və təmir &uuml;&ccedil;&uuml;n rahat eyni zamanda uyğun se&ccedil;im təklif edir.
              </li>
            </ul>
            <p>
              Opel avtomobillərinə &uuml;st&uuml;nl&uuml;k verilməsinin başqa səbəbləri də var və bu, insanların
              ehtiyaclarına, g&ouml;zləntilərinə və se&ccedil;imlərinə g&ouml;rə dəyişə bilər.
            </p>
            <p>&nbsp;</p>
            <h2>Opel ehtiyat hissələri keyfiyyətlidirmi?</h2>
            <p>
              Opel ehtiyat hissələri &uuml;mumiyyətlə keyfiyyətlidir və avtomobillərin d&uuml;zg&uuml;n işləməsini həm&ccedil;inin
              uzun &ouml;m&uuml;rl&uuml; olmasını təmin edir. Bununla belə, ehtiyat hissələrinin keyfiyyəti istehsal&ccedil;ının
              keyfiyyətindən, istehsal prosesindən və materiallarından asılı olaraq dəyişə bilər. Buna g&ouml;rə də,
              orijinal Opel ehtiyat hissələrinin se&ccedil;ilməsi avtomobilin performansını və təhl&uuml;kəsizliyini
              qorumaq &uuml;&ccedil;&uuml;n ən yaxşı se&ccedil;imdir.
            </p>
            <p>&nbsp;</p>
            <h2>Orijinal Opel ehtiyat hissəsini necə m&uuml;əyyən etmək olar?</h2>
            <p>Orijinal Opel ehtiyat hissələrini aşağıdakı x&uuml;susiyyətlərə g&ouml;rə ayırd etmək olar:</p>
            <ul>
              <li>
                <strong> Brend:</strong> Orijinal ehtiyat hissələri Opel loqosu və ya markası ilə qeyd edilməlidir.
              </li>
              <li>
                <strong> İstehsal n&ouml;mrəsi:</strong> Orijinal ehtiyat hissələri Opel tərəfindən verilmiş istehsal
                n&ouml;mrəsinə malik olmalıdır.
              </li>
              <li>
                <strong> Keyfiyyət standartları:</strong> Orijinal ehtiyat hissələri Opel tərəfindən m&uuml;əyyən
                edilmiş keyfiyyət standartlarına uyğun olmalıdır.
              </li>
              <li>
                <strong> İstehsal yeri:</strong> Orijinal ehtiyat hissələri Opel və ya səlahiyyətli istehsal&ccedil;ılar
                tərəfindən istehsal edilməlidir.
              </li>
            </ul>
            <p>
              Orijinal Opel ehtiyat hissələrini rəsmi Opel səlahiyyətli servislərindən və ya Opel səlahiyyətli
              dilerlərindən əldə edə bilərsiniz. Bu hissələr avtomobilin performansını və təhl&uuml;kəsizliyini qorumaq,
              d&uuml;zg&uuml;n işləməsini və uzun&ouml;m&uuml;rl&uuml;l&uuml;y&uuml;n&uuml; təmin etmək &uuml;&ccedil;&uuml;n
              ən yaxşı se&ccedil;imdir.
            </p>
            <p>&nbsp;</p>
            <h2>Opel ehtiyat hissələri bahadırmı?</h2>
            <p>
              Opel ehtiyat hissələrinin qiyməti n&ouml;v&uuml;ndən, keyfiyyətindən, istehsal yerindən və bazar
              şəraitindən asılı olaraq dəyişə bilər. Bəzi Opel ehtiyat hissələri digər markaların ehtiyat hissələri ilə
              m&uuml;qayisədə daha ucuz, bəziləri isə daha bahalı ola bilər. Bununla belə orijinal Opel ehtiyat
              hissələrinin qiyməti baha olsa da avtomobilin performansını və təhl&uuml;kəsizliyini qorumaq &uuml;&ccedil;&uuml;n
              ən yaxşı se&ccedil;imdir. Buna g&ouml;rə də Opel ehtiyat hissələrinin baha və ya ucuz olması ehtiyat
              hissəsinin n&ouml;v&uuml;ndən, keyfiyyətindən və istehsal yerindən asılı olaraq dəyişə bilər.
            </p>
            <p>&nbsp;</p>
            <h2>Opel avtomobillərinin əsas problemləri və ehtiyat hissələri</h2>
            <p>
              Opel avtomobillərinin əsas problemləri və ehtiyat hissələri avtomobilin modelindən və istehsal ilindən
              asılı olaraq fərqlənə bilər. Ancaq &uuml;mumi problemlərə aşağıdakıları aid etmək olar:
            </p>
            <ul>
              <li>
                <strong> Elektrik sistemindəki problemlər:</strong> Opel avtomobillərinin elektrik sistemindəki
                problemlər tez-tez nasazlıqlara səbəb ola bilər. Bu problemlərə işıqlandırma sistemi, daimi yanıb-s&ouml;nməsi
                və ya işləməməsi daxil ola bilər.
              </li>
              <li>
                <strong> Akkumulyator problemləri:</strong> Opel avtomobillərinin batareyaları tez-tez enerji itkisi
                səbəbindən nasazlıqların səbəbi ola bilər. Bu problemlər bu və ya digər səbəblərdən elektrik
                sistemindəki nasazlıqlar nəticəsində ortaya &ccedil;ıxa bilər.
              </li>
              <li>
                <strong> Balans problemləri:</strong> Opel avtomobillərinin balans sistemi tez-tez nasazlıqların
                səbəbi ola bilər. Bu problemlərə həmin avadanlığın zəifləməsi, titrəməsi (vibrasiya) və ya səs-k&uuml;y&uuml;
                kimi problemlər daxil ola bilər.
              </li>
              <li>
                <strong> Kondisioner sistemindəki problemlər:</strong> Opel avtomobillərinin kondisioner sistemi
                tez-tez nasazlıqların səbəbi ola bilər. Bu problemlərə kondisioner kompressorunun işləməməsi, soyutma
                performansının azalması kimi problemlər aid ola bilər.
              </li>
            </ul>
            <p>
              Opel avtomobili &uuml;&ccedil;&uuml;n bu və buna bənzər problemləri həll etməyə k&ouml;mək olacaq, lazım
              olan ehtiyat hissələri m&ouml;vcuddur. Orijinal Opel ehtiyat hissələrinin istifadəsi məhsuldarlığın və
              təhl&uuml;kəsizliyin qorunub saxlanmasını təmin edir və daha uzun m&uuml;ddət işləməsinə zəmanət
              verir.
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
      title: 'Opel ehtiyat hissələri | Onlayn mağaza | Otobaza',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Orijinal ehtiyat hissələrini Otobaza saytından və ya Opel servis mərkəzlərindən əldə edə bilərsiniz.'
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
