<template>
    <div
        :class="[
            index > 0 ? 'border-t-0' : null,
            'border border-gray-200 overflow-hidden rounded-t-md lg:border-0',
        ]"
    >
        <div class="flex items-center justify-between">
            <div>
                <!-- Completed Step -->
                <nuxt-link :to="`/store/${option.field}`" class="group">
                    <span
                        class="absolute top-0 left-0 w-1 h-full lg:w-full lg:h-1 lg:bottom-0 lg:top-auto"
                        :class="[
                            currentIndex === index
                                ? 'bg-blue-600'
                                : 'bg-transparent group-hover:bg-gray-200',
                        ]"
                        aria-hidden="true"
                    ></span>

                    <span
                        class="px-6 py-5 flex items-start text-sm font-medium"
                    >
                        <span class="flex-shrink-0">
                            <span
                                class="w-10 h-10 flex items-center justify-center bg-blue-600 rounded-full"
                            >
                                <IconCheck class="w-6 h-6 text-white" />
                            </span>
                        </span>
                        <span class="mt-0.5 ml-4 min-w-0 flex flex-col">
                            <span
                                class="title text-xs font-semibold tracking-wide uppercase"
                                >{{ option.text }}</span
                            >
                            <span class="text-sm font-medium text-gray-500">{{
                                completedText
                            }}</span>
                        </span>
                    </span>
                </nuxt-link>
            </div>
            <div>
                <nuxt-link
                    v-if="index === currentIndex"
                    :to="nextOrCompleteLink"
                    class="mr-6 float-right inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                    {{ isLastStep ? 'COMPLETE' : 'NEXT' }}
                </nuxt-link>
            </div>
        </div>

        <Separator v-if="index && index > 0" />
    </div>
</template>

<script>
import { mapState } from 'vuex'
import IconCheck from '@/assets/svg/icons/check.svg?inline'
import Separator from '@/components/Store/Steps/Separator'

export default {
    components: {
        IconCheck,
        Separator,
    },
    props: {
        option: {
            type: Object,
            default: () => {
                return {}
            },
        },
        index: {
            type: Number,
            default: null,
        },
        availableOptions: {
            type: Array,
            default: () => {
                return []
            },
        },
        currentIndex: {
            type: Number,
            default: null,
        },
    },
    computed: {
        ...mapState('build', ['completedOptions']),
        completedText() {
            const text = Array.isArray(this.completedOptions[this.option.field])
                ? this.completedOptions[this.option.field].join(', ')
                : this.completedOptions[this.option.field]

            return text || `Choose Your ${this.option.text}`
        },
        isLastStep() {
            return this.index === this.availableOptions.length - 1
        },
        nextOrCompleteLink() {
            return this.isLastStep
                ? '/build/complete'
                : `/store/${this.availableOptions[this.index + 1].field}`
        },
    },
}
</script>
