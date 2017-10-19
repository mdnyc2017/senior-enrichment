
import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import AllCampuses from './AllCampuses';
import SingleCampus from './SingleCampus';
import AllStudents from './AllStudents';
import SingleStudent from './SingleStudent';
import NavComponent from './Navbar';

export default class Main extends Component {

  render () {
    return (
      <Router>
        <div id="main" className="container-fluid">
          <div className="col-xs-2">
            <NavComponent />
          </div>
          <div className="col-xs-10">
            <Switch>
              <Route exact path="/campus" render={() => <AllCampuses campus={[]} />} />
              <Route path="/campus/:id" component={SingleCampus} />
              <Route exact path="/students" component={AllStudents} />
              <Route path="/students/:id" component={SingleStudent} />
              <Route path ='/' component={AllCampuses} />
            </Switch>
          </div>
        </div>
    </Router>
    );
  }
}