import { connect } from 'react-redux';
import { update } from '../../actions/session_actions';
import OnboardingForm from './onboarding_form';
import { withRouter } from 'react-router';

const mapStateToProps = state => {
  return ({
    user: state.entities.users[state.session.id],
  })
}

const mapDispatchToProps = dispatch => {
  return ({
    update: (user) => dispatch(update(user))
  })
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(OnboardingForm))