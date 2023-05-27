import { diContainer } from '@fastify/awilix'
import { Lifetime, asClass } from 'awilix'
import PostService from './post.service'
import { FastifyPluginAsync } from 'fastify'

export const serviceDiContainer: FastifyPluginAsync = async (fastify) => {
  diContainer.register({
    postService: asClass(PostService, {
      lifetime: Lifetime.SINGLETON,
    }),
  })
}
