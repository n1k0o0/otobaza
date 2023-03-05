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
              <strong>İnsanlar niyə daha &ccedil;ox Acura avtomobillərinə &uuml;st&uuml;nl&uuml;k verirlər?</strong>
            </h1>
            <p>
              Acura avtomobillərinə &uuml;st&uuml;nl&uuml;k verilməsinin bir &ccedil;ox səbəbi var, lakin ən &uuml;mumi
              olanlar bunlardır:
            </p>
            <ul>
              <li>
                <strong>Keyfiyyət:</strong> Acura avtomobilləri Honda şirkətinin premium brendi kimi dizayn və
                istehsal edilir, buna g&ouml;rə də y&uuml;ksək keyfiyyətli materiallardan istifadə olunur.
              </li>
              <li>
                <strong>Performans:</strong> Acura avtomobilləri Honda-nın g&uuml;cl&uuml; və səmərəli m&uuml;hərrikləri
                ilə təchiz olunub və s&uuml;r&uuml;c&uuml;l&uuml;k təcr&uuml;bəsi &uuml;&ccedil;&uuml;n ən yaxşı
                texnologiyalardan istifadə edilir
              </li>
              <li>
                <strong>Texnologiya:</strong> Acura avtomobilləri s&uuml;r&uuml;c&uuml;lərə daha rahat və təhl&uuml;kəsiz
                s&uuml;r&uuml;c&uuml;l&uuml;k təcr&uuml;bəsini təmin edən ən son texnologiyaları &ouml;z&uuml;ndə
                birləşdirən unikal və qabaqcıl texnoloji x&uuml;susiyyətlərə malikdir.
              </li>
              <li>
                <strong>Dizayn:</strong> Acura avtomobilləri idman və g&ouml;zəl dizaynları ilə diqqəti cəlb edir və
                &ccedil;oxları tərəfindən heyran qalınır.
              </li>
            </ul>
            <p>
              Bu səbəblərin hamısı və ya bir ne&ccedil;əsi Acura avtomobillərinə &uuml;st&uuml;nl&uuml;k verilməsinə
              səbəb ola bilər, lakin hər kəsin fərdi se&ccedil;imi onların şəxsi &uuml;st&uuml;nl&uuml;kləri,
              ehtiyacları və b&uuml;dcələrinə g&ouml;rə dəyişə bilər.
            </p>
            <p>&nbsp;</p>
            <h2><strong>Acura ehtiyat hissələri keyfiyyətlidirmi?</strong></h2>
            <p>
              Bəli, Acura ehtiyat hissələri &uuml;mumiyyətlə y&uuml;ksək keyfiyyətlidir və Honda şirkəti tərəfindən
              zəmanət verilir. Acura ehtiyat hissələri orijinal avadanlıq keyfiyyəti ilə istehsal olunur və avtomobilin
              performansını, səmərəliliyini və təhl&uuml;kəsizliyini qoruyur. Bununla belə, Acura ehtiyat hissələrinin
              keyfiyyəti istehsal&ccedil;ıdan istehsal&ccedil;ıya və ya ehtiyat hissəsinə g&ouml;rə dəyişə bilər, ona g&ouml;rə
              də orijinal Acura ehtiyat hissələrinə &uuml;st&uuml;nl&uuml;k vermək daha yaxşıdır.
            </p>
            <h2><strong>Orijinal Acura ehtiyat hissəsini necə m&uuml;əyyən etmək olar?</strong></h2>
            <p>
              <strong>Orijinal Acura ehtiyat hissələrini</strong> Acura səlahiyyətli servis mərkəzlərindən və ya Acura
              rəsmi dilerlərindən əldə edə bilərsiniz. Bu ehtiyat hissələri orijinal avadanlıq keyfiyyətinə uyğun
              istehsal olunur və Acura tərəfindən zəmanət verilir. Bundan əlavə, orijinal <strong>Acura ehtiyat
                hissələri</strong>, avtomobilin seriya n&ouml;mrəsi və ya model ili kimi məlumatlara əsaslanaraq d&uuml;zg&uuml;n
              ehtiyat hissəni m&uuml;əyyən etmək &uuml;&ccedil;&uuml;n istifadə edilə bilər.
            </p>
            <p>
              Hər hansı bir sualınız və ya narahatlığınız olduqda, Acura səlahiyyətli servislərindən və ya Acura rəsmi
              dilerlərindən dəstək ala bilərsiniz və orijinal <strong>Acura ehtiyat hissələrinin</strong> d&uuml;zg&uuml;nl&uuml;y&uuml;nə
              əmin ola bilərsiniz.
            </p>
            <p>&nbsp;</p>
            <h2><strong>Acura ehtiyat hissələri bahadırmı?</strong></h2>
            <p>
              <strong>Acura ehtiyat hissələrinin</strong> qiymətləri digər premium brendlərin <strong>ehtiyat
                hissələrin </strong>ilə eyni və ya bir qədər y&uuml;ksək ola bilər. Bununla belə, avtomobilin
              səmərəliliyini və təhl&uuml;kəsizliyini qorumaq &uuml;&ccedil;&uuml;n ehtiyat hissələrinin keyfiyyətinə və
              performansına zəmanət verilir ki, bu da uzun m&uuml;ddətdə daha ucuz ola bilər. Həm&ccedil;inin, orijinal
              <strong>Acura ehtiyat hissələri</strong> digər alternativ ehtiyat hissələri ilə m&uuml;qayisədə daha uzun
              &ouml;m&uuml;rl&uuml; ola bilər və avtomobilin performansını qoruyan daha təhl&uuml;kəsiz se&ccedil;im
              təqdim edir.
            </p>
            <p>
              Hər kəs &uuml;&ccedil;&uuml;n ən uyğun variant fərqli ola bilər və fərdi &uuml;st&uuml;nl&uuml;klərə,
              ehtiyaclara və b&uuml;dcələrə g&ouml;rə dəyişə bilər. Acura ehtiyat hissələrinin qiymətlərini m&uuml;qayisə
              etmək və avtomobiliniz &uuml;&ccedil;&uuml;n ən uyğununu se&ccedil;mək &uuml;&ccedil;&uuml;n səlahiyyətli
              servis mərkəzlərindən və ya dilerlərdən dəstək almaq daha yaxşıdır.
            </p>
            <p>&nbsp;</p>
            <h2><strong>Acura avtomobillərinin əsas problemləri və ehtiyat hissələri?</strong></h2>
            <p>
              Hər bir avtomobil markası və modelində &uuml;mumi problemlər və lazım olan <strong>ehtiyat
                hissələr</strong>i ola bilər. Bununla belə, Acura avtomobilləri &uuml;mumiyyətlə keyfiyyətli və təhl&uuml;kəsiz
              olmaq &uuml;&ccedil;&uuml;n nəzərdə tutulduğundan problemləri &ccedil;ox nadirdir.
            </p>
            <p>
              Bəzi Acura modelləri ilə bağlı tez-tez bildirilən problemlərə elektrik sistemi problemləri, qapı kilidi
              və ya a&ccedil;ar problemləri, smart toqquşma sistemi problemləri və &ouml;t&uuml;rmə problemləri daxil
              ola bilər. Bununla əlaqədar olaraq, orijinal Acura ehtiyat hissələri və səlahiyyətli dilerlər tərəfindən
              edilən d&uuml;zg&uuml;n təmir, avtomobilin performansını və təhl&uuml;kəsizliyini qoruyacaq.
            </p>
            <p>
              Hər bir avtomobil modeli &uuml;&ccedil;&uuml;n tələb olunan <strong>ehtiyat hissələri</strong> fərqli ola
              bilər, lakin ən &ccedil;ox tələb olunan ehtiyat hissələrinə əyləc diskləri, amortizatorlar, təkərlər,
              akkumulyatorlar və filtrlər daxil ola bilər. Avtomobilin işini və səmərəliliyini qorumaq &uuml;&ccedil;&uuml;n
              bu <strong>ehtiyat hissələri</strong> vaxtında dəyişdirilməlidir.
            </p>
            <p>
              Ən yaxşı nəticələr əldə etmək &uuml;&ccedil;&uuml;n Acura avtomobilinizi vaxtaşırı olaraq səlahiyyətli
              servis mərkəzlərində yoxlatmaq və orijinal <strong>Acura ehtiyat hissələrindən</strong> istifadə etməyiniz
              t&ouml;vsiyə olunur.
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
      title: 'Acura ehtiyat hissələri | Onlayn mağaza | Otobaza',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Orijinal ehtiyat hissələrini Otobaza saytından və ya Acura servis mərkəzlərindən əldə edə bilərsiniz.'
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
