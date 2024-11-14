<template>
    <div :class="colorClasses.bg">
        <div
            :class="[
                blok.justify
                    ? 'lg:flex lg:items-center lg:justify-between'
                    : 'text-center',

                'max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8',
            ]"
        >
            <div>
                <h2
                    :class="[
                        colorClasses.text,
                        'text-3xl font-extrabold tracking-tight sm:text-4xl',
                    ]"
                >
                    <span class="block">{{ blok.title }}</span>
                    <span
                        v-if="blok.title_accent"
                        :class="[colorClasses.accent, 'block']"
                        >{{ blok.title_accent }}</span
                    >
                </h2>
                <p :class="[colorClasses.subTitle, 'mt-4 text-lg']">
                    {{ blok.sub_title }}
                </p>
            </div>
            <div
                :class="[
                    blok.justify
                        ? 'lg:mt-0 lg:flex-shrink-0'
                        : 'justify-center',
                    'mt-8 flex space-x-3',
                ]"
            >
                <component
                    :is="btn.component"
                    v-for="btn in blok.buttons"
                    :key="btn._uid"
                    :blok="btn"
                />
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        blok: {
            type: Object,
            default: () => {
                return {}
            },
        },
    },
    data() {
        return {
            colorSchema: {
                white: {
                    bg: 'white',
                    text: 'text-gray-900',
                    subTitle: 'text-gray-500',
                    accent: 'text-blue-600',
                },
                transparent: {
                    bg: null,
                    text: 'text-gray-900',
                    subTitle: 'text-gray-500',
                    accent: 'text-blue-600',
                },
                branded: {
                    bg: 'bg-blue-700',
                    text: 'text-white',
                    subTitle: 'text-blue-200',
                    accent: 'text-blue-200',
                },
                light: {
                    bg: 'bg-blue-50',
                    text: 'text-gray-900',
                    subTitle: 'text-gray-500',
                    accent: 'text-blue-600',
                },
            },
            fallbackType: 'white',
        }
    },
    computed: {
        type() {
            return this.colorSchema[this.blok.background]
                ? this.blok.background
                : this.fallbackType
        },
        colorClasses() {
            return this.colorSchema[this.type]
        },
    },
}
</script>

<style></style>
