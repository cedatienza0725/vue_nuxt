<template>
    <portal to="modal">
        <modal :showing="isOpen" class-width="md:max-w-xl" @close="close">
            <div class="sm:flex sm:items-start">
                <div
                    class="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full sm:mx-0 sm:h-10 sm:w-10"
                    :class="`bg-${curType.color}-100`"
                >
                    <component
                        :is="curType.icon"
                        class="h-6 w-6"
                        :class="`text-${curType.color}-600`"
                    />
                </div>
                <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                    <h3 class="text-lg leading-6 font-medium text-gray-900">
                        {{ curType.confirmText }}
                    </h3>
                    <div class="mt-2">
                        <p
                            v-if="type === 'delete'"
                            class="text-sm leading-5 text-gray-500"
                        >
                            Are you sure you want to delete
                            <span class="font-bold">{{ resource }}</span
                            >?
                        </p>
                        <p v-else class="text-sm leading-5 text-gray-500">
                            {{
                                message || 'Please confirm you want to proceed.'
                            }}
                        </p>
                    </div>
                </div>
            </div>
            <div v-if="errors.length > 0" class="rounded-md bg-red-50 p-4 mt-6">
                <div class="flex">
                    <div class="flex-shrink-0">
                        <IconXCircle class="h-5 w-5 text-red-400" />
                    </div>
                    <div class="ml-3">
                        <h3
                            v-if="errors.length === 1"
                            class="text-sm font-medium text-red-800"
                        >
                            There was an error with your submission
                        </h3>
                        <h3 v-else class="text-sm font-medium text-red-800">
                            There were {{ errors.length }} errors with your
                            submission
                        </h3>
                        <div class="mt-2 text-sm text-red-700">
                            <ul class="list-disc pl-5 space-y-1">
                                <li
                                    v-for="(error, index) in errors"
                                    :key="index"
                                >
                                    {{
                                        Array.isArray(error) ? error[0] : error
                                    }}
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div class="mt-8 sm:mt-7 sm:flex sm:flex-row-reverse">
                <span
                    class="flex w-full rounded-md shadow-sm sm:ml-3 sm:w-auto"
                >
                    <button
                        type="button"
                        class="button inline-flex items-center justify-center px-4 py-2 border border-transparent text-base rounded-sm shadow-sm text-white bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 focus:ring-offset-gray-900 transition ease-in duration-300 md:px-10"
                        :class="`bg-${curType.color}-600 hover:bg-${curType.color}-500 focus:border-${curType.color}-700`"
                        @click="$emit('confirmed')"
                    >
                        {{ customBtnText || curType.btnText }}
                    </button>
                </span>
                <span
                    v-if="type !== 'alert'"
                    class="mt-3 flex w-full rounded-md shadow-sm sm:mt-0 sm:w-auto"
                >
                    <button
                        type="button"
                        class="inline-flex justify-center w-full rounded-md border border-gray-300 px-4 py-2 bg-white text-base leading-6 font-medium text-gray-700 shadow-sm hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue transition ease-in-out duration-150 sm:text-sm sm:leading-5"
                        @click="close"
                    >
                        Cancel
                    </button>
                </span>
            </div>
        </modal>
    </portal>
</template>

<script>
import Modal from '@/components/Modal'
import IconExclamation from '@/assets/svg/icons/exclamation.svg?inline'
import IconInformationCircle from '@/assets/svg/icons/information-circle.svg?inline'
import IconXCircle from '@/assets/svg/icons/x-circle.svg?inline'

export default {
    components: {
        Modal,
        IconExclamation,
        IconInformationCircle,
        IconXCircle,
    },
    props: {
        type: {
            type: String,
            default: 'delete',
        },
        message: {
            type: String,
            default: null,
        },
        open: {
            type: Boolean,
            default: false,
        },
        resource: {
            type: String,
            default: null,
        },
        errors: {
            type: Array,
            default() {
                return []
            },
        },
        customBtnText: {
            type: String,
            default: null,
        },
    },
    data() {
        return {
            typeSchema: {
                delete: {
                    color: 'red',
                    confirmText: 'Confirm delete',
                    btnText: 'Delete',
                    icon: 'icon-exclamation',
                },
                primary: {
                    color: 'blue',
                    confirmText: 'Confirm',
                    btnText: 'Confirm',
                    icon: 'icon-information-circle',
                },
                alert: {
                    color: 'blue',
                    confirmText: 'Heads Up',
                    btnText: 'Ok',
                    icon: 'icon-information-circle',
                },
            },
            fallBack: 'delete',
        }
    },
    computed: {
        isOpen: {
            get() {
                return this.open
            },
            set(openStatus) {
                return openStatus
            },
        },
        curType() {
            return this.typeSchema[this.type]
                ? this.typeSchema[this.type]
                : this.typeSchema[this.fallBack]
        },
    },
    methods: {
        close(successful) {
            this.isOpen = false
            this.$emit('close', successful)
        },
    },
}
</script>

<style></style>
