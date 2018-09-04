/**
 * @namespace components/conversations/conversation-list
 *
 * @export (default) ConversationList
 */

import React from 'react';
import ConversationItem from 'components/conversations/conversation-item';

const ConversationList = ({conversations, addConversation, current, setCurrent, ...props}) => {

  const onAdd = _ => addConversation();

  return (
    <nav>
      <div className="add-conversation" onClick={onAdd}>+ Add Conversation</div>

      <div className="conversations">
        {conversations.map((conversation, idx) => {
          return (<ConversationItem
            conversation={conversation} 
            isCurrent={current===idx} 
            setCurrent={setCurrent} 
            id={idx}
            key={idx} 
            />
          )
        })}
      </div>
    </nav>
  )
}


export default ConversationList;