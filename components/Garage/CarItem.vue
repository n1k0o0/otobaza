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
  name: 'CarItem'
}
</script>
