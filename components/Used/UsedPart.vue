<template lang="pug">
  .search_results_items_item
    img(v-lazy="card.images[0]?card.images[0]:'/img/search/default-parts.png'", :alt="card.description")
    .search_results_items_item_price
      span.font-weight-bold {{card.price.price}} {{card.price.currency_symbol}}
    div
      p.search_results_items_item_store {{card.store_name}}
      p.search_results_items_item_store {{card.part_number}}
      p.short_description
        | {{card.description}}
      p.search_results_items_item_store.pt-2
        | {{card.created_at}}

    div.search_results_items_item_button_cart
      AddToFavoriteButton(:id="card.id", :favorite="card.is_favorite || false")

</template>

<script>
import AddToFavoriteButton from '~/components/Used/AddToFavoriteButton.vue'

export default {
  name: 'UsedPart',
  components: { AddToFavoriteButton },
  props: {
    card: {
      type: Object,
      default: () => {}
    }
  }
}
</script>

<style lang="scss" scoped>
.search_results_items_item {
  position: relative;
  background-color: #fff;
  border: 1px solid #EAECF0;
  border-radius: 16px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  color: #344054;
  height: 100%;
  text-align: left;

  @media screen and (max-width: 480px) {
    padding: 10px;
    h5 {
      font-size: 1rem;
    }
    h6 {
      font-size: 0.725rem;
    }
  }

  p {
    margin: 0;
  }

  img {
    width: 130px;
    height: 130px;
    margin: 0 auto;
  }

  button {
    font-size: 14px;
  }

  .short_description {
    text-overflow: ellipsis;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    display: -webkit-box;
    overflow: hidden;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;

    color: #344054;
  }

  &_store {
    color: #98A2B3;
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;
  }

  &_price {
    font-weight: 500;
    font-size: 24px;
    line-height: 32px;
    color: #0086C9;
    margin: 8px 0;
  }

  &_button_cart {
    position: absolute;
    right: 0;
    top: 8px;
    border-radius: 50%;
    width: 36px;
    height: 36px;
  }

  &:hover {
    h5, .short_description {
      color: #344054;
    }

    .btn {
      background-color: #498EBF;
    }
  }

}
</style>
