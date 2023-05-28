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
          <div v-if="ad_special.length" class="elan_wrapper">
            <div class="elan_header">
              <h2 class="">
                {{ $t('used.special') }}
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
            <h1>İnsanlar niyə daha &ccedil;ox Volkswagen avtomobillərinə &uuml;st&uuml;nl&uuml;k verirlər?</h1>
            <p>
              Volkswagen (VW) markalı avtomobillər bir &ccedil;ox amillərə g&ouml;rə məşhur ola bilər. Onların
              arasında:
            </p>
            <ul>
              <li>
                <strong> Keyfiyyətli dizayn və istehsal:</strong> Volkswagen &ouml;z avtomobillərinin dizaynına və
                istehsalına &ccedil;ox həssas yanaşır.
              </li>
              <li>
                <strong> İnnovasiya və texnoloji x&uuml;susiyyətlər:</strong> Volkswagen &ouml;z avtomobillərinə əlavə
                x&uuml;susiyyətlər və texnoloji yeniliklər tətbiq edir ki, bu da onları daha g&uuml;cl&uuml;, ağıllı və
                faydalı edir.
              </li>
              <li>
                <strong> Brend imici:</strong> Volkswagen etibarlı və prestijli brend hesab olunur və m&uuml;ştərilər
                tərəfindən y&uuml;ksək qiymətləndirilir.
              </li>
              <li>
                <strong> Qiymət/performans nisbəti:</strong> Volkswagen avtomobillərinin qiymətləri digər premium
                markaların avtomobillərindən daha m&uuml;nasib həm&ccedil;inin avtomobillərin performansı və keyfiyyəti
                də y&uuml;ksəkdir.
              </li>
              <li>
                <strong> Servis və ehtiyat hissələri dəstəyi:</strong> Volkswagen avtomobil sahiblərinə yaxşı servis
                və ehtiyat hissələri dəstəyi təklif edir və avtomobil sahiblərinin ehtiyaclarını &ouml;dəməyə &ccedil;alışır.
              </li>
            </ul>
            <p>
              Məhz bu amillərə g&ouml;rə bir &ccedil;ox insan Volkswagen avtomobillərinə daha &ccedil;ox &uuml;st&uuml;nl&uuml;k
              verir.
            </p>
            <p>&nbsp;</p>
            <h2>Volkswagen ehtiyat hissələri keyfiyyətlidirmi?</h2>
            <p>
              Volkswagen, ehtiyat hissələrinin keyfiyyətinə ciddi yanaşır və avtomobillərin performansını və
              səmərəliliyini ən y&uuml;ksək səviyyədə saxlamağı hədəfləyir. Avtomobillərin dizayn və istehsal x&uuml;susiyyətlərinə
              uyğun olaraq orijinal Volkswagen ehtiyat hissələri istehsal olunur və keyfiyyətli materiallardan istifadə
              olunur. Bununla belə, bazarda m&ouml;vcud olan bəzi ehtiyat hissələri digərlərindən daha aşağı keyfiyyətli
              ola bilər və orijinal Volkswagen ehtiyat hissələrindən daha ucuz ola bilər. Buna g&ouml;rə də orijinal
              Volkswagen ehtiyat hissələrinin keyfiyyətini və qiymətini balanslaşdırmaq və onları etibarlı mənbədən
              almaq vacibdir.
            </p>
            <p>&nbsp;</p>
            <h2>Orijinal Volkswagen ehtiyat hissəsini necə m&uuml;əyyən etmək olar?</h2>
            <p>
              Orijinal Volkswagen ehtiyat hissələri Volkswagen tərəfindən istehsal olunur və Volkswagen səlahiyyətli
              dilerləri və ya servisləri tərəfindən satış &uuml;&ccedil;&uuml;n paylanılır. Orijinal ehtiyat hissələri
              avtomobil istehsal&ccedil;ısı tərəfindən m&uuml;əyyən edilmiş spesifikasiyalara və keyfiyyət
              standartlarına uyğun istehsal olunur və zəmanət verilir. Orijinal Volkswagen ehtiyat hissələrini m&uuml;əyyən
              etmək &uuml;&ccedil;&uuml;n aşağıdakı x&uuml;susiyyətlərə diqqət yetirmək t&ouml;vsiyə olunur:
            </p>
            <ul>
              <li>
                <strong> Orijinal Volkswagen qablaşdırması:</strong> Orijinal ehtiyat hissələri Volkswagen tərəfindən
                m&uuml;əyyən edilmiş x&uuml;susi qablaşdırmada satılır.
              </li>
              <li>
                <strong> Volkswagen lot n&ouml;mrəsi:</strong> Orijinal ehtiyat hissələri Volkswagen tərəfindən təyin
                edilmiş lot n&ouml;mrəsinə malikdir.
              </li>
              <li><strong> Volkswagen loqosu:</strong> Orijinal ehtiyat hissələrində Volkswagen loqosu olmalıdır.</li>
              <li>
                Orijinal Volkswagen ehtiyat hissələri Volkswagen səlahiyyətli dilerləri və ya servis mərkəzlərindən
                alınmalıdır.
              </li>
            </ul>
            <p>
              Orijinal Volkswagen ehtiyat hissələrinin m&uuml;əyyən edilməsi avtomobilinizin performansını və
              səmərəliliyini qorumağa həm&ccedil;inin avtomobilin zəmanət tələblərini yerinə yetirməyə k&ouml;mək
              edəcək.
            </p>
            <p>&nbsp;</p>
            <h2>Volkswagen ehtiyat hissələri bahadırmı?</h2>
            <p>
              Volkswagen ehtiyat hissələrinin qiyməti digər avtomobil istehsal&ccedil;ılarının ehtiyat hissələri ilə m&uuml;qayisədə
              dəyişə bilər və adətən digər ehtiyat hissələri ilə m&uuml;qayisədə daha baha olur. Bu, keyfiyyət,
              etibarlılıq və ehtiyat hissəsinin uyğunluğu və digər faktorlara əsasən təyin olunur. Bundan əlavə,
              Volkswagen-in ehtiyat hissələri orijinal Volkswagen avtomobilləri ilə uyğunlaşdırılaraq digər ehtiyat
              hissələri ilə m&uuml;qayisədə daha asan yığılmağa və quraşdırılmağa imkan verir.
            </p>
            <p>&nbsp;</p>
            <h2>Volkswagen avtomobillərinin əsas problemləri və ehtiyat hissələri</h2>
            <p>
              Volkswagen avtomobilləri, hər hansı bir avtomobil kimi, zamanla texniki xidmət və təmirə ehtiyac duyur.
              Bu avtomobillərdə ən &ccedil;ox rast gəlinən problemlər arasında:
            </p>
            <ul>
              <li>
                <strong> Elektrik problemləri:</strong> Volkswagen avtomobillərində tez-tez elektrik problemləri olur
                ki, bu da avtomobilin işıqlandırma sistemi, idarəetmə paneli və ya enerji təchizatı ilə bağlı ola bilər.
              </li>
              <li>
                <strong> M&uuml;hərrik problemləri:</strong> Volkswagen m&uuml;hərrikləri m&uuml;asir m&uuml;hərrik
                texnologiyalarına malik olduğundan, hər hansı bir m&uuml;hərrik problemi avtomobilin səmərəliliyinə və
                performansına təsir edə bilər.
              </li>
              <li>
                <strong> Yanacaq və yanacaq sistemi problemləri:</strong> Volkswagen avtomobillərində tez-tez yanacaq
                sistemində problemlər olur ki, bu da yanacağın d&uuml;zg&uuml;n verilməməsi, yanacaq filtrinin qırılması
                və ya yanacaq nasosunun nasaz olması nəticəsində yarana bilər.
              </li>
            </ul>
            <p>
              Orijinal Volkswagen ehtiyat hissələri bu problemləri həll etmək &uuml;&ccedil;&uuml;n hazırlanmış və
              uyğunluğu yoxlanılmışdır. Hər bir avtomobil &uuml;&ccedil;&uuml;n tələb olunan ehtiyat hissələri fərqli
              olduğundan onların qiymətləri də dəyişə bilər. Volkswagen ehtiyat hissələri orijinal Volkswagen
              avtomobilləri ilə uyğunlaşdığı &uuml;&ccedil;&uuml;n avtomobilinizin performansını və səmərəliliyini
              qoruyan etibarlı və keyfiyyətli məhsullardır.
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
      ad_vip: 'Used/ad_vip',
      ad_special: 'Used/ad_special'
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
      title: 'Volkswagen ehtiyat hissələri | Onlayn mağaza | Otobaza',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Orijinal ehtiyat hissələrini Otobaza saytından və Volkswagen servis mərkəzlərindən əldə edə bilərsiniz.'
        }
      ]
    }
  }
}
</script>
