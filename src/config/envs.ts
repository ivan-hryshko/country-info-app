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

const ENVS = {
  APP_PORT,
  APP_ENV,
}

export default ENVS