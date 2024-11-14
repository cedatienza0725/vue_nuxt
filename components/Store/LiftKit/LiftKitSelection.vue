<template>
    <div>
        <fieldset>
            <legend class="sr-only">Lift Kits</legend>

            <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <label
                    v-for="(lift, index) in liftKits"
                    :key="index"
                    v-scroll-to="'#header'"
                    class="relative block rounded-lg border border-gray-300 bg-white shadow-sm px-6 py-4 cursor-pointer hover:border-gray-400 sm:flex sm:justify-between focus-within:ring-1 focus-within:ring-blue-600"
                    @click.prevent="updateOption(lift.lift)"
                >
                    <input
                        type="radio"
                        name="lift_kit_size"
                        value="2"
                        class="sr-only"
                    />
                    <div class="flex items-center">
                        <div>
                            <p class="title">{{ lift.lift }}</p>
                            <div class="text-gray-500 text-sm">
                                <p class="sm:inline">{{ lift.description }}</p>
                            </div>
                        </div>
                    </div>
                    <div
                        :class="[
                            completedOptions['lift-kits'] === lift.lift
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
            type="lift"
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
            liftKits: [
                {
                    lift: '2" Level Lift',
                    description: 'Get your rig on the trails.',
                },
                {
                    lift: '6" Level Lift',
                    description: 'Our favorite lift kit for any truck.',
                },
                {
                    lift: '8"-12" Lift Kit',
                    description: 'Go big or go home.',
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
        updateOption(lift) {
            if (this.buildData) {
                this.updateCompletedOption({
                    option: 'lift-kits',
                    value: lift,
                })
            } else {
                this.modalIsOpen = true
            }
        },
    },
}
</script>
