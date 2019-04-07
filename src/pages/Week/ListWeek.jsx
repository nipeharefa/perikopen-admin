import React from 'react';
import { Link } from 'react-router-dom';
import NetworkService from '../../service/network';

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
    console.log(this.state.weeks);
    const WeeksRows = () => {
      if (!this.state.weeks.length) {
        return (
          <tr>
            <td>No Data</td>
          </tr>
        )
      }

      return this.state.weeks.map((week) => (
        <tr key={week.id}>
          <td>{week.code}</td>  
        </tr>
      ))
    }
    return (
      <div>
        <Link to="/week/new">Tambah Data Minggu</Link>
        <table className="uk-table">
          <thead>
            <tr>
              <td>Code</td>
            </tr>
          </thead>
          <tbody>
            <WeeksRows />
          </tbody>
        </table>
      </div>
    )
  }
}

export default ListWeek;