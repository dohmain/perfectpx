import React from 'react';
import CommentForm from '../comments/comment_form';
import CommentItem from '../comments/comment_item';

class Comments extends React.Component {

  render() {
    debugger
    let commentItems
    if (this.props.comments) {
      commentItems = this.props.comments.map(comment => {
        return (
          <CommentItem key={comment.id} comment={comment} author={this.props.users[comment.user_id]}/>
        )
      })
    }

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
          {commentItems}
        </ul>
      </div>
    )
  }
}

export default Comments;