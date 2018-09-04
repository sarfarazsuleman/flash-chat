/**
 * @namespace components/conversations/conversation-view
 *
 * @export (default) ConversationView
 */

import React, { Component } from 'react';
import PropTypes from 'utils/prop-types';
import Chats from 'components/conversations/chats';
import FormInput from 'components/forms/input';

class ConversationView extends Component {

  constructor(props) {
    super(props);

    this.state = {
      message: ''
    }

    this.handleMessage = this.handleMessage.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleMessage(name, value) {
    this.setState({message: value});
  }

  handleSubmit(e) {
    e.preventDefault();

    console.log('submitting...');
  }

  render() {

    return (
      <div className="conversation-view">
        <Chats chats={this.props.conversation.chats} />

        <form onSubmit={this.handleSubmit}>
          <FormInput
            type="text"
            name="message"
            placeholder="write something..."
            changeHandle={this.handleMessage}
            value={this.state.message}
           />
          <button name="submit" onClick={this.handleSubmit}>+Send</button>
        </form>
      </div>
    )
  }

}

ConversationView.propTypes = {
  conversation: PropTypes.conversation,
}

export default ConversationView;