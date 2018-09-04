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

const input = {
  name: PropTypes.PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]).isRequired,
  placeholder: PropTypes.string.isRequired,
  changeHandle: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
}

export default {
  conversation,
  chat,
  chats: PropTypes.arrayOf(chat),
  input,
}