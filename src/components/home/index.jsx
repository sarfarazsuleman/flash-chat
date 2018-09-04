/**
 * @namespace components/home
 *
 * @default [Component]
 */

import React, { Component } from 'react';

import Conversations from 'components/conversations';

class Home extends Component {

  constructor(props) {
    super(props);

    this.state = {
      ready: false
    }
  }

  componentDidMount() {
    this.setState({ready:true})
  }

  render(){
    let result = null;

    if(this.state.ready) {
      result = (
        <Conversations />
      );
    }

    return (<div className="app">{result}</div>);
  }
}

export default Home;