import React from 'react';

class CommentForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      body: ""
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleInput(field) {
    return (e) => {
      this.setState({ [field]: e.target.value });
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const newComment = {
      user_id: this.props.currentUserId,
      photo_id: this.props.photoId,
      body: this.state.body
    };
    this.props.postComment(newComment);
    this.setState({ body: "" });
  }

  render() {
    if (this.props.currentUserId === null) {
      return <></>
    } else {
      return (
        <div className="comment-form-container">
          <form className="comment-form" onSubmit={this.handleSubmit}>
            <div id='comment-input-box'>
              <label>
                <input
                  type='text'
                  className='input-field comment-input-field'
                  value={this.state.body}
                  placeholder="Add a comment"
                  onChange={this.handleInput('body')}
                />
              </label>
            </div>
            <div id='comment-post-button'>
              <button className='btn comment-btn'>Post</button>
            </div>
          </form>
        </div>
      )
    }
  }
}

export default CommentForm;