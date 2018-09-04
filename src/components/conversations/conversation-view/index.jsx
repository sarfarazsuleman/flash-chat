/**
 * @namespace components/conversations/conversation-view
 *
 * @export (default) ConversationView
 */

import React, { Component } from 'react';
import PropTypes from 'utils/prop-types';
import Chats from 'components/conversations/chats';
import FormInput from 'components/forms/input';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { addChat } from 'components/conversations/module';

class ConversationView extends Component {

  constructor(props) {
    super(props);

    this.state = {
      message: '',
      submitting: false,
    }

    this.handleMessage = this.handleMessage.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleMessage(name, value) {
    this.setState({message: value});
  }

  handleSubmit(e) {
    e.preventDefault();

    if(this.state.message === '' || this.state.submitting) {
      return;
    }

    let message = this.state.message;
    this.setState({message:'', submitting:true},()=> {
      this.props.addChat(this.props.idx, message).then(_=>this.setState({submitting:false}));
    })

    
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

const mapStateToProps = (state, props) => ({})

const mapDispatchToProps = dispatch => bindActionCreators({
  addChat,
}, dispatch)

export default connect(mapStateToProps,mapDispatchToProps)(ConversationView);