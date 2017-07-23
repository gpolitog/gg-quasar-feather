const todos = require('./todos/todos.service.js');
const chat = require('./chat/chat.service.js');
module.exports = function () {
  const app = this; // eslint-disable-line no-unused-vars
  app.configure(todos);
  app.configure(chat);
};
