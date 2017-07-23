const assert = require('assert');
const app = require('../../src/app');

describe('\'ChatService\' service', () => {
  it('registered the service', () => {
    const service = app.service('chat-service');

    assert.ok(service, 'Registered the service');
  });
});
