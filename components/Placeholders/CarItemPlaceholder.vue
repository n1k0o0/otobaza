<template lang="pug">
  .cars-item
    .cars-image
      img(src='/img/car-image.png', alt='car')
    .cars-details
      .cars-dtop
        h4.cars-dtop-tt
          | Mercedes-Benz
          p C-class(W204)
        a.cars-dtop-edit(href='#') Redaktə et
        a.cars-dtop-edit.remove(href='#')
          i.fa.fa-times
          | Sil
      .cars-dbottom
        .cars-dbottom-item
          strong İstehsal ili
          p 2006
        .cars-dbottom-item
          strong Mühərrikin həcmi
          p 3500
        .cars-dbottom-item
          strong Yürüş
          p 125.000km
        .cars-dbottom-item
          strong Sürət qutusu
          p avtomatik
</template>
<script>
export default {
  name: 'CarItemPlaceholder'
}
</script>
<style lang="scss" scoped>
  $color: #f3f3f3;
  .cars-item{
    * {
      user-select: none;
      pointer-events: none;
    }
    border-color: $color;
    .cars-dtop-edit {
      @include backgroundAnimation(#f3f3f3, #ecebeb);
      color: rgba(0,0,0,0);
      border-color: $color;
    }
    .cars-dbottom-item {
      color: rgba(0,0,0,0);
      @include backgroundAnimation(#f3f3f3, #ecebeb);
    }
    .cars-dtop-tt {
      color: rgba(0,0,0,0);
      @include backgroundAnimation(#f3f3f3, #ecebeb);
    }
    .cars-image {
      @include backgroundAnimation(#f3f3f3, #ecebeb);
      img {
        opacity: 0;
      }
    }
  }
</style>
