<template>
    <video-background
        :src="require('~/assets/video/theliftshop-hero-video.mp4')"
        class="z-10 min-h-screen"
        overlay="linear-gradient(45deg,#000000,#fb949e6b)"
    >
        <div class="absolute bottom-24 left-0 w-full">
            <div
                v-scroll-to="'#element'"
                class="w-16 h-16 rounded-sm bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 mx-auto text-white p-2 cursor-pointer"
            >
                <IconCheveronDown class="animate-bounce w-12 h-12" />
            </div>
            <div id="element"></div>
        </div>

        <main>
            <div class="pt-10 sm:pt-16 lg:pt-8 lg:pb-14 lg:overflow-hidden">
                <div class="mx-auto max-w-7xl lg:px-8">
                    <div class="lg:grid lg:grid-cols-2 lg:gap-8">
                        <div
                            class="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 sm:text-center lg:px-0 lg:text-left lg:flex lg:items-center"
                        >
                            <div class="lg:py-24">
                                <nuxt-link
                                    to="/gallery"
                                    class="inline-flex items-center text-white bg-black rounded-full p-1 pr-2 sm:text-base lg:text-sm xl:text-base hover:text-gray-200"
                                >
                                    <span
                                        class="button px-3 py-0.5 text-white text-xs font-semibold leading-5 uppercase tracking-wide bg-gradient-to-r from-blue-600 to-blue-700 rounded-full"
                                        >New Builds!</span
                                    >
                                    <span class="ml-4 text-sm"
                                        ><span class="hidden sm:inline-block"
                                            >Check out the builds for</span
                                        >
                                        <span class="sm:inline-block">
                                            LiftedTrucks.com</span
                                        ></span
                                    >
                                    <IconCheveronRight
                                        class="ml-2 w-5 h-5 text-gray-500"
                                    />
                                </nuxt-link>
                                <h2
                                    class="mt-4 text-xl font-extrabold text-white sm:mt-5 sm:text-6xl lg:mt-6 xl:text-6xl"
                                >
                                    <div
                                        class="inline-block sm:text-3xl bg-gradient-to-r from-blue-600 to-blue-700 p-2 sm:p-4 mb-2 sm:mb-4"
                                    >
                                        TAKE YOUR VEHICLE
                                    </div>
                                    <div
                                        class="inline-block p-2 text-3xl sm:p-4 sm:text-3xl lg:text-5xl bg-gradient-to-r from-blue-600 to-blue-700 text-white"
                                    >
                                        TO THE NEXT LEVEL
                                    </div>
                                </h2>
                                <p
                                    class="mt-3 text-base text-white sm:mt-5 sm:text-xl lg:text-lg xl:text-xl"
                                >
                                    The Lift Shop offers the highest quality
                                    off-road lift kit installations for your
                                    vehicle. There's no other shop in the
                                    Southwest that has the experience and
                                    expertise offered by The Lift Shop.
                                </p>
                                <div class="mt-10 sm:mt-12">
                                    <form
                                        class="sm:max-w-xl sm:mx-auto lg:mx-0"
                                    >
                                        <div class="sm:flex">
                                            <div class="min-w-0 flex-1">
                                                <label
                                                    for="vehicle"
                                                    class="sr-only"
                                                    >Vehicle</label
                                                >
                                                <input
                                                    id="vehicle"
                                                    v-model="vehicle"
                                                    type="text"
                                                    placeholder="What kind of vehicle? Ford, Chevy, Dodge"
                                                    autocomplete="off"
                                                    class="block w-full px-4 py-3 rounded-sm border-0 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-300 focus:ring-offset-gray-900"
                                                />
                                            </div>
                                            <div class="mt-3 sm:mt-0 sm:ml-3">
                                                <button
                                                    type="submit"
                                                    class="block w-full py-3 px-4 shadow rounded-sm bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:from-blue-700 hover:to-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 focus:ring-offset-gray-900 transition ease-in duration-300"
                                                    @click.prevent="
                                                        redirectToBuildPage
                                                    "
                                                >
                                                    Start Your Build
                                                </button>
                                            </div>
                                        </div>
                                        <div
                                            class="mt-5 text-sm text-white sm:mt-4 flex flex-col sm:flex-row"
                                        >
                                            <span>
                                                Want to talk in person about
                                                your build?
                                            </span>
                                            <span class="sm:ml-2">
                                                <nuxt-link
                                                    to="/appointment"
                                                    class="font-medium text-white"
                                                    >Schedule an
                                                    Appointment</nuxt-link
                                                >
                                            </span>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div class="mt-12 -mb-16 sm:-mb-48 lg:m-0 lg:relative">
                            <!-- <div
                                    class="
                                        mx-auto
                                        max-w-md
                                        px-4
                                        sm:max-w-2xl
                                        sm:px-6
                                        lg:max-w-none
                                        lg:px-0
                                    "
                                >
                                    <img
                                        class="
                                            w-full
                                            lg:absolute
                                            lg:inset-y-0
                                            lg:left-0
                                            lg:h-full
                                            lg:w-auto
                                            lg:max-w-none
                                        "
                                        src="https://tailwindui.com/img/component-images/cloud-illustration-blue-400.svg"
                                        alt=""
                                    />
                                </div> -->
                        </div>
                    </div>
                </div>
            </div>
        </main>
    </video-background>
</template>

<script>
import IconCheveronDown from '@/assets/svg/icons/cheveron-down.svg?inline'
import IconCheveronRight from '@/assets/svg/icons/cheveron-right.svg?inline'

export default {
    components: {
        IconCheveronDown,
        IconCheveronRight,
    },
    data() {
        return {
            vehicle: null,
        }
    },
    methods: {
        redirectToBuildPage() {
            this.$router.push({
                path: '/build',
                query: { vehicle: this.vehicle },
            })
        },
    },
}
</script>
