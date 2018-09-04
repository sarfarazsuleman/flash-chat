/**
 * @namespace components/conversations
 *
 * @export (default) Conversations
 */

import React, { Component } from 'react';
import ConversationView from 'components/conversations/conversation-view';
import ConversationList from 'components/conversations/conversation-list';
import Randomizer from 'utils/randomizer';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { addConversation } from './module';

class Conversations extends Component {

  constructor(props) {
    super(props);

    this.state = {
      current: null,
      adding: false,
    }

    this.setCurrent = this.setCurrent.bind(this);
    this.addConversation = this.addConversation.bind(this);
  }

  componentDidMount() {
    if(this.props.conversations.length === 0) {
      this.props.addConversation(Randomizer.getName()).then(_=>this.setState({current:0}));
    }
  }

  setCurrent(current) {
    this.setState({current})
  }

  addConversation(status='active') {
    this.setState({adding: true}, _=> {
      this.props.addConversation(Randomizer.getName(),status).then(_=>this.setState({adding:false}));
    })
    
  }

  render() {
    return (
      <div className="conversations">

        <ConversationList
          conversations={this.props.conversations} 
          current={this.state.current}
          setCurrent={this.setCurrent}
          addConversation={this.addConversation}
        />

        {(this.state.current !== null)?(
          (this.props.conversations[this.state.current].status === 'pending')?('awaiting approval'
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
}, dispatch)

export default connect(mapStateToProps,mapDispatchToProps)(Conversations);