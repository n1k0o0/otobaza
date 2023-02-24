<template>
  <div>
    <HomeSearch />

    <div class="container mh60vh mt-5">
      <div class="home_blocks">
        <div class="home_blocks_text">
          <h5>{{ $t('search_difficulty_question') }}</h5>
          <p class="m-0">
            {{ $t('search_difficulty_answer') }}
          </p>
        </div>
        <div class="home_blocks_img">
          <button class="btn-new" @click="$router.push(localePath({ name: 'search'}))">
            {{ $t('create_request') }}
            <svg
              fill="none"
              height="24"
              viewBox="0 0 24 24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6 12H18"
                stroke="white"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
              />
              <path
                d="M12 18V6"
                stroke="white"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
              />
            </svg>
          </button>
        </div>
      </div>
      <div class="home_blocks">
        <div class="home_blocks_img">
          <img alt="register" src="/img/home/register.png" />
        </div>
        <div class="home_blocks_desc">
          <div>
            <h5>{{ $t('store_question') }}</h5>
            <p>
              {{ $t('store_answer') }}
            </p>
          </div>
          <a href="https://seller.otobaza.com/#/register" target="_blank">
            <button class="btn-new">
              {{ $t('registration') }}
              <svg
                fill="none"
                height="24"
                viewBox="0 0 24 24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6 12H18"
                  stroke="white"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                />
                <path
                  d="M12 18V6"
                  stroke="white"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                />
              </svg>
            </button>
          </a>
        </div>
      </div>
      <div class="home_blocks">
        <div class="home_blocks_img">
          <img alt="contact" src="/img/home/contact_us.png" />
        </div>
        <div class="home_blocks_desc">
          <div>
            <h5>{{ $t('question_question') }}</h5>
            <p>
              {{ $t('question_answer') }}
            </p>
          </div>
          <div class="home_blocks_buttons">
            <button class="btn-new-light" @click="$router.push(localePath({ name: 'faq'}))">
              {{ $t('faq') }}
            </button>
            <button class="btn-new" @click="$router.push(localePath({ name: 'contact'}))">
              {{ $t('contact_us') }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HomeSearch from '@/components/Search/HomeSearch'

export default {
  layout: 'main',
  name: 'Home',
  components: {
    HomeSearch
  },
  data () {
    return {
      title: {
        az: 'Otobaza.com - Ehtiyat hissələri burada',
        ru: 'Otobaza.com - Запчасти здесь',
        en: 'Otobaza.com - Spare parts here',
        tr: 'Otobaza.com - Yedek parçalar burada'
      },
      description: {
        az: 'Birinci və ikinci əl ehtiyat hissesini əldə etmək ucun Otobaza saytina daxil ola bilərsiniz',
        ru: 'Вы можете посетить веб-сайт Autobaza, чтобы купить оригинальные и подержанные запчасти',
        en: 'You can visit Autobaza website to buy first and second hand spare parts',
        tr: 'Birinci ve ikinci el yedek parça satın almak için Autobaza web sitesini ziyaret edebilirsiniz.'
      }
    }
  },
  head () {
    const title = this.title[this.$i18n.locale]
    const description = this.description[this.$i18n.locale]

    return {
      title: title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: description
        }
      ]
    }
  }
}
</script>

<style scoped lang="scss">
.container {
  align-items: center !important;
  display: grid !important;
}

.home_blocks {
  display: flex;
  //grid-auto-flow: column;
  gap: 30px;
  background-color: #fff;
  padding: 45px 100px;
  margin-bottom: 40px;
  border-radius: 16px;
  justify-content: space-between;

  @media screen and (max-width: 992px) {
    flex-wrap: wrap;
    justify-content: center;
    padding: 45px 50px;

    &:nth-child(4) {
      .home_blocks_buttons {
        justify-content: end;
      }

      text-align: right;
    }

    img {
      width: 296px !important;
      align-self: center;
    }
  }

  .home_blocks_buttons {
    button {
      width: 130px;
    }
  }

  img {
    width: 416px;
  }

  h5 {
    font-weight: 400;
    font-size: 24px;
    line-height: 32px;

    color: #2C5573;
  }

  p {
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    /* or 150% */

    /* Gray/400 */

    color: #98A2B3;
  }

  &_buttons {
    display: flex;
    gap: 24px;
  }

  &:nth-child(3n) {
    flex-direction: row-reverse;
  }

  &_img {
    flex-shrink: 0;
    align-self: center;
  }

  &_desc {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }
}
</style>
