import React from 'react';

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
      formData.append('photo[px]', this.state.pxFile);
    }
    this.props.postPhoto(formData).then((payload) => {
      this.props.history.push(`/photo/${Object.keys(payload.photos)[0]}`)
    })
  }

  render() {
    const preview = this.state.pxURL ? <img className='upload-preview-image' src={this.state.pxURL} /> : null;
    return (
      <div className='session-container'>
        <form className='session-form' onSubmit={this.handleSubmit}>
          <br/>
          <h3>Upload to perfectpx!</h3>
          <input type="file"
            onChange={this.handleFile} />
          {preview}
          <label className='session-input-label'>Title:<br/>
          <input type='text'
            value={this.state.title}
            className='session-input-field'
            onChange={this.handleInput('title')} />
          </label>

          <label className='session-input-label'>Description:<br/>
            <textarea
              value={this.state.description}
              className='upload-text-area'
              onChange={this.handleInput('description')} />
          </label>

          <button className='session-input-button'>Upload!</button>
          <br/>
        </form>
      </div>
    );
  }
}


export default PhotoForm;