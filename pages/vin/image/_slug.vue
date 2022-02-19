<template lang="pug">
  div
    template(v-if="$fetchState.pending")
      PartsPlaceholder
    template(v-else-if="$fetchState.error")
      .container
        .mcontainer.mh60vh
          .response-message
            .mkub.mkubfail
            .rminfo
              h4.rmtt {{ $t('not_found') }}
              p.rmtxt {{ $t('not_found_info') }}
              h1 {{$fetchState}}
    template(v-else)
      div
        .container
          .mcontainer.mh40vh
            .oem_image
              .oem_code_image#codeImage
                img(:src="parts['image']['largeimageurl'].replace('%size%','source')" style="width:500;height:500")
                //p {{parts['image']['name']}}

              .oem_image_name
                table.table.w-auto.table-bordered.oem_table
                  thead
                    tr.table-row
                      th OEM
                      th Name
                  tbody
                    tr.table-row(v-for="part in parts['oem']" :ref="part['@attributes']['codeonimage']"
                      @click="selectOem(part['@attributes']['codeonimage'])"
                      @mouseover="mouseoverOem(part['@attributes']['codeonimage'])"
                      @mouseout="mouseoutOem(part['@attributes']['codeonimage'])")
                      td {{part['@attributes']['oem']}}
                      td {{part['@attributes']['name']}}
</template>
<script>
import Parts from '~/components/Catalog/Parts'
import PartsPlaceholder from '~/components/Placeholders/PartsPlaceholder'
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'VinOem',
  watchQuery: true,
  components: { PartsPlaceholder, Parts },
  layout: 'pages',
  scrollToTop: true,
  async fetch () {
    const param = this.$route.params.slug.split('____')
    let data = {
      'catalog': param[0],
      'UnitId': param[1],
      'ssd': param[2],
      'language': this.$i18n.locales.find(el => el.code === this.$i18n.locale).iso.replace('-', '_'),
    }
    await this.GET_OEM_BY_IMAGE(data)
  },
  computed: {
    ...mapGetters({
      geo: 'UI/geo',
      parts: 'Catalog/vin_parts',
      car_assemblies_brand: 'Catalog/car_assemblies_brand'
    }),
    meta () {
      return [
        { charset: 'utf-8' },
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1, maximum-scale=1 shrink-to-fit=no'
        },
        {
          hid: 'description',
          name: 'description',
          content: this.$store.getters['Catalog/parts']?.brand?.meta_desc || ''
        },
        { hid: 'og:title', name: 'og:title', content: this.$store.getters['Catalog/parts']?.brand?.meta_title || '' }
      ]
    }
  },
  // async validate ({ params, error, app }) {
  //   console.log('validate111', params)
  //   const regex = /^([0-9]+)/
  //   if (!(regex.test(params.oem))) {
  //     console.log('xeta')
  //     return error({ statusCode: 500, message: app.i18n.t('not_found') })
  //   } else {
  //     return true
  //   }
  // },
  watch: {
    geo: {
      deep: true,
      handler () {
        this.$fetch()
      }
    }
  },
  methods: {
    ...mapActions({
      GET_OEM_BY_IMAGE: 'Catalog/GET_OEM_BY_IMAGE'
    }),
    goToOem (attributes) {
      // window.location.href = this.localePath({
      //   name: 'vin-image',
      //   params: {
      //     slug: `${car.modelId}-${Slugify(car.modelName)}`
      //   }
      // })
    },
    selectOem (code) {
      this.$refs[code][0]?.classList?.toggle('active_oem')
      if (this.$refs[code][0]?.classList?.contains('active_oem')) {
        document.getElementById(`${code}_code`)?.classList.add('active_code')
      } else {
        document.getElementById(`${code}_code`)?.classList.remove('active_code')
      }
    },
    mouseoverOem (code) {
      document.getElementById(`${code}_code`)?.classList?.add('active_code')
    },
    mouseoutOem (code) {
      if (!this.$refs[code][0]?.classList?.contains('active_oem')) {
        document.getElementById(`${code}_code`)?.classList?.remove('active_code')
      }
    }
  },
  mounted () {
    const _this = this
    setTimeout(() => {
      this.parts['codes'].forEach(e => {
        let code = e['@attributes']
        let width = code['x2'] - code['x1']
        let height = code['y2'] - code['y1']
        let elem = document.createElement('div')
        elem.setAttribute('id', `${code['code']}_code`)
        elem.style.cssText = `position:absolute;left:${+code['x1']}px;top:${code['y1']}px;width:${width}px;height:${height}px;z-index:100;background:transparent`
        elem.onclick = function (e) {
          _this.$refs[code['code']][0].classList.toggle('active_oem')
          e.target.classList.toggle('active_code')
        }

        document.getElementById('codeImage').appendChild(elem)
      })
      const slider = document.getElementById('codeImage')
      let isDown = false
      let startX
      let startY
      let scrollLeft
      let scrollTop

      slider.addEventListener('mousedown', e => {
        isDown = true
        slider.classList.add('active')
        startX = e.pageX - slider.offsetLeft
        startY = e.pageY - slider.offsetTop
        scrollLeft = slider.scrollLeft
        scrollTop = slider.scrollTop
      })
      slider.addEventListener('mouseleave', () => {
        isDown = false
        slider.classList.remove('active')
      })
      slider.addEventListener('mouseup', () => {
        isDown = false
        slider.classList.remove('active')
      })
      slider.addEventListener('mousemove', e => {
        if (!isDown) return
        e.preventDefault()
        const x = e.pageX - slider.offsetLeft
        const y = e.pageY - slider.offsetTop
        const walk = x - startX
        const walkY = y - startY
        slider.scrollLeft = scrollLeft - walk
        slider.scrollTop = scrollTop - walkY
      })
    }, 1000)

  }
}
</script>
<style lang="scss" scoped>
.Loading {
  margin-top: 90px;
  margin-bottom: 60px;
  border-radius: 3px;
  background-color: #fff;
}

.oem_image {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 10px;

  &_name {
    justify-self: center;
  }
}

@media screen and (max-width: 992px) {
  .oem_image {
    grid-template-columns: 1fr;
  }
}

</style>
