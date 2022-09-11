<template lang="pug">
  .container
    .search_wrap.d-flex.flex-column
      .hr-wrap
        h1.title.hr-text.rmtxt Ehtiyyat hisseler
      .filter.row.mt-4
        .filter_item.col-md-4.col-lg-3.col-xl-3.col-sm-12
          input.border-0.rmtt
        .filter_item.col-md-4.col-lg-3.col-xl-3.col-sm-12
          input.border-0.rmtt
        .filter_item.col-md-4.col-lg-3.col-xl-3.col-sm-12
          input.border-0.rmtt
        .filter_item.col-md-4.col-lg-3.col-xl-2
          input.border-0.rmtt

      .vin_search.d-flex.justify-content-center.mt-4
        div.w-50.position-relative
          input.form-control.border-0.rmtt
      .sort_wrap.text-right
        span.rmtxt
          | Qiymet
          img(src="")
        span.rmtxt
          | Yeni
          img(src="")
      .search_results
        .title_wrapper.hr-wrap.my-4
          h5.hr-text.font-weight-bold.rmtxt Axtaris Uzre netice verdi
        template
          .search_results_items.d-flex.flex-raw.flex-wrap.justify-content-center
            .search_results_items_item(v-for="(card,index) in 4", :key="index")
              img(src="/img/placeholder.png" , style="height:150px")
              hr
              div
                h5.rmtxt test
                h6.rmtxt sss
              div.text-right
                span.font-weight-bold.rmtxt ssss
              div
                button.btn.px-3.py-1.mt-2.position-relative.w-100.rmtt
                  .fa.fa-shopping-cart.fa-lg.fa-fw
                  | sebete elave et
          .search_results_more.d-flex.justify-content-center
            button.btn-light.px-4.py-2.border-0.rmtxt Daha Coxuna bax

</template>
<script>
export default {
  name: 'SearchPlaceholder'
}
</script>
<style lang="scss" scoped>
.container {
  margin: 50px auto;

  .search_results_items {
    gap: 10px;
  }

  .search_wrap {
    background-color: #fff;
    border-radius: 16px;
    margin: 20px auto;
    padding: 50px 30px;

    .search_results_items_item {
      height: 300px;
    }
  }

  * {
    user-select: none;
    pointer-events: none;
  }

  .kubflex {
    @include backgroundAnimation();

    svg {
      opacity: 0;
    }
  }

  .rmtt {
    @include backgroundAnimation();
    color: rgba(0, 0, 0, 0)
  }

  .rmtxt {
    @include backgroundAnimation();
    color: rgba(0, 0, 0, 0);
  }

  .choose-motor label {
    @include backgroundAnimation();
    color: rgba(0, 0, 0, 0)
  }

  .choose-motor {
    &:after {
      display: none;
    }

    select {
      color: rgba(0, 0, 0, 0);
      border-color: #f3f3f3;
      @include backgroundAnimation();
    }
  }

  .cclass-back {
    &:before {
      display: none
    }

    span {
      color: rgba(0, 0, 0, 0);
      @include backgroundAnimation();
    }
  }

  .buy-filter {
    @include backgroundAnimation();

    * {
      opacity: 0;
    }
  }

  .car_details_item {
    @include backgroundAnimation();

    * {
      opacity: 0;
    }
  }
}
</style>
