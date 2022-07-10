<template lang="pug">
  div
    //template(v-if="$fetchState.pending")
    //  PartsPlaceholder
    //template(v-else-if="$fetchState.error")
    //  .container
    //    .mcontainer.mh60vh
    //      .response-message
    //        .mkub.mkubfail
    //        .rminfo
    //          h4.rmtt {{ $t('not_found') }}
    //          p.rmtxt {{ $t('not_found_info') }}
    //          h1 {{$fetchState}}
    template
      div
        .container
          .hr-wrap
            h1.title.hr-text Ehtiyyat hisse
          .product
            .product_info
              .product_info_img
                .product_info_img_big.pointer
                  img(:src='images[imgIndex]')(@click="modalVisibility=true")
                  .before.pointer(@click="previousImage")
                  .after.pointer(@click="nextImage")
                .product_info_img_slider
                  VueSlickCarousel(v-bind="slideShowSettings")
                    .product_info_img_slider_slide(v-for="(image,index) in images")
                      div(:class="{'selected':imgIndex===index}")
                        img.pointer(:src='image', @click="imgIndex=index")
              .product_info_details
                h1.product_info_details_title.font-weight-bold
                  | BMW X5 Muherrik
                .product_info_details_text
                  table.table.table-striped
                    tbody
                      tr
                        td İstehsalçı
                        td Kotramo
                      tr
                        td İstehsalçı kodu
                        td 1234
                      tr
                        td OEM kodu
                        td 5830221
                      tr
                        td Yeni və ya ikinci əl
                        td Yeni
                      tr
                        td Mağaza adı
                        td Mağaza
                      tr
                        td Nömrə
                        td +994 55 000
                      tr
                        td Ünvan
                        td Azərbaycan. Bakı
                .product_info_details_actions
                  .product_info_details_actions_wrapper
                    .product_info_details_actions_wrapper_price
                      p.font-weight-bold.red.p-0.m-0 5000 AZN
                    .product_info_details_actions_wrapper_cart
                      button.btn.px-3.py-1.position-relative.w-100
                        .fa.fa-shopping-cart.fa-lg.fa-fw
                        | sebete elave et
                    .product_info_details_actions_wrapper_share
                      button.btn.share
                        <i class="fa fa-share-alt" aria-hidden="true"></i>
            .product_description
              .hr-wrap
                h3.hr-text.mb-3.font-weight-bold Mezmunu
              p Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad commodi incidunt ipsum labore laboriosam minus molestiae, obcaecati pariatur sit ullam? Culpa cupiditate modi mollitia pariatur saepe voluptatem. Ab dicta dolore illo itaque officia quod ullam. Accusantium ad adipisci aperiam asperiores aspernatur assumenda atque, deserunt distinctio doloribus ea enim esse eum eveniet ex exercitationem expedita harum maiores modi molestias nesciunt nihil nostrum nulla numquam obcaecati odio omnis pariatur porro quasi quibusdam quidem quo rem repellat repellendus ut veritatis voluptate voluptatum.
          .related_products
            .hr-wrap
              h2.hr-text.mb-3.font-weight-bold Oxsar mehsullar
            .related_products_items
              VueSlickCarousel(v-bind="settings")
                n-link(:to="localePath({\
                  name: 'search-slug',\
                  params: {\
                  slug: 'nissan-30005-masin-kataloqu'\
                  }\
                  })").related_products_items_item(v-for="card in 20")
                  .related_products_items_item_wrapper
                    img(src='https://www.howacarworks.com/illustration/1742/the-compression-igntion-engine.png')
                    hr
                    div
                      h5 BMx5
                      h6 Motor
                    div.text-right
                      span.font-weight-bold 500AZN
                    div
                      button.btn.px-3.py-1.mt-2.position-relative.w-100
                        .fa.fa-shopping-cart.fa-lg.fa-fw
                        | sebete elave et
          .modal-image.pointer(v-if='modalVisibility' @click="modalVisibility=false")
            .modal-image_wrap
              img(alt='', :src='images[imgIndex]')
              .before.pointer(@click.stop="previousImage")
              .after.pointer(@click.stop="nextImage")

</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
// optional style for arrows & dots
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

export default {
  name: 'SearchParts',
  components: { VueSlickCarousel },
  watchQuery: true,
  layout: 'pages',
  scrollToTop: true,
  // async fetch () {
  //   const param = this.$route.params.slug.split('-')
  //   const data = {
  //     car: param[0],
  //     model: param[1]
  //   }
  //   await this.GET_OEM(data)
  // },
  async validate ({ params, error, app }) {
    const param = params.slug.split('-')
    if (param.length <= 2 && isNaN(param[1])) {
      return error({ statusCode: 500, message: app.i18n.t('not_found') })
    } else {
      return true
    }
  },
  data () {
    return {
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
      modalVisibility: false
    }
  },
  methods: {
    pickImage (url) {
      this.imgUrl = url
    },
    nextImage () {
      if (this.imgIndex === this.images.length - 1) {
        this.imgIndex = 0
      } else {
        this.imgIndex += 1
      }
    },
    previousImage () {
      if (this.imgIndex === 0) {
        this.imgIndex = this.images.length - 1
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
