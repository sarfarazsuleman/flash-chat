/**
 * @namespace setup/router
 *
 * @export (default) Router
 */

import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';

import Home from 'components/home';


class Router extends Component {
  render() {
    return (
      <Switch>

        <Route exact path='/' component={Home} />

        <Route render={_=><div>404 Not Found</div>}/>
      </Switch>
    );
  }
}

function mapStateToProps(state, prop) {
  return {}
}

export default withRouter(connect(mapStateToProps)(Router));