import { connect } from 'react-redux';
import Chat from '../components/Chat';

function mapStateToProps(state, ownProps) {
  return state.channels.general.messages
}

function mapDispatchToProps(dispatch, ownProps) { return {}; }

const ChatContainer = connect(
  mapStateToProps, 
  mapDispatchToProps
)(Chat);

export default ChatContainer;