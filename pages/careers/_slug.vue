<template>
    <div>
        <client-only>
            <JobApplication />
        </client-only>
    </div>
</template>

<script>
import JobApplication from '@/components/Careers/JobApplicationForm'

export default {
    components: {
        JobApplication,
    },
}
</script>
