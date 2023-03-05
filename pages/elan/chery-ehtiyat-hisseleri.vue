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
            <h1>İnsanlar niyə Chery avtomobillərinə daha &ccedil;ox &uuml;st&uuml;nl&uuml;k verirlər?</h1>
            <p>
              Chery avtomobillərinin se&ccedil;iminə bir &ccedil;ox amillər təsir edə bilər. Onların arasında; sərfəli
              qiymət, yaxşı performans, yaxşı m&uuml;ştəri xidməti, unikal dizayn və texnoloji x&uuml;susiyyətlər kimi
              &ouml;zəlliklərə rast gəlmək olar. Bununla belə, hər bir kəsin avtomobil se&ccedil;imi onun şəxsi &uuml;st&uuml;nl&uuml;kləri
              və ehtiyaclarından asılıdır və Chery avtomobillərinin digər markalarla m&uuml;qayisədə fərqli &uuml;st&uuml;nl&uuml;kləri
              ola bilər. Chery avtomobillərinin se&ccedil;ilməsinin dəqiq səbəbini yalnız bazar araşdırması, onlayn
              rəylər və test s&uuml;r&uuml;şləri kimi amillər nəzərə alınmaqla m&uuml;əyyən etmək olar.
            </p>
            <p>&nbsp;</p>
            <h2>Chery ehtiyat hissələri keyfiyyətlidir?</h2>
            <p>
              Chery ehtiyat hissələrinin keyfiyyəti brendin istehsal standartlarından və keyfiyyətə nəzarət
              proseslərindən asılıdır. Bununla belə, ehtiyat hissələrinin keyfiyyəti istehsal xərcləri, tədar&uuml;k
              zənciri və bazar şərtləri kimi digər amillərdən də asılıdır. Bundan əlavə, Chery ehtiyat hissələrinin
              keyfiyyəti də orijinal və ya &uuml;&ccedil;&uuml;nc&uuml; tərəf ehtiyat hissələri kimi təsvir edilə bilən
              alternativ variantlarla m&uuml;qayisədə fərqli ola bilər. Chery avtomobiliniz &uuml;&ccedil;&uuml;n x&uuml;susi
              ehtiyat hissələrinə ehtiyacınız varsa, markanın səlahiyyətli dilerləri və ya servis mərkəzləri ilə əlaqə
              saxlaya bilərsiniz.
            </p>
            <p>&nbsp;</p>
            <h2>Orijinal Chery ehtiyat hissəsini necə m&uuml;əyyən etmək olar?</h2>
            <p>
              Orijinal Chery ehtiyat hissələri brendin rəsmi kanalları tərəfindən istehsal edilən və satılan
              hissələrdir. Bunlar avtomobil istehsal&ccedil;ısı tərəfindən m&uuml;əyyən edilmiş keyfiyyət standartlarına
              uyğun olmaq və avtomobilin d&uuml;zg&uuml;n işləməsini təmin etmək &uuml;&ccedil;&uuml;n hazırlanmış və
              istehsal edilmişdir. Orijinal Chery ehtiyat hissələrini m&uuml;əyyən etmək &uuml;&ccedil;&uuml;n markanın
              səlahiyyətli dilerləri və ya servis mərkəzləri ilə əlaqə saxlaya bilərsiniz. Həm&ccedil;inin, ehtiyat
              hissələrinin qablaşdırmasında və ya ehtiyat hissəsinin &ouml;z&uuml;ndə orijinal Chery loqosu və ya marka
              məlumatı ola bilər. Orijinal ehtiyat hissələrini tapmaqda &ccedil;ətinlik &ccedil;əkirsinizsə, markanın
              rəsmi saytına və ya m&uuml;ştəri xidmətlərinə m&uuml;raciət edə bilərsiniz.
            </p>
            <p>&nbsp;</p>
            <h2>Chery ehtiyat hissələri bahadırmı?</h2>
            <p>
              Chery ehtiyat hissələrinin qiymətləri hissənin n&ouml;v&uuml;ndən, &ouml;l&ccedil;&uuml;s&uuml;ndən,
              keyfiyyətindən və bazar şərtlərindən asılıdır. Həm&ccedil;inin, orijinal Chery ehtiyat hissələrinin
              qiymətləri &uuml;&ccedil;&uuml;nc&uuml; tərəfin ehtiyat hissələrinə nisbətən daha y&uuml;ksək ola bilər.
              Bununla belə, ehtiyat hissələrinin qiymətləri dəyişə bilər və bir &ccedil;ox amillərdən təsirlənə bilər,
              buna g&ouml;rə də ən uyğun qiyməti tapmaq &uuml;&ccedil;&uuml;n qiymətləri m&uuml;qayisə edə bilərsiniz.
              Chery ehtiyat hissələri haqqında konkret qiymət məlumatına ehtiyacınız varsa, markanın səlahiyyətli
              dilerləri və ya servis mərkəzləri ilə əlaqə saxlaya bilərsiniz.
            </p>
            <p>&nbsp;</p>
            <h2>Chery avtomobillərinin əsas problemləri və ehtiyat hissələri</h2>
            <p>
              Chery avtomobilləri ilə bağlı əsas problemlər &ccedil;ox vaxt geniş şəkildə fərqlənə bilər &ccedil;&uuml;nki
              bu avtomobilin modelindən, istehsal tarixindən və istifadəsindən asılıdır. Bununla belə, avtomobil
              sahiblərinin şikayət etdiyi bəzi &uuml;mumi problemlər elektrik sistemi, transmissiya, əyləc sistemi,
              yanacaq sistemi, enerji bloku və ya avtomobilin dinamikası ola bilər.
            </p>
            <p>
              Orijinal Chery ehtiyat hissələri brendin rəsmi kanalları tərəfindən istehsal edilən və satılan ehtiyat
              hissələrdir. Orijinal ehtiyat hissələri avtomobilin d&uuml;zg&uuml;n işləməsi &uuml;&ccedil;&uuml;n
              nəzərdə tutulmuş və istehsal edilmişdir. Bununla belə, &uuml;&ccedil;&uuml;nc&uuml; tərəf ehtiyat
              hissələri də m&ouml;vcuddur və daha sərfəli ola bilər. Chery ehtiyat hissələri ilə bağlı konkret
              probleminiz və ya tələbiniz varsa, markanın səlahiyyətli dilerləri və ya servis mərkəzləri ilə əlaqə
              saxlaya bilərsiniz.
            </p>
            <p>&nbsp;</p>
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
      title: 'Chery ehtiyat hissələri | Onlayn mağaza | Otobaza',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Orijinal ehtiyat hissələrini Otobaza saytından və ya Chery servis mərkəzlərindən əldə edə bilərsiniz.'
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
