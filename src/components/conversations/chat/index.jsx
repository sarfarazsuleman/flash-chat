/**
 * @namespace components/conversations/chat
 *
 * @export (default) Chat
 */
import React from 'react';
import PropTypes from 'utils/prop-types';

const Chat = ({chat, ...props}) => {

  return (
    <div className={`chat chat-${chat.direction}`}>{chat.message}</div>
  )
}

Chat.propTypes = {
  chat: PropTypes.chat,
}

export default Chat;