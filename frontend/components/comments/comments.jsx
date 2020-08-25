import React from 'react';
import CommentForm from '../comments/comment_form';

class Comments extends React.Component {

  // componentDidMount() {
  //   this.props.getComments();
  // }

  render() {

    let comments = this.props.comments.map(comment => {
      return (
        <li className='comment-list-item' key={`comment-${comment.id}`}>{comment.body}</li>
      )
    })

    let commentForm = this.props.photo ? (
      <CommentForm 
        currentUserId={this.props.currentUserId}
        photoId={this.props.photo.id ? this.props.photo.id : null}
        postComment={this.props.postComment}
      />
    ) : (
      <></>
    );
     

    return (
      <div className='photo-comments-container'>
        {commentForm}
        <ul>
          {comments}
        </ul>
      </div>
    )
  }
}

export default Comments;