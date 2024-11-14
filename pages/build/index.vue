<template>
    <div class="relative bg-gray-800 overflow-hidden">
        <div class="absolute inset-0">
            <img
                class="w-full h-full object-cover"
                :src="require('~/assets/image/build.jpeg')"
                sizes="sm:100vw md:50vw lg:1920px"
                alt=""
            />
            <div
                class="absolute inset-0 bg-gray-500 mix-blend-multiply"
                aria-hidden="true"
            ></div>
        </div>
        <div class="relative pt-6 pb-16 sm:pb-24">
            <main class="mt-16 sm:mt-24">
                <div class="mx-auto max-w-7xl">
                    <div class="lg:grid lg:grid-cols-12 lg:gap-8">
                        <div
                            class="px-4 sm:px-6 sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left lg:flex lg:items-center"
                        >
                            <div>
                                <h1
                                    class="mt-4 text-4xl tracking-tight font-extrabold text-white sm:mt-5 sm:leading-none lg:mt-6 lg:text-5xl xl:text-6xl"
                                >
                                    <span class="md:block"
                                        >Build Your Truck</span
                                    >
                                    <span class="text-blue-600 md:block"
                                        >the way you want.</span
                                    >
                                </h1>
                                <p
                                    class="mt-3 text-base text-gray-300 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl"
                                >
                                    Your {{ vehicle }} is your pride and joy,
                                    and we're here to make sure we provide you
                                    with the best advice and parts in the
                                    off-roading market. You pick the parts,
                                    we'll make them work on your
                                    {{ vehicle }} or help you find the gear you
                                    need for your off-road machine.
                                </p>

                                <Brands />
                            </div>
                        </div>
                        <div class="mt-16 sm:mt-24 lg:mt-0 lg:col-span-6">
                            <BuildForm :vehicle="vehicle" />
                        </div>
                    </div>
                </div>
            </main>
        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex'
import { StoryblokMixin } from '@/mixins/storyblok'
import { createBlokPage } from '@/helpers/storyblok'
import BuildForm from '@/components/Build/BuildForm'
import Brands from '@/components/Build/Brands'

export default {
    components: {
        BuildForm,
        Brands,
    },
    mixins: [StoryblokMixin],
    asyncData(context) {
        return createBlokPage(context, {
            endpoint: '/',
            params: {
                starts_with: 'brands',
                is_startpage: 0,
            },
        })
    },
    data() {
        return {
            vehicle: this.$route.query.vehicle || 'vehicle',
        }
    },
    head() {
        return {
            title: 'Start Your Build',
            meta: [
                {
                    hid: 'description',
                    name: 'description',
                    content:
                        'Tell us about your vehicle and what parts you would like to add to your build.',
                },
            ],
        }
    },
    created() {
        this.resetState()
    },
    methods: {
        ...mapActions('build', ['resetState']),
    },
}
</script>
