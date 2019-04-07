import * as React from 'react';
import { Link } from 'react-router-dom';
import TableSchedule from '../../components/ScheduleComponent/TableSchedule';
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
        <Link to="/schedule/new">Buat Jadwal Baru</Link>
        <TableSchedule schedules={this.state.schedules} />
      </div>
    )
  }
}

export default ListSchedule;