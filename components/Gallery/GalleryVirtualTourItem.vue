<template>
    <div class="w-full h-fit object-cover">
        <iframe
            src="https://www.google.com/maps/@33.6336304,-112.0303806,3a,75y,201.33h,90t/data=!3m7!1e1!3m5!1sAF1QipPZC_7ezYiLxEGJXp4wnGzBt3n9Emv2WsQ6G5hq!2e10!3e12!7i14000!8i7000"
            class="w-full h-fit"
            width="600"
            height="450"
            style="border: 0"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
    </div>
</template>

<script>
export default {
    props: {
        virtualTourItem: {
            type: Object,
            default: () => {
                return {}
            },
        },
    },
    computed: {
        firstImage() {
            return this.virtualTourItem.content.images
                ? this.virtualTourItem.content.images[0]
                : {}
        },
    },
}
</script>
