import { module, test } from 'qunit';
import { setup, visit } from 'ember-cli-fastboot-testing/test-support';

module('FastBoot | request object test', function(hooks) {
  setup(hooks);

  test('it has a host', async function(assert) {
    await visit('/request-object');

    assert
      .dom('[data-test-id=host]')
      .includesText('ember-cli-fastboot-testing.localhost');
  });

  test('it has a protocol', async function(assert) {
    await visit('/request-object');

    assert
      .dom('[data-test-id=protocol]')
      .includesText('http:');
  });

  test('it has headers', async function(assert) {
    await visit('/request-object');

    assert
      .dom('[data-test-id=headers]')
      .includesText('host: ember-cli-fastboot-testing.localhost');
  });

  test('it has user agent in headers', async function(assert) {
    await visit('/request-object');

    assert
      .dom('[data-test-id=headers] [data-header-name=user-agent')
      .includesText('user-agent: ');
  });

  test('it includes cookies in request headers', async function (assert) {
    await visit('/request-object');

    assert
      .dom('[data-test-id=headers] [data-header-name=cookie]')
      .includesText('cookie: ');
  });

  test('it has query params', async function(assert) {
    await visit('/request-object?testing=true');

    assert
      .dom('[data-test-id=query-params]')
      .includesText('testing: true');
  });

  test('it has a path', async function(assert) {
    await visit('/request-object');

    assert
      .dom('[data-test-id=path]')
      .includesText('/request-object');
  });

  test('it has a method', async function(assert) {
    await visit('/request-object');

    assert
      .dom('[data-test-id=method]')
      .includesText('GET');
  });
});
