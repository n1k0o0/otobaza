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
              <strong>İnsanlar niyə Mitsubishi avtomobillərinə daha &ccedil;ox &uuml;st&uuml;nl&uuml;k
                verirlər?</strong>
            </h1>
            <p>
              <strong>Mitsubishi </strong><strong>avtomobilləri</strong> keyfiyyətli və etibarlı performansı, yaxşı
              qiymət-performans nisbəti, geniş model &ccedil;eşidi və texnoloji cəhətdən inkişaf etmiş x&uuml;susiyyətlərinə
              g&ouml;rə insanların <strong>Mitsubishi </strong><strong>avtomobillərinə</strong> &uuml;st&uuml;nl&uuml;k
              verirlər. Bundan əlavə, <strong>Mitsubishi </strong><strong>avtomobilləri </strong>dizaynı, etibarlılığı
              və ucuzluğu ilə tanınır. <strong>Mitsubishi </strong><strong>avtomobillərinə</strong> &uuml;st&uuml;nl&uuml;k
              verilməsinin əsas səbəbləri qeyd etdiyimiz n&uuml;anslardır.
            </p>
            <p><strong>&nbsp;</strong></p>
            <h2><strong>Mitsubishi ehtiyat hissələri keyfiyyətlidir?</strong></h2>
            <p>
              <strong>Mitsubishi </strong><strong>ehtiyat hissələrinin</strong> keyfiyyətinə və məhsuldarlığına zəmanət
              vermək &uuml;&ccedil;&uuml;n ciddi nəzarət prosesi tətbiq edir. <strong>Mitsubishinin </strong><strong>orijinal
                ehtiyat hissələri</strong> avtomobillərin əvvəlki g&ouml;stəriciləri ilə bərabər və ya daha yaxşı
              performans g&ouml;stərmək &uuml;&ccedil;&uuml;n nəzərdə tutulmuşdur. Bununla belə, <strong>ehtiyat
                hissələrinin</strong> qiyməti və keyfiyyəti hissənin istehsal&ccedil;ısı və modelindən asılı olaraq
              dəyişə bilər. Ona g&ouml;rə də m&uuml;mk&uuml;n olan ən <strong>keyfiyyətli avtomobil ehtiyat
                hissələrini</strong> se&ccedil;mək t&ouml;vsiyə olunur.
            </p>
            <p>&nbsp;</p>
            <h2><strong>Orijinal Mitsubishi ehtiyat hissəsini necə m&uuml;əyyən etmək olar?</strong></h2>
            <p>
              <strong>Orijinal Mitsubishi ehtiyat hissələri</strong> <strong>Mitsubishi </strong>tərəfindən istehsal
              edilmiş və <strong>Mitsubishi </strong>tərəfindən təsdiqlənmiş ehtiyat hissələridir.
              <strong>Mitsubishi </strong><strong>markasının orijinal ehtiyat hissələri </strong>avtomobilləriniz &uuml;&ccedil;&uuml;n
              ən yaxşı performansı və təhl&uuml;kəsizliyi təmin etmək &uuml;&ccedil;&uuml;n dizayn edilmiş və sınaqdan
              ke&ccedil;irilmişdir. Bu <strong>avtomobil ehtiyat hissələri</strong> avtomobillərinizin standartlarına
              uyğun istehsal olunur və <strong>Mitsubishi </strong>tərəfindən təsdiq edilir. <strong>Orijinal</strong>
              <strong>Mitsubishi </strong><strong>ehtiyat</strong> <strong>hissələrinin</strong> markası, məsələn,
              <strong>Mitsubishi </strong>loqosu, model n&ouml;mrəsi və ya partiya n&ouml;mrəsi ola bilər. <strong>Mitsubishi </strong><strong>ehtiyat</strong>
              <strong>hissələrini</strong> tapmaq &uuml;&ccedil;&uuml;n ən yaxşı yer sizə ən yaxın
              <strong>Mitsubishi </strong>dileridir. Rəsmi <strong>Mitsubishi </strong>dileri və servislərindən
              aldığınız <strong>ehtiyat hissələr</strong> <strong>orijinal </strong><strong>Mitsubishi </strong><strong>ehtiyat
                hissələri</strong> olacaqdır.
            </p>
            <p>&nbsp;</p>
            <h2><strong>Mitsubishi ehtiyat hissələri bahadır?</strong></h2>
            <p>
              <strong>Mitsubishi </strong><strong>ehtiyat hissələrinin</strong> qiymətləri modeldən,
              <strong>avtomobil</strong> <strong>ehtiyat</strong> <strong>hissələrinin</strong> x&uuml;susiyyətindən və
              bazardakı rəqabətdən asılı olaraq dəyişə bilər. Bəzi <strong>Mitsubishi </strong><strong>ehtiyat
                hissələri</strong> m&uuml;nasib qiymətə, digərləri isə daha bahalı ola bilər. Həm&ccedil;inin<strong>,
                orijinal </strong><strong>Mitsubishi </strong><strong>ehtiyat hissələri</strong> &ccedil;ox vaxt daha
              bahalı ola bilər, lakin bu <strong>avtomobil ehtiyat hissələri </strong>daha y&uuml;ksək keyfiyyət və
              uyğunluq təklif edir. <strong>Orijinal </strong><strong>Mitsubishi </strong><strong>ehtiyat
                hissəsini</strong> m&uuml;əyyən etmək &uuml;&ccedil;&uuml;n
              <strong>orijinal </strong><strong>Mitsubishi </strong><strong>hissələrinin</strong>
              <strong>Mitsubishi </strong>tərəfindən istehsal edildiyi və təsdiqləndiyinə dair sənədləri yoxlamaq t&ouml;vsiyə
              olunur.
            </p>
            <p>&nbsp;</p>
            <h2>Mitsubishi avtomobillərinin əsas problemləri və ehtiyat hissələri</h2>
            <p><strong>Mitsubishi avtomobilləri</strong> ilə bağlı bəzi &uuml;mumi problemlər bunlar ola bilər:</p>
            <ul>
              <li>
                Elektronika problemləri: <strong>Mitsubishi avtomobillərində</strong> bir &ccedil;ox elektron sistem
                var və bu sistemlərdən bəziləri nasaz ola bilər.
              </li>
              <li>
                Su yığılması: <strong>Mitsubishi avtomobillərində</strong> suyun yığılması problemləri var və bu, hava
                axını sistemləri və ya su ke&ccedil;irməzliyi ilə bağlı ola bilər.
              </li>
              <li>
                Təkərin boşalması: <strong>Mitsubishi avtomobillərində</strong> təkər boşalması &uuml;mumi problemdir
                və təkərlərin dəyişdirilməsini tələb edə bilər.
              </li>
              <li>
                Elektrik problemləri: <strong>Mitsubishi avtomobillərinin</strong> elektrik sistemləri nasaz ola
                bilər, bu da avtomobillərin d&uuml;zg&uuml;n işləməməsinə səbəb ola bilər.
              </li>
            </ul>
            <p>
              Bu və buna bənzər problemlərin həlli &uuml;&ccedil;&uuml;n <strong>orijinal</strong> <strong>Mitsubishi
                ehtiyat hissələri</strong> ən yaxşı se&ccedil;imdir. <strong>Orijinal</strong> <strong>Mitsubishi
                ehtiyat</strong> <strong>hissələri</strong> avtomobillərin performansını və uzun&ouml;m&uuml;rl&uuml;l&uuml;y&uuml;n&uuml;
              qorumaq &uuml;&ccedil;&uuml;n ən yaxşı se&ccedil;imdir. Bununla belə, aşağı keyfiyyətli ehtiyat
              hissələrinin istifadəsi avtomobilin performansını azalda və nəticədə daha qısa xidmət m&uuml;ddəti ilə
              nəticələnə bilər.
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
