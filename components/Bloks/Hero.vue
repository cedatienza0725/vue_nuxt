<template>
    <div v-editable="blok">
        <main
            class="lg:relative overflow-hidden"
            :class="style === 'dark' ? 'bg-gray-800' : ''"
        >
            <div
                class="mx-auto max-w-7xl w-full pt-16 pb-20 text-center lg:py-48 lg:text-left"
            >
                <div class="px-4 lg:w-1/2 sm:px-8 xl:pr-16">
                    <h1
                        class="text-4xl tracking-tight font-extrabold sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl"
                        :class="
                            style === 'dark' ? 'text-white' : 'text-gray-900'
                        "
                    >
                        <span class="block xl:inline">{{ blok.title }}</span>
                        <span
                            v-if="blok.title_emphasis"
                            class="block text-blue-600 xl:inline"
                            >{{ blok.title_emphasis }}</span
                        >
                    </h1>
                    <p
                        v-if="blok.description"
                        class="mt-3 max-w-md mx-auto text-lg sm:text-xl md:mt-5 md:max-w-3xl"
                        :class="
                            blok.style === 'default'
                                ? 'text-gray-500'
                                : 'text-gray-300'
                        "
                    >
                        {{ blok.description }}
                    </p>
                    <div
                        class="mt-10 sm:flex sm:justify-center lg:justify-start sm:space-x-3 space-y-3 sm:space-y-0"
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
            <div
                class="relative w-full h-64 sm:h-72 md:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 lg:h-full"
            >
                <img
                    v-if="blok.type === 'image'"
                    class="absolute inset-0 w-full h-full object-contain"
                    :src="blok.asset.filename"
                    alt=""
                />
                <video-background
                    v-else-if="blok.type === 'video'"
                    :src="blok.asset.filename"
                    class="absolute inset-0 w-full h-full object-fit"
                    overlay="linear-gradient(45deg,#2a4ae430,#fb949e6b"
                />
            </div>
        </main>
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
    computed: {
        style() {
            return this.blok.style || 'default'
        },
    },
}
</script>
