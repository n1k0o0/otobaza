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
              <strong>İnsanlar niyə daha &ccedil;ox BMW avtomobillərinə &uuml;st&uuml;nl&uuml;k verirlər?</strong>
            </h1>
            <p>
              <strong>BMW avtomobilləri</strong> y&uuml;ksək performans, y&uuml;ksək keyfiyyətli materiallar, g&uuml;cl&uuml;
              və &ccedil;evik m&uuml;hərrik, unikal dizayn və texnoloji x&uuml;susiyyətlər kimi bir &ccedil;ox amillərə
              g&ouml;rə avtomobil həvəskarları tərəfindən se&ccedil;ilir. &Ccedil;&uuml;nki <strong>BMW
                avtomobilləri </strong>y&uuml;ksək məhsuldar m&uuml;hərrikləri, dəbli dizaynı və qabaqcıl texnologiyası
              ilə tanınır. Bundan əlavə, &ldquo;BMW&rdquo;nin brend imici, m&uuml;kəmməl m&uuml;ştəri xidməti və g&uuml;cl&uuml;
              tarixi də insanlarda BMW avtomobillərinə maraq artırır. BMW həm&ccedil;inin s&uuml;r&uuml;c&uuml;l&uuml;k
              təcr&uuml;bəsini optimallaşdırmaq &uuml;&ccedil;&uuml;n y&uuml;ksək texnologiyalı təhl&uuml;kəsizlik x&uuml;susiyyətləri
              təklif edir ki, bu da insanların <strong>BMW</strong> <strong>avtomobilləri</strong> se&ccedil;məsinə
              səbəb ola bilər. Sedanlardan tutmuş yolsuzluq avtomobillərinə qədər m&uuml;ştərilərə m&uuml;xtəlif se&ccedil;imlər
              təqdim etdiyi &uuml;&ccedil;&uuml;n <strong>BMW</strong> <strong>avtomobilləri </strong>avtomobil
              bazarında &ccedil;oxsaylı se&ccedil;imə sahibdir. Şirkətin davamlılıq və ekoloji məsuliyyətə sadiqliyi də
              <strong>BMW</strong> <strong>avtomobillərinin </strong>alış g&uuml;c&uuml;n&uuml; artırır.
            </p>
            <p>
              &Uuml;mumilikdə, <strong>BMW avtomobilləri</strong> avtomobil alıcılarını cəlb etməyə və &ldquo;BMW&rdquo;ni
              &uuml;st&uuml;nl&uuml;k verilən brendə &ccedil;evirməyə davam edən l&uuml;ks, performans, &uuml;slub və
              texnologiyanın birləşməsini təklif edir.
            </p>
            <p>&nbsp;</p>
            <h2><strong>BMW ehtiyat hissələri keyfiyyətlidirmi?</strong></h2>
            <p>
              <strong>BMW ehtiyat hissələri</strong> y&uuml;ksək keyfiyyətli olması və m&uuml;kəmməl işləməsini təmin
              etmək &uuml;&ccedil;&uuml;n şirkət &ccedil;ox &ccedil;alışır. Belə ki, <strong>BMW ehtiyat
                hissələri</strong> avtomobillərdə istifadə olunan orijinal avadanlıq hissələri ilə eyni standartlara
              cavab vermək &uuml;&ccedil;&uuml;n istehsal olunur. <strong>BMW ehtiyat hissələrinin </strong>&ccedil;oxluğu
              onların asanlıqla əldə edilməsini və dəyişdirilməsini, avtomobillərin daim yolda olmasını təmin etmək
              deməkdir. <strong>Orijinal BMW ehtiyat hissələri</strong> avtomobillərin performansını və uzun&ouml;m&uuml;rl&uuml;l&uuml;y&uuml;n&uuml;
              qorumaq &uuml;&ccedil;&uuml;n ən yaxşı se&ccedil;imdir. Bununla belə, aşağı keyfiyyətli ehtiyat
              hissələrinin istifadəsi avtomobilin performansını azalda və nəticədə nəqliyyat vasitəsinin istismar m&uuml;ddətinin
              azalması ilə nəticələnə bilər. Əgər <strong>avtomobil ehtiyat hissəsi</strong> alacaqsınızsa,<strong>
                orijinal BMW ehtiyat hissələri </strong>həmişə &uuml;st&uuml;nl&uuml;k verdiyiniz hissələr olmalıdır.
              Unutmayın ki, zədələnmiş hissəni təmir etmək və ya sadəcə k&ouml;hnəlmiş komponenti dəyişdirmək istəsəniz,
              <strong>BMW ehtiyat hissələri</strong> etibarlı və sərfəli həll yoludur.
            </p>
            <p>&nbsp;</p>
            <h2><strong>Orijinal BMW ehtiyat hissəsini necə m&uuml;əyyən etmək olar?</strong></h2>
            <p>
              <strong>Orijinal BMW ehtiyat hissələri </strong>BMW tərəfindən istehsal olunan və BMW loqosu ilə
              işarələnmiş hissələrdir. Bundan əlavə, <strong>orijinal BMW ehtiyat hissələri </strong>m&uuml;əyyən BMW
              keyfiyyət standartlarına uyğun olmalıdır və avtomobilin zəmanət şərtlərinə uyğun olaraq sınaqdan ke&ccedil;irilir.
            </p>
            <p>
              <strong>Orijinal ehtiyat hissələrini </strong>BMW servis mərkəzlərindən və ya <strong>BMW ehtiyat
                hissələri</strong> dilerlərindən əldə edə bilərsiniz. Həm&ccedil;inin orijinal ehtiyat hissələrinin seriya
              n&ouml;mrəsi və ya kodu ola bilər ki, bu da orijinal hissənin yoxlanılmasını asanlaşdırır.
            </p>
            <p>&nbsp;</p>
            <h2><strong>BMW ehtiyat hissələri bahalıdırmı?</strong></h2>
            <p>
              <strong>Orijinal BMW ehtiyat hissələri</strong> &uuml;mumiyyətlə digər <strong>avtomobil ehtiyat
                hissələri</strong> ilə m&uuml;qayisədə daha bahalıdır. Bununla belə, bu əlavə xərc y&uuml;ksək keyfiyyəti,
              uzun&ouml;m&uuml;rl&uuml;l&uuml;y&uuml; və avtomobilin performansını qoruduğu &uuml;&ccedil;&uuml;n
              avtomobil həvəskarlarına g&ouml;rə y&uuml;ksək məbləğ ciddi narahatlıq yaratmır. Orijinal olmayan <strong>ehtiyat
                hissələri</strong> <strong>orijinal</strong> <strong>BMW ehtiyat hissələri </strong>ilə m&uuml;qayisədə
              daha ucuz ola bilər, lakin keyfiyyət və uzun&ouml;m&uuml;rl&uuml;l&uuml;klə bağlı qeyri-m&uuml;əyyənliyə
              səbəb ola bilər. Qiyməti <strong>orijinal olmayan avtomobil ehtiyat hissələr </strong>ilə m&uuml;qayisədə
              baha olsa da, <strong>orijinal BMW ehtiyat hissələrinə</strong> &uuml;st&uuml;nl&uuml;k verilməlidir,
              &ccedil;&uuml;nki onlar avtomobilin performansı və zəmanət şərtlərinə uyğun işləyəcək.
            </p>
            <p>&nbsp;</p>
            <p><strong>BMW avtomobillərinin əsas problemləri və ehtiyat hissələri</strong></p>
            <p><strong>BMW avtomobilləri</strong> ilə bağlı bəzi &uuml;mumi problemlər bunlar ola bilər:</p>
            <ul>
              <li>
                Elektronika problemləri: <strong>BMW</strong> <strong>avtomobillərində</strong> bir &ccedil;ox
                elektron sistem var və bu sistemlərdən bəziləri nasaz ola bilər.
              </li>
              <li>
                Su yığılması: <strong>BMW avtomobillərində</strong> suyun yığılması problemləri var və bu, hava axını
                sistemləri və ya su ke&ccedil;irməzliyi ilə bağlı ola bilər.
              </li>
              <li>
                Təkərin boşalması: <strong>BMW</strong> <strong>avtomobillərində</strong> təkər boşalması &uuml;mumi
                problemdir və təkərlərin dəyişdirilməsini tələb edə bilər.
              </li>
              <li>
                Elektrik problemləri: <strong>BMW</strong> <strong>avtomobillərinin</strong> elektrik sistemləri nasaz
                ola bilər, bu da avtomobillərin d&uuml;zg&uuml;n işləməməsinə səbəb ola bilər.
              </li>
            </ul>
            <p>
              Bu və buna bənzər problemlərin həlli &uuml;&ccedil;&uuml;n <strong>orijinal</strong> <strong>BMW ehtiyat
                hissələri</strong> ən yaxşı se&ccedil;imdir. <strong>Orijinal</strong> <strong>BMW ehtiyat</strong>
              <strong>hissələri</strong> avtomobillərin performansını və uzun&ouml;m&uuml;rl&uuml;l&uuml;y&uuml;n&uuml;
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
