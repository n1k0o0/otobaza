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
              <strong>İnsanlar niyə daha &ccedil;ox Citroen avtomobillərinə &uuml;st&uuml;nl&uuml;k verirlər?</strong>
            </h1>
            <p>
              <strong>Citroen avtomobilləri</strong> unikal və maraqlı dizaynları ilə tanınır və bir &ccedil;ox
              insanlar onun fərqli g&ouml;r&uuml;n&uuml;ş&uuml;n&uuml; sevirlər. <strong>Citroen</strong> <strong>avtomobilləri</strong>
              istifadəni asanlaşdıran bir &ccedil;ox funksional x&uuml;susiyyətlər təklif edir. Məsələn, geniş baqaj
              yeri, rahat və uzun yolda səyahət &uuml;&ccedil;&uuml;n b&uuml;t&uuml;n lazımi avadanlıqlar <strong>Citroen</strong>
              <strong>avtomobillərində </strong>m&ouml;vcuddur. Həm&ccedil;inin <strong>Citroen</strong> <strong>avtomobilləri </strong>y&uuml;ksək
              performanslı m&uuml;hərrik variantları və manevr qabiliyyəti ilə tanınır. Bununla yanaşı,
              <strong>Citroen</strong> <strong>avtomobilləri</strong> digər l&uuml;ks brendlərə nisbətən daha sərfəli
              qiymətə təklif edilir.
            </p>
            <p>
              Brend imici isə insanların avtomobil alarkən se&ccedil;imlərini <strong>Citroen</strong> <strong>avtomobili </strong>&uuml;zərindən
              etmələrinə təsir g&ouml;stərir.
            </p>
            <p>&nbsp;</p>
            <h2><strong>Citroen ehtiyat hissələri keyfiyyətlidir?</strong></h2>
            <p>
              <strong>Citroen ehtiyat hissələrinin</strong> keyfiyyəti sizin <strong>orijinal Citroen ehtiyat</strong>
              <strong>hissələri </strong>istifadə edib etməməyinizdən asılıdır. <strong>Orijinal Citroen ehtiyat
                hissələri</strong> Citroen tərəfindən istehsal edilmiş və sınaqdan ke&ccedil;irilmiş ehtiyat
              hissələridir və onlar avtomobillərin performansını və təhl&uuml;kəsizliyini qoruyan və zəmanət altında
              olan ehtiyat hissələridir. <strong>Citroen ehtiyat hissələrinin</strong> keyfiyyəti istehsal&ccedil;ının
              keyfiyyət standartlarından və materiallarından asılıdır. &Uuml;mumiyyətlə, <strong>orijinal</strong>
              <strong>Citroen ehtiyat hissələri</strong> y&uuml;ksək keyfiyyətli materiallardan istifadə edir və d&uuml;zg&uuml;n
              dizayn edilir ki, bu da avtomobillərinizin məhsuldarlığını və təhl&uuml;kəsizliyini qoruyur. Lakin bazarda
              bəzi keyfiyyətsiz və <strong>saxta ehtiyat hissələrinə</strong> də rast gəlmək olar, ona g&ouml;rə də
              onların d&uuml;zg&uuml;n se&ccedil;ilməsi vacibdir. <strong>Orijinal Citroen ehtiyat</strong> <strong>hissələrini</strong>
              rəsmi Citroen dilerindən və ya etibarlı <strong>avtomobil hissələri</strong> dilerindən almaq t&ouml;vsiyə
              olunur.
            </p>
            <p>&nbsp;</p>
            <h2><strong>Orijinal Citroen ehtiyat hissəsini necə təyin etmək olar?</strong></h2>
            <p>
              <strong>Orijinal Citroen ehtiyat hissəsini</strong> m&uuml;əyyən etmək &uuml;&ccedil;&uuml;n <strong>avtomobil
                ehtiyat hissəsi</strong> alarkən d&uuml;zg&uuml;n araşdırmaq, məhsulu yaxşı incələmək lazımdır. <strong>Orijinal
                Citroen ehtiyat hissələri</strong> istehsal&ccedil;ının loqosu ilə istehsal edilir. Həm&ccedil;inin
              <strong>orijinal ehtiyat hissələri</strong> istehsal&ccedil;ı tərəfindən m&uuml;əyyən edilmiş istehsal n&ouml;mrəsinə
              malikdir. <strong>Orijinal</strong> <strong>Citroen ehtiyat hissələri</strong> istehsal&ccedil;ının rəsmi
              qablaşdırma materiallarından istifadə edilməklə qablaşdırılır ki, bu da <strong>avtomobil ehtiyat
                hissəsi </strong>alarkən məhsulun orijinal olub-olmadığını anlamaqda k&ouml;mək edir. <strong>Orijinal
                Citroen</strong> <strong>ehtiyat hissələri</strong> y&uuml;ksək keyfiyyətli materiallardan istifadə
              etməklə istehsal olunur və bu <strong>avtomobil ehtiyat hissələri</strong> diler və ya etibarlı <strong>avtomobil
                hissələri</strong> satışşını edən mağazalar tərəfindən satılır.
            </p>
            <p>&nbsp;</p>
            <h2><strong>Citroen ehtiyat hissələri bahalıdırmı?</strong></h2>
            <p>
              <strong>Citroen ehtiyat hissələrinin</strong> qiyməti bazarda n&ouml;v&uuml;, modeli, x&uuml;susiyyətləri
              və qiymət dinamikasına g&ouml;rə dəyişə bilər. Bəzi <strong>Citroen ehtiyat hissələrinin</strong> qiyməti
              m&uuml;nasib, digərləri isə daha baha ola bilər. &Uuml;mumiyyətlə, <strong>orijinal Citroen ehtiyat
                hissələri</strong> daha bahalı ola bilər və avtomobillər &uuml;&ccedil;&uuml;n daha keyfiyyətli
              hissələri təmin edə bilər, lakin əlverişli alternativ hissələri də tapmaq olar. Ucuz qiymətə keyfiyyətsiz
              və <strong>saxta ehtiyat hissələri</strong> də var, lakin onlar avtomobillərinizin performansını və təhl&uuml;kəsizliyini
              təhl&uuml;kə altına ata bilər. Ona g&ouml;rə də sərfəli qiymətə keyfiyyətli və <strong>orijinal ehtiyat
                hissələrinə</strong> &uuml;st&uuml;nl&uuml;k vermək t&ouml;vsiyə olunur.
            </p>
            <p>&nbsp;</p>
            <h2><strong>Citroen avtomobillərinin əsas problemləri nələrdir?</strong></h2>
            <p>
              <strong>Citroen avtomobillərinin problemləri</strong> modeldən və istehsal ilindən asılı olaraq dəyişə
              bilər. Bununla belə <strong>Citroen avtomobillərində </strong>bəzən elektrik sistemi ilə bağlı problem
              yarana bilər. Bu problem avtomobilin işıqlandırma sistemi, suspensiya sistemi və ya digər elektron
              komponentlə bağlı ola bilər. <strong>Citroen avtomobillərinin problemləri</strong> sırasında yağ, antifriz
              kimi mayelər arasındakı problemlər də var ki, bu da avtomobilin işinə və ya m&uuml;hərrikin &ouml;mr&uuml;nə
              təsir edə bilər. Əyləc diskləri, əyləc yastıqları və ya əyləc mayesi kimi qəza dayandırma sisteminin
              komponentlərindəki problemlər də <strong>Citroen avtomobillərinin problemləri </strong>siyahısında yer
              alır. Bu problemlər &ccedil;ox vaxt avtomobilin k&ouml;hnəlməsi, həddindən artıq istifadə və ya
              baxımsızlıq nəticəsində yaranır. Bununla belə, <strong>Citroen avtomobillərinin problemlərinin </strong>bir
              &ccedil;oxunun qarşısını almaq və ya erkən aşkarlamaq &uuml;&ccedil;&uuml;n avtomobilə davamlı olaraq
              texniki xidmət g&ouml;stərmək və təmir etmək vacibdir.
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
      title: 'Citroen ehtiyat hissələri | Onlayn mağaza | Otobaza',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Orijinal ehtiyat hissələrini Otobaza saytından və ya  Citroen servis mərkəzlərindən əldə edə bilərsiniz.'
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
