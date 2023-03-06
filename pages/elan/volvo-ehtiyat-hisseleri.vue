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
            <h1>İnsanlar niyə daha &ccedil;ox Volvo avtomobillərinə &uuml;st&uuml;nl&uuml;k verirlər?</h1>
            <p>
              Volvo avtomobilləri keyfiyyətinə, etibarlılığına, əla performansına və y&uuml;ksək təhl&uuml;kəsizlik x&uuml;susiyyətlərinə
              g&ouml;rə insanlar tərəfindən tez-tez &uuml;st&uuml;nl&uuml;k təşkil edir. Bundan əlavə, avtomobilin
              salonu istifadə&ccedil;i &uuml;&ccedil;&uuml;n əlverişlidir, &ccedil;&uuml;nki Volvo rahat və komfortlu s&uuml;r&uuml;c&uuml;l&uuml;k
              təcr&uuml;bəsi təmin etmək &uuml;&ccedil;&uuml;n nəzərdə tutulub. Volvo həm də ekoloji cəhətdən təmiz və
              enerjiyə qənaət edən m&uuml;hərrikləri ilə se&ccedil;ilir. Volvo avtomobillərinə həm də qabaqcıl texnoloji
              x&uuml;susiyyətlərə malik olduqları və d&ouml;vr&uuml;n tələblərinə cavab verdiyi &uuml;&ccedil;&uuml;n
              &uuml;st&uuml;nl&uuml;k verilir.
            </p>
            <p>&nbsp;</p>
            <h2>Volvo ehtiyat hissələri keyfiyyətlidirmi?</h2>
            <p>
              Volvo ehtiyat hissələri orijinal keyfiyyətdə istehsal olunur və avtomobilinizin performansını və təhl&uuml;kəsizliyini
              ən y&uuml;ksək səviyyədə qoruyan məhsullardır. Daim ehtiyat hissələrini sınaqdan ke&ccedil;irmək və
              yeniləməklə Volvo, avtomobilinizin g&ouml;zlənilən performans və təhl&uuml;kəsizliyi təmin etmək &uuml;&ccedil;&uuml;n
              &ccedil;alışır. Bununla belə, orijinal Volvo ehtiyat hissələri digər alternativ ehtiyat hissələri ilə m&uuml;qayisədə
              daha bahalı olsa da,&nbsp; orijinal Volvo ehtiyat hissələri daha uzun &ouml;m&uuml;r və daha y&uuml;ksək
              keyfiyyətə malik olurlar. Avtomobilinizin zəmanəti və təhl&uuml;kəsizliyi &uuml;&ccedil;&uuml;n orijinal
              ehtiyat hissələrindən istifadə etmək olduqca vacibdir.
            </p>
            <p>&nbsp;</p>
            <h2>Orijinal Volvo ehtiyat hissəsini necə m&uuml;əyyən etmək olar?</h2>
            <p>
              Orijinal Volvo ehtiyat hissələri Volvo tərəfindən istehsal olunan və avtomobilləriniz &uuml;&ccedil;&uuml;n
              nəzərdə tutulmuş məhsullardır. Orijinal ehtiyat hissələri avtomobilinizin performansını, təhl&uuml;kəsizliyini
              və uzun&ouml;m&uuml;rl&uuml;l&uuml;y&uuml;n&uuml; təmin edir.
            </p>
            <p>
              Orijinal Volvo ehtiyat hissələrini m&uuml;əyyən etmək &uuml;&ccedil;&uuml;n aşağıdakı addımları yerinə
              yetirə bilərsiniz:
            </p>
            <ol>
              <li>Avtomobilinizin model n&ouml;mrəsini və tarixini m&uuml;əyyən edin.</li>
              <li>
                Avtomobiliniz &uuml;&ccedil;&uuml;n ehtiyat hissələri almaq istədiyiniz səlahiyyətli Volvo dilerinə
                gedin.
              </li>
              <li>Dilerə avtomobilinizin model n&ouml;mrəsini və tarixini təqdim edin.</li>
              <li>
                Səlahiyyətli diler avtomobilinizə uyğun olan orijinal Volvo ehtiyat hissələrini m&uuml;əyyən edəcək.
              </li>
            </ol>
            <p>
              Bu addımları yerinə yetirməklə siz orijinal Volvo ehtiyat hissələrini həm m&uuml;əyyən edə həm də əldə
              etməklə avtomobilinizin performansını və təhl&uuml;kəsizliyini qoruya bilərsiniz.
            </p>
            <p>&nbsp;</p>
            <p>&nbsp;</p>
            <h2>Volvo ehtiyat hissələri bahadırmı?</h2>
            <p>
              Orijinal Volvo ehtiyat hissələri digər markaların ehtiyat hissələrinə nisbətən baha ola bilər. Ancaq
              orijinal Volvo ehtiyat hissələrinin keyfiyyəti və performansı digər ucuz olan ehtiyat hissələrindən daha y&uuml;ksək
              olduğu &uuml;&ccedil;&uuml;n daha yaxşı se&ccedil;im sayılır. Həm&ccedil;inin, orijinal ehtiyat
              hissələrinin d&uuml;zg&uuml;n quraşdırılması və istifadəsi avtomobilinizin performansını daha uzun m&uuml;ddət
              qorumağına k&ouml;mək edə bilər.
            </p>
            <h2>Volvo avtomobillərinin əsas problemləri və ehtiyat hissələri</h2>
            <p>
              Volvo avtomobilləri &uuml;mumiyyətlə keyfiyyətli və etibarlılığı ilə tanınır. Bununla belə, hər bir
              avtomobilin &ouml;z&uuml;nə məxsus problemləri olur. Volvo avtomobillərində qarşılaşılan &uuml;mumi
              problemlər arasında aşağıdakılar yer alır:
            </p>
            <ul>
              <li>
                <strong> Elektrik sistemindəki problemlər</strong>: Bu problemlər avtomobildəki elektron
                avadanlıqların nasazlığı və ya d&uuml;zg&uuml;n işləməməsi ilə bağlı ola bilər.
              </li>
              <li>
                <strong> Su nasosu problemləri</strong>: Bu problemlər zamanla avtomobildəki su nasosunun zəifləməsi
                və ya xarab olması ilə bağlı ola bilər.
              </li>
              <li>
                <strong> Akkumulyator problemləri</strong>: Bu problemlər zamanla avtomobildəki akkumulyatorun
                zəifləməsi və ya xarab olması ilə bağlı ola bilər.
              </li>
              <li>
                <strong> Əyləc sistemindəki problemlər:</strong> Bu problemlər əyləc sistemindəki hissələrin zamanla
                xarab olması ilə bağlı ola bilər.
              </li>
            </ul>
            <p>
              Volvo avtomobillərinizin rahat və təhl&uuml;kəsiz işləməsini təmin etmək &uuml;&ccedil;&uuml;n orijinal
              Volvo ehtiyat hissələrinə &uuml;st&uuml;nl&uuml;k verilməlidir. Bununla belə, onlar bazarda m&ouml;vcud
              olan digər ehtiyat hissələrindən daha bahalı olsa da uzunm&uuml;ddətli se&ccedil;im &uuml;&ccedil;&uuml;n
              keyfiyyət, performans və təhl&uuml;kəsizlik baxımından daha sərfəli və qənaətcil se&ccedil;im sayılır.
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
      title: 'Volvo ehtiyat hissələri | Onlayn mağaza | Otobaza',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Orijinal ehtiyat hissələrini Otobaza saytından və ya Volvo servis mərkəzlərindən əldə edə bilərsiniz.'
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
