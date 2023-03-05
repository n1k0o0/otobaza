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
            <h1>İnsanlar niyə daha &ccedil;ox QAZ avtomobillərinə &uuml;st&uuml;nl&uuml;k verirlər?</h1>
            <p>
              QAZ avtomobilləri m&uuml;nasib qiymət, yaxşı performans və etibarlılıq kimi x&uuml;susiyyətləri ilə
              &uuml;mumiyyətlə &uuml;st&uuml;nl&uuml;k verilən markadır. O, yerli bazarın tələblərinə uyğun dizayn və
              istehsal olunduğu &uuml;&ccedil;&uuml;n &ouml;lkədəki m&uuml;ştərilər &uuml;&ccedil;&uuml;n də əlverişli
              variant ola bilər. QAZ avtomobillərinə &uuml;st&uuml;nl&uuml;k verilməsinin səbəbləri m&uuml;xtəlif
              insanlar &uuml;&ccedil;&uuml;n fərqli ola bilər.
            </p>
            <p>&nbsp;</p>
            <h2>QAZ ehtiyat hissələri keyfiyyətlidirmi?</h2>
            <p>
              QAZ ehtiyat hissələrinin keyfiyyəti QAZ-ın istehsal və keyfiyyətə nəzarət standartlarından asılıdır.
              &Uuml;mumiyyətlə, QAZ ehtiyat hissələri nəqliyyat vasitələrinin texniki g&ouml;stəricilərini və
              performansını qoruyan, və onların tələblərinə cavab verən ehtiyat hissələridir. Bununla belə, hər bir
              ehtiyat hissəsinin keyfiyyəti və performansı istehsal prosesində keyfiyyətə nəzarət proseslərindən,
              materiallardan və onun necə hazırlanmasından eyni zamanda yığılmasından yəni quraşdırılmasından asılıdır.
              Buna g&ouml;rə də QAZ ehtiyat hissələrinin keyfiyyəti və performansı hər bir hissənin x&uuml;susiyyətlərindən
              və avtomobil &uuml;&ccedil;&uuml;n uyğunluğundan asılı olaraq dəyişə bilər.
            </p>
            <p>&nbsp;</p>
            <h2>Orijinal QAZ ehtiyat hissəsini necə m&uuml;əyyən etmək olar?</h2>
            <p>
              Orijinal QAZ ehtiyat hissələri QAZ tərəfindən istehsal olunan və avtomobillər &uuml;&ccedil;&uuml;n
              nəzərdə tutulmuş ehtiyat hissələridir. Orijinal QAZ ehtiyat hissələrini m&uuml;əyyən etmək &uuml;&ccedil;&uuml;n
              aşağıdakı &uuml;sullardan istifadə edilə bilər:
            </p>
            <ul>
              <li>
                <strong> QAZ loqosu və ya markası:</strong> Orijinal QAZ ehtiyat hissələri QAZ loqosu və ya markası
                ilə m&uuml;əyyən edilə bilər.
              </li>
              <li>
                <strong> İstehsal kodları:</strong> Orijinal QAZ ehtiyat hissələri istehsal kodları və ya n&ouml;mrələrlə
                m&uuml;əyyən edilə bilər.
              </li>
              <li>
                <strong> İstehsal tarixi və ya seriya n&ouml;mrəsi:</strong> Orijinal QAZ ehtiyat hissələri istehsal
                tarixi və ya seriya n&ouml;mrəsi ilə m&uuml;əyyən edilə bilər.
              </li>
              <li>
                <strong> Rəsmi QAZ distribyutorları</strong>: Orijinal QAZ ehtiyat hissələrini rəsmi QAZ
                distribyutorlarından əldə etmək olar.
              </li>
            </ul>
            <p>
              Bu identifikasiyalar orijinal QAZ ehtiyat hissələrini m&uuml;əyyən etmək &uuml;&ccedil;&uuml;n faydalı
              ola biləcək x&uuml;susiyyətlərdir. Avtomobilin performansını və təhl&uuml;kəsizliyini artırmaq &uuml;&ccedil;&uuml;n
              orijinal ehtiyat hissələri olduqca vacibdir.
            </p>
            <p>&nbsp;</p>
            <h2>QAZ ehtiyat hissələri bahadırmı?</h2>
            <p>
              QAZ ehtiyat hissələrinin qiyməti ehtiyat hissəsinin n&ouml;v&uuml;ndən, onun məhsuldarlığından,
              materialından, istehsal prosesindən və digər amillərdən asılıdır. Bəzi QAZ ehtiyat hissələri ucuz ola
              bilər, lakin digər ehtiyat hissələri daha bahalı ola bilər. Eyni zamanda, ehtiyat hissələrinin qiyməti
              &ouml;lkədən &ouml;lkəyə və satıcıdan satıcıya dəyişə bilər. QAZ ehtiyat hissələrinin baha və ya ucuz
              olması hər bir hissənin x&uuml;susiyyətlərindən və avtomobilə uyğunluğundan asılı olaraq dəyişə bilər.
            </p>
            <p>&nbsp;</p>
            <h2>QAZ avtomobillərinin əsas problemləri və ehtiyat hissələri</h2>
            <p>
              &Uuml;mumilikdə QAZ avtomobilləri b&uuml;t&uuml;n nəqliyyat vasitələri kimi zamanla texniki xidmətə və
              təmirə ehtiyac duyur. QAZ avtomobilləri ilə bağlı əsas problemlər zəif performans, enerji itkisi, soyutma
              problemləri, enerji təchizatı və ya elektrik sistemindəki problemlər ola bilər. QAZ ehtiyat hissələri bu
              problemləri aradan qaldırmaq &uuml;&ccedil;&uuml;n istehsal edilir. QAZ ehtiyat hissələrinin &ccedil;eşidləri
              orijinal QAZ ehtiyat hissələrindən tutmuş ucuz və alternativ digər ehtiyat hissələrinə qədər dəyişə
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
      title: 'QAZ ehtiyat hissələri | Onlayn mağaza | Otobaza',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Orijinal ehtiyat hissələrini Otobaza saytından və ya QAZ servis mərkəzlərindən əldə edə bilərsiniz.'
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
