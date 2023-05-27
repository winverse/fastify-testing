import '@fastify/awilix'
import PostService from '../services/post.service'

declare module '@fastify/awilix' {
  interface Cradle {
    postService: PostService
  }
  interface RequestCradle {}
}
