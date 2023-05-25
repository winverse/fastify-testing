import { FastifyPluginAsync } from 'fastify'

export const postsRoute: FastifyPluginAsync = async (fastify) => {
  fastify.post('/', { schema: {} }, async (request) => {
    return 'Created'
  })
}
