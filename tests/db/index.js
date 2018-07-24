import { knex } from '../../packages/db'

if (knex.client.config.connection.host !== 'hey') {
  throw Error('Did not read the custom knex config')
}
