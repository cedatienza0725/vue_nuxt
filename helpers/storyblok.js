export const createBlokPage = (context, blockObj) => {
    if (blockObj && blockObj.endpoint) {
        const endpointStart = 'cdn/stories'

        const dataObj =
            blockObj.params && typeof blockObj.params === 'object'
                ? blockObj.params
                : {}

        dataObj.version =
            context.query._storyblok || context.isDev ? 'draft' : 'published'

        return context.app.$storyapi
            .get(endpointStart + blockObj.endpoint, dataObj)
            .then((res) => {
                const metaObj = res.data.story?.content.meta || {}

                if (res.perPage) {
                    metaObj.perPage = res.perPage
                }

                if (res.total) {
                    metaObj.total = res.total
                }

                if (Object.keys(metaObj).length > 0) {
                    context.store.dispatch('setMeta', assignMeta(metaObj))
                }

                return res.data
            })
            .catch((err) => {
                if (err.response) {
                    if (err.response.status === 404) {
                        context.error({
                            statusCode: err.response.status,
                            message: 'This page could not be found',
                        })
                    } else {
                        context.error({
                            statusCode: err.response.status,
                            message: err.response.data,
                        })
                    }
                } else {
                    context.error({
                        message: err.message,
                    })
                }
            })
    }

    return {}
}

function assignMeta(data) {
    const legend = {
        og_image: 'og:image',
        og_title: 'og:title',
        og_description: 'og:description',
        description: 'description',
    }

    const metaArr = []
    const returnObj = {}

    // assign custom tags
    if (data.title) {
        returnObj.title = data.title
    }

    if (data.total) {
        returnObj.total = data.total
    }

    if (data.perPage) {
        returnObj.perPage = data.perPage
    }

    Object.keys(legend).forEach((key) => {
        if (data[key]) {
            metaArr.push({
                hid: legend[key],
                name: legend[key],
                content: data[key],
            })
        }
    })

    // assign meta tags
    if (metaArr.length) {
        returnObj.meta = metaArr
    }

    return returnObj
}
