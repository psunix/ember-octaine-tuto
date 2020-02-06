import Service from '@ember/service';
import { inject as service } from '@ember/service';

const AUTH_KEY = "shlack-userid";

export default class AuthService extends Service {

  @service router;

  get currentUserId() {
    window.localStorage.getItem(AUTH_KEY);
  }

  login(userId) {
    window.localStorage.setItem(AUTH_KEY, userId);
    this.router.transitionTo('teams');
  }

}
