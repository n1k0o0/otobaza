<template>
  <div class="container">
    <div class="mcontainer">
      <div class="response-message about-title">
        <div class="mkub mkubsuccess aboutbg"></div>
        <div class="rminfo">
          <h2 class="rmtt">
            {{ $t('tariffs') }}
          </h2>
          <p class="rmtxt">
            {{ $t('tariffs_desc') }}
          </p>
        </div>
      </div>
      <div class="about-section">
        <div class="row">
          <div class="col-12 col-sm-12 col-md-12">
            <div class="about-info">
              <h3 class="about-tt">
                {{ $t('plans_title') }}
              </h3>
              <div v-if="!$fetchState.pending" class="rate-price">
                <div class="slidecontainer">
                  <form action="">
                    <div class="range-control">
                      <input
                        id="inputRange"
                        ref="rangeInput"
                        v-model.number="val"
                        data-thumbwidth="20"
                        :max="packages.length"
                        min="1"
                        step="1"
                        type="range"
                        @input="onInput"
                      />
                      <output class="price-output" name="rangeVal">
                        <span class="price-month">{{ price }}</span>
                        <p class="main-price">
                          <span>{{ limit }}</span>
                          <small>{{ $t('product') }}</small>
                        </p>
                      </output>
                    </div>
                  </form>
                </div>

                <div class="rate-buttons">
                  <button
                    v-for="(p,i) in packages"
                    :key="i"
                    class="bg-new-light"
                    type="button"
                    @click.prevent="setPackage(i)"
                  >
                    <span>
                      <span>{{ p.name }}</span>
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="about-items tariff-items">
        <div class="container">
          <div class="row">
            <div class="col-12 col-sm-12">
              <h3 class="about-tt">
                {{ $t('plans_info') }}
              </h3>
            </div>
          </div>
          <div class="row abitems">
            <div
              v-for="(item,i) in $t('plans')"
              :key="i"
              class="col-12 col-sm-12 col-md-12 col-lg-4"
            >
              <div class="abitem">
                <div class="abnumber">
                  {{ i+1 }}.
                </div>
                <div class="abitem-details">
                  <h4 class="about-tt">
                    {{ item.title }}
                  </h4>
                  <div class="about-txt">
                    {{ item.desc }}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { useFriendlyError } from '@/utils'
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'Tariffs',
  layout: 'pages',
  async fetch () {
    this.packages = await this.GET_SELLER_PACKAGES({
      currency: this.geo?.currency_name
    }).catch(error => {
      useFriendlyError(error)
    })
  },
  data () {
    return {
      val: 1,
      packages: []
    }
  },
  computed: {
    ...mapGetters({
      geo: 'UI/geo'
    }),
    price () {
      const price = this?.packages[this.val - 1]?.price
      const currency = this?.packages[this.val - 1]?.currency_code
      return price === 0 ? this.$t('free') : `${price} ${currency}` + ' / ' + this.$t('month')
    },
    limit () {
      return this?.packages[this.val - 1]?.limit
    }
  },
  watch: {
    'geo.currency_name' () {
      this.$fetch()
    }
  },
  mounted () {
    this.onInput()
  },
  methods: {
    ...mapActions({
      GET_SELLER_PACKAGES: 'User/GET_SELLER_PACKAGES'
    }),
    setPackage (i) {
      this.val = i + 1
      this.onInput()
    },
    onInput () {
      // eslint-disable-next-line no-undef
      const control = $('.rate-price input[type="range"]')
      const controlMin = control.attr('min')
      const controlMax = control.attr('max')
      const controlVal = this.val
      const controlThumbWidth = control.data('thumbwidth')
      const range = controlMax - controlMin
      const position = ((controlVal - controlMin) / range) * 100
      const positionOffset = Math.round(controlThumbWidth * position / 100) - (controlThumbWidth / 2)
      const output = control.next('output')
      output.css('left', 'calc(' + position + '% - ' + positionOffset + 'px)')
    }
  }
}
</script>
