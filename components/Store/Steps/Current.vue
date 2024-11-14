<template>
    <div
        :class="[
            index > 0 ? 'border-t-0' : null,
            'border border-gray-200 overflow-hidden lg:border-0',
        ]"
    >
        <!-- Current Step -->
        <nuxt-link :to="`/store/${option.field}`" aria-current="step">
            <span
                class="absolute top-0 left-0 w-1 h-full bg-blue-600 lg:w-full lg:h-1 lg:bottom-0 lg:top-auto"
                aria-hidden="true"
            ></span>
            <span
                class="px-6 py-5 flex items-start text-sm font-medium lg:pl-9"
            >
                <span class="flex-shrink-0">
                    <span
                        class="w-10 h-10 flex items-center justify-center border-2 border-blue-600 rounded-full"
                    >
                        <span class="text-blue-600">{{ index + 1 }}</span>
                    </span>
                </span>
                <span class="mt-0.5 ml-4 min-w-0 flex flex-col">
                    <span
                        class="title text-xs font-semibold text-blue-600 tracking-wide uppercase"
                        >{{ option.text }}</span
                    >
                    <span class="text-sm font-medium text-gray-500"
                        >Choose Your {{ option.text
                        }}<template v-if="option.field === 'wheels'">
                            (up to 5)</template
                        ></span
                    >
                </span>
            </span>
        </nuxt-link>

        <Separator v-if="index && index > 0" />
    </div>
</template>

<script>
import Separator from '@/components/Store/Steps/Separator'

export default {
    components: {
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
}
</script>
