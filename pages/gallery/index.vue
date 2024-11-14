<template>
    <div>
        <div class="relative bg-gray-800 overflow-hidden">
            <div
                class="hidden sm:block sm:absolute sm:inset-0"
                aria-hidden="true"
            >
                <svg
                    class="absolute bottom-0 right-0 transform translate-x-1/2 mb-48 text-gray-700 lg:top-0 lg:mt-28 lg:mb-0 xl:transform-none xl:translate-x-0"
                    width="364"
                    height="384"
                    viewBox="0 0 364 384"
                    fill="none"
                >
                    <defs>
                        <pattern
                            id="eab71dd9-9d7a-47bd-8044-256344ee00d0"
                            x="0"
                            y="0"
                            width="20"
                            height="20"
                            patternUnits="userSpaceOnUse"
                        >
                            <rect
                                x="0"
                                y="0"
                                width="4"
                                height="4"
                                fill="currentColor"
                            />
                        </pattern>
                    </defs>
                    <rect
                        width="364"
                        height="384"
                        fill="url(#eab71dd9-9d7a-47bd-8044-256344ee00d0)"
                    />
                </svg>
            </div>

            <div class="relative pt-6 pb-16 sm:pb-24">
                <main class="mt-16 sm:mt-24">
                    <div class="mx-auto max-w-7xl">
                        <div class="lg:grid lg:grid-cols-12 lg:gap-8">
                            <div
                                class="px-4 sm:px-6 sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left lg:flex lg:items-center"
                            >
                                <div>
                                    <h1
                                        class="mt-4 text-4xl tracking-tight font-extrabold text-white sm:mt-5 sm:leading-none lg:mt-6 lg:text-5xl xl:text-6xl"
                                    >
                                        <span class="md:block"
                                            >Showcase Gallery</span
                                        >
                                    </h1>
                                    <p
                                        class="mt-3 text-base text-gray-300 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl"
                                    >
                                        View our showcase gallery.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>

        <div class="container mx-auto my-12 px-4 sm:px-6 lg:px-8">
            <div class="mt-12 mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
                <GalleryItem
                    v-for="(galleryItem, index) in gallery"
                    :key="index"
                    :gallery-item="galleryItem"
                />
            </div>
        </div>
        <div class="w-full">
            <div class="container w-full mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!4v1670263829157!6m8!1m7!1sCAoSLEFGMVFpcFBaQ183ZXpZaUx4RUdKWHA0d25HekJ0M245RW12MldzUTZHNWhx!2m2!1d33.633630394835!2d-112.03038064184!3f201.33!4f0!5f0.7820865974627469"
                    width="100%"
                    height="800"
                    style="border: 0"
                    allowfullscreen=""
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
            <div class="container w-full mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!4v1670263879633!6m8!1m7!1sCAoSLEFGMVFpcE0wdWQydWtWNHI4aHE2cEJGRzhkYzBzeGpHa2twNGlOY1ViT2hW!2m2!1d33.633631673277!2d-112.03019334719!3f201.33!4f0!5f0.7820865974627469"
                    width="100%"
                    height="800"
                    style="border: 0"
                    allowfullscreen=""
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
            <div class="container w-full mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!4v1670263898847!6m8!1m7!1sCAoSLEFGMVFpcFBSejZRb2VienhpbFA4STYzdHZMWTE5Qmh0VUNJTkVVWmFaQmFz!2m2!1d0!2d0!3f201.33!4f0!5f0.7820865974627469"
                    width="100%"
                    height="800"
                    style="border: 0"
                    allowfullscreen=""
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
        </div>
        <div class="w-full bg-gray-800">
            <div class="container w-3/5 mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <ssr-carousel show-arrows>
                    <div v-for="index in 15" :key="index" :index="index">
                        <img
                            class="w-full h-full object-cover"
                            :src="
                                require(`~/assets/image/slider_${index}.jpeg`)
                            "
                            sizes="sm:100vw md:50vw lg:1920px"
                            alt=""
                        />
                    </div>
                </ssr-carousel>
            </div>
        </div>
    </div>
</template>

<script>
import GalleryItem from '@/components/Gallery/GalleryGridItem'

export default {
    components: {
        GalleryItem,
    },
    data() {
        return {
            gallery: [],
        }
    },
    async fetch() {
        await this.getGallery()
    },
    head() {
        return {
            title: 'Gallery',
            meta: [
                {
                    hid: 'description',
                    name: 'description',
                    content:
                        'View our showcase of lifted trucks and suvs at The Lift Shop.',
                },
            ],
        }
    },
    methods: {
        async getGallery() {
            const version =
                this.$route.query._storyblok ||
                this.$config.environment !== 'development'
                    ? 'production'
                    : 'development'

            const gallery = await this.$storyapi.get('cdn/stories/', {
                starts_with: 'gallery',
                is_startpage: 0,
                sort_by: 'name',
                version,
            })

            this.gallery = gallery.data ? gallery.data.stories : []
        },
    },
}
</script>
