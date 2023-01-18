// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app: {
        head: {
            charset: 'utf-8',
            viewport: 'width=500, initial-scale=1',
            title: '123',
            meta: [
                // <meta name="description" content="My amazing site">
                { name: 'description', content: 'My amazing site.' },
            ],
            link: [
                { rel: "icon", type: "image/ico", href: "assets/favicon.ico" }
            ]
        },
        pageTransition: { name: 'page', mode: 'out-in' },
        layoutTransition: { name: 'layout', mode: 'out-in' }
    },
    modules: [
        '@pinia/nuxt',
        'vite-plugin-vue-type-imports/nuxt',
    ],
    vite: {
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: '@import "@/assets/scss/app.scss";',
                },
            },
        },
    },
    router: {
        options: {
            linkActiveClass: 'active',
            linkExactActiveClass: 'active'
        }
    },
    runtimeConfig: {
        // Config within public will be also exposed to the client
        API_KEY: process.env.API_KEY,
        public: {
            BASE_URL: process.env.BASE_URL,
            ACCESS_TOKEN: process.env.ACCESS_TOKEN,
            REFRESH_TOKEN: process.env.REFRESH_TOKEN,
        }
      },
})
