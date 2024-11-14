<template>
    <transition name="fade">
        <div
            v-if="showing"
            class="z-40 fixed bottom-0 inset-x-0 px-4 pb-6 md:inset-0 md:p-0 md:flex md:items-center md:justify-center"
        >
            <div class="fixed inset-0 transition-opacity">
                <div
                    class="absolute inset-0 bg-gray-500 bg-opacity-75"
                    @click.self="close"
                ></div>
            </div>

            <div
                :class="classWidth"
                class="bg-white rounded-lg px-4 pt-5 pb-4 overflow-hidden shadow-xl transform transition-all md:w-full sm:p-6"
                role="dialog"
                aria-modal="true"
                aria-labelledby="modal-headline"
            >
                <button
                    v-if="showBack"
                    type="button"
                    class="absolute top-0 left-0 inline-flex items-center m-4 text-sm text-gray-500 focus:outline-none"
                    @click="back"
                >
                    <icon-cheveron-left class="mr-1 h-4 w-4" />
                    {{ backText }}
                </button>
                <button
                    aria-label="close"
                    class="absolute top-0 right-0 text-2xl text-gray-500 m-4 focus:outline-none"
                    @click="close"
                >
                    <icon-close class="h-4 w-4" />
                </button>
                <slot />
            </div>
        </div>
    </transition>
</template>

<script>
import IconCheveronLeft from '@/assets/svg/icons/cheveron-left.svg?inline'
import IconClose from '@/assets/svg/icons/close.svg?inline'

export default {
    components: {
        IconCheveronLeft,
        IconClose,
    },
    props: {
        showing: {
            required: true,
            type: Boolean,
        },
        showBack: {
            type: Boolean,
            default: false,
        },
        backText: {
            type: String,
            default: 'Go Back',
        },
        classWidth: {
            type: String,
            default: 'md:max-w-3xl',
        },
    },
    watch: {
        showing(value) {
            if (value) {
                return document
                    .querySelector('body')
                    .classList.add('overflow-hidden')
            }

            document.querySelector('body').classList.remove('overflow-hidden')
        },
    },
    mounted() {
        document.addEventListener('keydown', (e) => {
            if (this.showing && e.keyCode === 27) {
                this.close()
            }
        })
    },
    methods: {
        close() {
            this.$emit('close')
        },
        back() {
            this.$emit('back')
        },
    },
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
    transition: all 0.4s;
}
.fade-enter,
.fade-leave-to {
    opacity: 0;
}
</style>
