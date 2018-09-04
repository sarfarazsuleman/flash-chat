/**
 * @namespace components/conversations/module
 *
 * @export (const) CHAT_CONVERSATION_ADD
 * @export (func) addConversation
 * @export (default) [reducer function]
 */

export const CHAT_CONVERSATION_ADD = 'CHAT_CONVERSATION_ADD';
export const CHAT_MESSAGE_ADD = 'CHAT_MESSAGE_ADD';

const initialState = {
  conversations: []
}

export default (state = initialState, action) => {

  let conversations = state.conversations;
  
  switch(action.type) {
    case CHAT_CONVERSATION_ADD:
      conversations.push(action.payload);

      return {
        ...state,
        conversations
      }

    case CHAT_MESSAGE_ADD: 
      conversations[action.idx].chats.push(action.payload);

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

export const addChat = (idx, message, direction) => {

  return dispatch => {

    let chat = {
      message,
      direction,
      timestamp:'timestamp'
    }

    const PromiseFN = (resolve, reject) => {
      dispatch({
        type: CHAT_MESSAGE_ADD,
        idx,
        payload: chat
      });
      resolve();
    }
    return new Promise(PromiseFN)
  }
}