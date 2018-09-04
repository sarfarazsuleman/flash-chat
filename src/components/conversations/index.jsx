/**
 * @namespace components/conversations
 *
 * @export (default) Conversations
 */

import React, { Component } from 'react';
import ConversationView from 'components/conversations/conversation-view';
import ConversationList from 'components/conversations/conversation-list';
import ConversationPending from 'components/conversations/conversation-pending';
import Randomizer from 'utils/randomizer';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { addConversation, approveChat, declineChat } from './module';

class Conversations extends Component {

  constructor(props) {
    super(props);

    this.state = {
      current: null,
      adding: false,
      modifying: false,
    }

    this.setCurrent = this.setCurrent.bind(this);
    this.addConversation = this.addConversation.bind(this);
    this.approve = this.approve.bind(this);
    this.reject = this.reject.bind(this);
  }

  componentDidMount() {
    setTimeout(_=>this.addConversation('pending'),1000);
  }

  setCurrent(current) {
    this.setState({current})
  }

  addConversation(status='active') {
    this.setState({adding: true}, _=> {
      this.props.addConversation(Randomizer.getName(),status).then(_=>this.setState({adding:false}));
    })
  }

  approve(idx) {
    this.setState({modifying: true}, _=> {
      this.props.approveChat(idx).then(_=>this.setState({modifying:false}));
    })
  }

  reject(idx) {
    this.setState({modifying: true,current:null}, _=> {
      this.props.declineChat(idx).then(_=>this.setState({modifying:false}));
    })
  }

  render() {
    return (
      <div className="conversations">

        <h1>Conversations</h1>
        <ConversationList
          conversations={this.props.conversations} 
          current={this.state.current}
          setCurrent={this.setCurrent}
          addConversation={this.addConversation}
        />

        {(this.state.current !== null)?(
          (this.props.conversations[this.state.current].status === 'pending')?(
            <ConversationPending 
              conversation={this.props.conversations[this.state.current]}
              current={this.state.current}
              approve={this.approve}
              reject={this.reject}
            />
          ):(
            <ConversationView 
              conversation={this.props.conversations[this.state.current]}
              idx={this.state.current}
            />
          )
        ):null}
      </div>
    )
  }
}


const mapStateToProps = (state, props) => ({
  conversations: state.conversations.conversations,
})

const mapDispatchToProps = dispatch => bindActionCreators({
  addConversation,
  approveChat,
  declineChat
}, dispatch)

export default connect(mapStateToProps,mapDispatchToProps)(Conversations);