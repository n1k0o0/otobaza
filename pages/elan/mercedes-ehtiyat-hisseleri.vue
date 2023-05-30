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
                v-for="(ad,i) in ad_special"
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
            <h1><strong>İnsanlar niyə Mercedes ehtiyat hissələri alır?</strong></h1>
            <p>
              <strong>Mercedes ehtiyyat hissələri</strong> Mercedes markalı avtomobillərin performansını,
              etibarlılığını və davamlılığını qoruyan m&uuml;h&uuml;m amildir. İnsanlar <strong>ehtiyat
                hissələri </strong>alarkən məhz aşağıdakı x&uuml;susiyyətlərə sahib olduğu &uuml;&ccedil;&uuml;n
              <strong>Mercedes ehtiyat hissələri</strong> almağa &uuml;st&uuml;nl&uuml;k verirlər:
            </p>
            <p>
              <strong>Keyfiyyət</strong>: Mercedes y&uuml;ksək keyfiyyətli avtomobillər istehsal edən brend kimi
              tanınır və onun <strong>Mercedes</strong> <strong>ehtiyat</strong> <strong>hissələri</strong> də eyni
              keyfiyyət standartlarını əks etdirir. <strong>Mercedes ehtiyat hissələrini</strong> se&ccedil;məklə s&uuml;r&uuml;c&uuml;lər
              avtomobillərini ən y&uuml;ksək standartlara uyğun saxlaya biləcəklərinə əmin ola bilərlər.
            </p>
            <p>
              <strong>Uyğunluq</strong>: <strong>Mercedes ehtiyat hissələri</strong> x&uuml;susi olaraq markanın
              avtomobilləri ilə q&uuml;sursuz işləmək &uuml;&ccedil;&uuml;n nəzərdə tutulub və bu, s&uuml;r&uuml;c&uuml;lərə
              &ouml;z avtomobillərinin performansını qorumağa imkan verir.
            </p>
            <p>
              <strong>Davamlılıq</strong>: <strong>Mercedes ehtiyyat</strong> <strong>hissələri</strong> uzun m&uuml;ddət
              istifadəyə davamlı şəkildə dizayn edilmişdir ki, bu da s&uuml;r&uuml;c&uuml;ləri tez-tez təmir
              ehtiyacından xilas edərək uzun m&uuml;ddətdə vaxt və pula qənaət edir.
            </p>
            <p>
              &Uuml;mumiyyətlə, insanlar keyfiyyət, uyğunluq, davamlılıq, brendə sadiqlik və təcr&uuml;bə
              baxımından<strong> avtomobil ehtiyat hissələri </strong>alarkən se&ccedil;imlərini
              <strong>Mercedes</strong> <strong>ehtiyat</strong> <strong>hissələri</strong> olur.
            </p>
            <p>&nbsp;</p>
            <h2><strong>Mercedes ehtiyat hissələri keyfiyyətlidirmi?</strong></h2>
            <p>
              Bəli, <strong>Mercedes ehtiyat hissələri</strong> &uuml;mumiyyətlə y&uuml;ksək keyfiyyətlidir. <strong>Mercedes</strong>
              <strong>ehtiyat</strong> <strong>hissələri</strong> markanın avtomobillərinə tam uyğun olaraq
              hazırlanmışdır və uzun&ouml;m&uuml;rl&uuml;l&uuml;k &uuml;&ccedil;&uuml;n nəzərdə tutulmuşdur. Bu, s&uuml;r&uuml;c&uuml;lərə
              avtomobillərinin performansını, etibarlılığını və dayanıqlığını davam etdirməyə imkan verir. Yəni bir s&ouml;zlə,
              <strong>keyfiyyətli Mercedes ehtiyat hissələri</strong> avtomobilinizin performansını, etibarlılığını və
              davamlılığını qorumaq &uuml;&ccedil;&uuml;n ən yaxşı variantlardan biridir.
            </p>
            <p>&nbsp;</p>
            <h2><strong>Orijinal Mercedes ehtiyat hissəsini necə təyin etmək olar?</strong></h2>
            <p>
              <strong>Orijinal</strong> <strong>Mercedes</strong> <strong>ehtiyat</strong> <strong>hissələri</strong>
              brendin avtomobillərinə tam uyğundur və avtomobilinizin performansını ən y&uuml;ksək səviyyədə qoruyur.
            </p>
            <p>
              <strong>Orijinal Mercedes orijinal ehtiyat hissələri</strong> y&uuml;ksək keyfiyyətli materiallarla
              istehsal olunur və onların uzun&ouml;m&uuml;rl&uuml;l&uuml;y&uuml;nə zəmanət verilir. <strong>Orijinal
                Mercedes ehtiyat hissələri</strong> &uuml;&ccedil;&uuml;n əla m&uuml;ştəri dəstəyi təklif edir və hər
              hansı sualınız olarsa, sizə k&ouml;mək etməyə hazırdır.
            </p>
            <p>
              <strong>Orijinal Mercedes ehtiyat hissələri</strong> Otobaza saytından və ya rəsmi distrib&uuml;tordan
              alınmalıdır.
            </p>
            <p>
              <strong>Mercedes avtomboillərinin orijinal ehtiyat</strong> <strong>hissələri</strong> bazarda &ccedil;ox
              ucuz olanlardan daha y&uuml;ksək qiymətə malikdir, lakin onlar avtomobilinizin performansı və davamlılığı
              &uuml;&ccedil;&uuml;n ən yaxşı se&ccedil;imdir.
            </p>
            <p>
              <strong>Orijinal ehtiyat hissələri</strong> brendin &ouml;z avtomobillərini dizaynını pozmayan m&uuml;asir
              texnologiyalar və x&uuml;susiyyətlərdən ibarətdir.
            </p>
            <p>
              <strong>Orijinal Mercedes ehtiyat hissələri</strong> avtomobillərinizin zəmanətini pozmayacaq və
              avtomobillərinizin dəyərini qoruyacaq.
            </p>
            <p>
              <strong>Məhsul kodları</strong>: <strong>Mercedes orijinal ehtiyat hissələri </strong>məhsul kodları ilə
              istehsal olunur və bu kodlar orijinal məhsulları m&uuml;əyyən etməyə k&ouml;mək edir.
            </p>
            <p>
              <strong>Mercedes loqosu:</strong> <strong>Orijinal Mercedes ehtiyat hissələri</strong> qablaşdırmada və
              ya brendin loqosu olan hissədə yerləşir.
            </p>
            <p>
              <strong>İstehsal&ccedil;ı haqqında məlumat:</strong> <strong>Mercedes ehtiyat hissələri</strong> istehsal&ccedil;ı
              tərəfindən verilən məlumat və ya zəmanət sənədləri ilə təqdim olunur.
            </p>
            <p>
              <strong>Keyfiyyət və dizayn: Orijinal Mercedes ehtiyat hissələri</strong> brendin avtomobillərinə m&uuml;kəmməl
              uyğun gələn y&uuml;ksək keyfiyyətli dizayna malikdir.
            </p>
            <p>
              Bu kimi n&uuml;anslar <strong>orijinal Mercedes ehtiyat hissələrini</strong> m&uuml;əyyən etməyə k&ouml;mək
              edə bilər və avtomobilinizin performansını, etibarlılığını və davamlılığını qoruyan ən yaxşı se&ccedil;imlərə
              sahib olmağa imkan verir.
            </p>
            <p>&nbsp;</p>
            <h2><strong>Mercedes ehtiyat hissələri bahalıdırmı?</strong></h2>
            <p>
              <strong>Mercedes ehtiyat hissələri</strong> &uuml;mumiyyətlə bazarda olan digər <strong>avtomobil
                ehtiyat</strong> <strong>hissələri</strong> ilə m&uuml;qayisədə bir qədər baha ola bilər. Amma bu y&uuml;ksək
              qiymət ehtiyat hissələrinin y&uuml;ksək keyfiyyəti və orijinal avadanlığın məhsuldarlığını saxlayan
              keyfiyyətlə əsaslandırılır. Bundan əlavə, <strong>Mercedes</strong> <strong>ehtiyat</strong> <strong>hissələrinin</strong>
              istifadəsi avtomobillərin uzun&ouml;m&uuml;rl&uuml;l&uuml;y&uuml;nə və rahat işləməsinə zəmanət verir.
              Buna g&ouml;rə də, <strong>Mercedes</strong> <strong>ehtiyat</strong> <strong>hissələrinin</strong> bahalı
              g&ouml;r&uuml;n&uuml;ş&uuml;nə baxmayaraq, avtomobilləriniz &uuml;&ccedil;&uuml;n ən yaxşı sərmayə qoymağa
              imkan verir.
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
      title: 'Mercedes ehtiyat hissələri | Onlayn mağaza | Otobaza',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Orijinal Mercedes ehtiyat hissələrini Otobaza saytından və ya Mersedes servis mərkəzlərindən əldə edə bilərsiniz.'
        }
      ]
    }
  }
}
</script>
