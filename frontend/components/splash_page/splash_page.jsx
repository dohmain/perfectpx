import React from 'react';
import { Link } from 'react-router-dom';

class SplashPage extends React.Component {
  // constructor(props){
  //   super(props);
  // }

  componentDidMount() {
    this.props.getPhotos().then(() => {

      const splashURL = this.props.photo ? this.props.photo.pxURL : null;
      // document.getElementById('a').style.backgroundImage="url(images/img.jpg)"
      debugger
      document.getElementById("splash-image").style.backgroundImage = `url(${splashURL})`;
    })
  }

  render() {
    debugger;
    return (
      <div>
        <div className='main-content-box splash' id='splash-image'>
          <div className="splash-image-content">
            <h1>Discover and share the world's best photos</h1>
            <p>Get inspired with incredible photos from diverse styles and genres around the world. We're not guided by fads—just great photography</p>
            <Link to='/signup' className='splash-signup-button'>Sign Up</Link>
          </div>
        </div>
        <div>
          <div className="splash-different">
            <div className="splash-different-heading">
              <h1>What makes us different</h1>
            </div>
            <div className="different-items">
              <div className="different-item">
                <h3>Grow as a photographer</h3>
                <p>Get immediate exposure with your first upload. Our Pulse algorithm surfaces new photographs and photographers, ensuring your photos are seen by the community so you receive valuable feedback on day one.</p>
              </div>
              <div className="different-item">
                <h3>Build your career</h3>
                <p>Present yourself as a professional. Get hired by displaying your services, create a Directory listing, showcase the workshops you're holding, and create Galleries to highlight your work.</p>
              </div>
              <div className="different-item">
                <h3>See how you're performing</h3>
                <p>With Statistics and Pulse you get valuable insights into how your photos are performing and how you rank in comparison to other photographers in the community.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="join-bottom-container">
          <div className="join-bottom">
            <h1 id="join-h1">Join our photography community today</h1>
            <p id="join-bottom-p">We want fresh, creative talent like you. Join our global network of like-minded creators to be inspired by incredible photos daily, and get rewarded for your talents.</p>
            <div id="signup-button-container"><Link to='/signup' className='splash-signup-button'>Sign Up</Link></div>          
          </div>
        </div>
      </div>

    )
  }
};

export default SplashPage;