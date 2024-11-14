<template>
    <!-- eslint-disable-next-line -->
  <div class="w-full bg-black text-white align-middle py-5" v-show="callout" v-html="callout"></div>
</template>

<script>
export default {
    data() {
        return {
            callout: null,
        }
    },
}
</script>

<style></style>
