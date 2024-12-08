import { Hono } from 'hono'
import { logger } from 'hono/logger'
import { prettyJSON } from 'hono/pretty-json'

type Bindings = {
  MY_VARIABLE: string
}

const app = new Hono<{ Bindings: Bindings }>()

// Middleware
app.use('*', logger())
app.use('/api/*', prettyJSON())

// Routes
app.get('/', (c) => c.text('Hello Hono on Cloudflare Workers!'))

app.get('/api/info', (c) => {
  return c.json({
    message: 'This is a JSON endpoint',
    environment: c.env.MY_VARIABLE,
    timestamp: new Date().toISOString()
  })
})

export default app