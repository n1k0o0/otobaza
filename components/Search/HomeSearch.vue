<template>
  <div class="home_search">
    <div class="tooltip_icon">
      <div>
        <img
          v-tooltip="$t('home_search.tooltip')"
          alt="tooltip"
          class="pointer"
          src="img/search/info.png"
        />
      </div>
    </div>
    <div class="first_search_group">
      <div
        ref="item_1"
        class="search_group_item"
        @click="showFilter(1)"
      >
        <img alt="" src="img/search/spare-parts.png" />
        <h5>{{ $t('home_search.spare-parts') }}</h5>
      </div>
      <div
        ref="item_2"
        class="search_group_item"
        @click="showFilter(2)"
      >
        <img alt="" src="img/search/steering-wheel.png" />
        <h5>{{ $t('home_search.accessory') }}</h5>
      </div>
      <div
        ref="item_3"
        class="search_group_item"
        @click="showFilter(3)"
      >
        <img alt="" src="img/search/engineering.png" />
        <h5>{{ $t('home_search.used') }}</h5>
      </div>
      <div
        ref="item_4"
        class="search_group_item"
        @click="showFilter(4)"
      >
        <img alt="" src="img/search/gasoline.png" />
        <h5>{{ $t('home_search.gasoline') }}</h5>
      </div>
      <div
        ref="item_5"
        class="search_group_item"
        @click="showFilter(5)"
      >
        <img alt="" src="img/search/brake.png" />
        <h5>{{ $t('home_search.wheel') }}</h5>
      </div>
    </div>
    <transition mode="out-in" name="search-fade">
      <div v-show="filterShow[1]" class="filter_search_group_wrapper">
        <div class="filter_search_group">
          <div>
            <input
              class="form-control"
              :placeholder="$t('home_search.spare-parts')"
              type="text"
            />
          </div>
          <div>
            <input
              class="form-control"
              :placeholder="$t('brand')"
              type="text"
            />
          </div>
          <div>
            <input
              class="form-control"
              :placeholder="$t('model')"
              type="text"
            />
          </div>
          <div>
            <input
              class="form-control"
              :placeholder="$t('type')"
              type="text"
            />
          </div>
          <div>
            <button
              class="btn"
              type="submit"
            >
              {{ $t('search') }}
            </button>
          </div>
        </div>
        <div class="filter_search_group_vin">
          <div class="w-100">
            <input
              class="form-control filter_search_group_search_input"
              :placeholder="$t('home_search.search_placeholder')"
              type="text"
            />
            <i aria-hidden="true" class="fa fa-search fa-lg fa-fw"></i>
          </div>
        </div>
      </div>
    </transition>
    <transition mode="out-in" name="search-fade">
      <div
        v-show="filterShow[2]||filterShow[3]||filterShow[4]||filterShow[5]||filterShow[6]||filterShow[7]||filterShow[8]||filterShow[9]"
        class="filter_search_group_wrapper"
      >
        <h2>{{ $t('coming_soon') }}</h2>
      </div>
    </transition>
    <div class="second_search_group">
      <div
        ref="item_6"
        class="search_group_item"
        @click="showFilter(6)"
      >
        <img alt="" src="img/search/battery.png" />
        <h5>{{ $t('home_search.battery') }}</h5>
      </div>
      <div
        ref="item_7"
        class="search_group_item"
        @click="showFilter(7)"
      >
        <img alt="" src="img/search/windscreen.png" />
        <h5>{{ $t('home_search.windscreen') }}</h5>
      </div>
      <div
        ref="item_8"
        class="search_group_item"
        @click="showFilter(8)"
      >
        <img alt="" src="img/search/radio.png" />
        <h5>{{ $t('home_search.radio') }}</h5>
      </div>
      <div
        ref="item_9"
        class="search_group_item"
        @click="showFilter(9)"
      >
        <img alt="" src="img/search/car.png" />
        <h5>{{ $t('home_search.auto-cosmetics') }}</h5>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeSearch',
  data () {
    return {
      filterShow: {
        1: false,
        2: false,
        3: false,
        4: false,
        5: false,
        6: false,
        7: false,
        8: false,
        9: false
      }
    }
  },
  methods: {
    showFilter (a) {
      for (const item in this.filterShow) {
        if (+item === a) {
          continue
        }
        this.$refs['item_' + item]
          .classList.remove('active_search')
        this.filterShow[item] = false
      }
      this.$refs['item_' + a]
        .classList.toggle('active_search')
      console.log(this.$refs['item_' + a].$el)
      this.filterShow[a] = !this.filterShow[a]
    }
  }
}
</script>

<style scoped lang="scss">
.home_search {
  border-radius: 5px;
  background-color: #fff;
  padding: 35px 30px;
  margin: 10px 0;

  .first_search_group {
    display: grid;
    grid-gap: 10px;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  }

  .filter_search_group_wrapper {
    @media screen and (max-width: 576px) {
      padding: 30px 20px;
    }
    background-color: #f8f8f8;
    margin: 10px 30px;
    padding: 30px 50px;
    display: flex;
    gap: 10px;
    flex-direction: column;

    .filter_search_group {
      align-items: center;
      display: grid;
      grid-gap: 10px;
      justify-items: center;
      grid-template-columns: repeat(1, minmax(150px, 1fr));
      @media screen and (min-width: 577px) {
        grid-template-columns: repeat(2, minmax(150px, 1fr));
        div:last-of-type {
          grid-column: 1/3;
        }
      }
      @media screen and (min-width: 768px) {
        grid-template-columns: repeat(3, minmax(150px, 1fr));
        div:last-of-type {
          grid-column: unset;
        }
      }
      @media screen and (min-width: 993px) {
        grid-template-columns: repeat(5, minmax(150px, 1fr));
      }
    }

    .filter_search_group_vin {
      grid-gap: 10px;
      display: grid;
      @media screen and (min-width: 993px) {
        grid-template-columns: repeat(6, 1fr);
        div {
          grid-column: 2/5;
        }
      }
      justify-items: center;
      align-items: center;

      div {
        position: relative;
      }

      input {
        padding-right: 30px;
      }
    }

    button {
      display: block;
      width: 100px;
      border: 1px solid #4DA6FF;
      background-color: #4DA6FF;
      color: #fff;
      font: 10px "Roboto-Bold";
      line-height: 27px;
      text-align: center;
      border-radius: 10px;
      padding: 0;
    }
  }

  .search_group_item {
    grid-auto-rows: 100px 50px;
    justify-content: center;
    justify-items: center;
    align-items: center;
    display: grid;
    grid-auto-flow: row;
    border-radius: 10px;
    cursor: pointer;

    &:hover {
      background-color: #f8f8f8;
    }
  }

  .second_search_group {
    display: grid;
    grid-gap: 10px;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  }

  .tooltip_icon {
    height: 30px;

    img {
      width: 20px;
      float: right;
    }
  }

  .active_search {
    background-color: #f8f8f8;
  }

  .fa-search {
    position: absolute;
    top: 10px;
    right: 5px;
    color: #bababa;
    cursor: pointer;
  }
}

</style>
