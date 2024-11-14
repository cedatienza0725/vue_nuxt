<template>
    <div class="p-4" :class="wrapperClases">
        <div class="flex">
            <div class="flex-shrink-0">
                <component
                    :is="curType.icon"
                    class="h-5 w-5"
                    :class="curType.iconClass"
                />
            </div>
            <div class="ml-3">
                <h3
                    v-if="title"
                    class="text-sm leading-5 font-medium mb-1"
                    :class="curType.titleText"
                >
                    {{ title }}
                </h3>
                <div
                    v-if="curType === 'error' && errors.length > 0"
                    class="text-sm leading"
                    :class="curType.text"
                >
                    <ul class="list-disc pl-5">
                        <li
                            v-for="(error, index) in errors"
                            :key="index"
                            :class="{ 'mt-1': index !== 0 }"
                        >
                            {{ error }}
                        </li>
                    </ul>
                </div>
                <div v-else class="text-sm leading" :class="curType.text">
                    <p>
                        {{ text }}
                    </p>
                </div>
            </div>
            <div v-if="dismiss" class="ml-auto pl-3">
                <div class="-mx-1.5 -my-1.5">
                    <button
                        :class="curType.btnClasses"
                        aria-label="Dismiss"
                        @click.prevent="$emit('close')"
                    >
                        <icon-x class="h-5 w-5" />
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import IconCheckCircle from '@/assets/svg/icons/check-circle.svg?inline'
import IconExclamation from '@/assets/svg/icons/exclamation.svg?inline'
import IconXCircle from '@/assets/svg/icons/x-circle.svg?inline'
import IconInformationCircle from '@/assets/svg/icons/information-circle.svg?inline'
import IconX from '@/assets/svg/icons/x.svg?inline'

export default {
    components: {
        IconCheckCircle,
        IconExclamation,
        IconXCircle,
        IconInformationCircle,
        IconX,
    },
    props: {
        type: {
            type: String,
            required: true,
        },
        title: {
            type: String,
            default: null,
        },
        text: {
            type: String,
            default: null,
        },
        dismiss: {
            type: Boolean,
            default: true,
        },
        errors: {
            type: Array,
            default() {
                return []
            },
        },
        accent: {
            type: Boolean,
            default: false,
        },
    },
    data() {
        return {
            typeSchema: {
                success: {
                    bg: 'bg-green-50',
                    text: 'text-green-700',
                    titleText: 'text-green-800',
                    btnClasses:
                        'inline-flex rounded-md p-1.5 text-green-500 hover:bg-green-100 focus:outline-none focus:bg-green-100 transition ease-in-out duration-150',
                    iconClass: 'text-green-400',
                    icon: 'icon-check-circle',
                    color: 'green',
                },
                error: {
                    bg: 'bg-red-50',
                    text: 'text-red-700',
                    titleText: 'text-red-800',
                    btnClasses:
                        'inline-flex rounded-md p-1.5 text-red-500 hover:bg-red-100 focus:outline-none focus:bg-red-100 transition ease-in-out duration-150',
                    iconClass: 'text-red-400',
                    icon: 'icon-x-circle',
                    color: 'red',
                },
                warning: {
                    bg: 'bg-yellow-50',
                    text: 'text-yellow-700',
                    titleText: 'text-yellow-800',
                    btnClasses:
                        'inline-flex rounded-md p-1.5 text-yellow-500 hover:bg-yellow-100 focus:outline-none focus:bg-yellow-100 transition ease-in-out duration-150',
                    iconClass: 'text-yellow-400',
                    icon: 'icon-exclamation',
                    color: 'yellow',
                },
                info: {
                    bg: 'bg-blue-50',
                    text: 'text-blue-700',
                    titleText: 'text-blue-800',
                    btnClasses:
                        'inline-flex rounded-md p-1.5 text-blue-500 hover:bg-blue-100 focus:outline-none focus:bg-blue-100 transition ease-in-out duration-150',
                    iconClass: 'text-blue-400',
                    icon: 'icon-information-circle',
                    color: 'blue',
                },
            },
            fallBack: 'info',
        }
    },
    computed: {
        curType() {
            return this.typeSchema[this.type]
                ? this.typeSchema[this.type]
                : this.typeSchema[this.fallBack]
        },
        wrapperClases() {
            let classes = this.accent
                ? `bg-${this.curType.color}-50 border-l-4 border-${this.curType.color}-400`
                : 'rounded-md'

            classes += ` ${this.curType.bg}`

            return classes
        },
    },
}
</script>

<style></style>
