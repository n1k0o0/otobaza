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
      <div class="search_group_item" @click="showFilter">
        <img alt="" src="img/search/spare-parts.png" />
        <h5>{{ $t('home_search.spare-parts') }}</h5>
      </div>
      <div class="search_group_item" @click="showFilter">
        <img alt="" src="img/search/steering-wheel.png" />
        <h5>{{ $t('home_search.accessory') }}</h5>
      </div>
      <div class="search_group_item" @click="showFilter">
        <img alt="" src="img/search/engineering.png" />
        <h5>{{ $t('home_search.used') }}</h5>
      </div>
      <div class="search_group_item" @click="showFilter">
        <img alt="" src="img/search/gasoline.png" />
        <h5>{{ $t('home_search.gasoline') }}</h5>
      </div>
      <div class="search_group_item" @click="showFilter">
        <img alt="" src="img/search/steering-wheel.png" />
        <h5>{{ $t('home_search.wheel') }}</h5>
      </div>
    </div>
    <transition mode="out-in" name="page-fade">
      <div v-show="filterShow" class="filter_search_group_wrapper">
        <div class="filter_search_group">
          <div>
            <input
              ref="login"
              class="form-control"
              :placeholder="$t('home_search.spare-parts')"
              type="text"
            />
          </div>
          <div>
            <input
              ref="login"
              class="form-control"
              :placeholder="$t('brand')"
              type="text"
            />
          </div>
          <div>
            <input
              ref="login"
              class="form-control"
              :placeholder="$t('model')"
              type="text"
            />
          </div>
          <div>
            <input
              ref="login"
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
              ref="login"
              class="form-control filter_search_group_search_input"
              :placeholder="$t('home_search.search_placeholder')"
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
      </div>
    </transition>
    <div class="second_search_group">
      <div class="search_group_item" @click="showFilter">
        <img alt="" src="img/search/battery.png" />
        <h5>{{ $t('home_search.battery') }}</h5>
      </div>
      <div class="search_group_item" @click="showFilter">
        <img alt="" src="img/search/windscreen.png" />
        <h5>{{ $t('home_search.windscreen') }}</h5>
      </div>
      <div class="search_group_item" @click="showFilter">
        <img alt="" src="img/search/radio.png" />
        <h5>{{ $t('home_search.radio') }}</h5>
      </div>
      <div class="search_group_item" @click="showFilter">
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
      filterShow: false
    }
  },
  methods: {
    showFilter () {
      this.filterShow = true
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
      grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    }

    .filter_search_group_vin {
      grid-gap: 10px;
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
      justify-items: center;
      align-items: center;

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
}

</style>
