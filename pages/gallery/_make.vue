<template>
    <div class="bg-gray-800 flex overflow-hidden">
        <main class="flex-1 overflow-y-auto">
            <div class="pt-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1 class="flex-1 text-2xl font-bold text-white">
                    {{ story.name }} Gallery ({{ story.content.images.length }})
                </h1>

                <client-only>
                    <section class="my-4 sm:my-10">
                        <flickity
                            ref="flickity"
                            class="h-full"
                            :options="flickityOptions"
                            @init="showFlickity = true"
                        >
                            <div
                                v-for="(image, index) in story.content.images"
                                :key="index"
                                class="carousel-cell my-5"
                            >
                                <div v-show="showFlickity">
                                    <img
                                        class="mt-0 sm:mt-5 mx-auto"
                                        style="max-height: 498px"
                                        :src="image.filename"
                                        :alt="image.name"
                                    />

                                    <p class="mt-4 text-center text-gray-50">
                                        {{ image.name }}
                                    </p>
                                </div>
                            </div>
                        </flickity>
                    </section>
                </client-only>
            </div>
        </main>
    </div>
</template>

<script>
import { StoryblokMixin } from '@/mixins/storyblok'
import { createBlokPage } from '@/helpers/storyblok'

export default {
    mixins: [StoryblokMixin],
    asyncData(context) {
        return createBlokPage(context, {
            endpoint: `/gallery/${context.params.make}`,
        })
    },
    data() {
        return {
            showFlickity: false,
            flickityOptions: {
                prevNextButtons: true,
                pageDots: false,
            },
            currentImageIndex: 0,
        }
    },
    computed: {
        currentImage() {
            return this.story.content && this.story.content.images
                ? this.story.content.images[this.currentImageIndex]
                : null
        },
    },
}
</script>

<style scoped>
.carousel-cell {
    @apply w-full h-48 mr-2 text-gray-300;
}
@screen md {
    .carousel-cell {
        height: 600px;
    }
}
.carousel-cell.is-selected {
    @apply text-gray-900;
}
</style>
