<template>
    <div
        class="bg-white sm:max-w-md sm:w-full sm:mx-auto sm:rounded-lg sm:overflow-hidden"
    >
        <div class="px-4 py-8 sm:px-10">
            <div>
                <p class="text-sm font-medium text-gray-700">
                    What're you looking to install?
                </p>

                <div class="mt-1 grid grid-cols-3 gap-3">
                    <div v-for="(option, index) in vehicleOptions" :key="index">
                        <button
                            class="relative w-full inline-flex justify-center py-2 px-4 border-2 border-gray-300 shadow-sm rounded-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                            :class="{
                                ' border-green-600': selectedOptions.includes(
                                    option.field
                                ),
                            }"
                            @click="toggleOption(option.field)"
                        >
                            <span class="sr-only">{{ option.text }}</span>
                            {{ option.text }}
                            <span
                                v-if="selectedOptions.includes(option.field)"
                                class="absolute top-0 right-0 block h-4 w-4 transform -translate-y-1/2 translate-x-1/2 rounded-full bg-green-600"
                            >
                                <CheckmarkOutlineIcon
                                    class="w-4 h-4 text-white"
                                />
                            </span>
                        </button>
                    </div>
                </div>
            </div>

            <div class="mt-6 relative">
                <div
                    class="absolute inset-0 flex items-center"
                    aria-hidden="true"
                >
                    <div class="w-full border-t border-gray-300"></div>
                </div>
                <div class="relative flex justify-center text-sm">
                    <span class="px-2 bg-white text-gray-500">
                        A Few More Details
                    </span>
                </div>
            </div>

            <div class="mt-6">
                <ValidationObserver ref="form" v-slot="{ passes }">
                    <form class="space-y-6" @submit.prevent="passes(onSubmit)">
                        <div>
                            <ValidationProvider
                                v-slot="{ errors }"
                                vid="fullName"
                                name="Full Name"
                                rules="required"
                            >
                                <label for="name" class="sr-only"
                                    >Full name</label
                                >
                                <input
                                    id="fullName"
                                    v-model="form.fullName"
                                    type="text"
                                    name="fullName"
                                    autocomplete="name"
                                    placeholder="Full name"
                                    required
                                    class="block w-full shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm border-gray-300 rounded-sm"
                                />
                                <span class="errors">{{ errors[0] }}</span>
                            </ValidationProvider>
                        </div>
                        <div>
                            <ValidationProvider
                                v-slot="{ errors }"
                                vid="email"
                                name="Email"
                                rules="required|email"
                            >
                                <label for="email" class="sr-only">Email</label>
                                <input
                                    id="email"
                                    v-model="form.email"
                                    type="text"
                                    name="email"
                                    autocomplete="email"
                                    placeholder="Email"
                                    required
                                    class="block w-full shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm border-gray-300 rounded-sm"
                                />
                                <span class="errors">{{ errors[0] }}</span>
                            </ValidationProvider>
                        </div>
                        <div>
                            <ValidationProvider
                                v-slot="{ errors }"
                                vid="phoneNumber"
                                name="Phone Number"
                                rules="required"
                            >
                                <label for="phoneNumber" class="sr-only"
                                    >Phone Number</label
                                >
                                <input
                                    id="phoneNumber"
                                    v-model="form.phoneNumber"
                                    v-mask="'(###) ###-####'"
                                    type="tel"
                                    name="phoneNumber"
                                    placeholder="Phone number"
                                    class="block w-full shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm border-gray-300 rounded-sm"
                                />
                                <span class="errors">{{ errors[0] }}</span>
                            </ValidationProvider>
                        </div>

                        <!-- <div>
                            <ValidationProvider
                                v-slot="{ errors }"
                                vid="phoneOrEmail"
                                name="Mobile number or email"
                                rules="required|phoneOrEmail"
                            >
                                <label for="mobile-or-email" class="sr-only"
                                    >Phone number or email</label
                                >
                                <input
                                    id="contact"
                                    v-model="form.contact"
                                    v-mask="mask"
                                    type="text"
                                    name="contact"
                                    placeholder="Mobile number or email"
                                    required
                                    class="
                                        block
                                        w-full
                                        shadow-sm
                                        focus:ring-blue-500
                                        focus:border-blue-500
                                        sm:text-sm
                                        border-gray-300
                                        rounded-sm
                                    "
                                />
                                <span class="errors">{{ errors[0] }}</span>
                            </ValidationProvider>
                        </div> -->

                        <div>
                            <ValidationProvider
                                v-slot="{ errors }"
                                vid="phoneNumber"
                                name="Phone Number"
                                rules="required"
                            >
                                <label for="vehicle" class="sr-only"
                                    >Your Vehicle</label
                                >
                                <input
                                    id="vehicle"
                                    v-model="form.vehicle"
                                    name="vehicle"
                                    type="text"
                                    placeholder="Your vehicle"
                                    class="block w-full shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm border-gray-300 rounded-sm"
                                />
                                <span class="errors">{{ errors[0] }}</span>
                            </ValidationProvider>
                        </div>

                        <div>
                            <ValidationProvider
                                v-slot="{ errors }"
                                vid="location"
                                name="Location"
                                rules="required"
                            >
                                <label for="location" class="sr-only"
                                    >Location</label
                                >
                                <select
                                    id="location"
                                    v-model="form.location"
                                    name="location"
                                    class="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
                                >
                                    <option value disabled>
                                        Select location
                                    </option>
                                    <option
                                        v-for="(location, index) in locations"
                                        :key="index"
                                        :value="location.name"
                                    >
                                        {{ location.name }}
                                    </option>
                                </select>
                                <span class="errors">{{ errors[0] }}</span>
                            </ValidationProvider>
                        </div>

                        <div>
                            <button
                                type="submit"
                                class="w-full flex justify-center py-2 px-4 border border-transparent shadow-sm rounded-sm text-white bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 focus:ring-offset-gray-900 transition ease-in duration-300 disabled:opacity-25 disabled:cursor-not-allowed"
                                :disabled="
                                    selectedOptions.length === 0 || isSubmitting
                                "
                            >
                                Start Your Build
                            </button>
                        </div>
                    </form>
                </ValidationObserver>
            </div>
        </div>
        <div class="px-4 py-6 bg-gray-50 border-t-2 border-gray-200 sm:px-10">
            <p class="text-xs leading-5 text-gray-500">
                By signing up, you agree to our
                <nuxt-link
                    to="terms"
                    class="font-medium text-gray-900 hover:underline"
                    >Terms</nuxt-link
                >
                and
                <nuxt-link
                    to="privacy"
                    class="font-medium text-gray-900 hover:underline"
                    >Privacy Policy</nuxt-link
                >.
            </p>
        </div>
    </div>
</template>

<script>
import { ValidationProvider, ValidationObserver } from 'vee-validate'
import { mapActions, mapState } from 'vuex'
import CheckmarkOutlineIcon from '@/assets/svg/icons/checkmark-outline.svg?inline'

export default {
    components: {
        ValidationProvider,
        ValidationObserver,
        CheckmarkOutlineIcon,
    },
    props: {
        vehicle: {
            type: String,
            default: null,
        },
    },
    data() {
        return {
            form: {
                fullName: '',
                email: '',
                phoneNumber: '',
                vehicle: '',
                location: '',
            },
            isSubmitting: false,
        }
    },
    computed: {
        ...mapState('build', ['vehicleOptions', 'selectedOptions']),
        ...mapState('location', ['locations']),
        firstName() {
            const name = this.form.fullName.split(' ').slice(0, -1).join(' ')
            return name === '' ? this.form.fullName : name
        },
        lastName() {
            const lastName = this.form.fullName.split(' ').slice(-1).join(' ')
            return lastName !== this.firstName ? lastName : null
        },
        firstOption() {
            return this.vehicleOptions.find((item) =>
                this.selectedOptions.includes(item.field)
            )
        },
    },
    methods: {
        ...mapActions('build', [
            'setBuildData',
            'toggleOption',
            'setCurrentOption',
            'setFirstOption',
            'setLocation',
            'updateCompletedOption',
        ]),
        async onSubmit() {
            this.isSubmitting = true
            await this.$axios.$get('/api/sanctum/csrf-cookie')

            const query = {
                first_name: this.firstName,
                email: this.form.email,
                phone: this.form.phoneNumber,
                form_source: 'build',
                form_url: this.$route.path,
                ip_address: this.$store.state.ip,
                meta: {},
            }

            if (this.form.vehicle) {
                query.meta.vehicle = this.form.vehicle
            }

            if (this.form.location) {
                query.meta.location = this.form.location
                this.setLocation(this.form.location)
            }

            if (this.lastName) {
                query.last_name = this.lastName
            }

            this.$axios
                .post('/p/v1/leads', query)
                .then((res) => {
                    this.isSubmitting = false
                    this.setBuildData({
                        build: res.data,
                        customer: {
                            firstName: this.firstName,
                            lastName: this.lastName,
                            email: this.form.email,
                            phone: this.form.phoneNumber,
                        },
                    })

                    this.setFirstOption(this.firstOption.field)
                    this.setCurrentOption(this.firstOption.field)

                    if (this.form.vehicle) {
                        this.updateCompletedOption({
                            option: 'vehicle',
                            value: this.form.vehicle,
                        })
                    }

                    this.$router.push(`/store/${this.firstOption.field}`)
                })
                .catch((err) => {
                    this.isSubmitting = false
                    console.log(err.message)
                })
        },
        formatErrors(errors) {
            return errors
        },
    },
}
</script>
