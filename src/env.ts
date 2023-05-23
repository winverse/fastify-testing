import { FastifyEnvOptions } from '@fastify/env'

const schema = {
  type: 'object',
  required: ['PORT'],
}

export const envOptions: FastifyEnvOptions = {
  confKey: 'config',
  schema,
  dotenv: {
    path: `${__dirname}/.env.${
      process.env.NODE_ENV !== 'production' ? 'development' : 'production'
    }`,
  },
}
