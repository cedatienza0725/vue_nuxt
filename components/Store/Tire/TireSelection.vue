<template>
    <div>
        <fieldset>
            <legend class="sr-only">Lift Kits</legend>

            <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <label
                    v-for="(tire, index) in tires"
                    :key="index"
                    v-scroll-to="'#header'"
                    class="relative block rounded-lg border border-gray-300 bg-white shadow-sm px-6 py-4 cursor-pointer hover:border-gray-400 sm:flex sm:justify-between focus-within:ring-1 focus-within:ring-blue-600"
                    @click.prevent="updateOption(tire.tire)"
                >
                    <input
                        type="radio"
                        name="lift_kit_size"
                        value="2"
                        class="sr-only"
                    />
                    <div class="flex items-center">
                        <div>
                            <p class="title">{{ tire.tire }}</p>
                            <div class="text-gray-500 text-sm">
                                <p class="sm:inline">{{ tire.description }}</p>
                            </div>
                        </div>
                    </div>
                    <div
                        :class="[
                            completedOptions['tires'] === tire.tire
                                ? 'border-blue-600'
                                : 'border-transparent',
                        ]"
                        class="absolute -inset-px rounded-lg border-2 pointer-events-none"
                        aria-hidden="true"
                    ></div>
                </label>
            </div>
        </fieldset>

        <StoreRedirectModal
            :open="modalIsOpen"
            type="tires"
            @close="modalIsOpen = false"
        />
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import StoreRedirectModal from '@/components/Modal/StoreRedirectModal'

export default {
    components: {
        StoreRedirectModal,
    },
    data() {
        return {
            tires: [
                {
                    tire: 'All Terrain (A/T)',
                    description: 'All terrain description.',
                },
                {
                    tire: 'Mud Terrain (M/T)',
                    description: 'Mud terrain description.',
                },
                {
                    tire: 'Snow Terrain (S/T)',
                    description: 'Snow terrain description.',
                },
            ],
            modalIsOpen: false,
        }
    },
    computed: {
        ...mapState('build', ['completedOptions', 'buildData']),
    },
    methods: {
        ...mapActions('build', ['updateCompletedOption']),
        updateOption(tires) {
            if (this.buildData) {
                this.updateCompletedOption({
                    option: 'tires',
                    value: tires,
                })
            } else {
                this.modalIsOpen = true
            }
        },
    },
}
</script>
