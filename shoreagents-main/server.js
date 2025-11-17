const express = require('express')
const { createServer } = require('http')
const { parse } = require('url')
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
const hostname = process.env.HOSTNAME || 'localhost'
const port = parseInt(process.env.PORT || '3000', 10)

const app = next({ dev, hostname, port })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  const expressApp = express()
  const httpServer = createServer(expressApp)
  
  // Socket.io is now handled by a separate server on port 3001
  // See socket-server.js for Socket.io implementation

  // Next.js request handling - use middleware instead of wildcard route
  expressApp.use((req, res) => {
    const parsedUrl = parse(req.url, true)
    handle(req, res, parsedUrl)
  })

  httpServer.listen(port, (err) => {
    if (err) throw err
    console.log(`> Ready on http://${hostname}:${port}`)
    console.log('💡 Note: Socket.io server runs separately on port 3001 (see socket-server.js)')
  })
})

