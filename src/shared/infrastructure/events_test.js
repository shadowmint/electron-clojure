import {EventStream, EventHandler} from './events';

export function test_dispatch_event(test) {
  var stream = new EventStream();
  var handler = new EventHandler(stream);
  var done = false;

  handler.addEventHandler(() => {
    done = true;
  });

  handler.trigger({});
  test.ok(done);
  test.done();
}

export function test_dispatch_event_is_unique_to_handler(test) {
  var stream = new EventStream();
  var handler1 = new EventHandler(stream);
  var handler2 = new EventHandler(stream);
  var done1 = false;
  var done2 = false;

  handler1.addEventHandler(() => { done1 = true; });
  handler2.addEventHandler(() => { done2 = true; });

  handler1.trigger({});
  test.ok(done1);
  test.ok(!done2);
  test.done();
}

export function test_broadcast(test) {
  var stream = new EventStream();
  var handler1 = new EventHandler(stream);
  var handler2 = new EventHandler(stream);
  var done1 = false;
  var done2 = false;

  handler1.addEventHandler(() => { done1 = true; });
  handler2.addEventHandler(() => { done2 = true; });

  stream.broadcast({});
  test.ok(done1);
  test.ok(done2);
  test.done();
}
