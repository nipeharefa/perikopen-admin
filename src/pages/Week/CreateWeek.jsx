import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import WeekForm from './_Form';

const baseUrl = process.env.REACT_APP_API_URL || 'https://perikopen-api.nias.dev';
const newAxios = axios.create({
  baseURL: baseUrl,
  headers: {
    'Accept': 'application/json',
  }
});

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
  formSubmitHandler = async(state) => {
    console.log(state);
    try {
      await newAxios.post('/api/weeks', state.week, {
        headers: {
          'Content-Type': 'application/json',
        }
      });
      this.props.history.push('/week')
    } catch(e) {
    }
  }
  render() {
    return (
      <div>
        <p>Create Week</p>
        <WeekForm
          onSubmit={this.formSubmitHandler}
        />
        <Link to="/week" className="">Kembali</Link>
      </div>
  )
  }
}

export default CreateWeek;