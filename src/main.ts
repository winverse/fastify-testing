import Fastify from 'fastify'
import fastifyEnv from '@fastify/env'

import { envOptions } from './env'

const server = Fastify({
  logger: true,
})

console.log(process.env.NODE_ENV)
// server.register(fastifyEnv, envOptions)

server.listen({ port: 3000 }, (err, address) => {
  console.log(address)
  console.info('Hello')
})
