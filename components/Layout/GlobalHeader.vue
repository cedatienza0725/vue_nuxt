<template>
    <nav
        id="header"
        class="relative bg-gray-900 shadow py-1"
        aria-label="Global"
    >
        <div class="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
            <div class="flex justify-between h-16">
                <div class="flex items-center px-2 lg:px-0">
                    <div class="flex-shrink-0 flex items-center">
                        <nuxt-link to="/">
                            <img
                                class="h-16 sm:h-24 w-auto"
                                src="~assets/svg/logo/logo-dark.svg?data"
                            />
                        </nuxt-link>
                    </div>
                    <div class="hidden lg:ml-8 lg:flex lg:space-x-4">
                        <nuxt-link
                            v-for="(nav, index) in navigation"
                            :key="index"
                            :to="nav.link"
                            class="rounded-md py-2 px-3 font-medium text-gray-300 hover:text-white uppercase tracking-wide"
                        >
                            {{ nav.title }}
                        </nuxt-link>
                    </div>
                </div>

                <div class="flex items-center lg:hidden">
                    <a
                        href="tel:+18885413327"
                        class="inline-flex items-center justify-center p-2 rounded-md text-white"
                        aria-controls="mobile-menu"
                        aria-expanded="false"
                    >
                        <span class="sr-only">Click to Connect</span>

                        <phone-icon class="block h-6 w-6" />
                    </a>
                    <!-- Mobile menu button -->
                    <button
                        type="button"
                        class="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-gray-700 hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-600"
                        aria-controls="mobile-menu"
                        aria-expanded="false"
                        @click="mobileMenuIsOpen = !mobileMenuIsOpen"
                    >
                        <span class="sr-only">Open menu</span>

                        <menu-icon class="block h-6 w-6" />
                        <close-icon class="hidden h-6 w-6" />
                    </button>
                </div>
                <div class="hidden lg:ml-4 lg:flex lg:items-center">
                    <a
                        :href="`tel:${$store.getters.ContactNumber}`"
                        class="text-base font-medium text-gray-300 hover:text-white mr-4"
                    >
                        {{ $store.getters.ContactNumberPretty }}
                    </a>

                    <nuxt-link
                        to="/build"
                        class="button flex items-center justify-center px-4 py-2 border border-transparent text-base rounded-sm shadow-sm text-white bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 focus:ring-offset-gray-900 transition ease-in duration-300"
                    >
                        Start Your Build
                    </nuxt-link>
                </div>
            </div>
        </div>

        <!-- Mobile menu, show/hide based on menu state. -->
        <div
            v-show="mobileMenuIsOpen"
            id="mobile-menu"
            class="z-40 absolute top-0 inset-x-0 transition transform origin-top-right md:hidden px-2 -mt-4"
        >
            >
            <div
                class="rounded-lg shadow-md bg-gray-900 ring-1 ring-black ring-opacity-5 overflow-hidden"
            >
                <div class="px-5 pt-4 flex items-center justify-between">
                    <div>
                        <nuxt-link to="/">
                            <img
                                src="~assets/svg/logo/logo-dark.svg?data"
                                class="h-16 sm:h-24 w-auto"
                            />
                        </nuxt-link>
                    </div>
                    <div class="-mr-2">
                        <button
                            type="button"
                            class="bg-gray-800 rounded-md p-2 inline-flex items-center justify-center text-white hover:text-gray-700 hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-600"
                            @click="mobileMenuIsOpen = !mobileMenuIsOpen"
                        >
                            <span class="sr-only">Close menu</span>
                            <!-- Heroicon name: outline/x -->
                            <close-icon class="h-6 w-6" />
                        </button>
                    </div>
                </div>
                <div class="pt-2 pb-3 px-2 space-y-1">
                    <nuxt-link
                        v-for="(nav, index) in navigation"
                        :key="index"
                        :to="nav.link"
                        class="block rounded-md py-2 px-3 text-base font-medium text-white hover:text-white hover:bg-light-blue-400"
                        >{{ nav.title }}</nuxt-link
                    >
                    <a
                        :href="`tel:${$store.getters.ContactNumber}`"
                        class="button flex items-center justify-center px-4 py-2 border border-transparent text-base rounded-sm text-blue-600 bg-gradient-to-r from-white to-gray-200 hover:from-gray-200 hover:to-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 focus:ring-offset-gray-900 transition ease-in duration-300 sm:px-4"
                        @click="mobileMenuIsOpen = false"
                    >
                        Call Us
                    </a>
                    <nuxt-link
                        to="/build"
                        class="button flex items-center justify-center px-4 py-2 border border-transparent text-base rounded-sm shadow-sm text-white bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 focus:ring-offset-gray-900 transition ease-in duration-300 sm:px-4"
                    >
                        Start Your Build
                    </nuxt-link>
                </div>
            </div>
        </div>
    </nav>
</template>

<script>
import MenuIcon from '@/assets/svg/icons/menu.svg?inline'
import CloseIcon from '@/assets/svg/icons/close.svg?inline'
import PhoneIcon from '@/assets/svg/icons/phone-outline.svg?inline'

export default {
    components: {
        MenuIcon,
        CloseIcon,
        PhoneIcon,
    },
    data() {
        return {
            mobileMenuIsOpen: false,
            navigation: [
                {
                    title: 'Services',
                    link: '/services',
                },
                {
                    title: 'Gallery',
                    link: '/gallery',
                },
                {
                    title: 'Careers',
                    link: '/careers',
                },
                {
                    title: 'Contact',
                    link: '/contact',
                },
            ],
        }
    },
    watch: {
        $route() {
            this.mobileMenuIsOpen = false
        },
    },
}
</script>
