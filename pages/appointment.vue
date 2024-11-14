<template>
    <div>
        <main class="overflow-hidden">
            <!-- Header -->
            <div class="bg-gray-100">
                <div class="py-20 lg:py-32">
                    <div
                        class="relative z-10 max-w-7xl mx-auto pl-4 pr-8 sm:px-6 lg:px-8"
                    >
                        <h1
                            class="text-4xl font-extrabold tracking-tight text-warm-gray-900 sm:text-5xl lg:text-6xl"
                        >
                            Schedule appointment
                        </h1>
                        <p class="mt-6 text-xl text-warm-gray-500 max-w-3xl">
                            We are always open to walk-ins to discuss your lift,
                            but you can schedule an appointment to come in and
                            discuss your rig here.
                        </p>
                    </div>
                </div>
            </div>

            <section
                class="relative bg-gray-100"
                aria-labelledby="contactHeading"
            >
                <div
                    class="absolute w-full h-1/2 bg-warm-gray-50"
                    aria-hidden="true"
                ></div>
                <div
                    class="hidden sm:block relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
                >
                    <svg
                        class="absolute z-0 top-0 right-0 transform -translate-y-16 translate-x-1/2 sm:translate-x-1/4 md:-translate-y-24 lg:-translate-y-72"
                        width="404"
                        height="384"
                        fill="none"
                        viewBox="0 0 404 384"
                        aria-hidden="true"
                    >
                        <defs>
                            <pattern
                                id="64e643ad-2176-4f86-b3d7-f2c5da3b6a6d"
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
                                    class="text-warm-gray-200"
                                    fill="currentColor"
                                />
                            </pattern>
                        </defs>
                        <rect
                            width="404"
                            height="384"
                            fill="url(#64e643ad-2176-4f86-b3d7-f2c5da3b6a6d)"
                        />
                    </svg>
                </div>

                <AppointmentForm />
            </section>
        </main>
    </div>
</template>

<script>
import AppointmentForm from '@/components/Appointment/AppointmentForm'

export default {
    components: {
        AppointmentForm,
    },
    head() {
        return {
            title: 'Schedule Appointment',
            meta: [
                {
                    hid: 'description',
                    name: 'description',
                    content: 'Schedule an appointment to visit The Lift Shop.',
                },
            ],
        }
    },
}
</script>
