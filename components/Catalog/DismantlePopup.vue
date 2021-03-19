<template>
  <div class="DismantlePopup">
    <transition name="page-fade">
      <div
        v-if="isVisible"
        id="store-modal"
        class="modal fade show"
        role="dialog"
        style="display: block"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <button
                class="close"
                data-dismiss="modal"
                type="button"
                @click.prevent="closePopup"
              >
                <span>x</span>
              </button>
            </div>
            <div class="modal-body">
              <div class="about-store-top store_top_flex">
                <div class="response-message about-title store_w40">
                  <div class="mkub mkubsuccess kubflex">
                    <svg
                      id="store"
                      height="32.186"
                      viewBox="0 0 34.341 32.186"
                      width="34.341"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        id="Path_136"
                        d="M287.562,288.52h-5.388a1.006,1.006,0,0,0-1.006,1.006v5.434a1.006,1.006,0,0,0,1.006,1.006h5.388a1.006,1.006,0,0,0,1.006-1.006v-5.434A1.006,1.006,0,0,0,287.562,288.52Zm-1.006,5.434H283.18v-3.422h3.376Zm0,0"
                        data-name="Path 136"
                        fill="#fff"
                        transform="translate(-262.309 -269.168)"
                      />
                      <path
                        id="Path_137"
                        d="M34.3,8.273,32.887,3.32A4.782,4.782,0,0,0,28.486,0H5.855a4.782,4.782,0,0,0-4.4,3.32L.039,8.273A1.006,1.006,0,0,0,0,8.55v3.233a4.245,4.245,0,0,0,2.694,3.947V28.486a3.7,3.7,0,0,0,3.7,3.7H27.947a3.7,3.7,0,0,0,3.7-3.7V15.729a4.245,4.245,0,0,0,2.694-3.947V8.55A1.006,1.006,0,0,0,34.3,8.273ZM3.389,3.873A2.8,2.8,0,0,1,5.855,2.012h22.63a2.8,2.8,0,0,1,2.467,1.861L32,7.544H2.34ZM8.478,9.556h4.454v2.226a2.227,2.227,0,1,1-4.454,0Zm6.466,0H19.4v2.226a2.227,2.227,0,1,1-4.454,0Zm6.466,0h4.454v2.226a2.227,2.227,0,1,1-4.454,0Zm-19.4,2.226V9.556H6.466v2.226a2.227,2.227,0,1,1-4.454,0Zm8.082,18.391V24.1h3.376v6.07Zm17.853,0H15.483V23.1a1.006,1.006,0,0,0-1.006-1.006H9.088A1.006,1.006,0,0,0,8.082,23.1v7.076H6.394a1.69,1.69,0,0,1-1.688-1.688V16A4.234,4.234,0,0,0,7.472,14.52a4.231,4.231,0,0,0,6.466,0,4.231,4.231,0,0,0,6.466,0,4.231,4.231,0,0,0,6.466,0A4.235,4.235,0,0,0,29.635,16v12.49A1.69,1.69,0,0,1,27.947,30.174ZM30.1,14.009a2.229,2.229,0,0,1-2.227-2.227V9.556h4.454v2.227A2.229,2.229,0,0,1,30.1,14.009Zm0,0"
                        data-name="Path 137"
                        fill="#fff"
                      />
                    </svg>
                  </div>
                  <div class="rminfo">
                    <h2 class="rmtt">
                      {{ dismantle.user.store_name }}
                    </h2>
                    <p class="rmtxt">
                      {{ dismantle.user.store_about }}
                    </p>
                  </div>
                </div>
              </div>

              <!-- about store -->
              <div class="row about-store-cover">
                <div class="container mb-4">
                  <div class="row">
                    <div class="col-sm-12 col-md-8">
                      <div class="about-info">
                        <h3 class="about-tt">
                          {{ dismantle.name }}, ({{ dismantle.type }})
                        </h3>
                        <div class="about-txt">
                          <style>
                            .pro-card__row__col {
                            padding: 15px 15px;
                            box-sizing: border-box;
                            }
                            dl.pro-card__specs dt {
                            overflow: hidden;
                            white-space: nowrap;
                            text-overflow: ellipsis;
                            float: left;
                            clear: left;
                            width: 12rem;
                            padding-right: 1rem;
                            }
                            dl.pro-card__specs dd {
                            width: 100%;
                            padding-left: 12rem;
                            font-weight: 500;
                            }
                          </style>
                          <dl class="pro-card__row__col pro-card__specs">
                            <dt>{{ $t('automobile') }}</dt><dd>{{ dismantle.name }}</dd>
                            <dt>{{ $t('engine') }}</dt><dd>{{ dismantle.engine }}</dd>
                            <dt>{{ $t('transmission') }}</dt><dd>{{ dismantle.transmission }}</dd>
                            <dt>{{ $t('milage') }}</dt><dd>{{ dismantle.milage }}</dd>
                            <dt>{{ $t('color') }}</dt><dd>{{ dismantle.color.color }}</dd>
                            <dt>{{ $t('description') }}</dt><dd>{{ dismantle.description }}</dd>
                          </dl>
                        </div>
                      </div>
                    </div>
                    <div class="col-sm-12 col-md-4">
                      <swiper
                        ref="mySwiper"
                        class="carousel"
                        :options="swiperOptions"
                      >
                        <swiper-slide v-for="(image,i) in dismantle.images" :key="i">
                          <img alt="" :src="image.link" />
                        </swiper-slide>
                        <div
                          v-if="dismantle.images.length > 1"
                          slot="pagination"
                          class="swiper-pagination"
                        ></div>
                        <div
                          v-if="dismantle.images.length > 1"
                          slot="button-prev"
                          class="swiper-button-prev"
                        ></div>
                        <div
                          v-if="dismantle.images.length > 1"
                          slot="button-next"
                          class="swiper-button-next"
                        ></div>
                      </swiper>
                    </div>
                  </div>
                </div>
                <div class="col-12 col-sm-12">
                  <div class="success-message">
                    <i class="fa fa-info-circle"></i> <small class="muted" v-html="$t('otobaza_not_copy')"></small>
                  </div>
                </div>
              </div>

              <div class="container">
                <div class="about-store-bottom">
                  <div class="contact-item dis_con_item">
                    <svg
                      height="31.709"
                      viewBox="0 0 31.708 31.709"
                      width="31.708"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g id="phone-call" transform="translate(-0.002)">
                        <g
                          id="Group_964"
                          data-name="Group 964"
                          transform="translate(0.002 0.647)"
                        >
                          <g
                            id="Group_963"
                            data-name="Group 963"
                            transform="translate(0)"
                          >
                            <path
                              id="Path_152"
                              d="M30.506,34.607l-6.213-6.213a1.9,1.9,0,0,0-2.69,0L19.988,30.01a1.9,1.9,0,0,0-.481,1.873l-.61.61h0c-.433.433-3.129-.232-6.388-3.491s-3.924-5.954-3.491-6.388h0l.61-.61a1.9,1.9,0,0,0,1.873-.481l1.616-1.616a1.9,1.9,0,0,0,0-2.69L6.9,11a1.9,1.9,0,0,0-2.69,0L2.6,12.62a1.9,1.9,0,0,0-.481,1.873s-.517.522-.542.555c-1.719,1.911-2.041,4.918-.9,8.515a27.1,27.1,0,0,0,6.773,10.5,27.106,27.106,0,0,0,10.5,6.773,13.145,13.145,0,0,0,3.939.67,6.551,6.551,0,0,0,4.79-1.775l.339-.339a1.909,1.909,0,0,0,.528.075,1.89,1.89,0,0,0,1.345-.557L30.506,37.3A1.9,1.9,0,0,0,30.506,34.607ZM5.558,12.349l6.213,6.213-1.615,1.617h0l-.023-.023L7.049,17.071,3.943,13.965Zm19.775,26.04h0c-1.368,1.368-3.787,1.594-6.81.636a25.188,25.188,0,0,1-9.733-6.3,25.186,25.186,0,0,1-6.3-9.733c-.958-3.023-.732-5.442.636-6.81h0l.172-.172,4.822,4.822-.442.442h0c-1.832,1.835.369,5.954,3.492,9.077,2.337,2.337,5.233,4.158,7.311,4.158a2.4,2.4,0,0,0,1.767-.667h0l.442-.442,4.822,4.822Zm2.212-.821-6.213-6.213,1.616-1.616,6.213,6.213S27.546,37.568,27.546,37.568Z"
                              data-name="Path 152"
                              fill="#4da6ff"
                              transform="translate(-0.002 -10.447)"
                            />
                          </g>
                        </g>
                        <g
                          id="Group_966"
                          data-name="Group 966"
                          transform="translate(16.359 4.824)"
                        >
                          <g id="Group_965" data-name="Group 965">
                            <path
                              id="Path_153"
                              d="M271.841,80.7a9.514,9.514,0,0,0-6.772-2.805.951.951,0,0,0,0,1.9,7.675,7.675,0,0,1,7.675,7.675.951.951,0,0,0,1.9,0A9.515,9.515,0,0,0,271.841,80.7Z"
                              data-name="Path 153"
                              fill="#4da6ff"
                              transform="translate(-264.118 -77.891)"
                            />
                          </g>
                        </g>
                        <g
                          id="Group_968"
                          data-name="Group 968"
                          transform="translate(16.359)"
                        >
                          <g id="Group_967" data-name="Group 967">
                            <path
                              id="Path_154"
                              d="M275.246,4.218A14.307,14.307,0,0,0,265.063,0a.951.951,0,0,0,0,1.9,12.5,12.5,0,0,1,12.5,12.5.951.951,0,0,0,1.9,0A14.306,14.306,0,0,0,275.246,4.218Z"
                              data-name="Path 154"
                              fill="#4da6ff"
                              transform="translate(-264.112 0)"
                            />
                          </g>
                        </g>
                        <g
                          id="Group_970"
                          data-name="Group 970"
                          transform="translate(16.359 9.648)"
                        >
                          <g id="Group_969" data-name="Group 969">
                            <path
                              id="Path_155"
                              d="M268.432,157.175a4.658,4.658,0,0,0-3.36-1.392h0a.951.951,0,0,0,0,1.9h0a2.758,2.758,0,0,1,2.015.835,2.794,2.794,0,0,1,.835,2.015.951.951,0,0,0,.951.951h0a.951.951,0,0,0,.951-.951A4.659,4.659,0,0,0,268.432,157.175Z"
                              data-name="Path 155"
                              fill="#4da6ff"
                              transform="translate(-264.121 -155.783)"
                            />
                          </g>
                        </g>
                      </g>
                    </svg>
                    <div class="contact-number">
                      <a :href="`tel:${dismantle.user.phone}`">{{ dismantle.user.phone }}</a>
                    </div>
                  </div>
                  <div class="contact-item dis_con_item">
                    <svg
                      id="Group_962"
                      data-name="Group 962"
                      height="24.353"
                      viewBox="0 0 32 24.353"
                      width="32"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        id="Path_150"
                        d="M28.094,57.75H3.913A3.916,3.916,0,0,0,0,61.663V78.189A3.916,3.916,0,0,0,3.913,82.1H28.087A3.916,3.916,0,0,0,32,78.189V61.67A3.912,3.912,0,0,0,28.094,57.75Zm2.125,20.439a2.128,2.128,0,0,1-2.125,2.125H3.913a2.128,2.128,0,0,1-2.125-2.125V61.67a2.128,2.128,0,0,1,2.125-2.125H28.087a2.128,2.128,0,0,1,2.125,2.125v16.52Z"
                        data-name="Path 150"
                        fill="#4da6ff"
                        transform="translate(0 -57.75)"
                      />
                      <path
                        id="Path_151"
                        d="M72.059,117.364l7.739-6.918a.884.884,0,1,0-1.185-1.312l-10.673,9.549-2.082-1.854c-.007-.007-.013-.013-.013-.02a1.307,1.307,0,0,0-.144-.124l-8.473-7.558a.884.884,0,1,0-1.179,1.318l7.831,6.977-7.8,7.277a.883.883,0,0,0-.039,1.247.906.906,0,0,0,.648.281.887.887,0,0,0,.6-.235l7.916-7.382,2.148,1.912a.884.884,0,0,0,1.179-.007l2.207-1.971L78.613,126a.883.883,0,1,0,1.218-1.279Z"
                        data-name="Path 151"
                        fill="#4da6ff"
                        transform="translate(-51.924 -105.39)"
                      />
                    </svg>
                    <div class="contact-mail">
                      <a :href="`mailto:${dismantle.user.email}`">{{ dismantle.user.email }}</a>
                    </div>
                  </div>
                  <div class="contact-item dis_con_item">
                    <svg
                      height="35.37"
                      viewBox="0 0 25.62 35.37"
                      width="25.62"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g id="maps-and-flags" transform="translate(-70.573)">
                        <g
                          id="Group_972"
                          data-name="Group 972"
                          transform="translate(70.573)"
                        >
                          <g
                            id="Group_971"
                            data-name="Group 971"
                            transform="translate(0)"
                          >
                            <path
                              id="Path_156"
                              d="M83.383,0a12.824,12.824,0,0,0-12.81,12.81c0,8.766,11.464,21.634,11.952,22.178a1.154,1.154,0,0,0,1.716,0c.488-.544,11.952-13.412,11.952-22.178A12.824,12.824,0,0,0,83.383,0Zm0,32.45c-3.858-4.583-10.5-13.624-10.5-19.64a10.5,10.5,0,1,1,21.006,0C93.886,18.826,87.242,27.866,83.383,32.45Z"
                              data-name="Path 156"
                              fill="#4da6ff"
                              transform="translate(-70.573)"
                            />
                          </g>
                        </g>
                        <g
                          id="Group_974"
                          data-name="Group 974"
                          transform="translate(76.938 6.365)"
                        >
                          <g
                            id="Group_973"
                            data-name="Group 973"
                            transform="translate(0)"
                          >
                            <path
                              id="Path_157"
                              d="M169.153,92.134a6.445,6.445,0,1,0,6.445,6.445A6.452,6.452,0,0,0,169.153,92.134Zm0,10.583a4.138,4.138,0,1,1,4.138-4.138A4.143,4.143,0,0,1,169.153,102.717Z"
                              data-name="Path 157"
                              fill="#4da6ff"
                              transform="translate(-162.708 -92.134)"
                            />
                          </g>
                        </g>
                      </g>
                    </svg>
                    <div class="contact-address">
                      <span>{{ dismantle.user.address }},
                        <br /> {{ dismantle.user.city }}, {{ dismantle.user.country }}</span>
                    </div>
                  </div>
                  <div class="contact-item dis_con_item">
                    <ul class="contact-social">
                      <li v-for="(social,i) in dismantle.user.social_links" :key="i">
                        <a :href="social.value" target="_blank">
                          <i :class="`fa fa-${social.name}`"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </transition>
    <div v-if="isVisible" class="modal-backdrop fade show"></div>
  </div>
</template>
<script>
import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
export default {
  name: 'DismantlePopup',
  components: {
    Swiper,
    SwiperSlide
  },
  directives: {
    swiper: directive
  },
  props: {
    isVisible: {
      type: Boolean,
      default: false
    },
    dismantle: {
      type: Object,
      default: () => {}
    }
  },
  data () {
    return {
      swiperOptions: {
        pagination: {
          el: '.swiper-pagination'
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      }
    }
  },
  methods: {
    closePopup () {
      this.$emit('update:isVisible', false)
    }
  }
}
</script>
