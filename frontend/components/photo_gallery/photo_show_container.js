import { connect } from 'react-redux';
import PhotoShow from './photo_show';
import { getPhoto } from '../../actions/photo_actions'
import { withRouter } from 'react-router';

const mapStateToProps = (state, ownProps) => {
  const photo = state.entities.photos[ownProps.match.params.photoId] || {}
  const user = state.entities.users[photo.creator_id] || {}
  const comments = state.entities.comments
  return {
    photo,
    user,
    comments
  }
}

const mapDispatchToProps = dispatch => ({
  getPhoto: id => dispatch(getPhoto(id))
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PhotoShow))