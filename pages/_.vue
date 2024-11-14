<template>
    <section>
        <component
            :is="story.content.component"
            v-if="story.content.component"
            :key="story.content._uid"
            :blok="story.content"
        ></component>
    </section>
</template>

<script>
import { StoryblokMixin } from '@/mixins/storyblok'
import { createBlokPage } from '@/helpers/storyblok'

export default {
    mixins: [StoryblokMixin],
    asyncData(context) {
        const urlSplit = context.params.pathMatch.split('pages')

        const endPoint = `/pages/${
            urlSplit.length > 1 ? urlSplit[1] : urlSplit[0]
        }`

        return createBlokPage(context, {
            endpoint: endPoint,
            params: {},
        })
    },
}
</script>
