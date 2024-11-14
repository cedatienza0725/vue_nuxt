<template>
    <div>
        <div class="grid grid-cols-6 gap-6">
            <div class="col-span-6 sm:col-span-3">
                <label
                    for="year"
                    class="block text-sm font-medium text-gray-700"
                    >Vehicle Year</label
                >
                <input
                    id="year"
                    v-model="vehicleForm.year"
                    type="text"
                    name="year"
                    autocomplete="off"
                    class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
            </div>

            <div class="col-span-6 sm:col-span-3">
                <label
                    for="last-name"
                    class="block text-sm font-medium text-gray-700"
                    >Last name</label
                >
                <input
                    id="last-name"
                    type="text"
                    name="last-name"
                    autocomplete="family-name"
                    class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
            </div>

            <div class="col-span-6 sm:col-span-4">
                <label
                    for="email-address"
                    class="block text-sm font-medium text-gray-700"
                    >Email address</label
                >
                <input
                    id="email-address"
                    type="text"
                    name="email-address"
                    autocomplete="email"
                    class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
            </div>
        </div>
        <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
            <button
                type="submit"
                class="bg-blue-600 border border-transparent rounded-md shadow-sm py-2 px-4 inline-flex justify-center text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
                Save
            </button>
        </div>
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
    data() {
        return {
            vehicleForm: {
                year: null,
                make: null,
                model: null,
                submodel: null,
                drivetrain: null, // 2wd or 4wd
                intended_use: null,
                tire_size: null,
            },

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
            }
        },
    },
}
</script>
