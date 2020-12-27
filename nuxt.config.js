import messages from './i18n/messages'

export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'server',
  ssr: false,
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'Omnixent',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      {
        name: 'msapplication-TileColor',
        content: '#da532c'
      },
      {
        name: 'theme-color',
        content: '#ffffff'
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        hid: 'apple-touch-icon',
        rel: 'apple-touch-icon',
        sizes: '180x180',
        href: '/apple-touch-icon.png'
      },
      {
        type: 'image/png',
        rel: 'icon',
        sizes: '32x32',
        href: '/favicon-32x32.png'
      },
      {
        type: 'image/png',
        rel: 'icon',
        sizes: '16x16',
        href: '/favicon-16x16.png'
      },
      {
        rel: 'manifest',
        href: '/site.webmanifest'
      },
      {
        rel: 'mask-icon',
        href: '/safari-pinned-tab.svg',
        color: '#5bbad5'
      }
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
    '@nuxt/typescript-build',
    // https://google-fonts.nuxtjs.org/
    '@nuxtjs/google-fonts'
  ],

  // Google fonts nuxtjs config
  googleFonts: {
    prefetch: true,
    families: {
      Rubik: true
    }
  },

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    '@nuxtjs/style-resources',
    [
      'nuxt-i18n',
      {
        detectBrowserLanguage: {
          useCookie: true,
          alwaysRedirect: true
        },
        strategy: 'prefix_except_default',
        locales: [
          {
            code: 'en',
            name: 'English',
            icon: '🇬🇧',
            iso: 'en-US'
          },
          {
            code: 'it',
            name: 'Italiano',
            icon: '🇮🇹',
            iso: 'it-IT'
          }
        ],
        defaultLocale: 'en',
        seo: true,
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
