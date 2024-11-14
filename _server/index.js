import express from 'express'
import { Nuxt, Builder } from 'nuxt'
import csrf from 'csurf'
import cookieParser from 'cookie-parser'

const app = express()
const host = process.env.HOST || '127.0.0.1'
const port = process.env.PORT || 3000

// Import and Set Nuxt.js options
const config = require('../nuxt.config.js')
config.dev = !(process.env.NODE_ENV === 'production')
// Init Nuxt.js
const nuxt = new Nuxt(config)

// Build only in dev mode
if (config.dev && process.env.NOBUILD !== 'on') {
    const builder = new Builder(nuxt)

    builder.build()
}

app.set('port', port)
app.use(
    express.urlencoded({
        extended: true,
    })
)
app.use(express.json())
app.use(cookieParser())
app.use(csrf({ cookie: true }))
// Import API Routes
// const baseUrl = process.env.BASE_APP_URL || '/'
// ... Some Middleware Injection
app.use(nuxt.render)
// Listen the server
app.listen(port, host)
console.log('Server listening on ' + host + ':' + port) //
