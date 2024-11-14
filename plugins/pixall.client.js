export default () => {
    window.dealerDotCom = window.dealerDotCom || {}
    window.dealerDotCom.pageType = ''
    window.dealerDotCom.vin = ''
    window._pxam = window._pxam || []
    window._pxam.push({
        type: 'meta-data',
        dealerCode: 'theliftshop',
    })
    ;(function () {
        const d = document
        const s = d.createElement('script')

        s.src = 'https://assets.prod.analytics.dealer.com/pixall/pix-aop.min.js'
        d.getElementsByTagName('head')[0].appendChild(s)
    })()
}
