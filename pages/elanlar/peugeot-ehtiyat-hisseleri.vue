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
            <h1>
              <strong>İnsanlar niyə Peugeot avtomobillərinə daha &ccedil;ox &uuml;st&uuml;nl&uuml;k verirlər?</strong>
            </h1>
            <p>
              <strong>Peugeot </strong><strong>avtomobilləri</strong> qənaətcil qiymətinə, praktik dizaynına və yaxşı
              performansına g&ouml;rə &ccedil;ox məşhurdur. <strong>Peugeot </strong>ailələr &uuml;&ccedil;&uuml;n
              sərfəli qiymətə <strong>keyfiyyətli avtomobil</strong> alternativləri təklif edir.
              <strong>Peugeot </strong><strong>avtomobilləri</strong> qiymət-performans nisbəti baxımından kifayət qədər
              yaxşı qiymətləndirilir. Bundan əlavə, <strong>Peugeot </strong><strong>avtomobilləri</strong> praktiki və
              davamlı olması ilə də tanınır. Həm&ccedil;inin <strong>Peugeot </strong><strong>avtomobillərinin</strong>
              m&uuml;asir texnoloji x&uuml;susiyyətləri təklif edən bir &ccedil;ox modeli var. Bunlarla yanaşı <strong>Peugeot </strong><strong>avtomobillərinin</strong>
              baxım və təmir xərclərinin digər markalara nisbətən daha m&uuml;nasib olması bu markanı se&ccedil;məyi d&uuml;ş&uuml;nən
              insanlar &uuml;&ccedil;&uuml;n &uuml;st&uuml;nl&uuml;k təşkil edə bilər.
            </p>
            <p>&nbsp;</p>
            <h2>Peugeot ehtiyat hissələri keyfiyyətlidirmi?</h2>
            <p>
              <strong>Peugeot </strong>ehtiyat hissələri <strong>Peugeot </strong>tərəfindən istehsal olunan və
              <strong>Peugeot </strong>avtomobilləri &uuml;&ccedil;&uuml;n optimallaşdırılmış ehtiyat hissələridir.
              <strong>Peugeot </strong>ehtiyat hissələri <strong>Peugeotun</strong> keyfiyyət və etibarlılıq
              standartlarına uyğun istehsal olunur və avtomobillərin rahat işləməsini təmin edir.
            </p>
            <p>
              Bununla belə, <strong>Peugeot </strong>ehtiyat hissələrinin keyfiyyəti istehsal və paylama prosesində
              tətbiq olunan amillərdən və istehsal&ccedil;ının keyfiyyətə nəzarət prosedurlarından asılıdır. &Uuml;mumiyyətlə,
              <strong>Peugeot </strong>ehtiyat hissələri keyfiyyətlidir və avtomobillərin tələblərinə cavab vermək
              &uuml;&ccedil;&uuml;n nəzərdə tutulub.
            </p>
            <p>&nbsp;</p>
            <h2>Orijinal <strong>Peugeot </strong>ehtiyat hissəsini necə m&uuml;əyyən etmək olar?</h2>
            <p>
              Orijinal <strong>Peugeot </strong>ehtiyat hissələri <strong>Peugeot </strong>tərəfindən istehsal olunan
              və rəsmi satış kanalları vasitəsilə satılan hissələrdir. Orijinal hissələr <strong>Peugeot </strong>tərəfindən
              m&uuml;əyyən edilmiş keyfiyyət standartına cavab verməlidir və <strong>Peugeot </strong>zəmanəti ilə əhatə
              olunur.
            </p>
            <p>
              Orijinal <strong>Peugeot </strong>ehtiyat hissələrini m&uuml;əyyən etmək &uuml;&ccedil;&uuml;n aşağıdakı
              &uuml;sullardan istifadə edilə bilər:
            </p>
            <ul>
              <li>
                <strong> Rəsmi </strong><strong>Peugeot </strong><strong>səlahiyyətli servis</strong>:
                <strong>Peugeot </strong>avtomobilləri &uuml;&ccedil;&uuml;n orijinal ehtiyat hissələrini rəsmi <strong>Peugeot </strong>səlahiyyətli
                servis mərkəzlərindən əldə edə bilərsiniz.
              </li>
              <li>
                <strong>Peugeot loqosu</strong><strong>:</strong> Original <strong>Peugeot </strong>ehtiyat
                hissələrində markanın loqosu olur ki, bu da ehtiyat hissənin orijinallığını təyin edir.
              </li>
            </ul>
            <p>
              Orijinal Peugeot ehtiyat hissələrinin m&uuml;əyyən edilməsi avtomobilinizin d&uuml;zg&uuml;n işləməsini
              və zəmanətli olmasını təmin edir. O, həm&ccedil;inin aşağı keyfiyyətli ehtiyat hissələrinin avtomobilin
              performansını aşağı salmasının və daha b&ouml;y&uuml;k problemlər yaratmasının qarşısını alır.
            </p>
            <p>&nbsp;</p>
            <h2>Peugeot ehtiyat hissələri bahadır?</h2>
            <p>
              Peugeot ehtiyat hissələrinin qiyməti hissənin n&ouml;v&uuml;ndən, modelindən, performansından və cari
              bazar qiymətlərindən asılı olaraq dəyişə bilər. Orijinal Peugeot ehtiyat hissələri alternativ ehtiyat
              hissələrindən daha bahalı ola bilər, lakin onlar daha y&uuml;ksək keyfiyyət təklif edir və avtomobilin
              performansını və təhl&uuml;kəsizliyini optimallaşdırmağı hədəfləyir. Alternativ ehtiyat hissələri daha
              sərfəli, lakin keyfiyyətsiz ola bilər və avtomobilin performansına və təhl&uuml;kəsizliyinə mənfi təsir g&ouml;stərə
              bilər.
            </p>
            <p>
              Ehtiyat hissələrini ən uyğun qiymətə əldə etmək &uuml;&ccedil;&uuml;n rəsmi dilerlərə, internetdəki
              e-ticarət saytlarına və ya avtomobiliniz &uuml;&ccedil;&uuml;n ehtiyat hissələri satan digər satıcılara m&uuml;raciət
              edə bilərsiniz. Avtomobilinizin performansını və təhl&uuml;kəsizliyini qoruyacaq sərfəli ehtiyat hissələri
              tapmaq &uuml;&ccedil;&uuml;n qiymətləri m&uuml;qayisə etmək və avtomobilinizə ən uyğun olanı se&ccedil;mək
              t&ouml;vsiyə olunur.
            </p>
            <p>&nbsp;</p>
            <h2><strong>Peugeot </strong>avtomobillərinin əsas problemləri və ehtiyat hissələri</h2>
            <p><strong>Peugeot </strong>avtomobillərinin əsas problemlərindən bəziləri bunlar ola bilər:</p>
            <ul>
              <li>
                <strong>Elektrik sistemi problemləri:</strong> Elektrik sistemi problemləri <strong>Peugeot </strong>avtomobillərində
                &uuml;mumi problem ola bilər. X&uuml;susilə sensorlar, başlıqlar və alternatorlar kimi hissələrdə
                problemlər yarana bilər.
              </li>
              <li>
                <strong>Şassi problemləri:</strong> <strong>Peugeot </strong>avtomobillərində şassi problemləri
                avtomobilin yaşından və istifadə şəkilindən asılı olaraq yarana bilər. Şassi deformasiyaları və
                korroziya kimi problemlər ola bilər.
              </li>
              <li>
                <strong>M&uuml;həndislik problemləri:</strong> <strong>Peugeot </strong>avtomobillərində m&uuml;həndislik
                problemlərinin ola biləcəyi d&uuml;ş&uuml;n&uuml;l&uuml;r. X&uuml;susilə m&uuml;hərrik, s&uuml;rətlər
                qutusu və s&uuml;kan sistemi kimi hissələrdə problemlər ola bilər.
              </li>
            </ul>
            <p>
              Ehtiyat hissələrinə gəlincə, <strong>Peugeot </strong>ehtiyat hissələri orijinal olmalıdır. Avtomobilin
              səmərəliliyini və təhl&uuml;kəsizliyini ən y&uuml;ksək səviyyədə saxlamaq &uuml;&ccedil;&uuml;n orijinal
              <strong>Peugeot </strong>ehtiyat hissələri prioritetdir. Bundan əlavə, <strong>Peugeot </strong>səlahiyyətli
              servislərində və ya <strong>Peugeot </strong>ehtiyat hissələri dilerlərində satılan ehtiyat hissələri
              avtomobil zəmanəti &ccedil;ər&ccedil;ivəsində istifadə edilə bilər.
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
      title: 'Peugeot ehtiyat hissələri | Onlayn mağaza | Otobaza',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Orijinal ehtiyat hissələrini Otobaza saytından və ya Peugeot servis mərkəzlərindən əldə edə bilərsiniz.'
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
