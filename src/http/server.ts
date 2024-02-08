import fastify from 'fastify'
import cookie from '@fastify/cookie'
import { createPoll } from './routes/createPoll'
import { getPoll } from './routes/getPoll'
import { voteOnPoll } from './routes/voteOnPoll'
import websocket from '@fastify/websocket'
import { pollResults } from './ws/pollResults'

const app = fastify()

app.register(cookie, {
  secret: 'poll-party-app',
  hook: 'onRequest',
  parseOptions: {}
})
app.register(websocket)

app.register(createPoll)
app.register(getPoll)
app.register(voteOnPoll)
app.register(pollResults)

app.listen({port: 3333}).then(() => {
  console.log('HTTP Server Running!')
})