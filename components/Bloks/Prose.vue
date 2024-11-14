<template>
    <div class="relative py-16 bg-white overflow-hidden">
        <div
            class="hidden lg:block lg:absolute lg:inset-y-0 lg:h-full lg:w-full"
        >
            <div
                class="relative h-full text-lg max-w-prose mx-auto"
                aria-hidden="true"
            >
                <svg
                    class="absolute top-12 left-full transform translate-x-32"
                    width="404"
                    height="384"
                    fill="none"
                    viewBox="0 0 404 384"
                >
                    <defs>
                        <pattern
                            id="74b3fd99-0a6f-4271-bef2-e80eeafdf357"
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
                                class="text-gray-200"
                                fill="currentColor"
                            />
                        </pattern>
                    </defs>
                    <rect
                        width="404"
                        height="384"
                        fill="url(#74b3fd99-0a6f-4271-bef2-e80eeafdf357)"
                    />
                </svg>
                <svg
                    class="absolute top-1/2 right-full transform -translate-y-1/2 -translate-x-32"
                    width="404"
                    height="384"
                    fill="none"
                    viewBox="0 0 404 384"
                >
                    <defs>
                        <pattern
                            id="f210dbf6-a58d-4871-961e-36d5016a0f49"
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
                                class="text-gray-200"
                                fill="currentColor"
                            />
                        </pattern>
                    </defs>
                    <rect
                        width="404"
                        height="384"
                        fill="url(#f210dbf6-a58d-4871-961e-36d5016a0f49)"
                    />
                </svg>
                <svg
                    class="absolute bottom-12 left-full transform translate-x-32"
                    width="404"
                    height="384"
                    fill="none"
                    viewBox="0 0 404 384"
                >
                    <defs>
                        <pattern
                            id="d3eb07ae-5182-43e6-857d-35c643af9034"
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
                                class="text-gray-200"
                                fill="currentColor"
                            />
                        </pattern>
                    </defs>
                    <rect
                        width="404"
                        height="384"
                        fill="url(#d3eb07ae-5182-43e6-857d-35c643af9034)"
                    />
                </svg>
            </div>
        </div>
        <div class="relative px-4 sm:px-6 lg:px-8">
            <div class="text-lg max-w-prose mx-auto prose-container">
                <h1>
                    <span
                        v-if="blok.accent"
                        class="block text-base text-center text-blue-600 font-semibold tracking-wide uppercase"
                        >{{ blok.accent }}</span
                    >
                    <span
                        v-if="blok.title"
                        class="mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl"
                        >{{ blok.title }}</span
                    >
                </h1>
                <p
                    v-if="blok.intro"
                    class="mt-8 text-xl text-gray-500 leading-8"
                >
                    {{ blok.intro }}
                </p>
            </div>

            <div v-if="isPrivacyPolicy" class="mt-6 max-w-prose mx-auto">
                <a
                    href="https://www.iubenda.com/privacy-policy/54033967"
                    class="iubenda-white iubenda-embed iub-body-embed"
                    title="Privacy Policy"
                    >Privacy Policy</a
                >
            </div>
            <!-- eslint-disable -->
            <div
                v-else
                class="mt-6 prose prose-blue prose-lg text-gray-500 mx-auto"
                v-html="bodyMarked"
            ></div>
        </div>
    </div>
</template>

<script>
import marked from 'marked'

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
        bodyMarked() {
            return this.blok.body ? marked(this.blok.body) : ''
        },
        isPrivacyPolicy() {
            return (
                this.$route.path
                    .substring(this.$route.path.lastIndexOf('/') + 1)
                    .toLowerCase() === 'privacy'
            )
        },
    },
    mounted() {
        if (this.isPrivacyPolicy) {
            const s = document.createElement('script')
            const tag = document.getElementsByTagName('script')[0]
            s.src = 'https://cdn.iubenda.com/iubenda.js'
            tag.parentNode.insertBefore(s, tag)
        }
    },
}
</script>

<style scoped>
>>> .prose-container h1 {
    @apply text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl;
}

>>> .prose-container ul {
    @apply mt-3 list-disc list-inside space-y-2;
}

>>> .prose-container p {
    @apply mt-8 text-xl text-gray-500 leading-8;
}
</style>
