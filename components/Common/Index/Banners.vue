<template lang="pug">
  .banners
    n-link(:to="localePath({\
                    name: 'search',\
                    query: {\
                    sparePart: '100200',\
                    brand: 5\
                    }\
                    })").banners_banner
      img(v-lazy="`img/banners/${$i18n.locale}/audi.jpg`")
    n-link(:to="localePath({\
                    name: 'search',\
                    query: {\
                    sparePart: '100200',\
                    brand: 5\
                    }\
                    })").banners_banner
      img(v-lazy="`img/banners/${$i18n.locale}/bmw.jpg`")
    n-link(:to="localePath({\
                      name: 'search',\
                      query: {\
                      sparePart: '100200',\
                      brand: 5\
                      }\
                      })").banners_banner
      img(v-lazy="`img/banners/${$i18n.locale}/chevrolet.jpg`")
    n-link(:to="localePath({\
                      name: 'search',\
                      query: {\
                      sparePart: '100200',\
                      brand: 5\
                      }\
                      })").banners_banner
      img(v-lazy="`img/banners/${$i18n.locale}/ford.jpg`")
    n-link(:to="localePath({\
                      name: 'search',\
                      query: {\
                      sparePart: '100200',\
                      brand: 5\
                      }\
                      })").banners_banner
      img(v-lazy="`img/banners/${$i18n.locale}/hyundai.jpg`")
    n-link(:to="localePath({\
                      name: 'search',\
                      query: {\
                      sparePart: '100200',\
                      brand: 5\
                      }\
                      })").banners_banner
      img(v-lazy="`img/banners/${$i18n.locale}/kia.jpg`")
    n-link(:to="localePath({\
                      name: 'search',\
                      query: {\
                      sparePart: '100200',\
                      brand: 5\
                      }\
                      })").banners_banner
      img(v-lazy="`img/banners/${$i18n.locale}/lexus.jpg`")
    n-link(:to="localePath({\
                      name: 'search',\
                      query: {\
                      sparePart: '100200',\
                      brand: 5\
                      }\
                      })").banners_banner
      img(v-lazy="`img/banners/${$i18n.locale}/mercedes.jpg`")
    n-link(:to="localePath({\
                      name: 'search',\
                      query: {\
                      sparePart: '100200',\
                      brand: 5\
                      }\
                      })").banners_banner
      img(v-lazy="`img/banners/${$i18n.locale}/range-rover.jpg`")
    n-link(:to="localePath({\
                      name: 'search',\
                      query: {\
                      sparePart: '100200',\
                      brand: 5\
                      }\
                      })").banners_banner
      img(v-lazy="`img/banners/${$i18n.locale}/toyota.jpg`")
</template>

<script>
export default {
  name: 'Banners'
}
</script>

<style lang="scss" scoped>
.banners {
  margin: 10px 0 20px 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 10px;
  background-color: #fff;
  border-radius: 5px;
  justify-items: center;
  padding: 20px 10px;

  &_banner {
    cursor: pointer;
  }
}
</style>
