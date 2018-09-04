/**
 * @namespace components/conversations/module
 *
 * @export (const) CHAT_CONVERSATION_ADD
 * @export (func) addConversation
 * @export (default) [reducer function]
 */

import Randomiser from 'utils/randomizer';

export const CHAT_CONVERSATION_ADD = 'CHAT_CONVERSATION_ADD';
export const CHAT_MESSAGE_ADD = 'CHAT_MESSAGE_ADD';
export const CHAT_MESSAGE_APROVE = 'CHAT_MESSAGE_APROVE';
export const CHAT_MESSAGE_DECLINE = 'CHAT_MESSAGE_DECLINE';

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

    case CHAT_MESSAGE_APROVE:
      conversations[action.idx].status = 'active';

      return {
        ...state,
        conversations
      }

    case CHAT_MESSAGE_DECLINE:
      conversations = conversations.splice(action.idx,1);
      console.log(conversations.splice(action.idx,1));

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

export const addChat = (idx, message) => {

  return dispatch => {

    let chat = {
      message,
      direction:'sent',
      timestamp:'timestamp'
    }

    let reply = {
      message: Randomiser.getMessage(),
      direction: 'received',
      timestamp:'timestamp'

    }

    const PromiseFN = (resolve, reject) => {
      dispatch({
        type: CHAT_MESSAGE_ADD,
        idx,
        payload: chat
      });

      dispatch({
        type: CHAT_MESSAGE_ADD,
        idx,
        payload: reply
      });
      resolve();
    }
    return new Promise(PromiseFN)
  }
}

export const approveChat = (idx) => {

  return dispatch => {

    const PromiseFN = (resolve, reject) => {
      dispatch({
        type: CHAT_MESSAGE_APROVE,
        idx,
      });
      resolve();
    }
    return new Promise(PromiseFN)
  }
}

export const declineChat = (idx) => {
  return dispatch => {

    const PromiseFN = (resolve, reject) => {
      dispatch({
        type: CHAT_MESSAGE_DECLINE,
        idx,
      });
      resolve();
    }
    return new Promise(PromiseFN)
  }
}