import React from 'react';
import {Navigation} from '../services/navigation';
import {EventHandler} from '../../shared/infrastructure/events';


export class Frame extends React.Component {
  constructor(props) {
    super(props);
    this.eventHandler = new EventHandler(Navigation.eventStream);
    this.eventHandler.addEventHandler((sender, e) => { this.navigateTo(e); });
    this.state = {page: <div/>};
  }

  componentWillUnmount() {
    this.eventHandler.dispose();
  }

  navigateTo(e) {
    if (e.id == this.props.id) {
      this.setState({
        page: e.page
      });
    }
  }

  render() {
    return <div className={"component--Frame"}>
      {this.state.page}
    </div>
  }
}

Frame.propTypes = {
  id: React.PropTypes.string.isRequired
}

