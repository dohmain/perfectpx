import React from 'react';

class CommentItem extends React.Component {
  render() {
    return (
      <li className='comment-li'>
        <div className='comment-item' id='comment-author-container'>
          <span id='comment-author-display'>{this.props.author}</span>
        </div>
        <div className='comment-item' id='comment-body-container'>
          <span id='comment-body-display'>{this.props.comment.body}</span>
        </div>
      </li>
    )
  }
}

export default CommentItem;