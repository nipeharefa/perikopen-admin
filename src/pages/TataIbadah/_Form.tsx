
import * as React from 'react';

type Props = {
  onSubmit: (data: any) => any
};

type State = {
  agendre: {
    key: string,
  }
};

class ScheduleForm extends React.Component<Props, State>
{
  state = {
    agendre: {
      key: '',
    }
  }
  processForm = async (e: React.SyntheticEvent) => {
    e.preventDefault();

    const { onSubmit } = this.props;
    if (onSubmit) {
      const { agendre } = this.state;
      this.props.onSubmit(agendre);
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
      agendre: {
        ...prevState.agendre,
        ...changes,
      }
    }));
  }
  render() {
      return (
        <form className="uk-form">
            <div>
                <label className="uk-form-label">
                    Tanggal
                </label>
                <div className="uk-form-controls">
                    <input
                    name="key"
                    className="uk-input"
                    type="text"
                    placeholder="Kode Agendre"
                    onChange={this.handleInputChange}
                    />
                </div>
            </div>
            <button className="uk-button uk-button-primary" onClick={this.processForm}>Save</button>
        </form>
      )
  }
}

export default ScheduleForm;
