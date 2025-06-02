import Fastify from 'fastify'
import multipart from '@fastify/multipart'
import { AppRoutes } from './routes'

const app = Fastify({
  logger: true
})

app.register(AppRoutes)
app.register(multipart)

app.listen({ port: 3333 }, function (err, address) {
  if (err) {
    app.log.error(err)
    process.exit(1)
  }
})