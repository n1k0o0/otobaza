<template lang="pug">
  .container
    .user-data
      .udata-item
        .data-item
          p {{ $t('validation.names.first_name_last_name') }}
          span {{name}}
        .data-item
          p {{ $t('validation.names.email') }}
          span {{email}}
        .data-item
          p {{ $t('validation.names.phone') }}
          span {{phone}}
      .udata-item
        .data-item
          p {{ $t('validation.names.social_links') }}
          span {{socialLinks}}
        .data-item
          p {{ $t('validation.names.gender') }}
          span {{gender}}
        .data-item
          p {{ $t('validation.names.currency') }}
          span {{currency}}
      .udata-item
        .data-item
          p {{ $t('validation.names.address') }}
          span {{address}}
        .data-item
          p {{ $t('validation.names.country') }}
          span {{country}}
        .data-item
          p {{ $t('validation.names.city') }}
          span {{city}}
</template>
<script>
export default {
  name: 'GarageUserShow',
  computed: {
    name () {
      return `${this.$auth?.user?.first_name} ${this.$auth?.user?.last_name}`
    },
    email () {
      return this.$auth?.user?.email
    },
    phone () {
      return this.$auth?.user?.phone
    },
    socialLinks () {
      return this.$auth?.user?.social_links ? this.$auth?.user?.social_links
        .map((item) => {
          const name = item.name
          return name[0].toUpperCase() + name.slice(1)
        })
        .join(',') : '-'
    },
    gender () {
      return this.$auth?.user?.gender
    },
    currency () {
      return this.$auth?.user?.currency?.name
    },
    address () {
      return this.$auth?.user?.address || '-'
    },
    country () {
      return this.$auth?.user?.country?.native_name
    },
    city () {
      return this.$auth?.user?.city.name
    }
  }
}
</script>
