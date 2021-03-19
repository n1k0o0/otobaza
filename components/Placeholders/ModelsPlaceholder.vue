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
      .row.cclass-items
        .col-12.col-sm-12
          a.cclass-back(href='#')
            span Geri qayıt
      .row.class_items.mobile-cclass-items
        .col-12.col-sm-4.col-md-4.col-lg-3
          .cclass_item
            a(href='#')
              h5.ccdetails_top
                span A-class
              p.ccdetails_bottom
                span Məhsul sayı:
                strong 22 000
        .col-12.col-sm-4.col-md-4.col-lg-3
          .cclass_item
            a(href='#')
              h5.ccdetails_top
                span A-class
              p.ccdetails_bottom
                span Məhsul sayı:
                strong 22 000
        .col-12.col-sm-4.col-md-4.col-lg-3
          .cclass_item
            a(href='#')
              h5.ccdetails_top
                span A-class
              p.ccdetails_bottom
                span Məhsul sayı:
                strong 22 000
        .col-12.col-sm-4.col-md-4.col-lg-3
          .cclass_item
            a(href='#')
              h5.ccdetails_top
                span A-class
              p.ccdetails_bottom
                span Məhsul sayı:
                strong 22 000
        .col-12.col-sm-4.col-md-4.col-lg-3
          .cclass_item
            a(href='#')
              h5.ccdetails_top
                span A-class
              p.ccdetails_bottom
                span Məhsul sayı:
                strong 22 000
        .col-12.col-sm-4.col-md-4.col-lg-3
          .cclass_item
            a(href='#')
              h5.ccdetails_top
                span A-class
              p.ccdetails_bottom
                span Məhsul sayı:
                strong 22 000
        .col-12.col-sm-4.col-md-4.col-lg-3
          .cclass_item
            a(href='#')
              h5.ccdetails_top
                span A-class
              p.ccdetails_bottom
                span Məhsul sayı:
                strong 22 000
        .col-12.col-sm-4.col-md-4.col-lg-3
          .cclass_item
            a(href='#')
              h5.ccdetails_top
                span A-class
              p.ccdetails_bottom
                span Məhsul sayı:
                strong 22 000
        .col-12.col-sm-4.col-md-4.col-lg-3
          .cclass_item
            a(href='#')
              h5.ccdetails_top
                span A-class
              p.ccdetails_bottom
                span Məhsul sayı:
                strong 22 000
        .col-12.col-sm-4.col-md-4.col-lg-3
          .cclass_item
            a(href='#')
              h5.ccdetails_top
                span A-class
              p.ccdetails_bottom
                span Məhsul sayı:
                strong 22 000
        .col-12.col-sm-4.col-md-4.col-lg-3
          .cclass_item
            a(href='#')
              h5.ccdetails_top
                span A-class
              p.ccdetails_bottom
                span Məhsul sayı:
                strong 22 000
        .col-12.col-sm-4.col-md-4.col-lg-3
          .cclass_item
            a(href='#')
              h5.ccdetails_top
                span A-class
              p.ccdetails_bottom
                span Məhsul sayı:
                strong 22 000
</template>
<script>
export default {
  name: 'ModelsPlaceholder'
}
</script>
<style lang="scss" scoped>
  .container {
    * {
      pointer-events: none;
      user-select: none;
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
    .cclass-back {
      &:before {
        @include backgroundAnimation();
        color:rgba(0,0,0,0);
      }
      span {
        @include backgroundAnimation();
        color:rgba(0,0,0,0);
      }
    }
    .ccdetails_top {
      span {
        @include backgroundAnimation();
        color:rgba(0,0,0,0);
      }
      &:after {
        @include backgroundAnimation();
        color:rgba(0,0,0,0);
      }
    }
    .ccdetails_bottom {
      span,strong {
        @include backgroundAnimation();
        color:rgba(0,0,0,0);
      }
    }
    .cclass_item:hover {
      background: none;
      border-color: #e2e2e2;
    }
  }
</style>
