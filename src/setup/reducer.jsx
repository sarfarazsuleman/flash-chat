/**
 * @namespace setup/reducer
 *
 * @export (default) [object]
 */

import { combineReducers } from 'redux'
import {routerReducer} from 'react-router-redux';

export default combineReducers({
  router: routerReducer
})