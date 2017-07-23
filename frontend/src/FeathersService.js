import io from 'socket.io-client'
import feathersClient from 'feathers/client'
import socketio from 'feathers-socketio/client'
import hooks from 'feathers-hooks'
import authentication from 'feathers-authentication/client'
import wings from 'wings-feathers'
let socket = io('//localhost:3030')

let feathers = feathersClient()
  .configure(socketio(socket))
  .configure(hooks())
  .configure(authentication({storage: window.localStorage}))

let wingsJS = wings(feathers)
wingsJS.serve('collection') // a collection service
wingsJS.serve('chat')

export default wingsJS
