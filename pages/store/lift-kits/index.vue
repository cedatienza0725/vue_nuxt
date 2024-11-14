<template>
    <store-layout>
        <div class="flex justify-between">
            <div class="space-x-2">
                <h1
                    class="uppercase text-3xl font-extrabold tracking-tight text-gray-900 inline-block"
                >
                    Lift Kits
                </h1>
            </div>
        </div>
        <div class="my-6">
            <LiftKitSelection />
        </div>
    </store-layout>
</template>

<script>
import StoreLayout from '@/components/Store/StoreLayout'
import LiftKitSelection from '@/components/Store/LiftKit/LiftKitSelection'

export default {
    components: {
        StoreLayout,
        LiftKitSelection,
    },
    head() {
        return {
            title: 'Lift Kits',
            meta: [
                {
                    hid: 'description',
                    name: 'description',
                    content: 'Select your lift kit.',
                },
            ],
        }
    },
}
</script>
