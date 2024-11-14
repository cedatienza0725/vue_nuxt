<template>
    <nuxt-link
        :to="galleryItem.full_slug"
        class="flex flex-col rounded-lg shadow-lg overflow-hidden"
    >
        <div class="flex-shrink-0">
            <img
                class="w-full object-cover"
                :src="firstImage.filename"
                :alt="firstImage.name"
            />
        </div>
        <div class="flex-1 bg-white p-6 flex flex-col justify-between">
            <div class="flex-1">
                <div class="block mt-2">
                    <p class="text-xl font-semibold text-gray-900">
                        {{ galleryItem.name }}
                    </p>
                    <p
                        v-if="firstImage.name"
                        class="mt-3 text-base text-gray-500"
                    >
                        {{ firstImage.name }}
                    </p>
                </div>
                <p class="mt-2 text-sm font-medium text-blue-600">View more</p>
            </div>
        </div>
    </nuxt-link>
</template>

<script>
export default {
    props: {
        galleryItem: {
            type: Object,
            default: () => {
                return {}
            },
        },
    },
    computed: {
        firstImage() {
            return this.galleryItem.content.images
                ? this.galleryItem.content.images[0]
                : {}
        },
    },
}
</script>
