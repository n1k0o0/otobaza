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
            <h1>İnsanlar niyə Dodge avtomobillərinə daha &ccedil;ox &uuml;st&uuml;nl&uuml;k verirlər?</h1>
            <p>
              Dodge avtomobilləri ABŞ-da x&uuml;susilə məşhur olan bir markadır. İnsanların niyə Dodge avtomobillərinə
              daha &ccedil;ox &uuml;st&uuml;nl&uuml;k verməsi sualına cavab vermək &uuml;&ccedil;&uuml;n bəzi amilləri
              nəzərə almaq lazımdır:
            </p>
            <p>
              <strong>G&uuml;cl&uuml; M&uuml;hərriklər:</strong> Dodge avtomobilləri &ccedil;ox vaxt g&uuml;cl&uuml; m&uuml;hərriklərlə
              təchiz edilir. Bu, avtomobillərin daha s&uuml;rətli və daha g&uuml;cl&uuml; işləməsinə imkan verir. Bu
              səbəbdən bir &ccedil;ox insanlar Dodge avtomobillərini performans avtomobilləri hesab edir və onlara
              &uuml;st&uuml;nl&uuml;k verirlər.
            </p>
            <p>
              <strong>G&ouml;zəl Dizayn:</strong> Dodge avtomobilləri, x&uuml;susilə Challenger və Charger modelləri g&ouml;z
              oxşayan dizaynları ilə diqqət &ccedil;əkir. Bu, avtomobillərin gənclər arasında x&uuml;susilə məşhur
              olmasına səbəb olur.
            </p>
            <p>
              <strong>Tarix:</strong> Dodge avtomobil sənayesində uzun tarixə malik bir markadır. Brendin k&ouml;kləri
              1900-c&uuml; illərin əvvəllərinə gedib &ccedil;ıxır. Bu səbəbdən bəzi insanlar Dodge avtomobillərini
              klassik avtomobillər kimi g&ouml;r&uuml;r və tarixi bir əlaqə hiss edirlər.
            </p>
            <p>
              <strong>Geniş model &ccedil;eşidi:</strong> Dodge, yolsuzluq avtomobillərindən tutmuş idman
              avtomobillərinə qədər geniş &ccedil;eşiddə avtomobil modellərinə malikdir. Bu, m&uuml;ştərilərə m&uuml;xtəlif
              se&ccedil;imlər təqdim edir və onlara ehtiyaclarına uyğun avtomobil tapmağa k&ouml;mək edir.
            </p>
            <p>
              <strong>Qiymət:</strong> Dodge avtomobilləri performans və dizayn baxımından olduqca m&uuml;nasibdir. Bu
              səbəbdən bəzi insanlar digər l&uuml;ks avtomobillərdən daha qənaətcil bir se&ccedil;im olaraq Dodge
              avtomobillərinə &uuml;st&uuml;nl&uuml;k verirlər.
            </p>
            <p>
              Bu amillərin birləşməsi insanların Dodge avtomobillərinə &uuml;st&uuml;nl&uuml;k vermələrinə səbəb ola
              bilər. Ancaq hər kəsin se&ccedil;imləri fərqli ola bilər və bu amillər hər kəsə aid olmaya bilər.
            </p>
            <p>&nbsp;</p>
            <h2>Dodge ehtiyat hissələri keyfiyyətlidirmi?</h2>
            <p>
              &Uuml;mumiyyətlə, Dodge brendinin ehtiyat hissələri keyfiyyətlidir və avtomobillərin rahat işləməsini
              təmin edir. Bununla belə, Dodge ehtiyat hissələrinin dəqiq keyfiyyəti ehtiyat hissəsinin
              spesifikasiyasına, istehsal&ccedil;ısına və alınma yerindən asılı olaraq dəyişə bilər. Həm&ccedil;inin,
              Orijinal Avadanlıq İstehsal&ccedil;ısının (OEM) ehtiyat hissələri &ccedil;ox vaxt daha keyfiyyətli ola
              bilər. Buna g&ouml;rə də ehtiyat hissələri alarkən d&uuml;zg&uuml;n t&ouml;vsiyə olunan mənbələrdən
              istifadə etmək və yaxşı araşdırma aparmaq vacibdir.
            </p>
            <p>&nbsp;</p>
            <h2>Orijinal Dodge ehtiyat hissəsini necə m&uuml;əyyən etmək olar?</h2>
            <p>
              Orijinal Dodge ehtiyat hissələri avtomobilin istehsal&ccedil;ısı FCA US MMC tərəfindən istehsal olunur və
              Dodge loqosu və ya markası ilə qeyd olunur. Həmin bu Dodge ehtiyat hissələri avtomobilin performansını və
              təhl&uuml;kəsizliyini qorumaq &uuml;&ccedil;&uuml;n nəzərdə tutulub və orijinal spesifikasiyalara uyğun
              istehsal olunub. Orijinal Dodge ehtiyat hissələrinin avtomobilin orijinal avadanlığı ilə eyni keyfiyyətdə
              və uyğunluğuna zəmanət verilir. Orijinal Dodge ehtiyat hissələri səlahiyyətli Dodge dilerləri, servis
              mərkəzləri və ya onlayn dilerlər tərəfindən satıla bilər.
            </p>
            <p>&nbsp;</p>
            <h2>Dodge ehtiyat hissələri bahadırmı?</h2>
            <p>
              Dodge ehtiyat hissələrinin qiyməti hissənin n&ouml;v&uuml;ndən, modelindən, konstruksiyasından və bazar
              tələbindən asılı olaraq dəyişə bilər. &Uuml;mumiyyətlə, Orijinal Avadanlıq İstehsal&ccedil;ısının (OEM)
              ehtiyat hissələri digər alternativ ehtiyat hissələrindən daha bahalı ola bilər. Bununla belə, bu hissələr
              avtomobilin performansını və təhl&uuml;kəsizliyini qorumaq &uuml;&ccedil;&uuml;n nəzərdə tutulduğundan,
              onun daha uzun m&uuml;ddət ərzində daha təhl&uuml;kəsiz və səmərəli işləməsinə imkan verir. Alternativ
              ehtiyat hissələri isə daha ucuz ola bilər, lakin keyfiyyət və uyğunluq baxımından orijinal ehtiyat
              hissələrinə nisbətən yaxşı nəticə g&ouml;stərməyə də bilər. Buna g&ouml;rə Dodge ehtiyat hissələrini se&ccedil;ərkən,
              avtomobilin performansını və təhl&uuml;kəsizliyini qoruyacaq se&ccedil;im etmək vacibdir.
            </p>
            <p>&nbsp;</p>
            <h2>Dodge avtomobillərinin əsas problemləri və ehtiyat hissələri?</h2>
            <p>Dodge avtomobilləri ilə bağlı bəzi &uuml;mumi problemlər bunlar ola bilər:</p>
            <ul>
              <li>
                <strong>Elektrik problemləri:</strong> Elektrik sistemindəki nasazlıqlar avtomobilin i&ccedil;ərisində
                işıqlandırma və elektron avadanlıqların sıradan &ccedil;ıxmasına səbəb ola bilər.
              </li>
              <li>
                <strong>Soyutma Sistemi Problemləri:</strong> Soyutma sistemindəki problemlər m&uuml;hərrikin
                həddindən artıq istiləşməsinə və zədələnməsinə səbəb ola bilər.
              </li>
              <li>
                <strong>Transmissiya Problemləri:</strong> Transmissiya problemləri yerdəyişmə problemlərinə və
                avtomobilin d&uuml;zg&uuml;n şəkildə işləməməsinə səbəb ola bilər.
              </li>
              <li>
                <strong>Qığılcım problemləri</strong>: Qığılcım problemləri m&uuml;hərrikin d&uuml;zg&uuml;n
                işləməməsinə və onun performansının azalmasına səbəb ola bilər.
              </li>
            </ul>
            <p>
              Bu problemləri həll etmək &uuml;&ccedil;&uuml;n orijinal Dodge ehtiyat hissələrindən istifadə etmək t&ouml;vsiyə
              olunur. Bu hissələr avtomobilin performansını və təhl&uuml;kəsizliyini qorumaq &uuml;&ccedil;&uuml;n
              nəzərdə tutulmuş və istehsal edilmişdir. Alternativ ehtiyat hissələrinin istifadəsi problemlərin həllində
              faydalı olsa da, avtomobil &uuml;&ccedil;&uuml;n uyğun olmaya bilər və daha qısa m&uuml;ddətdə
              nasazlıqların təkrar baş verməsinə səbəb ola bilər.
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
      title: 'Dodge ehtiyat hissələri | Onlayn mağaza | Otobaza',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Orijinal ehtiyat hissələrini Otobaza saytından və ya Dodge servis mərkəzlərindən əldə edə bilərsiniz.'
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
