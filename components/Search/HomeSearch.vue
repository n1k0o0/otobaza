<template>
  <div class="container home_search_wrapper">
    <div class="home_search">
      <div class="search_menu">
        <swiper class="swiper" :options="swiperOption">
          <swiper-slide>
            <h5
              class="pointer"
              :class="{'active_menu':filterShow[2]}"
              @click="showFilter(2)"
            >
              {{ $t('home_search.used') }}
            </h5>
          </swiper-slide>
          <swiper-slide>
            <h5
              class="pointer"
              :class="{'active_menu':filterShow[1]}"
              @click="showFilter(1)"
            >
              {{ $t('home_search.spare-parts') }}
            </h5>
          </swiper-slide>
        </swiper>
      </div>
      <transition
        mode="out-in"
        name="search-fade"
      >
        <div v-show="filterShow[1]" class="search_body">
          <div class="search_tab">
            <div>
              <h5>{{ $t('home_search.search_type') }}:</h5>
            </div>
            <div class="search_tab_menus">
              <h6
                class="pointer"
                :class="{'tab_active':filterType===1}"
                @click="chooseFilterType(1)"
              >
                {{ $t('home_search.by_brand') }}
              </h6>
              <h6
                class="pointer"
                :class="{'tab_active':filterType===2}"
                @click="chooseFilterType(2)"
              >
                {{ $t('home_search.by_vin') }}
              </h6>
              <h6
                class="pointer"
                :class="{'tab_active':filterType===3}"
                @click="chooseFilterType(3)"
              >
                {{ $t('home_search.by_detail_code') }}
              </h6>
            </div>
          </div>

          <div class="first_search_group">
            <transition
              mode="out-in"
              name="search-fade"
            >
              <template v-if="filterType===1">
                <div class="filter_search_group_wrapper">
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
                          {{
                            option.assemblyGroupName.length <= 9 ? option.assemblyGroupName : (option.assemblyGroupName.substring(0, 7) + '...')
                          }}
                        </template>
                        <template v-slot:option="option">
                          <span :class="option.icon"></span>
                          {{ option.assemblyGroupName }}
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
                        :reset-on-options-change="!!search.brand"
                        @input="GET_MODELS(search)"
                      >
                        <template v-slot:selected-option="option">
                          <span :class="option.icon"></span>
                          {{
                            option.manuName.length <= 9 ? option.manuName : (option.manuName.substring(0, 7) + '...')
                          }}
                        </template>
                        <template v-slot:option="option">
                          <span :class="option.icon"></span>
                          {{ option.manuName }}
                        </template>
                      </v-select>
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
                        :reset-on-options-change="!!search.model"
                        @input="GET_TYPES(search)"
                      >
                        <template v-slot:selected-option="option">
                          <span :class="option.icon"></span>
                          {{
                            option.modelName.length < 10 ? option.modelName : (option.modelName.substring(0, 7) + '...')
                          }}
                        </template>
                        <template v-slot:option="option">
                          <span :class="option.icon"></span>
                          {{ option.modelName }}
                        </template>
                      </v-select>
                    </div>
                    <div class="filter_search_group_item">
                      <v-select
                        v-model="search.type"
                        :disabled="!search.model"
                        :loading="loading"
                        :options="types"
                        :placeholder="$t('type')"
                        :reduce="part => part.carId"
                        :reset-on-options-change="!!search.type"
                      >
                        <template slot="selected-option" slot-scope="option">
                          {{
                            (option.carName + '(' + option.yearOfConstrFrom + '-' + option.yearOfConstrTo + ')').substring(0, 9)
                          }}...
                        </template>
                        <template slot="option" slot-scope="option">
                          {{ option.carName + ' (' + option.yearOfConstrFrom + '-' + option.yearOfConstrTo + ')' }}
                        </template>
                      </v-select>
                    </div>
                    <div class="filter_search_group_item">
                      <button
                        class="btn h-100"
                        :disabled="!search.model"
                        type="submit"
                        @click="$router.push(localePath({ name: 'search', query: { sparePart: search.sparePart,brand: search.brand, model: search.model,type:search.type}}));"
                      >
                        {{ $t('search') }}
                        <svg
                          class="ml-2"
                          fill="none"
                          height="20"
                          viewBox="0 0 21 20"
                          width="21"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M10.0834 17.4998C14.4557 17.4998 18.0001 13.9554 18.0001 9.58317C18.0001 5.21092 14.4557 1.6665 10.0834 1.6665C5.71116 1.6665 2.16675 5.21092 2.16675 9.58317C2.16675 13.9554 5.71116 17.4998 10.0834 17.4998Z"
                            stroke="#2C5573"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="1.5"
                          />
                          <path
                            d="M18.8334 18.3332L17.1667 16.6665"
                            stroke="#2C5573"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="1.5"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </template>
            </transition>

            <transition
              mode="out-in"
              name="search-fade"
            >
              <template v-if="filterType===2">
                <div class="filter_search_group_wrapper">
                  <SearchVin :vin="true" />
                </div>
              </template>
            </transition>

            <transition
              mode="out-in"
              name="search-fade"
            >
              <template v-if="filterType===3">
                <div class="filter_search_group_wrapper">
                  <SearchVin />
                </div>
              </template>
            </transition>
          </div>

          <div class="search_banner">
            <Banners />
          </div>
        </div>
      </transition>

      <transition
        mode="out-in"
        name="search-fade"
      >
        <div v-show="filterShow[2]" class="search_body">
          <div class="search_tab">
            <div>
              <h5>{{ $t('home_search.search_type') }}:</h5>
            </div>
          </div>

          <div class="first_search_group">
            <div class="filter_search_group_wrapper mt-4">
              <div class="row">
                <div class="col-12 col-md-4 col-xl-2 mb-4">
                  <v-select
                    v-model="used.brand"
                    label="manuName"
                    :loading="loading"
                    :options="manufacturers"
                    :placeholder="$t('brand')"
                    :reduce="brand => brand.manuId"
                    @input="GET_MANUFACTURER_MODELS({manufacturer:used.brand})"
                  >
                    <template v-slot:selected-option="option">
                      <span :class="option.icon"></span>
                      {{ option.manuName.length <= 9 ? option.manuName : (option.manuName.substring(0, 7) + '...') }}
                    </template>
                    <template v-slot:option="option">
                      <span :class="option.icon"></span>
                      {{ option.manuName }}
                    </template>
                  </v-select>
                </div>
                <div class="col-12 col-md-4 col-xl-2 mb-4">
                  <v-select
                    v-model="used.model"
                    :disabled="!used.brand"
                    label="ModelName"
                    :loading="loading"
                    :options="manufacturer_models"
                    :placeholder="$t('model')"
                    :reduce="part => part.modId"
                    :reset-on-options-change="!!used.model"
                  >
                    <template v-slot:selected-option="option">
                      <span :class="option.icon"></span>
                      {{
                        option.ModelName.length < 10 ? option.ModelName : (option.ModelName.substring(0, 7) + '...')
                      }}
                    </template>
                    <template v-slot:option="option">
                      <span :class="option.icon"></span>
                      {{ option.ModelName }}
                    </template>
                  </v-select>
                </div>
                <div class="col-12 col-md-4 col-xl-6 mb-4">
                  <input
                    v-model="used.title"
                    :placeholder="$t('search')"
                    type="text"
                  />
                </div>
                <div class="col-12 col-md-4 col-xl-2 mb-4">
                  <button
                    class="btn h-100"
                    :disabled="!(used.model || used.brand || used.title)"
                    type="submit"
                    @click="$router.push(localePath({ name: 'oluxana', query: { title: used.title,brand: used.brand, model: used.model}}));"
                  >
                    {{ $t('search') }}
                    <svg
                      class="ml-2"
                      fill="none"
                      height="20"
                      viewBox="0 0 21 20"
                      width="21"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.0834 17.4998C14.4557 17.4998 18.0001 13.9554 18.0001 9.58317C18.0001 5.21092 14.4557 1.6665 10.0834 1.6665C5.71116 1.6665 2.16675 5.21092 2.16675 9.58317C2.16675 13.9554 5.71116 17.4998 10.0834 17.4998Z"
                        stroke="#2C5573"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1.5"
                      />
                      <path
                        d="M18.8334 18.3332L17.1667 16.6665"
                        stroke="#2C5573"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1.5"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'

import { mapActions, mapGetters } from 'vuex'
import Banners from '@/components/Common/Index/Banners'
import SearchVin from '@/components/Common/Index/HeaderSearch'

export default {
  name: 'HomeSearch',
  components: {
    Banners,
    Swiper,
    SwiperSlide,
    SearchVin
  },
  async fetch () {
    await this.GET_SPARE_PARTS()
    await this.GET_CATALOG_MANUFACTURERS({ type: 'default' })
  },
  data () {
    return {
      filterShow: {
        1: false,
        2: true,
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
      },
      used: {
        model: '',
        title: '',
        brand: ''
      },
      filterType: 1,
      swiperOption: {
        slidesPerView: 'auto',
        spaceBetween: 60,
        freeMode: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        }
      }
    }
  },
  computed: {
    ...mapGetters({
      spareParts: 'Catalog/spare_parts',
      brands: 'Catalog/brands',
      models: 'Catalog/models',
      types: 'Catalog/types',
      loading: 'Catalog/loading',
      manufacturers: 'Catalog/manufacturers',
      manufacturer_models: 'Catalog/manufacturer_models'
    })
  },
  methods: {
    ...mapActions({
      GET_SPARE_PARTS: 'Catalog/GET_SPARE_PARTS',
      GET_BRANDS: 'Catalog/GET_BRANDS',
      GET_MODELS: 'Catalog/GET_MODELS',
      GET_TYPES: 'Catalog/GET_TYPES',
      GET_CATALOG_MANUFACTURERS: 'Catalog/GET_CATALOG_MANUFACTURERS',
      GET_MANUFACTURER_MODELS: 'Catalog/GET_MANUFACTURER_MODELS'
    }),
    showFilter (a) {
      // eslint-disable-next-line no-loops/no-loops
      for (const item in this.filterShow) {
        if (+item === a) {
          continue
        }

        this.filterShow[item] = false
      }

      this.filterShow[a] = !this.filterShow[a]

      if (a === 2) {
        if (!this.manufacturers.length) {
          this.GET_CATALOG_MANUFACTURERS({ type: 'alpha' })
        }
      }
    },
    chooseFilterType (i) {
      this.filterType = i
    }
  }
}
</script>

<style scoped lang="scss">
.home_search {
  display: grid;
  padding: 0;
  margin: 30px 0;

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
    margin-top: 52px;
    grid-column: 1/-1;
    @media screen and (max-width: 576px) {
      padding: 20px 0;
      margin: 10px 5px;
    }
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
        height: 100%;

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

    button {
      //styleName: Text sm/Medium;
      font-family: SF Pro Display, serif;
      font-size: 14px;
      font-weight: 500;
      line-height: 20px;
      letter-spacing: 0;
      background-color: #fff;
      color: #2C5573;
      width: 100%;
      text-align: center;
      border-radius: 8px;
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

  .search_menu {
    margin: 15px 30px;
    border-radius: 5px;
    overflow: hidden;

    h5 {
      color: #98A2B3;
      //styleName: Text sm/Normal;
      font-family: SF Pro Display, sans-serif;
      font-size: 14px;
      font-weight: 400;
      line-height: 20px;
      letter-spacing: 0em;
      text-align: left;

    }

    h5.active_menu {
      //styleName: Text md/Semibold;
      font-family: SF Pro Display;
      font-size: 16px;
      font-weight: 600;
      line-height: 24px;
      letter-spacing: 0em;
      text-align: left;
      color: #344054;
      padding: 0 8px;
      border-bottom: 2px solid #0BA5EC;
    }
  }

  .search_body {
    background-color: #498EBF;
    padding: 40px 100px 40px 100px;
    color: #FFFFFF;
    border-radius: 24px;

    @media screen and (max-width: 1200px) {
      padding: 40px 50px 40px 50px;
    }

    @media screen and (max-width: 768px) {
      padding: 20px 20px 20px 20px;
    }

  }

  .search_tab {
    display: flex;
    flex-wrap: wrap;
    column-gap: 43px;
    row-gap: 24px;
    align-items: end;

    h5 {
      font-family: SF Pro Display, sans-serif;
      font-size: 24px;
      font-weight: 500;
      line-height: 32px;
      letter-spacing: 0;
      text-align: center;
    }

    h6 {
      //styleName: Text lg/Normal;
      font-family: SF Pro Display, sans-serif;
      font-size: 18px;
      font-weight: 400;
      line-height: 28px;
      letter-spacing: 0;
      text-align: center;
    }

    h6.tab_active {
      font-weight: 600;
      border-bottom: 1px solid #fff;
    }

    &_menus {
      display: flex;
      gap: 20px;
    }
  }

  .search_tooltip {
    margin-top: 28px;
    display: inline-flex;

    p {
      padding-left: 10px;
      font-family: SF Pro Display, serif;
      font-size: 16px;
      font-weight: 400;
      line-height: 24px;
      letter-spacing: 0;
      text-align: left;
    }
  }
}

.swiper-slide {
  width: auto !important;
}

.swiper-container {
  margin: 0 !important;
  width: 100%;
}

.swiper-container, .swiper-wrapper, .swiper-slide {
  height: auto !important;
}

@media screen and (max-width: 768px) {
  .home_search {
    .search_menu {
      margin: 15px 10px;
    }
  }
}

@media screen and (max-width: 576px) {
  .home_search_wrapper {
    padding: 0;

    .home_search {
      .search_menu {
        h5 {
          padding-bottom: 5px;

          &.active_menu {
            border-bottom: 2px solid #498EBF;
          }
        }
      }

      .search_body {
        border-radius: 0;
      }
    }
  }

}

input {
  width: inherit;
  border: 1px solid #D0D5DD;
  border-radius: 8px;
  height: 44px;
  padding: 10px 14px;

  &:focus-visible {
    outline: none;
  }
}
</style>
