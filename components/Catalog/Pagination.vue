<template lang="pug">
  .col-12.col-sm-12.text-center
    ul.custom_pagination
      li(v-if="!isInFirstPage")
        a(:href='url(this.currentPage - 1)' @click.prevent="onClickPreviousPage")
          span {{ $t('prev') }}
      li(v-for='page in pages' :class='{ active: isPageActive(page.name), disabled:page.isDisabled}')
        a(
          :href="url(page.name)"
          @click.prevent='onClickPage(page.name)') {{ page.name }}
      li(v-if="!isInLastPage")
        a(:href='url(this.currentPage + 1)' @click.prevent="onClickNextPage")
          span {{ $t('next') }}
</template>
<script>
import { getUrlSlug, setNuxtLink } from '@/utils'
export default {
  name: 'Pagination',
  props: {
    maxVisibleButtons: {
      type: Number,
      required: false,
      default: 3
    },
    pagination: {
      type: Object,
      default: () => {}
    },
    urlType: {
      type: String,
      default: 'assembly'
    }
  },
  computed: {
    total () {
      return this.pagination.total
    },
    totalPages () {
      return Math.round(this.pagination.total / this.pagination.per_page)
    },
    currentPage () {
      return this.pagination.current_page
    },
    startPage () {
      if (this.currentPage === 1) {
        return 1
      }

      if (this.currentPage === this.totalPages) {
        return this.totalPages - this.maxVisibleButtons + 1
      }

      return this.currentPage - 1
    },
    endPage () {
      return Math.min(this.startPage + this.maxVisibleButtons - 1, this.totalPages)
    },
    pages () {
      const range = []

      // eslint-disable-next-line no-loops/no-loops
      for (let i = this.startPage; i <= this.endPage; i += 1) {
        range.push({
          name: i,
          isDisabled: i === this.currentPage
        })
      }

      return range
    },
    isInFirstPage () {
      return this.currentPage === 1
    },
    isInLastPage () {
      return this.currentPage === this.totalPages
    }
  },
  methods: {
    url (page) {
      if (this.urlType === 'assembly') {
        const { model, car, assembly, name } = getUrlSlug(this.$route.params.slug, 'assembly')
        const data = {
          page,
          model,
          car,
          assembly,
          name,
          query: this.$route.query
        }
        return setNuxtLink(this, 'assembly', data)
      }
      if (this.urlType === 'order') {
        return this.localePath({
          name: 'garage-orders',
          query: {
            page
          }
        }, this.$i18n.locale)
      }
      if (this.urlType === 'part') {
        const { legacyId, mfrid, assemblyGroupNodeid } = getUrlSlug(this.$route.params.slug, 'part')
        return this.localePath({
          name: 'part-slug',
          params: {
            slug: `p-${page}-${legacyId}-${mfrid}-${assemblyGroupNodeid}`
          }
        }, this.$i18n.locale)
      }
      if (this.urlType === 'dismantles') {
        return this.localePath({
          name: 'dismantles-slug',
          params: {
            slug: `p-${page}`
          }
        }, this.$i18n.locale)
      }
    },
    onClickPage (page) {
      this.$emit('pagechanged', page)
      setTimeout(() => {
        this.$router.push(this.url(page))
      }, 10)
    },
    onClickPreviousPage () {
      const page = this.currentPage - 1
      this.$emit('pagechanged', page)
      setTimeout(() => {
        this.$router.push(this.url(page))
      }, 10)
    },
    onClickNextPage () {
      const page = this.currentPage + 1
      this.$emit('pagechanged', page)
      setTimeout(() => {
        this.$router.push(this.url(page))
      }, 10)
    },
    isPageActive (page) {
      return this.currentPage === page
    }
  }
}
</script>
