<template lang="pug">
  .container
    .mcontainer.mh60vh
      .row.cclass-top
        .col-12.col-sm-12.col-md-4
          .cclass-name.cclass-flex
            div.logo
              img(src='/img/bmv.png', alt='car-name')
            h4.cclass-tt BMW
        .col-12.col-sm-12.col-md-8
          .cclass-right
            .cclass-ginfo
              h4.ccginfott Ümumi məlumat
              p.ccginfotxt
                | Ümumi məhsul sayı:
                strong 200 000
              p.ccginfotxt
                | Bu ay yükələn məhsul:
                strong 12500
            .cclass-ginfo.mt16
              p.ccginfotxt
                | Ümumi məhsul sayı:
                strong 200 000
              p.ccginfotxt
                | Bu ay yükələn məhsul:
                strong 12500
            a.ccinfoall(href='#') Hamısına bax
      .row.all-cars
        .col-12.col-sm-12.col-md-6
          a(href='#')
            .all-car-item
              .all-car-details
                .all-car-name Mercedes A-class
                span Europe
        .col-12.col-sm-12.col-md-6
          a(href='')
            .all-car-item
              .all-car-details
                .all-car-name Mercedes A-class
                span Europe
        .col-12.col-sm-12.col-md-6
          a(href='#')
            .all-car-item
              .all-car-details
                .all-car-name Mercedes A-class
                span Europe
        .col-12.col-sm-12.col-md-6
          a(href='#')
            .all-car-item
              .all-car-details
                .all-car-name Mercedes A-class
                span Europe
        .col-12.col-sm-12.col-md-6
          a(href='#')
            .all-car-item
              .all-car-details
                .all-car-name Mercedes A-class
                span Europe
        .col-12.col-sm-12.col-md-6
          a(href='#')
            .all-car-item
              .all-car-details
                .all-car-name Mercedes A-class
                span Europe
        .col-12.col-sm-12.col-md-6
          a(href='#')
            .all-car-item
              .all-car-details
                .all-car-name Mercedes A-class
                span Europe
        .col-12.col-sm-12.col-md-6
          a(href='#')
            .all-car-item
              .all-car-details
                .all-car-name Mercedes A-class
                span Europe
        .col-12.col-sm-12.col-md-6
          a(href='#')
            .all-car-item
              .all-car-details
                .all-car-name Mercedes A-class
                span Europe
        .col-12.col-sm-12.col-md-6
          a(href='#')
            .all-car-item
              .all-car-details
                .all-car-name Mercedes A-class
                span Europe
        .col-12.col-sm-12.col-md-6
          a(href='#')
            .all-car-item
              .all-car-details
                .all-car-name Mercedes A-class
                span Europe
        .col-12.col-sm-12.col-md-6
          a(href='#')
            .all-car-item
              .all-car-details
                .all-car-name Mercedes A-class
                span Europe
        .col-12.col-sm-12.col-md-6
          a(href='#')
            .all-car-item
              .all-car-details
                .all-car-name Mercedes A-class
                span Europe
        .col-12.col-sm-12.col-md-6
          a(href='#')
            .all-car-item
              .all-car-details
                .all-car-name Mercedes A-class
                span Europe
</template>
<script>
export default {
  name: 'CarsPlaceholder'
}
</script>
<style lang="scss" scoped>
  .container {
    * {
      user-select: none;
      pointer-events: none;
    }
    .logo {
      @include backgroundAnimation();
      border-radius: 50%;
      height: 82px;
      width: 82px;
      overflow: hidden;
      img {
        opacity: 0;
      }
    }
    .cclass-tt {
      @include backgroundAnimation();
      color:rgba(0,0,0,0);
      margin-left: 10px;
    }
    .cclass-ginfo {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      .ccginfott {
        @include backgroundAnimation();
        color:rgba(0,0,0,0);
      }
      .ccginfotxt{
        @include backgroundAnimation();
        color:rgba(0,0,0,0);
      }
    }
    .ccinfoall {
      @include backgroundAnimation();
      color:rgba(0,0,0,0);
      border-color: #f3f3f3;
    }
    .all-car-item {
      @include backgroundAnimation();
      .all-car-name {
        color:rgba(0,0,0,0)
      }
      span {
        color:rgba(0,0,0,0)
      }
    }
  }
</style>
