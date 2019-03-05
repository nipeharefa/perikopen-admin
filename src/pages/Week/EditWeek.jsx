import React, { Component } from 'react';

import WeekForm from './_Form';

class EditWeek extends Component
{
  state = {
      isNew: false
  }
  componentDidMount() {
    // this.props
    console.log(this.props);
    // @todo
    // cek jika ada parameter id,
    // jika ada fetch dan tukar isNew Jadi false
  }
  render() {
    return (
      <div>
        <p>Edit Week</p>
        <WeekForm />
      </div>
  )
  }
}

export default EditWeek;