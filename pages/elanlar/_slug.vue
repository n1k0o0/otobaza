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
    template(v-else)
      div
        .container
          ol.breadcrumb-custom
            li.breadcrumb-item
              a(href='/') Home
            li.breadcrumb-item
              a(href='/elanlar') {{$t('home_search.used')}}
            li.breadcrumb-item.active(aria-current='page')
              a {{product.title}}
          .product
            .product_info
              .product_info_img
                .product_info_img_big.pointer
                  img(:src="product.images[imgIndex]?product.images[imgIndex].link:'/img/search/big-part.png'", :alt="product.description")(@click="modalVisibility=true")
                  template(v-if="product.images.length>1")
                    .before.pointer(@click="previousImage")
                    .after.pointer(@click="nextImage")
                .product_info_img_slider
                  swiper.swiper(:options='swiperOptionMain')
                    swiper-slide(v-for="(image,index) in (product.images.length?product.images:[{link:'/img/search/big-part.png'}])" )
                      div(:class="{'selected':imgIndex===index}" class="part_img_slide")
                        img.pointer(:src='image.link', @click="imgIndex=index", :alt="product.title")
              .product_info_details
                h1.product_info_details_title.font-weight-bold.long-text-wrap
                  | {{product.title}}
                .row
                  .product_info_details_text.col-12.col-md-6
                    .product_info_details_text_item
                      .product_info_details_text_item_title {{$t('store')}}:
                      .product_info_details_text_item_value {{product.seller.name}}

                    .product_info_details_text_item
                      .product_info_details_text_item_title {{$t('brand')}}:
                      .product_info_details_text_item_value {{product.manu_name}}
                    .product_info_details_text_item
                      .product_info_details_text_item_title {{$t('model')}}:
                      .product_info_details_text_item_value {{product.mod_name}}

                  .product_info_details_price.col-6
                    p.font-weight-bold.p-0.m-0 {{product.price}} {{product.price_type.currency_symbol}}
                .product_info_details_actions.row
                  .price_mobile.col-4.font-weight-bold.m-0
                    span  {{product.price}} {{product.price_type.currency_symbol}}
                  .product_info_details_actions_wrapper_cart.col-6
                    button(v-if="!this.showPhone" @click.prevent="showPhone=true" class="btn-new-light" ).px-2.py-1.position-relative.w-100.product_info_details_actions_phone
                      svg(width='8', height='8', viewBox='0 0 8 8', fill='none', xmlns='http://www.w3.org/2000/svg')
                        circle(cx='4', cy='4', r='4', fill='#D92D20')
                      | {{ $t('make_call') }}
                    VDropdown(v-else)
                      a(:href="'tel:'+product.seller.phone" class="btn-new-light" ).px-2.py-1.position-relative.w-100.product_info_details_actions_phone
                        svg(width='8', height='8', viewBox='0 0 8 8', fill='none', xmlns='http://www.w3.org/2000/svg')
                          circle(cx='4', cy='4', r='4', fill='#D92D20')
                        | {{ product.seller.phone }}
                      template(#popper)
                        div(class="price_tooltip")
                          span {{ $t('discount') }}:
                          p {{$t('phone_tooltip')}}
                  .product_info_details_action_wrapper_order.col-2.col-lg-6
                    .desktop_favorite
                      AddToFavoriteButton(:id="product.id" :hideIcon="true" theme="dark")
                        span.favorite_text {{ product.wishlisted? $t('remove_from_favorite'): $t('add_to_favorite') }}
                    .mobile_favorite
                      AddToFavoriteButton(:id="product.id")
                .product_info_address.mt-4
                  .product_info_details_text_item(@click="showMap=true" class="pointer")
                    .product_info_details_text_item_title {{$t('address')}}:
                    .product_info_details_text_item_value {{product.seller.address}}
                  .map(:class="{'d-block':showMap}")
                    template(v-if="product.seller.lat && product.seller.lng")
                      GmapMap(:center='{ lat: +product.seller.lat, lng: +product.seller.lng }', :zoom='18', style='width:100%;  height: 150px;')
                        GmapMarker(:position='{ lat: +product.seller.lat, lng: +product.seller.lng }')
            .product_description
              h3 {{$t('content')}}
            p {{product.description}}
          .modal-image.pointer(v-if='modalVisibility' @click="modalVisibility=false")
            .modal-image_wrap
              img(alt='action', :src="product.images[imgIndex]?product.images[imgIndex].link:'/img/search/big-part.png'")
              template(v-if="product.images.length>1")
                .before.pointer(@click.stop="previousImage")
                .after.pointer(@click.stop="nextImage")
          .elan_wrapper.elan_special(v-if='similar_parts.length')
            .elan_header
              h2
                | {{ $t('used.similar') }}
              .elan_line
                span
              span(@click="$router.push(localePath({ name: 'elanlar', query: { keyword: product.title } }))")
                | {{ $t('see_all') }}
                svg(fill='none', height='16', viewbox='0 0 16 16', width='16', xmlns='http://www.w3.org/2000/svg')
                  path(d='M3.3335 8.00001H12.6668M12.6668 8.00001L8.00016 3.33334M12.6668 8.00001L8.00016 12.6667', stroke='#667085', stroke-linecap='round', stroke-linejoin='round')
            swiper.swiper(:options='swiperOptionAd')
              swiper-slide(v-for='(ad,i) in similar_parts', :key='i')
                UsedPart(:card='ad')

</template>

<script>
// optional style for arrows & dots
import PartsPlaceholder from '@/components/Placeholders/PartsPlaceholder'
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import UsedPart from '~/components/Used/UsedPart.vue'

import 'swiper/css/swiper.css'

import AddToFavoriteButton from '@/components/Used/AddToFavoriteButton'

import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'SearchParts',
  components: {
    AddToFavoriteButton,
    PartsPlaceholder,
    Swiper,
    UsedPart,
    SwiperSlide
  },
  watchQuery: true,
  layout: 'pages',
  scrollToTop: true,
  async fetch () {
    const param = this.$route.params.slug
    await this.GET_PRODUCT(param)
  },
  async validate ({ params, error, app }) {
    const param = params.slug.split('-')[0]

    if (isNaN(param)) {
      return error({ statusCode: 500, message: app.i18n.t('not_found') })
    } else {
      return true
    }
  },
  data () {
    return {
      swiperOptionAd: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 10,
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        breakpoints: {
          640: {
            slidesPerView: 3,
            slidesPerGroup: 3,
            spaceBetween: 14
          },
          998: {
            slidesPerView: 4,
            slidesPerGroup: 4,
            spaceBetween: 14
          },
          1200: {
            slidesPerView: 5,
            slidesPerGroup: 5,
            spaceBetween: 14
          }
        }
      },
      swiperOptionMain: {
        slidesPerView: 3,
        slidesPerGroup: 2,
        spaceBetween: 10,
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        breakpoints: {
          640: {
            slidesPerView: 3,
            slidesPerGroup: 3,
            spaceBetween: 14
          },
          998: {
            slidesPerView: 4,
            slidesPerGroup: 4,
            spaceBetween: 14
          },
          1200: {
            slidesPerView: 5,
            slidesPerGroup: 5,
            spaceBetween: 14
          }
        }
      },
      domain: 'otobaza.com',
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
          }
        ]
      },
      imgUrl: '',
      showMap: false,
      imgIndex: 0,
      images: [
        'https://www.autocar.co.uk/sites/autocar.co.uk/files/slideshow_image/1-ferrari-355-engine.jpg',
        'https://www.howacarworks.com/illustration/1742/the-compression-igntion-engine.png',
        'https://cdn.britannica.com/73/24073-004-639E15FC/Cross-section-V-type-engine.jpg',
        'https://cdn.hswstatic.com/gif/car-engine-new1.jpg'
      ],
      modalVisibility: false,
      showPhone: false,
      title: {
        az: '{name} ehtiyat hissələrinin satışı',
        ru: '{name} Продажа автозапчастей',
        en: '{name} Sale of auto spare parts',
        tr: '{name} yedek parça satışı'
      },
      description: {
        az: '{name} birinci və ikinci əl ehtiyat hissesini əldə etmək ucun Otobaza saytina daxil ola bilərsiniz',
        ru: '{name} Вы можете посетить веб-сайт Autobaza, чтобы купить оригинальные и подержанные запчасти',
        en: 'You can visit Autobaza website to buy {name} first and second hand spare parts',
        tr: '{name} birinci ve ikinci el yedek parça satın almak için Autobaza web sitesini ziyaret edebilirsiniz.'
      },
      organization:
        {
          '@context': 'http://schema.org',
          '@type': 'Organization',
          name: 'Otobaza',
          url: 'https://otobaza.com',
          logo: 'https://otobaza.com/css/icons/logo.svg'
        }
    }
  },
  computed: {
    ...mapGetters({
      product: 'Used/part',
      similar_parts: 'Used/similar_parts'
    }),
    jsonld () {
      return {
        '@context': 'http://schema.org/',
        '@type': 'Product',
        name: this.product.title,
        image: this.product.images && this.product.images[0] ? this.product.images[0].link : '/img/search/big-part.png',
        description: this.product.description,
        mpn: '763',
        brand: {
          '@type': 'Thing',
          name: this.product.manu_name
        },
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: 5,
          reviewCount: this.generateRandomInteger(3, 50)
        },
        offers: {
          '@type': 'Offer',
          priceCurrency: this.product.price_type && this.product.price_type.currency_code,
          price: this.product.price,
          priceValidUntil: new Date(new Date().getFullYear(), new Date().getMonth() + 3, 1),
          itemCondition: 'http://schema.org/NewCondition',
          availability: 'http://schema.org/InStock',
          seller: {
            '@type': 'Organization',
            name: this.product.seller && this.product.seller.name
          }
        }
      }
    }
  },
  methods: {
    ...mapActions({
      GET_PRODUCT: 'Used/GET_PART'
    }),
    pickImage (url) {
      this.imgUrl = url
    },
    nextImage () {
      if (this.imgIndex === this.product.images.length - 1) {
        this.imgIndex = 0
      } else {
        this.imgIndex += 1
      }
    },
    previousImage () {
      if (this.imgIndex === 0) {
        this.imgIndex = this.product.images.length - 1
      } else {
        this.imgIndex -= 1
      }
    },
    generateRandomInteger (min, max) {
      return Math.floor(Math.random() * (max - min)) + min
    }
  },
  head () {
    const title = this.title[this.$i18n.locale].replace('{name}', this.product.title + ' ' + this.product.manu_name)
    const description = this.description[this.$i18n.locale].replace('{name}', this.product.title + ' ' + this.product.manu_name)

    return {
      title: `${title} `,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: `${description}`
        }
      ],
      script: [
        {
          type: 'application/ld+json',
          innerHTML: JSON.stringify(this.jsonld) // <- set jsonld object in data or wherever you want
        },
        {
          type: 'application/ld+json',
          innerHTML: JSON.stringify(this.organization) // <- set jsonld object in data or wherever you want
        }
      ],
      __dangerouslyDisableSanitizers: ['script']
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  gap: 15px;

  .hr-wrap {
    display: block;
    padding-left: 75px;
    overflow: hidden;
    white-space: nowrap;

    .title {
      color: #344054;
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
      display: grid;
      grid-template-columns:1fr 1fr;
      justify-content: space-around;
      grid-gap: 10px;
      @media screen and (max-width: 991px) {
        grid-template-columns:1fr;

        &_img {
          max-width: 100% !important;
          width: 100% !important;
          overflow: hidden;

          &_big {
            //display: none !important;
            height: 250px !important;
          }

          .swiper {
            .swiper-slide {
              height: unset !important;
            }

            img {
              height: 65px;
              width: 100%;
              object-fit: cover;
            }
          }

        }

        &_address {
          .map {
            display: none;
          }
        }

        &_details {
          padding-left: 0 !important;
        }
      }
      @media screen and (max-width: 576px) {
        &_img {
          img {
            //height: 300px;
          }
        }
      }

      &_img {
        align-self: center;

        &_big {
          height: 400px;
          position: relative;
          display: flex;
          justify-content: center;
          margin-bottom: 24px;
          border-radius: 16px;
          background-color: #fff;
        }
      }

      &_details {
        padding-left: 32px;

        &_title {
          font-weight: 500;
          font-size: 30px;
          line-height: 38px;
          color: #000000;
          margin-bottom: 32px;
        }

        &_text {
          //margin:0 50px;
          .phone {
            color: #98A2B3;
          }

          &_item {
            margin-bottom: 8px;

            &_title {
              font-weight: 400;
              font-size: 14px;
              line-height: 20px;
              color: #98A2B3;
              display: inline-block;
              margin-right: 4px;
            }

            &_value {
              font-weight: 500;
              font-size: 14px;
              line-height: 20px;
              color: #344054;
              display: inline-block;
            }
          }

        }

        &_price {
          place-content: center;
          place-items: center;
          display: flex;
          font-weight: 400;
          font-size: 48px;
          line-height: 60px;
          letter-spacing: -0.02em;
          color: #0086C9;
        }

        &_actions {
          display: flex;
          justify-content: center;
          align-items: center;
          margin-top: 37px;

          @media only screen and (max-width: 991px) {
            position: fixed;
            left: 0;
            width: 100%;
            bottom: 64px;
            z-index: 98;
            flex-direction: row;
            margin: 0;
            height: 64px;
            background-color: #fff;
          }

          button, .btn-new-light {
            font-weight: 600;
            font-size: 16px;
            line-height: 24px;
            height: 44px;
            border: 1px solid #0086C9;
          }

          &_phone {
            color: #026aa2;

            svg {
              position: absolute;
              right: 8px;
              top: 8px;
            }
          }

        }
      }

    }

    &_description {
      h3 {
        margin-top: 48px;
        font-weight: 400;
        font-size: 20px;
        line-height: 24px;

        color: #98A2B3;
      }
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
    background-color: #3A7299;
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
    left: 4px;
    transform: rotate(135deg);
    -webkit-transform: rotate(135deg);
  }

  .after {
    right: 4px;
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

  .elan_wrapper {
    margin-bottom: 100px;

    .elan_header {
      padding: 0;

      h2 {
        font-family: 'Inter', serif;
        font-style: normal;
        font-weight: 500;
        font-size: 20px;
        line-height: 30px;
        color: #344054;
      }

      .elan_line {
        width: calc(100% - 320px);
      }
    }
  }

}

.price_tooltip {
  max-width: 250px;
  padding: 5px;

  span {
    color: grey;
  }
}

.price_mobile {
  font-weight: 500;
  font-size: 4.5vw;
  line-height: 32px;
  color: #0086C9;
  padding: 0 0 0 15px;
}

.desktop_favorite, .product_info_details_price {
  display: none !important;
}

@media only screen and (min-width: 992px) {
  .desktop_favorite, {
    display: block !important;
  }
  .product_info_details_price {
    display: flex !important;
  }
  .mobile_favorite, .price_mobile {
    display: none;
  }
}

</style>
