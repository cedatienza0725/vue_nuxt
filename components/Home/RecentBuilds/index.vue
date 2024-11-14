<template>
    <div
        class="bg-contain build-container"
        :style="`background-image: url(${require('~/assets/image/service-background.png')})`"
    >
        <div class="lg:mx-auto lg:max-w-7xl">
            <h2
                class="text-center py-12 px-4 sm:py-16 sm:px-6 sm:pb-10 lg:px-8 text-3xl font-extrabold tracking-tight text-white"
            >
                Recent Builds
            </h2>

            <ul
                class="space-y-4 sm:grid sm:grid-cols-2 sm:gap-6 sm:space-y-0 lg:grid-cols-3 lg:gap-10 p-5 pb-10"
            >
                <BuildCard
                    v-for="(build, index) in recentBuilds"
                    :key="index"
                    :build="build"
                    class="carousel-cell"
                />
            </ul>

            <!-- <client-only>
                <flickity
                    ref="flickity"
                    :options="flickityOptions"
                    @init="showFlickity = true"
                >
                    <div
                        v-for="(build, index) in recentBuilds"
                        :key="index"
                        class="carousel-cell"
                    >
                        <div v-show="showFlickity">
                            <BuildCard :build="build" />
                        </div>
                    </div>
                </flickity>
            </client-only> -->
        </div>
    </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import BuildCard from '@/components/Home/RecentBuilds/BuildCard'

export default {
    components: {
        BuildCard,
    },
    data() {
        return {
            showFlickity: false,
            flickityOptions: {
                freeScroll: true,
                contain: true,
                pageDots: false,
            },
        }
    },
    async fetch() {
        if (this.recentBuilds.length === 0) {
            await this.$axios.$get('/api/sanctum/csrf-cookie')
            this.getRecentBuilds()
        }
    },
    computed: {
        ...mapState('build', ['recentBuilds']),
    },
    methods: {
        ...mapActions('build', ['getRecentBuilds']),
    },
    fetchOnServer: false,
}
</script>
