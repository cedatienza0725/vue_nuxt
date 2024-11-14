<template>
    <div
        v-show="breadcrumbs.length > 0"
        class="hidden md:block container mx-auto py-5 px-4 sm:px-6 lg:px-8"
    >
        <nav class="bg-white flex" aria-label="Breadcrumb">
            <ol class="max-w-screen-xl w-full flex space-x-4">
                <li class="flex">
                    <div class="flex items-center">
                        <nuxt-link
                            :to="localePath('/')"
                            class="text-gray-400 hover:text-gray-500"
                        >
                            <icon-home
                                class="flex-shrink-0 h-5 w-5 transition duration-150 ease-in-out"
                            />
                        </nuxt-link>
                        <span class="sr-only">Home</span>
                    </div>
                </li>
                <li
                    v-for="(breadcrumb, index) in breadcrumbs"
                    :key="index"
                    class="flex"
                >
                    <div class="flex items-center space-x-3">
                        <icon-slash
                            class="flex-shrink-0 h-5 w-5 text-gray-300"
                        />
                        <nuxt-link
                            v-if="breadcrumb.link"
                            :to="localePath(breadcrumb.link)"
                            class="text-sm leading-5 font-medium text-gray-500 hover:text-gray-700 transition duration-150 ease-in-out"
                            >{{ breadcrumb.name }}</nuxt-link
                        >
                        <div v-else class="text-sm leading-5 text-gray-500">
                            {{ breadcrumb.name }}
                        </div>
                    </div>
                </li>
            </ol>
        </nav>
    </div>
</template>

<script>
import IconHome from '@/assets/svg/icons/home.svg?inline'
import IconSlash from '@/assets/svg/icons/slash.svg?inline'

export default {
    components: {
        IconHome,
        IconSlash,
    },
    props: {
        breadcrumbs: {
            type: Array,
            default: () => {
                return []
            },
        },
    },
}
</script>

<style></style>
