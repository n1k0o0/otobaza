<template lang="pug">
.catalog-alphabet
  .ca-item
    code.ca-letter A
    .ca-list
      .ca_list
        a Audi
      .ca_list
        a Alfa Romeo
      .ca_list
        a Acura
      .ca_list
        a Austin
      .ca_list
        a Asia Motors
  .ca-item
    code.ca-letter B
    .ca-list
      .ca_list
        a BMW
      .ca_list
        a BAW
      .ca_list
        a Brilliance
      .ca_list
        a Buick
      .ca_list
        a BYD
  .ca-item
    code.ca-letter C
    .ca-list
      .ca_list
        a Cadillac
      .ca_list
        a Chery
      .ca_list
        a Chevrolet
      .ca_list
        a Chrysler
      .ca_list
        a Citroen
      .ca_list
        a Chana
      .ca_list
        a Changan
      .ca_list
        a Changfeng
  .ca-item
    code.ca-letter D
    .ca-list
      .ca_list
        a Daihatsu
      .ca_list
        a Dodge
      .ca_list
        a Dadi
      .ca_list
        a DAF
      .ca_list
        a Derways
      .ca_list
        a Dongfeng
  .ca-item
    code.ca-letter E
    .ca-list
      .ca_list
        a Eagle
  .ca-item
    code.ca-letter F
    .ca-list
      .ca_list
        a Fiat
      .ca_list
        a Ford
      .ca_list
        a FAW
      .ca_list
        a Foton
  .ca-item
    code.ca-letter G
    .ca-list
      .ca_list
        a Geely
      .ca_list
        a Great Wall
      .ca_list
        a Groz
  .ca-item
    code.ca-letter H
    .ca-list
      .ca_list
        a Honda
      .ca_list
        a Hyundai
      .ca_list
        a Hafei
      .ca_list
        a Haima
      .ca_list
        a Higer
  .ca-item
    code.ca-letter I
    .ca-list
      .ca_list
        a Infiniti
      .ca_list
        a Iveco
      .ca_list
        a Isuzu
  .ca-item
    code.ca-letter J
    .ca-list
      .ca_list
        a Jaguar
      .ca_list
        a JAC
      .ca_list
        a Jeep
</template>
<script>
export default {
  name: 'CatalogAlphabetPlaceholder'
}
</script>
<style lang="scss" scoped>
  .catalog-alphabet {
    * {
      user-select: none;
      pointer-events: none;
    }
    .ca_list a {
      color: rgba(0,0,0,0);
      @include backgroundAnimation(#f3f3f3, #ecebeb);
    }
    .ca-letter {
      color: rgba(0,0,0,0);
      @include backgroundAnimation(#f3f3f3, #ecebeb);
    }
  }
</style>
