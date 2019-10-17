import React from 'react';

type Props = {
  onSubmit: (data: any) => any
}

type State = {
  books: {
    key: string
  }
}


class BookForm extends React.Component<Props, State>
{
  state : State = {
    books: {
      key: ''
    }
  }
  processForm = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    // console.log('process form and handle callback')
    if (this.props.onSubmit) {
      this.props.onSubmit(this.state);
    }
  }
  render() {
    return (
      <form className="uk-form">
        <div>
          <label className="">Key</label>
          <div className="uk-form-controls">
            <input
              className="uk-input"
              type="text"
              placeholder="Nama Minggu"
            />
          </div>
        </div>
        <button
          onClick={this.processForm}
          className="uk-button uk-button-primary">
            Save
        </button>
      </form>
    )
  }
}

export default BookForm;
