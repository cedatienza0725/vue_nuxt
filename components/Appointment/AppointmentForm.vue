<template>
    <div class="max-w-7xl mx-auto -mt-10 pb-16 px-4 sm:pb-24 sm:px-6 lg:px-8">
        <div class="relative bg-white shadow-xl">
            <h2 class="sr-only">Schedule appointment</h2>

            <div class="grid grid-cols-1 lg:grid-cols-3">
                <!-- Contact information -->
                <div
                    class="hidden sm:block relative overflow-hidden py-10 px-6 bg-blue-700 sm:px-10 xl:p-12"
                >
                    <div
                        class="absolute inset-0 pointer-events-none sm:hidden"
                        aria-hidden="true"
                    >
                        <svg
                            class="absolute inset-0 w-full h-full"
                            width="343"
                            height="388"
                            viewBox="0 0 343 388"
                            fill="none"
                            preserveAspectRatio="xMidYMid slice"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M-99 461.107L608.107-246l707.103 707.107-707.103 707.103L-99 461.107z"
                                fill="url(#linear1)"
                                fill-opacity=".1"
                            />
                            <defs>
                                <linearGradient
                                    id="linear1"
                                    x1="254.553"
                                    y1="107.554"
                                    x2="961.66"
                                    y2="814.66"
                                    gradientUnits="userSpaceOnUse"
                                >
                                    <stop stop-color="#fff"></stop>
                                    <stop
                                        offset="1"
                                        stop-color="#fff"
                                        stop-opacity="0"
                                    ></stop>
                                </linearGradient>
                            </defs>
                        </svg>
                    </div>
                    <div
                        class="hidden absolute top-0 right-0 bottom-0 w-1/2 pointer-events-none sm:block lg:hidden"
                        aria-hidden="true"
                    >
                        <svg
                            class="absolute inset-0 w-full h-full"
                            width="359"
                            height="339"
                            viewBox="0 0 359 339"
                            fill="none"
                            preserveAspectRatio="xMidYMid slice"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M-161 382.107L546.107-325l707.103 707.107-707.103 707.103L-161 382.107z"
                                fill="url(#linear2)"
                                fill-opacity=".1"
                            />
                            <defs>
                                <linearGradient
                                    id="linear2"
                                    x1="192.553"
                                    y1="28.553"
                                    x2="899.66"
                                    y2="735.66"
                                    gradientUnits="userSpaceOnUse"
                                >
                                    <stop stop-color="#fff"></stop>
                                    <stop
                                        offset="1"
                                        stop-color="#fff"
                                        stop-opacity="0"
                                    ></stop>
                                </linearGradient>
                            </defs>
                        </svg>
                    </div>
                    <div
                        class="hidden absolute top-0 right-0 bottom-0 w-1/2 pointer-events-none lg:block"
                        aria-hidden="true"
                    >
                        <svg
                            class="absolute inset-0 w-full h-full"
                            width="160"
                            height="678"
                            viewBox="0 0 160 678"
                            fill="none"
                            preserveAspectRatio="xMidYMid slice"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M-161 679.107L546.107-28l707.103 707.107-707.103 707.103L-161 679.107z"
                                fill="url(#linear3)"
                                fill-opacity=".1"
                            />
                            <defs>
                                <linearGradient
                                    id="linear3"
                                    x1="192.553"
                                    y1="325.553"
                                    x2="899.66"
                                    y2="1032.66"
                                    gradientUnits="userSpaceOnUse"
                                >
                                    <stop stop-color="#fff"></stop>
                                    <stop
                                        offset="1"
                                        stop-color="#fff"
                                        stop-opacity="0"
                                    ></stop>
                                </linearGradient>
                            </defs>
                        </svg>
                    </div>
                    <h3 class="text-lg font-medium text-white">
                        Contact Information
                    </h3>
                    <p class="mt-6 text-base text-blue-50 max-w-3xl">
                        If you have any questions, feel free to contact us
                        below. And for more contact options, visit our
                        <nuxt-link to="/contact" class="underline font-medium"
                            >contact</nuxt-link
                        >
                        page.
                    </p>
                    <dl class="mt-8 space-y-6">
                        <dt><span class="sr-only">Phone number</span></dt>
                        <dd class="flex text-base text-blue-50">
                            <!-- Heroicon name: outline/phone -->
                            <svg
                                class="flex-shrink-0 w-6 h-6 text-blue-200"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                aria-hidden="true"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                />
                            </svg>
                            <a
                                :href="`tel:${$store.getters.ContactNumber}`"
                                class="ml-3"
                                >{{ $store.getters.ContactNumberPretty }}</a
                            >
                        </dd>
                        <dt><span class="sr-only">Email</span></dt>
                        <dd class="flex text-base text-blue-50">
                            <!-- Heroicon name: outline/mail -->
                            <svg
                                class="flex-shrink-0 w-6 h-6 text-blue-200"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                aria-hidden="true"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                />
                            </svg>
                            <a
                                :href="`mailto:${$store.getters.ContactEmail}`"
                                class="ml-3"
                                >{{ $store.getters.ContactEmail }}</a
                            >
                        </dd>
                    </dl>
                </div>

                <!-- Contact form -->
                <div class="py-10 px-6 sm:px-10 lg:col-span-2 xl:p-12">
                    <h3 class="text-lg font-medium text-gray-900">
                        Appointment information
                    </h3>
                    <ValidationObserver ref="form" v-slot="{ passes }">
                        <form
                            class="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8"
                            @submit.prevent="passes(onSubmit)"
                        >
                            <div>
                                <ValidationProvider
                                    v-slot="{ errors }"
                                    vid="first_name"
                                    name="First name"
                                    rules="required"
                                >
                                    <label
                                        for="first_name"
                                        class="block text-sm font-medium text-gray-900"
                                        >First name</label
                                    >
                                    <div class="mt-1">
                                        <input
                                            id="first_name"
                                            v-model="form.first_name"
                                            type="text"
                                            name="first_name"
                                            class="py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md"
                                        />
                                        <span class="errors">{{
                                            errors[0]
                                        }}</span>
                                    </div>
                                </ValidationProvider>
                            </div>
                            <div>
                                <ValidationProvider
                                    v-slot="{ errors }"
                                    vid="last_name"
                                    name="Last name"
                                    rules="required"
                                >
                                    <label
                                        for="last_name"
                                        class="block text-sm font-medium text-gray-900"
                                        >Last name</label
                                    >
                                    <div class="mt-1">
                                        <input
                                            id="last_name"
                                            v-model="form.last_name"
                                            type="text"
                                            name="last_name"
                                            class="py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md"
                                        />
                                        <span class="errors">{{
                                            errors[0]
                                        }}</span>
                                    </div>
                                </ValidationProvider>
                            </div>
                            <div>
                                <ValidationProvider
                                    v-slot="{ errors }"
                                    vid="email"
                                    name="Email"
                                    rules="required|email"
                                >
                                    <label
                                        for="email"
                                        class="block text-sm font-medium text-gray-900"
                                        >Email</label
                                    >
                                    <div class="mt-1">
                                        <input
                                            id="email"
                                            v-model="form.email"
                                            name="email"
                                            type="email"
                                            autocomplete="email"
                                            class="py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md"
                                        />
                                        <span class="errors">{{
                                            errors[0]
                                        }}</span>
                                    </div>
                                </ValidationProvider>
                            </div>
                            <div>
                                <ValidationProvider
                                    v-slot="{ errors }"
                                    vid="phone"
                                    name="Phone"
                                    rules="required"
                                >
                                    <label
                                        for="phone"
                                        class="block text-sm font-medium text-gray-900"
                                        >Phone</label
                                    >
                                    <div class="mt-1">
                                        <input
                                            id="phone"
                                            v-model="form.phone"
                                            v-mask="'(###) ###-####'"
                                            type="text"
                                            name="phone"
                                            autocomplete="tel"
                                            class="py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md"
                                        />
                                        <span class="errors">{{
                                            errors[0]
                                        }}</span>
                                    </div>
                                </ValidationProvider>
                            </div>
                            <div>
                                <ValidationProvider
                                    v-slot="{ errors }"
                                    vid="date"
                                    name="Date"
                                    rules="required"
                                >
                                    <label
                                        for="date"
                                        class="block text-sm font-medium text-gray-900"
                                        >Date</label
                                    >
                                    <div class="mt-1">
                                        <input
                                            id="date"
                                            v-model="form.date"
                                            name="date"
                                            type="date"
                                            :min="minDate"
                                            class="py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md"
                                        />
                                        <span class="errors">{{
                                            errors[0]
                                        }}</span>
                                    </div>
                                </ValidationProvider>
                            </div>
                            <div>
                                <ValidationProvider
                                    v-slot="{ errors }"
                                    vid="time"
                                    name="Time"
                                    rules="required"
                                >
                                    <label
                                        for="time"
                                        class="block text-sm font-medium text-gray-900"
                                        >Time</label
                                    >
                                    <div class="mt-1">
                                        <input
                                            id="time"
                                            v-model="form.time"
                                            name="time"
                                            type="time"
                                            class="py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md"
                                        />
                                        <span class="errors">{{
                                            errors[0]
                                        }}</span>
                                    </div>
                                </ValidationProvider>
                            </div>
                            <div class="sm:col-span-2">
                                <ValidationProvider
                                    v-slot="{ errors }"
                                    vid="vehicle"
                                    name="Vehicle"
                                    rules="required"
                                >
                                    <label
                                        for="vehicle"
                                        class="block text-sm font-medium text-gray-900"
                                        >Vehicle</label
                                    >
                                    <div class="mt-1">
                                        <input
                                            id="vehicle"
                                            v-model="form.vehicle"
                                            type="text"
                                            name="vehicle"
                                            class="py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md"
                                        />
                                        <span class="errors">{{
                                            errors[0]
                                        }}</span>
                                    </div>
                                </ValidationProvider>
                            </div>
                            <div class="sm:col-span-2">
                                <div class="flex justify-between">
                                    <label
                                        for="message"
                                        class="block text-sm font-medium text-gray-900"
                                        >Message</label
                                    >
                                    <span
                                        id="message-optional"
                                        class="text-sm text-gray-500"
                                        >Optional</span
                                    >
                                </div>
                                <div class="mt-1">
                                    <textarea
                                        id="message"
                                        v-model="form.message"
                                        name="message"
                                        rows="4"
                                        class="py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-blue-500 focus:border-blue-500 border border-gray-300 rounded-md"
                                        aria-describedby="message-optional"
                                    ></textarea>
                                </div>
                            </div>

                            <transition name="fade" mode="out-in">
                                <div
                                    v-if="submittedSuccessfully"
                                    class="sm:col-span-2 rounded-md bg-green-50 p-4"
                                >
                                    <div class="flex">
                                        <div class="flex-shrink-0">
                                            <IconCheckCircle
                                                class="h-5 w-5 text-green-400"
                                            />
                                        </div>
                                        <div class="ml-3">
                                            <h3
                                                class="text-sm font-medium text-green-800"
                                            >
                                                Form submitted
                                            </h3>
                                            <div
                                                class="mt-2 text-sm text-green-700"
                                            >
                                                <p>
                                                    Your contact form has been
                                                    submitted and we will reach
                                                    out to you as soon as
                                                    possible.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </transition>

                            <div class="sm:col-span-2 sm:flex sm:justify-end">
                                <button
                                    type="submit"
                                    class="mt-2 button flex items-center justify-center px-4 py-2 border border-transparent text-base rounded-sm shadow-sm text-white bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 focus:ring-offset-gray-900 transition ease-in duration-300"
                                >
                                    Submit
                                </button>
                            </div>
                        </form>
                    </ValidationObserver>
                </div>
            </div>
        </div>

        <ConfirmModal
            type="alert"
            :open="modalIsOpen"
            message="The Lift Shop is not open on Sundays. Please select another day."
            @close="modalIsOpen = false"
            @confirmed="modalIsOpen = false"
        />
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import { ValidationProvider, ValidationObserver } from 'vee-validate'
import IconCheckCircle from '@/assets/svg/icons/check-circle.svg?inline'
import ConfirmModal from '@/components/Modal/ConfirmModal'

export default {
    components: {
        ValidationProvider,
        ValidationObserver,
        IconCheckCircle,
        ConfirmModal,
    },
    data() {
        return {
            form: {
                first_name: '',
                last_name: '',
                email: '',
                phone: '',
                message: '',
                vehicle: '',
                date: '',
                time: '',
            },
            submittedSuccessfully: false,
            leadId: undefined,
            minDate: this.$dayjs().add(1, 'day').format('YYYY-MM-DD'),
            modalIsOpen: false,
            isSubmitting: false,
        }
    },
    computed: {
        ...mapState('build', ['buildData']),
        date() {
            return this.form.date
        },
    },
    watch: {
        date(val) {
            if (new Date(val).getUTCDay() === 0) {
                this.modalIsOpen = true
                this.form.date = ''
            }
        },
    },
    created() {
        if (this.buildData) {
            this.leadId = this.buildData.build.id
            this.resetState()
        }
    },
    methods: {
        ...mapActions('build', ['resetState']),
        async onSubmit() {
            this.isSubmitting = true
            await this.$axios.$get('/api/sanctum/csrf-cookie')

            this.$axios
                .post('/p/v1/appointments', {
                    first_name: this.form.first_name,
                    last_name: this.form.last_name,
                    email: this.form.email,
                    phone: this.form.phone,
                    vehicle: this.form.vehicle,
                    comments: this.form.message,
                    ip_address: this.$store.state.ip,
                    scheduled_for: `${this.$dayjs(this.form.date).format(
                        'YYYY-MM-DD'
                    )} ${this.form.time}:00`,
                    status: 'pending',
                    referral_lead_id: this.leadId,
                })
                .then(() => {
                    this.isSubmitting = false
                    this.submittedSuccessfully = true

                    setTimeout(() => {
                        this.submittedSuccessfully = false
                        this.resetForm()
                        this.$refs.form.reset()
                    }, 3500)

                    window._pxam.push({
                        type: 'event',
                        eventType: 'submit',
                        eventSource: 'lead',
                    })
                })
                .catch((err) => {
                    this.isSubmitting = false
                    if (err.response.status === 422) {
                        this.$refs.form.setErrors(err.response.data.errors)
                    } else {
                        alert(
                            'An application error has occured, please try submitting again.'
                        )
                    }
                })
        },
        resetForm() {
            this.form = {
                first_name: '',
                last_name: '',
                email: '',
                phone: '',
                message: '',
                vehicle: '',
                date: '',
                time: '',
            }
        },
    },
}
</script>
