import messages from './i18n/messages'

export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'server',
  ssr: false,
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'omnixent-front',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    { src: '~/plugins/client.ts' },
    { src: '~plugins/oruga.ts' },
    { src: '~plugins/fa.ts' }
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build'
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    '@nuxtjs/style-resources',
    [
      'nuxt-i18n',
      {
        strategy: 'no_prefix',
        locales: ['en'],
        defaultLocale: 'en',
        vueI18n: {
          fallbackLocale: 'en',
          messages
        }
      }
    ],
    '@nuxtjs/robots'
  ],
  robots: [
    {
      UserAgent: '*',
      Disallow: () => process.env.NUXT_ENV_PRODUCTION ? '' : '/'
    }
  ],
  styleResources: {
    scss: [
      '~/assets/scss/variables.scss',
      'flexboxgrid/dist/flexboxgrid.min.css',
      '~/assets/scss/globals.scss',
      '@oruga-ui/oruga/src/scss/oruga-lite.scss',
      '~/assets/scss/buttons.scss',
      '~/assets/scss/dropdown.scss'
    ]
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {}
}
