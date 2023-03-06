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
            <h1>İnsanlar niyə Geely avtomobillərinə daha &ccedil;ox &uuml;st&uuml;nl&uuml;k verirlər?</h1>
            <p>
              Geely avtomobillərinə daha &ccedil;ox &uuml;st&uuml;nl&uuml;k verilir, &ccedil;&uuml;nki onlar sərfəli
              qiymət, yaxşı performans və y&uuml;ksək keyfiyyət kimi amillərin birləşməsini təklif edirlər. Bundan
              əlavə, Geely qlobal brenddir və beynəlxalq bazarda geniş m&uuml;ştəri bazasına malikdir, bu da insanların
              ona &uuml;st&uuml;nl&uuml;k verməsinin səbəblərindən biridir. Geely-nin təklif etdiyi &uuml;st&uuml;nl&uuml;klərlə
              yanaşı, m&uuml;nasib qiymətlər, m&uuml;asir dizaynlar və texnoloji x&uuml;susiyyətlər də insanlara Geely
              avtomobillərini se&ccedil;məkdə k&ouml;mək edə bilər.
            </p>
            <p>&nbsp;</p>
            <h2>Geely ehtiyat hissələri keyfiyyətlidir?</h2>
            <p>
              Geely ehtiyat hissələrinin keyfiyyəti istehsal prosesindən və istifadə olunan materiallardan asılı olaraq
              dəyişə bilər. &Uuml;mumiyyətlə, Geely ehtiyat hissələrinin etibarlı və keyfiyyətli olmasını təmin etməyə
              &ccedil;alışır və avtomobilin performansını və təhl&uuml;kəsizliyini optimallaşdırmaq &uuml;&ccedil;&uuml;n
              yaxşı se&ccedil;im təklif edir. Bununla belə, hər kəsin keyfiyyət g&ouml;zləntiləri və b&uuml;dcələri
              fərqlidir, ona g&ouml;rə də Geely ehtiyat hissələrin keyfiyyətinin tam olaraq nə qədər yaxşı olduğuna dair
              &uuml;mumi m&uuml;hakimə y&uuml;r&uuml;tmək &ccedil;ətindir. Məhsulu satın almadan əvvəl d&uuml;zg&uuml;n
              mənbələrdən məlumat toplamaq və məhsulun keyfiyyəti haqqında rəyləri oxumaq t&ouml;vsiyə olunur.
            </p>
            <p>&nbsp;</p>
            <h2>Orijinal Geely ehtiyat hissəsini necə m&uuml;əyyən etmək olar?</h2>
            <p>
              Orijinal Geely ehtiyat hissələri Geely tərəfindən istehsal edilmiş və təsdiqlənmiş hissələrdir. Bu
              hissələr avtomobilin texniki x&uuml;susiyyətlərinə və performansına uyğun olaraq dizayn edilmiş və
              sınaqdan ke&ccedil;irilmişdir. Orijinal Geely ehtiyat hissələrini m&uuml;əyyən etmək &uuml;&ccedil;&uuml;n
              siz:
            </p>
            <ul>
              <li>
                <strong>Məhsulun qablaşdırılması:</strong> Orijinal Geely ehtiyat hissələri Geely loqosu və təsviri
                məlumatı olan qablaşdırmada satılır.
              </li>
              <li>
                <strong>Məhsul kodları:</strong> Orijinal Geely ehtiyat hissələri Geely tərəfindən təyin edilmiş
                məhsul kodu ilə m&uuml;əyyən edilir.
              </li>
              <li>
                <strong>İstehsal&ccedil;ının sənədləri:</strong> Orijinal Geely ehtiyat hissələri istehsal&ccedil;ı
                sertifikatı və ya zəmanət kartı ilə birlikdə satılır.
              </li>
              <li>
                <strong>Səlahiyyətli servis mərkəzi:</strong> Orijinal Geely ehtiyat hissələri səlahiyyətli Geely
                servis mərkəzlərində satılır və ya tədar&uuml;k edilir.
              </li>
            </ul>
            <p>
              Yuxarıda qeyd olunan variantlarla orijinal Geely ehtiyat hissələrini m&uuml;əyyən etmək və əldə etmək
              sizin &uuml;&ccedil;&uuml;n daha asan olacaqdır. Siz həm&ccedil;inin səlahiyyətli Geely servis mərkəzi və
              ya dilerinə m&uuml;raciət edərək orijinal ehtiyat hissələri haqqında ətraflı məlumat əldə edə
              bilərsiniz.
            </p>
            <p>&nbsp;</p>
            <h2>Geely ehtiyat hissələri bahadırmı?</h2>
            <p>
              Geely ehtiyat hissələrinin qiyməti məhsulun keyfiyyətindən, tədar&uuml;k yolu və digər amillərdən asılı
              olaraq dəyişə bilər. Bəzi Geely ehtiyat hissələri digər markalardan daha ucuz ola bilər. Qiymət həm də
              orijinallıq və ya sənaye məhsulları arasındakı fərqlərdən asılıdır. Orijinal Geely ehtiyat hissələri
              &uuml;mumiyyətlə daha bahalı ola bilər, lakin daha uzun &ouml;m&uuml;rl&uuml; olacaq həm&ccedil;inin
              avtomobilinizin təhl&uuml;kəsizliyini və performansını təmin edəcək. Digər &uuml;&ccedil;&uuml;nc&uuml;
              tərəf alternativ ehtiyat hissələri daha ucuz ola bilər, lakin paralel olaraq onların keyfiyyəti və
              performansı orijinal hissələrdən aşağı ola bilər. Ən yaxşı qiymət-performans nisbətini m&uuml;əyyən etmək
              &uuml;&ccedil;&uuml;n bir &ccedil;ox variantı araşdırmaq və səlahiyyətli Geely dilerinə və ya servis
              mərkəzinə m&uuml;raciət etmək t&ouml;vsiyə olunur.
            </p>
            <p>&nbsp;</p>
            <h2>Geely avtomobillərinin əsas problemləri və ehtiyat hissələri?</h2>
            <p>
              Geely avtomobilləri ilə bağlı əsas problemlər model və ildən asılı olaraq dəyişə bilər. &Uuml;mumiyyətlə,
              Geely avtomobilləri ilə bağlı bəzi &uuml;mumi problemlərə elektrik sistemi problemləri, əyləc sistemi
              problemləri, sərnişinin rahatlığı problemləri və m&uuml;hərrik performansı məsələləri daxil ola bilər.
              Ehtiyat hissələrinə gəldikdə isə, Geely sizə orijinal və ya sənaye məhsulları arasından se&ccedil;im
              etməyiniz &uuml;&ccedil;&uuml;n m&uuml;xtəlif alternativlər təklif edə bilər. Orijinal Geely ehtiyat
              hissələri &uuml;mumiyyətlə daha bahalı ola bilər, lakin daha uzun &ouml;m&uuml;rl&uuml; olacaq və
              avtomobilinizin təhl&uuml;kəsizliyini və performansını təmin edəcək. Digər alternativ ehtiyat hissələri
              daha ucuz olsada, onların keyfiyyəti və performansı orijinal Geely ehtiyat hissələrindən aşağı ola bilər.
              Ən yaxşı qiymət-performans nisbətini tapmaq &uuml;&ccedil;&uuml;n bir &ccedil;ox variantı araşdırmaq və
              səlahiyyətli Geely dilerinə və ya servis mərkəzinə m&uuml;raciət etməyiniz t&ouml;vsiyə olunur.
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
      title: 'Geely ehtiyat hissələri | Onlayn mağaza | Otobaza',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Orijinal ehtiyat hissələrini Otobaza saytından və ya Geely servis mərkəzlərindən əldə edə bilərsiniz.'
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
