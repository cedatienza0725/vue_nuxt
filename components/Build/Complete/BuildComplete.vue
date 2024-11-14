<template>
    <div class="max-w-7xl mx-auto flex">
        <!-- Content area -->
        <div class="flex-1 flex overflow-hidden">
            <!-- Main content -->
            <div class="flex-1 flex flex-col-reverse md:flex-row items-stretch">
                <Details />
                <Sidebar />
            </div>
        </div>
    </div>
</template>

<script>
import Details from '@/components/Build/Complete/Details'
import Sidebar from '@/components/Build/Complete/Sidebar'

export default {
    components: {
        Details,
        Sidebar,
    },
}
</script>
