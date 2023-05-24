import Fastify, { FastifyInstance } from 'fastify'
import fastifyEnv from '@fastify/env'
import { envOptions } from './env'

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

  try {
    await server.listen({ port: 8080 })
  } catch (err) {
    server.log.error(err)
    process.exit(1)
  }
}

bootstrap()
