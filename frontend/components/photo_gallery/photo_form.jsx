import React from 'react';
import { Link } from 'react-router-dom';

class PhotoForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      title: '',
      description: '',
      creator_id: this.props.currentUserId,
      pxFile: null,
      pxURL: null,
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleFile = this.handleFile.bind(this);
  }

  handleInput(field) {
    return (e) => {
      this.setState({ [field]: e.target.value });
    }
  }

  handleFile(e) {
    const file = e.currentTarget.files[0];
    const fileReader = new FileReader();
    fileReader.onloadend = () => {
      this.setState({pxFile: file, pxURL: fileReader.result});
    };
    if (file) {
      fileReader.readAsDataURL(file);
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append('photo[title]', this.state.title);
    formData.append('photo[description]', this.state.description);
    formData.append('photo[creator_id]', this.state.creator_id);
    if (this.state.pxFile) {
      formData.append('photo[pxFile]', this.state.pxFile);
    }
    // this.props.postPhoto(formData)
    $.ajax({
      url: '/api/photos',
      method: 'POST',
      data: formData,
      contentType: false,
      processData: false
    })
  }

  render() {
    console.log(this.state);
    const preview = this.state.pxURL ? <img src={this.state.pxURL} /> : null;
    return (
      <form onSubmit={this.handleSubmit}>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <label>Title:
        <input type='text'
          value={this.state.title}
          onChange={this.handleInput('title')} />
        </label>

        <label>Description:
          <textarea
            value={this.state.description}
            onChange={this.handleInput('description')} />
        </label>

        <input type="file"
          onChange={this.handleFile} />
        <button>Upload!</button>
        {preview}
      </form>
    );
  }
}


export default PhotoForm;