import dotenv from '@dword-design/dotenv-json-extended'
import bodyParser from 'body-parser'

dotenv.config()

export default {
  modules: [
    [
      'nuxt-mail',
      {
        message: {
          to: 'foo@bar.de',
        },
        smtp: JSON.parse(process.env.MAIL_CONFIG || {}),
      },
    ],
  ],
  serverMiddleware: [bodyParser.urlencoded({ extended: false })],
}
