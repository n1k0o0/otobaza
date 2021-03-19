<template>
  <div class="d-flex align-items-center">
    <div v-if="countryName" class="dropdown langdrop mr-2">
      <button
        id="dropcountry"
        aria-expanded="false"
        aria-haspopup="true"
        class="btn dropdown-toggle"
        data-toggle="dropdown"
        type="button"
      >
        {{ countryName }}
      </button>
      <div aria-labelledby="dropdownlang" class="dropdown-menu">
        <a
          v-for="country in countries"
          :key="country.id"
          class="dropdown-item"
          :class="{'active': geo.country === country.id}"
          href="#"
          @click.prevent="setCountry(country.id)"
        >{{ country.native_name }}</a>
      </div>
    </div>
    <div v-if="cityName" class="dropdown langdrop mr-2">
      <button
        id="droplang"
        aria-expanded="false"
        aria-haspopup="true"
        class="btn dropdown-toggle"
        data-toggle="dropdown"
        type="button"
      >
        {{ cityName }}
      </button>
      <div aria-labelledby="dropdownlang" class="dropdown-menu">
        <a
          v-for="city in cities"
          :key="city.id"
          class="dropdown-item"
          :class="{'active': geo.city === city.id}"
          href="#"
          @click.prevent="setCity(city.id)"
        >{{ city.name }}</a>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapMutations } from 'vuex'

export default {
  name: 'GeoLocation',
  computed: {
    ...mapGetters({
      countries: 'UI/countries',
      geo: 'UI/geo'
    }),
    cities () {
      const country = this.countries.find(country => country.id === this.geo.country)
      return country?.cities
    },
    countryName () {
      const country = this.countries.find(country => country.id === this.geo.country)
      return country?.native_name || ''
    },
    cityName () {
      const country = this.countries.find(country => country.id === this.geo.country)
      return country?.cities.find(city => city.id === this.geo.city)?.name || ''
    }
  },
  methods: {
    ...mapMutations({
      SET_GEO: 'UI/SET_GEO'
    }),
    setCountry (id) {
      const geo = this.$auth.$storage.getUniversal('geo')
      geo.country = id
      const country = this.countries.find(country => country.id === id)
      geo.city = country?.cities?.[0]?.id
      this.$auth.$storage.setUniversal('geo', geo)
      this.SET_GEO(geo)
    },
    setCity (id) {
      const geo = this.$auth.$storage.getUniversal('geo')
      const selectedCountry = this.countries.find(country => country.id === geo.country)
      const city = selectedCountry.cities.find(city => city.id === id)
      geo.city = id
      geo.lat = city.lat
      geo.lng = city.lng
      this.$auth.$storage.setUniversal('geo', geo)
      this.SET_GEO(geo)
    }
  }
}
</script>
