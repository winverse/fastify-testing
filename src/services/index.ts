import fs from 'fs'
import path from 'path'
import { diContainer } from '@fastify/awilix'
import { Lifetime, asClass } from 'awilix'
import { FastifyPluginAsync } from 'fastify'

const toCamelCase = (str: string) =>
  str.replace(/\.(\w)/g, (_, letter: string) => letter.toUpperCase())

export const serviceDiContainer: FastifyPluginAsync = async (fastify) => {
  const except = ['index']

  const files = fs.readdirSync(__dirname, { encoding: 'utf-8' })

  files.forEach(async (file) => {
    const filename = path.basename(file, '.ts')

    if (except.includes(filename)) return

    const { default: service } = await import(`./${filename}`)

    const key = toCamelCase(filename)

    diContainer.register({
      [key]: asClass(service, {
        lifetime: Lifetime.SINGLETON,
      }),
    })
  })
}
