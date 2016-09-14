import {EventStream} from '../../shared/infrastructure/events';

export class Navigation {
  navigateTo(id, page) {
    Navigation.eventStream.broadcast({id: id, page: page});
  }
}

Navigation.eventStream = new EventStream();