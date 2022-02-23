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
            .oem_image#oem_image
              .oem_code_image#codeImage
                img(:src="parts['image']['largeimageurl'].replace('%size%','source')" id='imagePart' style="cursor:default;width:100%")
                span.zoom_btn(@click="openImage")
                //p {{parts['image']['name']}}

              .oem_image_name
                table.table.w-auto.table-bordered.oem_table
                  thead
                    tr.table-row
                      th OEM
                      th Name
                  tbody
                    tr.table-row(v-for="part in parts['oem'].filter(el=>el['@attributes'].codeonimage)" :ref="part['@attributes']['codeonimage']"
                      @click="selectOem(part['@attributes']['codeonimage'])"
                      @mouseover="mouseoverOem(part['@attributes']['codeonimage'])"
                      @mouseout="mouseoutOem(part['@attributes']['codeonimage'])")
                      td(@click="goToParts(part['@attributes']['oem'])" class="link") {{part['@attributes']['oem']}}
                      td {{part['@attributes']['name']}}
</template>
<script>
/* eslint-disable security/detect-object-injection */
import Parts from '~/components/Catalog/Parts'
import PartsPlaceholder from '~/components/Placeholders/PartsPlaceholder'
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'VinOem',
  watchQuery: true,
  components: {
    PartsPlaceholder,
    Parts
  },
  middleware: 'authorized',
  layout: 'pages',
  scrollToTop: true,
  async fetch () {
    const param = this.$route.params.slug.split('____')
    const data = {
      catalog: param[0],
      UnitId: param[1],
      ssd: param[2],
      language: this.$i18n.locales.find(el => el.code === this.$i18n.locale).iso.replace('-', '_')
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
        {
          hid: 'og:title',
          name: 'og:title',
          content: this.$store.getters['Catalog/parts']?.brand?.meta_title || ''
        }
      ]
    }
  },
  async validate ({
    params,
    error,
    app
  }) {
    const param = params.slug.split('____')
    if (param.length !== 3) {
      return error({
        statusCode: 500,
        message: app.i18n.t('not_found')
      })
    } else {
      return true
    }
  },
  watch: {
    geo: {
      deep: true,
      handler () {
        this.$fetch()
      }
    }
  },
  mounted () {
    const _this = this
    setTimeout(() => {
      const imgWidth = document.getElementById('imagePart').naturalWidth
      const imgHeight = document.getElementById('imagePart').naturalHeight
      this.parts.codes.forEach(e => {
        const code = e['@attributes']
        const left = (100 * code.x1) / imgWidth
        const top = (100 * code.y1) / imgHeight
        const width = (100 * (code.x2 - code.x1)) / imgWidth
        const height = (100 * (code.y2 - code.y1)) / imgHeight
        const elem = document.createElement('div')
        elem.setAttribute('id', `${code.code}_code`)
        elem.style.cssText = `position:absolute;left:${left}%;top:${top}%;width:${width}%;height:${height}%;z-index:100;background:transparent`
        elem.onclick = function (e) {
          _this.$refs[code.code].forEach(el => {
            el.classList.toggle('active_oem')
          })
          e.target.classList.toggle('active_code')
        }

        document.getElementById('codeImage').appendChild(elem)
      })
    }, 2000)
  },
  methods: {
    ...mapActions({
      GET_OEM_BY_IMAGE: 'Catalog/GET_OEM_BY_IMAGE'
    }),
    selectOem (code) {
      this.$refs[code].forEach(el => {
        el.classList.toggle('active_oem')
      })
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
    },
    goToParts (oem) {
      window.location.href = this.localePath({
        name: 'vin-part-slug',
        params: {
          slug: `${oem}-1`
        }
      })
    },
    openImage () {
      document.getElementById('oem_image').classList.toggle('fullscreen')
    }
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
  &.fullscreen{
    grid-template-columns: 1fr;
    //position: absolute;
    top: 0;
    z-index: 99;
    left: 0;
    right: 0;
    .oem_image_name{
      display: none;
    }
  }

  &_name {
    justify-self: center;
  }
}

.zoom_btn {
  display: block;
  border: none;
  background: url("data:image/svg+xml;charset=UTF-8,%3csvg width='20' height='20' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M14.417 4.417l-2.409 2.391 1.184 1.184 2.391-2.409L17.5 7.5v-5h-5l1.917 1.917zM7.5 2.5h-5v5l1.917-1.917 2.391 2.409 1.184-1.184-2.409-2.391L7.5 2.5zm-.692 9.508l-2.391 2.409L2.5 12.5v5h5l-1.917-1.917 2.409-2.391-1.184-1.184zm6.384 0l-1.184 1.184 2.409 2.391L12.5 17.5h5v-5l-1.917 1.917-2.391-2.409z' fill='%23F2A354'/%3e%3c/svg%3e") no-repeat;
  width: 20px;
  height: 20px;
  position: absolute;
  z-index: 3;
  right: 15px;
  top: 15px;
}

@media screen and (max-width: 992px) {
  .oem_image {
    grid-template-columns: 1fr;

    .oem_code_image {
      justify-self: center;
    }
  }
}

</style>
