<template>
    <div v-if="blok.title && blok.url" v-editable="blok">
        <a
            v-if="blok.external"
            :href="blok.url.url"
            :class="classes"
            target="_blank"
            >{{ blok.title }}</a
        >
        <nuxt-link v-else :to="blok.url.url" :class="classes">{{
            blok.title
        }}</nuxt-link>
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
            classSchema: {
                branded:
                    'button flex items-center justify-center px-8 py-3 border border-transparent text-base rounded-sm shadow-sm text-white bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 focus:ring-offset-gray-900 transition ease-in duration-300 md:px-10',
                white: 'w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10',
                gray: 'w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-700 bg-blue-100 hover:bg-blue-200 md:py-4 md:text-lg md:px-10',
                transparent:
                    'flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-500 bg-opacity-60 hover:bg-opacity-70 md:py-4 md:text-lg md:px-10',
                black: 'w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-800 hover:bg-gray-700 md:py-4 md:text-lg md:px-10',
            },
            fallbackType: 'branded',
        }
    },
    computed: {
        type() {
            return this.classSchema[this.blok.type]
                ? this.blok.type
                : this.fallbackType
        },
        classes() {
            let classes = this.classSchema[this.type]

            if (this.blok.classes) {
                classes += ` ${this.blok.classes}`
            }

            return classes
        },
    },
}
</script>

<style scoped>
/* .button {

}
.branded {
    @apply button flex
            items-center
            justify-center
            px-4
            py-2
            border border-transparent
            text-base
            rounded-sm
            shadow-sm
            text-white
            bg-gradient-to-r
            from-blue-600
            to-blue-700
            hover:from-blue-700 hover:to-blue-800
            focus:outline-none
            focus:ring-2
            focus:ring-offset-2
            focus:ring-blue-500
            focus:ring-offset-gray-900
            transition
            ease-in
            duration-300
} */
</style>
