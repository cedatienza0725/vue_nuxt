<template>
    <div class="relative">
        <dt>
            <IconCheck class="absolute h-5 w-5 text-green-500" />
            <p class="ml-9 text-lg leading-6 font-medium text-gray-900">
                {{ blok.title }}
            </p>
        </dt>
        <dd class="mt-2 ml-9 text-base text-gray-500">
            {{ blok.text }}
        </dd>
    </div>
</template>

<script>
import IconCheck from '@/assets/svg/icons/check.svg?inline'

export default {
    components: {
        IconCheck,
    },
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
