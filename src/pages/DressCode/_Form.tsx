import * as React from 'react';

type Props = {
  onSubmit: any
};

type State = {
  color: {
    key: string
  }
};


class DressCodeForm extends React.Component<Props, State>
{
  state = {
    color: {
      key: ''
    }
  }
  processForm = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (this.props.onSubmit) {
      this.props.onSubmit(this.state.color);
    }
  }
  handleInputChange = (event: React.SyntheticEvent<HTMLInputElement>) => {
    const target: HTMLInputElement = event.currentTarget;

    const name: string = target.name;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    const changes: object = {
      [name]: value
    };

    this.setState(prevState => ({
      color: {
        ...prevState.color,
        ...changes,
      }
    }));
  }
  render() {
    return(
      <form className="uk-form">
        <div>
          <label className="uk-form-label">
            Kode Warna
          </label>
          <div className="uk-form-controls">
            <input
              name="key"
              className="uk-input"
              type="text"
              placeholder="Kode Warna"
              onChange={this.handleInputChange}
            />
          </div>
        </div>
        <button className="uk-button uk-button-primary" onClick={this.processForm}>Save</button>
      </form>
    )
  }
}

export default DressCodeForm;
