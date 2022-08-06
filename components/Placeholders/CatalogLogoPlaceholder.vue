<template lang="pug">
  .catalog-logo
    .row
      .col-6.col-sm-4.col-md-2
        .catalog_logo
          a(href='#')
            span.logo
              img.cl-img(src='/img/cl2.png', alt='catalog')
            span.cl-tt Audi
      .col-6.col-sm-4.col-md-2
        .catalog_logo
          a(href='#')
            span.logo
              img.cl-img(src='/img/cl2.png', alt='catalog')
            span.cl-tt Alfa-Romeo
      .col-6.col-sm-4.col-md-2
        .catalog_logo
          a(href='#')
            span.logo
              img.cl-img(src='/img/cl2.png', alt='catalog')
            span.cl-tt Acura
      .col-6.col-sm-4.col-md-2
        .catalog_logo
          a(href='#')
            span.logo
              img.cl-img(src='/img/cl2.png', alt='catalog')
            span.cl-tt Asia-motors
      .col-6.col-sm-4.col-md-2
        .catalog_logo
          a(href='#')
            span.logo
              img.cl-img(src='/img/cl2.png', alt='catalog')
            span.cl-tt BMW
      .col-6.col-sm-4.col-md-2
        .catalog_logo
          a(href='#')
            span.logo
              img.cl-img(src='/img/cl2.png', alt='catalog')
            span.cl-tt Buick
      .col-6.col-sm-4.col-md-2
        .catalog_logo
          a(href='#')
            span.logo
              img.cl-img(src='/img/cl2.png', alt='catalog')
            span.cl-tt Asia-motors
      .col-6.col-sm-4.col-md-2
        .catalog_logo
          a(href='#')
            span.logo
              img.cl-img(src='/img/cl2.png', alt='catalog')
            span.cl-tt BMW
      .col-6.col-sm-4.col-md-2
        .catalog_logo
          a(href='#')
            span.logo
              img.cl-img(src='/img/cl2.png', alt='catalog')
            span.cl-tt Buick
      .col-6.col-sm-4.col-md-2
        .catalog_logo
          a(href='#')
            span.logo
              img.cl-img(src='/img/cl2.png', alt='catalog')
            span.cl-tt Mercedes-Benz
      .col-6.col-sm-4.col-md-2
        .catalog_logo
          a(href='#')
            span.logo
              img.cl-img(src='/img/cl2.png', alt='catalog')
            span.cl-tt Alpha-Romeo
      .col-6.col-sm-4.col-md-2
        .catalog_logo
          a(href='#')
            span.logo
              img.cl-img(src='/img/cl2.png', alt='catalog')
            span.cl-tt Acura
      .col-6.col-sm-3.col-md-2
        .catalog_logo
          a(href='#')
            span.logo
              img.cl-img(src='/img/cl2.png', alt='catalog')
            span.cl-tt Alfa-Romeo
      .col-6.col-sm-4.col-md-2
        .catalog_logo
          a(href='#')
            span.logo
              img.cl-img(src='/img/cl2.png', alt='catalog')
            span.cl-tt Acura
      .col-6.col-sm-4.col-md-2
        .catalog_logo
          a(href='#')
            span.logo
              img.cl-img(src='/img/cl2.png', alt='catalog')
            span.cl-tt BMW
      .col-6.col-sm-4.col-md-2
        .catalog_logo
          a(href='#')
            span.logo
              img.cl-img(src='/img/cl2.png', alt='catalog')
            span.cl-tt Buick
      .col-6.col-sm-4.col-md-2
        .catalog_logo
          a(href='#')
            span.logo
              img.cl-img(src='/img/cl2.png', alt='catalog')
            span.cl-tt Asia-motors
      .col-6.col-sm-4.col-md-2
        .catalog_logo
          a(href='#')
            span.logo
              img.cl-img(src='/img/cl2.png', alt='catalog')
            span.cl-tt Audi
      .col-6.col-sm-4.col-md-2
        .catalog_logo
          a(href='#')
            span.logo
              img.cl-img(src='/img/cl2.png', alt='catalog')
            span.cl-tt Buick
      .col-6.col-sm-4.col-md-2
        .catalog_logo
          a(href='#')
            span.logo
              img.cl-img(src='/img/cl2.png', alt='catalog')
            span.cl-tt Mercedes-Benz
      .col-6.col-sm-4.col-md-2
        .catalog_logo
          a(href='#')
            span.logo
              img.cl-img(src='/img/cl2.png', alt='catalog')
            span.cl-tt Alpha-Romeo
      .col-6.col-sm-4.col-md-2
        .catalog_logo
          a(href='#')
            span.logo
              img.cl-img(src='/img/cl2.png', alt='catalog')
            span.cl-tt Acura
      .col-6.col-sm-3.col-md-2
        .catalog_logo
          a(href='#')
            span.logo
              img.cl-img(src='/img/cl2.png', alt='catalog')
            span.cl-tt Alfa-Romeo
      .col-6.col-sm-4.col-md-2
        .catalog_logo
          a(href='#')
            span.logo
              img.cl-img(src='/img/cl2.png', alt='catalog')
            span.cl-tt Acura
</template>
<script>
export default {
  name: 'CatalogLogoPlaceholder'
}
</script>
<style lang="scss" scoped>
  .catalog-logo {
    * {
      user-select: none;
      pointer-events: none;
    }
    .catalog_logo {
      span.logo {
        position: relative;
        display: block;
        @include backgroundAnimation();
        img {
          opacity: 0;
        }
      }
    }
    .cl-tt {
      @include backgroundAnimation();
      color:rgba(0,0,0,0)
    }
  }
</style>
