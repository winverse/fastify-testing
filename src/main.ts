import 'module-alias/register'

import Fastify, { FastifyInstance } from 'fastify'
import fastifyEnv from '@fastify/env'
import { fastifyAwilixPlugin } from '@fastify/awilix'
import { envOptions } from './env'
import { routes } from '@routes'
import { serviceDiContainer } from '@services'

async function bootstrap(): Promise<void> {
  const server: FastifyInstance = Fastify({
    logger: {
      transport: {
        target: 'pino-pretty',
        options: {
          translateTime: 'HH:MM:ss',
          ignore: 'pid,hostname',
        },
      },
    },
  })

  await server.register(fastifyEnv, envOptions)

  server.register(fastifyAwilixPlugin, {
    disposeOnClose: true,
    disposeOnResponse: true,
  })

  await server.register(serviceDiContainer)

  server.register(routes)

  try {
    await server.listen({ port: server.config.PORT })
  } catch (err) {
    server.log.error(err)
    process.exit(1)
  }
}

bootstrap()
