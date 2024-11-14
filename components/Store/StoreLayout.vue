<template>
    <div class="relative min-h-screen flex flex-col">
        <div class="flex-grow w-full lg:flex">
            <!-- Left sidebar & main wrapper -->
            <div class="flex-1 min-w-0 bg-white xl:flex">
                <div class="bg-gray-50 lg:min-w-0 lg:flex-1">
                    <BuildProgress />

                    <div class="h-full py-6 px-4 sm:px-6 lg:px-8">
                        <!-- Start main area-->
                        <slot></slot>
                        <!-- End main area -->
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import BuildProgress from '@/components/Store/BuildProgress'

export default {
    components: {
        BuildProgress,
    },
}
</script>
