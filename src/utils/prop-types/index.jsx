/**
 * @namespace utils/prop-types
 *
 * @export (default) [object]
 */

import PropTypes from 'prop-types';

export default {
  conversation: PropTypes.shape({
    name: PropTypes.string.isRequired,
    status:PropTypes.oneOf(['pending', 'active']).isRequired
  }),

}