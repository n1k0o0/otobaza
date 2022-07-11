<template lang="pug">
  .search_results
    .title_wrapper.hr-wrap.my-4
      h5.hr-text.font-weight-bold Axtaris Uzre {{parts.length}} netice verdi
    template(v-if="parts.length")
      .search_results_items.d-flex.flex-raw.flex-wrap.justify-content-center
        n-link(:to="localePath({\
                    name: 'search-slug',\
                    params: {\
                    slug: 'nissan-30005-masin-kataloqu'\
                    }\
                    })").search_results_items_item(v-for="(card,index) in parts", :key="index")
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

      .search_results_more
        button.btn-light.px-4.py-2 Daha Coxuna bax
      .search_results_top
        button.btn(@click="scrollTop")
          <i class="fa fa-2x fa-angle-up" aria-hidden="true"></i>
    .search_results_not-found(v-else)
      p *  Tapa bilmədiyiniz ehtiyyat hissəni bizə yazın,biz sizin əvəzinizə axtarıb sizinlə əlaqə saxlıyaq…
      button.btn.light-blue Elaqe saxla

</template>

<script>
export default {
  name: 'ResultParts',
  props: {
    parts: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    scrollTop () {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }
}
</script>

<style lang="scss" scoped>
.search_results {
  &_items {
    gap: 12px;

    &_item {
      border: 1px solid #ebebeb;
      border-radius: 5px;
      padding: 25px;
      width: 205px;

      span {
        font-size: 1.1rem;
        color: red;
      }

      button {
        font-size: 14px;
      }

    }
  }

  &_more {
    display: flex;
    justify-content: center;
    margin-top: 50px;
  }

  &_top {
    display: flex;
    justify-content: end;
  }

  &_not-found {
    font-size: 20px;
    color: #f41414;
    padding-left: 75px;
  }
}

.btn {
  border-radius: 5px;
  background-color: #4a8ee9;
  color: #fff;
}
</style>
