<template>
    <div>
        <p
            class="mt-8 text-sm text-white uppercase tracking-wide font-semibold sm:mt-10"
        >
            Brands We Use
        </p>
        <div class="mt-5 w-full sm:mx-auto sm:max-w-lg lg:ml-0">
            <div class="flex flex-wrap items-center justify-between">
                <div
                    v-for="(brand, index) in brandArr"
                    :key="index"
                    class="flex justify-center px-1"
                >
                    <img
                        class="w-full sm:w-40 mt-5 sm:mt-0"
                        :src="
                            brand.content.logo
                                ? brand.content.logo.filename
                                : null
                        "
                        :alt="brand.name"
                    />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
    async fetch() {
        if (!this.brands) {
            await this.getBrands(
                this.$route.query._storyblok ||
                    this.$config.environment !== 'development'
                    ? 'production'
                    : 'development'
            )
        }
    },
    computed: {
        ...mapState('brand', ['brands']),
        brandArr() {
            return this.brands || []
        },
    },

    methods: {
        ...mapActions('brand', ['getBrands']),
    },
}
</script>
