import { FastifyPluginAsync } from 'fastify'
import { postsRoute } from './posts'

const api: FastifyPluginAsync = async (fastify) => {
  fastify.register(postsRoute, { prefix: '/posts' })
}

export default api
