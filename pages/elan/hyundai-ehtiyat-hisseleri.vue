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
            <h1>İnsanlar niyə daha &ccedil;ox Hyundai avtomobillərinə &uuml;st&uuml;nl&uuml;k verirlər?</h1>
            <p>
              Hyundai avtomobillərinə daha &ccedil;ox &uuml;st&uuml;nl&uuml;k verilir, &ccedil;&uuml;nki onlar sərfəli
              qiymət, yaxşı performans və keyfiyyətli məhsul təklif edirlər. Bundan əlavə, Hyundai avtomobillərinin
              zəmanəti və satışdan sonrakı xidmətləri də kifayət qədər yaxşı hesab olunur. Bunlar Hyundai
              avtomobillərinə &uuml;st&uuml;nl&uuml;k verən amillərdən bir ne&ccedil;əsidir.
            </p>
            <p>&nbsp;</p>
            <h2>Hyundai ehtiyat hissələri keyfiyyətlidir?</h2>
            <p>
              Hyundai keyfiyyətli ehtiyat hissələri təmin etməyi hədəfləyir. Bununla belə, ehtiyat hissələrinin
              keyfiyyətinə həmişə 100% zəmanət verilə bilməz və m&uuml;xtəlif təchizat&ccedil;ılar tərəfindən istehsal
              olunan ehtiyat hissələri arasında keyfiyyət fərqləri ola bilər. Hyundai orijinal ehtiyat hissələrinə
              zəmanət verməyə &ccedil;alışır və bu hissələr avtomobilin performansını optimallaşdırmaq və uzun &ouml;m&uuml;rl&uuml;
              etmək &uuml;&ccedil;&uuml;n nəzərdə tutulub.
            </p>
            <p>&nbsp;</p>
            <h2>Orijinal Hyundai ehtiyat hissəsini necə m&uuml;əyyən etmək olar?</h2>
            <p>
              Orijinal Hyundai ehtiyat hissələri Hyundai və ya onun icazə verdiyi təchizat&ccedil;ılar tərəfindən
              istehsal olunur. Orijinal Hyundai ehtiyat hissələri avtomobilin seriya n&ouml;mrəsi, modeli və istehsal
              tarixi kimi məlumatlarla m&uuml;əyyən edilir. Bundan əlavə, orijinal ehtiyat hissələri Hyundai loqosu,
              barkod və ya x&uuml;susi marka ilə qeyd olunur. Səlahiyyətli Hyundai servis mərkəzləri orijinal ehtiyat
              hissələrini m&uuml;əyyən etmək &uuml;&ccedil;&uuml;n avtomobilin qeydiyyat məlumatlarından istifadə edir
              və bu hissələr Hyundai tərəfindən m&uuml;əyyən edilmiş keyfiyyət standartlarına uyğun istehsal olunur.
            </p>
            <p>&nbsp;</p>
            <h2>Hyundai ehtiyat hissələri bahadırmı?</h2>
            <p>
              Hyundai ehtiyat hissələrinin qiymətləri avtomobilin modelindən, istehsal tarixindən, ehtiyat hissəsinin n&ouml;v&uuml;ndən
              və təchizat&ccedil;ının qiymət siyasətindən asılı olaraq dəyişə bilər. Bəzi orijinal Hyundai ehtiyat
              hissələri digər alternativ ehtiyat hissələri ilə m&uuml;qayisədə daha bahalı ola bilər, lakin bu daha y&uuml;ksək
              keyfiyyət və uzun&ouml;m&uuml;rl&uuml; zəmanət deməkdir. Həm&ccedil;inin orijinal ehtiyat hissələri
              avtomobilin təhl&uuml;kəsizliyini və performansını optimallaşdırmaq &uuml;&ccedil;&uuml;n nəzərdə
              tutulduğundan, daha bahalı olsa belə, avtomobilin uzunm&uuml;ddətli performansını qorumaq baxımından
              onlara &uuml;st&uuml;nl&uuml;k verilə bilər.
            </p>
            <p>&nbsp;</p>
            <h2>Hyundai avtomobillərinin əsas problemləri və ehtiyat hissələri?</h2>
            <p>
              Hyundai avtomobilləri ilə bağlı tez-tez bildirilən problemlərə elektrik sistemi problemləri, enerji
              &ouml;t&uuml;r&uuml;lməsi problemləri, enerji təchizatı problemləri və əyləc sistemindəki problemlər daxil
              ola bilər. Bununla belə, hər bir Hyundai avtomobilində bu problemlərlə qarşılaşma ehtimalı həmişə olmur və
              bu problemlər fərqli model və illərə g&ouml;rə dəyişə bilər.
            </p>
            <p>
              Orijinal Hyundai ehtiyat hissələri Hyundai tərəfindən təsdiqlənmiş təchizat&ccedil;ılar tərəfindən təmin
              edilir və keyfiyyətinə g&ouml;rə etibarlıdır. Bununla belə, daha ucuz alternativ Hyundai ehtiyat hissələri
              də ola bilər və performans və təhl&uuml;kəsizlik baxımından orijinal hissələrdən daha aşağı keyfiyyətə
              sahib ola bilər. Avtomobilinizin problemlərini tam başa d&uuml;şmək və ən uyğun ehtiyat hissələrini m&uuml;əyyən
              etmək &uuml;&ccedil;&uuml;n səlahiyyətli Hyundai servis mərkəzi ilə əlaqə saxlamağınız t&ouml;vsiyə
              olunur.
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
      title: 'Hyundai ehtiyat hissələri | Onlayn mağaza | Otobaza',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Orijinal ehtiyat hissələrini Otobaza saytından və Hyundai servis mərkəzlərindən əldə edə bilərsiniz.'
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
