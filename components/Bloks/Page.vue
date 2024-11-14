<template>
    <div v-editable="blok.component" class="page">
        <!-- eslint-disable-next-line -->
        <component :is="blok.component" v-for="blok in blok.body" :key="blok._uid" :blok="blok"></component>
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
