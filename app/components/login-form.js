import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service';

export default class LoginFormComponent extends Component {

  /**
  * @type {AuthService}
  */
  @service auth;

  /**
  * @type {string}
  */
  @tracked
  userId = null;

  get isDisabled() {
    return !this.userId;
  }

  /**
   * Handle change events on the <select>
   * @param {Event & { target: HTMLSelectElement }} evt
   */
  @action
  onSelectChanged(evt) {
    this.userId = evt.target.value;
  }

  /**
   * Handle the form submit event
   * @param {Event & { target: HTMLFormElement }} evt
   */
  @action
  onLoginFormSubmit(evt) {
    evt.preventDefault();
    if (this.userId) this.auth.login(this.userId);
  }
}
