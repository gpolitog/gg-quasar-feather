// Initializes the `ChatService` service on path `/chat-service`
const createService = require('feathers-nedb');
const createModel = require('../../models/chat-service.model');
const hooks = require('./chat-service.hooks');
const filters = require('./chat-service.filters');

module.exports = function () {
  const app = this;
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'chat-service',
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/chat-service', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('chat-service');

  service.hooks(hooks);

  if (service.filter) {
    service.filter(filters);
  }
};
