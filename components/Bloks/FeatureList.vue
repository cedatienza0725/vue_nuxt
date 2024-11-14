<template>
    <div v-editable="blok" class="py-12 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <dl
                :class="[
                    `md:grid-cols-${blok.columns}`,
                    'space-y-10 md:space-y-0 md:grid md:gap-x-8 md:gap-y-10',
                ]"
            >
                <component
                    :is="item.component"
                    v-for="item in blok.items"
                    :key="item._uid"
                    :blok="item"
                />
            </dl>
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
