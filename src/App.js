import React, { Component } from 'react';
import * as _ from 'underscore';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import AsyncOne from './AsyncOne';
import Home from './Home';
import DomainNames from './DomainNames';
import ExampleErrorPage from './ExampleErrorPage';
import ScoringList from './ScoringList';
import LargerEnsembleList from './LargerEnsembleList';
import ElectronicList from './ElectronicList';
import SmallerEnsembleList from './SmallerEnsembleList';

class App extends Component {
  render() {
    // TODO am I misremembering how nested routes are supposed to work?
    return (
      <Router>
        <div>
          <Route exact path="/" component={Home} />
          <Route exact path="/domains" component={DomainNames} />
          <Route exact path="/scoring" component={ScoringList} />
          <Route exact path="/electronic" component={ElectronicList} />
          <Route exact path="/larger-ensemble" component={LargerEnsembleList} />
          <Route exact path="/smaller-ensemble" component={SmallerEnsembleList} />
          <Route exact path="/examples/error-page" component={ExampleErrorPage} />
          <Route exact path="/async-one" component={AsyncOne} />
        </div>
      </Router>
    )
  }
}

export default App;
