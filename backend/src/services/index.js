const chatService = require('./chat-service/chat-service.service.js');
module.exports = function () {
  const app = this; // eslint-disable-line no-unused-vars
  app.configure(chatService);
};
