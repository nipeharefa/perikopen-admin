// @flow
import * as React from 'react';

type Props = { /* ... */ };

type State = {
  week: {
    name: string
  }
};


class WeekForm extends React.Component<Props, State>
{
  state = {
    week: {
      name: ''
    }
  }
  processForm = async (e: SyntheticEvent<>) => {
    e.preventDefault();
    console.log('process form and handle callback')
    console.log(this.state);
  }
  handleWeekNameChange = async (e: SyntheticInputEvent<>) => {
    const value = e.target.value;
    this.setState(prevState => ({
      week: {
        ...prevState.week,
        name: value
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