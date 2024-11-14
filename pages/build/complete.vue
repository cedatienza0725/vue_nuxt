<template>
    <div>
        <BuildComplete />
    </div>
</template>

<script>
import BuildComplete from '@/components/Build/Complete/BuildComplete'

export default {
    components: {
        BuildComplete,
    },
    asyncData({ store, redirect }) {
        if (store.state.build.buildData === null) {
            return redirect('/build')
        }
    },
    head() {
        return {
            title: 'Completed Build',
            meta: [
                {
                    hid: 'description',
                    name: 'description',
                    content:
                        'Completed your build and schedule an appointment with The Lift Shop.',
                },
            ],
        }
    },
}
</script>
