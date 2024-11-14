<template>
    <div>
        <div class="relative bg-gray-800 overflow-hidden">
            <div
                class="hidden sm:block sm:absolute sm:inset-0"
                aria-hidden="true"
            >
                <svg
                    class="absolute bottom-0 right-0 transform translate-x-1/2 mb-48 text-gray-700 lg:top-0 lg:mt-28 lg:mb-0 xl:transform-none xl:translate-x-0"
                    width="364"
                    height="384"
                    viewBox="0 0 364 384"
                    fill="none"
                >
                    <defs>
                        <pattern
                            id="eab71dd9-9d7a-47bd-8044-256344ee00d0"
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
                                fill="currentColor"
                            />
                        </pattern>
                    </defs>
                    <rect
                        width="364"
                        height="384"
                        fill="url(#eab71dd9-9d7a-47bd-8044-256344ee00d0)"
                    />
                </svg>
            </div>

            <div class="relative pt-6 pb-16 sm:pb-24">
                <main class="mt-16 sm:mt-24">
                    <div class="mx-auto max-w-7xl">
                        <div class="lg:grid lg:grid-cols-12 lg:gap-8">
                            <div
                                class="px-4 sm:px-6 sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left lg:flex lg:items-center"
                            >
                                <div>
                                    <a
                                        href="#"
                                        class="inline-flex items-center text-white bg-gray-900 rounded-full p-1 pr-2 sm:text-base lg:text-sm xl:text-base hover:text-gray-200"
                                    >
                                        <span
                                            class="px-3 py-0.5 text-white text-xs font-semibold leading-5 uppercase tracking-wide bg-blue-500 rounded-full"
                                            >We're hiring</span
                                        >
                                        <span
                                            v-scroll-to="'#openPositions'"
                                            class="ml-4 text-sm"
                                            >See open jobs</span
                                        >
                                        <IconCheveronDown
                                            class="ml-2 w-5 h-5 text-gray-500"
                                        />
                                    </a>
                                    <h1
                                        class="mt-4 text-4xl tracking-tight font-extrabold text-white sm:mt-5 sm:leading-none lg:mt-6 lg:text-5xl xl:text-6xl"
                                    >
                                        <span class="md:block"
                                            >Join The Lift Shop Team</span
                                        >
                                    </h1>
                                    <p
                                        class="mt-3 text-base text-gray-300 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl"
                                    >
                                        The Lift Shop is the most advanced
                                        customization shop for off-roading. We
                                        have specialized in the sales and
                                        installation of custom aftermarket
                                        products for cars, trucks, and SUVs
                                        since we first opened our doors in 2001.
                                    </p>
                                </div>
                            </div>
                            <JobApplicationForm
                                :careers="stories"
                                :job-id="currentJobId"
                            />
                        </div>
                    </div>
                </main>
            </div>
        </div>

        <CareerList :careers="stories" @applyClicked="applyClicked" />
    </div>
</template>

<script>
import { StoryblokMixin } from '@/mixins/storyblok'
import { createBlokPage } from '@/helpers/storyblok'
import CareerList from '@/components/Careers/CareerList'
import JobApplicationForm from '@/components/Careers/JobApplicationForm'
import IconCheveronDown from '@/assets/svg/icons/cheveron-down.svg?inline'

export default {
    components: {
        CareerList,
        JobApplicationForm,
        IconCheveronDown,
    },
    mixins: [StoryblokMixin],
    asyncData(context) {
        return createBlokPage(context, {
            endpoint: '/',
            params: {
                starts_with: 'careers',
                is_startpage: 0,
            },
        })
    },
    data() {
        return {
            currentJobId: '',
        }
    },
    head() {
        return {
            title: 'Careers',
            meta: [
                {
                    hid: 'description',
                    name: 'description',
                    content: 'Find a job at The Lift Shop.',
                },
            ],
        }
    },
    methods: {
        applyClicked(jobId) {
            this.$scrollTo('#applicationForm', 1000, {
                easing: 'ease',
                cancelable: false,
            })
            this.currentJobId = jobId
        },
    },
}
</script>
