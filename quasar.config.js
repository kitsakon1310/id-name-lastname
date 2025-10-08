// quasar.config.js
// Configuration for your app
// https://v2.quasar.dev/quasar-cli-vite/quasar-config-file

import { defineConfig } from '#q-app/wrappers'

export default defineConfig((/* ctx */) => {
  return {
    // Boot files
    boot: [],

    // CSS files
    css: ['app.scss'],

    // Extras (icons/fonts)
    extras: [
      'roboto-font',
      'material-icons',
    ],

    // Build configuration
    build: {
      target: {
        browser: ['es2022', 'firefox115', 'chrome115', 'safari14'],
        node: 'node20',
      },

      vueRouterMode: 'hash', // สำคัญสำหรับ GitHub Pages
      publicPath: './',      // สำคัญสำหรับ GitHub Pages

      vitePlugins: [
        [
          'vite-plugin-checker',
          {
            eslint: {
              lintCommand: 'eslint -c ./eslint.config.js "./src*/**/*.{js,mjs,cjs,vue}"',
              useFlatConfig: true,
            },
          },
          { server: false },
        ],
      ],
    },

    // Dev server
    devServer: {
      open: true,
    },

    // Quasar framework config
    framework: {
      config: {},
      plugins: [], // ใส่ ['Notify'] ถ้าต้องการใช้งาน Notify
    },

    // Animations
    animations: [],

    // SSR
    ssr: {
      prodPort: 3000,
      middlewares: ['render'],
      pwa: false,
    },

    // PWA
    pwa: {
      workboxMode: 'GenerateSW',
    },

    // Cordova
    cordova: {
      hideSplashscreen: true,
    },

    // Capacitor
    capacitor: {
      hideSplashscreen: true,
    },

    // Electron
    electron: {
      preloadScripts: ['electron-preload'],
      inspectPort: 5858,
      bundler: 'packager',
      packager: {},
      builder: {
        appId: 'id-name-lastname',
      },
    },

    // Browser Extension (BEX)
    bex: {
      extraScripts: [],
    },
  }
})
