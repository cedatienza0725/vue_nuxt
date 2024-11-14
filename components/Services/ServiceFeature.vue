<template>
    <div class="relative pt-16 pb-32 overflow-hidden">
        <div
            aria-hidden="true"
            class="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-gray-100"
        ></div>
        <div class="relative">
            <div
                class="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24"
            >
                <div
                    class="px-4 max-w-xl mx-auto sm:px-6 lg:py-16 lg:max-w-none lg:mx-0 lg:px-0"
                >
                    <div>
                        <div>
                            <span
                                class="h-12 w-12 rounded-md flex items-center justify-center bg-gradient-to-r from-blue-600 to-blue-600"
                            >
                                <CogIcon class="h-6 w-6 text-white" />
                            </span>
                        </div>
                        <div class="mt-6">
                            <h2
                                class="text-3xl font-extrabold tracking-tight text-gray-900"
                            >
                                Lift Kit Installation
                            </h2>
                            <p class="mt-4 text-lg text-gray-500">
                                The lift kit is your vehicle’s answer to the
                                call of the wild! The great outdoors has lured a
                                many truck, Jeep, and SUV driver to challenge
                                its rugged terrains. Some have been successful,
                                and some not so much. We can only speak for our
                                customers and their vehicles which were fully
                                equipped and ready for an adventure into the
                                unknown. We’ll turn any vehicle into a monster
                                that’s ready to tackle any terrain.
                            </p>
                            <div class="mt-6">
                                <nuxt-link
                                    to="services/lift-kits"
                                    class="button inline-flex items-center justify-center px-4 py-2 border border-transparent text-base rounded-sm shadow-sm text-white bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 focus:ring-offset-gray-900 transition ease-in duration-300"
                                >
                                    Get started
                                </nuxt-link>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="mt-12 sm:mt-16 lg:mt-0">
                    <div
                        class="px-4 sm:-mr-48 sm:pl-6 sm:pr-0 md:-mr-16 lg:px-0 lg:m-0 lg:relative lg:h-full"
                    >
                        <img
                            class="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                            :src="require('~/assets/image/service1.jpeg')"
                            alt=""
                        />
                    </div>
                </div>
            </div>
        </div>
        <div class="mt-12 sm:mt-24">
            <div
                class="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24"
            >
                <div
                    class="px-4 max-w-xl mx-auto sm:px-6 lg:py-32 lg:max-w-none lg:mx-0 lg:px-0 lg:col-start-2"
                >
                    <div>
                        <div>
                            <span
                                class="h-12 w-12 rounded-md flex items-center justify-center bg-gradient-to-r from-blue-600 to-blue-600"
                            >
                                <CogIcon class="h-6 w-6 text-white" />
                            </span>
                        </div>
                        <div class="mt-6">
                            <h2
                                class="text-3xl font-extrabold tracking-tight text-gray-900"
                            >
                                Leveling Kit Installation
                            </h2>
                            <p class="mt-4 text-lg text-gray-500">
                                The most popular upgrade for an off-road vehicle
                                is the leveling kit, which levels both the front
                                and rear suspension. Almost all production SUVs,
                                trucks, and other popular off-road vehicles come
                                out of the factory with lower front suspension
                                to increase fuel economy.
                            </p>
                            <div class="mt-6">
                                <nuxt-link
                                    to="services/leveling-kits"
                                    class="button inline-flex items-center justify-center px-4 py-2 border border-transparent text-base rounded-sm shadow-sm text-white bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 focus:ring-offset-gray-900 transition ease-in duration-300"
                                >
                                    Get started
                                </nuxt-link>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="mt-12 sm:mt-16 lg:mt-0 lg:col-start-1">
                    <div
                        class="px-4 sm:pr-6 sm:pl-0 md:-ml-16 lg:px-0 lg:m-0 lg:relative lg:h-full"
                    >
                        <img
                            class="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:right-0 lg:h-full lg:w-auto lg:max-w-none"
                            :src="require('~/assets/image/service2.jpeg')"
                            alt=""
                        />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import CogIcon from '@/assets/svg/icons/cog-solid.svg?inline'

export default {
    components: {
        CogIcon,
    },
}
</script>
