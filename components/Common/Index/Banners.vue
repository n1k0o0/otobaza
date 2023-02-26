<template lang="pug">
  .banners
    n-link(:to="localePath({\
                    name: 'lp-brand-slug',\
                    params: {\
                    slug: 'Mercedes',\
                    brand:'74'\
                    }\
                    })").banners_banner
      img(v-lazy="`img/banners/mercedes.png`")
      span Mercedes

    n-link(:to="localePath({\
                    name: 'lp-brand-slug',\
                    params: {\
                    slug: 'Toyota',\
                    brand:'111'\
                    }\
                    })").banners_banner
      img(v-lazy="`img/banners/toyota.png`")
      span Toyota

    n-link(:to="localePath({\
                    name: 'lp-brand-slug',\
                    params: {\
                    slug: 'Kia',\
                    brand:'184'\
                    }\
                    })").banners_banner
      img(v-lazy="`img/banners/kia.png`")
      span Kia

    n-link(:to="localePath({\
                    name: 'lp-brand-slug',\
                    params: {\
                    slug: 'BMW',\
                    brand: 16\
                    }\
                    })").banners_banner
      img(v-lazy="`img/banners/bmw.png`")
      span BMW

    n-link(:to="localePath({\
                    name: 'lp-brand-slug',\
                    params: {\
                    slug: 'Audi',\
                    brand:'5'\
                    }\
                    })").banners_banner
      img(v-lazy="`img/banners/audi.png`")
      span Audi

    n-link(:to="localePath({\
                      name: 'lp-brand-slug',\
                      params: {\
                      slug: 'Ford',\
                      brand: 36\
                      }\
                      })").banners_banner
      img(v-lazy="`img/banners/ford.png`")
      span Ford

    n-link(:to="localePath({\
                      name: 'lp-brand-slug',\
                      params: {\
                      slug: 'Hyundai',\
                      brand: 183\
                      }\
                      })").banners_banner
      img(v-lazy="`img/banners/hyundai.png`")
      span Hyundai

    div(@click="otherShow=true", v-show="!otherShow" ).banners_banner.banners_banner_all
      span.all_brands
        | Hamısına bax
        svg(width='16', height='16', viewBox='0 0 16 16', fill='none', xmlns='http://www.w3.org/2000/svg')
          path(d='M1 8H15M15 8L8 1M15 8L8 15', stroke='#344054', stroke-width='2', stroke-linecap='round', stroke-linejoin='round')

    template(v-if="otherShow")
      n-link(:to="localePath({\
                        name: 'lp-brand-slug',\
                        params: {\
                        slug: 'Nissan',\
                        brand: 80\
                        }\
                        })").banners_banner
        img(v-lazy="`img/banners/nissan.png`")
        span Nissan

      n-link(:to="localePath({\
                        name: 'lp-brand-slug',\
                        params: {\
                        slug: 'Chevrolet',\
                        brand: 138\
                        }\
                        })").banners_banner
        img(v-lazy="`img/banners/chevrolet.png`")
        span Chevrolet

      n-link(:to="localePath({\
                        name: 'lp-brand-slug',\
                        params: {\
                        slug: 'Citroen',\
                        brand: 21\
                        }\
                        })").banners_banner
        img(v-lazy="`img/banners/citroen.png`")
        span Citroen

      n-link(:to="localePath({\
                        name: 'lp-brand-slug',\
                        params: {\
                        slug: 'Fiat',\
                        brand: 35\
                        }\
                        })").banners_banner
        img(v-lazy="`img/banners/fiat.png`")
        span Fiat

      //n-link(:to="localePath({\
      //                  name: 'lp-brand-slug',\
      //                  params: {\
      //                  slug: 'Geely',\
      //                  brand: 5\
      //                  }\
      //                  })").banners_banner
      //  img(v-lazy="`img/banners/geely.png`")
      //  span Geely

      n-link(:to="localePath({\
                        name: 'lp-brand-slug',\
                        params: {\
                        slug: 'Land-Rover',\
                        brand: 1820\
                        }\
                        })").banners_banner
        img(v-lazy="`img/banners/land-rover.png`")
        span Land Rover

      n-link(:to="localePath({\
                        name: 'lp-brand-slug',\
                        params: {\
                        slug: 'Lexus',\
                        brand: 842\
                        }\
                        })").banners_banner
        img(v-lazy="`img/banners/lexus.png`")
        span Lexus

      n-link(:to="localePath({\
                        name: 'lp-brand-slug',\
                        params: {\
                        slug: 'Renault',\
                        brand: 93\
                        }\
                        })").banners_banner
        img(v-lazy="`img/banners/renault.png`")
        span Renault

      n-link(:to="localePath({\
                        name: 'lp-brand-slug',\
                        params: {\
                        slug: 'Volkswagen',\
                        brand: 121\
                        }\
                        })").banners_banner
        img(v-lazy="`img/banners/volkswagen.png`")
        span Volkswagen

      n-link(:to="localePath({\
                        name: 'lp-brand-slug',\
                        params: {\
                        slug: 'Opel',\
                        brand: 84\
                        }\
                        })").banners_banner
        img(v-lazy="`img/banners/opel.png`")
        span Opel

      n-link(:to="localePath({\
                        name: 'lp-brand-slug',\
                        params: {\
                        slug: 'Honda',\
                        brand: 45\
                        }\
                        })").banners_banner
        img(v-lazy="`img/banners/honda.png`")
        span Honda

      n-link(:to="localePath({\
                        name: 'lp-brand-slug',\
                        params: {\
                        slug: 'Mitsubishi',\
                        brand: 5\
                        }\
                        })").banners_banner
        img(v-lazy="`img/banners/mitshubishi.png`")
        span Mitsubishi

      //n-link(:to="localePath({\
      //                  name: 'lp-brand-slug',\
      //                  params: {\
      //                  slug: 'Geely',\
      //                  brand: 5\
      //                  }\
      //                  })").banners_banner
      //  img(v-lazy="`img/banners/daewoo.png`")
      //  span Daewoo

</template>

<script>
export default {
  name: 'Banners',
  data () {
    return {
      otherShow: false
    }
  }
}
</script>

<style lang="scss" scoped>
.banners {
  margin: 10px 0 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(215px, 300fr));
  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(130px, 300fr));
    &_banner {
      &:last-child {
        padding-left: 8px;
      }

      span {
        &.all_brands {
          font-size: 16px !important;

          svg {
            right: 7px;
          }
        }
      }
    }
  }

  grid-gap: 10px;
  border-radius: 5px;
  justify-items: center;
  padding: 20px 0 0;

  &_banner {
    display: flex;
    align-items: center;
    cursor: pointer;
    background-color: #fff;
    border-radius: 16px;
    color: #344054;
    padding: 26px 16px;
    width: 100%;
    height: 80px;
    position: relative;

    &_all {
      background-color: rgba(255, 255, 255, 0.32);
      border: 1px solid #FFFFFF;

      &:hover {
        background-color: rgba(255, 255, 255, 0.4);
        border: 2px solid #FFFFFF;
      }
    }

    span {
      //styleName: Text xl/Medium;
      font-family: SF Pro Display, serif;
      font-size: 20px;
      font-weight: 500;
      line-height: 30px;
      letter-spacing: 0em;
      text-align: left;
      margin-left: 16px;

      svg {
        position: absolute;
        right: 21px;
        top: 50%;
        transform: translateY(-50%);

        path {
          stroke: #fff;
        }
      }

      &.all_brands {
        font-size: 18px;
        color: #fff;
      }
    }

    @media screen and (max-width: 768px) {
      height: 134px;
      flex-direction: column;
      justify-content: center;
      span {
        margin-left: 0;
      }
    }

  }
}
</style>
