import fastify from 'fastify'
import cookie from '@fastify/cookie'
import { createPoll } from './routes/createPoll'
import { getPoll } from './routes/getPoll'
import { voteOnPoll } from './routes/voteOnPoll'

const app = fastify()

app.register(cookie, {
  secret: 'poll-party-app',
  hook: 'onRequest',
  parseOptions: {}
})

app.register(createPoll)
app.register(getPoll)
app.register(voteOnPoll)

app.listen({port: 3333}).then(() => {
  console.log('HTTP Server Running!')
})