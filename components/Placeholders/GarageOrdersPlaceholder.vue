<template lang="pug">
  .row.car-details-items
    .col-12.col-sm-12.buy_result_cover
      p.buy-result Ümumilikdə 167 məhsul satın almısınız
    .col-12.col-sm-12.details-overflow.mbuy-items-cover
      table.car_details_item
        tbody
          tr
            td
              span.name 2019 model Vossen 20’ disklər
            td
              .car_details_row
                p Mağaza
                span S-Line
            td
              .car_details_row
                p Qiymət
                span 1200AZN
            td
              .car_details_row
                p Miqdar
                span 6 ədəd
            td
              button.buy-see-more.buy-see-more-js(
                type='button'
              ) Ətraflı
      table.car_details_item
        tbody
          tr
            td
              span.name 2019 model Vossen 20’ disklər
            td
              .car_details_row
                p Mağaza
                span S-Line
            td
              .car_details_row
                p Qiymət
                span 1200AZN
            td
              .car_details_row
                p Miqdar
                span 6 ədəd
            td
              button.buy-see-more.buy-see-more-js(
                type='button'
              ) Ətraflı
    .col-12.col-sm-12.text-center
        ul.custom_pagination
          li
            a(href='#')
              i.fa.fa-angle-double-left
              span Əvvəl
          li.active
            a(href='#') 1
          li
            a(href='#') 2
          li
            a(href='#') 3
          li
            a(href='#') ...
          li
            a(href='#') 32
          li.active
            a(href='#')
              span Sonra
              i.fa.fa-angle-double-right
</template>
<script>
import OrderItem from '@/components/Catalog/OrderItem'
export default {
  name: 'GarageOrdersPlaceholder',
  components: { OrderItem }
}
</script>
<style lang="scss" scoped>
  .car-details-items {
    * {
      user-select: none;
      pointer-events: none;
    }
    .buy-result {
      @include backgroundAnimation();
      color: rgba(0,0,0,0)
    }
    .name {
      @include backgroundAnimation();
      color: rgba(0,0,0,0)
    }
    .car_details_row {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      p {
        margin-bottom: 5px;
        @include backgroundAnimation();
        color: rgba(0,0,0,0)
      }
      span {
        @include backgroundAnimation();
        color: rgba(0,0,0,0)
      }
    }
    .buy-see-more {
      @include backgroundAnimation();
      color: rgba(0,0,0,0);
      border:0;
    }
    .custom_pagination {
      li {
        a {
          @include backgroundAnimation();
          color: rgba(0,0,0,0);
          border:0;
        }
      }
    }
  }
</style>
