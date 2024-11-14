<template>
    <div class="max-w-7xl mx-auto h-screen pt-16 pb-32">
        <div class="lg:px-8 text-center">
            <h3 class="text-9xl">{{ error.statusCode }}</h3>
            <h1 v-if="error.statusCode === 404" class="text-4xl">
                Page not found
            </h1>
            <h1
                v-else-if="$config.environment === 'development'"
                class="text-4xl"
            >
                Error (Dev): {{ error.message }}
            </h1>
            <h1 v-else class="text-4xl">An error occurred</h1>
            <div class="my-6 max-w-lg lg:max-w-xl mx-auto flex gap-6">
                <div class="w-full">
                    <nuxt-link
                        to="/"
                        class="button flex items-center justify-center px-4 py-2 border border-gray-200 text-base rounded-sm shadow text-blue-600 bg-gradient-to-r from-white to-gray-200 hover:from-gray-200 hover:to-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 focus:ring-offset-gray-900 transition ease-in duration-300 sm:px-4"
                    >
                        Return Home
                    </nuxt-link>
                </div>
                <div class="w-full">
                    <nuxt-link
                        to="/build"
                        class="button flex items-center justify-center px-4 py-2 border border-transparent text-base rounded-sm shadow-sm text-white bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 focus:ring-offset-gray-900 transition ease-in duration-300 sm:px-4"
                    >
                        Start Your Build
                    </nuxt-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    layout: 'error',
    props: {
        error: {
            type: Object,
            required: true,
        },
    },
}
</script>
