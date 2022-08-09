<template>
  <div class="home_search">
    <!--    <div class="tooltip_icon">
      <div>
        <img
          v-tooltip="$t('home_search.tooltip')"
          alt="tooltip"
          class="pointer"
          src="img/search/info.png"
        />
      </div>
    </div>-->
    <div class="first_search_group">
      <div
        ref="item_1"
        class="search_group_item"
        @click="showFilter(1)"
      >
        <img alt="" src="img/search/spare-parts.png" />
        <h5>{{ $t('home_search.spare-parts') }}</h5>
      </div>
      <transition mode="out-in" name="search-fade">
        <div v-show="filterShow[1]" class="filter_search_group_wrapper">
          <div class="filter_search_group">
            <div class="filter_search_group_item">
              <v-select
                v-model="search.sparePart"
                label="assemblyGroupName"
                :loading="loading"
                :options="spareParts"
                :placeholder="$t('home_search.spare-parts')"
                :reduce="part => part.assemblyGroupNodeId"
                @input="GET_BRANDS(search.sparePart)"
              >
                <template v-slot:selected-option="option">
                  <span :class="option.icon"></span>
                  {{ option.assemblyGroupName.substring(0, 7) }}...
                </template>
                <template v-slot:option="option">
                  <span :class="option.icon"></span>
                  {{ option.assemblyGroupName }}...
                </template>
              </v-select>
            </div>
            <div class="filter_search_group_item">
              <v-select
                v-model="search.brand"
                :disabled="!search.sparePart"
                label="manuName"
                :loading="loading"
                :options="brands"
                :placeholder="$t('brand')"
                :reduce="brand => brand.manuId"
                :reset-on-options-change="true"
                @input="GET_MODELS(search)"
              />
            </div>
            <div class="filter_search_group_item">
              <v-select
                v-model="search.model"
                :disabled="!search.brand"
                label="modelName"
                :loading="loading"
                :options="models"
                :placeholder="$t('model')"
                :reduce="part => part.modId"
                :reset-on-options-change="true"
                @input="GET_TYPES(search)"
              />
            </div>
            <div class="filter_search_group_item">
              <v-select
                v-model="search.type"
                :disabled="!search.model"
                :loading="loading"
                :options="types"
                :placeholder="$t('type')"
                :reduce="part => part.carId"
                :reset-on-options-change="true"
              >
                <template slot="selected-option" slot-scope="option">
                  {{ option.carName + '(' + option.yearOfConstrFrom + '-' + option.yearOfConstrTo + ')' }}
                </template>
                <template slot="option" slot-scope="option">
                  {{ option.carName + ' (' + option.yearOfConstrFrom + '-' + option.yearOfConstrTo + ')' }}
                </template>
              </v-select>
            </div>
            <div class="filter_search_group_item">
              <button
                class="btn"
                type="submit"
                @click="$router.push(localePath({ name: 'search', query: { sparePart: search.sparePart,brand: search.brand, model: search.model,type:search.type}}));"
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
      <div
        ref="item_2"
        class="search_group_item"
        @click="showFilter(2)"
      >
        <img alt="" src="img/search/steering-wheel.png" />
        <h5>{{ $t('home_search.accessory') }}</h5>
      </div>
      <transition mode="out-in" name="search-fade">
        <div
          v-show="filterShow[2]"
          class="filter_search_group_wrapper"
        >
          <h2>{{ $t('coming_soon') }}</h2>
        </div>
      </transition>
      <div
        ref="item_3"
        class="search_group_item"
        @click="showFilter(3)"
      >
        <img alt="" src="img/search/engineering.png" />
        <h5>{{ $t('home_search.used') }}</h5>
      </div>
      <transition mode="out-in" name="search-fade">
        <div
          v-show="filterShow[3]"
          class="filter_search_group_wrapper"
        >
          <h2>{{ $t('coming_soon') }}</h2>
        </div>
      </transition>
      <div
        ref="item_4"
        class="search_group_item"
        @click="showFilter(4)"
      >
        <img alt="" src="img/search/gasoline.png" />
        <h5>{{ $t('home_search.gasoline') }}</h5>
      </div>
      <transition mode="out-in" name="search-fade">
        <div
          v-show="filterShow[4]"
          class="filter_search_group_wrapper"
        >
          <h2>{{ $t('coming_soon') }}</h2>
        </div>
      </transition>
      <div
        ref="item_5"
        class="search_group_item"
        @click="showFilter(5)"
      >
        <img alt="" src="img/search/brake.png" />
        <h5>{{ $t('home_search.wheel') }}</h5>
      </div>
      <transition mode="out-in" name="search-fade">
        <div
          v-show="filterShow[5]"
          class="filter_search_group_wrapper"
        >
          <h2>{{ $t('coming_soon') }}</h2>
        </div>
      </transition>
      <div
        ref="item_6"
        class="search_group_item"
        @click="showFilter(6)"
      >
        <img alt="" src="img/search/battery.png" />
        <h5>{{ $t('home_search.battery') }}</h5>
      </div>
      <transition mode="out-in" name="search-fade">
        <div
          v-show="filterShow[6]"
          class="filter_search_group_wrapper"
        >
          <h2>{{ $t('coming_soon') }}</h2>
        </div>
      </transition>
      <div
        ref="item_7"
        class="search_group_item"
        @click="showFilter(7)"
      >
        <img alt="" src="img/search/windscreen.png" />
        <h5>{{ $t('home_search.windscreen') }}</h5>
      </div>
      <transition mode="out-in" name="search-fade">
        <div
          v-show="filterShow[7]"
          class="filter_search_group_wrapper"
        >
          <h2>{{ $t('coming_soon') }}</h2>
        </div>
      </transition>
      <div
        ref="item_8"
        class="search_group_item"
        @click="showFilter(8)"
      >
        <img alt="" src="img/search/radio.png" />
        <h5>{{ $t('home_search.radio') }}</h5>
      </div>
      <transition mode="out-in" name="search-fade">
        <div
          v-show="filterShow[8]"
          class="filter_search_group_wrapper"
        >
          <h2>{{ $t('coming_soon') }}</h2>
        </div>
      </transition>
      <div
        ref="item_9"
        class="search_group_item"
        @click="showFilter(9)"
      >
        <img alt="" src="img/search/car.png" />
        <h5>{{ $t('home_search.auto-cosmetics') }}</h5>
      </div>
      <transition mode="out-in" name="search-fade">
        <div
          v-show="filterShow[9]"
          class="filter_search_group_wrapper"
        >
          <h2>{{ $t('coming_soon') }}</h2>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'HomeSearch',
  async fetch () {
    await this.GET_SPARE_PARTS()
  },
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
      },
      search: {
        sparePart: '',
        model: '',
        brand: '',
        type: ''
      }
    }
  },
  computed: {
    ...mapGetters({
      spareParts: 'Catalog/spare_parts',
      brands: 'Catalog/brands',
      models: 'Catalog/models',
      types: 'Catalog/types',
      loading: 'Catalog/loading'
    })
  },
  methods: {
    ...mapActions({
      GET_SPARE_PARTS: 'Catalog/GET_SPARE_PARTS',
      GET_BRANDS: 'Catalog/GET_BRANDS',
      GET_MODELS: 'Catalog/GET_MODELS',
      GET_TYPES: 'Catalog/GET_TYPES'
    }),
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
  padding: 20px 20px;
  margin: 10px 0;

  .first_search_group {
    display: grid;
    grid-auto-flow: dense;
    grid-template-columns: repeat(1, minmax(100px, 1fr));

    @media screen and (min-width: 576px) {
      grid-template-columns: repeat(3, minmax(100px, 1fr));
    }

    @media screen and (min-width: 768px) {
      grid-template-columns: repeat(4, minmax(100px, 1fr));
    }

    @media screen and (min-width: 992px) {
      grid-template-columns: repeat(5, minmax(100px, 1fr));
    }

    @media screen and (min-width: 1200px) {
      grid-template-columns: repeat(9, minmax(100px, 1fr));
    }

  }

  .filter_search_group_wrapper {
    grid-column: 1/-1;
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
      grid-gap: 26px;
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
      @media screen and (min-width: 1200px) {
        grid-template-columns: repeat(5, minmax(150px, 1fr));
      }

      &_item {
        width: 100%;
        //height: 100%;

        button {
          display: block;
          width: 100%;
          border: 1px solid #4DA6FF;
          background-color: #4DA6FF;
          color: #fff;
          font: 10px "Roboto-Bold";
          line-height: 27px;
          text-align: center;
          border-radius: 5px;
          padding: 0;
          height: 34px;
        }
      }
    }

    .filter_search_group_vin {
      grid-gap: 10px;
      display: grid;
      @media screen and (min-width: 993px) {
        grid-template-columns: repeat(6, 1fr);
        div {
          grid-column: 2/6;
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

  }

  .search_group_item {
    grid-auto-rows: 90px 60px;
    justify-content: center;
    justify-items: center;
    align-items: center;
    display: grid;
    grid-auto-flow: row;
    border-radius: 10px;
    cursor: pointer;
    padding: 0 10px;

    &:hover {
      background-color: #f8f8f8;
    }

    img {
      width: 45px;
    }

    h5 {
      font-size: 1rem;
      text-align: center;
    }
  }

  .second_search_group {
    grid-auto-flow: dense;
    display: grid;
    grid-gap: 10px;
    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
    @media screen and (min-width: 1200px) {
      grid-template-columns: repeat(4, minmax(180px, 1fr));
    }
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

  .v-select {
    height: 100%;
  }

}

</style>
