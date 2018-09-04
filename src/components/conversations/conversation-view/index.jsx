/**
 * @namespace components/conversations/conversation-view
 */

import React from 'react';
import PropTypes from 'utils/prop-types';

const ConversationView = ({conversation, ...props}) => {

  return (
    <div>Hello World</div>
  )
}

ConversationView.propTypes = {
  conversation: PropTypes.conversation,

}

export default ConversationView;