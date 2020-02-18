import { connect } from 'react-redux';
import PhotoShow from './photo_show';
import { getPhoto } from '../../actions/photo_actions'

const mapStateToProps = (state, ownProps) => ({
  photo: state.entities.photos[ownProps.match.params.photoId]
})

const mapDispatchToProps = dispatch => ({
  getPhoto: id => dispatch(getPhoto(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(PhotoShow)