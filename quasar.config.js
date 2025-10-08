// quasar.config.js
import { defineConfig } from '#q-app/wrappers'

export default defineConfig(() => {
  return {
    boot: [],
    css: ['app.scss'],
    extras: ['roboto-font', 'material-icons'],

    build: {
      vueRouterMode: 'hash', // ใช้ hash mode
      publicPath: './',      // สำคัญสำหรับ GitHub Pages
      target: {
        browser: ['es2022', 'firefox115', 'chrome115', 'safari14'],
        node: 'node20',
      },
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

    devServer: {
      open: true,
    },

    framework: {
      config: {},
      plugins: [], // ใส่ ['Notify'] ถ้าต้องการ
    },

    animations: [],

    ssr: {
      prodPort: 3000,
      middlewares: ['render'],
      pwa: false,
    },

    pwa: {
      workboxMode: 'GenerateSW',
    },

    cordova: { hideSplashscreen: true },
    capacitor: { hideSplashscreen: true },

    electron: {
      preloadScripts: ['electron-preload'],
      inspectPort: 5858,
      bundler: 'packager',
      packager: {},
      builder: { appId: 'id-name-lastname' },
    },

    bex: { extraScripts: [] },
  }
})
