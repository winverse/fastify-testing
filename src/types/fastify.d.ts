import 'fastify'
import { Config } from './config'

declare module 'fastify' {
  interface FastifyInstance {
    config: Config
  }
}
