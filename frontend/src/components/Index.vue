<template>
  <div>
    <q-layout>
      <!-- Header -->
      <div slot="header" class="toolbar">
        <q-toolbar-title :padding="1">
          Chat
        </q-toolbar-title>
      </div>
      <div id="message-container" class="layout-view">
        <div class="list striped">
          <div class="item" v-for="_message in messages" :key="_message._id">
            <div class="item-content">
              <div class="chat-user">
                {{ _message.user }}
              </div>
              <div class="chat-message">
                {{ _message.content }}
              </div>
            </div>
          </div>
        </div>
        <div id="down"></div>
      </div>
      <!-- Footer -->
      <div slot="footer" style="background: #fff">
        <!-- Message Input  -->
        <div>
          <form @submit.prevent="sendMessage(message)">
            <input class="full-width" type="text" v-model="message" placeholder="Type your message here">
            <button type="submit" class="primary pull-right" ><i>send</i></button>
          </form>
        </div>
      </div>
    </q-layout>
  </div>
</template>
<script>



import feathersApp from 'FeathersService.js'
let ChatService = feathersApp.services.chat
export default{
  mounted () {
    ChatService.observe('data', (key, oldval, newval) => {
      this.messages = newval
    })
  },
  data () {
    return {
      messages: [],
      message: '',
      user: 'user'
    }
  },
  methods: {
    sendMessage: function (message) {
      let newMessage = {
        user: this.user,
        content: message
      }
      ChatService.create(newMessage)
      this.message = ''
      document.getElementById('down').scrollIntoView()
    }
  }
}
</script>
