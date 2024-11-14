<template>
    <div class="relative">
        <div
            class="z-10 bg-gray-50 md:bg-white lg:border-t lg:border-b lg:border-gray-200"
        >
            <nav class="mx-auto px-4 sm:px-6 lg:px-8" aria-label="Progress">
                <ol
                    class="bg-white rounded-md overflow-hidden lg:flex lg:border-l lg:border-r lg:border-gray-200 lg:rounded-none mt-5 sm:mt-0"
                >
                    <li
                        v-for="(option, index) in availableOptions"
                        :key="index"
                        class="relative overflow-hidden lg:flex-1"
                    >
                        <component
                            :is="getComponent(option, index)"
                            :option="option"
                            :index="index"
                            :current-index="currentIndex"
                            :available-options="availableOptions"
                        />
                    </li>
                </ol>
            </nav>
        </div>

        <StartBuildOverlay v-if="!buildData" />
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import CompletedStep from '@/components/Store/Steps/Completed'
import CurrentStep from '@/components/Store/Steps/Current'
import UpcomingStep from '@/components/Store/Steps/Upcoming'
import StartBuildOverlay from '@/components/Store/StartBuildOverlay'

export default {
    components: {
        CompletedStep,
        CurrentStep,
        UpcomingStep,
        StartBuildOverlay,
    },
    async fetch() {
        await this.setCurrentOption(this.$route.path.replace('/store/', ''))
    },
    computed: {
        ...mapState('build', [
            'buildData',
            'vehicleOptions',
            'selectedOptions',
            'currentOption',
            'completedOptions',
        ]),
        availableOptions() {
            return this.vehicleOptions.filter((item) =>
                this.selectedOptions.includes(item.field)
            )
        },
        currentIndex() {
            return this.availableOptions.findIndex(
                (item) => item.field === this.currentOption
            )
        },
    },
    methods: {
        ...mapActions('build', ['setCurrentOption']),
        getComponent(option, index) {
            if (this.completedOptions[option.field]) {
                return 'CompletedStep'
            }

            return index === this.currentIndex ? 'CurrentStep' : 'UpcomingStep'
        },
    },
}
</script>
