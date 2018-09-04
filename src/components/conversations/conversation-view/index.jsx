/**
 * @namespace components/conversations/conversation-view
 *
 * @export (default) ConversationView
 */

import React, { Component } from 'react';
import PropTypes from 'utils/prop-types';
import Chat from 'components/conversations/chat';

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
    const renderChats = () => {
      if(this.props.conversation && this.props.conversation.chats) {
        return this.props.conversation.chats.map((c,idx) => {
          return (<Chat chat={c} key={idx} />)
        })
      }

      return null;
    }

    return (
      <div className="conversation-view">

        {renderChats()}

        <div ref={(el) => { this.pageEnd = el; }}></div>
      </div>
    )
  }

}

ConversationView.propTypes = {
  conversation: PropTypes.conversation,
}

export default ConversationView;