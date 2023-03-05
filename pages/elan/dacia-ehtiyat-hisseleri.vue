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
            <h1>
              <strong>İnsanlar niyə Dacia avtomobillərinə daha &ccedil;ox &uuml;st&uuml;nl&uuml;k verirlər?</strong>
            </h1>
            <p>
              <strong>Dacia avtomobilləri</strong> qənaətcil qiymətinə, praktik dizaynına və yaxşı performansına g&ouml;rə
              &ccedil;ox məşhurdur. Dacia ailələr &uuml;&ccedil;&uuml;n sərfəli qiymətə <strong>keyfiyyətli
                avtomobil</strong> alternativləri təklif edir. <strong>Dacia avtomobilləri</strong> qiymət-performans
              nisbəti baxımından kifayət qədər yaxşı qiymətləndirilir. Bundan əlavə, <strong>Dacia
                avtomobilləri</strong> praktiki və davamlı olması ilə də tanınır. Həm&ccedil;inin <strong>Dacia
                avtomobillərinin</strong> m&uuml;asir texnoloji x&uuml;susiyyətləri təklif edən bir &ccedil;ox modeli
              var. Bunlarla yanaşı <strong>Dacia avtomobillərinin</strong> baxım və təmir xərclərinin digər markalara
              nisbətən daha m&uuml;nasib olması bu markanı se&ccedil;məyi d&uuml;ş&uuml;nən insanlar &uuml;&ccedil;&uuml;n
              &uuml;st&uuml;nl&uuml;k təşkil edə bilər.
            </p>
            <p>&nbsp;</p>
            <h2><strong>Dacia ehtiyat hissələri keyfiyyətlidir?</strong></h2>
            <p>
              <strong>Dacia ehtiyat hissələrinin</strong> keyfiyyəti istehsal standartlarından və keyfiyyətə nəzarət
              proseslərindən asılıdır. &Uuml;mumiyyətlə, <strong>Dacia ehtiyat hissələri</strong> keyfiyyətli ola bilər,
              həmişə <strong>orijinal ehtiyat hissələri</strong> istifadə etmək avtomobilin daha uzun m&uuml;ddət
              işləməsinə və daha az problemlə &uuml;zləşməsinə k&ouml;mək edə bilər. <strong>Orijinal</strong> <strong>Dacia
                ehtiyat hissələri </strong>alarkən həmişə rəsmi diler və ya xidmət mərkəzində bu
              <strong>ehtiyat</strong> <strong>hissələri</strong> barədə məlumat almaq, onları yoxlamaq və
              avtomobilinizin ehtiyacları &uuml;&ccedil;&uuml;n ən uyğun ehtiyat hissələrini se&ccedil;mək t&ouml;vsiyə
              olunur.
            </p>
            <p>&nbsp;</p>
            <h2><strong>Orijinal Dacia ehtiyat hissəsini necə m&uuml;əyyən etmək olar?</strong></h2>
            <p>
              <strong>Orijinal Dacia ehtiyat hissələri</strong> istehsal&ccedil;ı tərəfindən təsdiq edilmiş və
              avtomobillər &uuml;&ccedil;&uuml;n nəzərdə tutulmuşdur. Bu hissələr avtomobillərin zəmanət və ya
              zəmanətsiz texniki xidməti və təmiri &uuml;&ccedil;&uuml;n tələb olunan keyfiyyət və uyğunluq standartına
              cavab verməlidir. <strong>Avtomobil ehtiyat hissəsi</strong> alarkən onun <strong>orijinal Dacia ehtiyat
                hissəsi </strong>olub-olmadığını yoxlamaq &uuml;&ccedil;&uuml;n ilk olaraq <strong>ehtiyat
                hissələri</strong> &uuml;zərindəki loqonu yoxlaya bilərsiniz. <strong>Orijinal Dacia ehtiyat
                hissələri</strong> &uuml;zərində şirkətin loqosu və ya adı olmalıdır.
            </p>
            <p>&nbsp;</p>
            <h2><strong>Dacia ehtiyat hissələri bahadır?</strong></h2>
            <p>
              <strong>Avtomobil ehtiyat hissələri </strong>bazarında qiymət ehtiyat hissənin n&ouml;v&uuml;nə g&ouml;rə
              dəyişə bilər. <strong>Dacia ehtiyat</strong> <strong>hissələri</strong> digər <strong>avtomobil ehtiyat
                hissələri</strong> ilə m&uuml;qayisədə daha sərfəli ola bilər. Bununla belə, <strong>ən sərfəli</strong>
              <strong>ehtiyat hissələrini</strong> tapmaq &uuml;&ccedil;&uuml;n həmişə m&uuml;xtəlif satıcıları və
              qiymətləri m&uuml;qayisə etmək t&ouml;vsiyə olunur. Həm&ccedil;inin qeyd etmək lazımdır ki, <strong>Dacia
                ehtiyat hissələrinin</strong> qiyməti hissələrin n&ouml;v&uuml;ndən, keyfiyyətindən, bazar şəraitindən
              və ya yerli valyuta qiymətindən asılı olaraq dəyişə bilər. Bəzi <strong>ehtiyat hissələri</strong> daha
              bahalı, bəziləri isə daha sərfəli ola bilər. Ən keyfiyyətli və <strong>sərfəli</strong> <strong>avtomobil
                ehtiyat</strong> <strong>hissələri</strong> tapmaq &uuml;&ccedil;&uuml;n həmişə rəsmi diler və ya xidmət
              mərkəzi ilə əlaqə saxlamaq t&ouml;vsiyə olunur.
            </p>
            <p>&nbsp;</p>
            <h2><strong>Dacia avtomobillərinin əsas problemləri və ehtiyat hissələri</strong></h2>
            <p>
              B&uuml;t&uuml;n avtomobillərin m&uuml;əyyən problemləri var ki, onu da <strong>avtomobil ehtiyat
                hissəsi</strong> ilə aradan qaldırmaq, təmir etmək m&uuml;mk&uuml;nd&uuml;r. <strong>Dacia
                avtomobilləri</strong> ilə bağlı tez-tez bildirilən problemlərə elektrik sistemində problemlər, &ouml;t&uuml;rmə
              problemləri, kondisioner problemləri və s. aid ola bilər. <strong>Dacia avtomobillərində </strong>rastlanan
              bu problemlər nəqliyyat vasitələrinin yaşından, istifadəsindən və texniki xidmətdən asılı olaraq m&uuml;xtəlif
              şiddət və tezliklərdə baş verə bilər. Bundan əlavə, bu problemlərin yaranmasına avtomobillərin dizaynı və
              ya istehsal q&uuml;surları da səbəb ola bilər. <strong>Dacia avtomobili </strong>idarə edən s&uuml;r&uuml;c&uuml;lər
              bu problemlərin həlli &uuml;&ccedil;&uuml;n orijinal və ya markanın istehsal icazəsi olan
              <strong>ehtiyat</strong> <strong>hissələri </strong>istifadə edərək avtomobilinizin yaxşı işləməsini və
              uzun &ouml;m&uuml;r s&uuml;rməsini təmin edəcək.
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
                  hissələrini buradan əldə edə bilərsiniz</a></u>
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
      title: 'Dacia ehtiyat hissələri | Onlayn mağaza | Otobaza',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Orijinal ehtiyat hissələrini Otobaza saytından və ya Dacia servis mərkəzlərindən əldə edə bilərsiniz.'
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
