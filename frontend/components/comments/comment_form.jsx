import React from 'react';

class CommentForm extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    debugger
    if (this.props.currentUserId === null) {
      return <>no one logged in</>
    } else {
      return <>put comment form here</>
    }
  }
}

export default CommentForm;