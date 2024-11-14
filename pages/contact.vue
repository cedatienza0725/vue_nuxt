<template>
    <div class="bg-white">
        <!-- Header -->
        <div class="relative pb-32 bg-gray-800">
            <div class="absolute inset-0">
                <!-- <nuxt-img
                    class="w-full h-full object-cover"
                    src="/image/hero.jpg"
                    sizes="sm:100vw md:50vw lg:1920px"
                    alt=""
                /> -->
                <img
                    class="w-full h-full object-cover"
                    :src="require('~/assets/image/contact.jpeg')"
                    sizes="sm:100vw md:50vw lg:1920px"
                    alt=""
                />
                <div
                    class="absolute inset-0 bg-gray-500 mix-blend-multiply"
                    aria-hidden="true"
                ></div>
            </div>
            <div
                class="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8"
            >
                <div
                    class="inline-block sm:text-3xl bg-gradient-to-r from-blue-600 to-blue-700 p-2 sm:p-4 mb-2 sm:mb-4"
                >
                    <h1
                        class="text-4xl font-extrabold tracking-tight text-white md:text-5xl lg:text-6xl uppercase"
                    >
                        Contact Us
                    </h1>
                </div>
                <p class="mt-6 max-w-3xl text-xl text-gray-300">
                    Reach out to us before, during, and after your installation.
                </p>
            </div>
        </div>

        <!-- Overlapping cards -->
        <section
            class="-mt-32 max-w-7xl mx-auto relative z-10 pb-5 px-4 sm:px-6 lg:px-8"
            aria-labelledby="contact-heading"
        >
            <h2 id="contact-heading" class="sr-only">
                {{ $store.getters.ContactNumberPretty }}
            </h2>
            <div
                class="grid grid-cols-1 gap-y-20 lg:grid-cols-3 lg:gap-y-0 lg:gap-x-8"
            >
                <div class="flex flex-col bg-white rounded-2xl shadow-xl">
                    <div class="flex-1 relative pt-16 px-6 pb-8 md:px-8">
                        <div
                            class="absolute top-0 p-5 inline-block bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 rounded-sm shadow-lg transform -translate-y-1/2"
                        >
                            <IconPhone class="h-6 w-6 text-white" />
                        </div>
                        <h3 class="text-xl font-medium text-gray-900">
                            Give Us a Call
                        </h3>
                        <p class="mt-4 text-base text-gray-500">
                            Call us to start a dialogue and answer any questions
                            or concerns you might have.
                        </p>
                    </div>
                    <div
                        class="p-6 bg-gray-50 rounded-bl-2xl rounded-br-2xl md:px-8"
                    >
                        <a
                            :href="`tel:${$store.getters.ContactNumber}`"
                            class="text-base font-medium text-blue-700 hover:text-blue-600"
                            >{{ $store.getters.ContactNumberPretty
                            }}<span aria-hidden="true"> &rarr;</span></a
                        >
                    </div>
                </div>

                <div class="flex flex-col bg-white rounded-2xl shadow-xl">
                    <div class="flex-1 relative pt-16 px-6 pb-8 md:px-8">
                        <div
                            class="absolute top-0 p-5 inline-block bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 rounded-sm shadow-lg transform -translate-y-1/2"
                        >
                            <IconSupport class="h-6 w-6 text-white" />
                        </div>
                        <h3 class="text-xl font-medium text-gray-900">
                            Shoot Us a Text
                        </h3>
                        <p class="mt-4 text-base text-gray-500">
                            Don't have time to make a phone call? Shoot us a
                            text and we'll get back to you as soon as possible.
                        </p>
                    </div>
                    <div
                        class="p-6 bg-gray-50 rounded-bl-2xl rounded-br-2xl md:px-8"
                    >
                        <a
                            :href="`tel:${$store.getters.ContactNumber}`"
                            class="text-base font-medium text-blue-700 hover:text-blue-600"
                            >Text us<span aria-hidden="true"> &rarr;</span></a
                        >
                    </div>
                </div>

                <div class="flex flex-col bg-white rounded-2xl shadow-xl">
                    <div class="flex-1 relative pt-16 px-6 pb-8 md:px-8">
                        <div
                            class="absolute top-0 p-5 inline-block bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 rounded-sm shadow-lg transform -translate-y-1/2"
                        >
                            <IconNewspaper class="h-6 w-6 text-white" />
                        </div>
                        <h3 class="text-xl font-medium text-gray-900">
                            Have a Chat
                        </h3>
                        <p class="mt-4 text-base text-gray-500">
                            Even quicker, start a chat to speak to someone
                            immediately.
                        </p>
                    </div>
                    <div
                        class="p-6 bg-gray-50 rounded-bl-2xl rounded-br-2xl md:px-8"
                    >
                        <a
                            class="text-base font-medium text-blue-700 hover:text-blue-600 cursor-pointer"
                            @click="openCrisp"
                            >Start chat<span aria-hidden="true">
                                &rarr;</span
                            ></a
                        >
                    </div>
                </div>
            </div>
        </section>

        <ContactForm />

        <Location />
    </div>
</template>

<script>
import Location from '@/components/Contact/Location'
import ContactForm from '@/components/Contact/ContactForm'
import IconPhone from '@/assets/svg/icons/phone-outline.svg?inline'
import IconSupport from '@/assets/svg/icons/support-outline.svg?inline'
import IconNewspaper from '@/assets/svg/icons/newspaper-outline.svg?inline'

export default {
    components: {
        Location,
        ContactForm,
        IconPhone,
        IconSupport,
        IconNewspaper,
    },
    head() {
        return {
            title: 'Contact',
            meta: [
                {
                    hid: 'description',
                    name: 'description',
                    content:
                        'Contact The Lift Ship with any questions or concerns.',
                },
            ],
        }
    },
    methods: {
        openCrisp() {
            if (window.$crisp && window.$crisp.is('chat:closed')) {
                window.$crisp.push(['do', 'chat:open'])
            }
        },
    },
}
</script>
