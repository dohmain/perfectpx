import React from 'react';
import CommentForm from '../comments/comment_form';
import CommentItem from '../comments/comment_item';

class Comments extends React.Component {

  render() {
    let commentItems
    if (this.props.comments) {
      commentItems = Object.values(this.props.comments).map(comment => {
        return (
          <CommentItem key={comment.id} comment={comment} author={comment.username}/>
        )
      })
    }

    let commentForm = this.props.photoId ? (
      <CommentForm 
        currentUserId={this.props.currentUserId}
        photoId={this.props.photoId}
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