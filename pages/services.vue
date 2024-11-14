<template>
    <main>
        <ServiceHero />
        <ServiceFeature />
        <ServiceList />
        <!-- <ServiceMetrics /> -->
        <ServiceCallToAction />
    </main>
</template>

<script>
import ServiceHero from '@/components/Services/ServiceHero'
import ServiceFeature from '@/components/Services/ServiceFeature'
import ServiceList from '@/components/Services/ServiceList'
// import ServiceMetrics from '@/components/Services/ServiceMetrics'
import ServiceCallToAction from '@/components/Services/ServiceCallToAction'

export default {
    components: {
        ServiceHero,
        ServiceFeature,
        ServiceList,
        // ServiceMetrics,
        ServiceCallToAction,
    },
    head: {
        title: 'Services',
        meta: [
            {
                hid: 'description',
                name: 'description',
                content:
                    'View services provided by The Lift Shop. Lift kit installation, off road accessories, custom wheels, leveling kits, and more!',
            },
        ],
    },
}
</script>
