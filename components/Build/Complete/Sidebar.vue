<template>
    <!-- Details sidebar -->
    <aside class="w-full md:w-96 bg-white p-8 border-l border-gray-200">
        <div class="pb-16 space-y-6">
            <div>
                <div
                    class="block w-full aspect-w-10 aspect-h-7 rounded-lg overflow-hidden"
                >
                    <img
                        src="https://www.autotrainingcentre.com/wp-content/uploads/2018/10/mechanic-school.jpg"
                        alt=""
                        class="object-cover"
                    />
                </div>
                <div class="mt-4 flex items-start justify-between">
                    <div>
                        <h2 class="text-lg text-gray-900">
                            The Lift Shop - Phoenix, AZ
                        </h2>
                        <p class="text-sm font-medium text-gray-500">
                            16223 N Cave Creek Rd <br />
                            Phoenix, AZ 85032
                        </p>
                    </div>
                    <div>
                        <h2 class="text-lg text-gray-900">
                            The Lift Shop - McKinney, TX
                        </h2>
                        <p class="text-sm font-medium text-gray-500">
                            900 N Central Expy N Suite 102<br />
                            McKinney, TX 75070
                        </p>
                    </div>
                </div>
            </div>

            <schedule-buttons :lead-id="buildData.build.id" />

            <div>
                <div class="flex items-center justify-between">
                    <h3 class="text-gray-900">Your Build Information</h3>
                    <button
                        type="button"
                        class="bg-white rounded-full h-8 w-8 flex items-center justify-center text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        <nuxt-link :to="`/store/${firstOption}`">
                            <IconPencilSolid class="h-5 w-5" />
                        </nuxt-link>
                        <span class="sr-only">Edit build</span>
                    </button>
                </div>
                <dl
                    class="mt-2 border-t border-b border-gray-200 divide-y divide-gray-200"
                >
                    <div class="py-3 flex justify-between text-sm font-medium">
                        <dt class="text-gray-500">Vehicle</dt>
                        <dd class="text-gray-900">
                            {{
                                buildData.build.meta
                                    ? buildData.build.meta.vehicle
                                    : '--'
                            }}
                        </dd>
                    </div>

                    <div
                        v-if="selectedOptions.includes('lift-kits')"
                        class="py-3 flex justify-between text-sm font-medium"
                    >
                        <dt class="text-gray-500">Lift Kit</dt>
                        <dd class="text-gray-900">
                            {{ completedOptions['lift-kits'] || '--' }}
                        </dd>
                    </div>

                    <div
                        v-if="selectedOptions.includes('wheels')"
                        class="py-3 flex justify-between text-sm font-medium"
                    >
                        <dt class="text-gray-500">Wheels</dt>
                        <dd class="text-gray-900 overflow-hidden">
                            {{
                                completedOptions.wheels
                                    ? completedOptions.wheels.length === 1
                                        ? completedOptions.wheels.join(', ')
                                        : '(Multple - Edit to View)'
                                    : '--'
                            }}
                        </dd>
                    </div>

                    <div
                        v-if="selectedOptions.includes('tires')"
                        class="py-3 flex justify-between text-sm font-medium"
                    >
                        <dt class="text-gray-500">Tires</dt>
                        <dd class="text-gray-900">
                            {{ completedOptions.tires || '--' }}
                        </dd>
                    </div>
                </dl>
            </div>

            <div>
                <h3 class="text-gray-900">Your Contact Information</h3>
                <dl
                    class="mt-2 border-t border-b border-gray-200 divide-y divide-gray-200"
                >
                    <div class="py-3 flex justify-between text-sm font-medium">
                        <dt class="text-gray-500">Name</dt>
                        <dd class="text-gray-900">
                            {{ buildData.customer.firstName }}
                            {{ buildData.customer.lastName }}
                        </dd>
                    </div>

                    <div class="py-3 flex justify-between text-sm font-medium">
                        <dt class="text-gray-500">Email</dt>
                        <dd class="text-gray-900">
                            {{ buildData.customer.email }}
                        </dd>
                    </div>

                    <div class="py-3 flex justify-between text-sm font-medium">
                        <dt class="text-gray-500">Phone Number</dt>
                        <dd class="text-gray-900">
                            {{ buildData.customer.phone }}
                        </dd>
                    </div>
                </dl>
            </div>

            <div>
                <h3 class="font-medium text-gray-900">Message</h3>
                <div
                    v-if="!messageOpen"
                    class="mt-2 flex items-center justify-between"
                >
                    <p class="text-sm text-gray-500 italic">
                        {{ message || 'Add a message for your technician.' }}
                    </p>
                    <button
                        type="button"
                        class="bg-white rounded-full h-8 w-8 flex items-center justify-center text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        <IconPencilSolid class="h-5 w-5" @click="openMessage" />
                        <span class="sr-only">Add description</span>
                    </button>
                </div>
                <div v-else class="mt-2 sm:col-span-2">
                    <textarea
                        ref="message"
                        v-model="message"
                        name="message"
                        rows="3"
                        class="block w-full shadow-sm sm:text-sm focus:ring-blue-500 focus:border-blue-600 border border-gray-300 rounded-md"
                    ></textarea>

                    <button
                        type="button"
                        class="mt-2 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-25 disabled:cursor-not-allowed"
                        @click.prevent="sendMessage"
                    >
                        Add Message
                    </button>
                    <button
                        type="button"
                        class="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                        @click.prevent="messageOpen = false"
                    >
                        Cancel
                    </button>
                </div>
            </div>

            <schedule-buttons :lead-id="buildData.build.id" />
        </div>
    </aside>
</template>

<script>
import { mapState } from 'vuex'
import ScheduleButtons from '@/components/Build/Complete/ScheduleButtons'
import IconPencilSolid from '@/assets/svg/icons/pencil-solid.svg?inline'

export default {
    components: {
        ScheduleButtons,
        IconPencilSolid,
    },
    data() {
        return {
            messageOpen: false,
            message: '',
        }
    },
    computed: {
        ...mapState('build', [
            'selectedOptions',
            'buildData',
            'completedOptions',
            'firstOption',
        ]),
    },
    methods: {
        openMessage() {
            this.messageOpen = true

            this.$nextTick(() => {
                this.$refs.message.focus()
            })
        },
        sendMessage() {
            this.$axios.$get('/api/sanctum/csrf-cookie').then(() => {
                this.$axios
                    .patch(`/p/v1/leads/${this.buildData.build.id}`, {
                        message: this.message,
                    })
                    .then(() => {
                        this.messageOpen = false
                    })
                    .catch((err) => {
                        alert(err.message)
                    })
            })
        },
    },
}
</script>
