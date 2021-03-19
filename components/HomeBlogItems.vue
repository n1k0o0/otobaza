<template>
  <div class="row home-category">
    <div class="col-12 col-sm-12 col-md-6 pr5 home-category-item">
      <div class="home-category1">
        <a :href="blog1.link" target="_blank">
          <img alt="category" :src="blog1.image" />
          <div class="home-ct2-txt">
            <h4>{{ blog1.title }}</h4>
            <span
              class="hh_dtls"
            >{{ $t('more') }}</span>
          </div>
        </a>
      </div>
      <div class="home-category34">
        <div class="home-category3">
          <a :href="blog2.link" target="_blank">
            <div class="hc34">
              <p>{{ blog2.title }} </p>
              <span class="hh_dtls catbtn-hide">{{ $t('more') }}</span>
            </div>
            <img alt="category" :src="blog2.image" />
          </a>
        </div>
        <div class="home-category4">
          <a :href="blog3.link" target="_blank">
            <div class="hc34">
              <p>{{ blog3.title }} </p>
              <span class="hh_dtls catbtn-hide">{{ $t('more') }}</span>
            </div>
            <img alt="category" :src="blog3.image" />
          </a>
        </div>
      </div>
    </div>
    <div class="col-12 col-sm-12 col-md-6 home-category-item">
      <div class="home-category2">
        <a :href="blog4.link" target="_blank">
          <img alt="category" :src="blog4.image" />
          <div class="home-ct2-txt">
            <h4>{{ blog4.title }}</h4>
            <span class="hh_dtls">{{ $t('more') }}</span>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  name: 'HomeBlogItems',
  computed: {
    ...mapGetters({
      blog_items: 'UI/blog_items'
    }),
    blog1 () {
      return this.blog_items[0]
    },
    blog2 () {
      return this.blog_items[1]
    },
    blog3 () {
      return this.blog_items[2]
    },
    blog4 () {
      return this.blog_items[3]
    }
  },
  methods: {
    openSite (link) {
      window.open(link)
    }
  }
}
</script>
