import * as React from 'react';
import { Link } from 'react-router-dom';
import ScheduleForm from './_Form';
import NetworkService from '../../service/network';

class CreateSchedule extends React.Component
{
  formSubmitHandler = async(formData: object) => {
    try {
      const { data } = await NetworkService.createSchedule(formData);
      return;
    }catch(e) {
      return;
    }
  }
  render() {
    return (
      <div>
        <p>Buat Jadwal</p>
        <ScheduleForm onSubmit={this.formSubmitHandler} />
        <Link to="/schedule" className="">Kembali</Link>
      </div>
    )
  }
}

export default CreateSchedule;