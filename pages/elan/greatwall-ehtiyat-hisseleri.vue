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
          <div v-if="ad_vip.length" class="elan_wrapper">
            <div class="elan_header">
              <h2 class="">
                {{ $t('used.vip') }}
              </h2>
              <!--     all-vip-->
            </div>
            <div class="search_results_items">
              <UsedPart
                v-for="(ad,i) in ad_vip"
                :key="i"
                :card="ad"
              />
            </div>
          </div>
          <div class="elan_header mb-0">
            <h2>{{ $t('used.last') }}</h2>
          </div>
          <UsedParts :loading="loadingResults" :search="search" />
          <div class="seo_content mt-5">
            <h1>İnsanlar niyə Great Wall avtomobillərinə daha &ccedil;ox &uuml;st&uuml;nl&uuml;k verirlər?</h1>
            <p>
              Great Wall avtomobillərinə &uuml;st&uuml;nl&uuml;k verilməsinin səbəbləri arasına bunlar daxildir: onlar
              sərfəli qiymətə malikdirlər, yaxşı qiymət-performans nisbəti m&ouml;vcuddur, funksional və rahat dizayna
              sahibdirlər, g&uuml;cl&uuml; və davamlı m&uuml;hərrikləri var, zəmanət və servis dəstəyi təklif edirlər.
              Bundan əlavə, Great Wall-ın m&uuml;xtəlif model variantları və aksesuarları da &uuml;st&uuml;nl&uuml;k
              verilmə səbəblərindən biridir. Hər bir halda, Great Wall avtomobillərinin keyfiyyəti və performansı model
              və ildən asılı olaraq dəyişə bilər və m&uuml;xtəlif istifadə&ccedil;ilərin fərqli g&ouml;zləntiləri və
              ehtiyacları ola bilər. Buna g&ouml;rə də sizə ən uyğun olanı se&ccedil;məzdən əvvəl araşdırma aparmağınız
              və Great Wall avtomobillərini sınaqdan ke&ccedil;irməyiniz t&ouml;vsiyə olunur.
            </p>
            <p>&nbsp;</p>
            <h2>Great Wall ehtiyat hissələri keyfiyyətlidirmi?</h2>
            <p>
              Great Wall ehtiyat hissələrinin keyfiyyəti istehsal&ccedil;ı tərəfindən istifadə olunan materiallardan və
              istehsal proseslərindən asılı olaraq dəyişə bilər. &Uuml;mumiyyətlə, orijinal avadanlıq istehsal&ccedil;ısı
              tərəfindən istehsal olunan ehtiyat hissələri daha y&uuml;ksək keyfiyyətə malik olurlar, lakin bu həmişə
              dəqiq deyil. Digər aşağı qiymətli ehtiyat hissələri keyfiyyət və etibarlılıq baxımından daha zəif
              performans g&ouml;stərə bilər. Həmişə orijinal avadanlıq istehsal&ccedil;ısı tərəfindən istehsal olunan
              ehtiyat hissələrinə &uuml;st&uuml;nl&uuml;k vermək və ya istehsal&ccedil;ı tərəfindən təsdiqlənmiş
              təchizat&ccedil;ılardan almaq t&ouml;vsiyə olunur.
            </p>
            <p>&nbsp;</p>
            <h2>Orijinal Great Wall ehtiyat hissəsini necə m&uuml;əyyən etmək olar?</h2>
            <p>
              Original Great Wall ehtiyat hissəsi istehsal&ccedil;ı tərəfindən təqdim edilən və zəmanət verilən ehtiyat
              hissəsidir. Orijinal ehtiyat hissələri istehsal&ccedil;ı tərəfindən təsdiqlənmiş təchizat&ccedil;ılar
              tərəfindən və ya birbaşa istehsal&ccedil;ı tərəfindən satıla bilər. Orijinal ehtiyat hissələrini m&uuml;əyyən
              etmək &uuml;&ccedil;&uuml;n istehsal&ccedil;ının loqosu, markası və ya model n&ouml;mrəsi kimi m&uuml;əyyənedici
              işarələr m&ouml;vcud olmalıdır. Bundan əlavə, orijinal Great Wall ehtiyat hissələri adətən istehsal&ccedil;ının
              zəmanəti altında təklif olunur və istehsal&ccedil;ının spesifikasiyasına uyğun olaraq istehsal olunur.
              Orijinal ehtiyat hissələrini m&uuml;əyyən etməyin ən yaxşı yolu istehsal&ccedil;ının internet saytından və
              ya onların rəsmi təchizat&ccedil;ısından məlumat əldə etmək və ya səlahiyyətli servis mərkəzi ilə əlaqə
              saxlamaqdır.
            </p>
            <p>&nbsp;</p>
            <h2>Great Wall ehtiyat hissələri bahadırmı?</h2>
            <p>
              Great Wall ehtiyat hissələrinin qiyməti m&uuml;xtəlif amillərdən asılı olaraq dəyişə bilər. Bunlara
              ehtiyat hissəsinin n&ouml;v&uuml;, keyfiyyəti, təchizat&ccedil;ı və m&ouml;vcudluğu kimi amillər daxil ola
              bilər. &Uuml;mumiyyətlə, orijinal Great Wall ehtiyat hissələri daha bahalı ola bilər, lakin bu daha y&uuml;ksək
              keyfiyyət deməkdir. Eyni zamanda ehtiyat hissələrinin m&ouml;vcudluğu, &ccedil;atdırılma m&uuml;ddəti və
              digər amillər qiymətə təsir edə bilir. Qiymətlər haqqında daha ətraflı məlumat &uuml;&ccedil;&uuml;n Great
              Wall-ın rəsmi saytından və ya onun rəsmi təchizat&ccedil;ılarından məlumat ala bilərsiniz və ya
              səlahiyyətli servis mərkəzinə m&uuml;raciət edə bilərsiniz.
            </p>
            <p>&nbsp;</p>
            <h2>Great Wall avtomobillərinin əsas problemləri və ehtiyat hissələri?</h2>
            <p>
              Great Wall avtomobillərinin əsas problemləri və ehtiyat hissələri haqqında məlumat almaq &uuml;&ccedil;&uuml;n
              səlahiyyətli servis mərkəzinə m&uuml;raciət etməyiniz və ya avtomobiliniz haqqında rəsmi mənbələrdən
              məlumat almağınız t&ouml;vsiyə olunur. Səlahiyyətli servis mərkəzi avtomobilinizdəki x&uuml;susi
              problemləri m&uuml;əyyən edə və ehtiyat hissələri barədə məsləhət verə bilər. Ehtiyat hissələri
              avtomobilinizin performansını və təhl&uuml;kəsizliyini təmin edən vacib komponentlərdir və orijinal Great
              Wall ehtiyat hissələrindən istifadə etməyiniz t&ouml;vsiyə olunur. Orijinal Great Wall ehtiyat hissələrini
              rəsmi təchizat&ccedil;ılardan və ya səlahiyyətli servis mərkəzlərindən əldə edə bilərsiniz.
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
import UsedPart from '~/components/Used/UsedPart.vue'

export default {
  name: 'Search',
  watchQuery: true,
  components: {
    UsedPart,
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
    await this.GET_HOME_ADS({})
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
      brand_key: 'Used/brand_key',
      ad_vip: 'Used/ad_vip'
    })
  },
  methods: {
    ...mapActions({
      FILTER_PARTS: 'Used/FILTER_PARTS',
      GET_PARTS: 'Used/GET_PARTS',
      GET_CATALOG_MANUFACTURERS: 'Used/GET_BRANDS',
      GET_MANUFACTURER_MODELS: 'Used/GET_MODELS',
      GET_HOME_ADS: 'Used/GET_HOME_ADS'
    }),
    scrollTop () {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  },
  head () {
    return {
      title: 'Great Wall ehtiyat hissələri | Onlayn mağaza | Otobaza',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Orijinal ehtiyat hissələrini Otobaza saytından və ya Great Wall servis mərkəzlərindən əldə edə bilərsiniz.'
        }
      ]
    }
  }
}
</script>
