import React from 'react';

class Comments extends React.Component {
  // constructor(props){
  //   super(props)
  // }

  // componentDidMount() {
    
  // }

  render() {
    // let comments = this.props.comments.map(comment => {
    //   return (
    //     <li className='comment-list-item' key={`comment-${comment.id}`}>{comment.body}</li> 
    //   )
    // })

    let comments = this.props.comments.map(comment => {
      return (
        <li className='comment-list-item' key={`comment-${comment.id}`}>{comment.body}</li>
      )
    })

    return (
      <div className='photo-comments-container'>
        <ul>
          {comments}
        </ul>
      </div>
    )
  }
}

export default Comments;