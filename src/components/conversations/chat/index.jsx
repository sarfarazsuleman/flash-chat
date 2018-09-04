/**
 * @namespace components/conversations/chat
 *
 * @export (default) Chat
 */
import React from 'react';
import PropTypes from 'utils/prop-types';

const Chat = ({chat, ...props}) => {

  let style = {textAlign:'left'}

  if(chat.direction === 'sent') {
    style.textAlign = 'right'
  }
  return (
    <div className={`chat chat-${chat.direction}`} style={style}>{chat.message}</div>
  )
}

Chat.propTypes = {
  chat: PropTypes.chat,
}

export default Chat;