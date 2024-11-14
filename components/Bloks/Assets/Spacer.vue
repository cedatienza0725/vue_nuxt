<template>
    <div :style="{ 'margin-top': blok.margin + 'px' }"></div>
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
