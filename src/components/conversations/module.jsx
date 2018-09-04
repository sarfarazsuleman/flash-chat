/**
 * @namespace components/conversations/module
 *
 * @export (const) CHAT_CONVERSATION_ADD
 * @export (func) addConversation
 * @export (default) [reducer function]
 */

export const CHAT_CONVERSATION_ADD = 'CHAT_CONVERSATION_ADD';

const initialState = {
  conversations: []
}

export default (state = initialState, action) => {
  switch(action.type) {
    case CHAT_CONVERSATION_ADD:

      let conversations = state.conversations;
      conversations.push(action.payload);

      return {
        ...state,
        conversations
      }

    default: 
      return state;
  }
}


export const addConversation = (name, status='pending', chats=[]) => {

  return dispatch => {

    let conversation = {
      name,
      status,
      chats
    }

    const PromiseFN = (resolve, reject) => {
      dispatch({
        type: CHAT_CONVERSATION_ADD,
        payload: conversation
      });
      resolve();
    }
    return new Promise(PromiseFN)
  }

}