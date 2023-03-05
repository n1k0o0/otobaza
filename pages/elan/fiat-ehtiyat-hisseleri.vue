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
            <h1>İnsanlar niyə FİAT avtomobillərinə daha &ccedil;ox &uuml;st&uuml;nl&uuml;k verirlər?</h1>
            <p>
              FIAT avtomobillərinə insanların &uuml;st&uuml;nl&uuml;k verməsinin bir &ccedil;ox səbəbi var. Onların
              arasında:
            </p>
            <ul>
              <li>
                <strong> Əlverişli Qiymət:</strong> FIAT avtomobilləri bir &ccedil;ox avtomobil modelləri &uuml;&ccedil;&uuml;n
                sərfəli se&ccedil;im imkanı kimi g&ouml;r&uuml;nə bilər.
              </li>
              <li>
                <strong> Yol Performansı:</strong> FIAT avtomobilləri yaxşı yol performansı təklif edə bilər və şəhər
                və şəhərdənkənar səyahətlər &uuml;&ccedil;&uuml;n uyğun nəqliyyat vasitəsi kimi dəyərləndirilə bilər.
              </li>
              <li>
                <strong> İstifadə asanlığı:</strong> FIAT avtomobilləri istifadəsi asan və istifadə&ccedil;i dostu
                avtomobil kimi də se&ccedil;ilə bilər.
              </li>
              <li>
                <strong> M&ouml;vcud Modellər:</strong> FIAT, yenilənən avtomobil modelləri ilə bazarın tələblərinə
                uyğun təklif etməyə &ccedil;alışması ilə də se&ccedil;ilir.
              </li>
              <li>
                <strong> Brend imici:</strong> FIAT keyfiyyətli və etibarlı bir marka kimi qəbul edilə bilər və
                insanlar tərəfindən dəyərləndirilə və &uuml;st&uuml;nl&uuml;k verilə bilər.
              </li>
            </ul>
            <p>
              Bu səbəblər insanların FİAT avtomobillərinə &uuml;st&uuml;nl&uuml;k vermələrinə səbəb ola bilər, lakin
              hər bir fərdin dəyərləndirmə meyarı fərqlidir və digər amilləri də nəzərə almaq lazımdır.
            </p>
            <p>&nbsp;</p>
            <h2>FIAT ehtiyat hissələri keyfiyyətlidirmi?</h2>
            <p>
              FIAT ehtiyat hissələrinin keyfiyyəti həmin ehtiyat hissənin istehsal&ccedil;ısından və keyfiyyətli
              ehtiyat hissələri satan mağazadan alınıb-alınmamasından asılıdır. Orijinal FIAT ehtiyat hissələri
              avtomobilin performansını və təhl&uuml;kəsizliyini artırmaq &uuml;&ccedil;&uuml;n dizayn edilmiş və
              sınaqdan ke&ccedil;irilmişdir. Bununla belə, ucuz və bahalı digər alternativ ehtiyat hissələrinə də rast
              gəlmək olar və bu hissələr keyfiyyətinə g&ouml;rə fərqlənir. Buna g&ouml;rə də, orijinal ehtiyat
              hissələrini se&ccedil;ən zaman avtomobilinizin uzunm&uuml;ddətli performansını və təhl&uuml;kəsizliyini
              qorumağı da nəzərə almalısınız.
            </p>
            <p>&nbsp;</p>
            <h2>Orijinal FIAT ehtiyat hissəsini necə m&uuml;əyyən etmək olar?</h2>
            <p>Orijinal FIAT ehtiyat hissəsi aşağıdakılarla m&uuml;əyyən edilə bilər:</p>
            <ul>
              <li>
                <strong> Avtomobilin VIN n&ouml;mrəsi:</strong> Avtomobilin VIN n&ouml;mrəsi avtomobilin modelini,
                istehsal tarixini və digər x&uuml;susiyyətlərini m&uuml;əyyən edən n&ouml;mrədir. Orijinal FIAT ehtiyat
                hissələri avtomobilin VIN n&ouml;mrəsi ilə m&uuml;əyyən edilə bilər.
              </li>
              <li>
                <strong> İstehsal&ccedil;ı tərəfindən təyin edilmiş hissələr:</strong> FIAT, avtomobiliniz &uuml;&ccedil;&uuml;n
                hansı ehtiyat hissələrinin orijinal olduğunu m&uuml;əyyənləşdirir və bu hissələrin siyahısını istehsal&ccedil;ının
                rəsmi saytında və ya onun dilerlərindən tapa bilərsiniz.
              </li>
              <li>
                <strong> Rəsmi Dilerlər:</strong> Rəsmi FIAT dilerləri avtomobiliniz &uuml;&ccedil;&uuml;n d&uuml;zg&uuml;n
                ehtiyat hissələrini həm&ccedil;inin orijinal FIAT ehtiyat hissələrini m&uuml;əyyən etməkdə sizə k&ouml;mək
                edə bilər.
              </li>
            </ul>
            <p>
              Bu identifikasiya yolları orijinal FIAT ehtiyat hissələrini m&uuml;əyyən etməyə və avtomobilin
              performansını və təhl&uuml;kəsizliyini təmin edəcək keyfiyyətli hissələri se&ccedil;məyə sizə k&ouml;mək
              edəcəkdir.
            </p>
            <h2>FIAT ehtiyat hissələri bahadır?</h2>
            <p>
              FIAT ehtiyat hissələrinin qiyməti hissənin n&ouml;v&uuml;ndən, modelindən, performansından və cari bazar
              qiymətlərindən asılı olaraq dəyişə bilər. Orijinal FIAT ehtiyat hissələri alternativ ehtiyat hissələrindən
              daha bahalı ola bilər, lakin onlar daha y&uuml;ksək keyfiyyət təklif edir və avtomobilin performansını və
              təhl&uuml;kəsizliyini optimallaşdırmağı hədəfləyir. Alternativ ehtiyat hissələri daha sərfəli, lakin
              keyfiyyətsiz ola bilər və avtomobilin performansına və təhl&uuml;kəsizliyinə mənfi təsir g&ouml;stərə
              bilər.
            </p>
            <p>
              Ehtiyat hissələrini ən uyğun qiymətə əldə etmək &uuml;&ccedil;&uuml;n rəsmi dilerlərə, internetdəki
              e-ticarət saytlarına və ya avtomobiliniz &uuml;&ccedil;&uuml;n ehtiyat hissələri satan digər satıcılara m&uuml;raciət
              edə bilərsiniz. Avtomobilinizin performansını və təhl&uuml;kəsizliyini qoruyacaq sərfəli ehtiyat hissələri
              tapmaq &uuml;&ccedil;&uuml;n qiymətləri m&uuml;qayisə etmək və avtomobilinizə ən uyğun olanı se&ccedil;mək
              t&ouml;vsiyə olunur.
            </p>
            <p>&nbsp;</p>
            <h2>FIAT avtomobillərinin əsas problemləri və ehtiyat hissələri?</h2>
            <p>
              FIAT avtomobillərinin problemləri m&uuml;xtəlif amillərdən asılı olaraq dəyişə bilər və hər bir FIAT
              modeli &uuml;&ccedil;&uuml;n fərqli ola bilər. Tez-tez bildirilən bəzi problemlərə aşağıdakılar daxildir;
              g&uuml;c və performans problemləri, zəif yanacaq səmərəliliyi, s&uuml;kan problemləri, elektron
              problemlər, nəqliyyat vasitəsinin təhl&uuml;kəsizliyi və nasazlıq əlamətləri və.s
            </p>
            <p>
              Orijinal FIAT ehtiyat hissələri avtomobilinizin performansını və təhl&uuml;kəsizliyini optimallaşdırmaq
              məqsədi daşıyır. Buna g&ouml;rə də avtomobilinizdə hər hansı problemlə qarşılaşdığınız zaman orijinal
              ehtiyat hissələrindən istifadə etməyiniz t&ouml;vsiyə olunur. Orijinal ehtiyat hissələrini rəsmi
              dilerlərdən, internetdəki e-ticarət saytlarından və ya avtomobiliniz &uuml;&ccedil;&uuml;n ehtiyat
              hissələri satan digər satıcılardan əldə edə bilərsiniz. Alternativ ehtiyat hissələri sərfəli qiymətə
              baxmayaraq, keyfiyyətsiz ola bilər və avtomobilinizin performansına və təhl&uuml;kəsizliyinə mənfi təsir g&ouml;stərə
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
      title: 'Fiat ehtiyat hissələri | Onlayn mağaza | Otobaza',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Orijinal ehtiyat hissələrini Otobaza saytından və ya Fiat servis mərkəzlərindən əldə edə bilərsiniz.'
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
