/**
 * @namespace components/conversations/chats
 *
 * @export (default) chats
 */

import React, { Component } from 'react';
import PropTypes from 'utils/prop-types';
import Chat from 'components/conversations/chat';

class chats extends Component {
  
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
      if(this.props.chats) {
        return this.props.chats.map((c,idx) => {
          return (<Chat chat={c} key={idx} />)
        })
      }

      return null;
    }

    return (
      <div className="chats">

        {renderChats()}

        <div ref={(el) => { this.pageEnd = el; }}></div>
      </div>
    )
  }

}

chats.propTypes = {
  chats: PropTypes.chats,
}

export default chats;