import TokenAuthorizer from 'app/auth/authorizer';
import TokenAuthenticator from 'app/auth/authenticator';

export function initialize(container) {
  container.register('authenticator:custom', TokenAuthenticator);
  container.register('authorizer:custom', TokenAuthorizer);
}


export default {
  name: 'authentication',
  before: 'simple-auth',
  initialize: initialize
};
