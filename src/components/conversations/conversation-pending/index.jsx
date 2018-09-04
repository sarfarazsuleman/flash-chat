/**
 * @namespace components/conversations/conversation-pending
 *
 * @export (default) ConversationPending
 */

import React from 'react';

const ConversationPending = ({current,conversation, ...props}) => {

  const approve = _=>props.approve(current);
  const reject = _=>props.reject(current);
  return (
    <div className="conversation-pending">
      <h2>A new candidate would like to chat with you</h2>

      <button onClick={approve} >Begin Chat</button>
      <button onClick={reject} >Decline Chat</button>
    </div>
  )
}

export default ConversationPending;