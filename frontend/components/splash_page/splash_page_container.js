import { connect } from 'react-redux';

import { getPhotos } from '../../actions/photo_actions';
import { getRandomPhoto } from '../../reducers/selectors';

import SplashPage from './splash_page';

const mapStateToProps = (state) => {
  const photo = state.entities.photos ? getRandomPhoto(state.entities.photos) : null;
  return {
    photo
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    getPhotos: () => dispatch(getPhotos())
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(SplashPage);