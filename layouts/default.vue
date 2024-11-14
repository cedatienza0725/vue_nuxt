<template>
    <div>
        <Callout />
        <GlobalHeader />
        <Breadcrumbs :breadcrumbs="breadcrumbs" />
        <div>
            <Nuxt />
        </div>
        <GlobalFooter />
        <PortalTarget name="modal" multiple />
    </div>
</template>

<script>
import { mapState } from 'vuex'
import Callout from '@/components/Layout/Callout'
import GlobalHeader from '@/components/Layout/GlobalHeader'
import GlobalFooter from '@/components/Layout/GlobalFooter'
import Breadcrumbs from '@/components/Layout/Breadcrumbs'

export default {
    components: {
        Callout,
        GlobalHeader,
        GlobalFooter,
        Breadcrumbs,
    },
    computed: {
        ...mapState(['breadcrumbs']),
    },
}
</script>
