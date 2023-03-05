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
            <h1>İnsanlar niyə Land Rover avtomobillərinə daha &ccedil;ox &uuml;st&uuml;nl&uuml;k verirlər?</h1>
            <p>
              Land Rover avtomobilləri g&uuml;cl&uuml; və off-road yəni yolsuzluq performansı, dəbdəbəli və rahat
              interyer dizaynı və y&uuml;ksək təhl&uuml;kəsizlik x&uuml;susiyyətləri ilə &ccedil;ox məşhurdur. Bundan
              əlavə, brendin uzun tarixi, d&uuml;nya miqyasında tanınması və etibarlılığı da insanların Land Rover
              avtomobillərinə &uuml;st&uuml;nl&uuml;k verməsinə səbəb ola bilər. Land Rover həm də davamlı texnoloji
              yenilikləri və təkmilləşdirmələri ilə se&ccedil;ilən bir markadır.
            </p>
            <p>&nbsp;</p>
            <h2>Land Rover ehtiyat hissələri keyfiyyətlidirmi?</h2>
            <p>
              Land Rover, ehtiyat hissələrinin keyfiyyətini və uyğunluğunu təmin etmək &uuml;&ccedil;&uuml;n ciddi
              keyfiyyət yoxlamaları və sınaqlar həyata ke&ccedil;irir. Orijinal Land Rover ehtiyat hissələri avtomobilin
              performansını və təhl&uuml;kəsizliyini artırmaq &uuml;&ccedil;&uuml;n nəzərdə tutulmuş və istehsal
              edilmişdir. Bununla belə, ehtiyat hissələrinin qiymətləri marka və modelə g&ouml;rə dəyişə bilər və
              orijinal hissələr &ccedil;ox vaxt digər alternativ ehtiyat hissələri ilə m&uuml;qayisədə daha baha
              olur.
            </p>
            <p>&nbsp;</p>
            <h2>Orijinal Land Rover ehtiyat hissəsini necə m&uuml;əyyən etmək olar?</h2>
            <p>
              Orijinal Land Rover ehtiyat hissələri avtomobilin seriya n&ouml;mrəsi, modeli və istehsal ili kimi
              məlumatlardan istifadə etməklə m&uuml;əyyən edilir. Land Rover sizə orijinal ehtiyat hissələrini yalnız
              səlahiyyətli dilerlərdən və xidmət mərkəzlərindən əldə etməyi t&ouml;vsiyə edir. Orijinal ehtiyat
              hissələri avtomobil istehsal&ccedil;ısı tərəfindən m&uuml;əyyən edilmiş keyfiyyət standartlarına uyğun
              olmaq və avtomobilin performansını və təhl&uuml;kəsizliyini optimallaşdırmaq &uuml;&ccedil;&uuml;n nəzərdə
              tutulmuşdur. Alternativ ehtiyat hissələrindən fərqli olaraq, orijinal ehtiyat hissələri avtomobil istehsal&ccedil;ısı
              tərəfindən m&uuml;əyyən edilmiş zəmanət meyarlarına uyğun hazırlanır və avtomobil istehsal&ccedil;ısı
              tərəfindən verilən zəmanətə təsir g&ouml;stərmir.
            </p>
            <p>&nbsp;</p>
            <h2>Land Rover ehtiyyat hissələri bahadırmı?</h2>
            <p>
              Land Rover ehtiyat hissələri, digər premium SUV markalarının ehtiyat hissələrinə nisbətən orta hesabla
              daha bahalı ola bilər. Bununla belə, orijinal Land Rover ehtiyat hissələri avtomobilin performansını və
              təhl&uuml;kəsizliyini optimallaşdırmaq &uuml;&ccedil;&uuml;n nəzərdə tutulub və &uuml;mumiyyətlə daha
              uzunm&uuml;ddətli və davamlıdır. Həm&ccedil;inin, alternativ ehtiyat hissələrindən fərqli olaraq, orijinal
              Land Rover ehtiyat hissələri avtomobil istehsal&ccedil;ısı tərəfindən verilən zəmanətə təsir g&ouml;stərmir.
              Buna g&ouml;rə də, daha bahalı ehtiyat hissələri avtomobilin performansını və təhl&uuml;kəsizliyini
              qoruyan bir investisiya kimi qəbul edilməlidir.
            </p>
            <p>&nbsp;</p>
            <h2>Land Rover avtomobillərinin əsas problemləri və ehtiyat hissələri?</h2>
            <p>
              Land Rover avtomobilləri ilə bağlı bəzi &uuml;mumi problemlərə elektron sistem xətaları, yanacaq nasosu
              problemləri, su filtrləmə problemləri, balans və əyləc sistemindəki problemlər daxildir. Bu problemlər
              avtomobilin yaşından, istifadəsindən və texniki xidmətdən asılı olaraq dəyişə bilər.
            </p>
            <p>
              Orijinal Land Rover ehtiyat hissələri avtomobil istehsal&ccedil;ısı tərəfindən sınaqdan ke&ccedil;irilmiş
              və təsdiqlənmişdir və avtomobilin performansını və təhl&uuml;kəsizliyini optimallaşdırmaq &uuml;&ccedil;&uuml;n
              nəzərdə tutulduğundan y&uuml;ksək keyfiyyətlidir. Bununla belə, Land Rover ehtiyat hissələri bahalı ola
              bilər və bəzən tapmaq &ccedil;ətindir. Alternativ Land Rover ehtiyat hissələri də m&ouml;vcuddur, lakin bu
              hissələrin keyfiyyəti və uyğunluğu orijinal hissələrdən aşağı ola bilər.
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
      title: 'Land Rover ehtiyat hissələri | Onlayn mağaza | Otobaza',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Orijinal ehtiyat hissələrini Otobaza saytından və ya Land Rover servis mərkəzlərindən əldə edə bilərsiniz.'
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
