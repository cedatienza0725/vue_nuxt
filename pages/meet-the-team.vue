<template>
    <div>
        <TeamGrid />
    </div>
</template>

<script>
import TeamGrid from '@/components/Team/TeamGrid'

export default {
    components: {
        TeamGrid,
    },
    head() {
        return {
            title: 'Meet the Team',
            meta: [
                {
                    hid: 'description',
                    name: 'description',
                    content: 'Meet the team at The Lift Shop.',
                },
            ],
        }
    },
}
</script>
