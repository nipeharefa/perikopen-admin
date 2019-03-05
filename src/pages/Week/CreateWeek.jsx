import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import WeekForm from './_Form';

class CreateWeek extends Component
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
        <p>Create Week</p>
        <WeekForm />
        <Link to="/week" className="">Kembali</Link>
      </div>
  )
  }
}

export default CreateWeek;