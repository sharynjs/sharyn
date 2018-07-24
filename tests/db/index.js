import { knex } from '../../packages/db'

if (knex.client.config.something !== 'hey') {
  throw Error('The provided default config did not get overridden')
}

if (knex.client.config.connection.port !== '8433') {
  throw Error('Did not read the default knex config properly')
}
