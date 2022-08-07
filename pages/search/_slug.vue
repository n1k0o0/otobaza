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
          .hr-wrap
            h1.title.hr-text {{$t('home_search.spare-part')}}
          .product
            .product_info
              .product_info_img(v-if="product.url.length")
                .product_info_img_big.pointer
                  img(:src='product.url[imgIndex]', :alt="product.description")(@click="modalVisibility=true")
                  .before.pointer(@click="previousImage")
                  .after.pointer(@click="nextImage")
                .product_info_img_slider
                  VueSlickCarousel(v-bind="slideShowSettings")
                    .product_info_img_slider_slide(v-for="(image,index) in product.url")
                      div(:class="{'selected':imgIndex===index}")
                        img.pointer(:src='image', @click="imgIndex=index", :alt="product.description")
              .product_info_details
                h1.product_info_details_title.font-weight-bold
                  | {{product.description}}
                .product_info_details_text
                  table.table.table-striped
                    tbody
                      tr
                        td {{$t('manufacturer')}}
                        td {{product.manufacturer}}
                      tr
                        td {{$t('manufacturer_code')}}
                        td {{product.part_number}}
                      tr
                        td {{$t('oem')}}
                        td {{product.oem}}
                      tr
                        td {{$t('new_or_used')}}
                        td {{product.product_type}}
                      tr
                        td {{$t('store')}}
                        td {{product.seller.store_name}}
                      tr
                        td {{$t('phone_number')}}
                        td(v-show="!showPhone" @click="showPhone=true").pointer.phone {{product.seller.phone.slice(0, 9).padEnd(13,'X')}}
                        td(v-show="showPhone").phone {{product.seller.phone}}
                      tr
                        td {{$t('address')}}
                        td {{product.seller.address}}
                .product_info_details_actions
                  .product_info_details_actions_wrapper
                    .product_info_details_actions_wrapper_price
                      p.font-weight-bold.p-0.m-0 {{product.price.price}} {{product.price.currency_symbol}}
                    .product_info_details_actions_wrapper_cart
                      //button.btn.px-3.py-1.position-relative.w-100
                      //  .fa.fa-shopping-cart.fa-lg.fa-fw
                      //  | sebete elave et
                      AddToCartButton(:id="product.id")
                        | {{$t('add_to_cart')}}
                    .product_info_details_actions_wrapper_share
                      ShareNetwork(network="facebook"
                        :url="domain+this.$route.fullPath",
                        :title="product.description",
                        :description="product.description_catalog",
                        :quote="product.description",
                        hashtags="otobaza.com")
                        button.btn.share
                          <i class="fa fa-share-alt" aria-hidden="true"></i>
            .product_description
              .hr-wrap
                h3.hr-text.mb-3.font-weight-bold {{$t('content')}}
              p {{product.description_catalog}}
          .modal-image.pointer(v-if='modalVisibility' @click="modalVisibility=false")
            .modal-image_wrap
              img(alt='action', :src='product.url[imgIndex]')
              .before.pointer(@click.stop="previousImage")
              .after.pointer(@click.stop="nextImage")

</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
// optional style for arrows & dots
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
import PartsPlaceholder from '@/components/Placeholders/PartsPlaceholder'

import AddToCartButton from '@/components/Catalog/AddToCartButton'

import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'SearchParts',
  components: { VueSlickCarousel, AddToCartButton, PartsPlaceholder },
  watchQuery: true,
  layout: 'pages',
  scrollToTop: true,
  async fetch () {
    const param = this.$route.params.slug
    await this.GET_PRODUCT(param)
  },
  async validate ({ params, error, app }) {
    const param = params.slug
    if (isNaN(param)) {
      return error({ statusCode: 500, message: app.i18n.t('not_found') })
    } else {
      return true
    }
  },
  data () {
    return {
      domain: process.env.FRONT_URL,
      settings: {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 1,
              infinite: true
            }
          },
          {
            breakpoint: 991,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true
            }
          },
          {
            breakpoint: 767,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              initialSlide: 2
            }
          },
          {
            breakpoint: 576,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      },
      slideShowSettings: {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 5,
              slidesToScroll: 1,
              infinite: true
            }
          },
          {
            breakpoint: 991,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 1,
              infinite: true
            }
          },
          {
            breakpoint: 767,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 576,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              dots: true
            }
          }
        ]
      },
      imgUrl: '',
      imgIndex: 0,
      images: [
        'https://www.autocar.co.uk/sites/autocar.co.uk/files/slideshow_image/1-ferrari-355-engine.jpg',
        'https://www.howacarworks.com/illustration/1742/the-compression-igntion-engine.png',
        'https://cdn.britannica.com/73/24073-004-639E15FC/Cross-section-V-type-engine.jpg',
        'https://cdn.hswstatic.com/gif/car-engine-new1.jpg'
      ],
      modalVisibility: false,
      showPhone: false
    }
  },
  computed: {
    ...mapGetters({
      product: 'Catalog/search_part'
    })
  },
  methods: {
    ...mapActions({
      GET_PRODUCT: 'Catalog/GET_SEARCH_PRODUCT'
    }),
    pickImage (url) {
      this.imgUrl = url
    },
    nextImage () {
      if (this.imgIndex === this.product.url.length - 1) {
        this.imgIndex = 0
      } else {
        this.imgIndex += 1
      }
    },
    previousImage () {
      if (this.imgIndex === 0) {
        this.imgIndex = this.product.url.length - 1
      } else {
        this.imgIndex -= 1
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  background-color: #fff;
  gap: 15px;
  margin: 10px auto;
  padding: 50px 30px;

  .hr-wrap {
    display: block;
    padding-left: 75px;
    overflow: hidden;
    white-space: nowrap;

    .title {
      color: #2a8ef0;
      font-size: 25px;
    }

    .hr-text {
      position: relative;
      display: inline-block;

      &:after, &:before {
        content: "";
        position: absolute;
        top: 50%;
        width: 9999px;
        height: 1px;
        background: #dbdbdb;
      }

      &:after {
        left: 100%;
        margin-left: 15px;
      }

      &:before {
        right: 100%;
        margin-right: 15px;
      }
    }
  }

  .product {
    margin-top: 20px;

    &_info {
      display: flex;
      flex-wrap: nowrap;
      justify-content: space-around;
      grid-gap: 10px;
      @media screen and (max-width: 991px) {
        flex-direction: column;
        &_img {
          max-width: 100% !important;
          width: 100% !important;

          &_big {
            display: none !important;
          }
        }
      }
      @media screen and (max-width: 576px) {
        &_img {
          img {
            height: 300px;
          }
        }
      }

      &_img {
        align-self: center;
        max-width: 45%;

        &_big {
          height: 400px;
          position: relative;
          display: flex;

        }

        &_slider {
          &_slide {
            & > div {
              &.selected {
                border-color: black;
              }

              border: 1px solid #ebebeb;
              border-radius: 5px;
              margin: 5px;
              padding: 5px;
            }
          }
        }
      }

      &_details {
        padding: 30px 50px;

        &_title {
          font-size: 30px;
          padding-bottom: 10px;
          margin-bottom: 20px;
          border-bottom: 1px solid #e3e3e3;
        }

        &_text {
          //margin:0 50px;
          .phone {
            color: #5ca9ff;
          }
        }

        &_actions {
          display: flex;
          justify-content: center;
          align-items: center;

          &_wrapper {
            display: flex;
            gap: 10px;
            justify-content: center;
            align-items: center;
            border: 1px solid #cbcbcb;
            padding: 15px;
            border-radius: 5px;

            &_price {
              font-size: 20px;
              color: #ff0000;
            }
          }
        }
      }
    }

    &_description {
    }
  }

  .related_products {
    &_items {
      &_item {
        &_wrapper {
          margin: 5px;
          border: 1px solid #ebebeb;
          border-radius: 5px;
          padding: 25px;

          span {
            font-size: 1.1rem;
            color: red;
          }

          button {
            font-size: 14px;
          }
        }

      }
    }
  }

  .btn {
    border-radius: 5px;
    background-color: #4a8ee9;
    color: #fff;
  }

  .before, .after {
    content: '';
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    border-width: 0 3px 3px 0;
    clear: both;
    border: solid grey;
    border-width: 0 3px 3px 0;
    display: inline-block;
    padding: 3px;
    width: 20px;
    height: 20px;
  }

  .before {
    left: -20px;
    transform: rotate(135deg);
    -webkit-transform: rotate(135deg);
  }

  .after {
    right: -20px;
    transform: rotate(-45deg);
    -webkit-transform: rotate(-45deg);
  }

  button.share {
    padding: 4px 10px;

    i {
      font-size: 20px;
      font-weight: 100;
    }
  }
}

</style>
