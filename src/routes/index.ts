import { FastifyPluginAsync } from 'fastify'
import api from './api'

export const routes: FastifyPluginAsync = async (fastify) => {
  fastify.register(api, { prefix: '/api' })
}
