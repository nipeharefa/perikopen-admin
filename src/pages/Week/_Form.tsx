import * as React from 'react';

type Props = {
  onSubmit: any
};

type State = {
  week: {
    code: string
  }
};


class WeekForm extends React.Component<Props, State>
{
  state = {
    week: {
      code: ''
    }
  }
  processForm = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    // console.log('process form and handle callback')
    if (this.props.onSubmit) {
      this.props.onSubmit(this.state);
    }
  }
  handleWeekNameChange = async (e: React.SyntheticEvent<HTMLInputElement>) => {
    const target: HTMLInputElement = e.currentTarget;
    const value = target.value;
    this.setState(prevState => ({
      week: {
        ...prevState.week,
        code: value
      }
    }));
  }
  render() {
    return(
      <form className="uk-form">
        <div>
          <label className="uk-form-label">
            Nama Minggu
          </label>
          <div className="uk-form-controls">
            <input
              className="uk-input"
              type="text"
              placeholder="Nama Minggu"
              onChange={this.handleWeekNameChange}
            />
          </div>
        </div>
        <button className="uk-button uk-button-primary" onClick={this.processForm}>Save</button>
      </form>
    )
  }
}

export default WeekForm;
