import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions'
import TopNav from './top_nav';

const mapStateToProps = (state) => {
  return {
    currentUser: state.session
  }
};

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
});

export default connect(mapStateToProps, mapDispatchToProps)(TopNav);