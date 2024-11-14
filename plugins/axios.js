export default function ({ $axios, store }) {
    $axios.onRequest((config) => {
        if (store.state.csrfToken) {
            config.headers.common['x-csrf-token'] = store.state.csrfToken
        }

        return config
    })
    // $axios.onError((error) => {
    //     const code = parseInt(error.response && error.response.status)
    //     if (code === 400) {
    //         redirect('/400')
    //     }
    // })
}
