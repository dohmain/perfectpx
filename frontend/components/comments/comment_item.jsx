import React from 'react';

class CommentItem extends React.Component {
  render() {
    return (
      <li>
        <div>{this.props.comment.body}</div><div>{this.props.author}</div>
      </li>
    )
  }
}

export default CommentItem;