<template lang="pug">
  .banners
    n-link(:to="localePath({\
                    name: 'search',\
                    query: {\
                    sparePart: '100200',\
                    brand: 5\
                    }\
                    })").banners_banner
      img(v-lazy="`img/banners/audi.png`")
      span Audi
    n-link(:to="localePath({\
                    name: 'search',\
                    query: {\
                    sparePart: '100200',\
                    brand: 5\
                    }\
                    })").banners_banner
      img(v-lazy="`img/banners/bmw.png`")
      span BMW
    n-link(:to="localePath({\
                      name: 'search',\
                      query: {\
                      sparePart: '100200',\
                      brand: 5\
                      }\
                      })").banners_banner
      img(v-lazy="`img/banners/citroen.png`")
      span Citroen
    n-link(:to="localePath({\
                      name: 'search',\
                      query: {\
                      sparePart: '100200',\
                      brand: 5\
                      }\
                      })").banners_banner
      img(v-lazy="`img/banners/chevrolet.png`")
      span Chevrolet
    n-link(:to="localePath({\
                      name: 'search',\
                      query: {\
                      sparePart: '100200',\
                      brand: 5\
                      }\
                      })").banners_banner
      img(v-lazy="`img/banners/fiat.png`")
      span Fiat
    n-link(:to="localePath({\
                      name: 'search',\
                      query: {\
                      sparePart: '100200',\
                      brand: 5\
                      }\
                      })").banners_banner
      img(v-lazy="`img/banners/geely.png`")
      span Geely
    n-link(:to="localePath({\
                      name: 'search',\
                      query: {\
                      sparePart: '100200',\
                      brand: 5\
                      }\
                      })").banners_banner
      img(v-lazy="`img/banners/ford.png`")
      | Ford
    n-link(:to="localePath({name: 'kataloq-mashin-kataloqu',})").banners_banner
      span.all_brands
        | Hamısına bax
        svg(width='16', height='16', viewBox='0 0 16 16', fill='none', xmlns='http://www.w3.org/2000/svg')
          path(d='M1 8H15M15 8L8 1M15 8L8 15', stroke='#344054', stroke-width='2', stroke-linecap='round', stroke-linejoin='round')

</template>

<script>
export default {
  name: 'Banners'
}
</script>

<style lang="scss" scoped>
.banners {
  margin: 10px 0 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(215px, 300fr));
  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(130px, 300fr));
    &_banner {
      &:last-child {
        padding-left: 8px;
      }

      span {
        &.all_brands {
          font-size: 16px !important;

          svg {
            right: 7px;
          }
        }
      }
    }
  }

  grid-gap: 10px;
  border-radius: 5px;
  justify-items: center;
  padding: 20px 0 0;

  &_banner {
    display: flex;
    align-items: center;
    cursor: pointer;
    background-color: #fff;
    border-radius: 16px;
    color: #344054;
    padding: 26px 16px;
    width: 100%;
    height: 80px;
    position: relative;

    span {
      //styleName: Text xl/Medium;
      font-family: SF Pro Display, serif;
      font-size: 20px;
      font-weight: 500;
      line-height: 30px;
      letter-spacing: 0em;
      text-align: left;
      margin-left: 16px;

      svg {
        position: absolute;
        right: 21px;
        top: 50%;
        transform: translateY(-50%);
      }

      &.all_brands {
        font-size: 18px;
      }
    }

    @media screen and (max-width: 768px) {
      height: 134px;
      flex-direction: column;
      justify-content: center;
      span {
        margin-left: 0;
      }
    }

  }
}
</style>
