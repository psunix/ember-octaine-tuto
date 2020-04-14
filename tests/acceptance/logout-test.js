import { module, test } from 'qunit';
import { visit, currentURL, click } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';
import { MockAuthService } from '../stubs/auth-service';

module('Acceptance | logging out', function(hooks) {
  setupApplicationTest(hooks);

  //hooks.beforeEach(function() {
    //this.owner.register('service:auth', MockAuthService);
  //})

  test('visiting /teams and clicking "logout"', async function(assert) {

    await visit('/teams/avengers');
    // assert.equal(currentURL().startsWith('/teams'));

    await click('.team-sidebar__logout-button');
    assert.equal(currentURL(), '/login');

  });
});
