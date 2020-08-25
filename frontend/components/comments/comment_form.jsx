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
      return <>no one logged in</>
    } else {
      return (
        <div className="comment-form-container">
          <form className="comment-form" onSubmit={this.handleSubmit}>
            <label>
              <input
                type='text'
                className='input-field comment-input-field'
                value={this.state.body}
                onChange={this.handleInput('body')}
              />
            </label>
            <button className='btn comment-btn'>Comment</button>
          </form>
        </div>
      )
    }
  }
}

export default CommentForm;