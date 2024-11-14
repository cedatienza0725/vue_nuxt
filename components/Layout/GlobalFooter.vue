<template>
    <footer class="bg-gray-900" aria-labelledby="footerHeading">
        <h2 id="footerHeading" class="sr-only">Footer</h2>
        <div class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
            <div class="xl:grid xl:grid-cols-3 xl:gap-8">
                <div class="space-y-8 xl:col-span-1">
                    <nuxt-link to="/">
                        <img
                            class="h-16 sm:h-24"
                            src="~assets/svg/logo/logo-dark.svg?data"
                        />
                    </nuxt-link>
                    <div
                        class="flex flex-col space-y-10 sm:space-y-0 sm:flex-row sm:space-x-8"
                    >
                        <div class="flex flex-col gap-y-4">
                            <button
                                type="button"
                                class="inline-flex border border-transparent text-left align-left leading-6 font-medium text-base text-gray-400 hover:text-white"
                            >
                                <location-icon
                                    class="-ml-0.5 mr-2 mt-1 h-4 w-4"
                                />
                                16223 N Cave Creek Rd<br />
                                Phoenix, AZ 85032
                            </button>
                            <a
                                href="tel:+14801234567"
                                class="inline-flex items-center border border-transparent leading-6 font-medium text-base text-gray-400 hover:text-white"
                            >
                                <device-mobile-icon
                                    class="-ml-0.5 mr-2 h-4 w-4"
                                />
                                {{ $store.getters.ContactNumberPretty }}
                            </a>

                            <nuxt-link
                                to="/contact"
                                class="inline-flex items-start border border-transparent leading-6 font-medium text-base text-gray-400 hover:text-white"
                            >
                                <clock-icon class="-ml-0.5 mr-2 mt-1 h-4 w-4" />
                                Mon-Fri: 8am-6pm<br />
                                Saturday: 9am-1pm
                            </nuxt-link>
                        </div>
                        <div class="flex flex-col gap-y-4">
                            <button
                                type="button"
                                class="inline-flex border border-transparent text-left align-left leading-6 font-medium text-base text-gray-400 hover:text-white"
                            >
                                <location-icon
                                    class="-ml-0.5 mr-2 mt-1 h-4 w-4"
                                />
                                900 N Central Expy N Suite 102<br />
                                McKinney, TX 75070
                            </button>
                            <a
                                href="tel:+14695992347"
                                class="inline-flex items-center border border-transparent leading-6 font-medium text-base text-gray-400 hover:text-white"
                            >
                                <device-mobile-icon
                                    class="-ml-0.5 mr-2 h-4 w-4"
                                />
                                (469) 599-2347
                            </a>

                            <nuxt-link
                                to="/contact"
                                class="inline-flex items-start border border-transparent leading-6 font-medium text-base text-gray-400 hover:text-white"
                            >
                                <clock-icon class="-ml-0.5 mr-2 mt-1 h-4 w-4" />
                                Mon-Fri: 8am-6pm<br />
                                Saturday: 9am-1pm
                            </nuxt-link>
                        </div>
                    </div>

                    <div class="flex space-x-6">
                        <a
                            href="https://www.facebook.com/theliftshopaz"
                            target="_blank"
                            title="The Lift Shop Facebook Page"
                            class="text-gray-400 hover:text-gray-500"
                        >
                            <span class="sr-only">Facebook</span>
                            <facebook-circle-icon class="h-6 w-6" />
                        </a>

                        <a
                            href="https://www.instagram.com/theliftshop"
                            target="_blank"
                            title="The Lift Shop Instagram Profile"
                            class="text-gray-400 hover:text-gray-500"
                        >
                            <span class="sr-only">Instagram</span>
                            <instagram-icon class="h-6 w-6" />
                        </a>

                        <!-- <a href="#" class="text-gray-400 hover:text-gray-500">
                            <span class="sr-only">Twitter</span>
                            <icon-twitter class="w-6 h-6" />
                        </a> -->
                    </div>
                </div>
                <div class="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
                    <div class="md:grid md:grid-cols-2 md:gap-8">
                        <div
                            v-for="(linkObj, index) in left"
                            :key="index"
                            :class="{
                                'mt-12 md:mt-0': index > 0,
                            }"
                        >
                            <h3
                                class="text-sm font-semibold text-white tracking-wider uppercase"
                            >
                                {{ linkObj.name }}
                            </h3>
                            <ul class="mt-4 space-y-4">
                                <li
                                    v-for="(link, index2) in linkObj.linkArr"
                                    :key="index2"
                                >
                                    <nuxt-link
                                        :to="link.link"
                                        class="text-base text-gray-400 hover:text-white"
                                    >
                                        {{ link.text }}
                                    </nuxt-link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="md:grid md:grid-cols-2 md:gap-8">
                        <div
                            v-for="(linkObj, index) in right"
                            :key="index"
                            :class="{
                                'mt-12 md:mt-0': index > 0,
                            }"
                        >
                            <h3
                                class="text-sm font-semibold text-white tracking-wider uppercase"
                            >
                                {{ linkObj.name }}
                            </h3>
                            <ul class="mt-4 space-y-4">
                                <li
                                    v-for="(link, index2) in linkObj.linkArr"
                                    :key="index2"
                                >
                                    <nuxt-link
                                        :to="link.link"
                                        class="text-base text-gray-400 hover:text-white"
                                    >
                                        {{ link.text }}
                                    </nuxt-link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div class="mt-12 border-t border-gray-600 pt-8">
                <p class="text-base text-gray-400 xl:text-center">
                    &copy; 2021 The Lift Shop, Inc. All rights reserved.
                </p>
            </div>
        </div>
    </footer>
</template>

<script>
import LocationIcon from '@/assets/svg/icons/location.svg?inline'
import ClockIcon from '@/assets/svg/icons/clock.svg?inline'
import DeviceMobileIcon from '@/assets/svg/icons/device-mobile.svg?inline'
import FacebookCircleIcon from '@/assets/svg/icons/social/facebook-circle.svg?inline'
import InstagramIcon from '@/assets/svg/icons/social/instagram.svg?inline'

export default {
    components: {
        LocationIcon,
        ClockIcon,
        DeviceMobileIcon,
        FacebookCircleIcon,
        InstagramIcon,
    },
    data() {
        return {
            left: [
                {
                    name: 'Services',
                    linkArr: [
                        {
                            text: 'Lift Kits',
                            link: '/services/lift-kits',
                        },
                        {
                            text: 'Off-Road Accessories',
                            link: '/services/off-road-accessories',
                        },
                        {
                            text: '4x4 Customization',
                            link: '/services/4x4-customization',
                        },
                        {
                            text: 'Custom Wheels',
                            link: '/services/custom-wheels',
                        },
                    ],
                },
                {
                    name: 'Gallery',
                    linkArr: [
                        {
                            text: 'Ford Builds',
                            link: '/gallery/ford',
                        },
                        {
                            text: 'Chevy Builds',
                            link: '/gallery/chevrolet',
                        },
                        {
                            text: 'Dodge Builds',
                            link: '/gallery/dodge',
                        },
                        {
                            text: 'Jeep Builds',
                            link: '/gallery/jeep',
                        },
                    ],
                },
            ],
            right: [
                {
                    name: 'Store',
                    linkArr: [
                        {
                            text: 'Lift Kits',
                            link: '/store/lift-kits',
                        },
                        {
                            text: 'Wheels',
                            link: '/store/wheels',
                        },
                        {
                            text: 'Tires',
                            link: '/store/tires',
                        },
                    ],
                },
                {
                    name: 'Company',
                    linkArr: [
                        {
                            text: 'Careers',
                            link: '/careers',
                        },
                        {
                            text: 'Our Team',
                            link: '/meet-the-team',
                        },
                        {
                            text: 'Contact',
                            link: '/contact',
                        },
                        {
                            text: 'Terms',
                            link: '/terms',
                        },
                        {
                            text: 'Privacy Policy',
                            link: '/privacy',
                        },
                    ],
                },
            ],
        }
    },
}
</script>
