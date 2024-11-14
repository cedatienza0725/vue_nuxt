export default () => {
    window.$crisp = []
    window.CRISP_WEBSITE_ID = '849a64e4-2216-4594-b26b-fe705c3b2c20'
    ;(function () {
        const d = document
        const s = d.createElement('script')

        s.src = 'https://client.crisp.chat/l.js'
        s.async = 1
        d.getElementsByTagName('head')[0].appendChild(s)
    })()
}
