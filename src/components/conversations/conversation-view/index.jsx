/**
 * @namespace components/conversations/conversation-view
 */

import React, { Component } from 'react';
import PropTypes from 'utils/prop-types';

class ConversationView extends Component {
  
  constructor(props) {
    super(props);

    this.scrollToBottom = this.scrollToBottom.bind(this);
  }

  scrollToBottom() {
    if(this.pageEnd === undefined) {
      return;
    }
    this.pageEnd.scrollIntoView({ behavior: "smooth" });
  }

  componentDidMount() {
    //Give it some delay to avoid race conditions
    setTimeout(this.scrollToBottom,1000);
  }

  render() {
    return (
      <div className="conversation-view">
        <div ref={(el) => { this.pageEnd = el; }}></div>
      </div>
    )
  }

}

ConversationView.propTypes = {
  conversation: PropTypes.conversation,

}

export default ConversationView;