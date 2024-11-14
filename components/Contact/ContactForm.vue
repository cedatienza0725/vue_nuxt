<template>
    <div class="bg-white py-16 px-4 overflow-hidden sm:px-6 lg:px-8 lg:py-24">
        <div class="relative max-w-xl mx-auto">
            <svg
                class="absolute left-full transform translate-x-1/2"
                width="404"
                height="404"
                fill="none"
                viewBox="0 0 404 404"
                aria-hidden="true"
            >
                <defs>
                    <pattern
                        id="85737c0e-0916-41d7-917f-596dc7edfa27"
                        x="0"
                        y="0"
                        width="20"
                        height="20"
                        patternUnits="userSpaceOnUse"
                    >
                        <rect
                            x="0"
                            y="0"
                            width="4"
                            height="4"
                            class="text-gray-200"
                            fill="currentColor"
                        />
                    </pattern>
                </defs>
                <rect
                    width="404"
                    height="404"
                    fill="url(#85737c0e-0916-41d7-917f-596dc7edfa27)"
                />
            </svg>
            <svg
                class="absolute right-full bottom-0 transform -translate-x-1/2"
                width="404"
                height="404"
                fill="none"
                viewBox="0 0 404 404"
                aria-hidden="true"
            >
                <defs>
                    <pattern
                        id="85737c0e-0916-41d7-917f-596dc7edfa27"
                        x="0"
                        y="0"
                        width="20"
                        height="20"
                        patternUnits="userSpaceOnUse"
                    >
                        <rect
                            x="0"
                            y="0"
                            width="4"
                            height="4"
                            class="text-gray-200"
                            fill="currentColor"
                        />
                    </pattern>
                </defs>
                <rect
                    width="404"
                    height="404"
                    fill="url(#85737c0e-0916-41d7-917f-596dc7edfa27)"
                />
            </svg>
            <div class="text-center">
                <h2
                    class="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl"
                >
                    Contact Us
                </h2>
                <p class="mt-4 text-lg leading-6 text-gray-500">
                    We are here to answer your questions.
                </p>
            </div>
            <div class="mt-12">
                <ValidationObserver ref="form" v-slot="{ passes }">
                    <form
                        class="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8"
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
                                    class="block text-sm font-medium text-gray-700"
                                    >First name</label
                                >
                                <div class="mt-1">
                                    <input
                                        id="first_name"
                                        v-model="form.first_name"
                                        type="text"
                                        name="first_name"
                                        class="py-3 px-4 block w-full shadow-sm focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md"
                                    />
                                    <span class="errors">{{ errors[0] }}</span>
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
                                    class="block text-sm font-medium text-gray-700"
                                    >Last name</label
                                >
                                <div class="mt-1">
                                    <input
                                        id="last_name"
                                        v-model="form.last_name"
                                        type="text"
                                        name="last_name"
                                        class="py-3 px-4 block w-full shadow-sm focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md"
                                    />
                                    <span class="errors">{{ errors[0] }}</span>
                                </div>
                            </ValidationProvider>
                        </div>
                        <div class="sm:col-span-2">
                            <ValidationProvider
                                v-slot="{ errors }"
                                vid="email"
                                name="Email"
                                rules="required|email"
                            >
                                <label
                                    for="email"
                                    class="block text-sm font-medium text-gray-700"
                                    >Email</label
                                >
                                <div class="mt-1">
                                    <input
                                        id="email"
                                        v-model="form.email"
                                        name="email"
                                        type="email"
                                        autocomplete="email"
                                        class="py-3 px-4 block w-full shadow-sm focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md"
                                    />
                                    <span class="errors">{{ errors[0] }}</span>
                                </div>
                            </ValidationProvider>
                        </div>
                        <div class="sm:col-span-2">
                            <ValidationProvider
                                v-slot="{ errors }"
                                vid="phone"
                                name="Phone Number"
                            >
                                <label
                                    for="phone"
                                    class="block text-sm font-medium text-gray-700"
                                    >Phone Number</label
                                >
                                <div class="mt-1 relative rounded-md shadow-sm">
                                    <input
                                        id="phone"
                                        v-model="form.phone"
                                        v-mask="'(###) ###-####'"
                                        type="tel"
                                        name="phone"
                                        autocomplete="tel"
                                        class="py-3 px-4 block w-full focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md"
                                    />
                                    <span class="errors">{{ errors[0] }}</span>
                                </div>
                            </ValidationProvider>
                        </div>
                        <div class="sm:col-span-2">
                            <ValidationProvider
                                v-slot="{ errors }"
                                vid="message"
                                name="Message"
                                rules="required"
                            >
                                <label
                                    for="message"
                                    class="block text-sm font-medium text-gray-700"
                                    >Message</label
                                >
                                <div class="mt-1">
                                    <textarea
                                        id="message"
                                        v-model="form.message"
                                        name="message"
                                        rows="4"
                                        class="py-3 px-4 block w-full shadow-sm focus:ring-blue-500 focus:border-blue-500 border border-gray-300 rounded-md"
                                    ></textarea>
                                    <span class="errors">{{ errors[0] }}</span>
                                </div>
                            </ValidationProvider>
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
                                                submitted and we will reach out
                                                to you as soon as possible.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </transition>

                        <div class="sm:col-span-2">
                            <button
                                type="submit"
                                :disabled="isSubmitting"
                                class="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-sm shadow-sm text-base text-white bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 focus:ring-offset-gray-900 transition ease-in duration-300"
                            >
                                Let's talk
                            </button>
                        </div>
                    </form>
                </ValidationObserver>
            </div>
        </div>
    </div>
</template>

<script>
import { ValidationProvider, ValidationObserver } from 'vee-validate'
import IconCheckCircle from '@/assets/svg/icons/check-circle.svg?inline'

export default {
    components: {
        ValidationProvider,
        ValidationObserver,
        IconCheckCircle,
    },
    data() {
        return {
            form: {
                first_name: '',
                last_name: '',
                email: '',
                phone: '',
                message: '',
            },
            submittedSuccessfully: false,
            isSubmitting: false,
        }
    },
    methods: {
        async onSubmit() {
            this.isSubmitting = true
            await this.$axios.$get('/api/sanctum/csrf-cookie')

            this.$axios
                .post('/p/v1/leads', {
                    first_name: this.form.first_name,
                    last_name: this.form.last_name,
                    email: this.form.email,
                    phone: this.form.phone,
                    form_source: 'contact',
                    form_url: this.$route.path,
                    ip_address: this.$store.state.ip,
                    message: this.form.message,
                })
                .then(() => {
                    this.submittedSuccessfully = true

                    setTimeout(() => {
                        this.submittedSuccessfully = false
                        this.isSubmitting = false
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
            }
        },
    },
}
</script>
