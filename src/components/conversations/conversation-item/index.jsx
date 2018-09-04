/**
 * @namespace components/chats/conversation-item
 *
 * @export (default)  ConversationItem
 */

import React from 'react';
import PropTypes from 'prop-types';

const ConversationItem = ({ id, conversation, isCurrent, setCurrent, ...props}) => {

  let selected = (isCurrent)?'converstaion-item--selected':'';

  let pending = (conversation.status === 'pending')?(<label>Pending</label>):(null);
  const onClick = _=>setCurrent(id);

  return (
    <div className={`converstaion-item ${selected}`} onClick={onClick}>{conversation.name}{pending}</div>
  )
}

ConversationItem.propTypes = {
  id: PropTypes.number.isRequired,
  isCurrent: PropTypes.bool,
  setCurrent: PropTypes.func.isRequired,
  conversation: PropTypes.shape({
    name: PropTypes.string.isRequired,
    status:PropTypes.oneOf(['pending', 'active']).isRequired
  })
}

export default ConversationItem;