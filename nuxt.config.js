import colors from 'vuetify/es5/util/colors'

export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',
  server: {
    host: '0.0.0.0'
  },

  generate: {
    routes: [
      '/harmony/violin',
      '/harmony/guitar',
      '/harmony/harmonica',
      '/harmony/accordion',
      '/harmony/cajon',
      '/harmony/saxophone',
      '/harmony/flute',
      '/harmony/violoncello',
      '/harmony/tar',
      '/harmony/treetar',
      '/harmony/ood',
      '/harmony/santor',
      '/harmony/kamanche',
      '/harmony/ney',
      '/harmony/tonbak',
      '/harmony/daf',
      '/harmony/twotar',
      '/harmony/bagma',
      '/harmony/tanbor',
      '/professors/ماهیار تمسکنی',
      '/professors/علی آریا احمدیان',
      '/professors/فروغ یوسفی',
      '/professors/نگار شیخ سلیمی',
      '/professors/سروه بابلی',
      '/professors/سجاد تهذیبی',
      '/professors/مزدک توسلی',
      '/professors/شهاب قاسمی',
      '/professors/فرهاد فتحی راد',
      '/professors/علی کلانتری',
      '/professors/مینا مهدی‌پور',
      '/professors/چکاد فشارکی',
    ]
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - مانلی موزیک',
    title: 'مانلی موزیک',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {hid: 'description', name: 'description', content: 'آموزشگاه موسیقی مانلی از سال ۱۳۹۴ فعالیت خود را با مدیریت علی آریا احمدیان و با شماره مجور ۱۷۱۱۰۰۳۹۴۰۰۳۷ از وزارت فرهنگ و ارشاد اسلامی، آغاز نمود.'},
      {name: 'format-detection', content: 'telephone=+9821-66000028'}
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/Logo.ico'}
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    "~/assets/global.css",
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    ['@nuxtjs/vuetify', {rtl: true,}],
    '@nuxtjs/google-analytics',
    '@nuxtjs/device',
  ],

  googleAnalytics: {
    id: 'UA-204882304-2'
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    ['nuxt-i18n', {
      locales: [
        {
          name: 'Farsi',
          code: 'fa',
          iso: 'fa-IR',
          file: 'fa-IR.js'
        },
        // be dalil nages bodan nemitavan rahandazi kard
        // {
        //   name: 'English',
        //   code: 'en',
        //   iso: 'en-US',
        //   file: 'en-US.js'
        // }
      ],
      langDir: 'lang/',
      defaultLocale: 'fa',
    }],
    ['nuxt-gmaps', {
      key: 'AIzaSyC0W6O9lVf-QVCrYiiReR0heBy8MKp-dhA',
      //you can use libraries: ['places']
    }]
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: false,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {}
}
