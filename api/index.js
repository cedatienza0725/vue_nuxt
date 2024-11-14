const app = require('express')()

const generateSitemap = require('./generate-sitemap')

app.get('/sitemap.xml', generateSitemap)

if (require.main === module) {
    const port = 3001

    app.listen(port, () => {
        console.log(`API server listening on port ${port}`)
    })
}

module.exports = app
