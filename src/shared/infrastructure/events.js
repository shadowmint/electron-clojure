/** EventStream looks after EventHandlers */
export class EventStream {
  constructor() {
    this.handlers = [];
  }

  addEventHandler(source, handler) {
    this.handlers.push({source: source, handler: handler});
  }

  removeEvent_handler(handler) {
    this.handlers = this.handlers.filter(i => (i.source !== source) && (i.handler !== handler));
  }

  clear(source) {
    this.handlers = this.handlers.filter(i => i.source !== source);
  }

  trigger(source, e) {
    this.handlers.filter(i => i.source === source).map(i => i.handler(source, e));
  }

  broadcast(e) {
    this.handlers.map(i => i.handler(null, e));
  }
}

/** EventHandler is a disposable event binding context for objects */
export class EventHandler {
  constructor(stream) {
    this.stream = stream;
  }

  addEventHandler(handler) {
    this.stream.addEventHandler(this, handler);
  }

  removeEventHandler(handler) {
    this.stream.removeEventHandler(this, handler);
  }

  clear() {
    this.stream.clear(this);
  }

  trigger(e) {
    this.stream.trigger(this, e);
  }
}
