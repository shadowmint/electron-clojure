import {foo} from './data';

export function test_foo(test) {
  test.ok(foo());
  test.done();
}
