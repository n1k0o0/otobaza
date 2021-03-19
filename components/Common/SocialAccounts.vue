<template>
  <div class="form-group ">
    <label>{{ $t('add_social_title') }}</label>
    <div
      v-for="(social,index) in social_links"
      :key="index"
      class="flex-social mb-2"
    >
      <div class="position-relative choose-social">
        <select
          :id="`social-network-${social['name']}`"
          v-model="social['name']"
          class="form-control"
          name="social-network"
        >
          <option
            v-for="(soc,n_i) in socialNames"
            :key="n_i"
            :disabled="soc.disabled"
            :value="soc.name"
          >
            {{ soc.name }}
          </option>
        </select>
      </div>
      <input
        v-model="social['value']"
        class="form-control social-link"
        name="social-link"
        :placeholder="$t('enter_link')"
        type="url"
      />
      <button
        class="add-social"
        type="button"
        @click="addSocial(index)"
      >
        +
      </button>
      <button
        class="remove-social"
        type="button"
        @click="removeSocial(index)"
      >
        x
      </button>
    </div>
  </div>
</template>
<script>
export default {
  name: 'SocialAccounts',
  props: {
    value: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {
      socialAccounts: ['facebook', 'instagram', 'twitter', 'linkedin'],
      social_links: this.value.length ? this.value : [
        { name: 'facebook', value: '' }
      ]
    }
  },
  computed: {
    socialNames () {
      const selectedSocials = this.social_links.map(soc => soc.name)
      const socialAccountsArray = this.socialAccounts.map(soc => {
        return {
          name: soc,
          disabled: false
        }
      })
      return socialAccountsArray.filter(soc => {
        if (selectedSocials.includes(soc.name)) {
          soc.disabled = true
        }
        return soc
      })
    }
  },
  watch: {
    social_links: {
      deep: true,
      handler (val) {
        this.$emit('input', val.filter(item => item.value))
      }
    }
  },
  methods: {
    addSocial () {
      if (this.social_links.length !== this.socialAccounts.length) {
        const notSelected = this.socialNames.filter(soc => !soc.disabled).shift()
        const { name } = notSelected
        this.social_links.push({
          name,
          value: ''
        })
      }
    },
    removeSocial (index) {
      if (this.social_links.length !== 1) {
        this.social_links.splice(index, 1)
      } else {
        this.social_links[index].value = ''
      }
    }
  }
}
</script>
