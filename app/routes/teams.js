import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class TeamsRoute extends Route {
  /**
  * @type {AuthService}
  */
  @service auth;
  
  async beforeModel(transition) {
    await super.beforeModel(transition);
    if(!this.auth.isAuthenticated) {
      this.transitionTo('login');
    }
  }
  
}
