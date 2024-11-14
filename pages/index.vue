<template>
    <div>
        <client-only>
            <Hero />
        </client-only>

        <Feature />
        <DarkFeature />
        <RecentBuilds />
    </div>
</template>

<script>
import Hero from '@/components/Home/Hero'
import Feature from '@/components/Home/Feature'
import RecentBuilds from '~/components/Home/RecentBuilds'
import DarkFeature from '~/components/Home/DarkFeature'

export default {
    components: {
        Hero,
        Feature,
        RecentBuilds,
        DarkFeature,
    },
}
</script>

<style></style>
