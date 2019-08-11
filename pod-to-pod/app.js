const http = require('http')
const port = process.env.PORT

const server = http.createServer((_request, response) => {
  response.end('Hello Node.js Server!')
})

server.listen(port, err => {
  if (err) return console.error('something bad happened', err.stack)
  console.log(`server is listening on ${port}`)
})
