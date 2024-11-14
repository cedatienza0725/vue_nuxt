module.exports = (req, res) => {
    const sm = require('sitemap')
    const urls = []
    const resourceUrl = 'https://s3.amazonaws.com/resources.theliftshop.com/'
    const sitemapArr = ['sitemaps/pages.xml', 'sitemaps/primary.xml']

    sitemapArr.forEach((sitemap) => {
        urls.push(resourceUrl + sitemap)
    })

    const sitemap = sm.buildSitemapIndex({
        urls,
        xslUrl: '/main-sitemap.xsl',
    })

    res.type('application/xml')
    res.send(sitemap.toString())
}
