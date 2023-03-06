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
            <h1>İnsanlar niyə daha &ccedil;ox Jeep avtomobillərinə &uuml;st&uuml;nl&uuml;k verirlər?</h1>
            <p>Jeep avtomobillərinə &uuml;st&uuml;nl&uuml;k verilməsinin bir &ccedil;ox səbəbi var:</p>
            <ul>
              <li>
                <strong> Yolsuzluq qabiliyyəti:</strong> Jeep avtomobilləri d&uuml;z yoldan kənarda dağ yolları, pal&ccedil;ıqlı
                yollar və ya qayalıq ərazilər kimi &ccedil;ətin m&uuml;hitlərdə də m&uuml;kəmməl performans sərgiləyir.
              </li>
              <li>
                <strong> Dizayn:</strong> Jeep dizayn baxımından diqqəti &ccedil;əkən və klassik g&ouml;r&uuml;n&uuml;şə
                malikdir.
              </li>
              <li>
                <strong> Brend reputasiyası:</strong> Jeep uzun illərdir m&ouml;vcud olan və &ouml;z sinfinin ən yaxşı
                avtomobilləri arasında sayılan bir marka olduğu &uuml;&ccedil;&uuml;n ona &uuml;st&uuml;nl&uuml;k
                verilir.
              </li>
              <li>
                <strong> Modellər:</strong> Jeep m&uuml;xtəlif ehtiyac və g&ouml;zləntilərə uyğun fərqli modellər
                təklif edir.
              </li>
              <li>
                <strong> Texnoloji x&uuml;susiyyətlər:</strong> Jeep avtomobilləri m&uuml;asir texnoloji x&uuml;susiyyətlər
                həm&ccedil;inin rahat və komfortlu yol&ccedil;uluq imkanı təklif edən interyer dizayn kimi x&uuml;susiyyətlərə
                də malikdir.
              </li>
            </ul>
            <p>Bu səbəblərdən insanlar Jeep avtomobillərinə &uuml;st&uuml;nl&uuml;k verə bilərlər.</p>
            <p><strong>&nbsp;</strong></p>
            <h2>Jeep ehtiyat hissələri keyfiyyətlidirmi?</h2>
            <p>
              Jeep ehtiyat hissələrinin keyfiyyəti ehtiyat hissəsinin istehsal&ccedil;ısından, materialından və
              istehsal prosesindən asılı olaraq dəyişə bilər. &Uuml;mumiyyətlə, Jeep &ouml;z ehtiyat hissələrinin
              keyfiyyətinə nəzarət etməyə və onları m&uuml;mk&uuml;n olan ən y&uuml;ksək keyfiyyətlə istehsal etməyə
              &ccedil;alışır. Bununla belə, bazarda s&uuml;ni şəkildə hazırlanmış və keyfiyyətsiz Jeep ehtiyat hissələri
              də tapmaq m&uuml;mk&uuml;nd&uuml;r, ona g&ouml;rə də alış-veriş zamanı diqqətli olmaq t&ouml;vsiyə olunur.
              Rəsmi Jeep dilerləri və ya servisləri tərəfindən təqdim edilən orijinal Jeep ehtiyat hissələri adətən ən
              keyfiyyətli və sərfəli qiymətə olur.
            </p>
            <p>&nbsp;</p>
            <h2>Orijinal Jeep ehtiyat hissəsini necə m&uuml;əyyənləşdirmək olar?</h2>
            <p>
              Orijinal Jeep ehtiyat hissələrini m&uuml;əyyən etmək &uuml;&ccedil;&uuml;n aşağıdakı addımlar yerinə
              yetirilməlidir:
            </p>
            <ul>
              <li>
                <strong> İstehsal&ccedil;ı kodları:</strong> Orijinal Jeep ehtiyat hissələri istehsal&ccedil;ı
                tərəfindən təyin edilmiş x&uuml;susi kodlarla m&uuml;əyyən edilir. Bu kodlar orijinal ehtiyat
                hissələrinin orijinallığını yoxlayır və onları s&uuml;ni şəkildə hazırlanmış digər ehtiyat hissələrindən
                fərqləndirir.
              </li>
              <li>
                <strong> Səlahiyyətli dilerlər:</strong> Orijinal Jeep ehtiyat hissələri səlahiyyətli Jeep dilerləri
                və ya servis mərkəzləri tərəfindən satılır. Rəsmi dilerlər orijinal ehtiyat hissələrini yoxlamaq və m&uuml;ştərilərə
                k&ouml;mək etmək &uuml;&ccedil;&uuml;n lazımi məlumatlara sahibdirlər.
              </li>
              <li>
                <strong> İstehsal materialları:</strong> Orijinal Jeep ehtiyat hissələri orijinal istehsal
                materiallarından istifadə edilməklə istehsal olunur və d&uuml;zg&uuml;n sınaqdan ke&ccedil;irilir.
              </li>
              <li>
                <strong> Zəmanət:</strong> Orijinal Jeep ehtiyat hissələri istehsal&ccedil;ı tərəfindən m&uuml;əyyən
                edilmiş zəmanət m&uuml;ddəti ilə təklif olunur və zəmanət sertifikatı verilir.
              </li>
            </ul>
            <p>
              Bu addımları yerinə yetirməklə, orijinal Jeep ehtiyat hissələrini m&uuml;əyyən etmək və s&uuml;ni şəkildə
              istehsal olunan ehtiyat hissələrindən fərqləndirmək olar.
            </p>
            <h2>Jeep ehtiyat hissələri bahadırmı?</h2>
            <p>
              Jeep ehtiyat hissələrinin qiyməti ehtiyat hissəsinin n&ouml;v&uuml;ndən, istehsal&ccedil;ısından və
              yerindən asılı olaraq dəyişə bilər. &Uuml;mumiyyətlə, orijinal Jeep ehtiyat hissələri s&uuml;ni şəkildə
              istehsal olunan ehtiyat hissələrindən daha bahalı ola bilər. Bununla belə, onu da nəzərə almaq lazımdır
              ki, bu orijinal Jeep ehtiyat hissələri uzunm&uuml;ddətli perspektivdə daha əlverişli variant ola bilər,
              &ccedil;&uuml;nki bu hissələrin y&uuml;ksək keyfiyyəti və uzun&ouml;m&uuml;rl&uuml;l&uuml;y&uuml;
              avtomobilin daha uzun m&uuml;ddət d&uuml;zg&uuml;n işləməsinə imkan verir. Bundan əlavə, s&uuml;ni şəkildə
              və keyfiyyətsiz materiallardan istifadə etməklə istehsal olunan ehtiyat hissələri daha qısa m&uuml;ddətdə
              xarab ola və daha &ccedil;ox xərc yarada bilər.
            </p>
            <p>&nbsp;</p>
            <h2>Jeep avtomobillərinin əsas problemləri və ehtiyat hissələri</h2>
            <p>Jeep avtomobillərinin ən &uuml;mumi problemləri bunlar ola bilər:</p>
            <ul>
              <li>
                <strong> Elektrik sistemi:</strong> Jeep avtomobillərinin elektrik sistemi avtomobildə elektron
                avadanlığın və sensorların işləməsi &uuml;&ccedil;&uuml;n lazım olan enerjini təmin edir. Elektrik
                sistemindəki problemlər avtomobildəki işıqlandırma, radio və digər elektron avadanlıqların sıradan
                &ccedil;ıxmasına səbəb ola bilər.
              </li>
              <li>
                <strong> Transmissiya:</strong> Jeep avtomobillərinin transmissiyası avtomobildəki dişli və mil
                sistemi ilə formalaşır. Transmissiya problemləri avtomobildə transmissiya mayesinin kifayət qədər
                olmaması və ya dişli və mil sisteminin nasazlığı səbəbindən yarana bilər.
              </li>
              <li>
                <strong> Əyləc sistemi:</strong> Jeep avtomobillərinin əyləc sisteminə əyləc diskləri, əyləc
                pedalları, əyləc hidravlik sistemi və əyləc nəzarəti daxildir. Əyləc sistemində problemlər avtomobildə k&ouml;hnəlmiş
                əyləc diskləri və ya əyləc hidravlik sistemindəki nasazlıq səbəbindən yarana bilər.
              </li>
            </ul>
            <p>
              Bu problemləri həll etmək &uuml;&ccedil;&uuml;n orijinal Jeep ehtiyat hissələrindən istifadə etmək t&ouml;vsiyə
              olunur. Orijinal Jeep ehtiyat hissələri lazımi qaydada sınaqdan ke&ccedil;irilir və zəmanət altında təklif
              olunur ki, bu da avtomobilin d&uuml;zg&uuml;n işləməsini təmin edir.
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
      title: 'Jeep ehtiyat hissələri | Onlayn mağaza | Otobaza',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Orijinal ehtiyat hissələrini Otobaza saytından və ya Jeep servis mərkəzlərindən əldə edə bilərsiniz.'
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
