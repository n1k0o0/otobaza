5.vue
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
            <h1>İnsanlar niyə FAW avtomobillərinə daha &ccedil;ox &uuml;st&uuml;nl&uuml;k verirlər?</h1>
            <p>
              FAW markalı avtomobillər qiymət/performans nisbəti, davamlılıq, komfort və təhl&uuml;kəsizlik x&uuml;susiyyətləri
              kimi amillərə g&ouml;rə populyar ola bilər. Bundan əlavə, FAW-ın istehsal texnologiyası və m&uuml;həndislik
              tətbiqləri də onlara &uuml;st&uuml;nl&uuml;k verməyə k&ouml;mək edə bilər. Daha sonra FAW-ın qlobal
              paylama şəbəkəsi və m&uuml;ştəri dəstəyi xidmətləri də insanlara FAW markalı avtomobilləri se&ccedil;məyə
              k&ouml;mək edə bilər. Bununla belə, hər kəsin se&ccedil;imləri fərqlidir və FAW markalı avtomobillərin se&ccedil;imi
              şəxsi &uuml;st&uuml;nl&uuml;klərə, ehtiyaclara və b&uuml;dcələrə g&ouml;rə dəyişə bilər.
            </p>
            <p>&nbsp;</p>
            <h2>FAW ehtiyat hissələri keyfiyyətlidirmi?</h2>
            <p>
              FAW ehtiyat hissələrinin keyfiyyəti istehsal standartlarından, materialın keyfiyyətindən və istehsal
              prosesindən asılı olaraq dəyişə bilər. Adətən, orijinal ehtiyat hissələri avtomobil istehsal&ccedil;ısının
              x&uuml;susi keyfiyyət standartlarına uyğun istehsal olunur və avtomobilin performansını və təhl&uuml;kəsizliyini
              qorumaq &uuml;&ccedil;&uuml;n nəzərdə tutulub. Alternativ ehtiyat hissələri daha ucuz qiymətə ola bilər,
              lakin keyfiyyət və performans baxımından orijinal hissələrdən daha aşağı olma ehtimalı da y&uuml;ksəkdir.
              İlk n&ouml;vbədə, avtomobil sahibinin orijinal ehtiyat hissələrinə &uuml;st&uuml;nl&uuml;k verməsi və
              avtomobilin performansını qorumaq &uuml;&ccedil;&uuml;n diqqətli olması t&ouml;vsiyə olunur.
            </p>
            <p>&nbsp;</p>
            <h2>Orijinal FAW ehtiyat hissəsini necə m&uuml;əyyən etmək olar?</h2>
            <p>
              Orijinal FAW ehtiyat hissələri avtomobil istehsal&ccedil;ısı tərəfindən m&uuml;əyyən keyfiyyət
              standartına uyğun istehsal olunur və avtomobilin performansını və təhl&uuml;kəsizliyini qorumaq &uuml;&ccedil;&uuml;n
              nəzərdə tutulub. Orijinal FAW ehtiyat hissələri aşağıdakı yollarla m&uuml;əyyən edilə bilər:
            </p>
            <ul>
              <li>
                <strong> Avtomobil İstehsal&ccedil;ısı:</strong> Orijinal FAW ehtiyat hissələrini FAW avtomobil
                istehsal&ccedil;ısından rəsmi distribyutor və ya diler kanalı vasitəsilə əldə etmək olar.
              </li>
              <li>
                <strong> İstehsal&ccedil;ının Lot n&ouml;mrəsi:</strong> Orijinal FAW ehtiyat hissələri istehsal&ccedil;ı
                tərəfindən verilmiş lot n&ouml;mrəsi ilə m&uuml;əyyən edilə bilər.
              </li>
              <li>
                <strong> İstehsal&ccedil;ı Loqosu:</strong> Orijinal FAW ehtiyat hissələrində istehsal&ccedil;ı
                tərəfindən tətbiq olunan loqo ola bilər.
              </li>
            </ul>
            <p>
              Avtomobil sahibi orijinal FAW ehtiyat hissələrini m&uuml;əyyən etmək &uuml;&ccedil;&uuml;n bu yollardan
              istifadə edə bilər və avtomobilin performansını və təhl&uuml;kəsizliyini qorumaq &uuml;&ccedil;&uuml;n
              orijinal FAW ehtiyat hissələri se&ccedil;məlidir. Alternativ FAW ehtiyat hissələrinin istifadəsi
              problemlərin həllində faydalı olsa da, avtomobil &uuml;&ccedil;&uuml;n uyğun olmaya bilər və daha qısa m&uuml;ddətdə
              nasazlıqların təkrar baş verməsinə səbəb ola bilər.
            </p>
            <p>&nbsp;</p>
            <h2>FAW ehtiyat hissələri bahadırmı?</h2>
            <p>
              FAW ehtiyat hissələrinin qiymətləri istehsal xərcləri, materialın keyfiyyəti, istehsal prosesi və
              avtomobil modelindən asılı olaraq dəyişə bilər. Orijinal FAW ehtiyat hissələri &ccedil;ox vaxt daha bahalı
              ola bilər, lakin daha y&uuml;ksək keyfiyyətlə istehsal olunur, &ccedil;&uuml;nki onlar avtomobilin
              performansını və təhl&uuml;kəsizliyini qorumaq &uuml;&ccedil;&uuml;n nəzərdə tutulub. Alternativ FAW
              ehtiyat hissələri &uuml;&ccedil;&uuml;n daha ucuz qiymətlər təklif edilə bilər, lakin keyfiyyət və
              performans baxımından orijinal hissələrdən aşağı olma ehtimalını da nəzərə almaq lazımdır. Avtomobilin
              performansını və təhl&uuml;kəsizliyini qorumaq &uuml;&ccedil;&uuml;n avtomobil sahibinə orijinal FAW
              ehtiyat hissələrini se&ccedil;məsi t&ouml;vsiyə olunur.
            </p>
            <p>&nbsp;</p>
            <h2>FAW avtomobillərinin əsas problemləri və ehtiyat hissələri?</h2>
            <p>
              FAW avtomobillərinin əsas problemləri və ehtiyat hissələri avtomobilin modelindən, istehsal ilindən,
              istifadə &uuml;sulundan və bir &ccedil;ox digər amillərdən asılı olaraq dəyişə bilər. Lakin &uuml;mumilikdə,
              FAW avtomobilləri ilə bağlı &uuml;mumi problemlər bunlara aid ola bilər:
            </p>
            <ul>
              <li>
                <strong> Elektrik problemləri:</strong> Elektrik sistemindəki problemlər avtomobilin i&ccedil;ərisində
                olan avadanlığın funksionallığına təsir g&ouml;stərə bilər.
              </li>
              <li>
                <strong> Emissiya problemləri:</strong> Emissiya sistemindəki problemlər avtomobilin ətraf m&uuml;hitə
                buraxdığı zərərli tullantıların miqdarını artıra bilər.
              </li>
              <li>
                <strong> Transmissiya problemləri:</strong> Transmissiya problemləri avtomobilin d&uuml;zg&uuml;n
                hərəkətinə mane ola bilər.
              </li>
              <li>
                <strong> Əyləc problemləri:</strong> Əyləc sistemindəki problemlər avtomobilin əyləcinin təhl&uuml;kəsiz
                və doğru şəkildə işləməməsinə təsir edə bilər.
              </li>
            </ul>
            <p>
              FAW ehtiyat hissələri bu və buna bənzər problemləri həll etmək &uuml;&ccedil;&uuml;n lazım olan ehtiyat
              hissələrini təklif edə bilər. Orijinal FAW ehtiyat hissələri avtomobil istehsal&ccedil;ısı tərəfindən m&uuml;əyyən
              keyfiyyət standartlarına uyğun istehsal olunur və avtomobilin performansını və təhl&uuml;kəsizliyini
              qorumaq &uuml;&ccedil;&uuml;n nəzərdə tutulub. Alternativ ehtiyat hissələri daha ucuz qiymətlər təklif edə
              bilər, lakin keyfiyyət və performans baxımından orijinal hissələrdən aşağı olma ehtimalı da var.
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
      title: 'FAW ehtiyat hissələri | Onlayn mağaza | Otobaza',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Orijinal ehtiyat hissələrini Otobaza saytından və ya FAW servis mərkəzlərindən əldə edə bilərsiniz.'
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
