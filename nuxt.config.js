const imageminMozjpeg = require('imagemin-mozjpeg')
const ImageminPlugin = require('imagemin-webpack-plugin').default
const isDev = process.env.NODE_ENV !== 'production'

module.exports = {
  mode: 'universal',
  ...(!isDev && {
    modern: 'client'
  }),
  env: {
    BASE_API_URL: "https://serv1.otobaza.com",
    CATALOG_API_URL: "https://kataloq.otobaza.com",
  },
  head: {
    htmlAttrs: {
      lang: 'az'
    },
    title: 'OTOBAZA - AUTO PARTS',
    meta: [
      {
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content:
          'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no'
      }
    ],
    link: [
      { rel: 'shortcut icon', href: '/favicon.ico' },
    ],
    script: [
      {
        src:
          'https://maps.googleapis.com/maps/api/js?key=AIzaSyAraptFbVXN4LZi66o7tDbrvEti1a8gVeo&libraries=places'
      }
    ]
  },
  rootDir: __dirname,
  serverMiddleware: [
    // '~~/serverMiddleware/headers'
  ],
  router: {
    middleware: ['beforeRouteChange'],
    prefetchLinks: false,
    scrollBehavior: function (to, from, savedPosition) {
      return { x: 0, y: 0 }
    }
  },
  loading: {
    color: '#fff',
    height: '3px'
  },
  css: [
    './static/css/plugins.min.css',
    './static/css/styles.css',
    './assets/scss/global-styles.scss'
  ],
  plugins: [
    { src: '~~/plugins/axios.js' },
    { src: '~~/plugins/vue-lazy-load.js' },
    { src: '~~/plugins/vue-validate.js', mode: 'client' },
    { src: '~~/plugins/tree.js', mode: 'client' },
    { src: '~~/plugins/click-outside.js', mode: 'client' },
    { src: '~~/plugins/swal.js', mode: 'client' },
    { src: '~~/plugins/inputmask.js', mode: 'client' }
  ],
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '~/modules/linkedin.js',
    [
      'vue-sweetalert2/nuxt',
      {
        confirmButtonColor: '#4DA6FF',
        cancelButtonColor: '#E05353'
      }
    ],
    [
      'nuxt-env',
      {
        keys: [
          /*'BASE_API_URL',
          'CATALOG_API_URL'*/
        ]
      }
    ],
    '@nuxtjs/axios',
    '@nuxtjs/auth',
    'nuxt-trailingslash-module',
    // '@nuxtjs/svg',
    'cookie-universal-nuxt',
    '@nuxtjs/style-resources',
    [
      'nuxt-i18n',
      {
        seo: true,
        locales: [
          {
            code: 'ru',
            iso: 'ru-RU',
            file: 'ru.json',
            name: 'Русский'
          },
          {
            code: 'en',
            iso: 'en-US',
            file: 'en.json',
            name: 'English'
          },
          {
            code: 'az',
            iso: 'az-AZ',
            file: 'az.json',
            name: 'Azərbaycanca'
          },
          {
            code: 'tr',
            iso: 'tr-TR',
            file: 'tr.json',
            name: 'Türkçe'
          }
        ],
        defaultLocale: 'az',
        loadLanguagesAsync: true,
        lazy: true,
        langDir: 'locales/',
        vuex: {
          moduleName: 'i18n',
          syncLocale: true,
          mutations: {
            setLocale: 'SET_LOCALE'
          }
        },
        parsePages: true,
        detectBrowserLanguage: false
      }
    ]
  ],
  auth: {
    localStorage: false, /*TODO: "productionda bagla"*/
    cookie: {
      prefix: 'auth.',
      options: {
        path: '/',
        expires: 5
      }
    },
    strategies: {
      local: {
        endpoints: {
          login: {
            url: '/api/user/login',
            method: 'post',
            propertyName: 'data.token'
          },
          logout: { url: '/api/user/logout', method: 'get' },
          user: { url: '/api/user/me', method: 'get', propertyName: 'data' }
        },
        tokenRequired: true,
        tokenType: 'bearer',
        autoFetchUser: true
      },
      google: {
        _scheme: 'oauth2',
        authorization_endpoint: 'https://accounts.google.com/o/oauth2/auth',
        userinfo_endpoint: 'https://www.googleapis.com/oauth2/v3/userinfo',
        scope: ['openid', 'profile', 'email'],
        access_type: undefined,
        access_token_endpoint: undefined,
        response_type: 'token',
        token_type: 'Bearer',
        redirect_uri: 'https://otobaza.com/login-callback?type=google',
        client_id: '684650150208-ocirb8jr5m131fok02mvn795du4mql3c.apps.googleusercontent.com',
        token_key: 'access_token',
        state: 'UNIQUE_AND_NON_GUESSABLEqw22'
      },
      linkedin: {
        _scheme: 'oauth2',
        client_id: '787shaglwhhfuv',
        authorization_endpoint: 'https://www.linkedin.com/oauth/v2/authorization',
        redirect_uri: 'https://otobaza.com/login-callback?type=linkedin',
        response_type: 'code',
        access_type: undefined,
        access_token_endpoint: undefined,
        token_key: 'access_token',
        token_type: 'Bearer',
        scope: ['r_liteprofile', 'r_emailaddress', 'w_member_social']
      },
      facebook: {
        client_id: '538231580288520',
        userinfo_endpoint: false,
        scope: ['public_profile', 'email'],
        redirect_uri: 'https://otobaza.com/login-callback?type=facebook'
      }
    }
  },
  styleResources: {
    // your settings here
    scss: ['./assets/scss/global-variables.scss'] // alternative: scss
  },
  /*
   ** Axios module configuration
   */
  axios: {
    baseURL: 'https://serv1.otobaza.com'
  },
  render: {
    resourceHints: false
  },
  /*
   ** Build configuration
   */
  build: {
    optimizeCss: false,
    filenames: {
      app: ({ isDev }) => (isDev ? '[name].js' : 'js/[contenthash].js'),
      chunk: ({ isDev }) => (isDev ? '[name].js' : 'js/[contenthash].js'),
      css: ({ isDev }) => (isDev ? '[name].css' : 'css/[contenthash].css'),
      img: ({ isDev }) =>
        isDev ? '[path][name].[ext]' : 'img/[contenthash:7].[ext]',
      font: ({ isDev }) =>
        isDev ? '[path][name].[ext]' : 'fonts/[contenthash:7].[ext]',
      video: ({ isDev }) =>
        isDev ? '[path][name].[ext]' : 'videos/[contenthash:7].[ext]'
    },
    ...(!isDev && {
      html: {
        minify: {
          collapseBooleanAttributes: true,
          decodeEntities: true,
          minifyCSS: true,
          minifyJS: true,
          processConditionalComments: true,
          removeEmptyAttributes: true,
          removeRedundantAttributes: true,
          trimCustomFragments: true,
          useShortDoctype: true
        }
      }
    }),
    splitChunks: {
      layouts: true,
      pages: true,
      commons: true
    },
    optimization: {
      minimize: !isDev
    },
    ...(!isDev && {
      extractCSS: {
        ignoreOrder: true
      }
    }),

    transpile: ['vue-lazy-hydration', 'intersection-observer'],
    postcss: {
      plugins: {
        ...(!isDev && {
          cssnano: {
            preset: [
              'advanced',
              {
                autoprefixer: false,
                cssDeclarationSorter: false,
                zindex: false,
                discardComments: {
                  removeAll: true
                }
              }
            ]
          }
        })
      },
      ...(!isDev && {
        preset: {
          browsers: 'cover 99.5%',
          autoprefixer: true
        }
      }),

      order: 'cssnanoLast'
    },
    extend (config, ctx) {
      const ORIGINAL_TEST = '/\\.(png|jpe?g|gif|svg|webp)$/i'

      // Remove any original svg rules

      const vueSvgLoader = [
        {
          loader: 'vue-svg-loader',
          options: {
            svgo: false
          }
        }
      ]
      const imageMinPlugin = new ImageminPlugin({
        pngquant: {
          quality: '5-30',
          speed: 7,
          strip: true
        },
        jpegtran: {
          progressive: true
        },
        gifsicle: {
          interlaced: true
        },
        plugins: [
          imageminMozjpeg({
            quality: 70,
            // arithmetic: true,
            progressive: true
          })
        ]
      })
      if (!ctx.isDev) config.plugins.push(imageMinPlugin)

      config.module.rules.forEach((rule) => {
        if (rule.test.toString() === ORIGINAL_TEST) {
          rule.test = /\.(png|jpe?g|gif|webp)$/i
          rule.use = [
            {
              loader: 'url-loader',
              options: {
                limit: 1000,
                name: ctx.isDev
                  ? '[path][name].[ext]'
                  : 'img/[contenthash:7].[ext]'
              }
            }
          ]
        }
      })
      //  Create the custom SVG rule
      const svgRule = {
        test: /\.svg$/,
        oneOf: [
          {
            resourceQuery: /inline/,
            use: vueSvgLoader
          },
          {
            resourceQuery: /data/,
            loader: 'url-loader'
          },
          {
            resourceQuery: /raw/,
            loader: 'raw-loader'
          },
          {
            loader: 'file-loader' // By default, always use file-loader
          }
        ]
      }

      config.module.rules.push(svgRule) // Actually add the rule
    }
  },
  server: {
    port: 8000, // default: 3000
    host: '0.0.0.0' // default: localhost
  }
}
