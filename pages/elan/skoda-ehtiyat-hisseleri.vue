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
              <strong>İnsanlar niyə daha &ccedil;ox Skoda avtomobillərinə &uuml;st&uuml;nl&uuml;k verirlər?</strong>
            </h1>
            <p>
              <strong>Skoda</strong> <strong>avtomobilləri</strong> istehlak&ccedil;ıların ehtiyacları nəzərə alınmaqla
              bazara yaxşı uyğun gələn x&uuml;susiyyətlər və spesifikasiyalar təklif etməklə hazırlanmışdır. İnsanlar
              avtomobil alarkən se&ccedil;imi <strong>Skoda avtomobilləri</strong> &uuml;zərindən etməklərinə səbəb
              brendin qiymət/performans nisbəti, etibarlı dizayn, yaxşı m&uuml;ştəri xidməti və geniş &ccedil;eşidli
              modellərə g&ouml;rə bəyənir və &uuml;st&uuml;n tuturlar. <strong>Skoda avtomobilləri</strong> həm də
              yanacaq səmərəliliyi nəzərə alınmaqla dizayn edilmişdir, əla yanacaq qənaəti və aşağı emissiya təklif
              edir. Təhl&uuml;kəsiz, səmərəli və ya sadəcə olaraq ən son texnologiya ilə dolu avtomobil axtarırsınızsa,
              <strong>Skoda avtomobili</strong> hər kəs &uuml;&ccedil;&uuml;n nəsə təklif edən əla se&ccedil;imdir.
            </p>
            <p>&nbsp;</p>
            <h2><strong>Skoda ehtiyat hissələri keyfiyyətlidirmi?</strong></h2>
            <p>
              Skoda daim &ouml;z <strong>ehtiyat hissələrinin</strong> keyfiyyətini qorumaq &uuml;&ccedil;&uuml;n və
              <strong>orijinal ehtiyat hissələrinin</strong> keyfiyyətini və uyğunluğunu təmin etməyə &ccedil;alışır.
              Bununla belə, <strong>ehtiyat hissələrin</strong> keyfiyyəti və qiyməti arasındakı tarazlıq modeldən
              modelə, b&ouml;lgədən b&ouml;lgəyə və satıcıdan satıcıya dəyişə bilər. İlk n&ouml;vbədə, <strong>orijinal
                Skoda</strong> <strong>ehtiyat hissələri</strong> istifadə zamanı avtomobilin performansı və təhl&uuml;kəsizliyini
              qoruyacaq. Bununla belə, daha sərfəli alternativ <strong>ehtiyat hissələri</strong> də ola bilər.
              Avtomobil sahibləri tərəfindən onların keyfiyyəti və uyğunluğu haqqında rəyləri araşdırmaq faydalı ola
              bilər.
            </p>
            <p>&nbsp;</p>
            <h2>Orijinal Skoda ehtiyat hissəsini necə m&uuml;əyyən etmək olar?</h2>
            <p>
              Orijinal Skoda ehtiyat hissələri brendin rəsmi kanalları tərəfindən istehsal edilən və satılan
              hissələrdir. Orijinal Skoda ehtiyat hissələrini m&uuml;əyyən etmək &uuml;&ccedil;&uuml;n markanın
              səlahiyyətli dilerləri və ya servis mərkəzləri ilə əlaqə saxlaya bilərsiniz. Həm&ccedil;inin, ehtiyat
              hissələrinin qablaşdırmasında və ya ehtiyat hissəsinin &ouml;z&uuml;ndə orijinal Skoda loqosu və ya marka
              məlumatı ola bilər. Orijinal ehtiyat hissələrini tapmaqda &ccedil;ətinlik &ccedil;əkirsinizsə, Otobazaya m&uuml;raciət
              edə bilərsiniz.
            </p>
            <p>&nbsp;</p>
            <h2><strong>Skoda ehtiyat hissələri bahadırmı?</strong></h2>
            <p>
              <strong>Skoda ehtiyat hissələrinin</strong> qiymətləri digər premium brendlərin <strong>ehtiyat
                hissələrin </strong>ilə eyni və ya bir qədər y&uuml;ksək ola bilər. Bununla belə, avtomobilin
              səmərəliliyini və təhl&uuml;kəsizliyini qorumaq &uuml;&ccedil;&uuml;n ehtiyat hissələrinin keyfiyyətinə və
              performansına zəmanət verilir ki, bu da uzun m&uuml;ddətdə daha ucuz ola bilər. Həm&ccedil;inin, orijinal
              <strong>Skoda ehtiyat hissələri</strong> digər alternativ ehtiyat hissələri ilə m&uuml;qayisədə daha uzun
              &ouml;m&uuml;rl&uuml; ola bilər və avtomobilin performansını qoruyan daha təhl&uuml;kəsiz se&ccedil;im
              təqdim edir.
            </p>
            <p>&nbsp;</p>
            <h2>Skoda avtomobillərinin əsas problemləri və ehtiyat hissələri?</h2>
            <p>
              Skoda avtomobillərinin əsas problemləri və ehtiyat hissələri haqqında dəqiq məlumat əldə etmək nisbətən
              &ccedil;ətindir. &Ccedil;&uuml;nki bunlar avtomobilinizin modeli və istehsal tarixi kimi amillərdən asılı
              olaraq dəyişə bilər. Orijinal ehtiyat hissələrini m&uuml;əyyən etmək &uuml;&ccedil;&uuml;n avtomobil
              istehsal&ccedil;ısından və ya rəsmi dilerlərdən məlumat ala bilərsiniz. Ehtiyat hissələrinin baha
              olub-olmaması avtomobilin modelindən, ehtiyat hissəsinin keyfiyyətindən və qiymət siyasətindən
              asılıdır.
            </p>
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
