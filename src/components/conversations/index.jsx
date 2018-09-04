/**
 * @namespace components/conversations
 *
 * @export (default) Conversations
 */

import React, { Component } from 'react';
import ConversationView from 'components/conversations/conversation-view';
import Randomizer from 'utils/randomizer';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { addConversation } from './module';

class Conversations extends Component {

  constructor(props) {
    super(props);

    this.state = {
      current: null,
    }
  }

  componentDidMount() {
    if(this.props.conversations.length === 0) {
      this.props.addConversation(Randomizer.getName()).then(_=>this.setState({current:0}));
    }
  }

  render() {
    return (
      <div className="conversations">
        {(this.state.current !== null)?(
          <ConversationView 
            conversation={this.props.conversations[this.state.current]}
          />
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