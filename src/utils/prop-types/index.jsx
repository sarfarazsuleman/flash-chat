/**
 * @namespace utils/prop-types
 *
 * @export (default) [object]
 */

import PropTypes from 'prop-types';

const chat = PropTypes.shape({
  message: PropTypes.string.isRequired,
  direction: PropTypes.oneOf(['sent','received']).isRequired,
  timestamp: PropTypes.string.isRequired,
})

const conversation = PropTypes.shape({
  name: PropTypes.string.isRequired,
  status:PropTypes.oneOf(['pending', 'active']).isRequired,
  chats: PropTypes.arrayOf(chat),
});

export default {
  conversation,
}