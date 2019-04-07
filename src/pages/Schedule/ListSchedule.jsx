import * as React from 'react';
import { Link } from 'react-router-dom';
import NetworkService from '../../service/network';

class ListSchedule extends React.Component
{
  state = {
    schedules: []
  }
  componentDidMount() {
    this.getSchedules();
  }
  getSchedules = async() =>  {
    const { data } = await NetworkService.getSchedules();
    this.setState({ schedules: data });
  }
  render() {
    return (
      <div>
        <p>Hello List Schedule</p>
        <Link to="/schedule/new">Buat Jadwal Baru</Link>
      </div>
    )
  }
}

export default ListSchedule;