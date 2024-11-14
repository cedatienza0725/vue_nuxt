<template>
    <div
        v-editable="blok"
        :class="[blok.bottom_padding ? 'py-12' : 'pt-12', 'bg-white']"
    >
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div>
                <h2
                    v-if="blok.title_accent"
                    class="text-base text-blue-600 font-semibold tracking-wide uppercase lg:text-center"
                >
                    {{ blok.title_accent }}
                </h2>
                <p
                    class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl lg:text-center"
                >
                    {{ blok.title }}
                </p>
                <p
                    class="mt-4 max-w-6xl text-xl text-gray-500 lg:mx-auto"
                    :class="blok.description_align || 'text-left'"
                >
                    {{ blok.description }}
                </p>
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
}
</script>
