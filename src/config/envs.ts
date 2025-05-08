import dotenv from 'dotenv'
if (process.env.APP_ENV === 'test') {
  dotenv.config({ path: './test.env' })
} else {
  dotenv.config({ path: './dev.env' })
}

const APP_ENV = process.env.APP_ENV
// if (!APP_ENV) {
//   console.log('No environment specified. Set NODE_ENV environment variable.')
//   process.exit(1)
// }

const APP_PORT = process.env.APP_PORT || 3000
if (!APP_PORT) {
  console.error('APP_PORT is not defined in the environment variables')
}
const PG_HOST = process.env.PG_HOST
const PG_PORT = process.env.PG_PORT
const PG_USERNAME = process.env.PG_USERNAME
const PG_PASSWORD = process.env.PG_PASSWORD
const PG_DATABASE = process.env.PG_DATABASE

const ENVS = {
  APP_PORT,
  APP_ENV,
  PG_HOST,
  PG_PORT,
  PG_USERNAME,
  PG_PASSWORD,
  PG_DATABASE,
}

export default ENVS