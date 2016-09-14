import {GlobalNav} from './components/global_nav';
import {Frame} from './components/frame';
import {Home} from './pages/home';
import {Navigation} from './services/navigation';
import ReactDOM from 'react-dom';
import React from 'react';
import $ from 'jquery';

var container = $(".container");
if (container != null) {
  ReactDOM.render(
    <div className="container">
      <GlobalNav id="Main"/>
      <Frame id="Main"/>
    </div>, container[0]);

  // Startup
  var navigation = new Navigation();
  navigation.navigateTo("Main", <Home/>);
}
