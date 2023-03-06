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
            <h1>
              <strong>İnsanlar niyə Lifan avtomobillərinə daha &ccedil;ox &uuml;st&uuml;nl&uuml;k verirlər?</strong>
            </h1>
            <p>
              <strong>Lifan avtomobilləri</strong> m&uuml;xtəlif seqmentə xitab edir. Bu səbəbdən də avtomobil alarkən
              se&ccedil;imlərini <strong>Lifan</strong> <strong>avtomobilləri</strong> &uuml;zərində edənlərin sayı
              &ccedil;oxluq təşkil edir. Bəs insanların bu markaya maraqlı olmalarının digər səbəbləri nədir?
            </p>
            <p>
              Lifan avtomobilləri oxşar sinifdə olan digər markalarla m&uuml;qayisədə sərfəli se&ccedil;im hesab
              olunur. Bununla yanaşı Lifan avtomobillərinə &uuml;st&uuml;nl&uuml;k verən əsas səbəblər kimi g&ouml;stərmək
              olar. Bununla belə, hər kəsin &uuml;st&uuml;nl&uuml;kləri fərqlidir və Lifan avtomobillərini se&ccedil;məyin
              səbəbləri şəxsi istəklərdən, ehtiyaclardan və g&ouml;zləntilərdən asılıdır.
            </p>
            <p>&nbsp;</p>
            <h2><strong>Lifan ehtiyat hissələri keyfiyyətlidirmi?</strong></h2>
            <p>
              Lifan ehtiyat hissələrinin keyfiyyəti nəqliyyat vasitələrinin texniki g&ouml;stəricilərini və
              performansını qoruyan, və onların tələblərinə cavab verməsilə &ouml;l&ccedil;&uuml;l&uuml;r. Bununla belə,
              hər bir ehtiyat hissəsinin keyfiyyəti və performansı istehsal prosesində keyfiyyətə nəzarət
              proseslərindən, materiallardan və onun necə hazırlanmasından eyni zamanda yığılmasından yəni
              quraşdırılmasından asılıdır. Buna g&ouml;rə də Lifan ehtiyat hissələrinin keyfiyyəti və performansı hər
              bir hissənin x&uuml;susiyyətlərindən və avtomobil &uuml;&ccedil;&uuml;n uyğunluğundan asılı olaraq dəyişə
              bilər
            </p>
            <p>&nbsp;</p>
            <h2><strong>Orijinal Lifan ehtiyat hissəsini necə m&uuml;əyyən etmək olar?</strong></h2>
            <p>Orijinal Lifan ehtiyat hissələrini aşağıdakı x&uuml;susiyyətlərə g&ouml;rə ayırd etmək olar:</p>
            <ul>
              <li>
                <strong> Brend:</strong> Orijinal ehtiyat hissələri Lifan loqosu və ya markası ilə qeyd edilməlidir.
              </li>
              <li>
                <strong> İstehsal n&ouml;mrəsi:</strong> Orijinal ehtiyat hissələri Lifan tərəfindən verilmiş istehsal
                n&ouml;mrəsinə malik olmalıdır.
              </li>
              <li>
                <strong> Keyfiyyət standartları:</strong> Orijinal ehtiyat hissələri Lifan tərəfindən m&uuml;əyyən
                edilmiş keyfiyyət standartlarına uyğun olmalıdır.
              </li>
            </ul>
            <p>
              Orijinal Lifan ehtiyat hissələrini rəsmi Otobazadan və ya &nbsp;Lifan səlahiyyətli servislərindən əldə
              edə bilərsiniz. Bu hissələr avtomobilin performansını və təhl&uuml;kəsizliyini qorumaq, d&uuml;zg&uuml;n
              işləməsini və uzun&ouml;m&uuml;rl&uuml;l&uuml;y&uuml;n&uuml; təmin etmək &uuml;&ccedil;&uuml;n ən yaxşı se&ccedil;imdir.
            </p>
            <p>&nbsp;</p>
            <h2><strong>Lifan ehtiyat hissələri bahadır?</strong></h2>
            <p>
              Lifan ehtiyat hissələrinin qiyməti ehtiyat hissəsinin n&ouml;v&uuml;ndən, modelindən, istehsal&ccedil;ının
              qiymət siyasətindən və təchizat&ccedil;ının qiymətlərindən asılı olaraq dəyişə bilər. Orijinal Lifan
              ehtiyat hissələri &ccedil;ox vaxt daha y&uuml;ksək qiymətə malik olmur, lakin onlar y&uuml;ksək keyfiyyətə
              və avotomobilə uyumlu şəkildə işləməyə zəmanət verirlər. Alternativ və ya daha sərfəli Lancia ehtiyat
              hissələri də ola bilər, lakin bu hissələr keyfiyyətsiz ola bilər. Buna g&ouml;rə də, ehtiyat hissələrinin
              qiymətlərindən əmin olmaq və ən yaxşı variantı m&uuml;əyyən etmək &uuml;&ccedil;&uuml;n səlahiyyətli
              Otobazaya m&uuml;raciət edə bilərsiniz.
            </p>
            <p>&nbsp;</p>
            <h2><strong>Lifan avtomobillərinin əsas problemləri və ehtiyat hissələri?</strong></h2>
            <p>
              <strong>Lifan avtomobilləri</strong> &uuml;mumiyyətlə keyfiyyətli və etibarlı avtomobillər hesab olunur.
              Bununla belə, bu, hər avtomobil modelinə və istehsal ilinə aid olmaya bilər və m&uuml;əyyən bir modellə
              bağlı problemlər yarana bilər. Məsələn, bəzi Lifan modellərində elektrik sistemi, m&uuml;hərrik və
              transmissiya kimi sistemlərlə bağlı problemlər qeydə alınmışdır.
            </p>
            <p>
              <strong>Lifan ehtiyat hissələri</strong> &uuml;mumiyyətlə orijinal avadanlıq keyfiyyətində və adekvat
              material keyfiyyətində istehsal olunur. Bununla belə, bazardakı digər alternativ <strong>ehtiyat
                hissələri</strong> ilə m&uuml;qayisədə daha bahalı ola bilər.
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
      title: 'Lifan ehtiyat hissələri | Onlayn mağaza | Otobaza',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Orijinal ehtiyat hissələrini Otobaza saytından və ya Lifan servis mərkəzlərindən əldə edə bilərsiniz.'
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
