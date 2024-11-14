export const StoryblokMixin = {
    data() {
        return {
            story: {
                content: {},
            },
            stories: [],
        }
    },
    head() {
        return this.$store.state.meta || {}
    },
    mounted() {
        this.$storybridge.on(['input', 'published', 'change'], (event) => {
            if (event.action === 'input') {
                if (event.story.id === this.story.id) {
                    this.story.content = event.story.content
                }
            } else {
                window.location.reload()
            }
        })
    },
}
