<template lang="pug">
  .container
    .mcontainer.mh60vh
      .rm_container.rm_container_mobile
        .response-message.about-title
          .mkub.mkubsuccess.kubflex
          .rminfo
            h2.rmtt
              span Mercedes-Benz / B-class
            p.rmtxt
              span Əyləc sistemi
        .form-group.choose-motor
          label(for='choose-motor') Motoru təyin edin
          select#choose-motor.form-control(name='choose-motor')
            option(value='') M
      .row.cclass-items.car-cclass-items
        .col-12.col-sm-12
          a.cclass-back(href='#')
            span Geri qayıt
      .result-filter
        .buy-filter
          span Filtirlə:
          .custom-control.custom-checkbox
            input#forprice.custom-control-input(type='checkbox')
            label.custom-control-label(for='forprice') Qiymətə görə
          .custom-control.custom-checkbox
            input#nearby.custom-control-input(type='checkbox')
            label.custom-control-label(for='nearby') Yaxın ərazi üzrə
      .row.car-details-items
        .col-12.col-sm-12.details-overflow.mobile_car_details
          table.car_details_item
            tbody
              tr
                td 2019 model Vossen 20’ disklər
                td
                  .car_details_row
                    p Kod
                    span 4434786529
                td
                  .car_details_row
                    p Qiymət
                    span 1200AZN
                td
                  .car_details_row
                    p Ünvan
                    span Bakı şəhəri
                td
                  button.car-add-sale(type='button', data-toggle='modal', data-target='#store-modal') Satıcını göstər
                td
                  button.car-add-btn(type='button')
                    i.fa.fa-shopping-cart
          table.car_details_item
            tbody
              tr
                td 2019 model Vossen 20’ disklər
                td
                  .car_details_row
                    p Kod
                    span 4434786529
                td
                  .car_details_row
                    p Qiymət
                    span 1200AZN
                td
                  .car_details_row
                    p Ünvan
                    span Bakı şəhəri
                td
                  button.car-add-sale(type='button', data-toggle='modal', data-target='#store-modal') Satıcını göstər
                td
                  button.car-add-btn(type='button')
                    i.fa.fa-shopping-cart
          table.car_details_item
            tbody
              tr
                td 2019 model Vossen 20’ disklər
                td
                  .car_details_row
                    p Kod
                    span 4434786529
                td
                  .car_details_row
                    p Qiymət
                    span 1200AZN
                td
                  .car_details_row
                    p Ünvan
                    span Bakı şəhəri
                td
                  button.car-add-sale(type='button', data-toggle='modal', data-target='#store-modal') Satıcını göstər
                td
                  button.car-add-btn(type='button')
                    i.fa.fa-shopping-cart
          table.car_details_item
            tbody
              tr
                td 2019 model Vossen 20’ disklər
                td
                  .car_details_row
                    p Kod
                    span 4434786529
                td
                  .car_details_row
                    p Qiymət
                    span 1200AZN
                td
                  .car_details_row
                    p Ünvan
                    span Bakı şəhəri
                td
                  button.car-add-sale(type='button', data-toggle='modal', data-target='#store-modal') Satıcını göstər
                td
                  button.car-add-btn(type='button')
                    i.fa.fa-shopping-cart
          table.car_details_item
            tbody
              tr
                td 2019 model Vossen 20’ disklər
                td
                  .car_details_row
                    p Kod
                    span 4434786529
                td
                  .car_details_row
                    p Qiymət
                    span 1200AZN
                td
                  .car_details_row
                    p Ünvan
                    span Bakı şəhəri
                td
                  button.car-add-sale(type='button', data-toggle='modal', data-target='#store-modal') Satıcını göstər
                td
                  button.car-add-btn(type='button')
                    i.fa.fa-shopping-cart
          table.car_details_item
            tbody
              tr
                td 2019 model Vossen 20’ disklər
                td
                  .car_details_row
                    p Kod
                    span 4434786529
                td
                  .car_details_row
                    p Qiymət
                    span 1200AZN
                td
                  .car_details_row
                    p Ünvan
                    span Bakı şəhəri
                td
                  button.car-add-sale(type='button', data-toggle='modal', data-target='#store-modal') Satıcını göstər
                td
                  button.car-add-btn(type='button')
                    i.fa.fa-shopping-cart
          table.car_details_item
            tbody
              tr
                td 2019 model Vossen 20’ disklər
                td
                  .car_details_row
                    p Kod
                    span 4434786529
                td
                  .car_details_row
                    p Qiymət
                    span 1200AZN
                td
                  .car_details_row
                    p Ünvan
                    span Bakı şəhəri
                td
                  button.car-add-sale(type='button', data-toggle='modal', data-target='#store-modal') Satıcını göstər
                td
                  button.car-add-btn(type='button')
                    i.fa.fa-shopping-cart
</template>
<script>
export default {
  name: 'PartsPlaceholder'
}
</script>
<style lang="scss" scoped>
.container {
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
    color:rgba(0,0,0,0)
  }
  .rmtxt {
    span {
      @include backgroundAnimation();
      color:rgba(0,0,0,0)
    }
  }
  .choose-motor label {
    @include backgroundAnimation();
    color:rgba(0,0,0,0)
  }
  .choose-motor {
    &:after {
      display: none;
    }
    select {
      color:rgba(0,0,0,0);
      border-color: #f3f3f3;
      @include backgroundAnimation();
    }
  }
  .cclass-back {
    &:before {
      display:none
    }
    span {
      color:rgba(0,0,0,0);
      @include backgroundAnimation();
    }
  }
  .buy-filter{
    @include backgroundAnimation();
    * {
      opacity: 0;
    }
  }
  .car_details_item{
    @include backgroundAnimation();
    * {
      opacity: 0;
    }
  }
}
</style>
