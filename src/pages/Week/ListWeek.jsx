import React from 'react';
import { Link } from 'react-router-dom';
import NetworkService from '../../service/network';
import TableWeek from '../../components/WeekComponent/TableWeek';

class ListWeek extends React.Component
{
  state = {
    weeks: []
  }
  componentDidMount() {
    this.getWeek();
  }
  async getWeek() {
    try {
      const { data } = await NetworkService.getWeeks();
      this.setState({ weeks: data});
    }catch(e) {
    }
  }
  render() {
    return (
      <div>
        <Link to="/week/new">Tambah Data Minggu</Link>
        <TableWeek weeks={this.state.weeks} />
      </div>
    )
  }
}

export default ListWeek;