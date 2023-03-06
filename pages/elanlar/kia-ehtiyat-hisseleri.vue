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
            <h1>İnsanlar niyə daha &ccedil;ox Kia avtomobillərinə &uuml;st&uuml;nl&uuml;k verirlər?</h1>
            <p>Kia avtomobillərinə &uuml;st&uuml;nl&uuml;k verilməsinin bir &ccedil;ox səbəbi var:</p>
            <ul>
              <li>
                <strong> Qiymət-performans nisbəti:</strong> Kia avtomobilləri digər premium brendlərdən daha sərfəli
                qiymətə olmasına baxmayaraq onlarla eyni avadanlıq və texnologiyaya sahibdir.
              </li>
              <li>
                <strong> Etibarlılıq:</strong> Kia avtomobillərinə, istehsal&ccedil;ının etibarlılıq və uzun&ouml;m&uuml;rl&uuml;l&uuml;k
                vəd etməsi səbəbi ilə, m&uuml;ntəzəm olaraq texniki xidmət g&ouml;stərildiyi təqdirdə uzunm&uuml;ddətli
                avtomobil kimi &uuml;st&uuml;nl&uuml;k verilə bilər.
              </li>
              <li>
                <strong> Estetik dizayn:</strong> Kia avtomobilləri m&uuml;asir dizayn tendensiyalarına uyğun dizayn
                edildiyi &uuml;&ccedil;&uuml;n cəlbedici və m&uuml;asir g&ouml;r&uuml;n&uuml;şə malik ola bilər.
              </li>
              <li>
                <strong> Daxili avadanlıqların keyfiyyəti:</strong> Kia avtomobilləri digər avtomobillərə nisbətən
                daha keyfiyyətli materiallardan istifadə olunmaqla istehsal olunduğu &uuml;&ccedil;&uuml;n salonda daha
                rahat və dəbdəbəli atmosfer təqdim edə bilər.
              </li>
              <li>
                <strong> İnnovasiya:</strong> Kia m&uuml;asir avtomobilə &uuml;st&uuml;nl&uuml;k verənlər &uuml;&ccedil;&uuml;n
                cəlbedici ola bilər, &ccedil;&uuml;nki o, &ouml;z avtomobillərində ən m&uuml;asir texnoloji x&uuml;susiyyətləri
                təklif edir.
              </li>
            </ul>
            <p>&nbsp;</p>
            <h2>Kia ehtiyat hissələri keyfiyyətlidirmi?</h2>
            <p>
              Kia ehtiyat hissələri Kia tərəfindən istehsal olunan və Kia avtomobilləri &uuml;&ccedil;&uuml;n
              optimallaşdırılmış ehtiyat hissələridir. Kia ehtiyat hissələri Kia-nın keyfiyyət və etibarlılıq
              standartlarına uyğun istehsal olunur və avtomobillərin rahat işləməsini təmin edir.
            </p>
            <p>
              Bununla belə, Kia ehtiyat hissələrinin keyfiyyəti istehsal və paylama prosesində tətbiq olunan amillərdən
              və istehsal&ccedil;ının keyfiyyətə nəzarət prosedurlarından asılıdır. &Uuml;mumiyyətlə, Kia ehtiyat
              hissələri keyfiyyətlidir və avtomobillərin tələblərinə cavab vermək &uuml;&ccedil;&uuml;n nəzərdə
              tutulub.
            </p>
            <p>&nbsp;</p>
            <h2>Orijinal Kia ehtiyat hissəsini necə m&uuml;əyyən etmək olar?</h2>
            <p>
              Orijinal Kia ehtiyat hissələri Kia tərəfindən istehsal olunan və Kia loqosu ilə işarələnmiş hissələrdir.
              Bunlar Kia avtomobilləri &uuml;&ccedil;&uuml;n nəzərdə tutulub, istehsal olunub və sınaqdan ke&ccedil;irilib
              və Kia-nın zəmanəti altındadır.
            </p>
            <p>
              Orijinal Kia ehtiyat hissələrini m&uuml;əyyən etmək &uuml;&ccedil;&uuml;n aşağıdakı addımları yerinə
              yetirmək olar:
            </p>
            <ul>
              <li>
                <strong> Kia səlahiyyətli servis mərkəzinə getmək:</strong> Avtomobilinizin modelini və ehtiyat
                hissəsi &uuml;&ccedil;&uuml;n tələb olunan partiyanın n&ouml;mrəsini qeyd etməklə avtomobilinizə lazım
                olan ehtiyat hissələrini səlahiyyətli Kia servis mərkəzindən soruşun.
              </li>
              <li>
                <strong> Kia rəsmi saytından sifariş:</strong> Siz avtomobilinizin modelini se&ccedil;məklə və ehtiyat
                hissəsi &uuml;&ccedil;&uuml;n tələb olunan lot n&ouml;mrəsini daxil etməklə Kia rəsmi saytından orijinal
                ehtiyat hissələri sifariş edə bilərsiniz.
              </li>
              <li>
                <strong> Kia loqosu:</strong> Orijinal Kia ehtiyat hissələri Kia loqosu ilə qeyd olunub. Bu isə o
                deməkdirki &uuml;zərində Kia loqosu olan hissələr orijinal Kia ehtiyat hissələridir.
              </li>
            </ul>
            <p>
              Bu addımlar sizə orijinal Kia ehtiyat hissələrini m&uuml;əyyən etməyə və avtomobilinizin performansını
              maksimum dərəcədə artırmağa imkan verəcək.
            </p>
            <p>&nbsp;</p>
            <h2>Kia ehtiyat hissələri bahadırmı?</h2>
            <p>
              Kia ehtiyat hissələrinin qiymətləri digər avtomobil markalarının ehtiyat hissələrinə bənzəyir və m&uuml;xtəlif
              ehtiyat hissələri &uuml;&ccedil;&uuml;n m&uuml;xtəlif qiymət intervalları m&ouml;vcuddur. Orijinal Kia
              ehtiyat hissələri daha y&uuml;ksək qiymətə malik ola bilər, lakin uzunm&uuml;ddətli perspektivdə daha
              qənaətcil ola bilər, &ccedil;&uuml;nki onlar &uuml;mumiyyətlə y&uuml;ksək keyfiyyətli və etibarlıdır. Kia
              ehtiyat hissələri haqqında ətraflı məlumat &uuml;&ccedil;&uuml;n Kia səlahiyyətli servis mərkəzinə m&uuml;raciət
              edə bilərsiniz.
            </p>
            <p>&nbsp;</p>
            <h2>Kia avtomobillərinin əsas problemləri və ehtiyat hissələri?</h2>
            <p>
              Kia avtomobillərinin əsas problemləri m&uuml;xtəlif model və illərə g&ouml;rə dəyişə bilər, lakin &uuml;mumilikdə
              aşağıdakıları əhatə edə bilər:
            </p>
            <ul>
              <li>
                <strong> Elektrik problemləri:</strong> Buraya avtomobilin elektron sistemlərinin xarab olması,
                işləməməsi və ya nasazlığı ilə bağlı problemlər daxil ola bilər.
              </li>
              <li>
                <strong> Balans problemləri</strong>: Buraya avtomobilin balans sistemləri ilə bağlı nasazlıq, aşınma
                və ya tənzimləmə kimi problemlər daxil ola bilər.
              </li>
              <li>
                <strong> Performans problemləri:</strong> Buraya zəif m&uuml;hərrik performansı, yanacaq qənaəti və ya
                artan emissiya dəyərləri daxil ola bilər.
              </li>
            </ul>
            <p>&nbsp;</p>
            <p>
              Kia ehtiyat hissələri Kia tərəfindən istehsal olunan və Kia avtomobilləri &uuml;&ccedil;&uuml;n
              optimallaşdırılmış ehtiyat hissələridir. Kia ehtiyat hissələri Kia avtomobillərinin performansını qoruyan
              və avtomobillərin tələblərinə cavab verən ehtiyat hissələridir. Onlar Kia tərəfindən m&uuml;əyyən edilmiş
              keyfiyyət və etibarlılıq standartlarına uyğun istehsal olunur və avtomobilinizin ehtiyaclarına uyğun
              olaraq quraşdırılır.
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
      title: 'KIA ehtiyat hissələri | Onlayn mağaza | Otobaza',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Orijinal ehtiyat hissələrini Otobaza saytından və KIA servis mərkəzlərindən əldə edə bilərsiniz.'
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
