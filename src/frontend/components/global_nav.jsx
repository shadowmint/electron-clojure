import React from 'react';
import {Navigation} from '../services/navigation';
import {Home} from '../pages/home';
import {About} from '../pages/about';

var pages = {
  Home: () => <Home/>,
  About: () => <About/>
};
export class GlobalNav extends React.Component {

  constructor(props) {
    super(props);
    this.navigation = new Navigation();
  }

  navigateTo(pageFactory) {
    this.navigation.navigateTo(this.props.id, pageFactory());
  }

  render() {
    return <div className={"component--GlobalNav"}>
      <a onClick={(e) => this.navigateTo(pages.Home)}>Home</a>
      <a onClick={(e) => this.navigateTo(pages.About)}>About</a>
    </div>
  }
}

GlobalNav.propTypes = {
  id: React.PropTypes.string.isRequired
}