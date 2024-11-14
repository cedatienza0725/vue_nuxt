<template>
    <store-layout>
        <div class="flex justify-between">
            <div class="space-x-2">
                <h1
                    class="uppercase text-3xl font-extrabold tracking-tight text-gray-900 inline-block"
                >
                    Tires
                </h1>
            </div>
        </div>
        <div class="my-6">
            <TireSelection />
        </div>
    </store-layout>
</template>

<script>
import StoreLayout from '@/components/Store/StoreLayout'
import TireSelection from '@/components/Store/Tire/TireSelection'

export default {
    components: {
        StoreLayout,
        TireSelection,
    },
    head() {
        return {
            title: 'Tires',
            meta: [
                {
                    hid: 'description',
                    name: 'description',
                    content: 'Select your tires.',
                },
            ],
        }
    },
}
</script>
