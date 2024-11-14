<template>
    <div class="bg-white">
        <div class="mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24">
            <div class="space-y-12">
                <div
                    class="space-y-5 sm:space-y-4 md:max-w-xl lg:max-w-3xl xl:max-w-none"
                >
                    <h1
                        class="text-3xl font-extrabold tracking-tight sm:text-4xl"
                    >
                        Our Team
                    </h1>
                    <p class="text-xl text-gray-500">Proudly serving you.</p>
                </div>
                <ul
                    class="space-y-12 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:grid-cols-3 lg:gap-x-8"
                >
                    <li v-for="(employee, index) in employees" :key="index">
                        <div class="space-y-4">
                            <div>
                                <img
                                    class="object-contain"
                                    :src="employee.content.image.filename"
                                    :alt="employee.content.name"
                                />
                            </div>

                            <div class="space-y-2">
                                <div
                                    class="text-lg leading-6 font-medium space-y-1"
                                >
                                    <h3>{{ employee.content.name }}</h3>
                                    <p
                                        v-if="employee.content.title"
                                        class="text-blue-600"
                                    >
                                        {{ employee.content.title }}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
    async fetch() {
        if (!this.employees) {
            await this.getEmployees(
                this.$route.query._storyblok ||
                    this.$config.environment !== 'development'
                    ? 'production'
                    : 'development'
            )
        }
    },
    computed: {
        ...mapState('team', ['employees']),
        brandArr() {
            return this.employees || []
        },
    },

    methods: {
        ...mapActions('team', ['getEmployees']),
    },
}
</script>
