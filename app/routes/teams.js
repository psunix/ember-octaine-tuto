import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import fetch from 'fetch';

export const ALL_TEAMS = [
  {
    "id": "avengers",
    "name": "Avengers",
    "order": 4,
    "iconUrl": "/assets/img/avengers.jpg"
  },
  {
    "id": "angrycat",
    "name": "Angry Cat",
    "order": 5,
    "iconUrl": "/assets/img/angry-cat.jpg"
  },
  {
    "id": "javascript",
    "name": "Javascript",
    "order": 6,
    "iconUrl": "/assets/img/js.png"
  }
]

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

  async model() {
    const response = await fetch('/api/teams');
    return response.json();
  }
  
}
