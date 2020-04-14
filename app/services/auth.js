import Service from '@ember/service';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import Router from '@ember/routing/router';

const AUTH_KEY = "shlack-userid";

export default class AuthService extends Service {
  /**
   * @type: {Router}
   */
  @service router;

  get currentUserId() {
    return window.localStorage.getItem(AUTH_KEY);
  }

  login(userId) {
    window.localStorage.setItem(AUTH_KEY, userId);
    this.router.transitionTo('teams');
  }

  get isAuthenticated() {
    return Boolean(this.currentUserId);
  }

  @action
  logout() {
    window.localStorage.removeItem(AUTH_KEY);
    this.router.transitionTo('login');
  }

}
