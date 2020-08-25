import React from 'react';
import comments_container from './comments_container';

class CommentItem extends React.Component {
  render() {
    debugger
    return (
      <li>
        <div>{this.props.comment.body}</div><div>{this.props.author.username}</div>
      </li>
    )
  }
}

export default CommentItem;