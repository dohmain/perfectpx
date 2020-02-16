import { connect } from 'react-redux';
import { update } from '../../actions/session_actions';
import MyInformation from './my_information';

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

export default connect(mapStateToProps, mapDispatchToProps)(MyInformation)