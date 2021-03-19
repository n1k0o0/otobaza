<template>
  <div class="row home-category">
    <div class="col-12 col-sm-12 col-md-6 pr5 home-category-item">
      <div class="home-category1">
        <a href="catalog-alphabet.html">
          <div class="home-ct2-txt">
            <h4>Scelerisque lorem, sed ultricies massa.</h4>
            <span class="hh_dtls">Məhsullara bax</span>
          </div>
        </a>
      </div>
      <div class="home-category34">
        <div class="home-category3">
          <a href="catalog-alphabet.html">
            <div class="hc34">
              <p>25000 + </p>
              <span>əkər və disk</span>
            </div>
          </a>
        </div>
        <div class="home-category4">
          <a href="catalog-alphabet.html">
            <div class="hc34">
              <p>25000 + </p>
              <span>əkər və disk</span>
            </div>
          </a>
        </div>
      </div>
    </div>
    <div class="col-12 col-sm-12 col-md-6 home-category-item">
      <div class="home-category2">
        <a href="catalog-alphabet.html">
          <div class="home-ct2-txt">
            <h4>Fusce sed scelerisque lorem.</h4>
            <span class="hh_dtls">Məhsullara bax</span>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'HomeCaregoryPlaceholder'
}
</script>
<style lang="scss" scoped>
  .home-category1,
  .home-category2,
  .home-category3,
  .home-category4, {
    @include backgroundAnimation();
    a {
      pointer-events: none;
    }
    h4 {
      background: #f7f7f7;
      opacity: 0;
    }
    .hh_dtls {
      opacity: 0;
    }
    .hc34 {
      opacity: 0;
    }
  }
</style>
