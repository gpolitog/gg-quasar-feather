<template>
  <div>
    <div v-for="_message in messages" :key="_message._id">
      <!-- Message received from peer -->
      <div class="message.user != user ? 'chat-other' : 'chat-you'">
        <div class="chat-user">
          {{ _message.user }}
        </div>
        <div class="chat-message">
          <p>
            {{ _message.content }}
          </p>
        </div>
        <div class="chat-date">
          A few moments ago
        </div>
      </div>
    </div>
    <!-- Message Input  -->
    <div>
      <form @submit.prevent="sendMessage(message)">
        <input type="text" v-model="message" placeholder="Type your message here">
        <button type="submit" class="primary" ><i>send</i></button>
      </form>
    </div>
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
      let new_message = {
        user: this.user,
        content: message
      }
      ChatService.create(new_message)
      this.message = ''
    }
  }
}
</script>
