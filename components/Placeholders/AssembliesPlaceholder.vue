<template lang="pug">
  .container
    .mcontainer.mh60vh
      .row.cclass-top
        .col-12.col-sm-12.col-md-4
          .cclass-name.cclass-flex
            .logo
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
      .row.cclass-innertop
        .cclass_inner_cover
          .logo2
            img(src='/img/car.png', alt='car')
          h5.cc_details_top
            span A-class
            p.ccdetails_bottom
              | Məhsul sayı:
              strong 22 000
          a.innertop-back(href='#') Geri qayıt
      // category description
      .row.cclass-description.mcclass-description
        .col-12.col-sm-12.cclass_description
          ul
            li
              span İlişmə muftası və hissələri
            li
              span Gövdə hissələri
            li
              span Sükan
            li
              span Transmissiya
            li
              span Kardan valı və differensial
            li
              span Mühərrik
            li
              span Şam və alışma sistemi
            li
              span Yağ və maye
            li
              span Qayış, zəncir, diyircəklər
            li
              span İntiqal valı və oynaqlı birləşmələr
            li
              span Yastıq (podşipnik)
            li
              span Filtrlər
            li
              span Asqı və ling
            li
              span İnteryer və Rahatlıq
            li
              span Yanacaq təchizat sistemi
            li
              span Qızdırıcı
            li
              span Buksir və hissələri
            li
              span Mühərrik soyutma sistemi
            li
              span Borular və şlanqlar
            li
              span Kipləşdiricilər
            li
              span Amartizator, spiralvari yay, resorlar
            li
              span Elektrik hissələri
            li
              span Səsboğucu sistem
            li
              span Sensor, Rele, İdarəetmə bloku
            li
              span Havanın kondisionerləşdirilməsi
            li
              span Aksessuar
            li
              span Qızdırıcı
            li
              span Buksir və hissələri
            li
              span Mühərrik soyutma sistemi
            li
              span Borular və şlanqlar
            li
              span Kipləşdiricilər
            li
              span Amartizator, spiralvari yay, resorlar
            li
              span Elektrik hissələri
            li
              span Səsboğucu sistem
            li
              span Sensor, Rele, İdarəetmə bloku
            li
              span Havanın kondisionerləşdirilməsi
            li
              span Aksessuar
</template>
<script>
export default {
  name: 'AssembliesPlaceholder'
}
</script>
<style lang="scss" scoped>
.container {
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
  .cclass-top {
    border-color: #f3f3f3;
  }
  .cclass-innertop {
    @include backgroundAnimation();
  }
  .logo2 {
    opacity: 0;
  }
  .cclass_inner_cover .cc_details_top .ccdetails_bottom,
  .cclass_inner_cover .cc_details_top span{
    color:rgba(0,0,0,0)
  }
  .innertop-back {
    color:rgba(0,0,0,0);
    &:before {
      opacity: 0;
    }
  }
  .cclass_description ul li {
    span {
      @include backgroundAnimation();
      color:rgba(0,0,0,0);
    }
  }
}
</style>
