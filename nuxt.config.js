import customRoutes from './config/routes'

const API_URL = `${process.env.API_PROTOCOL || 'https'}://${
    process.env.API_DOMAIN
}`

export default {
    publicRuntimeConfig: {
        gtm: {
            id: process.env.GOOGLE_TAG_MANAGER_ID,
        },
        googleMapsApiKey: process.env.GOOGLE_MAPS_API_KEY,
        storyblokToken: process.env.STORYBLOK_TOKEN,
        environment:
            process.env.NUXT_ENV_VERCEL_ENV !== 'development'
                ? 'production'
                : 'development',
        apiDomain: process.env.API_DOMAIN || 'https://api.theliftshop.com',
        appDomain: process.env.APP_DOMAIN || 'https://www.theliftshop.com',
        aws: {
            accessKeyId: process.env.APP_AWS_ACCESS_KEY_ID,
            secretAccessKey: process.env.APP_AWS_SECRET_ACCESS_KEY,
            defaultRegion: process.env.APP_AWS_DEFAULT_REGION,
        },
    },

    head: {
        title: 'Off-road Parts and Accessories Shop',
        titleTemplate: '%s - The Lift Shop',
        meta: [
            { charset: 'utf-8' },
            {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1',
            },
            {
                hid: 'description',
                name: 'description',
                content:
                    'The Lift Shop has a team of off-road &amp; auto customization specialists with decades of combined industry experience for all makes and models.',
            },
            {
                hid: 'facebook-domain-verification',
                name: 'facebook-domain-verification',
                content: 'ufh8vvnmbp6zfn75ogvopwzmgd3bs1',
            },
            { hid: 'author', name: 'author', content: 'The Lift Shop' },
        ],
        link: [{ rel: 'stylesheet', href: '//rsms.me/inter/inter.css' }],
    },

    serverMiddleware: {
        '/function': '~/api',
    },

    css: [],

    plugins: [
        // '@/plugins/axios',
        '@/plugins/components',
        '@/plugins/vee-validate.js',
        '@/plugins/vue-the-mask.js',
        '@/plugins/crisp.client.js',
        '@/plugins/pixall.client.js',
        '@/plugins/vue-cookies.client.js',
        '@/plugins/vue-video-background.client.js',
        '@/plugins/vue-lazyload.client.js',
        '@/plugins/vue-flickity.client.js',
        '@/plugins/vue-animate-scroll.client.js',
        '@/plugins/v-click-outside.client.js',
        '@/plugins/vue-scroll-reveal.client.js',
    ],

    components: true,

    buildModules: [
        // '@nuxtjs/eslint-module',
        '@nuxtjs/tailwindcss',
        '@nuxtjs/google-fonts',
        '@nuxtjs/svg',
        '@nuxtjs/dotenv',
        'vue-ssr-carousel/nuxt',
    ],

    modules: [
        '@nuxtjs/axios',
        '@nuxtjs/auth-next',
        '@nuxtjs/pwa',
        '@nuxt/image',
        'portal-vue/nuxt',
        // 'nuxt-svg-loader',
        'nuxt-i18n',
        'vue-scrollto/nuxt',
        [
            'storyblok-nuxt',
            {
                accessToken: process.env.STORYBLOK_TOKEN,
                cacheProvider: 'memory',
            },
        ],
        [
            'nuxt-gmaps',
            {
                key: process.env.GOOGLE_MAPS_API_KEY,
                // you can use libraries: ['places']
            },
        ],
        '@nuxtjs/gtm',
        'nuxt-google-optimize',
        '@nuxtjs/dayjs',
    ],

    axios: {
        proxy: true,
        credentials: true,
    },

    proxy: {
        '/p/v1': {
            target: API_URL,
            pathRewrite: { '^/p/v1': '/p/v1' },
            changeOrigin: true,
            secure: process.env.NUXT_ENV_VERCEL_ENV === 'production',
        },
        '/api/v1': {
            target: API_URL,
            pathRewrite: { '^/api/v1': '/api/v1' },
            changeOrigin: true,
            secure: process.env.NUXT_ENV_VERCEL_ENV === 'production',
        },
        '/api': {
            target: API_URL,
            pathRewrite: { '^/api': '' },
            changeOrigin: true,
            secure: process.env.NUXT_ENV_VERCEL_ENV === 'production',
        },
    },

    googleFonts: {
        download: true,
        families: {
            Inter: true,
            Roboto: {
                wght: [100, 400, 900],
                ital: [100, 400, 900],
            },
        },
    },

    cli: {
        badgeMessages: ['Lifting site...', 'Pavement Princess ready 🛻'],
        bannerColor: 'blue',
    },

    pwa: {
        manifest: {
            lang: 'en',
        },
    },

    router: {
        middleware: [],
        extendRoutes(routes) {
            // add our custom routes to our existing routes
            ;[].push.apply(routes, customRoutes)
        },
        trailingSlash: false,
    },

    /*
     ** Build configuration
     */
    build: {
        transpile: ['vee-validate/dist/rules'],
    },
}
