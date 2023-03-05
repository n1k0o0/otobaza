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
            <h1>İnsanlar niyə Jaguar avtomobillərinə daha &ccedil;ox &uuml;st&uuml;nl&uuml;k verirlər?</h1>
            <p>
              Jaguar avtomobillərinin bir &ccedil;ox insan tərəfindən se&ccedil;ilməsinə səbəb olan bir ne&ccedil;ə
              amil var:
            </p>
            <ul>
              <li>
                <strong> Dizayn:</strong> Jaguar avtomobilləri m&uuml;asir və idman &uuml;slublu dizaynı ilə cəlbedici
                və prestijli g&ouml;r&uuml;n&uuml;r.
              </li>
              <li>
                <strong> Performans:</strong> Jaguar avtomobilləri rahat s&uuml;rmə təcr&uuml;bəsini təmin edən g&uuml;cl&uuml;
                eyni zamanda s&uuml;rətli m&uuml;hərrikləri və texnologiyaları ilə məşhurdur.
              </li>
              <li>
                <strong> Keyfiyyət:</strong> Jaguar avtomobilləri keyfiyyətli materiallardan istifadə edilməklə
                hazırlanır və yaxşı texniki xidmət g&ouml;stərildikdə uzun &ouml;m&uuml;rl&uuml; olurlar.
              </li>
              <li>
                <strong> Prestij:</strong> Jaguar b&uuml;t&uuml;n d&uuml;nyada prestijli brend hesab olunur və
                Jaguar-a sahib olmaq bir &ccedil;ox insanlar &uuml;&ccedil;&uuml;n status simvolu kimi qəbul edilir.
              </li>
              <li>
                <strong> Texnologiya:</strong> Jaguar, s&uuml;r&uuml;c&uuml;l&uuml;k təcr&uuml;bəsini daha z&ouml;vql&uuml;
                və komfortlu edən həm&ccedil;inin ən son texnologiyanı təqdim edən avtomobilləri ilə tanınır.
              </li>
            </ul>
            <p>
              Bu amillər Jaguar avtomobillərinə &uuml;st&uuml;nl&uuml;k verə bilər və bir &ccedil;ox insanın Jaguar
              avtomobillərini se&ccedil;məsinə k&ouml;mək edə bilər.
            </p>
            <p><strong>&nbsp;</strong></p>
            <h2>Jaguar ehtiyat hissələri keyfiyyətlidirmi?</h2>
            <p>
              Jaguar, orijinal ehtiyat hissələri ilə tanınan bir markadır və &uuml;mumiyyətlə y&uuml;ksək keyfiyyət
              standartlarına riayət edir. Orijinal ehtiyat hissələri avtomobilin orijinal performansını və keyfiyyətini
              qorumaq &uuml;&ccedil;&uuml;n nəzərdə tutulmuşdur. Bununla belə, ehtiyat hissələrinin keyfiyyəti həmişə y&uuml;ksək
              olmaya bilər və m&uuml;ştərilərə Jaguar ehtiyat hissələrinin keyfiyyətini yoxlamaq &uuml;&ccedil;&uuml;n m&uuml;xtəlif
              mənbələrdən araşdırma aparmaları t&ouml;vsiyə olunur.
            </p>
            <p>&nbsp;</p>
            <h2>Orijinal Jaguar ehtiyat hissəsini necə m&uuml;əyyən etmək olar?</h2>
            <p>Orijinal Jaguar ehtiyat hissələri aşağıdakılarla m&uuml;əyyən edilə bilər:</p>
            <ul>
              <li>
                <strong>Marka və Model:</strong> Orijinal ehtiyat hissələri avtomobilin markası və modeli &uuml;&ccedil;&uuml;n
                x&uuml;susi olaraq dizayn edilmiş və uyğunlaşdırılmışdır.
              </li>
              <li>
                <strong> İstehsal&ccedil;ı:</strong> Jaguar tərəfindən istehsal edilmiş və ya təsdiq edilmiş orijinal
                ehtiyat hissələri.
              </li>
              <li>
                <strong> Seriya n&ouml;mrəsi:</strong> Orijinal ehtiyat hissələri seriya n&ouml;mrələri ilə m&uuml;əyyən
                edilə bilər.
              </li>
              <li><strong> Loqo ilə:</strong> Orijinal ehtiyat hissələrində Jaguar loqosu qeyd olunur.</li>
              <li>
                <strong> Zəmanət:</strong> Orijinal ehtiyat hissələrinə adətən zəmanət verilir və istehsal&ccedil;ı
                tərəfindən dəstəklənir.
              </li>
            </ul>
            <p>
              Yuxarıda qeyd edilən bu identifikatorlar Jaguar avtomobili &uuml;&ccedil;&uuml;n orijinal ehtiyat
              hissələrini m&uuml;əyyən etməyə k&ouml;mək edə bilər həm&ccedil;inin avtomobilin d&uuml;zg&uuml;n və təhl&uuml;kəsiz
              şəkildə işləməsini təmin etmək &uuml;&ccedil;&uuml;n orijinal hissələrdən istifadə etməyin vacibliyini
              vurğulaya bilər.
            </p>
            <p>&nbsp;</p>
            <h2>Jaguar ehtiyat hissələri bahadırmı?</h2>
            <p>
              Jaguar ehtiyat hissələri, digər premium brendlərin ehtiyat hissələri kimi, orta qiymətdən baha ola bilər.
              Bunun səbəbi, orijinal ehtiyat hissələrinin avtomobilin performansını və təhl&uuml;kəsizliyini qorumaqla y&uuml;ksək
              keyfiyyət standartlarına cavab vermək &uuml;&ccedil;&uuml;n dizayn və istehsal edilməsidir. Bununla belə,
              qiymətlər ehtiyat hissəsinin n&ouml;v&uuml;nə, modelinə və tarixinə g&ouml;rə dəyişə bilər və m&uuml;xtəlif
              mənbələrdən araşdırmalar etmək sizə ən uyğun qiyməti tapmağa k&ouml;mək edə bilər.
            </p>
            <p>&nbsp;</p>
            <h2>Jaguar avtomobillərinin əsas problemləri və ehtiyat hissələri</h2>
            <p>Jaguar avtomobilləri ilə bağlı tez-tez bildirilən bəzi problemlər bunlar ola bilər:</p>
            <ul>
              <li>
                <strong> Elektron problemlər:</strong> Jaguar avtomobillərinin elektron sistemləri zamanla
                nasazlıqlara və problemlərə səbəb ola bilər.
              </li>
              <li>
                <strong> Mexaniki problemlər:</strong> Jaguar avtomobillərinin mexaniki avadanlığı zamanla xarab və
                nasazlıqlara səbəb ola bilər.
              </li>
              <li>
                <strong> Baxım və Təmir Xərcləri:</strong> Jaguar avtomobillərinin y&uuml;ksək performansı və
                keyfiyyəti texniki xidmət və təmir xərclərini artıra bilər.
              </li>
            </ul>
            <p>
              Orijinal Jaguar ehtiyat hissələri avtomobilin rahat və təhl&uuml;kəsiz işləməsini təmin etmək &uuml;&ccedil;&uuml;n
              istifadə olunur. Bununla belə, ehtiyat hissələrinin keyfiyyəti həmişə y&uuml;ksək olmaya bilər və m&uuml;ştərilərə
              ehtiyat hissələrinin keyfiyyətini yoxlamaq &uuml;&ccedil;&uuml;n m&uuml;xtəlif mənbələrdən araşdırma
              aparmaları t&ouml;vsiyə olunur.
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
      title: 'Jaguar ehtiyat hissələri | Onlayn mağaza | Otobaza',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Orijinal ehtiyat hissələrini Otobaza saytından və ya Jaguar servis mərkəzlərindən əldə edə bilərsiniz.'
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
