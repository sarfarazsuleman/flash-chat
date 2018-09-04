/**
 * @namespace components/conversations
 *
 * @export (default) Conversations
 */

import React, { Component } from 'react';
import ConversationView from 'components/conversations/conversation-view';

class Conversations extends Component {

  constructor(props) {
    super(props);

    this.state = {

    }
  }

  render() {

    return (
      <div className="conversations">
        <ConversationView />
      </div>
    )
  }
}

export default Conversations;