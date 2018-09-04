/**
 * @namespace setup/reducer
 *
 * @export (default) [object]
 */

import { combineReducers } from 'redux'
import {routerReducer} from 'react-router-redux';

import ConversationsModule from 'components/conversations/module';

export default combineReducers({
  conversations: ConversationsModule,
  router: routerReducer,
})