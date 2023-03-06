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
            <h1>İnsanlar niyə Chevrolet avtomobillərinə daha &ccedil;ox &uuml;st&uuml;nl&uuml;k verirlər?</h1>
            <p>Chevrolet avtomobillərinin se&ccedil;imində bir &ccedil;ox amillər ola bilər. Onların arasında:</p>
            <ul>
              <li>
                <strong>Keyfiyyət:</strong> Chevrolet avtomobilləri keyfiyyətli materiallar və standartlara uyğun
                istehsal prosesi ilə istehsal edilir həm&ccedil;inin m&ouml;hkəm konstruksiyaya malikdir.
              </li>
              <li>
                <strong> Performans:</strong> Chevrolet avtomobilləri yaxşı g&uuml;c və s&uuml;rmək performansı, yaxşı
                idarəetmə və manevr qabiliyyəti təklif edir.
              </li>
              <li>
                <strong> Qiymət-performans nisbəti:</strong> Chevrolet avtomobilləri oxşar sinifdə olan digər
                markalarla m&uuml;qayisədə sərfəli və y&uuml;ksək performanslı se&ccedil;im hesab olunur.
              </li>
              <li>
                <strong> Brend imici:</strong> Chevrolet etibarlı və prestijli brend kimi g&ouml;r&uuml;n&uuml;r ki,
                bu da m&uuml;ştərilərin Chevrolet avtomobillərinə &uuml;st&uuml;nl&uuml;k verməsinə səbəb ola bilər.
              </li>
              <li>
                <strong> Prioritet ehtiyaclar:</strong> Chevrolet avtomobilləri m&uuml;xtəlif prioritet ehtiyaclar
                &uuml;&ccedil;&uuml;n m&uuml;xtəlif modellər və se&ccedil;imlər təklif edərək, onları m&uuml;ştərilərin
                se&ccedil;imlərinə uyğun olaraq asanlıqla əldə etmək imkanı verir.
              </li>
            </ul>
            <p>&nbsp;</p>
            <p>
              Bu səbəbləri Chevrolet avtomobillərinə &uuml;st&uuml;nl&uuml;k verən əsas səbəblər kimi g&ouml;stərmək
              olar. Bununla belə, hər kəsin &uuml;st&uuml;nl&uuml;kləri fərqlidir və Chevrolet avtomobillərini se&ccedil;məyin
              səbəbləri şəxsi istəklərdən, ehtiyaclardan və g&ouml;zləntilərdən asılıdır.
            </p>
            <p>&nbsp;</p>
            <h2>Chevrolet ehtiyat hissələri keyfiyyətlidirmi?</h2>
            <p>
              Chevrolet ehtiyat hissələrinin keyfiyyəti bir ne&ccedil;ə amildən asılıdır. &Uuml;mumiyyətlə, orijinal
              Chevrolet ehtiyat hissələri avtomobilin istehsal&ccedil;ısı tərəfindən istehsal olunur və yaxşı keyfiyyət
              standartına cavab vermək &uuml;&ccedil;&uuml;n hazırlanmışdır, buna g&ouml;rə də y&uuml;ksək keyfiyyət
              səviyyəsi g&ouml;zləmək olar. Lakin bazarda olan b&uuml;t&uuml;n ehtiyat hissələrinin original istehsal
              olmasına zəmanət vermək olmaz, bəzi ehtiyat hissələri isə keyfiyyətsiz materiallardan istehsal olunduğu
              &uuml;&ccedil;&uuml;n keyfiyyətsiz ola bilər. Buna g&ouml;rə də Chevrolet ehtiyat hissələrinin
              keyfiyyətini təmin etmək &uuml;&ccedil;&uuml;n yalnız orijinal Chevrolet ehtiyat hissələri almaq t&ouml;vsiyə
              olunur.
            </p>
            <p>&nbsp;</p>
            <h2>Orijinal Chevrolet ehtiyat hissəsini necə m&uuml;əyyən etmək olar?</h2>
            <p>
              Orijinal Chevrolet ehtiyat hissələri Chevrolet tərəfindən istehsal olunan və rəsmi satış kanalları
              vasitəsilə satılan hissələrdir. Orijinal hissələr Chevrolet tərəfindən m&uuml;əyyən edilmiş keyfiyyət
              standartına cavab verməlidir və Chevrolet zəmanəti ilə əhatə olunur.
            </p>
            <p>
              Orijinal Chevrolet ehtiyat hissələrini m&uuml;əyyən etmək &uuml;&ccedil;&uuml;n aşağıdakı &uuml;sullardan
              istifadə edilə bilər:
            </p>
            <p>&nbsp;</p>
            <ul>
              <li>
                <strong> Rəsmi Chevrolet səlahiyyətli servis</strong>: Chevrolet avtomobilləri &uuml;&ccedil;&uuml;n
                orijinal ehtiyat hissələrini rəsmi Chevrolet səlahiyyətli servis mərkəzlərindən əldə edə bilərsiniz.
              </li>
            </ul>
            <ul>
              <li>
                <strong> Chevrolet veb-saytı:</strong> Orijinal Chevrolet ehtiyat hissələrinin satıldığı səlahiyyətli
                dilerlərin siyahısını Chevrolet-in rəsmi saytında tapa bilərsiniz.
              </li>
              <li>
                <strong> Lot n&ouml;mrəsi:</strong> Chevrolet ehtiyat hissələri unikal lot n&ouml;mrəsi ilə m&uuml;əyyən
                edilir. Original Chevrolet ehtiyat hissələrinin lot n&ouml;mrələri Chevrolet tərəfindən verilir və
                Chevrolet rəsmi dilerləri tərəfindən yoxlanılır.
              </li>
            </ul>
            <p>
              Orijinal Chevrolet ehtiyat hissələrinin m&uuml;əyyən edilməsi avtomobilinizin d&uuml;zg&uuml;n işləməsini
              və zəmanətli olmasını təmin edir. O, həm&ccedil;inin aşağı keyfiyyətli ehtiyat hissələrinin avtomobilin
              performansını aşağı salmasının və daha b&ouml;y&uuml;k problemlər yaratmasının qarşısını alır.
            </p>
            <p>&nbsp;</p>
            <h2>Chevrolet ehtiyat hissələri bahadırmı?</h2>
            <p>
              Chevrolet ehtiyat hissələrinin qiymətləri hissənin n&ouml;v&uuml;ndən, konstruksiyasından və
              performansından asılı olaraq dəyişə bilər. Bəzi ehtiyat hissələri digərlərindən daha bahalı ola bilər,
              lakin &ccedil;ox vaxt orijinal Chevrolet ehtiyat hissələri daha ucuz alternativ ehtiyat hissələrinə
              nisbətən daha baha olur. Bu, daha y&uuml;ksək keyfiyyətli materiallardan və iş&ccedil;ilikdən istifadə ilə
              izah edilə bilər.
            </p>
            <p>
              Eyni zamanda, Chevrolet ehtiyat hissələrinin qiymətləri də onların harada satılmasından və bazar
              şəraitindən asılıdır. Chevrolet ehtiyat hissələrinin rəsmi Chevrolet dilerlərindən və ya digər rəsmi satış
              kanallarından alınması qiymətlərin bahalaşması riskini azalda bilər.
            </p>
            <p>&nbsp;</p>
            <h2>Chevrolet avtomobillərinin əsas problemləri və ehtiyat hissələri</h2>
            <p>
              Chevrolet avtomobillərinin m&ouml;vcud problemləri modelə, ilinə və istehsal prosesinə g&ouml;rə dəyişə
              bilər. &Uuml;mumiyyətlə, Chevrolet avtomobillərinin bəzi &uuml;mumi problemləri həddindən artıq temperatur
              və r&uuml;tubətlilik, elektrik sistemi, əyləc sistemi və m&uuml;hərrik kimi mexaniki sistemlərlə bağlı ola
              bilər.
            </p>
            <p>
              Bu problemləri həll etmək &uuml;&ccedil;&uuml;n orijinal Chevrolet ehtiyat hissələrindən istifadə etmək t&ouml;vsiyə
              olunur. Orijinal Chevrolet ehtiyat hissələri avtomobillərin performansını və təhl&uuml;kəsizliyini qoruyan
              və zəmanət altına alan ehtiyat hissələridir. Orijinal Chevrolet ehtiyat hissələrinin m&ouml;vcudluğuna
              səlahiyyətli Chevrolet dilerləri və ya digər rəsmi satış kanalları vasitəsilə zəmanət verilir.
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
      title: 'Chevrolet ehtiyat hissələri | Onlayn mağaza | Otobaza',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Orijinal ehtiyat hissələrini Otobaza saytından və ya Chevrolet servis mərkəzlərindən əldə edə bilərsiniz.'
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
