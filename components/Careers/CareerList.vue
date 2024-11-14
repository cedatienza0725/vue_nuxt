<template>
    <div id="positions" class="bg-white border-t border-b border-gray-200">
        <div class="container mx-auto my-12 px-4 sm:px-6 lg:px-8">
            <div class="text-center">
                <span id="openPositions" class="text-4xl font-bold"
                    >Open Positions</span
                >
            </div>
            <div class="bg-gray-50 my-12">
                <ul>
                    <li
                        v-for="career in careers"
                        :key="career.id"
                        class="border-t border-gray-200"
                    >
                        <div
                            class="block hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out"
                        >
                            <div class="px-4 py-4 sm:px-6">
                                <div class="flex items-center justify-between">
                                    <div class="flex">
                                        <span
                                            class="text-base sm:text-lg self-center leading-5 font-bold text-brand-gray"
                                        >
                                            {{ career.name }}
                                        </span>
                                    </div>
                                    <div class="ml-2 flex-shrink-0 flex">
                                        <button
                                            class="button flex items-center justify-center px-4 py-2 border border-transparent text-base rounded-sm shadow-sm text-white bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 focus:ring-offset-gray-900 transition ease-in duration-300"
                                            @click.prevent="
                                                $emit('applyClicked', career.id)
                                            "
                                        >
                                            Apply Now
                                        </button>
                                    </div>
                                </div>

                                <!-- eslint-disable -->
                                <div
                                    v-if="career.content.description"
                                    class="
                                        hidden
                                        sm:block
                                        mt-6
                                        mb-4
                                        leading-6
                                        text-base
                                        tracking-tight
                                        text-gray-500
                                        career-content
                                    "
                                    v-html="
                                        descriptionMarked(
                                            career.content.description
                                        )
                                    "
                                ></div>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import marked from 'marked'

export default {
    props: {
        careers: {
            type: Array,
            default: () => {
                return []
            },
        },
    },
    methods: {
        descriptionMarked(body) {
            return body ? marked(body) : ''
        },
    },
}
</script>

<style scoped>
>>> .career-content h2 {
    @apply mt-6 text-2xl font-extrabold text-gray-900 tracking-tight sm:text-3xl;
}

>>> .career-content ul {
    @apply mt-3 list-disc list-inside space-y-2;
}

>>> .career-content p {
    @apply mt-3;
}
</style>
