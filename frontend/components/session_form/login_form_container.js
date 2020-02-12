import { connect } from 'react-redux';
import { login } from '../../actions/session_actions';
import SessionForm from './session_form';

const mapStateToProps = (state, ownProps) => ({
  formType: 'Log in',
  formTitle: 'Log in to perfectpx',
  path: ownProps.match.path,
});

const mapDispatchToProps = (dispatch) => ({
  action: (user) => dispatch(login(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);