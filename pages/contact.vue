<template>
  <div class="container">
    <div class="mcontainer mh60vh">
      <div class="response-message about-title">
        <div class="mkub mkubsuccess kubflex">
          <svg
            id="Group_962"
            data-name="Group 962"
            height="27.262"
            viewBox="0 0 35.824 27.262"
            width="35.824"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              id="Path_150"
              d="M31.45,57.75H4.381A4.384,4.384,0,0,0,0,62.131v18.5a4.384,4.384,0,0,0,4.381,4.381H31.443a4.384,4.384,0,0,0,4.381-4.381V62.138A4.38,4.38,0,0,0,31.45,57.75ZM33.83,80.632a2.382,2.382,0,0,1-2.379,2.379H4.381A2.382,2.382,0,0,1,2,80.632V62.138a2.382,2.382,0,0,1,2.379-2.379H31.443a2.382,2.382,0,0,1,2.379,2.379V80.632Z"
              data-name="Path 150"
              fill="#fff"
              transform="translate(0 -57.75)"
            />
            <path
              id="Path_151"
              d="M74.007,118.375l8.664-7.745a.99.99,0,1,0-1.327-1.469L69.4,119.851l-2.331-2.075c-.007-.007-.015-.015-.015-.022a1.463,1.463,0,0,0-.161-.139l-9.485-8.461a.99.99,0,1,0-1.319,1.476l8.767,7.811-8.73,8.147a.988.988,0,0,0-.044,1.4,1.014,1.014,0,0,0,.726.314.993.993,0,0,0,.674-.263l8.862-8.264,2.4,2.141a.989.989,0,0,0,1.319-.007l2.47-2.207,8.811,8.344a.989.989,0,1,0,1.363-1.432Z"
              data-name="Path 151"
              fill="#fff"
              transform="translate(-51.466 -104.97)"
            />
          </svg>
        </div>
        <div class="rminfo">
          <h2 class="rmtt">
            {{ $t('contact') }}
          </h2>
          <p class="rmtxt">
            {{ $t('contact_desc') }}
          </p>
        </div>
      </div>
      <div class="contact-content">
        <div
          id="map"
          lat="40.406402"
          lng="49.865380"
        ></div>
      </div>
      <div class="row">
        <div class="col-12 col-sm-12 col-md-12 contact-lr">
          <div class="contact-details">
            <h2 class="cnt-title">
              {{ $t('contact_info') }}
            </h2>
            <div class="contact-items">
              <div class="contact-item contact_item">
                <div class="contact-email">
                  <!-- <img alt src="/img/email.svg" /> -->
                  <div v-for="(email,i) in $t('contactEmails')" :key="i">
                    <span>Email: &nbsp; <a :href="`mailto:${email}`">{{ email }}</a></span>
                  </div>
                </div>
                <ul class="contact-social">
                  <li>
                    <a href="https://instagram.com/otobaza" target="_blank">
                      <i class="fa fa-instagram"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.facebook.com/otobazacom/" target="_blank">
                      <i class="fa fa-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/company/otobaza" target="_blank">
                      <i class="fa fa-linkedin"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="col-12 col-sm-12 col-md-12 contact-lr">
          <ClientOnly>
            <ValidationObserver
              ref="observer"
              v-slot="{ invalid,handleSubmit }"
              slim
              tag="div"
            >
              <form @submit.prevent="handleSubmit(onSubmit)">
                <div class="container contact-form">
                  <div class="row">
                    <!-- error message -->
                    <div v-if="error" class="col-12 col-sm-12">
                      <div class="error-message">
                        <i class="fa fa-info-circle"></i>
                        <span>{{ $t('contact_fail') }}</span>
                      </div>
                    </div>
                    <!-- success message -->
                    <div v-if="success" class="col-12 col-sm-12">
                      <div class="success-message">
                        <i class="fa fa-info-circle"></i>
                        <span>{{ $t('contact_success') }}</span>
                      </div>
                    </div>

                    <div class="col-12 col-sm-6">
                      <ValidationProvider
                        v-slot="{errors,failed}"
                        name="first_name"
                        rules="required"
                      >
                        <FormInput
                          id="first_name"
                          v-model="contact.from_name"
                          :invalid="failed"
                          is-required
                          :label="$t('contactForm.name')"
                          title
                        >
                          <span class="invalid-feedback">{{ errors[0] }}</span>
                        </FormInput>
                      </ValidationProvider>
                    </div>
                    <div class="col-12 col-sm-6">
                      <ValidationProvider
                        v-slot="{errors,failed}"
                        name="email"
                        rules="required|email"
                      >
                        <FormInput
                          id="email"
                          v-model="contact.from_email"
                          :invalid="failed"
                          is-required
                          :label="$t('contactForm.email')"
                          title
                        >
                          <span class="invalid-feedback">{{ errors[0] }}</span>
                        </FormInput>
                      </ValidationProvider>
                    </div>
                    <div class="col-12 col-sm-12">
                      <ValidationProvider
                        v-slot="{errors,failed}"
                        name="message"
                        rules="required"
                      >
                        <FormTextarea
                          id="message"
                          v-model="contact.message"
                          :invalid="failed"
                          is-required
                          :label="$t('contactForm.message')"
                          title
                        >
                          <span class="invalid-feedback">{{ errors[0] }}</span>
                        </FormTextarea>
                      </ValidationProvider>
                    </div>
                    <div class="col-12 col-sm-12 text-right">
                      <button
                        class="btn contact-btn"
                        :disabled="loading"
                        type="submit"
                      >
                        <i v-if="loading" class="fa fa-spinner fa-spin"></i>
                        {{ $t('contactForm.send') }}
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </ValidationObserver>
          </ClientOnly>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import FormInput from '@/components/Common/FormInput'
import FormTextarea from '@/components/Common/FormTextarea'
import { localize } from 'vee-validate'
import { mapActions } from 'vuex'

export default {
  name: 'Contact',
  components: { FormTextarea, FormInput },
  layout: 'pages',
  data () {
    return {
      loading: false,
      success: false,
      error: false,
      contact: {
        from_name: '',
        from_email: '',
        message: ''
      }
    }
  },
  async mounted () {
    localize(this.$i18n.locale)
    let map = ''
    let marker = ''
    /* starts contact map */
    if ($('#map').length > 0) {
      function initMap (getId) {
        if (document.getElementById(getId)) {
          const lat = parseFloat(document.getElementById(getId).getAttribute('lat'))
          const lng = parseFloat(document.getElementById(getId).getAttribute('lng'))

          const location = { lat, lng }
          map = new google.maps.Map(document.getElementById(getId), {
            zoom: 12,
            disableDefaultUI: true,
            center: location,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            styles: [{ featureType: 'water', elementType: 'geometry', stylers: [{ color: '#e9e9e9' }, { lightness: 17 }] }, { featureType: 'landscape', elementType: 'geometry', stylers: [{ color: '#f5f5f5' }, { lightness: 20 }] }, { featureType: 'road.highway', elementType: 'geometry.fill', stylers: [{ color: '#ffffff' }, { lightness: 17 }] }, { featureType: 'road.highway', elementType: 'geometry.stroke', stylers: [{ color: '#ffffff' }, { lightness: 29 }, { weight: 0.2 }] }, { featureType: 'road.arterial', elementType: 'geometry', stylers: [{ color: '#ffffff' }, { lightness: 18 }] }, { featureType: 'road.local', elementType: 'geometry', stylers: [{ color: '#ffffff' }, { lightness: 16 }] }, { featureType: 'poi', elementType: 'geometry', stylers: [{ color: '#f5f5f5' }, { lightness: 21 }] }, { featureType: 'poi.park', elementType: 'geometry', stylers: [{ color: '#dedede' }, { lightness: 21 }] }, { elementType: 'labels.text.stroke', stylers: [{ visibility: 'on' }, { color: '#ffffff' }, { lightness: 16 }] }, { elementType: 'labels.text.fill', stylers: [{ saturation: 36 }, { color: '#333333' }, { lightness: 40 }] }, { elementType: 'labels.icon', stylers: [{ visibility: 'off' }] }, { featureType: 'transit', elementType: 'geometry', stylers: [{ color: '#f2f2f2' }, { lightness: 19 }] }, { featureType: 'administrative', elementType: 'geometry.fill', stylers: [{ color: '#fefefe' }, { lightness: 20 }] }, { featureType: 'administrative', elementType: 'geometry.stroke', stylers: [{ color: '#fefefe' }, { lightness: 17 }, { weight: 1.2 }] }]
          })
          marker = new google.maps.Marker({
            map: map,
            position: location,
            animation: google.maps.Animation.DROP,
            icon: '/css/icons/map-icon.svg'
          })
          marker.addListener('click', function () {
            $('.contact_details').removeClass('dnonemobile')
          })
          marker.addListener('click', toggleBounce)
        }
      }
      function toggleBounce () {
        if (marker.getAnimation() !== null) {
          marker.setAnimation(null)
        } else {
          marker.setAnimation(google.maps.Animation.BOUNCE)
        }
      }
      initMap('map')
      google.maps.event.addDomListener(window, 'load', initMap)
    }
    /* ends contact map */
  },
  methods: {
    ...mapActions({
      SEND_CONTACT_DETAILS: 'UI/SEND_CONTACT_DETAILS'
    }),
    async onSubmit () {
      this.loading = true
      await this.SEND_CONTACT_DETAILS({
        contact: this.contact
      }).then(response => {
        const { message } = response.data
        this.$swal.fire({
          position: 'top',
          toast: true,
          icon: 'success',
          timer: 5000,
          timerProgressBar: true,
          text: message,
          onClose: () => {
            this.success = false
          }
        })
        this.error = false
        this.success = true
      }).catch(error => {
        const { message } = error.response.data
        this.$swal.fire({
          position: 'top',
          toast: true,
          icon: 'error',
          timer: 3000,
          timerProgressBar: true,
          text: message,
          onClose: () => {
            this.errors = null
            this.error = false
          }
        })
        this.error = true
        this.success = false
      }).finally(() => {
        this.loading = false
        this.contact = {
          from_name: '',
          from_email: '',
          message: ''
        }
        this.$nextTick(() => {
          this.$refs.observer.reset()
        })
      })
    }
  }
}
</script>
