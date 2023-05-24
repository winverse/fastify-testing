import { FastifyEnvOptions } from '@fastify/env'

const schema = {
  type: 'object',
  required: ['PORT'],
  properties: {
    PORT: {
      type: 'number',
      default: 3000,
    },
  },
}

export const envOptions: FastifyEnvOptions = {
  confKey: 'config',
  schema,
  dotenv: {
    path: `${process.cwd()}/.env.${
      process.env.NODE_ENV !== 'production' ? 'development' : 'production'
    }`,
  },
}
